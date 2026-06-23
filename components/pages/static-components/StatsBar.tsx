import { Fragment } from 'react';

export interface StatItem {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: StatItem[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className='border-t border-white/10 bg-secondary text-white'>
      <div className='common-padding mx-auto max-w-screen-2xl py-10'>
        <div className='grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 md:flex md:flex-nowrap md:items-center md:justify-between md:gap-y-0'>
          {stats.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className='min-w-0'>
                <p className='text-3xl font-bold sm:text-4xl'>{stat.value}</p>
                <p className='mt-1 max-w-[200px] text-[11px] font-bold uppercase tracking-widest text-white/70 sm:text-xs'>{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <span className='hidden shrink-0 select-none text-2xl font-thin text-white/25 md:block'>—</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
