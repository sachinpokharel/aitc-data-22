import { type CoveredCard } from '@/data/checklist/software-development-checklist-data';

interface ChecklistCoveredCardsProps {
  coveredCards: CoveredCard[];
  description?: string;
}

const cardIcons = [
  <svg key='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-6'>
    <circle cx='12' cy='12' r='10' /><circle cx='12' cy='12' r='3' />
  </svg>,
  <svg key='2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-6'>
    <polygon points='12 2 2 7 12 12 22 7 12 2' /><polyline points='2 17 12 22 22 17' /><polyline points='2 12 12 17 22 12' />
  </svg>,
  <svg key='3' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-6'>
    <polyline points='16 18 22 12 16 6' /><polyline points='8 6 2 12 8 18' />
  </svg>,
  <svg key='4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-6'>
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
  </svg>,
  <svg key='5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-6'>
    <polyline points='16 16 12 12 8 16' /><line x1='12' y1='12' x2='12' y2='21' />
    <path d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3' />
  </svg>,
  <svg key='6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-6'>
    <polyline points='22 7 13.5 15.5 8.5 10.5 2 17' /><polyline points='16 7 22 7 22 13' />
  </svg>,
];

export default function ChecklistCoveredCards({ coveredCards, description }: ChecklistCoveredCardsProps) {
  return (
    <section className='common-padding bg-white py-16 md:py-28'>
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <p className='text-xs font-bold uppercase tracking-widest text-primary'>Full Coverage</p>
        <h2 className='mt-3 max-w-2xl text-2xl font-bold text-secondary sm:text-3xl md:text-4xl'>
          What Does This Checklist Cover?
        </h2>
        <p className='mt-4 max-w-2xl text-base leading-relaxed text-mainBlack'>
          {description ?? 'Everything your team needs to successfully plan, build, test, launch, and support a software project.'}
        </p>

        {/* Cards — 1 col mobile, 2 col sm, 3 col lg */}
        <div className='mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
          {coveredCards.map((card, i) => (
            <div
              key={card.title}
              className='group relative overflow-hidden rounded-xl border border-lightShade1 bg-lightShad2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7'
            >
              {/* Orange top stripe on hover */}
              <span className='absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100' />

              <div className='mb-4 flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary'>
                {cardIcons[i]}
              </div>

              <h3 className='mb-2 text-base font-bold text-secondary'>{card.title}</h3>
              <p className='text-base leading-relaxed text-grey'>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
