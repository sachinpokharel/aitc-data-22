/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { fullQuoteSchema, STEP_FIELDS, type QuoteFormData } from '@/src/schemas/requestQuoteSchema';
import { cn } from '@/utils/cn';
import { postData } from '@/utils/postData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LuLoader } from 'react-icons/lu';
import { useState } from 'react';
import Link from 'next/link';

const SERVICE_OPTIONS = [
  { value: 'custom-software', label: 'Custom Software Development' },
  { value: 'mobile-app', label: 'Mobile App Development' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'seo', label: 'SEO Services' },
  { value: 'it-consulting', label: 'IT Consulting' },
  { value: 'managed-it', label: 'Managed IT Support' },
  { value: 'ar-vr', label: 'AR/VR Development' },
  { value: 'devops', label: 'DevOps & Cloud' },
];

const BUDGET_OPTIONS = ['Under $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', '$100,000+'];

const TIMELINE_OPTIONS = [
  { value: 'flexible', label: 'Flexible', description: '3+ Months' },
  { value: 'standard', label: 'Standard', description: '1–3 Months' },
  { value: 'urgent', label: 'Urgent', description: 'Less than 1 Month' },
];

const STEP_TITLES = ["Let's start with the basics", 'Project Requirements', 'Project Timeline', 'Final Details'];

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

const TrustSignals = () => (
  <div className='flex flex-wrap justify-center gap-6 text-sm text-darkShade2'>
    {['Detailed proposal within 48 hours', 'No hidden costs or commitments', 'NDA available on request'].map((item) => (
      <span key={item} className='flex items-center gap-1.5'>
        <svg className='size-4 shrink-0 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
        </svg>
        {item}
      </span>
    ))}
  </div>
);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = '.pdf,.doc,.docx';
const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const formatFileSize = (bytes: number) => {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const RequestQuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: yupResolver(fullQuoteSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      primaryService: '',
      budgetRange: '',
      expectedTimeline: '',
      projectSummary: '',
    },
  });

  const budgetRange = watch('budgetRange');
  const expectedTimeline = watch('expectedTimeline');

  const handleNext = async () => {
    const fields = STEP_FIELDS[currentStep];
    const valid = await trigger(fields);
    if (valid) setCurrentStep((s) => s + 1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(e.target.files ?? []);
    const invalid = incoming.find((f) => !ALLOWED_MIME.has(f.type));
    if (invalid) {
      setFileError(`"${invalid.name}" is not allowed. Please upload PDF, DOC, or DOCX files only.`);
      e.target.value = '';
      return;
    }
    const oversized = incoming.find((f) => f.size > MAX_FILE_SIZE);
    if (oversized) {
      setFileError(`"${oversized.name}" exceeds the 10 MB limit.`);
      e.target.value = '';
      return;
    }
    setFileError(null);
    setAttachedFiles([incoming[0]]);
    e.target.value = '';
  };

  const removeFile = (index: number) => setAttachedFiles((prev) => prev.filter((_, i) => i !== index));

  const onSubmit = async (data: QuoteFormData) => {
    try {
      setSubmitError(null);
      await postData('/quote/request', {
        ...data,
        attachments: attachedFiles.map((f) => ({ name: f.name, size: f.size, type: f.type })),
      });
      setIsSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className='flex min-h-[80vh] flex-col items-center justify-center bg-lightShade1 px-4 py-20'>
        <div className='w-full max-w-2xl text-center'>
          <h2 className='mb-4 text-3xl font-black text-secondary md:text-4xl'>Thank You!</h2>
          <p className='mb-10 text-mainBlack'>
            We have received your quote request and will contact you within 24 hours.
          </p>
          <Link href='/'>
            <div className='inline-block rounded bg-primary px-10 py-3 text-lg text-white transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]'>
              Return Home
            </div>
          </Link>
          <div className='mt-14'>
            <TrustSignals />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen flex-col items-center bg-lightShade1 px-4 py-16'>
      {/* Page heading */}
      <div className='mb-8 max-w-2xl text-center'>
        <h1 className='mb-4 text-4xl font-black text-secondary xmd:text-5xl'>Tell us about your project</h1>
        <p className='text-mainBlack'>
          Ready to build? Fill out the form below to help us understand your needs. Our product engineering team will
          review your requirements and get back to you with a detailed proposal.
        </p>
      </div>

      {/* Form card */}
      <div className='w-full max-w-2xl rounded-2xl bg-white p-8 shadow-[0_4px_40px_rgba(0,0,0,0.08)] xmd:p-10'>
        {/* Progress bar */}
        <div className='mb-6 flex items-center gap-4'>
          <div className='flex flex-1 gap-2'>
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={cn(
                  'h-1.5 flex-1 rounded-full transition-all duration-300',
                  currentStep >= step ? 'bg-primary' : 'bg-lightShade1'
                )}
              />
            ))}
          </div>
          <span className='shrink-0 text-sm text-grey'>Step {currentStep} of 4</span>
        </div>

        <h2 className='mb-6 text-xl font-black text-secondary'>{STEP_TITLES[currentStep - 1]}</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* ── Step 1: Basics ── */}
          {currentStep === 1 && (
            <div className='flex flex-col gap-5'>
              <div className='grid grid-cols-1 gap-5 xmd:grid-cols-2'>
                {/* Full Name */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='fullName' className='text-sm font-black text-mainBlack'>
                    Full Name <span className='text-error'>*</span>
                  </label>
                  <input
                    id='fullName'
                    type='text'
                    placeholder='Sundar Gautam'
                    {...register('fullName')}
                    className={cn(
                      'w-full rounded border border-border bg-white px-4 py-3 text-mainBlack placeholder:text-grey focus:border-primary focus:outline-none',
                      errors.fullName && 'border-error'
                    )}
                  />
                  {errors.fullName && <span className='text-sm font-medium text-error'>{errors.fullName.message}</span>}
                </div>

                {/* Work Email */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='workEmail' className='text-sm font-black text-mainBlack'>
                    Work Email <span className='text-error'>*</span>
                  </label>
                  <input
                    id='workEmail'
                    type='email'
                    placeholder='you@company.com'
                    {...register('workEmail')}
                    className={cn(
                      'w-full rounded border border-border bg-white px-4 py-3 text-mainBlack placeholder:text-grey focus:border-primary focus:outline-none',
                      errors.workEmail && 'border-error'
                    )}
                  />
                  {errors.workEmail && (
                    <span className='text-sm font-medium text-error'>{errors.workEmail.message}</span>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='companyName' className='text-sm font-black text-mainBlack'>
                  Company Name
                </label>
                <input
                  id='companyName'
                  type='text'
                  placeholder='Your Company'
                  {...register('companyName')}
                  className='w-full rounded border border-border bg-white px-4 py-3 text-mainBlack placeholder:text-grey focus:border-primary focus:outline-none'
                />
              </div>
            </div>
          )}

          {/* ── Step 2: Project Requirements ── */}
          {currentStep === 2 && (
            <div className='flex flex-col gap-6'>
              {/* Primary Service */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='primaryService' className='text-sm font-black text-mainBlack'>
                  Primary Service Needed
                </label>
                <div className='relative'>
                  <select
                    id='primaryService'
                    {...register('primaryService')}
                    defaultValue=''
                    className={cn(
                      'w-full appearance-none rounded border border-border bg-white px-4 py-3 text-mainBlack focus:border-primary focus:outline-none',
                      errors.primaryService && 'border-error'
                    )}
                  >
                    <option value='' disabled className='text-grey'>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500'>
                    <svg
                      className='size-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  </div>
                </div>
                {errors.primaryService && (
                  <span className='text-sm font-medium text-error'>{errors.primaryService.message}</span>
                )}
              </div>

              {/* Budget Range */}
              <div className='flex flex-col gap-3'>
                <label className='text-sm font-black text-mainBlack'>Budget Range</label>
                <input type='hidden' {...register('budgetRange')} />
                <div className='grid grid-cols-3 gap-3'>
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type='button'
                      onClick={() => setValue('budgetRange', opt, { shouldValidate: true })}
                      className={cn(
                        'rounded border p-3 text-sm font-medium transition-all duration-200',
                        budgetRange === opt
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border text-mainBlack hover:border-primary/50'
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.budgetRange && (
                  <span className='text-sm font-medium text-error'>{errors.budgetRange.message}</span>
                )}
              </div>
            </div>
          )}

          {/* ── Step 3: Project Timeline ── */}
          {currentStep === 3 && (
            <div className='flex flex-col gap-4'>
              <input type='hidden' {...register('expectedTimeline')} />
              <div className='grid grid-cols-3 gap-3' role='radiogroup' aria-label='Project timeline'>
                {TIMELINE_OPTIONS.map((opt) => {
                  const isSelected = expectedTimeline === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type='button'
                      role='radio'
                      aria-checked={isSelected}
                      onClick={() => setValue('expectedTimeline', opt.value, { shouldValidate: true })}
                      className={cn(
                        'flex flex-col items-center gap-3 rounded-xl border px-4 py-6 text-center transition-all duration-200',
                        isSelected ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'
                      )}
                    >
                      <div className='flex flex-col gap-1'>
                        <span className={cn('text-base font-bold', isSelected ? 'text-primary' : 'text-mainBlack')}>
                          {opt.label}
                        </span>
                        <span className='text-sm text-grey'>{opt.description}</span>
                      </div>
                      <div className='mt-auto pt-2'>
                        <RadioIcon selected={isSelected} />
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.expectedTimeline && (
                <span className='text-sm font-medium text-error'>{errors.expectedTimeline.message}</span>
              )}
            </div>
          )}

          {/* ── Step 4: Final Details ── */}
          {currentStep === 4 && (
            <div className='flex flex-col gap-6'>
              {/* Project Summary */}
              <div className='flex flex-col gap-2'>
                <label htmlFor='projectSummary' className='text-sm font-black text-mainBlack'>
                  Project Summary <span className='font-normal text-grey'>(Optional)</span>
                </label>
                <textarea
                  id='projectSummary'
                  {...register('projectSummary')}
                  placeholder='Tell us a bit about what you want to build...'
                  rows={4}
                  className='w-full rounded border border-border bg-white px-4 py-3 text-mainBlack placeholder:text-grey focus:border-primary focus:outline-none'
                />
              </div>

              {/* File Attachments */}
              <div className='flex flex-col gap-2'>
                <label className='text-sm font-black text-mainBlack'>
                  Attachments <span className='font-normal text-grey'>(Optional)</span>
                </label>
                <label
                  htmlFor='file-upload'
                  className='flex cursor-pointer flex-col items-center gap-2 rounded border-2 border-dashed border-border bg-white px-4 py-6 text-center transition-colors hover:border-primary/50 hover:bg-primary/5'
                >
                  <svg className='size-8 text-grey' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
                    />
                  </svg>
                  <span className='text-sm font-semibold text-mainBlack'>Click to upload files</span>
                  <span className='text-xs text-grey'>
                    Upload a project document, design, specification, or reference file (PDF, DOC, DOCX — up to 10 MB).
                  </span>
                  <input
                    id='file-upload'
                    type='file'
                    accept={ALLOWED_TYPES}
                    className='sr-only'
                    onChange={handleFileChange}
                  />
                </label>
                {fileError && <span className='text-sm font-medium text-error'>{fileError}</span>}
                {attachedFiles.length > 0 && (
                  <ul className='flex flex-col gap-2'>
                    {attachedFiles.map((file, i) => (
                      <li
                        key={i}
                        className='flex items-center justify-between rounded border border-border bg-lightShad2 px-3 py-2'
                      >
                        <div className='flex min-w-0 items-center gap-2'>
                          <svg
                            className='size-4 shrink-0 text-grey'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1.5}
                              d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                            />
                          </svg>
                          <span className='truncate text-sm text-mainBlack'>{file.name}</span>
                          <span className='shrink-0 text-xs text-grey'>({formatFileSize(file.size)})</span>
                        </div>
                        <button
                          type='button'
                          onClick={() => removeFile(i)}
                          aria-label={`Remove ${file.name}`}
                          className='ml-2 shrink-0 text-grey transition-colors hover:text-error'
                        >
                          <svg className='size-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M6 18L18 6M6 6l12 12'
                            />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {submitError && <p className='text-sm font-medium text-error'>{submitError}</p>}

              <p className='text-center text-xs text-grey'>
                We&#39;ll respond with a detailed proposal within 48 hours — no spam.
              </p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className={cn('mt-8 flex items-center', currentStep > 1 ? 'justify-between' : 'justify-end')}>
            {currentStep > 1 && (
              <button
                type='button'
                onClick={() => setCurrentStep((s) => s - 1)}
                className='text-base text-grey transition-colors hover:text-mainBlack'
              >
                Back
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type='button'
                onClick={handleNext}
                className='rounded bg-primary px-8 py-[0.78125rem] text-lg text-white transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]'
              >
                Next Step
              </button>
            ) : (
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex items-center gap-2 rounded bg-primary px-8 py-[0.78125rem] text-lg text-white transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)] disabled:opacity-70'
              >
                {isSubmitting && <LuLoader className='animate-spin' />}
                Submit Request
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Trust signals */}
      <div className='mt-10'>
        <TrustSignals />
      </div>
    </div>
  );
};

export default RequestQuoteForm;
