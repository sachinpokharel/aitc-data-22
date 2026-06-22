import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwith';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';

export const heroStats = [
  { value: '10+', label: 'Years building in Kathmandu' },
  { value: '200+', label: 'Engineers in our network' },
  { value: '50+', label: 'Products shipped globally' },
  { value: '98%', label: 'Client retention rate' },
];

export const heroTrustItems = [
  'Kathmandu-based, globally delivered',
  'Full IP ownership + NDA from day 1',
  '2-week risk-free trial on all engagements',
];

export const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Discovery call', time: 'Book within 24 hours', active: true },
  { label: 'Proposal delivered', time: 'Within 48 hours', active: true },
  { label: 'Development starts', time: 'Week 2', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Kathmandu, Nepal · Est. 2014 · 50+ products shipped',
  badgeVariant: 'primary',
  bgVariant: 'orange',
  dotColor: '#FF7500',
  heading: [
    { text: 'Software Development Company in Kathmandu — ' },
    { text: 'building products for clients worldwide', highlight: true },
  ],
  description:
    'AITC International is a Kathmandu-based software development company delivering custom software, SaaS platforms, and dedicated engineering teams to businesses across the US, UK, Australia, and Europe.',
  primaryCTA: {
    label: 'Start a project →',
    href: '/request-a-quote',
    colorClass: 'bg-secondary hover:bg-purple-800',
  },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '50+ products shipped' }, { text: 'across 12+ countries', small: true }],
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
        <path strokeLinecap='round' strokeLinejoin='round' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
    iconLabel: 'Kathmandu HQ',
    iconSubtitle: 'Thamel, Kathmandu, Nepal',
    rows: heroScheduleItems,
    counters: [
      { value: '50+', label: 'Products shipped' },
      { value: '12+', label: 'Countries served' },
    ],
  },
};

export const whyCards = [
  {
    title: 'Kathmandu\'s fastest-growing tech hub',
    desc: 'Kathmandu is home to a rapidly expanding pool of engineering talent — university-trained, English-fluent, and building for international clients across every major industry.',
  },
  {
    title: '60–75% cost advantage over Western rates',
    desc: 'Kathmandu-based development delivers senior-grade engineering at $2,500–$4,000/month per developer — without the agency markup or the freelancer risk.',
  },
  {
    title: 'A full-service team under one roof',
    desc: 'Strategy, UX design, frontend, backend, QA, DevOps, and project management — all in-house at our Kathmandu office. No subcontracting, no handoffs to unknown vendors.',
  },
  {
    title: 'Built for international collaboration',
    desc: 'Our engineers shift their hours to overlap with your timezone — whether you\'re in New York, London, Sydney, or Berlin. Kathmandu-based doesn\'t mean async-only.',
  },
];

export const kathmandуAdvantages = [
  {
    stat: '35,000+',
    label: 'Engineering graduates annually',
    desc: 'Nepal produces a large and growing pipeline of computer science and software engineering graduates each year.',
  },
  {
    stat: '3+ yrs',
    label: 'Average engineer tenure',
    desc: 'Kathmandu engineers stay. High retention means your product knowledge doesn\'t walk out the door every 18 months.',
  },
  {
    stat: 'UTC+5:45',
    label: 'Nepal Standard Time',
    desc: 'A timezone that creates meaningful overlap with both European mornings and US afternoons — genuinely bridging East and West.',
  },
  {
    stat: '$0',
    label: 'Recruitment or placement fees',
    desc: 'No hidden costs. Our all-in monthly rates cover the engineer, infrastructure, HR, and payroll management.',
  },
];

export const services = [
  {
    title: 'Custom Software Development',
    desc: 'Bespoke web and desktop applications built to your exact specifications — from internal tools to customer-facing platforms.',
    href: '/custom-software-development',
  },
  {
    title: 'SaaS Product Development',
    desc: 'Multi-tenant SaaS platforms architected to scale — from MVP in 6–10 weeks to enterprise-ready products.',
    href: '/services/saas-development',
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS, Android, and cross-platform apps built with Flutter and React Native by dedicated mobile engineers.',
    href: '/mobile-application-development',
  },
  {
    title: 'Dedicated Development Teams',
    desc: 'Pre-vetted engineers embedded in your team on your timezone — your tools, your sprint, your codebase.',
    href: '/services/dedicated-development-team',
  },
  {
    title: 'UI/UX Design',
    desc: 'Product design from wireframes to polished design systems — built for usability, conversion, and your brand.',
    href: '/services/ui-ux-design',
  },
  {
    title: 'API & Systems Integration',
    desc: 'Connecting your platform to the payment gateways, CRMs, ERPs, and third-party tools your business runs on.',
    href: '/services/api-integration',
  },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Discovery call',
    desc: 'We spend 30 minutes understanding your product, goals, and constraints — then tell you honestly whether and how we can help.',
  },
  {
    timing: 'Days 2–3',
    title: 'Proposal & scope',
    desc: 'A detailed written proposal covering approach, timeline, team composition, and fixed pricing. No vague estimates.',
  },
  {
    timing: 'Week 1',
    title: 'Kick off & design sprint',
    desc: 'We begin with a structured discovery and design sprint — aligning on architecture, UX flows, and the technical approach before writing a line of code.',
  },
  {
    timing: 'Week 2 onwards',
    title: 'Agile development',
    desc: 'Two-week sprints with working demos after each cycle. You see real progress constantly — and can steer if priorities shift.',
  },
];

export const engagementModels: PricingTier[] = [
  {
    title: 'Project-Based',
    price: 'Fixed price',
    bottomBadge: 'Best for: Defined scope with a clear deliverable',
    desc: 'A fixed-scope engagement with a defined timeline and price. Ideal for MVPs, redesigns, and well-scoped builds.',
    features: [
      'Fixed price & timeline upfront',
      'Weekly demos & progress updates',
      'Full handover and documentation',
    ],
    highlight: false,
    cta: 'Get a project quote',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Dedicated Team',
    price: 'From $5,000 / mo',
    bottomBadge: 'Best for: Ongoing product development or team extension',
    desc: 'A dedicated team of Kathmandu-based engineers working exclusively on your product on your timezone.',
    features: ['2–6 dedicated engineers', 'Your timezone overlap guaranteed', 'Scale up or down monthly'],
    highlight: true,
    cta: 'Build my dedicated team',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Staff Augmentation',
    price: 'From $2,500 / mo',
    bottomBadge: 'Best for: Adding specific skills to an existing team',
    desc: 'One or more Kathmandu-based engineers plugged into your existing team — your tools, your sprint, your codebase.',
    features: ['Individual developer placement', 'Direct team integration', '2-week trial + free replacement'],
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
        desc: 'End-to-end software built by our Kathmandu-based engineers.',
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
        title: 'Hire Developers from Nepal',
        desc: 'Pre-vetted Nepal-based engineers placed in your team.',
        href: '/hire-software-developer-nepal',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Offshore Team for Australia',
        desc: 'Kathmandu engineers working Australian business hours.',
        href: '/locations/offshore-development-team-nepal-for-australia',
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
    question: 'Where is AITC International based?',
    answer:
      'AITC International is headquartered in Kathmandu, Nepal. Our engineering team, design team, and project management team all operate from our Kathmandu office — there is no subcontracting to unknown vendors.',
  },
  {
    question: 'Why choose a software company based in Kathmandu?',
    answer:
      'Kathmandu offers a strong and growing pool of university-trained engineers at 60–75% less than Western market rates. AITC specifically gives you the quality controls, communication standards, and timezone flexibility that make offshore collaboration work — not just the cost savings.',
  },
  {
    question: 'What services does AITC offer from Kathmandu?',
    answer:
      'We offer custom software development, SaaS product development, mobile app development, dedicated development teams, UI/UX design, API integrations, and ongoing engineering support — all delivered from our Kathmandu office.',
  },
  {
    question: 'Can you work in my timezone from Kathmandu?',
    answer:
      'Yes. Our engineers shift their working hours to create meaningful daily overlap with your team — whether you\'re in the US, UK, Australia, or Europe. Nepal\'s UTC+5:45 timezone bridges East and West effectively, and our flexible working culture makes real collaboration possible.',
  },
  {
    question: 'How much does it cost to work with a Kathmandu software company?',
    answer:
      'Project-based engagements are scoped and priced individually — we provide a fixed-price proposal after a discovery call. Dedicated team and staff augmentation engagements start from $2,500/month per engineer, all-in.',
  },
  {
    question: 'How quickly can you start a project?',
    answer:
      'We can typically begin a discovery call within 24 hours of your enquiry. Proposals are delivered within 48 hours. Most projects kick off within 1–2 weeks of agreement.',
  },
  {
    question: 'Do you work with startups or only large businesses?',
    answer:
      'Both. We work with early-stage startups building their first MVP, growth-stage companies scaling their product, and established businesses modernising legacy systems. We adjust our process and engagement model to fit the stage you\'re at.',
  },
  {
    question: 'What industries do you serve from Kathmandu?',
    answer:
      'We\'ve built products for fintech, healthtech, edtech, HR, logistics, real estate, e-commerce, and more. Our Kathmandu team brings relevant domain experience across all of these verticals.',
  },
  {
    question: 'Who owns the code and IP?',
    answer:
      'You do — 100%. Full IP transfer and a mutual NDA are signed before any work begins. Everything built for you belongs to you.',
  },
  {
    question: 'How do you handle communication and project visibility?',
    answer:
      'You get weekly demos, a shared project roadmap, and direct Slack or Teams access to your development team. No black-box delivery. You always know exactly where your product stands.',
  },
  {
    question: 'Can I visit the Kathmandu office?',
    answer:
      'Absolutely. We welcome client visits to our Kathmandu office. Several of our long-term clients have visited in person — it\'s a great way to meet the team and strengthen the working relationship.',
  },
  {
    question: 'Do you sign NDAs before discussing a project?',
    answer:
      'Yes, always. We sign a mutual NDA before any discovery call or proposal discussion. Your idea and business information are treated with complete confidentiality.',
  },
];
