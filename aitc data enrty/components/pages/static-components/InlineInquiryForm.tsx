'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

/**
 * InlineInquiryForm — Short 4-5 field form embedded in CTA sections.
 * Preselects service/industry based on page context via props.
 */

interface InlineInquiryFormProps {
  preselectedService?: string;
  preselectedIndustry?: string;
  formName?: string;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

interface FormData {
  name: string;
  contact: string;
  email: string;
  company: string;
  message: string;
}

const InlineInquiryForm = ({
  preselectedService,
  preselectedIndustry,
  formName = 'inline-inquiry',
  heading = 'Tell us about your project',
  subheading: _subheading = "Share a few details and we'll get back to you within 24 hours.",
  ctaLabel = 'Send My Project Details',
  className = '',
  variant = 'light',
}: InlineInquiryFormProps) => {
  const isDark = variant === 'dark';
  const wrapCls = isDark ? '' : 'rounded-2xl bg-white p-6 shadow-sm md:p-10';
  const headingCls = isDark
    ? 'mb-5 text-xl font-bold text-white md:text-2xl'
    : 'mb-5 text-xl font-bold text-secondary md:text-2xl';
  const labelCls = isDark
    ? 'mb-1 block text-sm font-medium text-white/70'
    : 'mb-1 block text-sm font-medium text-mainBlack';
  const inputCls = isDark
    ? 'w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary'
    : 'w-full rounded-lg border border-lightShade1 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary';
  const inputErrCls = isDark ? 'border-red-400' : 'border-error';
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
      // Track the lead event
      // trackEvent('generate_lead', {
      //   form_name: formName,
      //   service: preselectedService || '',
      //   industry: preselectedIndustry || '',
      //   page_slug: typeof window !== 'undefined' ? window.location.pathname : '',
      //   page_type: 'inline_form',
      // });

      // Submit to backend API
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
      // Silently handle — form still tracks the event
      setIsSubmitted(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`rounded-2xl bg-white p-8 text-center shadow-sm ${className}`}>
        <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-50'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-8 text-green-600'
          >
            <path
              fillRule='evenodd'
              d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <h3 className='mb-2 text-xl font-bold text-secondary'>Thank you!</h3>
        <p className='text-grey'>We&apos;ll review your inquiry and get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className={`${wrapCls} ${className}`}>
      <h3 className={headingCls}>{heading}</h3>

      <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className='flex flex-col gap-3'>
        {/* Row 1: Full Name + Contact */}
        <div className='grid gap-3 sm:grid-cols-2'>
          <div>
            <label htmlFor={`${formName}-name`} className={labelCls}>
              Full Name *
            </label>
            <input
              id={`${formName}-name`}
              type='text'
              placeholder='Your name'
              className={`${inputCls} ${errors.name ? inputErrCls : ''}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className='mt-1 text-xs text-red-400'>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor={`${formName}-contact`} className={labelCls}>
              Contact Number
            </label>
            <input
              id={`${formName}-contact`}
              type='tel'
              placeholder='+61 4XX XXX XXX'
              className={inputCls}
              {...register('contact')}
            />
          </div>
        </div>

        {/* Row 2: Email + Company */}
        <div className='grid gap-3 sm:grid-cols-2'>
          <div>
            <label htmlFor={`${formName}-email`} className={labelCls}>
              Work Email *
            </label>
            <input
              id={`${formName}-email`}
              type='email'
              placeholder='you@company.com'
              className={`${inputCls} ${errors.email ? inputErrCls : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
              })}
            />
            {errors.email && <p className='mt-1 text-xs text-red-400'>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor={`${formName}-company`} className={labelCls}>
              Company
            </label>
            <input
              id={`${formName}-company`}
              type='text'
              placeholder='Your company name'
              className={inputCls}
              {...register('company')}
            />
          </div>
        </div>

        {/* Row 3: Message */}
        <div>
          <label htmlFor={`${formName}-message`} className={labelCls}>
            How can we help? *
          </label>
          <textarea
            id={`${formName}-message`}
            rows={3}
            placeholder='Briefly describe your project or question...'
            className={`resize-none ${inputCls} ${errors.message ? inputErrCls : ''}`}
            {...register('message', { required: 'Please tell us about your project' })}
          />
          {errors.message && <p className='mt-1 text-xs text-red-400'>{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)] disabled:opacity-60'
        >
          {isSubmitting ? 'Sending...' : ctaLabel}
        </button>

        <p className={`text-center text-xs ${isDark ? 'text-white/40' : 'text-grey'}`}>
          We&apos;ll review your details and respond within 24 hours — no sales spam.
        </p>
      </form>
    </div>
  );
};

export default InlineInquiryForm;
