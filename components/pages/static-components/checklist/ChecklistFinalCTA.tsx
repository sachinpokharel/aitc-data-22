import Link from 'next/link';

export default function ChecklistFinalCTA() {
  return (
    <section className='common-padding bg-primary py-16 md:py-28'>
      <div className='mx-auto max-w-4xl text-center'>
        <p className='text-xs font-bold uppercase tracking-widest text-white/60'>Get Started</p>
        <h2 className='mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
          Ready to Start Your Software Project?
        </h2>
        <p className='mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85'>
          Whether you&apos;re planning a new application, modernising existing systems, building an AI solution, or
          launching a SaaS platform — AITC can help you move from concept to deployment with confidence.
        </p>
        <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4'>
          <Link
            href='/request-a-quote'
            className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-secondary shadow-lg transition hover:opacity-90 sm:w-auto'
          >
            Talk to an Expert
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-4 shrink-0'>
              <line x1='5' y1='12' x2='19' y2='12' /><polyline points='12 5 19 12 12 19' />
            </svg>
          </Link>
          <Link
            href='/request-a-quote?type=estimate'
            className='inline-flex w-full items-center justify-center rounded-lg border-2 border-white/60 px-8 py-4 font-bold text-white transition hover:border-white hover:bg-white/10 sm:w-auto'
          >
            Get a Project Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
