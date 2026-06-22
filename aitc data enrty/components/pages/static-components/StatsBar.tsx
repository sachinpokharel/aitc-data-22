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
        <div className='flex flex-wrap items-start gap-x-10 gap-y-8 md:flex-nowrap md:items-center'>
          {stats.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className='shrink-0'>
                <p className='text-4xl font-bold'>{stat.value}</p>
                <p className='mt-1 text-xs font-bold uppercase tracking-widest text-white/70'>{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <span className='hidden select-none text-2xl font-thin text-white/25 md:block'>—</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
