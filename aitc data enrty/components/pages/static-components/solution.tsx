'use client';

import { useState } from 'react';

export interface SolutionTab {
  label: string;
  desc: string;
  iconBg: string;
  icon: React.ReactNode;
  href?: string;
}

interface SolutionsProps {
  heading?: string;
  subheading?: string;
  badge?: string;
  tabs: SolutionTab[];
  sectionClassName?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Solutions({
  heading = 'Custom E-commerce Software',
  subheading,
  badge = 'Solutions',
  tabs,
  sectionClassName = 'bg-white',
  ctaLabel = 'Book a Free Consultation',
  ctaHref = '/request-a-quote',
}: SolutionsProps) {
  const [active, setActive] = useState(0);
  // Accordion: which item is open on mobile (-1 = none)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const tab = tabs[active];
  if (!tab) return null;

  return (
    <section id='solutions' className={`py-12 sm:py-16 md:py-20 ${sectionClassName}`}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <p className='mb-2 text-center text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>
        <h2 className='mb-4 text-center text-2xl font-bold text-secondary sm:text-3xl'>{heading}</h2>
        {subheading && <p className='mx-auto mb-10 max-w-2xl text-center text-lg text-grey'>{subheading}</p>}

        {/* ── Mobile accordion (lg and above: hidden) ── */}
        <div className='divide-y divide-lightShade1 rounded-xl border border-lightShade1 lg:hidden'>
          {tabs.map((t, i) => {
            const isOpen = openAccordion === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : i)}
                  className='flex w-full items-center justify-between px-5 py-4 text-left'
                >
                  <span className={`text-base font-semibold ${isOpen ? 'text-primary' : 'text-secondary'}`}>
                    {t.label}
                  </span>
                  <svg
                    className={`size-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : 'text-grey'}`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className='overflow-hidden'>
                    <div className='px-5 pb-5'>
                      <p className='mb-4 leading-relaxed text-grey'>{t.desc}</p>
                      <div
                        className={`flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${t.iconBg}`}
                      >
                        {t.icon}
                      </div>
                      <div className='mt-4 flex flex-wrap items-center gap-3'>
                        <a
                          href={ctaHref}
                          className='rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90'
                        >
                          {ctaLabel}
                        </a>
                        {t.href && (
                          <a
                            href={t.href}
                            className='inline-flex items-center gap-1.5 text-sm font-semibold text-primary'
                          >
                            Learn more
                            <svg className='size-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Desktop tab layout (below lg: hidden) ── */}
        <div className='hidden lg:flex lg:min-h-[480px] lg:flex-row lg:gap-0'>
          {/* Tab list */}
          <div className='lg:w-64 lg:shrink-0 lg:border-r lg:border-lightShade1 xl:w-72'>
            <nav className='lg:flex-col lg:flex-nowrap lg:justify-start lg:gap-0'>
              {tabs.map((t, i) => (
                <div
                  key={i}
                  className={`group flex shrink-0 items-center rounded-none border-r-2 transition-colors ${
                    active === i ? 'border-primary bg-primary/5' : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <button
                    onClick={() => setActive(i)}
                    className={`flex-1 px-4 py-3 text-left text-base font-semibold transition-colors ${
                      active === i ? 'text-primary' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {t.label}
                  </button>
                  {t.href && (
                    <a
                      href={t.href}
                      className={`mr-3 flex size-6 shrink-0 items-center justify-center rounded-full border border-primary transition hover:bg-primary ${
                        active === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <svg
                        className='size-3 text-primary transition hover:text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Content panel */}
          <div className='flex-1 lg:pl-8 xl:pl-12'>
            <div className='mb-4 flex items-center gap-3'>
              <h3 className='flex-1 text-2xl font-bold text-secondary'>{tab.label}</h3>
              <a
                href={tab.href ?? '#'}
                className='group flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-primary transition hover:bg-primary'
              >
                <svg
                  className='size-4 text-primary transition group-hover:text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M9 5l7 7-7 7' />
                </svg>
              </a>
            </div>
            <p className='mb-8 leading-relaxed text-grey'>{tab.desc}</p>
            <div
              className={`flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${tab.iconBg}`}
            >
              {tab.icon}
            </div>
            <div className='mt-8'>
              <a
                href={ctaHref}
                className='rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:opacity-90'
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>

        {/*
        ── OLD MOBILE TAB VIEW (commented out — use later if needed) ──

        <div className='flex flex-col gap-0 lg:hidden'>
          <div className='lg:w-64 lg:shrink-0 lg:border-r lg:border-lightShade1 xl:w-72'>
            <nav className='mb-6 flex flex-row flex-wrap justify-center gap-2 border-b border-lightShade1 pb-3'>
              {tabs.map((t, i) => (
                <div key={i} className={`group flex shrink-0 items-center rounded transition-colors ${
                  active === i ? 'border-primary bg-primary/5' : 'border-transparent hover:bg-gray-50'
                }`}>
                  <button
                    onClick={() => setActive(i)}
                    className={`flex-1 px-3 py-2 text-left text-base font-semibold transition-colors ${
                      active === i ? 'text-primary' : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {t.label}
                  </button>
                </div>
              ))}
            </nav>
          </div>
          <div className='flex-1'>
            ... content panel (same as desktop) ...
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
