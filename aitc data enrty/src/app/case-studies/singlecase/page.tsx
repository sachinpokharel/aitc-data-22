'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

import { defaultTransition } from '@/utils/animation-config';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import LongArrow from '@/components/common/icon/LongArrow';

// ── Animated wrapper ───────────────────────────────────────────────────────
const FadeUp = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Static data ────────────────────────────────────────────────────────────
const stats = [
  { value: '+312%', label: 'Organic traffic increase' },
  { value: '18.4K', label: 'Monthly organic visitors' },
  { value: '2,100', label: 'Monthly visitors at start' },
  { value: 'Q1 2023', label: 'to Q2 2024 engagement' },
];

const problems = [
  {
    icon: '⚙️',
    title: 'Broken Technical Foundation',
    description:
      'Duplicate pages, missing canonical tags, and slow load times across key product categories prevented Google from indexing revenue-generating pages.',
  },
  {
    icon: '🔗',
    title: 'Weak Internal Link Architecture',
    description:
      'Link equity scattered across thin blog posts instead of flowing to category and product templates — burying the pages that drive conversions.',
  },
  {
    icon: '🌐',
    title: 'Zero External Authority',
    description:
      'Competitors with weaker products dominated commercial SERPs because the brand had almost no backlink profile pointing to transactional pages.',
  },
  {
    icon: '🎯',
    title: 'Unfocused Keyword Strategy',
    description:
      'Targeting informational terms with zero buying intent while leaving high-value commercial keywords entirely unaddressed.',
  },
];

const solutions = [
  {
    number: '01',
    title: 'Technical SEO Overhaul',
    description:
      'Resolved crawl path issues, fixed canonicalisation across product variants, and improved Core Web Vitals scores site-wide to unblock months of pent-up ranking potential.',
  },
  {
    number: '02',
    title: 'Internal Link Architecture',
    description:
      'Rebuilt internal linking to push equity to category and top-performing pages. Pruned low-value pages and created hierarchy that matches real buying journeys.',
  },
  {
    number: '03',
    title: '15 High-Authority Link Placements',
    description:
      'Manual outreach to DR 60+ sites with topical alignment. Human-written guest posts. Anchor strategy aligned to category and product listing pages.',
  },
  {
    number: '04',
    title: 'Revenue-First Keyword Targeting',
    description:
      'Segmented keywords by revenue potential. Prioritised commercial terms that moved 14 target keywords into the top 10 within 30 days.',
  },
];

const whyItWorked = [
  {
    number: '1',
    title: 'Fix the Foundation First',
    description:
      'Links on a broken site are wasted authority. The technical cleanup — crawl paths, canonicals, speed, sitemaps — came before any outreach.',
  },
  {
    number: '2',
    title: '15 Good Links, not 500 Bad Ones',
    description:
      'Fifteen high-authority, topically relevant placements aimed at the right pages move more rankings than hundreds of low-quality links ever would.',
  },
  {
    number: '3',
    title: 'Revenue Pages Only',
    description:
      'Every link pointed at category pages and product listings — not blog posts. The pages where visitors become customers.',
  },
  {
    number: '4',
    title: 'Speed of Execution',
    description:
      'Technical fixes deployed in week one. First links live by week two. Top 10 rankings for 14 commercial keywords by day 30.',
  },
];

const relatedStudies = [
  {
    tag: 'SAAS SEO',
    title: 'SaaS Platform Link Building SEO Case Study',
    description:
      'Grew monthly organic sessions from 800 to 9,200 after a full technical audit and targeted content cluster strategy.',
    href: '/case-studies/saas-seo',
  },
  {
    tag: 'REAL ESTATE',
    title: 'Real Estate SEO Case Study',
    description:
      'Grew Real Estate portal from 1,400 to over 12,000 monthly organic visitors after a full-site technical overhaul.',
    href: '/case-studies/real-estate-seo',
  },
  {
    tag: 'FINTECH',
    title: 'Crypto Link Building SEO Case Study',
    description:
      'Became a market leader with over 500 monthly organic visitors and $17,500 in monthly revenue within six months.',
    href: '/case-studies/crypto-seo',
  },
];

// ── Page ───────────────────────────────────────────────────────────────────
export default function SingleCaseStudyPage() {
  return (
    <main>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className='bg-lightShad2'>
        <div className='flex flex-col xl:flex-row'>
          {/* Left content */}
          <div className='common-padding flex flex-col justify-center gap-6 py-12 xl:w-1/2 xl:py-24'>
            {/* Breadcrumb */}
            <FadeUp delay={0.05}>
              <nav className='flex flex-wrap items-center gap-1.5 text-sm text-darkShade2'>
                <Link href='/' className='transition-colors hover:text-primary'>
                  Home
                </Link>
                <span className='text-grey'>/</span>
                <Link href='/case-studies' className='transition-colors hover:text-primary'>
                  Case Studies
                </Link>
                <span className='text-grey'>/</span>
                <span className='text-primary'>E-Commerce SEO</span>
              </nav>
            </FadeUp>

            <FadeUp delay={0.15}>
              <CommonChip text='CASE STUDY · E-COMMERCE SEO' className='w-fit' />
            </FadeUp>

            <FadeUp delay={0.25}>
              <h1 className='titlelineheight text-[2rem] font-black leading-tight text-mainBlack xmd:text-[2.5rem] lg:text-5xl lg:leading-[3.78rem]'>
                312% Organic Traffic Increase for an{' '}
                <span className='text-primary'>E-Commerce Retail</span> Brand
              </h1>
            </FadeUp>

            <FadeUp delay={0.35}>
              <CommonParargraph
                text='Nepal Mart was a growing FMCG e-commerce platform competing on commercial product terms. Through a focused SEO engagement spanning Q1 2023 to Q2 2024, monthly organic visitors grew from 2,100 to over 18,400 — a 312% increase.'
                className='max-w-xl text-darkShade2'
              />
            </FadeUp>
          </div>

          {/* Right — decorative brand panel */}
          <div className='relative flex min-h-[320px] items-center justify-center overflow-hidden xl:w-1/2'>
            <div className='absolute inset-0 bg-gradient-to-br from-secondary via-lightSecondary to-[#2a1d5c]' />
            {/* Decorative circles */}
            <div className='absolute -right-16 -top-16 size-64 rounded-full bg-primary/10' />
            <div className='absolute -bottom-10 -left-10 size-48 rounded-full bg-white/5' />
            <div className='relative z-10 flex flex-col items-center gap-3 text-center'>
              <span className='text-[4rem] font-black tracking-widest text-white/10 xl:text-[7rem]'>
                E-COM
              </span>
              <span className='text-3xl font-black text-white xl:text-5xl'>SEO</span>
              <div className='mt-2 h-0.5 w-20 bg-primary' />
              <p className='text-xs font-semibold uppercase tracking-[0.25em] text-white/50'>
                Case Study
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CLIENT OVERVIEW ───────────────────────────────────────── */}
      <section className='common-padding py-10 xmd:py-14'>
        <FadeUp>
          <p className='mx-auto max-w-4xl text-center text-base leading-relaxed text-darkShade2 xmd:text-lg'>
            Nepal Mart operated a regulated FMCG e-commerce marketplace competing on commercial product terms. Across the Q1 2023 to Q2 2024 link-building engagement, organic traffic grew from roughly 2,100 to 18,400 monthly visitors — a 312% increase. The growth breakdown below is what the AITC engagement produced while it ran.
          </p>
        </FadeUp>
      </section>

      {/* ── 3. KEY STATS ─────────────────────────────────────────────── */}
      <section className='common-padding border-y border-border bg-lightShad2 py-10 xmd:py-14'>
        <div className='grid grid-cols-2 gap-4 xmd:grid-cols-4 xmd:gap-6'>
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className='flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-6 text-center shadow-sm'>
                <span className='text-2xl font-black text-primary xmd:text-3xl lg:text-4xl'>
                  {stat.value}
                </span>
                <span className='text-xs font-medium leading-snug text-darkShade2 xmd:text-sm'>
                  {stat.label}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 4. CHALLENGE & SOLUTION ──────────────────────────────────── */}
      <section className='main-common-padding'>
        <TitleChipWrapper className='mb-12'>
          <FadeUp>
            <CommonChip text='THE CHALLENGE, AND WHAT WE DID' />
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className='titlelineheight max-w-3xl text-center text-[2rem] font-black text-mainBlack xmd:text-[2.5rem] lg:text-5xl'>
              Good Products Buried Under{' '}
              <span className='text-primary'>Technical Debt</span> and Zero Link
              Authority
            </h2>
          </FadeUp>
        </TitleChipWrapper>

        <div className='grid gap-10 xl:grid-cols-2 xl:gap-14'>
          {/* The Problem */}
          <div className='flex flex-col gap-4'>
            <FadeUp>
              <p className='text-xs font-bold uppercase tracking-[0.2em] text-primary'>
                The Problem
              </p>
            </FadeUp>
            {problems.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className='flex gap-4 rounded-xl border border-border bg-lightShad2 p-5 transition-shadow duration-300 hover:shadow-sm'>
                  <span className='mt-0.5 text-2xl leading-none'>{item.icon}</span>
                  <div className='flex flex-col gap-1'>
                    <p className='font-bold text-mainBlack'>{item.title}</p>
                    <p className='text-sm leading-relaxed text-darkShade2'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* What We Did */}
          <div className='flex flex-col gap-4'>
            <FadeUp>
              <p className='text-xs font-bold uppercase tracking-[0.2em] text-primary'>
                What We Did
              </p>
            </FadeUp>
            {solutions.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className='flex gap-4 rounded-xl border border-border bg-white p-5 transition-shadow duration-300 hover:shadow-sm'>
                  <span className='flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-black text-white'>
                    {item.number}
                  </span>
                  <div className='flex flex-col gap-1'>
                    <p className='font-bold text-mainBlack'>{item.title}</p>
                    <p className='text-sm leading-relaxed text-darkShade2'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RESULTS ───────────────────────────────────────────────── */}
      <section className='main-common-padding bg-lightShad2'>
        <TitleChipWrapper className='mb-10'>
          <FadeUp>
            <CommonChip text='THE RESULTS' />
          </FadeUp>
        </TitleChipWrapper>

        <FadeUp delay={0.2}>
          <div className='mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-[#12112b] shadow-xl'>
            {/* Window chrome */}
            <div className='flex flex-col gap-3 border-b border-white/10 px-6 py-4 xmd:flex-row xmd:items-center xmd:justify-between'>
              <div className='flex items-center gap-2'>
                <span className='size-3 rounded-full bg-red-500' />
                <span className='size-3 rounded-full bg-yellow-400' />
                <span className='size-3 rounded-full bg-green-500' />
                <span className='ml-2 text-sm text-white/50'>
                  Organic traffic · 18,400 / month
                </span>
              </div>
              <div className='flex gap-2'>
                {['All time', 'One year', 'Last 30 days'].map((label) => (
                  <button
                    key={label}
                    className={`rounded px-3 py-1 text-xs transition-colors ${
                      label === 'All time'
                        ? 'bg-primary text-white'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG chart */}
            <div className='px-6 py-8'>
              <svg
                viewBox='0 0 800 200'
                className='w-full'
                preserveAspectRatio='none'
              >
                <defs>
                  <linearGradient id='areaGrad' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#FF7500' stopOpacity='0.35' />
                    <stop offset='100%' stopColor='#FF7500' stopOpacity='0' />
                  </linearGradient>
                </defs>
                {/* Horizontal grid */}
                {[40, 80, 120, 160].map((y) => (
                  <line
                    key={y}
                    x1='0'
                    y1={y}
                    x2='800'
                    y2={y}
                    stroke='rgba(255,255,255,0.06)'
                    strokeWidth='1'
                  />
                ))}
                {/* Area fill */}
                <path
                  d='M0,185 C60,182 100,178 180,172 C260,166 310,158 370,145 C430,130 475,108 530,82 C585,56 640,34 700,18 L800,8 L800,200 L0,200 Z'
                  fill='url(#areaGrad)'
                />
                {/* Line */}
                <path
                  d='M0,185 C60,182 100,178 180,172 C260,166 310,158 370,145 C430,130 475,108 530,82 C585,56 640,34 700,18 L800,8'
                  fill='none'
                  stroke='#FF7500'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                {/* Endpoint dot */}
                <circle cx='800' cy='8' r='5' fill='#FF7500' />
                <circle cx='800' cy='8' r='9' fill='#FF7500' fillOpacity='0.25' />
              </svg>
              <p className='mt-5 text-center text-xs leading-relaxed text-white/35'>
                Nepal Mart organic traffic, weekly link-building engagement: Q1 2023 to Q2 2024.
                Traffic grew from roughly 2,100 to 18,400 monthly visitors, a 312% increase.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── 6. WHY IT WORKED ─────────────────────────────────────────── */}
      <section className='main-common-padding'>
        <TitleChipWrapper className='mb-12'>
          <FadeUp>
            <CommonChip text='WHY IT WORKED' />
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className='titlelineheight max-w-3xl text-center text-[2rem] font-black text-mainBlack xmd:text-[2.5rem] lg:text-5xl'>
              Technical SEO and Link Building Are{' '}
              <span className='text-primary'>Symbiotic</span>, Not Optional
            </h2>
          </FadeUp>
        </TitleChipWrapper>

        <div className='grid gap-5 xmd:grid-cols-2'>
          {whyItWorked.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <div className='flex gap-5 rounded-2xl border border-border bg-lightShad2 p-6 transition-all duration-300 hover:shadow-md'>
                <div className='flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10'>
                  <span className='text-lg font-black text-primary'>{item.number}</span>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p className='font-bold text-mainBlack'>{item.title}</p>
                  <p className='text-sm leading-relaxed text-darkShade2'>
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 7. QUOTE ─────────────────────────────────────────────────── */}
      <section className='main-common-padding bg-secondary'>
        <FadeUp>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='mb-4 text-5xl font-black leading-none text-primary'>&ldquo;</p>
            <blockquote className='text-xl font-bold leading-relaxed text-white xmd:text-2xl'>
              You don&apos;t need 500 links. You need 15 good ones pointed at the right pages,
              on a site that&apos;s technically clean enough to use them.
            </blockquote>
            <div className='mt-8 flex flex-col items-center gap-1'>
              <div className='h-0.5 w-12 bg-primary' />
              <p className='mt-3 text-sm font-bold uppercase tracking-widest text-primary'>
                AITC SEO Team
              </p>
              <p className='text-xs text-white/50'>Lead Strategist, AITC International</p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── 8. RELATED CASE STUDIES ──────────────────────────────────── */}
      <section className='main-common-padding bg-lightShad2'>
        <TitleChipWrapper className='mb-10'>
          <FadeUp>
            <CommonChip text='MORE CASE STUDIES' />
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className='titlelineheight text-center text-[2rem] font-black text-mainBlack xmd:text-[2.5rem]'>
              More Client Success Stories
            </h2>
          </FadeUp>
        </TitleChipWrapper>

        <div className='grid gap-6 xmd:grid-cols-3'>
          {relatedStudies.map((study, i) => (
            <FadeUp key={study.title} delay={i * 0.1}>
              <Link
                href={study.href}
                className='hover-scale-shadow-animation group flex flex-col overflow-hidden rounded-2xl bg-white'
              >
                {/* Thumbnail placeholder */}
                <div className='flex h-44 items-center justify-center bg-gradient-to-br from-secondary to-lightSecondary'>
                  <span className='text-xs font-bold uppercase tracking-[0.25em] text-white/50'>
                    {study.tag}
                  </span>
                </div>
                <div className='flex flex-col gap-3 p-6'>
                  <p className='text-xs font-bold uppercase tracking-widest text-primary'>
                    {study.tag}
                  </p>
                  <div className='flex items-start gap-2'>
                    <p className='font-bold leading-snug text-mainBlack'>{study.title}</p>
                    <span className='hover-arrow-slide mt-0.5 shrink-0'>
                      <LongArrow />
                    </span>
                  </div>
                  <p className='text-sm leading-relaxed text-darkShade2'>{study.description}</p>
                  <span className='mt-1 text-sm font-semibold text-primary underline underline-offset-2'>
                    Read case study &rarr;
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 9. CTA ───────────────────────────────────────────────────── */}
      <section className='main-common-padding'>
        <FadeUp>
          <div className='mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-secondary to-lightSecondary px-8 py-16 text-center shadow-lg'>
            <p className='mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary'>
              Ready to grow?
            </p>
            <h2 className='mb-4 text-3xl font-black text-white xmd:text-4xl'>
              Want This Kind of Result on Your Site?
            </h2>
            <p className='mx-auto mb-8 max-w-md text-white/65'>
              Book a free growth audit. We&apos;ll identify your biggest revenue opportunity
              and map clear next steps.
            </p>
            <CommonButton
              href='/contact-us'
              text='Get Your Free Growth Audit'
              className='mx-auto'
            />
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
