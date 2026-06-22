import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwith';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';

export const heroStats = [
  { value: '200+', label: 'Developers placed' },
  { value: '50+', label: 'Technology stacks covered' },
  { value: '98%', label: 'Client retention rate' },
  { value: '2 wks', label: 'Average time to onboard' },
];

const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Requirements defined & matched', time: 'Day 1', active: true },
  { label: 'Candidate profiles delivered', time: 'Within 48 hrs', active: true },
  { label: 'Developer fully onboarded', time: 'Week 2', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Dedicated Developer Services · Full-Time · Part-Time · Team-Based',
  badgeVariant: 'primary',
  bgVariant: 'orange',
  dotColor: '#FF7500',
  heading: [
    { text: 'Scale Your Product Faster with ' },
    { text: 'Dedicated Developers', highlight: true },
  ],
  description:
    'Hire dedicated developers who work as an extension of your team — helping you build, scale, and ship faster without the cost and delay of in-house hiring.',
  primaryCTA: {
    label: 'Hire Dedicated Developers →',
    href: '/request-a-quote',
    colorClass: 'bg-secondary hover:bg-purple-800',
  },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: [
    'Exclusive project focus — no shared attention',
    'Integrates into your tools and workflow',
    'Scale your team up or down at any time',
  ],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: 'Works exclusively on your project' }, { text: 'Full-time or part-time', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Onboarded in 2 weeks' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-primary/10',
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
      </svg>
    ),
    iconLabel: 'Dedicated developers available now',
    iconSubtitle: '200+ pre-vetted engineers across every major stack',
    rows: heroScheduleItems,
    counters: [
      { value: '200+', label: 'Developers' },
      { value: '2 wks', label: 'To onboard' },
    ],
  },
};

export const whyCards = [
  {
    title: 'Exclusive project focus',
    desc: 'Dedicated developers work solely on your project — no split attention, no context-switching between clients. Greater productivity and continuity from day one.',
  },
  {
    title: 'Flexible team scaling',
    desc: 'Add a single developer today or build a full product squad by next month. Scale capacity up or down as project scope and business priorities evolve.',
  },
  {
    title: 'Seamless team integration',
    desc: 'Developers join your GitHub, Slack, Jira, and sprint cadence — not a separate agency workflow. They work your hours and follow your processes from the start.',
  },
  {
    title: 'Long-term development support',
    desc: 'Maintain momentum with developers who build deep product knowledge over time, reducing onboarding friction and improving delivery speed with every sprint.',
  },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Requirement Discovery',
    desc: 'We understand your project goals, technology stack, team structure, and developer requirements — the full picture, not just a job description.',
  },
  {
    timing: 'Within 48 hrs',
    title: 'Talent Matching & Profile Review',
    desc: 'We identify developers whose skills, experience, and domain expertise align with your needs. Review profiles and evaluate technical fit at your own pace.',
  },
  {
    timing: 'Week 1',
    title: 'Interview & Selection',
    desc: 'Interview candidates on your schedule, run any technical assessment you choose, and make the final decision. No hire, no fee.',
  },
  {
    timing: 'Week 2',
    title: 'Onboarding & Active Development',
    desc: 'Your developer joins your workflow, communication channels, and sprint — contributing from day one with full support through the transition.',
  },
];

export const engagementModels: PricingTier[] = [
  {
    title: 'Full-Time Dedicated Developer',
    price: 'Long-Term Engagement',
    bottomBadge: 'Best for: Continuous product development with full ownership',
    desc: 'One or more developers working exclusively on your project — your tools, your sprint, your hours — with full commitment and no shared attention.',
    features: [
      'Full-time commitment to your project',
      'Daily collaboration and standups',
      'Sprint-based development workflow',
      'Long-term product ownership',
    ],
    highlight: true,
    cta: 'Hire a full-time developer',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Part-Time Dedicated Developer',
    price: 'Flexible Engagement',
    bottomBadge: 'Best for: Feature updates, maintenance, and smaller workloads',
    desc: 'Flexible working hours per week on task-based development — ideal for ongoing support, enhancements, and projects that don\'t require full-time resources.',
    features: [
      'Flexible hours per week',
      'Task-based development focus',
      'Regular updates and communication',
      'Cost-efficient for smaller workloads',
    ],
    highlight: false,
    cta: 'Start part-time',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Dedicated Development Team',
    price: 'Team Engagement',
    bottomBadge: 'Best for: Full product delivery with a coordinated squad',
    desc: 'A cross-functional team — developers, QA, designers, and a project manager — working together as a dedicated unit on your product roadmap.',
    features: [
      'Developers, QA, and designers included',
      'Agile sprint-based execution',
      'Project management support',
      'Scalable team structure',
    ],
    highlight: false,
    cta: 'Build my product team',
    ctaHref: '/request-a-quote',
  },
];

export const developerRoles = [
  {
    title: 'Frontend Developers',
    desc: 'React, Next.js, Angular, Vue.js, TypeScript, Tailwind — UI engineers who build responsive, performant interfaces that users actually enjoy.',
  },
  {
    title: 'Backend Developers',
    desc: 'Node.js, .NET, Laravel, Python (Django / Flask) — engineers who build secure, scalable APIs and server-side systems that handle real load.',
  },
  {
    title: 'Full-Stack Developers',
    desc: 'End-to-end engineers who own features across the entire stack — ideal for lean product teams that need one hire to cover front and back.',
  },
  {
    title: 'Mobile App Developers',
    desc: 'Flutter, React Native, Kotlin, and Swift — mobile engineers who build high-performance iOS and Android apps users want to keep.',
  },
  {
    title: 'Cloud & DevOps Engineers',
    desc: 'AWS, Azure, GCP, Docker, Kubernetes, CI/CD — infrastructure engineers who keep your platform stable, fast, and ready to scale.',
  },
  {
    title: 'QA Engineers',
    desc: 'Manual and automated testing specialists using Selenium, Cypress, and structured test design who catch issues before your users ever see them.',
  },
  {
    title: 'UI/UX Designers',
    desc: 'Figma and Adobe XD designers who map user journeys, build prototypes, and create design systems that improve usability and product adoption.',
  },
  {
    title: 'Full Development Teams',
    desc: 'A complete cross-functional squad — developers, QA, designers, and a project manager — ready to own a product workstream end-to-end.',
  },
];

export const ourWork = [
  {
    industry: 'SaaS',
    category: 'Product Development',
    title: 'SaaS Platform Scaling',
    desc: 'Dedicated 4-person engineering team accelerated feature delivery 3× for a growing B2B SaaS product.',
    href: '/ourwork',
  },
  {
    industry: 'Enterprise',
    category: 'Modernization',
    title: 'Enterprise Application Modernization',
    desc: 'Dedicated developers migrated legacy systems to a modern cloud architecture with zero service disruption.',
    href: '/ourwork',
  },
  {
    industry: 'Mobile',
    category: 'App Development',
    title: 'Cross-Platform Mobile Application',
    desc: 'Mobile specialists delivered an iOS and Android app 45% faster than in-house hiring timelines.',
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
        title: 'Offshore Development Team',
        desc: 'A full offshore engineering team managed end-to-end by AITC.',
        href: '/offshore-development',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Custom Software Development',
        desc: 'End-to-end software built by dedicated engineers for your exact requirements.',
        href: '/software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Hire Software Developers',
        desc: 'Pre-vetted software engineers placed and managed by AITC.',
        href: '/hire/hire-software-developers',
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
        desc: 'Dedicated web engineers who deliver modern, performant web products.',
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
    desc: 'Payment systems, digital wallets, lending platforms, and transaction engines with strict security and performance needs.',
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
    question: 'What does it mean to hire dedicated developers?',
    answer:
      'Hiring dedicated developers means you get professionals who work exclusively on your project while functioning as an extension of your internal team. You manage priorities, and they handle execution — inside your tools, your workflow, and your sprint.',
  },
  {
    question: 'How are dedicated developers different from freelancers?',
    answer:
      'Freelancers typically work on multiple projects simultaneously, while dedicated developers work only on your project. This ensures better focus, consistent availability, and long-term product understanding that improves with every sprint.',
  },
  {
    question: 'Can dedicated developers work with my existing team?',
    answer:
      'Yes. Dedicated developers fully integrate with your internal team, tools, communication channels, and workflows — whether that\'s GitHub, Slack, Jira, or anything else you use. They attend your standups and follow your development process.',
  },
  {
    question: 'How quickly can I onboard dedicated developers?',
    answer:
      'Once requirements are defined, developers can be matched and profiled within 48 hours. Most clients complete interviews in the first week and have their developer fully onboarded and contributing by week two.',
  },
  {
    question: 'Can I scale my dedicated development team later?',
    answer:
      'Yes. You can scale up or down at any time — adding developers, designers, QA engineers, or other specialists based on your project needs. Most engagements evolve over time as products grow.',
  },
  {
    question: 'What technologies do your dedicated developers work with?',
    answer:
      'Our developers cover React, Next.js, Angular, Vue.js, Node.js, .NET, Laravel, Python, Flutter, React Native, Swift, Kotlin, and cloud platforms including AWS, Azure, and Google Cloud. If you have a specific stack, ask — we almost certainly have someone.',
  },
  {
    question: 'How do you ensure developer quality?',
    answer:
      'We follow a structured screening process that includes a technical evaluation, communication assessment, experience review, and project-based validation. You still run your own interview and make the final hiring decision.',
  },
  {
    question: 'Do you provide project management support?',
    answer:
      'Yes. Depending on your engagement model, we can provide a project manager or structured support through sprint planning, progress tracking, and regular reporting — or developers can plug directly into your existing PM setup.',
  },
  {
    question: 'Can I hire developers for long-term projects?',
    answer:
      'Absolutely. Long-term engagements are where dedicated developers deliver the most value — developers who understand your codebase deeply ship features faster, make better architectural decisions, and need less onboarding with every new sprint.',
  },
  {
    question: 'What if I need to replace or add developers?',
    answer:
      'You can request replacements or additional developers at any time. We handle the transition smoothly — ensuring continuity so that project progress is not disrupted.',
  },
];
