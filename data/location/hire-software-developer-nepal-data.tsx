import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwith';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';

export const heroStats = [
  { value: '200+', label: 'Vetted engineers ready' },
  { value: '60%–75%', label: 'Cost savings vs Western rates' },
  { value: '90%+', label: 'Team retention rate' },
  { value: '24 hrs', label: 'To matched profiles' },
];

export const heroTrustItems = [
  '2-week risk-free trial',
  'Free replacement guarantee',
  'Full IP ownership + NDA from day 1',
];

export const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Profile shortlist delivered', time: 'Within 24 hours', active: true },
  { label: 'Technical interviews', time: 'Week 1', active: true },
  { label: 'Developer onboarded', time: 'Week 2', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Nepal · 200+ vetted engineers · Your timezone',
  badgeVariant: 'primary',
  bgVariant: 'orange',
  dotColor: '#FF7500',
  heading: [
    { text: 'Hire Software Developers from Nepal — ' },
    { text: 'pre-vetted, English-fluent, your timezone', highlight: true },
  ],
  description:
    'Access 200+ screened software engineers from Nepal at 60–75% less than Western rates. Developers who work your hours, communicate clearly, and integrate into your team from day one.',
  primaryCTA: {
    label: 'Hire a developer →',
    href: '/request-a-quote',
    colorClass: 'bg-secondary hover:bg-purple-800',
  },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '60–75% cost savings' }, { text: 'vs US / UK / AU rates', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Profiles in 24 hours' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-primary/10',
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
    iconLabel: 'Engineers available now',
    iconSubtitle: '200+ vetted developers in our network',
    rows: heroScheduleItems,
    counters: [
      { value: '200+', label: 'Vetted engineers' },
      { value: '24 hrs', label: 'To profiles' },
    ],
  },
};

export const whyCards = [
  {
    title: 'Genuinely vetted, not just listed',
    desc: 'Every engineer in our network passes technical screening, an English communication assessment, and a real-world code review before we match them to any client.',
  },
  {
    title: '60–75% lower cost than local hiring',
    desc: 'Mid-level engineers from $2,500/month all-in — no recruitment fees, no benefits overhead, no office costs. You get senior-grade output at a fraction of the price.',
  },
  {
    title: 'Your timezone, your workflow',
    desc: 'Our developers shift their hours to overlap with your working day — whether you\'re in the US, UK, Australia, or Europe. No async-only teams.',
  },
  {
    title: 'Plug into your team, not ours',
    desc: 'Your new developer works inside your repo, your Slack, your sprint — not inside a black-box agency workflow. You manage the work; we manage the HR.',
  },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Share your requirements',
    desc: 'Tell us the role, tech stack, seniority level, and timezone needs. A 30-minute call or a brief is all we need to get started.',
  },
  {
    timing: 'Within 24 hours',
    title: 'Receive matched profiles',
    desc: '3–5 pre-vetted developer profiles matched to your stack, seniority, and availability — with assessments already done.',
  },
  {
    timing: 'Week 1',
    title: 'Run your own interviews',
    desc: 'Interview candidates on your schedule, ask anything you want, and test with a technical task if you choose. No hire, no fee.',
  },
  {
    timing: 'Week 2',
    title: 'Onboard and start building',
    desc: 'Your developer joins your team on your hours, backed by a 2-week risk-free trial and a free replacement guarantee.',
  },
];

export const engagementModels: PricingTier[] = [
  {
    title: 'Individual Developer',
    price: 'From $2,500 / mo',
    bottomBadge: 'Best for: Filling a specific role or adding focused capacity',
    desc: 'One full-time developer working exclusively on your product — your tools, your sprint, your timezone.',
    features: [
      'Full-time dedicated to your team',
      'Works your timezone hours',
      '2-week trial + free replacement',
    ],
    highlight: false,
    cta: 'Hire a developer',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Small Dev Team',
    price: 'From $5,000 / mo',
    bottomBadge: 'Best for: Scaling velocity without rebuilding culture',
    desc: '2–5 developers embedded in your team, aligned on sprint cadence, tools, and working hours.',
    features: ['2–5 dedicated developers', 'Aligned sprint & standup schedule', 'Scale up or down independently'],
    highlight: false,
    cta: 'Build my dev team',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Full Product Squad',
    price: 'From $8,000 / mo',
    bottomBadge: 'Best for: Shipping a full product or workstream',
    desc: 'Frontend, backend, QA, designer, and a tech lead — a self-contained squad ready to own a product from day one.',
    features: ['Frontend & backend developers', 'QA engineer + UI/UX designer', 'Tech lead / project manager'],
    highlight: true,
    cta: 'Build my product squad',
    ctaHref: '/request-a-quote',
  },
];

export const developerRoles = [
  {
    title: 'Frontend Developers',
    desc: 'React, Next.js, Vue.js, TypeScript, Tailwind — pixel-perfect UI engineers who care about performance and UX.',
  },
  {
    title: 'Backend Developers',
    desc: 'Node.js, Python, Django, FastAPI, Laravel, Go — engineers who build reliable, scalable APIs and services.',
  },
  {
    title: 'Full-Stack Developers',
    desc: 'End-to-end engineers who own features across the stack — ideal for startups and lean product teams.',
  },
  {
    title: 'Mobile Developers',
    desc: 'Flutter, React Native, Swift, and Kotlin — mobile engineers for iOS, Android, and cross-platform apps.',
  },
  {
    title: 'DevOps & Cloud Engineers',
    desc: 'AWS, GCP, Azure, Docker, Kubernetes, Terraform — infrastructure engineers who keep your platform fast and stable.',
  },
  {
    title: 'QA Engineers',
    desc: 'Manual and automated testing specialists who catch issues before your users do.',
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
        title: 'Offshore Team for Australia',
        desc: 'Nepal-based developers working Australian hours.',
        href: '/locations/offshore-development-team-nepal-for-australia',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Offshore Team for the US',
        desc: 'Nepal-based developers working US business hours.',
        href: '/locations/offshore-development-team-nepal-for-usa',
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
    question: 'How quickly can I hire a developer from Nepal?',
    answer:
      'Fast. Share your requirements today and you\'ll have 3–5 matched developer profiles in your inbox within 24 hours. Most clients complete interviews and start onboarding within 2 weeks.',
  },
  {
    question: 'How much does it cost to hire a developer from Nepal?',
    answer:
      'Mid-level developers start from $2,500/month all-in — that\'s 60–75% less than equivalent roles in the US, UK, or Australia. The rate includes everything: no recruitment fee, no benefits cost, no office overhead.',
  },
  {
    question: 'Are Nepal developers good?',
    answer:
      'Nepal has a fast-growing tech talent pool with strong engineering university output and a culture of long-term tenure. Our specific network of 200+ engineers is pre-screened for technical skill, English communication, and real-world project experience — so you\'re not rolling the dice on quality.',
  },
  {
    question: 'Will the developer work my timezone?',
    answer:
      'Yes. Our developers are assessed for timezone flexibility before being matched to international clients. Whether you\'re in the US, UK, Australia, or Europe, we ensure meaningful daily overlap for standups, reviews, and real-time collaboration.',
  },
  {
    question: "What if the developer isn't a good fit?",
    answer:
      'Every engagement includes a 2-week risk-free trial. If the developer isn\'t right for any reason — technically or culturally — we replace them at no cost.',
  },
  {
    question: 'Do I own the code and IP?',
    answer:
      'Yes — 100%. Full IP transfer and a mutual NDA are signed before any work begins. Your code, your codebase, your property.',
  },
  {
    question: 'What tech stacks do your Nepal developers cover?',
    answer:
      'React, Next.js, Vue, Node.js, Python, Django, FastAPI, Laravel, Flutter, React Native, Swift, Kotlin, AWS, GCP, Azure, Docker, Kubernetes, and more. If you have a niche stack, ask — with 200+ engineers we almost certainly have someone.',
  },
  {
    question: 'Can I hire just one developer, or do I need a full team?',
    answer:
      'You can start with a single developer. There\'s no minimum team size. Many clients begin with one hire and scale as their product grows.',
  },
  {
    question: 'How does the vetting process work?',
    answer:
      'Every engineer goes through: (1) a technical screening test, (2) an English communication assessment, (3) a timezone-flexibility check, and (4) a portfolio and reference review. You still run your own interview and make the final call.',
  },
  {
    question: 'Is there a minimum contract length?',
    answer:
      'No. We work month-to-month with no lock-in. The only notice required to reduce or end an engagement is 30 days.',
  },
  {
    question: 'How is this different from a freelancer platform like Upwork?',
    answer:
      'On Upwork, you vet candidates yourself, manage availability risk, and have no replacement guarantee. With AITC, every developer is pre-screened, timezone-assessed, and backed by a free replacement guarantee and a 2-week trial. You also get HR, payroll, and infrastructure handled on our side.',
  },
  {
    question: 'Can the developer work inside our existing tools and codebase?',
    answer:
      'Yes. Your developer works inside your GitHub, your Jira, your Slack — not inside a separate agency toolchain. They\'re a member of your team in every practical sense.',
  },
];
