/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { FiArrowLeft, FiBookOpen, FiMoon, FiSun } from 'react-icons/fi';
import { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { type InsightIndividual } from '@/types/insights/insights';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TextToSpeech from '@/components/common/textToSpeech/TextToSpeech';

import AuthorDetails from './AuthorDetails';
import RelatedInsights from './RelatedInsights';
import RelatedService from './RelatedService';

const Editor = dynamic(() => import('@/components/common/editor/Editor'), { ssr: false });

function extractTextFromBlockNoteContent(input: unknown) {
  const parts: string[] = [];

  const pushText = (value: unknown) => {
    if (typeof value !== 'string') return;
    const t = value.trim();
    if (!t) return;
    parts.push(t);
  };

  // BlockNote typically stores user-visible text as inline nodes like:
  // { type: 'text', text: 'Hello world' }
  const visitInlineTextOnly = (node: unknown) => {
    if (!node) return;

    if (Array.isArray(node)) {
      node.forEach(visitInlineTextOnly);
      return;
    }

    if (typeof node !== 'object') return;

    const obj = node as Record<string, unknown>;
    const type = typeof obj.type === 'string' ? obj.type.toLowerCase() : '';

    if (type === 'text' && typeof obj.text === 'string') {
      pushText(obj.text);
    } else if (typeof obj.plainText === 'string') {
      // Some nodes may expose `plainText` directly.
      pushText(obj.plainText);
    }

    for (const value of Object.values(obj)) {
      if (value && (typeof value === 'object' || Array.isArray(value))) {
        visitInlineTextOnly(value);
      }
    }
  };

  visitInlineTextOnly(input);

  const result = parts.join(' ').replace(/\s+/g, ' ').trim();
  if (result) return result;

  // Fallback: only collect string values from keys literally named `text` or `plainText`.
  const fallbackParts: string[] = [];
  const visitFallback = (node: unknown) => {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(visitFallback);
      return;
    }
    if (typeof node !== 'object') return;

    const obj = node as Record<string, unknown>;
    for (const [key, value] of Object.entries(obj)) {
      if ((key === 'text' || key === 'plainText') && typeof value === 'string') {
        const t = value.trim();
        if (t) fallbackParts.push(t);
      } else if (value && (typeof value === 'object' || Array.isArray(value))) {
        visitFallback(value);
      }
    }
  };
  visitFallback(input);

  return fallbackParts.join(' ').replace(/\s+/g, ' ').trim();
}

function extractHeadingsFromBlockNoteContent(input: unknown) {
  type Heading = { text: string; level: number };
  const headings: Heading[] = [];

  const extractInlineText = (node: unknown) => {
    const parts: string[] = [];

    const visit = (n: unknown) => {
      if (!n) return;
      if (Array.isArray(n)) return n.forEach(visit);
      if (typeof n !== 'object') return;

      const obj = n as Record<string, unknown>;

      if (obj?.type === 'text' && typeof obj?.text === 'string') {
        const trimmed = obj.text.trim();
        if (trimmed) parts.push(trimmed);
      }

      if (typeof obj?.plainText === 'string') {
        const trimmed = obj.plainText.trim();
        if (trimmed) parts.push(trimmed);
      }

      for (const value of Object.values(obj)) {
        if (value && (typeof value === 'object' || Array.isArray(value))) visit(value);
      }
    };

    visit(node);
    return parts.join(' ').replace(/\s+/g, ' ').trim();
  };

  if (!Array.isArray(input)) return headings;

  for (const block of input) {
    if (!block || typeof block !== 'object') continue;
    const obj = block as Record<string, unknown>;
    const type = typeof obj.type === 'string' ? obj.type.toLowerCase() : '';

    if (type === 'heading' || type.startsWith('heading')) {
      const props = typeof obj.props === 'object' && obj.props !== null ? (obj.props as Record<string, unknown>) : null;
      const levelValue = props?.level;
      const level = typeof levelValue === 'number' ? levelValue : 2;

      const text = extractInlineText(block);
      if (text) headings.push({ text, level });
    }
  }

  return headings;
}

const InsightWrapper = ({ data }: { data: InsightIndividual }) => {
  const [readingMode, setReadingMode] = useState(false);
  const [readingTheme, setReadingTheme] = useState<'light' | 'dark'>('light');
  const readingContentRef = useRef<HTMLDivElement | null>(null);

  const normalizeForMatch = (value: string) => value.replace(/\s+/g, ' ').trim().toLowerCase();

  useEffect(() => {
    document.body.classList.toggle('reading-mode-active', readingMode);

    if (readingMode && readingTheme === 'dark') {
      document.body.classList.add('reading-mode-dark');
    } else {
      document.body.classList.remove('reading-mode-dark');
    }

    return () => {
      document.body.classList.remove('reading-mode-active');
      document.body.classList.remove('reading-mode-dark');
    };
  }, [readingMode, readingTheme]);

  let editorContent: unknown = [];
  let ttsText = data?.title ? `${data.title.trim()}` : '';

  if (data?.description) {
    try {
      editorContent = JSON.parse(data.description);
      const extracted = extractTextFromBlockNoteContent(editorContent);
      ttsText = extracted || ttsText;

      if (data?.title) {
        const title = data.title.trim();
        if (title) ttsText = `${title}. ${ttsText}`;
      }

      const maxChars = 20000; // Avoid very large payloads to TTS.
      if (ttsText.length > maxChars) ttsText = `${ttsText.slice(0, maxChars)}...`;
    } catch {
      editorContent = [];
      // Keep the fallback title so TTS UI doesn't disappear.
      ttsText = data?.title ? `${data.title.trim()}` : '';
    }
  }

  const readingSurfaceClassName =
    readingTheme === 'dark' ? 'reading-mode-content reading-mode-content--dark' : 'reading-mode-content';

  const tocItems = useMemo(() => {
    if (!readingMode) return [];
    try {
      return extractHeadingsFromBlockNoteContent(editorContent).slice(0, 25);
    } catch {
      return [];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readingMode, data?.description]);

  const tocTitleClass = readingTheme === 'dark' ? 'text-slate-300' : 'text-slate-500';

  const scrollToHeading = (headingText: string) => {
    const container = readingContentRef.current;
    if (!container) return;

    const target = normalizeForMatch(headingText);
    const candidates = container.querySelectorAll<HTMLElement>('h1,h2,h3,h4,h5,p,li');
    const arr = Array.from(candidates);

    const match = arr.find((el) => normalizeForMatch(el.innerText).includes(target));
    match?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const readingHeaderBtnClass = `inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-md border touch-manipulation transition-colors ${
    readingTheme === 'dark'
      ? 'border-slate-600 bg-slate-900 text-slate-200 hover:bg-slate-800'
      : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
  }`;

  if (readingMode) {
    return (
      <CommonAnimation className='common-padding mx-auto flex w-full max-w-[1600px] flex-col items-center gap-10 py-14 sm:py-20 lg:py-24'>
        <div className='w-full max-w-full px-2'>
          {/* Narrow screens: back + theme on one row; title full width below (no squeezed title). */}
          <div className='flex flex-col gap-4 sm:hidden'>
            <div className='flex w-full items-center justify-between gap-3'>
              <button
                type='button'
                onClick={() => {
                  setReadingTheme('light');
                  setReadingMode(false);
                }}
                aria-label='Exit reading mode'
                className={readingHeaderBtnClass}
              >
                <FiArrowLeft size={20} aria-hidden='true' />
              </button>
              <button
                type='button'
                onClick={() => setReadingTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
                aria-label='Toggle reading theme'
                className={readingHeaderBtnClass}
              >
                {readingTheme === 'dark' ? (
                  <FiSun size={20} aria-hidden='true' />
                ) : (
                  <FiMoon size={20} aria-hidden='true' />
                )}
              </button>
            </div>
            <h1
              className={`text-balance px-1 text-center text-2xl font-black leading-tight ${
                readingTheme === 'dark' ? 'text-slate-50' : 'text-slate-900'
              }`}
            >
              {data?.title}
            </h1>
          </div>

          {/* sm+: single row — fixed-width controls, title flexes with min-w-0 */}
          <div className='hidden items-start gap-3 sm:flex'>
            <button
              type='button'
              onClick={() => {
                setReadingTheme('light');
                setReadingMode(false);
              }}
              aria-label='Exit reading mode'
              className={readingHeaderBtnClass}
            >
              <FiArrowLeft size={20} aria-hidden='true' />
            </button>
            <h1
              className={`min-w-0 flex-1 text-balance pt-0.5 text-center text-3xl font-black leading-tight ${
                readingTheme === 'dark' ? 'text-slate-50' : 'text-slate-900'
              } md:text-4xl`}
            >
              {data?.title}
            </h1>
            <button
              type='button'
              onClick={() => setReadingTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
              aria-label='Toggle reading theme'
              className={readingHeaderBtnClass}
            >
              {readingTheme === 'dark' ? (
                <FiSun size={20} aria-hidden='true' />
              ) : (
                <FiMoon size={20} aria-hidden='true' />
              )}
            </button>
          </div>
        </div>

        <div className='grid w-full gap-8 lg:grid-cols-[360px_1fr]'>
          {tocItems.length ? (
            <aside
              className={`sticky top-6 hidden self-start pr-2 lg:block ${readingTheme === 'dark' ? 'text-slate-300' : ''}`}
            >
              <div className={`mb-2 text-xs font-black uppercase tracking-wide ${tocTitleClass}`}>
                Table of contents
              </div>
              <ul className='flex flex-col gap-1'>
                {tocItems.map((h, idx) => (
                  <li key={`${h.text}-${idx}`}>
                    <button
                      type='button'
                      className={`text-left text-sm transition-colors ${
                        readingTheme === 'dark'
                          ? 'pl-3 text-slate-300/80 hover:bg-primary/5 hover:text-primary'
                          : 'pl-3 text-slate-600 hover:bg-primary/5 hover:text-primary'
                      }`}
                      onClick={() => scrollToHeading(h.text)}
                    >
                      <span style={{ marginLeft: Math.max(0, h.level - 2) * 10 }}>{h.text}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}

          <section className='min-w-0'>
            {ttsText ? (
              <div className='mb-8'>
                <TextToSpeech text={ttsText} className='w-full' theme={readingTheme} />
              </div>
            ) : null}

            {data?.description ? (
              <div className={readingSurfaceClassName} ref={readingContentRef}>
                <Editor content={editorContent} theme={readingTheme} />
              </div>
            ) : null}
          </section>
        </div>
      </CommonAnimation>
    );
  }

  return (
    <CommonAnimation className='common-padding mx-auto flex max-w-[1600px] flex-col gap-14 py-14 sm:py-20 lg:flex-row lg:justify-evenly lg:gap-16 lg:py-24'>
      <CommonAnimation className='w-full xl:w-3/5'>
        <div className='mb-4 flex flex-wrap items-center justify-between gap-3'>
          <span className='text-sm font-semibold text-slate-900'>Article</span>
          <button
            type='button'
            onClick={() => setReadingMode(true)}
            className='flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary/90'
          >
            <FiBookOpen size={16} aria-hidden='true' />
            Reading mode
          </button>
        </div>

        {ttsText ? (
          <div className='mb-6 w-full'>
            <TextToSpeech text={ttsText} className='w-full' />
          </div>
        ) : null}

        {data?.description ? <Editor content={editorContent} theme='light' /> : null}
      </CommonAnimation>

      <div className='flex w-full flex-col gap-12 xl:w-2/5'>
        <AuthorDetails details={data?.createdBy} updatedAt={data?.updatedAt} />
        <RelatedInsights related={data?.relatedInsight} />
        <RelatedService related={data?.relatedService} />
      </div>
    </CommonAnimation>
  );
};

export default InsightWrapper;
