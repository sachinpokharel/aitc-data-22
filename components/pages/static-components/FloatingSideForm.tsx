'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FloatingSideFormProps {
  preselectedService?: string;
  preselectedIndustry?: string;
  formName?: string;
}

interface FormData {
  name: string;
  email: string;
  contact: string;
  company: string;
  message: string;
}

export default function FloatingSideForm({
  preselectedService,
  preselectedIndustry,
  formName = 'floating-side-form',
}: FloatingSideFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.aitc.ai';
      await fetch(`${baseUrl}/connectus/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          service: preselectedService,
          industry: preselectedIndustry,
          source: formName,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });
      setIsSubmitted(true);
      reset();
    } catch {
      setIsSubmitted(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Hidden on mobile — StickyMobileCTA handles small screens
    <div className='fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-end'>
      {/* Collapsed tab */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label='Open contact form'
          className='flex items-center gap-2 rounded-l-xl bg-primary px-3 py-4 text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl'
        >
          <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2} className='size-5 shrink-0'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
          </svg>
          <span className='[writing-mode:vertical-lr] rotate-180 text-xs font-bold tracking-widest uppercase'>
            Book a Call
          </span>
        </button>
      )}

      {/* Expanded panel */}
      {isOpen && (
        <div className='w-80 rounded-l-2xl bg-white shadow-2xl ring-1 ring-black/5'>
          {/* Header */}
          <div className='flex items-center justify-between rounded-tl-2xl bg-secondary px-5 py-4'>
            <div>
              <p className='text-sm font-bold text-white'>Book a Strategy Call</p>
              <p className='mt-0.5 text-xs text-white/60'>Reply within 24 hours</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label='Close form'
              className='rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white'
            >
              <svg fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2} className='size-4'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className='px-5 py-5'>
            {isSubmitted ? (
              <div className='py-6 text-center'>
                <div className='mx-auto mb-3 flex size-14 items-center justify-center rounded-full bg-green-50'>
                  <svg fill='currentColor' viewBox='0 0 24 24' className='size-7 text-green-600'>
                    <path fillRule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z' clipRule='evenodd' />
                  </svg>
                </div>
                <p className='text-sm font-bold text-secondary'>Got it — thank you!</p>
                <p className='mt-1 text-xs text-grey'>We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className='flex flex-col gap-3'>
                <div>
                  <label htmlFor={`${formName}-name`} className='mb-1 block text-xs font-medium text-mainBlack'>
                    Full Name *
                  </label>
                  <input
                    id={`${formName}-name`}
                    type='text'
                    placeholder='Your name'
                    className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus:border-primary ${errors.name ? 'border-error' : 'border-lightShade1'}`}
                    {...register('name', { required: 'Required' })}
                  />
                  {errors.name && <p className='mt-0.5 text-xs text-red-400'>{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor={`${formName}-email`} className='mb-1 block text-xs font-medium text-mainBlack'>
                    Work Email *
                  </label>
                  <input
                    id={`${formName}-email`}
                    type='email'
                    placeholder='you@company.com'
                    className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus:border-primary ${errors.email ? 'border-error' : 'border-lightShade1'}`}
                    {...register('email', {
                      required: 'Required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                    })}
                  />
                  {errors.email && <p className='mt-0.5 text-xs text-red-400'>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor={`${formName}-contact`} className='mb-1 block text-xs font-medium text-mainBlack'>
                    Phone
                  </label>
                  <input
                    id={`${formName}-contact`}
                    type='tel'
                    placeholder='+1 (555) 000-0000'
                    className='w-full rounded-lg border border-lightShade1 px-3 py-2 text-sm outline-none transition-colors focus:border-primary'
                    {...register('contact')}
                  />
                </div>

                <div>
                  <label htmlFor={`${formName}-company`} className='mb-1 block text-xs font-medium text-mainBlack'>
                    Company
                  </label>
                  <input
                    id={`${formName}-company`}
                    type='text'
                    placeholder='Your company'
                    className='w-full rounded-lg border border-lightShade1 px-3 py-2 text-sm outline-none transition-colors focus:border-primary'
                    {...register('company')}
                  />
                </div>

                <div>
                  <label htmlFor={`${formName}-message`} className='mb-1 block text-xs font-medium text-mainBlack'>
                    How can we help? *
                  </label>
                  <textarea
                    id={`${formName}-message`}
                    rows={3}
                    placeholder='Describe your use case...'
                    className={`w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus:border-primary ${errors.message ? 'border-error' : 'border-lightShade1'}`}
                    {...register('message', { required: 'Required' })}
                  />
                  {errors.message && <p className='mt-0.5 text-xs text-red-400'>{errors.message.message}</p>}
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition-all hover:shadow-[0_4px_14px_rgba(255,117,0,0.3)] disabled:opacity-60'
                >
                  {isSubmitting ? 'Sending...' : 'Book a Strategy Call'}
                </button>

                <p className='text-center text-xs text-grey'>NDA available · No sales spam</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
