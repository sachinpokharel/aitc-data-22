import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';

export interface HeadingPart {
  text: string;
  highlight?: boolean;
}

export interface HeroFloatingBadge {
  position: 'bottom-left' | 'top-right';
  bg: string;
  lines: Array<{ text: string; small?: boolean; color?: string }>;
}

export interface LocationHeroScheduleRow {
  label: string;
  time: string;
  active: boolean;
}

export interface LocationHeroRightCard {
  icon: ReactNode;
  iconBg?: string;
  iconLabel: string;
  iconSubtitle: string;
  rows: LocationHeroScheduleRow[];
  counters: Array<{ value: string; label: string }>;
}

export interface LocationHeroData {
  badge: string;
  badgeVariant?: 'primary' | 'secondary';
  bgVariant?: 'light' | 'orange';
  dotColor?: string;
  heading: HeadingPart[];
  description: string;
  primaryCTA: { label: string; href: string; colorClass?: string };
  secondaryCTA: { label: string; href: string };
  trustItems: string[];
  rightCard: LocationHeroRightCard;
  floatingBadges?: HeroFloatingBadge[];
}

export default function LocationHero({ data, rightContent }: { data: LocationHeroData; rightContent?: ReactNode }) {
  const {
    badge,
    badgeVariant = 'primary',
    bgVariant = 'orange',
    dotColor = '#FF7500',
    heading,
    description,
    primaryCTA,
    secondaryCTA,
    trustItems,
    rightCard,
    floatingBadges,
  } = data;

  const sectionBg = bgVariant === 'orange' ? 'bg-primary/10' : 'bg-lightShad2';
  const dotOpacity = 'opacity-10';
  const badgeCls =
    badgeVariant === 'secondary' ? 'border-secondary/20 text-secondary' : 'border-primary/30 bg-white/60 text-primary';
  const primaryBtnCls = primaryCTA.colorClass ?? 'bg-secondary hover:bg-purple-800';

  return (
    <section className={`relative overflow-hidden ${sectionBg}`}>
      <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-primary/10 blur-2xl' />
      <div
        className={`pointer-events-none absolute inset-0 ${dotOpacity}`}
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className='common-padding relative py-16 md:py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid min-h-[560px] items-center gap-12 lg:grid-cols-2'>
            {/* Left — copy */}
            <div>
              <span
                className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm ${badgeCls}`}
              >
                <span className='size-1.5 rounded-full bg-primary' />
                {badge}
              </span>
              <h1 className='mb-6 text-4xl font-bold leading-tight text-secondary md:text-5xl'>
                {heading.map((part, i) =>
                  part.highlight ? (
                    <span key={i} className='text-primary'>
                      {part.text}
                    </span>
                  ) : (
                    <Fragment key={i}>{part.text}</Fragment>
                  )
                )}
              </h1>
              <p className='mb-8 max-w-xl text-lg leading-relaxed text-mainBlack md:text-xl'>{description}</p>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <Link
                  href={primaryCTA.href}
                  className={`rounded-md px-7 py-3.5 text-center font-semibold text-white transition-colors ${primaryBtnCls}`}
                >
                  {primaryCTA.label}
                </Link>
                <Link
                  href={secondaryCTA.href}
                  className='rounded-md border-2 border-secondary px-7 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white'
                >
                  {secondaryCTA.label}
                </Link>
              </div>
              <ul className='mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mainBlack'>
                {trustItems.map((item) => (
                  <li key={item}>
                    <span className='text-primary'>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form or schedule card */}
            <div className={rightContent ? 'block' : 'hidden lg:block'}>
              {rightContent ?? <div className='relative mx-auto max-w-sm py-6'>
                <div className='rounded-2xl border border-primary/20 bg-white/80 p-7 shadow-xl backdrop-blur-sm'>
                  <div className='mb-5'>
                    <p className='text-xs font-bold uppercase tracking-widest text-primary'>{rightCard.iconLabel}</p>
                    <p className='text-sm font-semibold text-secondary'>{rightCard.iconSubtitle}</p>
                  </div>
                  <div className='space-y-3'>
                    {rightCard.rows.map((row) => (
                      <div
                        key={row.label}
                        className={`flex items-center justify-between rounded-lg px-4 py-2.5 ${
                          row.active ? 'border border-primary/20 bg-primary/[0.08]' : 'bg-gray-50'
                        }`}
                      >
                        <div className='flex items-center gap-2.5'>
                          <span className={`size-2 rounded-full ${row.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                          <span className='text-sm font-medium text-secondary'>{row.label}</span>
                        </div>
                        <span className='text-xs text-grey'>{row.time}</span>
                      </div>
                    ))}
                  </div>
                  {rightCard.counters.length > 0 && (
                    <div className='mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5'>
                      {rightCard.counters.map((c) => (
                        <div key={c.label} className='text-center'>
                          <p className='text-2xl font-bold text-secondary'>{c.value}</p>
                          <p className='text-xs text-grey'>{c.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {floatingBadges?.map((fb, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-xl px-4 py-2.5 shadow-lg ${fb.bg} ${
                      fb.position === 'bottom-left' ? '-bottom-2 -left-6' : '-right-4 -top-2'
                    }`}
                  >
                    {fb.lines.map((line, j) => (
                      <p
                        key={j}
                        className={
                          line.color ?? (line.small ? 'text-[10px] text-white/60' : 'text-xs font-bold text-white')
                        }
                      >
                        {line.text}
                      </p>
                    ))}
                  </div>
                ))}
              </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
