import { Fragment } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';

export interface HeadingPart {
  text: string;
  highlight?: boolean;
}

export interface HeroCardItem {
  label: string;
  value: string;
  status: 'warning' | 'info' | 'good';
}

export interface HeroRightCard {
  icon: ReactNode;
  iconBg?: string;
  iconLabel: string;
  iconSubtitle: string;
  items: HeroCardItem[];
  note?: string;
}

export interface HeroFloatingBadge {
  position: 'bottom-left' | 'top-right';
  bg: string;
  lines: Array<{ text: string; small?: boolean; color?: string }>;
}

export interface IndustryHeroData {
  badge: string;
  badgeVariant?: 'primary' | 'secondary';
  bgVariant?: 'light' | 'orange';
  dotColor?: string;
  heading: HeadingPart[];
  description: string;
  primaryCTA: { label: string; href: string; colorClass?: string };
  secondaryCTA: { label: string; href: string };
  trustItems: string[];
  rightCard: HeroRightCard;
  floatingBadges?: HeroFloatingBadge[];
}

const statusColor: Record<HeroCardItem['status'], string> = {
  warning: 'text-orange-500',
  good: 'text-green-600',
  info: 'text-secondary',
};

export default function IndustryHero({ data }: { data: IndustryHeroData }) {
  const {
    badge,
    badgeVariant = 'primary',
    bgVariant = 'light',
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
  const dotOpacity = bgVariant === 'orange' ? 'opacity-10' : 'opacity-[7%]';
  const badgeCls =
    badgeVariant === 'secondary' ? 'border-secondary/20 text-secondary' : 'border-primary/30 text-primary';
  const primaryBtnCls = primaryCTA.colorClass ?? 'bg-primary hover:opacity-90';

  return (
    <section className={`relative overflow-hidden ${sectionBg}`}>
      <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-secondary/5 blur-2xl' />
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
                className={`mb-6 inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm ${badgeCls}`}
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

            {/* Right — metrics card */}
            <div className='hidden lg:block'>
              <div className='relative mx-auto max-w-sm py-6'>
                <div className='rounded-2xl border border-secondary/10 bg-white p-7 shadow-xl'>
                  <div className='mb-5'>
                    <p className='text-xs font-bold uppercase tracking-widest text-secondary'>{rightCard.iconLabel}</p>
                    <p className='text-sm font-semibold text-grey'>{rightCard.iconSubtitle}</p>
                  </div>
                  <div className='space-y-3'>
                    {rightCard.items.map((item) => (
                      <div
                        key={item.label}
                        className='flex items-center justify-between rounded-lg border border-lightShade1 bg-lightShad2 px-4 py-2.5'
                      >
                        <span className='text-sm text-mainBlack'>{item.label}</span>
                        <span className={`text-sm font-bold ${statusColor[item.status]}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                  {rightCard.note && (
                    <div className='mt-5 rounded-lg bg-primary/5 px-4 py-3 text-center'>
                      <p className='text-xs text-grey'>{rightCard.note}</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
