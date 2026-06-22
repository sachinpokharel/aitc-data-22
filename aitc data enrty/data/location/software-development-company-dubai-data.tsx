import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwithservice';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { ComparisonRow } from '@/components/pages/static-components/ComparisonTable';

export const heroStats = [
  { value: '65%', label: 'Cost savings vs Dubai / Abu Dhabi' },
  { value: '48 hrs', label: 'Fixed-price proposal delivery' },
  { value: '9+', label: 'Hours daily GST overlap' },
  { value: '200+', label: 'Engineers in our network' },
];

export const heroTrustItems = [
  'Fixed-price proposals in 48 hours',
  'NDA signed before any discussion',
  'Full IP ownership from day one',
];

export const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Daily standup', time: '9:00 AM GST', active: true },
  { label: 'Code review session', time: '11:00 AM GST', active: true },
  { label: 'Sprint planning', time: '2:00 PM GST', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Nepal · Gulf Standard Time · Fixed-price delivery',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#0ea5e9',
  heading: [
    { text: 'A Software Development Company ' },
    { text: 'Serving Dubai & UAE Businesses', highlight: true },
  ],
  description:
    "AITC builds custom software, SaaS platforms, and mobile apps for Dubai and UAE businesses — from DIFC fintech firms to Dubai Internet City startups. Nepal's timezone gives you 9+ hours of daily GST overlap, fixed-price delivery, and 65% cost savings vs local Dubai agency rates.",
  primaryCTA: {
    label: 'Get a free proposal →',
    href: '/request-a-quote',
    colorClass: 'bg-secondary hover:bg-purple-800',
  },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '65% cost savings' }, { text: 'vs Dubai / Abu Dhabi rates', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Proposal in 48 hours' }],
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
    iconSubtitle: 'Nepal team is in GST overlap hours',
    rows: heroScheduleItems,
    counters: [
      { value: '9+', label: 'Hours GST overlap' },
      { value: '200+', label: 'Vetted engineers' },
    ],
  },
};

export const whyCards = [
  {
    title: '9+ hours of daily GST overlap',
    desc: "Nepal (UTC+5:45) sits just 1 hour 45 minutes ahead of Dubai (UTC+4). When your Dubai team starts at 9:00 AM GST, our engineers are already mid-morning. That means real-time Slack, standups, and code reviews — not async messages 12 hours apart.",
  },
  {
    title: '65% lower cost than hiring locally',
    desc: "Mid-level engineers at $2,500–$4,000/month all-in, versus $10,000–$18,000 for equivalent local talent in Dubai. No visa costs, no office overhead, no lengthy recruitment timelines.",
  },
  {
    title: 'Fixed-price delivery, agreed upfront',
    desc: 'Scope, timeline, and price locked before a line of code is written. No retainer bloat, no surprise invoices — a clear written agreement executed on schedule.',
  },
  {
    title: 'UAE & DIFC compliance experience',
    desc: "We've built systems compliant with UAE's Federal Data Protection Law (PDPL) and have experience with DIFC data protection requirements — critical for Dubai's large fintech and financial services sector.",
  },
];

export const services = [
  {
    title: 'Custom Software Development',
    desc: 'Bespoke web applications, enterprise platforms, and internal tools built end-to-end for Dubai and UAE businesses across fintech, real estate, logistics, and hospitality.',
    href: '/custom-software-development',
  },
  {
    title: 'SaaS Product Development',
    desc: 'Multi-tenant SaaS platforms architected for the MENA market — from a validated MVP to enterprise-ready product in structured two-week sprints.',
    href: '/services/saas-development',
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS, Android, and cross-platform apps built with Flutter and React Native by dedicated mobile engineers aligned to your GST hours.',
    href: '/mobile-application-development',
  },
  {
    title: 'MVP Development',
    desc: 'Ship a validated product in 6–10 weeks. Focused discovery, lean architecture, and fast delivery — ideal for Dubai\'s fast-moving startup ecosystem.',
    href: '/services/mvp-development',
  },
  {
    title: 'UI/UX Design',
    desc: 'Research-led design from wireframes to polished handoff — built for usability, conversion, and your brand identity in the UAE market.',
    href: '/services/ui-ux-design',
  },
  {
    title: 'API & Systems Integration',
    desc: 'Connecting your platform to payment gateways, banking APIs, CRMs, ERPs, and the third-party services your UAE business depends on.',
    href: '/services/api-integration',
  },
];

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Monthly cost (mid-level dev)', aitc: '$2,500–$4,000', col2: '$10,000–$18,000', col3: '$3,000–$6,000' },
  { feature: 'Fixed-price project option', aitc: true, col2: false, col3: false },
  { feature: 'GST timezone overlap (9+ hrs)', aitc: true, col2: true, col3: false },
  { feature: 'Free replacement guarantee', aitc: true, col2: false, col3: false },
  { feature: 'NDA before any discussion', aitc: true, col2: false, col3: false },
  { feature: 'Full IP ownership day one', aitc: true, col2: 'On delivery', col3: 'Varies' },
  { feature: 'UAE PDPL / DIFC compliance exp.', aitc: true, col2: 'Varies', col3: 'Varies' },
  { feature: 'Scale team in 2–4 weeks', aitc: true, col2: false, col3: false },
  { feature: 'Proposal in 48 hours', aitc: true, col2: '1–2 weeks', col3: 'Varies' },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Discovery call',
    desc: '30 minutes on GST time to understand your product, goals, and technical requirements. We tell you honestly what we can build and how long it will take.',
  },
  {
    timing: 'Days 2–3',
    title: 'Fixed-price proposal',
    desc: 'A detailed written proposal covering scope, timeline, team composition, and a fixed price. No vague estimates — a number you can plan a budget around.',
  },
  {
    timing: 'Week 1',
    title: 'Design & architecture sprint',
    desc: 'We align on UX flows, system architecture, and the technical approach before writing a line of code — so every sprint runs clean and on schedule.',
  },
  {
    timing: 'Week 2+',
    title: 'Agile delivery',
    desc: 'Two-week sprints with working demos after every cycle. Direct Slack access to your team throughout GST hours. Adjust priorities between cycles as the market shifts.',
  },
];

export const engagementModels: PricingTier[] = [
  {
    title: 'Fixed-Price Project',
    price: 'From $15,000',
    bottomBadge: 'Best for: MVPs, redesigns, and well-scoped builds',
    desc: 'A fixed-scope engagement with an agreed timeline and price. Know exactly what you get, when you get it, and what it costs — before a line of code is written.',
    features: [
      'Fixed scope, timeline & price upfront',
      'Bi-weekly demos & progress reports',
      'Full code handover & documentation',
    ],
    highlight: false,
    cta: 'Get a project quote',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Dedicated Development Team',
    price: 'From $5,000 / mo',
    bottomBadge: 'Best for: Ongoing product development',
    desc: 'A dedicated squad of Nepal-based engineers working exclusively on your product during your GST hours.',
    features: [
      '2–6 dedicated engineers',
      '9+ hours GST overlap daily',
      'Scale up or down monthly',
    ],
    highlight: true,
    cta: 'Build my dedicated team',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Staff Augmentation',
    price: 'From $2,500 / mo',
    bottomBadge: 'Best for: Adding specific skills to your team',
    desc: 'Individual engineers placed directly inside your existing Dubai team — your tools, your sprint, your codebase.',
    features: [
      'Individual engineer placement',
      'Direct team integration',
      '2-week trial + free replacement',
    ],
    highlight: false,
    cta: 'Augment my team',
    ctaHref: '/request-a-quote',
  },
];

export const ourWork = [
  {
    industry: 'Fintech',
    category: 'Custom Software',
    title: 'Fintech Payment Gateway',
    desc: 'High-throughput transaction processing engine handling $1M+ daily volume for a US-based payments startup — architecture applicable to MENA markets.',
    href: '/ourwork/fintech-payment-gateway',
  },
  {
    industry: 'Real Estate',
    category: 'SaaS',
    title: 'Property Management Platform',
    desc: 'End-to-end property listing, tenant management, and payments platform for a real estate operator.',
    href: '/ourwork',
  },
  {
    industry: 'E-commerce',
    category: 'AI Integration',
    title: 'AI Customer Support Bot',
    desc: 'LLM-powered support agent that reduced human ticket volume by 40% for an e-commerce brand.',
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
        title: 'Offshore Team for USA',
        desc: 'Dedicated Nepal-based engineers serving US clients.',
        href: '/location/offshore-development-team-nepal-for-usa',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Software Dev for European Clients',
        desc: 'Full-service software development for European businesses.',
        href: '/location/software-development-company-for-european-clients',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Hire Developers from Nepal',
        desc: 'Pre-vetted engineers placed directly in your team.',
        href: '/location/hire-software-developers-from-nepal',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Custom Software Development',
        desc: 'End-to-end software built by our Nepal-based engineers.',
        href: '/custom-software-development',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'SaaS Development',
        desc: 'Multi-tenant products built to scale from day one.',
        href: '/services/saas-development',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Software Company Kathmandu',
        desc: 'Our Kathmandu HQ — full-service for clients worldwide.',
        href: '/location/software-development-company-kathmandu',
      },
    ],
  },
];

export const industrySectors: IndustrySector[] = [
  {
    name: 'Fintech',
    tagline: 'DIFC-ready financial platforms',
    desc: `Payment gateways, lending platforms, and financial data systems for Dubai's DIFC fintech community and UAE banking sector.`,
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
    tagline: 'Property tech for UAE\'s booming market',
    desc: `Property listing apps, agent CRMs, rental management, and investor dashboards for Dubai's world-class real estate market.`,
    useCases: ['Property listings', 'Agent CRMs', 'Investor dashboards'],
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
    name: 'Hospitality & Food',
    tagline: 'POS & guest experience systems',
    desc: `POS systems, reservation platforms, guest-facing apps, and delivery management for Dubai's world-class hospitality sector.`,
    useCases: ['POS systems', 'Reservations', 'Guest experience'],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    icon: (
      <svg className='size-5 text-teal-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
      </svg>
    ),
  },
  {
    name: 'E-commerce & Retail',
    tagline: 'Multi-channel commerce for MENA',
    desc: 'Storefronts, inventory systems, and multi-channel commerce solutions built for UAE consumers and cross-border MENA markets.',
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
    name: 'Healthcare',
    tagline: 'UAE PDPL-compliant digital health',
    desc: 'Patient portals, clinic management systems, and telehealth platforms compliant with UAE data protection requirements.',
    useCases: ['Patient portals', 'Clinic systems', 'Telehealth'],
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
    name: 'Education & E-learning',
    tagline: 'LMS & learning platforms',
    desc: 'LMS platforms, course marketplaces, and interactive learning tools for UAE schools, universities, and corporate training.',
    useCases: ['LMS platforms', 'Course marketplaces', 'Corporate training'],
    href: '/industries/education-software-development',
    accentColor: 'text-[#3d2d72]',
    iconBg: 'bg-[#f1eef8]',
    icon: (
      <svg className='size-5 text-[#3d2d72]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Will the team work Dubai / Gulf Standard Time hours?',
    answer:
      "Nepal (UTC+5:45) is only 1 hour 45 minutes ahead of Dubai (UTC+4), which is the best timezone overlap you'll find with any offshore partner. When your Dubai team starts at 9:00 AM GST, our engineers are already at 10:45 AM NPT and available for your standup. The teams share the full business day with no dead-hours lag.",
  },
  {
    question: 'Do you serve clients across the UAE — Abu Dhabi, Sharjah, and beyond?',
    answer:
      'Yes. We work with Dubai businesses (DIFC, Business Bay, Dubai Internet City, Dubai Silicon Oasis), Abu Dhabi companies (ADGM, Masdar City), and UAE businesses in any emirate. All communication runs in English via Slack, Zoom, and your preferred tools on Gulf hours.',
  },
  {
    question: 'Do you have experience with UAE data protection and DIFC compliance?',
    answer:
      "We're aware of UAE's Federal Personal Data Protection Law (PDPL, Federal Decree-Law No. 45 of 2021) and have implemented data-handling practices — data minimisation, consent management, access controls — aligned with its requirements. For DIFC-registered clients we can discuss DIFC Data Protection Law requirements during discovery. We recommend involving your legal counsel for final compliance sign-off.",
  },
  {
    question: 'How much does software development cost for a Dubai business?',
    answer:
      'Fixed-price projects start from $15,000 for an MVP or well-scoped build. Dedicated team and staff augmentation engagements start from $2,500/month per engineer — all-in, including no visa or office costs. This is approximately 65% less than equivalent local talent in Dubai or Abu Dhabi.',
  },
  {
    question: 'Do you have experience with Dubai industries like fintech and real estate?',
    answer:
      "Yes. We've built DIFC-relevant payment processing systems, financial data platforms, and property management software — directly applicable to Dubai's two dominant tech sectors. We've also shipped POS and reservation systems for hospitality operators and e-commerce platforms targeting the MENA market.",
  },
  {
    question: 'Can you handle Arabic language and right-to-left (RTL) interfaces?',
    answer:
      'Yes. We have experience building RTL-compatible interfaces in React and Next.js, and can implement bilingual Arabic/English products. We recommend involving a native-Arabic UX reviewer for copy and layout sign-off, but the technical RTL implementation is within our standard scope.',
  },
  {
    question: 'What engagement model works best for Dubai startups?',
    answer:
      "Dubai's startup ecosystem moves fast. Most early-stage clients start with a fixed-price MVP (6–10 weeks, from $15,000) to validate the product, then transition to a dedicated team for ongoing development. This keeps upfront risk low while building a long-term working relationship.",
  },
  {
    question: 'Do you sign NDAs before discussing a project?',
    answer:
      'Yes, always. We sign a mutual NDA before any discovery call or proposal discussion. Your idea, business logic, and technical details are treated as completely confidential from the first conversation — no exceptions.',
  },
  {
    question: 'Who owns the code and IP?',
    answer:
      'You do — 100%. Full IP transfer is included in every engagement. Your code lives in your own GitHub or GitLab from day one. On fixed-price projects, delivery includes complete handover: source code, documentation, infrastructure credentials, and all third-party service accounts.',
  },
  {
    question: 'What payment methods do you accept from UAE clients?',
    answer:
      'We accept wire transfer (SWIFT), which is standard for UAE business payments. Invoices are issued in USD. For dedicated team or staff augmentation engagements, billing is monthly in advance. For fixed-price projects, we use a milestone-based payment schedule agreed before work starts.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Discovery calls can be booked same-day on GST hours. Proposals are delivered within 48 hours of the call. For dedicated teams, matched engineer profiles arrive within 24 hours of sharing requirements. Most UAE clients have their team onboarded and running sprints within 2 weeks of first contact.',
  },
  {
    question: 'What tech stacks do you use?',
    answer:
      'React / Next.js, Node.js, Python (Django / FastAPI), Flutter, React Native, PostgreSQL, MongoDB, AWS, and GCP are our most common stacks. We also cover Laravel, Vue, Ruby on Rails, and several niche technologies. With 200+ engineers across the network, we almost certainly cover the stack your Dubai product needs.',
  },
];
