// data/build/build-an-mvp-data.ts
// AITc International — Build an MVP (/build-an-mvp)
// BOFU: Problem → Solution → Process → Trust → Conversion

import type { BuildHeroData } from '@/components/pages/static-components/BuildHero';
import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwithservice';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { ProcessStep } from '@/components/pages/static-components/ProcessSteps';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
export const heroData: BuildHeroData = {
  badge: 'MVP Development with AITC',
  heading: [
    { text: 'Turn Your Startup Idea into a ' },
    { text: 'Market-Ready MVP', highlight: true },
  ],
  description:
    'AITC International helps founders and startups launch quickly, validate demand with real users, and gain the clarity needed to build with confidence.',
  primaryCTA: { label: 'Start Your MVP', href: '/free-project-estimate' },
  secondaryCTA: { label: 'See Our Work', href: '/ourwork' },
  trustItems: ['50+ products delivered', 'Typical delivery in 6–10 weeks', 'NDA available on request'],
  rightCard: {
    iconLabel: 'MVP Status',
    iconSubtitle: 'Core modules in progress',
    icon: (
      <svg className='size-8 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
      </svg>
    ),
    rows: [
      { label: 'Product Discovery', status: 'Done' },
      { label: 'UX & Design', status: 'Done' },
      { label: 'Development', status: 'Active' },
      { label: 'QA & Testing', status: 'Pending' },
    ],
    counters: [
      { value: '6 wks', label: 'Avg. delivery' },
      { value: '50+', label: 'MVPs shipped' },
    ],
  },
};

// ─────────────────────────────────────────────
// HERO STATS
// ─────────────────────────────────────────────
export const heroStats = [
  { value: '50+', label: 'Products Delivered' },
  { value: '12+', label: 'Countries Served' },
  { value: '98%', label: 'Client Retention' },
  { value: '6–10 wks', label: 'Typical MVP Delivery' },
];

// ─────────────────────────────────────────────
// WHEN CARDS — "Is an MVP right for you?"
// Used by <CardGrid>
// ─────────────────────────────────────────────
export const whenCards = [
  {
    title: 'You have an idea but no proof of demand',
    points: [
      'Test market demand with real users before committing to a full build',
      'Avoid costly pivots by validating early — not after months of development',
    ],
  },
  {
    title: 'Your runway is tight',
    points: [
      'Early-stage budgets require ruthless prioritisation',
      'We scope exactly what you need to validate, and nothing you don\'t',
    ],
  },
  {
    title: 'You need something investor-ready fast',
    points: [
      'A working MVP is far more compelling to investors than a deck',
      'We deliver functional, demo-ready products in weeks, not months',
    ],
  },
  {
    title: 'You want real user feedback before scaling',
    points: [
      'Assumptions are expensive — an MVP puts your product in front of real users early',
      'Iterate on evidence, not guesswork, before committing to scale',
    ],
  },
  {
    title: 'Your existing product needs a rebuild',
    points: [
      'If your product is slow, unstable, or impossible to scale, we take over',
      'We audit the codebase and rebuild it the right way — without starting from zero',
    ],
  },
  {
    title: 'You need a technical co-founder, not just coders',
    points: [
      'We ask the hard questions upfront about architecture, scope, and direction',
      'You get a team that thinks like a co-founder, not a ticket-taker',
    ],
  },
];

// ─────────────────────────────────────────────
// MVP TYPES TABS — "What We Can Build as an MVP"
// Used by <Solutions> (tabs with list items)
// ─────────────────────────────────────────────
export const mvpTypeTabs: SolutionTab[] = [
  {
    label: 'SaaS Platforms',
    desc: 'Subscription-based web apps with multi-tenant architecture, admin dashboards, billing flows, and API-first backends built to scale from day one.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' />
      </svg>
    ),
  },
  {
    label: 'Mobile Apps',
    desc: 'iOS and Android apps built with React Native or Flutter — offline-first, push notifications, real-time updates, and full App Store deployment support.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    label: 'AI-Powered Products',
    desc: 'AI assistants, recommendation engines, document processing, and automation tools — shipped as standalone products or embedded features inside your SaaS.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    label: 'Marketplaces',
    desc: 'Two-sided platforms with listings, search, payments, escrow, reviews, and the trust mechanics that make buyers and sellers transact with confidence.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    ),
  },
  {
    label: 'Web Applications',
    desc: 'Custom business portals, workflow automation platforms, reporting dashboards, and client-facing self-service tools — all built to your exact process.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    label: 'Internal Platforms',
    desc: 'Workflow automation, team collaboration tools, HR self-service portals, and analytics dashboards — replacing spreadsheets and disconnected tools with one platform.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────
// PROCESS STEPS
// Used by <ProcessSteps>
// ─────────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    timing: 'Week 1',
    title: 'Product Discovery',
    desc: 'We explore your idea, target market, business objectives, and user needs — surfacing opportunities, challenges, and the clearest path toward market validation.',
  },
  {
    timing: 'Week 2',
    title: 'MVP Strategy & Scope',
    desc: 'We define the product scope, prioritise functionality, and determine exactly what is required to deliver value to early users. A focused scope reduces cost and shortens timelines.',
  },
  {
    timing: 'Weeks 3–4',
    title: 'UX & Interface Design',
    desc: 'Intuitive user journeys, wireframes, and interfaces designed before a line of code is written — so your MVP feels polished and usable from day one.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile MVP Development',
    desc: 'Core functionality built in two-week sprints using modern, scalable architecture. You see working software at the end of every cycle and can steer the product as you go.',
  },
  {
    timing: 'Final week',
    title: 'Validation & QA',
    desc: 'Functionality, usability, and performance tested before launch — so the product is genuinely ready for real users, not just technically complete.',
  },
  {
    timing: 'Post-launch',
    title: 'Launch, Learn & Improve',
    desc: 'User feedback, engagement metrics, and product insights guide future development — turning your MVP into a platform that grows.',
  },
];

// ─────────────────────────────────────────────
// PRICING TIERS — MVP Engagement Models
// Used by <PricingCards>
// ─────────────────────────────────────────────
export const pricingTiers: PricingTier[] = [
  {
    title: 'MVP Sprint',
    price: '$15K – $30K',
    topBadge: '2–4 weeks',
    desc: 'For founders who want to validate an idea quickly. Focuses on the core features needed to test your concept and gather early market insights.',
    features: [
      'Product discovery session',
      'Core feature scoping',
      'Basic UX/UI design',
      'Frontend & backend development',
      'Deployment and launch support',
    ],
    cta: 'Get a Sprint Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'MVP Build',
    price: '$30K – $70K',
    topBadge: '6–10 weeks',
    desc: 'For startups ready to launch a fully functional MVP — ready for real users or investor demos, with full design, development, QA, and deployment included.',
    features: [
      'Full product discovery & roadmap',
      'Complete UX/UI design system',
      'Frontend, backend & database',
      'User authentication & admin panel',
      'Testing, QA & deployment',
      'Post-launch recommendations',
    ],
    cta: 'Get a Build Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Scale-Ready MVP',
    price: '$70K – $150K',
    topBadge: '10–16 weeks',
    desc: 'For startups with long-term growth in mind. Built with scalable architecture so the product can evolve into a full platform without a costly rewrite.',
    features: [
      'Everything in MVP Build',
      'Scalable cloud infrastructure',
      'Multi-tenancy support',
      'CI/CD pipeline setup',
      'Performance & security hardening',
      'Dedicated post-launch sprint',
    ],
    cta: 'Get a Scale Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

// ─────────────────────────────────────────────
// WE HELP WITH TABS
// Used by <WeHelpWith>
// ─────────────────────────────────────────────
export const weHelpWithTabs: WeHelpTab[] = [
  {
    key: 'services',
    label: 'Services',
    items: [
      {
        iconBg: 'bg-[#fff3e8]',
        iconColor: 'text-[#ff7500]',
        title: 'Custom Software Development',
        desc: 'End-to-end custom software built around your unique business processes.',
        href: '/custom-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Custom ERP Development',
        desc: 'Modular ERP systems that unify finance, HR, inventory, and operations.',
        href: '/build/erp-system',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'SaaS Development',
        desc: 'Multi-tenant platforms and cloud-native products built to scale.',
        href: '/services/saas-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Dedicated Development Team',
        desc: 'A long-term Nepal-based team embedded in your workflow.',
        href: '/services/dedicated-development-team',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Offshore Development Team',
        desc: 'Build a full offshore squad aligned to your timezone at 70% cost savings.',
        href: '/hire-dedicated-developers',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'Mobile App Development',
        desc: 'iOS and Android apps built with React Native or Flutter.',
        href: '/services/mobile-app-development',
      },
    ],
  },
  {
    key: 'industries',
    label: 'Industries',
    items: [
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'FinTech',
        desc: 'Payments, lending, wallets, and compliant financial platforms.',
        href: '/industries/fintech-software-development',
      },
      {
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
        title: 'Healthcare',
        desc: 'HIPAA-compliant apps, patient portals, and telemedicine platforms.',
        href: '/industries/healthcare-software-development',
      },
      {
        iconBg: 'bg-[#fff3e8]',
        iconColor: 'text-[#ff7500]',
        title: 'E-commerce & Retail',
        desc: 'Storefronts, marketplace engines, and omnichannel order management.',
        href: '/industries/retail-software-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'EdTech',
        desc: 'LMS platforms, course builders, and learner engagement tools.',
        href: '/industries/education-software-development',
      },
    ],
  },
];

// ─────────────────────────────────────────────
// FAQs
// Used by <FAQSection>
// ─────────────────────────────────────────────
export const faqs = [
  {
    question: 'How much does MVP development cost?',
    answer:
      'Costs depend on complexity, features, integrations, and platform requirements. A simple MVP typically starts from $15,000. A standard SaaS MVP ranges from $25,000 to $60,000. During your discovery call, we provide a detailed estimate tailored to your specific requirements.',
  },
  {
    question: 'How long does it take to build an MVP?',
    answer:
      'Most MVPs can be built in 2 to 12 weeks depending on scope. A simple MVP with core functionality takes 2–4 weeks. A standard SaaS MVP takes 4–8 weeks. Marketplace or AI-powered MVPs take 8–16+ weeks. Timelines also depend on how quickly decisions are made on your side.',
  },
  {
    question: 'Can you scale the MVP after launch?',
    answer:
      'Yes. We build MVPs with future growth in mind, using scalable architecture so the product can evolve into a full platform without requiring a costly rewrite.',
  },
  {
    question: 'Can you work with an existing prototype or product idea?',
    answer:
      'Absolutely. Whether you have wireframes, design mockups, detailed requirements, or just an initial concept, our team can help refine the idea and turn it into a functional MVP.',
  },
  {
    question: 'Can you help with product planning and feature prioritisation?',
    answer:
      'Yes. Product discovery and feature prioritisation are core parts of our process — not optional add-ons. We help you decide what belongs in v1 and what can wait, based on your goals, users, and budget.',
  },
  {
    question: 'Do you offer MVP development for startups with limited budgets?',
    answer:
      'Yes. We work with early-stage startups regularly and help you prioritise ruthlessly to get a fundable, testable product live within a tight budget. We\'ll tell you honestly if your scope doesn\'t match your budget — and show you what\'s possible within it.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We\'re happy to sign a mutual NDA before any discovery call or proposal discussion. Your idea and business information are treated with complete confidentiality.',
  },
];

export const mvpIndustrySectors: IndustrySector[] = [
  {
    name: 'SaaS & Tech Startups',
    tagline: 'Ship fast, validate faster.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    name: 'Healthtech',
    tagline: 'Validate before you build the full platform.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-pink-500',
    iconBg: 'bg-pink-500/15',
    icon: (
      <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    name: 'Fintech',
    tagline: 'Test your financial product idea safely.',
    desc: '',
    useCases: [],
    href: '/industries/fintech-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    name: 'EdTech',
    tagline: 'Launch your learning platform with real users.',
    desc: '',
    useCases: [],
    href: '/industries/education-software-development',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.606 50.606 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    name: 'Marketplace & Platforms',
    tagline: 'Prove the model before building the ecosystem.',
    desc: '',
    useCases: [],
    href: '/industries/ecommerce-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' />
      </svg>
    ),
  },
  {
    name: 'Real Estate & PropTech',
    tagline: 'Digitise your property business first.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'MVP Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Turn Your Startup Idea into a ' }, { text: 'Market-Ready MVP', highlight: true }],
  description:
    'AITC International helps founders and startups launch quickly, validate demand with real users, and gain the clarity needed to build with confidence.',
  primaryCTA: { label: 'Start Your MVP', href: '/free-project-estimate' },
  secondaryCTA: { label: 'See Our Work', href: '/ourwork' },
  trustItems: ['50+ MVPs shipped', 'Delivery in 6–10 weeks', 'Free scoping call'],
  form: {
    preselectedService: 'MVP Development',
    formName: 'hero-mvp',
  },
};