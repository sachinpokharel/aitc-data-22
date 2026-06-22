'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import type { HeadingPart } from './BuildHero';

export interface BuildHeroWithFormData {
  badge: string;
  badgeVariant?: 'primary' | 'secondary';
  bgVariant?: 'light' | 'orange';
  dotColor?: string;
  heading: HeadingPart[];
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  trustItems: string[];
  form: {
    preselectedService?: string;
    formName: string;
    informationPlaceholder?: string;
  };
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  information: string;
}

const EMPTY: FormState = { name: '', email: '', phone: '', information: '' };

export default function BuildHeroWithForm({ data }: { data: BuildHeroWithFormData }) {
  const {
    badge,
    badgeVariant = 'primary',
    bgVariant = 'light',
    dotColor = '#FF7500',
    heading,
    description,
    primaryCTA,
    secondaryCTA,
    trustItems,
    form,
  } = data;

  const [fields, setFields] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sectionBg = bgVariant === 'orange' ? 'bg-primary/10' : 'bg-lightShad2';
  const dotOpacity = bgVariant === 'orange' ? 'opacity-10' : 'opacity-[7%]';
  const badgeCls =
    badgeVariant === 'secondary'
      ? 'border-secondary/20 text-secondary'
      : 'border-primary/30 text-primary';

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!fields.name.trim()) e.name = 'Name is required';
    if (!fields.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Enter a valid email';
    if (!fields.phone.trim()) e.phone = 'Phone is required';
    if (!fields.information.trim()) e.information = 'Please share some details';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.aitc.ai';
      await fetch(`${baseUrl}/connectus/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          contact: fields.phone,
          message: fields.information,
          service: form.preselectedService,
          source: form.formName,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });
    } catch {
      // silent
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      setFields(EMPTY);
    }
  }

  function change(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  const inputBase =
    'w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary';
  const inputOk = 'border-lightShade1 bg-white';
  const inputErr = 'border-red-400 bg-red-50';

  return (
    <section className={`relative overflow-hidden ${sectionBg}`}>
      {/* Background decorations */}
      <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-primary/5 blur-2xl' />
      <div
        className={`pointer-events-none absolute inset-0 ${dotOpacity}`}
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className='common-padding relative py-16 md:py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>

            {/* Left — copy */}
            <div>
              <span
                className={`mb-6 inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm ${badgeCls}`}
              >
                <span className='size-1.5 rounded-full bg-primary' />
                {badge}
              </span>

              <h1 className='mb-6 text-4xl font-bold leading-tight text-secondary md:text-5xl'>
                {heading.map((part, i) =>
                  part.highlight ? (
                    <span key={i} className='text-primary'>{part.text}</span>
                  ) : (
                    <Fragment key={i}>{part.text}</Fragment>
                  )
                )}
              </h1>

              <p className='mb-8 max-w-xl text-lg leading-relaxed text-mainBlack md:text-xl'>
                {description}
              </p>

              <div className='flex flex-col gap-4 sm:flex-row'>
                <Link
                  href={primaryCTA.href}
                  className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-colors hover:opacity-90'
                >
                  {primaryCTA.label}
                </Link>
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className='rounded-md border-2 border-secondary px-7 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white'
                  >
                    {secondaryCTA.label}
                  </Link>
                )}
              </div>

              <ul className='mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mainBlack'>
                {trustItems.map((item) => (
                  <li key={item}>
                    <span className='text-primary'>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — lead form */}
            <div className='w-full max-w-md lg:ml-auto'>
              <div className='rounded-2xl border border-lightShade1 bg-white p-6 shadow-xl md:p-8'>

                {submitted ? (
                  <div className='flex flex-col items-center py-8 text-center'>
                    <div className='mb-4 flex size-14 items-center justify-center rounded-full bg-green-50'>
                      <svg className='size-7 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                      </svg>
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-secondary'>Thanks, we'll be in touch!</h3>
                    <p className='text-sm text-grey'>We'll review your details and respond within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 className='mb-1 text-xl font-bold text-secondary'>Get a free estimate</h3>
                    <p className='mb-6 text-sm text-grey'>We'll respond within 24 hours — no spam.</p>

                    <form onSubmit={(e) => void handleSubmit(e)} noValidate className='flex flex-col gap-4'>

                      {/* Name */}
                      <div>
                        <label className='mb-1.5 block text-sm font-medium text-secondary'>
                          Full Name <span className='text-primary'>*</span>
                        </label>
                        <input
                          type='text'
                          placeholder='Your full name'
                          value={fields.name}
                          onChange={change('name')}
                          className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                        />
                        {errors.name && <p className='mt-1 text-xs text-red-500'>{errors.name}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className='mb-1.5 block text-sm font-medium text-secondary'>
                          Email <span className='text-primary'>*</span>
                        </label>
                        <input
                          type='email'
                          placeholder='you@company.com'
                          value={fields.email}
                          onChange={change('email')}
                          className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                        />
                        {errors.email && <p className='mt-1 text-xs text-red-500'>{errors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className='mb-1.5 block text-sm font-medium text-secondary'>
                          Phone <span className='text-primary'>*</span>
                        </label>
                        <input
                          type='tel'
                          placeholder='+1 234 567 890'
                          value={fields.phone}
                          onChange={change('phone')}
                          className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
                        />
                        {errors.phone && <p className='mt-1 text-xs text-red-500'>{errors.phone}</p>}
                      </div>

                      {/* Information */}
                      <div>
                        <label className='mb-1.5 block text-sm font-medium text-secondary'>
                          Project Information <span className='text-primary'>*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder={form.informationPlaceholder ?? "Tell us about your project — what you're building, who it's for, and your key requirements..."}
                          value={fields.information}
                          onChange={change('information')}
                          className={`resize-none ${inputBase} ${errors.information ? inputErr : inputOk}`}
                        />
                        {errors.information && <p className='mt-1 text-xs text-red-500'>{errors.information}</p>}
                      </div>

                      {/* Submit */}
                      <button
                        type='submit'
                        disabled={submitting}
                        className='w-full rounded-lg bg-primary py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-[0_8px_20px_rgba(255,117,0,0.25)] disabled:opacity-60'
                      >
                        {submitting ? 'Sending…' : 'Submit'}
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Trust strip */}
              <div className='mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1.5'>
                {['Reply within 24 hours', 'NDA available', 'Free scoping call'].map((item) => (
                  <span key={item} className='flex items-center gap-1 text-xs text-grey'>
                    <svg className='size-3 shrink-0 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
