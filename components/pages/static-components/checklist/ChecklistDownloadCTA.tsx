import { downloadBullets } from '@/data/checklist/software-development-checklist-data';

interface ChecklistDownloadCTAProps {
  onOpenModal: () => void;
}

export default function ChecklistDownloadCTA({ onOpenModal }: ChecklistDownloadCTAProps) {
  return (
    <section className='common-padding bg-secondary py-16 md:py-28'>
      <div className='mx-auto max-w-5xl text-center'>
        <p className='text-xs font-bold uppercase tracking-widest text-white/50'>Free Download</p>
        <h2 className='mx-auto mt-3 max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
          Download the Complete Software Development Project Checklist
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70'>
          A professionally structured PDF you can share with your project managers, stakeholders, developers, and
          leadership teams.
        </p>

        {/* Bullets — 1 col on mobile, 2 on sm, 3 on lg */}
        <div className='mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-3'>
          {downloadBullets.map((bullet) => (
            <div key={bullet} className='flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3'>
              <span className='flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white' className='size-3'>
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              <span className='text-base font-semibold text-white/90'>{bullet}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onOpenModal}
          className='mt-10 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-9 py-4 font-bold text-secondary shadow-lg transition hover:opacity-90 sm:w-auto'
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-5 shrink-0'>
            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
            <polyline points='7 10 12 15 17 10' />
            <line x1='12' y1='15' x2='12' y2='3' />
          </svg>
          Download Free Checklist
        </button>
      </div>
    </section>
  );
}
