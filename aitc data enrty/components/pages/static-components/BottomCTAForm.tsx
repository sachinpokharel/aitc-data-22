import InlineInquiryForm from './InlineInquiryForm';

interface FormConfig {
  preselectedIndustry?: string;
  preselectedService?: string;
  formName: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
}

interface BottomCTAFormProps {
  badge: string;
  heading: string;
  description: string;
  bullets: string[];
  form: FormConfig;
}

export default function BottomCTAForm({ badge, heading, description, bullets, form }: BottomCTAFormProps) {
  return (
    <section className='relative overflow-hidden bg-secondary text-white'>
      <svg
        className='absolute inset-x-0 top-0 h-32 w-full opacity-30'
        viewBox='0 0 1440 128'
        fill='none'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <path d='M0 100 L220 40 L400 90 L600 20 L800 85 L1000 35 L1200 90 L1440 55' stroke='#486581' strokeWidth='1' />
      </svg>
      <div className='relative mx-auto max-w-7xl px-8 py-20 md:py-28'>
        <div className='grid items-start gap-10 lg:grid-cols-[2fr_3fr]'>
          <div>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>
            <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>{heading}</h2>
            <p className='mt-4 text-lg leading-relaxed text-white/85'>{description}</p>
            <ul className='mt-8 space-y-3 text-white/85'>
              {bullets.map((bullet) => (
                <li key={bullet}>✓ {bullet}</li>
              ))}
            </ul>
          </div>
          <InlineInquiryForm
            preselectedIndustry={form.preselectedIndustry}
            preselectedService={form.preselectedService}
            formName={form.formName}
            heading={form.heading}
            subheading={form.subheading}
            ctaLabel={form.ctaLabel}
            variant='light'
          />
        </div>
      </div>
    </section>
  );
}
