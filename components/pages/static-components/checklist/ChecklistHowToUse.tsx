import { type HowToUseStep } from '@/data/checklist/software-development-checklist-data';

interface ChecklistHowToUseProps {
  howToUseSteps: HowToUseStep[];
  description?: string;
}

const stepIcons = [
  <svg key='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-7'>
    <circle cx='11' cy='11' r='8' /><line x1='21' y1='21' x2='16.65' y2='16.65' />
  </svg>,
  <svg key='2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-7'>
    <polyline points='16 18 22 12 16 6' /><polyline points='8 6 2 12 8 18' />
  </svg>,
  <svg key='3' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-7'>
    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' /><polyline points='22 4 12 14.01 9 11.01' />
  </svg>,
  <svg key='4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-7'>
    <path d='M22.278 9.07l-2.828-2.829a2 2 0 0 0-2.829 0L4.929 17.515A2 2 0 0 0 4.343 19L4 21l2-.343a2 2 0 0 0 1.485-.586l11.622-11.622a2 2 0 0 0 0-2.829z' />
    <path d='M15 6l3 3' />
  </svg>,
];

export default function ChecklistHowToUse({ howToUseSteps, description }: ChecklistHowToUseProps) {
  return (
    <section className='common-padding bg-white py-16 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Simple Process</p>
          <h2 className='mt-3 text-2xl font-bold text-secondary sm:text-3xl md:text-4xl'>
            How to Use This Checklist
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mainBlack'>
            {description ?? 'A four-phase workflow to guide your project from discovery to continuous improvement.'}
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Horizontal connecting line — md+ only */}
          <div className='absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-primary to-secondary md:block' />

          {/* Steps grid */}
          <div className='grid gap-6 sm:gap-8 md:grid-cols-4 md:gap-4'>
            {howToUseSteps.map((step, i) => (
              <div
                key={step.step}
                className='group relative flex flex-row items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center'
              >
                {/* Vertical connector line — mobile only, not on last item */}
                {i < howToUseSteps.length - 1 && (
                  <div className='absolute left-[35px] top-[72px] hidden h-[calc(100%+24px)] w-px bg-gradient-to-b from-primary/40 to-transparent xsm:block md:hidden' />
                )}

                {/* Icon circle */}
                <div className='relative z-10 mb-0 flex size-[70px] shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:shadow-md md:mb-6'>
                  <span className='absolute -right-1.5 -top-1.5 flex size-6 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-white'>
                    {step.step}
                  </span>
                  {stepIcons[i]}
                </div>

                {/* Text */}
                <div className='pt-2 md:pt-0'>
                  <h3 className='mb-2 text-lg font-bold text-secondary'>{step.title}</h3>
                  <p className='text-base leading-relaxed text-grey'>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
