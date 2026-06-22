import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwithservice';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { ComparisonRow } from '@/components/pages/static-components/ComparisonTable';

export const heroStats = [
  { value: '70%', label: 'Cost savings vs Austin / Dallas' },
  { value: '48 hrs', label: 'Fixed-price proposal delivery' },
  { value: '9+', label: 'Hours daily CST overlap' },
  { value: '200+', label: 'Engineers in our network' },
];

export const heroTrustItems = [
  'Fixed-price proposals in 48 hours',
  'NDA signed before any discussion',
  'Full IP ownership from day one',
];

export const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Daily standup', time: '8:00 AM CST', active: true },
  { label: 'Code review session', time: '10:00 AM CST', active: true },
  { label: 'Sprint planning', time: '2:00 PM CST', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Nepal · Central Time · Fixed-price delivery',
  badgeVariant: 'primary',
  bgVariant: 'orange',
  dotColor: '#FF7500',
  heading: [
    { text: 'A Software Development Company ' },
    { text: 'Serving Texas Businesses', highlight: true },
  ],
  description:
    'AITC builds custom software, SaaS platforms, and mobile apps for Texas startups and companies — from Austin\'s Silicon Hills to the Dallas–Fort Worth Metroplex. Fixed-price delivery, 9+ hours of daily CST overlap, and 70% cost savings vs local Texas agency rates.',
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
      lines: [{ text: '70% cost savings' }, { text: 'vs Austin / Dallas rates', small: true }],
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
    iconSubtitle: 'Nepal team is in CST overlap hours',
    rows: heroScheduleItems,
    counters: [
      { value: '9+', label: 'Hours CST overlap' },
      { value: '200+', label: 'Vetted engineers' },
    ],
  },
};

export const whyCards = [
  {
    title: '9+ hours of daily CST overlap',
    desc: "Nepal's timezone puts our teams at 7:45 PM NPT when Texas wakes up at 8:00 AM CST. That's a full workday of real-time collaboration — standups, reviews, and Slack — not just async messages.",
  },
  {
    title: '70% lower cost than local hiring',
    desc: 'Mid-level engineers at $2,500–$4,000/month all-in, versus $12,000–$20,000 for equivalent talent in Austin or Dallas — without the recruiting timelines or benefits overhead.',
  },
  {
    title: 'Fixed-price delivery, no surprises',
    desc: 'We agree scope, timeline, and cost before writing a line of code. No retainer bloat, no scope creep — a clear agreement executed on schedule.',
  },
  {
    title: 'HIPAA & US compliance built in',
    desc: "We've built HIPAA-compliant systems for healthcare clients and have experience with SOC 2 and CCPA requirements — critical for Texas's large healthcare and fintech sectors.",
  },
];

export const services = [
  {
    title: 'Custom Software Development',
    desc: 'Bespoke web applications, internal tools, and enterprise platforms built end-to-end for Texas businesses — energy, healthcare, finance, and beyond.',
    href: '/custom-software-development',
  },
  {
    title: 'SaaS Product Development',
    desc: 'Multi-tenant SaaS platforms architected to scale — from a validated MVP to enterprise-ready product in structured two-week sprints.',
    href: '/services/saas-development',
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS, Android, and cross-platform apps built with Flutter and React Native by dedicated mobile engineers on your CST hours.',
    href: '/mobile-application-development',
  },
  {
    title: 'MVP Development',
    desc: "Get to market in 6–10 weeks. A focused sprint to validate your idea with a shippable product — ideal for Austin's fast-moving startup scene.",
    href: '/services/mvp-development',
  },
  {
    title: 'UI/UX Design',
    desc: 'Research-led design from wireframes to polished handoff — built for conversion, usability, and your brand.',
    href: '/services/ui-ux-design',
  },
  {
    title: 'API & Systems Integration',
    desc: 'Connecting your platform to the payment gateways, CRMs, ERPs, and third-party services your Texas business depends on.',
    href: '/services/api-integration',
  },
];

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Monthly cost (mid-level dev)', aitc: '$2,500–$4,000', col2: '$12,000–$20,000', col3: '$3,000–$7,000' },
  { feature: 'Fixed-price project option', aitc: true, col2: false, col3: false },
  { feature: 'CST timezone overlap (9+ hrs)', aitc: true, col2: true, col3: false },
  { feature: 'Free replacement guarantee', aitc: true, col2: false, col3: false },
  { feature: 'NDA before any discussion', aitc: true, col2: false, col3: false },
  { feature: 'Full IP ownership day one', aitc: true, col2: 'On delivery', col3: 'Varies' },
  { feature: 'HIPAA / SOC 2 experience', aitc: true, col2: 'Varies', col3: 'Varies' },
  { feature: 'Scale team in 2–4 weeks', aitc: true, col2: false, col3: false },
  { feature: 'Proposal in 48 hours', aitc: true, col2: '1–2 weeks', col3: 'Varies' },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Discovery call',
    desc: '30 minutes on CST time to understand your product, goals, and technical requirements. We tell you honestly what we can build and how long it will take.',
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
    desc: 'Two-week sprints with working demos after every cycle. Direct Slack access to your team throughout CST hours. Steer priorities between cycles as your product evolves.',
  },
];

export const engagementModels: PricingTier[] = [
  {
    title: 'Fixed-Price Project',
    price: 'From $15,000',
    bottomBadge: 'Best for: MVPs, redesigns, and well-scoped builds',
    desc: 'A fixed-scope engagement with an agreed timeline and price. You know exactly what you get, when you get it, and what it costs — before a line of code is written.',
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
    desc: 'A dedicated squad of Nepal-based engineers working exclusively on your product on your CST hours.',
    features: [
      '2–6 dedicated engineers',
      '9+ hours CST overlap daily',
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
    desc: 'Individual engineers placed directly inside your existing Texas team — your tools, your sprint, your codebase.',
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
    industry: 'Healthcare',
    category: 'SaaS',
    title: 'Enterprise Healthcare CRM',
    desc: 'HIPAA-compliant patient relationship management system built with Next.js and Node.js for a US health network.',
    href: '/ourwork/healthcare-crm',
  },
  {
    industry: 'Fintech',
    category: 'Custom Software',
    title: 'Fintech Payment Gateway',
    desc: 'High-throughput transaction processing engine handling $1M+ daily volume for a US payments startup.',
    href: '/ourwork/fintech-payment-gateway',
  },
  {
    industry: 'E-commerce',
    category: 'AI Integration',
    title: 'AI Customer Support Bot',
    desc: 'LLM-powered support agent that reduced human ticket volume by 40% for a US e-commerce brand.',
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
        desc: 'Dedicated Nepal-based engineers on your US hours.',
        href: '/location/offshore-development-team-nepal-for-usa',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Software Dev for US Clients',
        desc: 'Our full software development offering for US businesses.',
        href: '/location/software-development-company-for-us-clients',
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
    name: 'Healthcare',
    tagline: 'HIPAA-compliant digital health',
    desc: 'Patient portals, clinical workflow automation, and telehealth platforms for Texas healthcare providers.',
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
    desc: "Payment gateways, lending platforms, and financial data systems for Dallas–Fort Worth's fintech sector.",
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
    desc: "Property listing apps, agent CRMs, and rental platforms for Texas's booming real estate market.",
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
    question: 'Will the team work Texas (Central) time hours?',
    answer:
      "Yes. Nepal's timezone (UTC+5:45) puts our teams at 7:45 PM NPT when Texas wakes up at 8:00 AM CST. Your engineers are available for your morning standup, code reviews, and Slack conversations throughout the Texas working day. During CDT (summer), the overlap shifts to 9:00 AM CDT — still a full collaborative day.",
  },
  {
    question: 'Do you serve Austin, Dallas, Houston, and San Antonio?',
    answer:
      "Yes — we work with Texas businesses regardless of city. Austin startups, Dallas–Fort Worth enterprise clients, Houston energy and healthcare companies, and San Antonio businesses are all within our typical Texas client base. All engagements run on CST hours via Slack, Zoom, and your preferred tools.",
  },
  {
    question: 'Do you have experience with Texas industries like energy tech and healthcare?',
    answer:
      "We've built HIPAA-compliant healthcare systems for US clients including patient portals, clinical workflow tools, and telehealth platforms — directly relevant to Texas's large medical sector including the Texas Medical Center. We've also built data pipeline and monitoring tools applicable to the energy and oil & gas sector. Tell us about your domain and we'll be direct about our relevant experience.",
  },
  {
    question: 'How do you deliver fixed-price projects without scope creep?',
    answer:
      'We invest heavily in the discovery and scoping phase before quoting. A detailed written brief — covering user flows, architecture decisions, and acceptance criteria — is agreed before we quote a fixed price. Any changes after sign-off go through a transparent change request process with clear cost and timeline implications, approved before work begins.',
  },
  {
    question: 'How much does it cost for Texas businesses?',
    answer:
      'Fixed-price projects start from $15,000 for an MVP or defined-scope build. Dedicated team and staff augmentation engagements start from $2,500/month per engineer — all-in, with no recruitment fees or overhead costs. This is approximately 70% less than equivalent talent in Austin or Dallas.',
  },
  {
    question: 'What types of Texas companies do you typically work with?',
    answer:
      "We work with early-stage Austin startups building their first product, growth-stage Dallas–Fort Worth companies scaling their platform, and established Texas businesses modernising legacy systems. Common client profiles include Series A–C SaaS startups, healthcare and healthtech companies, fintech firms, and real estate technology businesses.",
  },
  {
    question: 'What is your development process?',
    answer:
      'We run two-week agile sprints with a working demo at the end of each cycle. Before sprints begin, we run a design and architecture sprint to align on UX flows and technical decisions. Throughout delivery, you have direct Slack access to your team on CST hours, a shared project roadmap, and written sprint summaries.',
  },
  {
    question: 'Do you sign NDAs before discussing a project?',
    answer:
      'Yes, always. We sign a mutual NDA before any discovery call or proposal discussion. Your idea, business logic, and technical details are treated with complete confidentiality from the first conversation.',
  },
  {
    question: 'Who owns the code and IP?',
    answer:
      'You do — 100%. Full IP transfer is included in every engagement. Your code lives in your GitHub from day one. On fixed-price projects, final delivery includes complete handover: source code, documentation, infrastructure credentials, and third-party service accounts.',
  },
  {
    question: 'What tech stacks do your engineers work in?',
    answer:
      'React / Next.js, Node.js, Python (Django / FastAPI), Flutter, React Native, PostgreSQL, MongoDB, AWS, and GCP are our most common stacks. We also cover Laravel, Vue, Ruby on Rails, and several niche technologies. If you have a specific stack, ask — with 200+ engineers we almost certainly cover it.',
  },
  {
    question: 'Can we start small and scale?',
    answer:
      "Absolutely. Many of our longest-running US client relationships started with a small fixed-price engagement — a proof of concept, a single feature, or a 4-week sprint. It's the lowest-risk way to evaluate quality and collaboration before committing to an ongoing engagement.",
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Discovery calls can be booked same-day on CST hours. Proposals are delivered within 48 hours of the call. For dedicated teams, matched engineer profiles arrive within 24 hours of sharing requirements. Most Texas clients have their team onboarded and running sprints within 2 weeks of first contact.',
  },
];
