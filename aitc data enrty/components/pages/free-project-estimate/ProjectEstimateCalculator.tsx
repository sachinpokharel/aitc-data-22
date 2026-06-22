/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { estimateContactSchema, type EstimateContactData } from '@/src/schemas/projectEstimateSchema';
import { cn } from '@/utils/cn';
import { postData } from '@/utils/postData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LuLoader } from 'react-icons/lu';
import { useState } from 'react';
import Link from 'next/link';

// ── Data ──────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    step: 1 as const,
    key: 'industry' as const,
    question: 'What is your primary industry vertical?',
    options: [
      {
        value: 'FINANCE',
        label: 'Finance & Fintech',
        description: 'Transaction intensive interfaces with built-in banking-grade standard compliance protocols.',
      },
      {
        value: 'HEALTHCARE',
        label: 'Healthcare & Lifesciences',
        description: 'Patient record management tools compliant with medical data isolation regulations.',
      },
      {
        value: 'ECOMMERCE',
        label: 'E-Commerce & Digital Retail',
        description: 'Conversion focused storefront channels with inventory and payment configurations.',
      },
      {
        value: 'SAAS',
        label: 'SaaS & Enterprise Systems',
        description: 'Multi-tenant cloud architectures featuring subscription billing pipelines.',
      },
      {
        value: 'OTHER',
        label: 'Other Domain Verticals',
        description: 'Fully tailored, custom scope templates aligned to your specific business field.',
      },
    ],
  },
  {
    step: 2 as const,
    key: 'platform' as const,
    question: 'What platform are you building for?',
    options: [
      {
        value: 'WEB',
        label: 'Web Application',
        description: 'Modern, high-performance web portals customized for business workflows.',
      },
      {
        value: 'MOBILE',
        label: 'Mobile App (iOS/Android)',
        description: 'Optimized native or hybrid smartphone applications built for App Stores.',
      },
      {
        value: 'BOTH',
        label: 'Both Web & Mobile',
        description: 'Full omnichannel presence sharing a single high-efficiency backend.',
      },
    ],
  },
  {
    step: 3 as const,
    key: 'complexity' as const,
    question: 'How complex is the core functionality?',
    options: [
      {
        value: 'BASIC',
        label: 'Basic',
        description: 'Simple informational pages, CMS, or landing pages without user accounts.',
      },
      {
        value: 'MEDIUM',
        label: 'Medium',
        description: 'User authentication, payment processing, third-party API integrations.',
      },
      {
        value: 'ADVANCED',
        label: 'Advanced',
        description: 'Real-time features, AI/ML capabilities, complex multi-step workflows.',
      },
    ],
  },
  {
    step: 4 as const,
    key: 'design' as const,
    question: 'What level of design is needed?',
    options: [
      {
        value: 'BASIC',
        label: 'Basic Template / UI Library',
        description: 'Standard UI component libraries with minimal customization.',
      },
      {
        value: 'CUSTOM',
        label: 'Custom UI/UX Design',
        description: 'Tailored design language fully aligned with your brand identity.',
      },
      {
        value: 'PREMIUM',
        label: 'Premium Branding & Animations',
        description: 'High-fidelity animations, micro-interactions, and distinctive branding.',
      },
    ],
  },
  {
    step: 5 as const,
    key: 'urgency' as const,
    question: "What is your project's level of urgency?",
    options: [
      { value: 'LOW', label: 'Low Urgency', description: 'Flexible delivery schedule' },
      { value: 'MEDIUM', label: 'Medium Urgency', description: 'Standard timeline priority' },
      { value: 'HIGH', label: 'High Urgency', description: 'Critical, expedited launch' },
    ],
  },
] as const;

type AnswerKey = (typeof QUESTIONS)[number]['key'];
type Answers = Record<AnswerKey, string>;

const getLabel = (key: AnswerKey, value: string): string => {
  const q = QUESTIONS.find((item) => item.key === key);
  return q?.options.find((o) => o.value === value)?.label ?? value;
};

// ── Sub-components ────────────────────────────────────────────────────────────

const RadioIcon = ({ selected }: { selected: boolean }) => (
  <div
    className={cn(
      'flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200',
      selected ? 'border-primary' : 'border-[#C8C8D8]'
    )}
  >
    {selected && <div className='size-3 rounded-full bg-primary' />}
  </div>
);

const ProgressBar = ({ filled }: { filled: number }) => (
  <div className='mb-4 flex gap-1.5'>
    {[1, 2, 3, 4, 5].map((s) => (
      <div
        key={s}
        className={cn(
          'h-1 flex-1 rounded-full transition-all duration-300',
          filled >= s ? 'bg-primary' : 'bg-[#E5E5F0]'
        )}
      />
    ))}
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────

type AppStep = 1 | 2 | 3 | 4 | 5 | 'contact' | 'result';

const ProjectEstimateCalculator = () => {
  const [step, setStep] = useState<AppStep>(1);
  const [answers, setAnswers] = useState<Answers>({
    industry: '',
    platform: '',
    complexity: '',
    design: '',
    urgency: '',
  });
  const [submittedName, setSubmittedName] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EstimateContactData>({
    resolver: yupResolver(estimateContactSchema),
    mode: 'onChange',
  });

  // Current question data (null on contact / result steps)
  const currentQuestion = typeof step === 'number' ? QUESTIONS[step - 1] : null;
  const currentAnswer = currentQuestion ? answers[currentQuestion.key] : '';

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) setStep(5);
    else if (step === 5) setStep('contact');
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
    else if (step === 5) setStep(4);
  };

  const onSubmit = async (data: EstimateContactData) => {
    try {
      console.log({
        full_name: data.full_name,
        email: data.email,
        industry: answers.industry,
        platform: answers.platform,
        complexity: answers.complexity,
        design: answers.design,
        urgency: answers.urgency,
      });
      setSubmitError(null);
      await postData('/estimate/request', {
        full_name: data.full_name,
        email: data.email,
        industry: answers.industry,
        platform: answers.platform,
        complexity: answers.complexity,
        design: answers.design,
        urgency: answers.urgency,
      });
      setSubmittedName(data.full_name);
      setSubmittedEmail(data.email);
      setStep('result');
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-lightShade1 px-4 py-8'>
      {/* Page heading */}
      <div className='mb-10 max-w-2xl text-center'>
        <p className='mb-3 text-sm font-bold uppercase tracking-widest text-primary'>Interactive Tool</p>
        <h1 className='mb-4 text-4xl font-black text-secondary xmd:text-5xl'>Calculate Your Project Cost</h1>
        <p className='text-mainBlack'>
          Get an instant, high-level estimate for your custom software project. Answer a few quick questions about your
          technical requirements and complexity.
        </p>
      </div>

      {/* Card */}
      <div className='w-full max-w-2xl rounded-2xl bg-white p-5 shadow-[0_4px_40px_rgba(0,0,0,0.08)] xmd:p-8'>
        {/* ── Question steps 1–3 ── */}
        {typeof step === 'number' && currentQuestion && (
          <>
            <ProgressBar filled={step} />
            <p className='mb-6 text-center text-sm text-grey'>Question {step} of 5</p>

            <h2 className='mb-6 text-center text-2xl font-black text-secondary'>{currentQuestion.question}</h2>

            {step === 1 || step === 5 ? (
              /* Cards grid layout for industry (step 1) and urgency (step 5) */
              <div
                className='grid grid-cols-2 gap-3 xmd:grid-cols-3'
                role='radiogroup'
                aria-label={currentQuestion.question}
              >
                {currentQuestion.options.map((opt) => {
                  const isSelected = currentAnswer === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type='button'
                      role='radio'
                      aria-checked={isSelected}
                      onClick={() => setAnswers((prev) => ({ ...prev, [currentQuestion.key]: opt.value }))}
                      className={cn(
                        'flex h-full flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200',
                        isSelected ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'
                      )}
                    >
                      <div className='flex flex-col gap-1'>
                        <span
                          className={cn(
                            'text-sm font-bold leading-snug',
                            isSelected ? 'text-primary' : 'text-mainBlack'
                          )}
                        >
                          {opt.label}
                        </span>
                        <span className='line-clamp-3 text-xs text-grey'>{opt.description}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Vertical list layout for Q1–3 */
              <div className='flex flex-col gap-3' role='radiogroup' aria-label={currentQuestion.question}>
                {currentQuestion.options.map((opt) => {
                  const isSelected = currentAnswer === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type='button'
                      role='radio'
                      aria-checked={isSelected}
                      onClick={() => setAnswers((prev) => ({ ...prev, [currentQuestion.key]: opt.value }))}
                      className={cn(
                        'flex items-center justify-between gap-4 rounded-xl border p-5 text-left transition-all duration-200',
                        isSelected ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'
                      )}
                    >
                      <div className='flex flex-col gap-1'>
                        <span className={cn('text-base font-bold', isSelected ? 'text-primary' : 'text-mainBlack')}>
                          {opt.label}
                        </span>
                        <span className='text-sm text-grey'>{opt.description}</span>
                      </div>
                      <RadioIcon selected={isSelected} />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Navigation */}
            <div className={cn('mt-8 flex items-center', step > 1 ? 'justify-between' : 'justify-end')}>
              {step > 1 && (
                <button
                  type='button'
                  onClick={handleBack}
                  className='text-base text-grey transition-colors hover:text-mainBlack'
                >
                  Back
                </button>
              )}
              <button
                type='button'
                onClick={handleNext}
                disabled={!currentAnswer}
                className='rounded bg-primary px-8 py-[0.78125rem] text-lg text-white transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)] disabled:cursor-not-allowed disabled:opacity-50'
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* ── Contact step ── */}
        {step === 'contact' && (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className='mb-2 text-center text-2xl font-black text-secondary'>Almost done!</h2>
            <p className='mb-8 text-center text-mainBlack'>Where should we send your detailed estimate summary?</p>

            <div className='flex flex-col gap-5'>
              {/* Full Name */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='est-full_name' className='text-sm font-black text-mainBlack'>
                  Full Name <span className='text-error'>*</span>
                </label>
                <input
                  id='est-full_name'
                  type='text'
                  placeholder='John Doe'
                  {...register('full_name')}
                  className={cn(
                    'w-full rounded border border-border bg-lightShad2 px-4 py-3 text-mainBlack placeholder:text-grey focus:border-primary focus:outline-none',
                    errors.full_name && 'border-error'
                  )}
                />
                {errors.full_name && <span className='text-sm font-medium text-error'>{errors.full_name.message}</span>}
              </div>

              {/* Email */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='est-email' className='text-sm font-black text-mainBlack'>
                  Email <span className='text-error'>*</span>
                </label>
                <input
                  id='est-email'
                  type='email'
                  placeholder='john@company.com'
                  {...register('email')}
                  className={cn(
                    'w-full rounded border border-border bg-lightShad2 px-4 py-3 text-mainBlack placeholder:text-grey focus:border-primary focus:outline-none',
                    errors.email && 'border-error'
                  )}
                />
                {errors.email && <span className='text-sm font-medium text-error'>{errors.email.message}</span>}
              </div>
            </div>

            {submitError && <p className='mt-4 text-sm font-medium text-error'>{submitError}</p>}

            <button
              type='submit'
              disabled={isSubmitting}
              className='mt-6 flex w-full items-center justify-center gap-2 rounded bg-primary py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)] disabled:opacity-70'
            >
              {isSubmitting && <LuLoader className='animate-spin' />}
              Reveal My Estimate
            </button>

            <p className='mt-3 text-center text-xs text-grey'>We&#39;ll also email a summary for your reference.</p>
          </form>
        )}

        {/* ── Result step ── */}
        {step === 'result' && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-center text-2xl font-black text-secondary'>We&#39;ve received your request!</h2>

            {/* Submission summary */}
            <div className='w-full rounded-xl border border-border bg-lightShad2 p-5'>
              <p className='mb-4 text-sm font-bold text-mainBlack'>Submission Summary</p>
              <div className='grid grid-cols-1 gap-x-6 gap-y-4 xmd:grid-cols-2'>
                {(
                  [
                    { label: 'Full Name', value: submittedName },
                    { label: 'Email', value: submittedEmail },
                    { label: 'Industry', value: getLabel('industry', answers.industry) },
                    { label: 'Platform', value: getLabel('platform', answers.platform) },
                    { label: 'Complexity', value: getLabel('complexity', answers.complexity) },
                    { label: 'Design', value: getLabel('design', answers.design) },
                    { label: 'Urgency', value: getLabel('urgency', answers.urgency) },
                  ] as const
                ).map(({ label, value }) => (
                  <div key={label} className='flex flex-col gap-0.5'>
                    <span className='text-xs font-semibold uppercase tracking-wide text-grey'>{label}</span>
                    <span className='text-sm font-medium text-mainBlack'>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important note */}
            <div className='w-full rounded-xl border border-border bg-lightShad2 px-5 py-4'>
              <p className='mb-1.5 flex items-center gap-2 text-sm font-bold text-mainBlack'>
                <svg className='size-4 shrink-0 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
                Important Note:
              </p>
              <p className='text-sm text-darkShade2'>
                Our team will review your requirements and send a detailed estimate to{' '}
                <span className='text-secondary'>{submittedEmail}</span> within 48 hours.
              </p>
            </div>

            <div className='flex justify-center'>
              <Link href='/request-a-quote'>
                <div className='rounded bg-primary px-10 py-[0.78125rem] text-lg text-white transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]'>
                  Discuss This Estimate
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Trust signals */}
      <div className='mt-10 flex flex-wrap justify-center gap-6 text-sm text-darkShade2'>
        {['Detailed proposal within 48 hours', 'No hidden costs or commitments', 'NDA available on request'].map(
          (item) => (
            <span key={item} className='flex items-center gap-1.5'>
              <svg className='size-4 shrink-0 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
              </svg>
              {item}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectEstimateCalculator;
