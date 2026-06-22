import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwith';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';

export const heroStats = [
  { value: '200+', label: 'Vetted engineers ready' },
  { value: '50+', label: 'Technology stacks covered' },
  { value: '98%', label: 'Client retention rate' },
  { value: '48 hrs', label: 'To matched profiles' },
];

const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Requirements shared & matched', time: 'Day 1', active: true },
  { label: 'Developer profiles delivered', time: 'Within 48 hrs', active: true },
  { label: 'Developer onboarded & building', time: 'Week 2', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Software Developer Hiring · Pre-Vetted · Any Stack · Any Seniority',
  badgeVariant: 'primary',
  bgVariant: 'orange',
  dotColor: '#FF7500',
  heading: [
    { text: 'Hire Software Developers Who ' },
    { text: 'Build What Your Product Needs', highlight: true },
  ],
  description:
    'Access pre-vetted software engineers across every major stack — developers who integrate into your team, work your hours, and contribute from day one without the overhead of traditional hiring.',
  primaryCTA: {
    label: 'Hire a Software Developer →',
    href: '/request-a-quote',
    colorClass: 'bg-secondary hover:bg-purple-800',
  },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: [
    'Pre-vetted before you ever see them',
    'Works inside your tools and workflow',
    "Free replacement if it's not the right fit",
  ],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: 'Every stack covered' }, { text: 'Frontend · Backend · Mobile · DevOps', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Profiles in 48 hours' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-primary/10',
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
      </svg>
    ),
    iconLabel: 'Engineers available now',
    iconSubtitle: '200+ pre-vetted developers across every major stack',
    rows: heroScheduleItems,
    counters: [
      { value: '200+', label: 'Vetted engineers' },
      { value: '48 hrs', label: 'To profiles' },
    ],
  },
};

export const whyCards = [
  {
    title: 'Vetted, not just listed',
    desc: 'Every engineer passes a technical assessment, communication review, and real-world project evaluation before being matched to any client. No CVs to sift through.',
  },
  {
    title: 'Every stack, every seniority level',
    desc: 'React, Node.js, Python, Flutter, AWS, and more — across junior, mid, and senior levels. Whether you need one specialist or a full product team, we have the coverage.',
  },
  {
    title: 'Integrates into your existing team',
    desc: 'Your new developer works inside your GitHub, Slack, and sprint — not a separate agency workflow. They attend your standups and follow your development process from day one.',
  },
  {
    title: 'Hire one or scale a team',
    desc: 'Start with a single hire and grow as your product demands. No minimum team size, no lock-in. Scale up or down as priorities shift.',
  },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Share your requirements',
    desc: 'Tell us the role, stack, seniority level, and working model. A 30-minute call or a written brief is all we need to get started.',
  },
  {
    timing: 'Within 48 hrs',
    title: 'Receive matched profiles',
    desc: 'Pre-vetted developer profiles matched to your stack, seniority, and availability — with assessments already completed so you can review with confidence.',
  },
  {
    timing: 'Week 1',
    title: 'Run your own interviews',
    desc: 'Interview candidates on your schedule, ask anything you want, and run any technical test you choose. You make the final decision — no hire, no fee.',
  },
  {
    timing: 'Week 2',
    title: 'Onboard and start building',
    desc: 'Your developer joins your tools, your workflow, and your sprint — contributing from day one, backed by a free replacement guarantee.',
  },
];

export const engagementModels: PricingTier[] = [
  {
    title: 'Individual Developer',
    price: 'Single Hire',
    bottomBadge: 'Best for: Filling a specific role or adding focused technical capacity',
    desc: 'One full-time or part-time developer working on your product — your tools, your sprint, your timezone.',
    features: [
      'Full-time or part-time engagement',
      'Works inside your existing workflow',
      'Free replacement guarantee',
      'No recruitment fees',
    ],
    highlight: false,
    cta: 'Hire a developer',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Small Dev Team',
    price: 'Team Hire',
    bottomBadge: 'Best for: Scaling velocity without rebuilding your engineering culture',
    desc: '2–5 developers embedded in your team, aligned on sprint cadence, tools, and working hours — scaling output without scaling overhead.',
    features: [
      '2–5 developers matched to your stack',
      'Aligned sprint and standup schedule',
      'Scale each role independently',
      'Consistent communication across the team',
    ],
    highlight: true,
    cta: 'Build my dev team',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Full Product Squad',
    price: 'Squad Hire',
    bottomBadge: 'Best for: Shipping a full product or workstream end-to-end',
    desc: 'Frontend, backend, QA, designer, and a tech lead — a self-contained squad ready to own a product workstream from day one.',
    features: [
      'Frontend and backend developers',
      'QA engineer and UI/UX designer',
      'Tech lead or project manager included',
      'Agile-ready from sprint one',
    ],
    highlight: false,
    cta: 'Build my product squad',
    ctaHref: '/request-a-quote',
  },
];

export const developerRoles = [
  {
    title: 'Frontend Developers',
    desc: 'React, Next.js, Angular, Vue.js, TypeScript, Tailwind — UI engineers who build responsive, performant interfaces that users enjoy using.',
  },
  {
    title: 'Backend Developers',
    desc: 'Node.js, .NET, Laravel, Python (Django / Flask) — engineers who build secure, scalable APIs and server-side systems built for real load.',
  },
  {
    title: 'Full-Stack Developers',
    desc: 'End-to-end engineers who own features across the entire stack — ideal for lean product teams that need one hire to cover front and back.',
  },
  {
    title: 'Mobile Developers',
    desc: 'Flutter, React Native, Kotlin, and Swift — mobile engineers who build high-performance iOS and Android apps users want to keep.',
  },
  {
    title: 'Cloud & DevOps Engineers',
    desc: 'AWS, Azure, GCP, Docker, Kubernetes, CI/CD — infrastructure engineers who keep your platform stable, fast, and ready to scale.',
  },
  {
    title: 'QA Engineers',
    desc: 'Manual and automated testing specialists who design test cases, build automation suites, and catch issues before your users ever see them.',
  },
  {
    title: 'UI/UX Designers',
    desc: 'Figma and Adobe XD designers who map user journeys, build prototypes, and create design systems that improve usability and product adoption.',
  },
  {
    title: 'Software Architects',
    desc: 'Senior engineers who design scalable system architecture, review technical decisions, and ensure your codebase stays maintainable as the product grows.',
  },
];

export const ourWork = [
  {
    industry: 'FinTech',
    category: 'Custom Software',
    title: 'Fintech Payment Gateway',
    desc: 'High-throughput transaction processing engine handling $1M+ daily volume — built by a dedicated backend team.',
    href: '/ourwork',
  },
  {
    industry: 'Healthcare',
    category: 'SaaS',
    title: 'Enterprise Healthcare CRM',
    desc: 'HIPAA-compliant patient relationship management system built with Next.js and Node.js.',
    href: '/ourwork',
  },
  {
    industry: 'E-Commerce',
    category: 'AI Integration',
    title: 'AI Customer Support Bot',
    desc: 'LLM-powered support agent that reduced human ticket volume by 40% within the first quarter.',
    href: '/ourwork',
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
        title: 'Hire Dedicated Developers',
        desc: 'Developers working exclusively on your project — full-time, part-time, or team-based.',
        href: '/hire/hire-dedicated-developers',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Custom Software Development',
        desc: 'End-to-end software built by AITC engineers for your exact requirements.',
        href: '/software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Offshore Development Team',
        desc: 'A full offshore engineering team managed end-to-end by AITC.',
        href: '/offshore-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Mobile App Development',
        desc: 'Dedicated mobile engineers for iOS, Android, and cross-platform apps.',
        href: '/mobile-application-development',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'UI/UX Design',
        desc: 'Dedicated designers who build intuitive, user-tested product experiences.',
        href: '/ui-ux',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Web Design & Development',
        desc: 'Dedicated web engineers delivering modern, performant web products.',
        href: '/web-design',
      },
    ],
  },
];

export const industrySectors: IndustrySector[] = [
  {
    name: 'Healthcare',
    tagline: 'Secure health platforms',
    desc: 'Patient portals, appointment systems, and hospital management solutions built with compliance and reliability in mind.',
    useCases: ['Patient portals', 'Appointment booking', 'Clinical workflows'],
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
    name: 'FinTech',
    tagline: 'Secure financial platforms',
    desc: 'Payment systems, digital wallets, lending platforms, and transaction engines with strict security and performance requirements.',
    useCases: ['Payment gateways', 'Lending platforms', 'Digital wallets'],
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
    desc: 'Property management systems, listing platforms, CRM tools, and booking systems for real estate operations.',
    useCases: ['Property listings', 'Agent CRMs', 'Booking systems'],
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
    name: 'E-Commerce',
    tagline: 'Scalable commerce platforms',
    desc: 'Online stores and marketplace platforms with full support for inventory, payments, orders, and customer management.',
    useCases: ['Online stores', 'Marketplaces', 'Inventory systems'],
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
    name: 'Education',
    tagline: 'LMS & learning platforms',
    desc: 'Learning management systems, course marketplaces, and digital education tools for students, teachers, and administrators.',
    useCases: ['LMS platforms', 'Course marketplaces', 'EdTech tools'],
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
    name: 'Logistics',
    tagline: 'Supply chain & fleet tech',
    desc: 'Tracking systems, delivery management platforms, fleet operations, and supply chain visibility with real-time data handling.',
    useCases: ['Fleet tracking', 'Delivery management', 'Supply chain'],
    href: '/industries',
    accentColor: 'text-yellow-600',
    iconBg: 'bg-yellow-100',
    icon: (
      <svg className='size-5 text-yellow-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 1m8 0H9m4 0l3-1V8l-3-1m0 9H9m0 0l-2-1' />
      </svg>
    ),
  },
  {
    name: 'Human Resources',
    tagline: 'HR & workforce platforms',
    desc: 'Recruitment platforms, payroll systems, attendance tracking, and workforce analytics tools for modern HR operations.',
    useCases: ['Recruitment tools', 'Payroll systems', 'Workforce analytics'],
    href: '/industries',
    accentColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    icon: (
      <svg className='size-5 text-teal-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    name: 'SaaS & Technology',
    tagline: 'Scalable cloud products',
    desc: 'Scalable SaaS products, APIs, and cloud-based systems designed for growth, performance, and long-term product evolution.',
    useCases: ['SaaS platforms', 'API development', 'Cloud systems'],
    href: '/industries',
    accentColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    icon: (
      <svg className='size-5 text-indigo-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2' />
      </svg>
    ),
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How quickly can I hire a software developer through AITC?',
    answer:
      "Share your requirements today and you'll have 3–5 matched developer profiles in your inbox within 48 hours. Most clients complete interviews in the first week and have their developer onboarded and contributing by week two.",
  },
  {
    question: 'What does it cost to hire a software developer through AITC?',
    answer:
      'Pricing depends on the role, seniority, and engagement model. We work with a range of budgets and can advise on the most cost-effective structure for your specific needs. Contact us to get a tailored estimate.',
  },
  {
    question: 'What technology stacks do your software developers cover?',
    answer:
      'Our network covers React, Next.js, Angular, Vue.js, Node.js, .NET, Laravel, Python (Django / Flask), Flutter, React Native, Swift, Kotlin, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. If you have a specific or niche stack, ask — with 200+ engineers we almost certainly have the coverage.',
  },
  {
    question: 'Will the developer work inside my existing tools and workflow?',
    answer:
      'Yes. Your developer works inside your GitHub, Jira, Slack, or whatever toolchain you use — not inside a separate agency workflow. They attend your standups, follow your sprint process, and integrate with your team as a direct member.',
  },
  {
    question: 'How do you vet your software developers?',
    answer:
      'Every engineer in our network passes a stack-specific technical assessment, a communication evaluation, an experience review, and a portfolio and reference check before being matched to any client. You still run your own interview and make the final hiring decision.',
  },
  {
    question: 'Can I hire just one developer, or do I need a team?',
    answer:
      'You can start with a single developer — there is no minimum team size. Many clients begin with one hire and scale gradually as their product grows and requirements evolve.',
  },
  {
    question: 'What if the developer is not the right fit?',
    answer:
      "We offer a free replacement guarantee. If the developer isn't right for any reason — technically or culturally — we find a replacement at no additional cost.",
  },
  {
    question: 'Can I hire developers for a short-term project?',
    answer:
      'Yes. We work with flexible engagement lengths and have no minimum contract period. Whether you need a developer for a six-week project or a long-term product team, we can structure an engagement that fits.',
  },
  {
    question: 'Do I own the code and intellectual property?',
    answer:
      'Yes — 100%. Full IP ownership and a mutual NDA are in place before any work begins. Your code, your codebase, your property.',
  },
  {
    question: 'How is hiring through AITC different from using a freelance platform?',
    answer:
      'On freelance platforms you vet candidates yourself, manage availability risk, and have no replacement guarantee. With AITC every developer is pre-screened, assessed for real-world capability, and backed by a free replacement guarantee. HR, payroll, and compliance are also handled on our side.',
  },
];
