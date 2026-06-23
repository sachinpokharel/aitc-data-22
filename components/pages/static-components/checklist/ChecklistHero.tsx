'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ChecklistHeroProps {
  onOpenModal: () => void;
  heroTrustItems: string[];
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  description: string;
  source: string;
  formSubtitle?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ChecklistHero({
  onOpenModal,
  heroTrustItems,
  titleLine1,
  titleLine2,
  tagline,
  description,
  source,
  formSubtitle,
}: ChecklistHeroProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter your name and email.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/send-checklist-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { message?: string };
        throw new Error(data.message ?? 'Something went wrong.');
      }
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className='relative overflow-hidden bg-lightShad2'>
      {/* Decorative blobs */}
      <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-secondary/5 blur-2xl' />
      {/* Dot grid */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[7%]'
        style={{
          backgroundImage: 'radial-gradient(circle, #FF7500 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className='common-padding relative py-12 md:py-20 lg:py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-12'>

            {/* ── Left: copy ─────────────────────────── */}
            <div>
              <span className='mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm'>
                <span className='size-1.5 rounded-full bg-primary' />
                Free Resource
              </span>

              <h1 className='mb-4 text-3xl font-bold leading-tight text-secondary sm:text-4xl md:text-5xl'>
                {titleLine1}
                <br />
                <span className='text-primary'>{titleLine2}</span>
              </h1>

              <p className='mb-3 text-base font-bold text-secondary sm:text-lg md:text-xl'>
                {tagline}
              </p>

              <p className='mb-6 max-w-xl text-sm leading-relaxed text-mainBlack sm:text-base md:text-lg'>
                {description}
              </p>

              <ul className='mb-7 space-y-2.5'>
                {heroTrustItems.map((item) => (
                  <li key={item} className='flex items-center gap-3 text-sm font-semibold text-mainBlack'>
                    <span className='flex size-5 shrink-0 items-center justify-center rounded-full bg-primary'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white' className='size-3'>
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTAs — stack on mobile, row on sm+ */}
              <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                <button
                  onClick={onOpenModal}
                  className='inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto'
                >
                  <DownloadIcon />
                  Download Free Checklist
                </button>
                <Link
                  href='#checklist'
                  className='inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-secondary px-7 py-3.5 font-medium text-secondary transition-colors hover:bg-secondary hover:text-white sm:w-auto'
                >
                  View Interactive Checklist
                </Link>
              </div>
            </div>

            {/* ── Right: form card ────────────────────── */}
            <div className='rounded-2xl border-t-4 border-t-primary border-x border-b border-lightShade1 bg-white shadow-xl'>
              {status === 'success' ? (
                <div className='flex flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-12'>
                  <div className='mb-5 flex size-16 items-center justify-center rounded-full bg-green-50'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#16a34a'
                      strokeWidth={2.5}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='size-8'
                    >
                      <polyline points='20 6 9 17 4 12' />
                    </svg>
                  </div>
                  <h3 className='mb-2 text-xl font-bold text-secondary sm:text-2xl'>You&apos;re all set!</h3>
                  <p className='mb-6 text-sm leading-relaxed text-grey'>
                    Your checklist PDF has been sent to your email. Scroll down to use the interactive version and
                    track your progress in real time.
                  </p>
                  <Link
                    href='#checklist'
                    className='w-full rounded-md bg-primary py-3.5 text-center font-semibold text-white transition-opacity hover:opacity-90'
                  >
                    View Interactive Checklist
                  </Link>
                </div>
              ) : (
                <div className='px-5 py-7 sm:px-8 sm:py-9'>
                  <h2 className='mb-1 text-lg font-bold text-secondary sm:text-xl'>Download Free Checklist</h2>
                  <p className='mb-5 text-sm leading-relaxed text-grey'>
                    {formSubtitle ?? 'Get instant access to the complete checklist PDF.'}
                  </p>

                  <form onSubmit={handleSubmit} noValidate className='space-y-4'>
                    <div>
                      <label htmlFor='hero-name' className='mb-1.5 block text-xs font-bold text-mainBlack'>
                        Full Name <span className='text-primary'>*</span>
                      </label>
                      <input
                        id='hero-name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Sarah Johnson'
                        autoComplete='name'
                        required
                        className='w-full rounded-lg border border-lightShade1 bg-lightShad2 px-4 py-3 text-sm text-mainBlack outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10'
                      />
                    </div>

                    <div>
                      <label htmlFor='hero-email' className='mb-1.5 block text-xs font-bold text-mainBlack'>
                        Business Email <span className='text-primary'>*</span>
                      </label>
                      <input
                        id='hero-email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='sarah@company.com'
                        autoComplete='email'
                        required
                        className='w-full rounded-lg border border-lightShade1 bg-lightShad2 px-4 py-3 text-sm text-mainBlack outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10'
                      />
                    </div>

                    {status === 'error' && (
                      <p className='text-xs font-semibold text-error'>{errorMsg}</p>
                    )}

                    <button
                      type='submit'
                      disabled={status === 'loading'}
                      className='mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 font-bold text-white transition hover:opacity-90 disabled:opacity-60 sm:py-4'
                    >
                      {status === 'loading' ? (
                        'Sending…'
                      ) : (
                        <>
                          <DownloadIcon />
                          Get My Checklist
                        </>
                      )}
                    </button>
                  </form>

                  <p className='mt-4 flex items-center justify-center gap-1.5 text-xs text-grey'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='size-3 shrink-0'
                    >
                      <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
                      <path d='M7 11V7a5 5 0 0 1 10 0v4' />
                    </svg>
                    Your information is secure. No spam, ever.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='size-4 shrink-0'
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='7 10 12 15 17 10' />
      <line x1='12' y1='15' x2='12' y2='3' />
    </svg>
  );
}
