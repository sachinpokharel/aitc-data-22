import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwith';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';

export const heroStats = [
  { value: '8+', label: 'Hours EST overlap daily' },
  { value: '75%', label: 'Cost savings vs New York' },
  { value: '90%+', label: 'Team retention rate' },
  { value: '2 wks', label: 'To your first standup' },
];

export const heroTrustItems = [
  '2-week risk-free trial',
  'Free replacement guarantee',
  'Full IP ownership + NDA from day 1',
];

export const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Daily standup', time: '9:15 AM EST', active: true },
  { label: 'Code review session', time: '10:00 AM EST', active: true },
  { label: 'Sprint planning', time: '1:00 PM EST', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Nepal · Shifted US hours · 200+ vetted engineers',
  badgeVariant: 'primary',
  bgVariant: 'orange',
  dotColor: '#FF7500',
  heading: [
    { text: 'Offshore Development Team in Nepal — ' },
    { text: 'built around US business hours', highlight: true },
  ],
  description:
    'Dedicated, pre-vetted engineers who shift their day to overlap with EST and PST. Offshore savings without the timezone and communication problems that usually come with them.',
  primaryCTA: {
    label: 'Build my offshore team →',
    href: '/request-a-quote',
    colorClass: 'bg-secondary hover:bg-purple-800',
  },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '75% cost savings' }, { text: 'vs New York / San Francisco', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: '2 wks to first standup' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-primary/10',
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    iconLabel: 'Live right now',
    iconSubtitle: 'Nepal team is in overlap hours',
    rows: heroScheduleItems,
    counters: [
      { value: '8+', label: 'Hours overlap' },
      { value: '200+', label: 'Vetted engineers' },
    ],
  },
};

export const whyCards = [
  {
    title: '8+ hours of real EST overlap',
    desc: 'Our teams shift their day to start at 7:45 PM NPT — 9:00 AM EST — so you get a full collaborative workday, not just async messages. PST teams get afternoon overlap for standups and reviews.',
  },
  {
    title: '75% lower cost than local hiring',
    desc: 'Mid-level engineers at $2,500–$4,000/month all-in, versus $15,000–$25,000 in New York or San Francisco.',
  },
  {
    title: 'Fluent English, high retention',
    desc: 'Engineers communicate confidently in English and average 3+ years of tenure — your product knowledge stays intact.',
  },
  {
    title: 'Your tools, your codebase',
    desc: 'Code goes straight into your repositories. You manage the work; we handle HR, payroll, and office infrastructure.',
  },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Share your requirements',
    desc: 'Tech stack, team size, seniority. A 30-minute call is all we need.',
  },
  {
    timing: 'Days 2–4',
    title: 'Receive matched profiles',
    desc: '3–5 pre-vetted engineers matched to your stack and assessed for US timezone flexibility.',
  },
  {
    timing: 'Week 1',
    title: 'Interview and select',
    desc: 'Run your own interviews on your schedule. No hire, no fee.',
  },
  {
    timing: 'Week 2',
    title: 'Onboard on your hours',
    desc: 'Your team joins your standups and sprints on US time, backed by a 2-week risk-free trial.',
  },
];

export const engagementModels: PricingTier[] = [
  {
    title: 'Offshore Developer',
    price: 'From $2,500 / mo',
    bottomBadge: 'Best for: Adding focused capacity to an existing team',
    desc: 'One full-time engineer on your US hours — your tools, your sprint, your codebase.',
    features: [
      'Shifted hours aligned to EST/PST',
      'Daily standups & direct Slack access',
      '2-week trial + free replacement',
    ],
    highlight: false,
    cta: 'Hire an offshore developer',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Team Extension',
    price: 'From $5,000 / mo',
    bottomBadge: 'Best for: Scaling without rebuilding team culture',
    desc: '2–5 engineers embedded in your existing team on the same schedule and workflow.',
    features: ['2–5 dedicated developers', 'Aligned sprint cadence', 'Scale members independently'],
    highlight: false,
    cta: 'Extend my team',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Dedicated Offshore Squad',
    price: 'From $8,000 / mo',
    bottomBadge: 'Best for: Full workstream or new product line',
    desc: 'Developers, QA, designer, and PM — a self-managing team on US hours.',
    features: ['Frontend & backend developers', 'QA engineer + UI/UX designer', 'Tech lead / project manager'],
    highlight: true,
    cta: 'Build my offshore squad',
    ctaHref: '/request-a-quote',
  },
];

export const ourWork = [
  {
    industry: 'Healthcare',
    category: 'SaaS',
    title: 'Enterprise Healthcare CRM',
    desc: 'HIPAA-compliant patient relationship management system built with Next.js and Node.js.',
    href: '/ourwork/healthcare-crm',
  },
  {
    industry: 'Fintech',
    category: 'Custom Software',
    title: 'Fintech Payment Gateway',
    desc: 'High-throughput transaction processing engine handling $1M+ daily volume.',
    href: '/ourwork/fintech-payment-gateway',
  },
  {
    industry: 'E-commerce',
    category: 'AI Integration',
    title: 'AI Customer Support Bot',
    desc: 'LLM-powered support agent that reduced human ticket volume by 40%.',
    href: '/ourwork/ai-support-bot',
  },
];

export const weHelpWithTabs: WeHelpTab[] = [
  {
    key: 'services',
    label: 'Services',
    items: [
      {
        iconBg: 'bg-[#fff3e8]',
        iconColor: 'text-[#ff7500]',
        title: 'Dedicated Development Team',
        desc: 'Long-term dedicated teams built around your workflow.',
        href: '/services/dedicated-development-team',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Custom Software Development',
        desc: 'End-to-end software built by our Nepal-based engineers.',
        href: '/custom-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'SaaS Development',
        desc: 'Multi-tenant products built to scale from day one.',
        href: '/services/saas-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Mobile App Development',
        desc: 'iOS and Android apps by dedicated mobile engineers.',
        href: '/mobile-application-development',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'For US Clients',
        desc: 'Our full service offering tailored for US businesses.',
        href: '/locations/software-development-company-for-us-clients',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Hire Developers from Nepal',
        desc: 'General guide to hiring pre-vetted Nepal-based engineers.',
        href: '/hire-software-developer-nepal',
      },
    ],
  },
];

export const industrySectors: IndustrySector[] = [
  {
    name: 'Healthcare',
    tagline: 'HIPAA-compliant digital health',
    desc: 'Patient portals, clinical workflow automation, and telehealth platforms.',
    useCases: ['Patient portals', 'Telehealth', 'Clinical automation'],
    href: '/industries/healthcare-software-development',
    accentColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
    icon: (
      <svg className='size-5 text-pink-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
      </svg>
    ),
  },
  {
    name: 'Fintech',
    tagline: 'Secure financial platforms',
    desc: 'Payment gateways, lending platforms, and secure financial data systems.',
    useCases: ['Payment gateways', 'Lending platforms', 'Financial data'],
    href: '/industries/fintech-software-development',
    accentColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    icon: (
      <svg className='size-5 text-blue-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
      </svg>
    ),
  },
  {
    name: 'Real Estate',
    tagline: 'Property tech & agent tools',
    desc: 'Property listing apps, agent CRMs, and rental management platforms.',
    useCases: ['Property listings', 'Agent CRMs', 'Rental management'],
    href: '/industries/real-estate-software-development',
    accentColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    icon: (
      <svg className='size-5 text-orange-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
      </svg>
    ),
  },
  {
    name: 'E-commerce & Retail',
    tagline: 'Multi-channel commerce solutions',
    desc: 'Storefronts, inventory systems, and multi-channel commerce solutions.',
    useCases: ['Storefronts', 'Inventory systems', 'Multi-channel'],
    href: '/industries/retail-software-development',
    accentColor: 'text-green-600',
    iconBg: 'bg-green-100',
    icon: (
      <svg className='size-5 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
      </svg>
    ),
  },
  {
    name: 'Education & E-learning',
    tagline: 'LMS & learning platforms',
    desc: 'LMS platforms, course marketplaces, and interactive learning tools.',
    useCases: ['LMS platforms', 'Course marketplaces', 'Interactive learning'],
    href: '/industries/education-software-development',
    accentColor: 'text-[#3d2d72]',
    iconBg: 'bg-[#f1eef8]',
    icon: (
      <svg className='size-5 text-[#3d2d72]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
  },
  {
    name: 'Hospitality & Food',
    tagline: 'POS & reservation systems',
    desc: 'POS systems, reservation management, and delivery platforms.',
    useCases: ['POS systems', 'Reservations', 'Delivery platforms'],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    icon: (
      <svg className='size-5 text-teal-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    ),
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Will the team actually work US hours?',
    answer:
      'Yes. Our teams for US clients shift their day to align with EST — starting overlap at 9:00 AM EST. PST clients get afternoon overlap for standups, reviews, and ad-hoc calls. We tailor the schedule to your core working window.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Mid-level developers are $2,500–$4,000/month all-in — roughly 75% less than equivalent talent in New York or San Francisco, with no recruitment fees, benefits overhead, or office costs.',
  },
  {
    question: "What if a developer isn't a good fit?",
    answer: 'You get a 2-week risk-free trial and a free replacement guarantee at any point in the engagement.',
  },
  {
    question: 'Do we own the code and IP?',
    answer: 'Yes — 100%. Full IP transfer and NDA are signed before any work begins.',
  },
  {
    question: 'Can we scale the team later?',
    answer: "Yes. Add developers in 2–4 weeks or scale down with 30 days' notice — no lock-in.",
  },
  {
    question: 'What tech stacks do your Nepal engineers work in?',
    answer:
      'Our 200+ engineers cover React, Next.js, Vue, Node.js, Python, Django, Laravel, Flutter, React Native, AWS, and more. If you have a niche stack, ask us — we almost certainly have someone.',
  },
  {
    question: 'How do you handle communication and project management?',
    answer:
      'Teams communicate via your preferred tools — Slack, Teams, Jira, Linear, Notion, or whatever you use. You run the standups; we handle HR, payroll, and office logistics on the Nepal side.',
  },
  {
    question: 'Do you offer a trial period?',
    answer:
      'Yes — every engagement includes a 2-week risk-free trial. If the developer is not the right fit for any reason, we replace them at no cost.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Share your requirements today and you can have matched developer profiles within 24 hours. Most teams complete interviews and start onboarding within 2 weeks.',
  },
  {
    question: 'Is there a minimum team size or contract length?',
    answer:
      'No minimum contract length — we work month-to-month. You can start with a single developer and scale from there. The only notice required to reduce team size is 30 days.',
  },
  {
    question: 'What is your hiring and vetting process?',
    answer:
      'Every engineer goes through technical screening, English communication assessment, and a timezone-flexibility check before being matched to US clients. You still run your own interviews and make the final call.',
  },
  {
    question: 'Are your engineers familiar with US compliance standards?',
    answer:
      'Yes. Our engineers regularly work on products requiring HIPAA, SOC 2, and CCPA compliance. Security and regulatory awareness is part of our vetting and onboarding process for US-facing teams.',
  },
];
