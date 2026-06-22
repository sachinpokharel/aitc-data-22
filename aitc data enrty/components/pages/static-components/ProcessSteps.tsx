import Link from 'next/link';

export interface ProcessStep {
  timing: string;
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  badge: string;
  heading: string;
  steps: ProcessStep[];
  bg?: 'white' | 'light';
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ProcessSteps({ badge, heading, steps, bg = 'white', ctaLabel, ctaHref }: ProcessStepsProps) {
  return (
    <section className={`common-padding py-20 md:py-28 ${bg === 'light' ? 'bg-lightShad2' : 'bg-white'}`}>
      <div className='mx-auto max-w-6xl'>
        <p className='text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>
        <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>{heading}</h2>
        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step) => (
            <div
              key={step.title}
              className={`rounded-xl border border-lightShade1 p-7 ${bg === 'white' ? 'bg-lightShad2' : 'bg-white'}`}
            >
              <p className='font-mono text-base text-primary'>{step.timing}</p>
              <h3 className='mt-3 text-xl font-bold text-secondary'>{step.title}</h3>
              <p className='mt-2 text-base leading-relaxed text-grey'>{step.desc}</p>
            </div>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className='mt-10 inline-flex items-center rounded-md bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:opacity-90'
          >
            {ctaLabel} →
          </Link>
        )}
      </div>
    </section>
  );
}
