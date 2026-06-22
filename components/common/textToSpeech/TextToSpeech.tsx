'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  text: string;
  className?: string;
  theme?: 'light' | 'dark';
};

type SpeakStatus = 'idle' | 'loading' | 'speaking' | 'paused' | 'error';

export default function TextToSpeech({ text, className, theme = 'light' }: Props) {
  const normalizedText = useMemo(() => text?.trim() ?? '', [text]);

  const cancelRef = useRef<boolean>(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const [status, setStatus] = useState<SpeakStatus>('idle');
  const [progressPercent, setProgressPercent] = useState(0);

  const totalCharsRef = useRef(0);
  const prefixCharsRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      cancelRef.current = true;
      try {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
      } catch {
        // Ignore.
      }
    };
  }, []);

  const chunkText = (input: string, maxLen: number) => {
    const text = input.replace(/\s+/g, ' ').trim();
    if (!text) return [];

    // Greedy chunking by character length, preferring sentence boundaries.
    const parts = text.split(/(?<=[.!?])\s+/g);
    const chunks: string[] = [];
    let current = '';

    for (const part of parts) {
      const next = current ? `${current} ${part}` : part;
      if (next.length <= maxLen) {
        current = next;
        continue;
      }

      if (current) chunks.push(current);

      if (part.length <= maxLen) {
        current = part;
        continue;
      }

      // Fallback: split long sentence.
      let i = 0;
      while (i < part.length) {
        const slice = part.slice(i, i + maxLen);
        if (slice) chunks.push(slice);
        i += maxLen;
      }
      current = '';
    }

    if (current) chunks.push(current);
    return chunks;
  };

  const stop = () => {
    cancelRef.current = true;
    try {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch {
      // Ignore.
    }
    setProgressPercent(0);
    setStatus('idle');
  };

  const pause = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.pause();
    } catch {
      // Ignore.
    }
    setStatus('paused');
  };

  const resume = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.resume();
    } catch {
      // Ignore.
    }
    setStatus('speaking');
  };

  const speak = () => {
    if (!normalizedText) return;
    if (typeof window === 'undefined') return;
    if (!window.speechSynthesis) {
      setStatus('error');
      return;
    }

    cancelRef.current = false;
    setStatus('loading');
    // Clear any previously queued speech.
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore.
    }

    const maxChunkLength = 4800;
    const chunks = chunkText(normalizedText, maxChunkLength);

    if (!chunks.length) {
      setProgressPercent(0);
      setStatus('idle');
      return;
    }

    setProgressPercent(0);
    totalCharsRef.current = normalizedText.length;
    prefixCharsRef.current = [0];
    for (const c of chunks) {
      prefixCharsRef.current.push((prefixCharsRef.current.at(-1) ?? 0) + c.length);
    }

    const speakChunk = (index: number) => {
      if (cancelRef.current) return;
      if (index >= chunks.length) {
        setProgressPercent(0);
        setStatus('idle');
        return;
      }

      setStatus('speaking');
      const totalChars = totalCharsRef.current || 1;
      const prefix = prefixCharsRef.current[index] ?? 0;
      setProgressPercent((prefix / totalChars) * 100);

      const utterance = new window.SpeechSynthesisUtterance(chunks[index]);
      utteranceRef.current = utterance;
      utterance.lang = 'en-US';
      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onend = () => {
        if (cancelRef.current) return;
        const totalChars = totalCharsRef.current || 1;
        const nextPrefix = prefixCharsRef.current[index + 1] ?? 0;
        setProgressPercent((nextPrefix / totalChars) * 100);
        speakChunk(index + 1);
      };

      utterance.onerror = () => {
        if (cancelRef.current) return;
        // Helps debugging when the browser blocks speech synthesis.
        // eslint-disable-next-line no-console
        console.error('TextToSpeech utterance error');
        if (index === 0) {
          setProgressPercent(0);
          setStatus('error');
        } else speakChunk(index + 1);
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch {
        // eslint-disable-next-line no-console
        console.error('TextToSpeech speak() threw');
        if (index === 0) {
          setProgressPercent(0);
          setStatus('error');
        } else speakChunk(index + 1);
      }
    };

    try {
      speakChunk(0);
    } catch {
      setProgressPercent(0);
      setStatus('error');
    }
  };

  const isDisabled = !normalizedText || status === 'loading';

  const minutes = useMemo(() => {
    const words = normalizedText.split(/\s+/).filter(Boolean).length;
    if (!words) return 1;
    // Typical reading speed: ~130 WPM.
    return Math.max(1, Math.ceil(words / 130));
  }, [normalizedText]);

  const onPrimaryClick = () => {
    if (status === 'speaking' || status === 'loading') pause();
    else if (status === 'paused') resume();
    else speak();
  };

  const isPlaying = status === 'speaking' || status === 'loading';

  const waveformBars = useMemo(() => {
    const pattern = [2, 3, 4, 7, 5, 8, 6, 9, 5, 7, 4, 3];
    const count = 200;
    return Array.from({ length: count }).map((_, i) => {
      const base = pattern[i % pattern.length];
      const wobble = i % 6 === 0 ? 2 : i % 6 === 2 ? 1 : 0;
      return Math.min(12, Math.max(2, base + wobble));
    });
  }, []);

  const filledCount = Math.floor((progressPercent / 100) * waveformBars.length);

  const isError = status === 'error';
  const activeBarClass = isError ? 'bg-error' : 'bg-primary';
  const inactiveBarClass = isError ? 'bg-error/35' : 'bg-primary/20';

  const isDark = theme === 'dark';

  const buttonClass = isError
    ? 'flex w-full items-center gap-6 rounded-xl border border-error px-5 py-4 disabled:cursor-not-allowed disabled:opacity-60'
    : isDark
      ? 'flex w-full items-center gap-6 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 disabled:cursor-not-allowed disabled:opacity-60'
      : 'flex w-full items-center gap-6 rounded-xl border border-lightShade1 bg-lightShad2 px-5 py-4 disabled:cursor-not-allowed disabled:opacity-60';

  const titleClass = isDark ? 'text-slate-50' : 'text-slate-900';
  const subtitleClass = isDark ? 'text-slate-300' : 'text-slate-500';

  return (
    <div className={className}>
      <button
        type='button'
        onClick={onPrimaryClick}
        disabled={isDisabled}
        className={buttonClass}
        aria-label='Listen to this article'
      >
        <div className='flex flex-none items-center gap-4'>
          <div className='relative flex size-11 items-center justify-center rounded-full bg-primary/10'>
            {/* Stop control (does not restart pause/resume flow) */}
            {status === 'speaking' || status === 'loading' || status === 'paused' ? (
              <span
                role='button'
                tabIndex={0}
                className={`absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full text-primary shadow-sm ${
                  isDark ? 'border border-slate-700 bg-slate-900' : 'bg-white'
                }`}
                aria-label='Stop'
                onClick={(e) => {
                  e.stopPropagation();
                  stop();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation();
                    stop();
                  }
                }}
              >
                <span className='text-[10px] leading-none'>×</span>
              </span>
            ) : null}

            <div className='flex size-9 items-center justify-center rounded-full bg-primary text-white'>
              {status === 'speaking' || status === 'loading' ? (
                // Pause icon
                <svg width='18' height='18' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <rect x='6' y='5' width='3.5' height='10' rx='1' />
                  <rect x='10.5' y='5' width='3.5' height='10' rx='1' />
                </svg>
              ) : (
                // Play icon (idle/paused)
                <svg width='18' height='18' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <path d='M7 5.5v9l8-4.5-8-4.5Z' />
                </svg>
              )}
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <span className={`text-sm font-semibold ${titleClass}`}>Listen To This Article</span>
            <span
              className={
                status === 'error' ? 'text-xs font-semibold text-error' : `text-xs font-medium ${subtitleClass}`
              }
            >
              {status === 'error' ? 'Unable to play audio' : `${minutes} minutes`}
            </span>

            {status === 'speaking' || status === 'paused' || status === 'loading' ? (
              <span className='mt-1 text-[11px] font-semibold text-primary'>{`${Math.round(progressPercent)}%`}</span>
            ) : null}
          </div>
        </div>

        {/* Waveform bars (fills remaining width while playing) */}
        <div className='hidden h-6 min-w-0 flex-1 items-end gap-px overflow-hidden md:flex' aria-hidden='true'>
          {waveformBars.map((h, i) => {
            const filled = i < filledCount;
            return (
              <span
                key={i}
                className={[
                  'w-[2px] rounded-none',
                  filled ? activeBarClass : inactiveBarClass,
                  isPlaying ? 'tts-bar-wave tts-bar-animate' : '',
                ].join(' ')}
                style={{
                  height: h,
                  animationDelay: `${i * 25}ms`,
                }}
              />
            );
          })}
        </div>
      </button>
    </div>
  );
}
