import type { ReactNode } from 'react';

export interface CardItem {
  title: string;
  desc: string;
  icon?: ReactNode;
}

interface CardGridProps {
  badge: string;
  heading: string;
  description?: string;
  cards: CardItem[];
  bg?: 'white' | 'light';
}

export default function CardGrid({ badge, heading, description, cards, bg = 'white' }: CardGridProps) {
  return (
    <section className={`common-padding py-20 md:py-28 ${bg === 'light' ? 'bg-lightShad2' : 'bg-white'}`}>
      <div className='mx-auto max-w-6xl'>
        <p className='text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>
        <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>{heading}</h2>
        {description && <p className='mt-4 max-w-2xl text-lg text-mainBlack'>{description}</p>}
        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {cards.map((card, i) => (
            <div key={i} className='rounded-xl border border-lightShade1 bg-white p-6'>
              {card.icon && (
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {card.icon}
                </div>
              )}
              <h3 className='text-base font-bold text-secondary'>{card.title}</h3>
              <p className='mt-2 text-base leading-relaxed text-grey'>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
