'use client';

import { useEffect, useRef, useState } from 'react';

interface ChecklistLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
  productName?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ChecklistLeadModal({ isOpen, onClose, source, productName }: ChecklistLeadModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);

  // Focus first input on open
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      setErrorMsg('');
      setTimeout(() => nameRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const handleSubmit = async () => {
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
      setTimeout(() => { onClose(); setStatus('idle'); setName(''); setEmail(''); }, 1400);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  const displayName = productName ?? 'Software Development Project Checklist';

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Download checklist form'
      className='fixed inset-0 z-[999] flex items-end justify-center p-0 sm:items-center sm:p-4'
    >
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-secondary/70 backdrop-blur-sm'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Card — full-width sheet on mobile, centred card on sm+ */}
      <div className='relative z-10 w-full rounded-t-2xl border-t-4 border-t-primary bg-white shadow-2xl sm:max-w-md sm:rounded-2xl'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-lightShad2 text-grey transition hover:bg-lightShade1'
          aria-label='Close'
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-4'>
            <line x1='18' y1='6' x2='6' y2='18' /><line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>

        {/* Drag handle — mobile only */}
        <div className='mx-auto mt-3 h-1 w-10 rounded-full bg-lightShade1 sm:hidden' />

        <div className='px-5 py-6 sm:px-8 sm:py-9'>
          {status === 'success' ? (
            <div className='flex flex-col items-center py-4 text-center'>
              <div className='mb-4 flex size-14 items-center justify-center rounded-full bg-green-50'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='#16a34a' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-7'>
                  <polyline points='20 6 9 17 4 12' />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-bold text-secondary'>Checklist sent!</h3>
              <p className='text-base text-grey'>Check your inbox — the PDF is on its way.</p>
            </div>
          ) : (
            <>
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-secondary'>Send the checklist to your inbox</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>
                  Enter your name and email, and we&apos;ll send the{' '}
                  <strong className='text-mainBlack'>{displayName} PDF</strong> directly to your inbox.
                </p>
              </div>

              <div className='space-y-4'>
                <input
                  ref={nameRef}
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Full name'
                  autoComplete='name'
                  className='w-full rounded-lg border border-lightShade1 bg-lightShad2 px-4 py-3.5 text-base text-mainBlack outline-none transition placeholder:text-grey focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10'
                />
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Business email'
                  autoComplete='email'
                  onKeyDown={(e) => { if (e.key === 'Enter') void handleSubmit(); }}
                  className='w-full rounded-lg border border-lightShade1 bg-lightShad2 px-4 py-3.5 text-base text-mainBlack outline-none transition placeholder:text-grey focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10'
                />

                {status === 'error' && (
                  <p className='text-base font-semibold text-error'>{errorMsg}</p>
                )}

                <button
                  onClick={() => void handleSubmit()}
                  disabled={status === 'loading'}
                  className='flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-base font-bold text-white transition hover:opacity-90 disabled:opacity-60'
                >
                  {status === 'loading' ? (
                    'Sending…'
                  ) : (
                    <>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-4 shrink-0'>
                        <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                        <polyline points='7 10 12 15 17 10' />
                        <line x1='12' y1='15' x2='12' y2='3' />
                      </svg>
                      Email Me the PDF
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={onClose}
                className='mt-4 block w-full text-center text-base text-grey transition hover:text-mainBlack'
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
