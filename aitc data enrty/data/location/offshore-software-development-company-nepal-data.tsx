import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwithservice';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { ComparisonRow } from '@/components/pages/static-components/ComparisonTable';

export const heroStats = [
  { value: '70%', label: 'Cost savings vs US / UK rates' },
  { value: '48 hrs', label: 'Fixed-price proposal delivery' },
  { value: '14+', label: 'Years of offshore delivery' },
  { value: '200+', label: 'Engineers in our network' },
];

export const heroTrustItems = [
  'Fixed-price proposals in 48 hours',
  'NDA signed before any discussion',
  'Full IP ownership from day one',
];

export const heroScheduleItems: { label: string; time: string; active: boolean }[] = [
  { label: 'Daily standup', time: 'Flexible to your timezone', active: true },
  { label: 'Code review session', time: 'Matched to your hours', active: true },
  { label: 'Sprint planning', time: 'Bi-weekly, async-friendly', active: false },
];

export const heroData: LocationHeroData = {
  badge: 'Kathmandu, Nepal · UTC+5:45 · Since 2010',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#3d2d72',
  heading: [
    { text: 'Offshore Software Development Company ' },
    { text: 'Based in Nepal', highlight: true },
  ],
  description:
    "AITC is a Nepal-based offshore software development company building custom software, SaaS platforms, and mobile apps for clients across the US, UK, Australia, Europe, and the Middle East. Fixed-price delivery, timezone overlap with every major market, and 70% cost savings vs US or UK agency rates.",
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
      lines: [{ text: '70% cost savings' }, { text: 'vs US / UK agency rates', small: true }],
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
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
    iconLabel: 'Serving clients worldwide',
    iconSubtitle: 'US · UK · Australia · Europe · Middle East',
    rows: heroScheduleItems,
    counters: [
      { value: '14+', label: 'Years offshore delivery' },
      { value: '200+', label: 'Vetted engineers' },
    ],
  },
};

export const whyCards = [
  {
    title: 'Timezone overlap with every major market',
    desc: "Nepal's UTC+5:45 sits at a rare middle ground — 5–7 hours ahead of Europe, 9+ hours ahead of the Gulf, and reachable on US East Coast mornings. That means real-time collaboration with clients from London to Dubai to New York without anyone working through the night.",
  },
  {
    title: '70% lower cost than US or UK hiring',
    desc: "Mid-level engineers at $2,500–$4,000/month all-in, versus $12,000–$20,000 for equivalent talent in the US or UK. No recruitment fees, no visa costs, no benefits overhead — just productive engineering hours at a price that makes your budget go further.",
  },
  {
    title: 'English-first, Western business culture',
    desc: "English is the medium of instruction in Nepal's top engineering colleges. Our engineers communicate clearly in writing and on calls, use Western project management tools (Jira, Linear, GitHub, Slack), and are accustomed to working inside international product teams.",
  },
  {
    title: 'Fixed-price delivery with full accountability',
    desc: 'Scope, timeline, and cost agreed before a line of code is written. We run structured two-week sprints with working demos after each cycle. You always know where your project stands and exactly what comes next.',
  },
];

export const services = [
  {
    title: 'Custom Software Development',
    desc: 'Bespoke web applications, enterprise platforms, and internal tools — built end-to-end by Nepal-based engineers on your timezone.',
    href: '/custom-software-development',
  },
  {
    title: 'SaaS Product Development',
    desc: 'Multi-tenant SaaS platforms architected to scale — from a validated MVP to enterprise-ready product in structured two-week sprints.',
    href: '/services/saas-development',
  },
  {
    title: 'Mobile App Development',
    desc: 'iOS, Android, and cross-platform apps built with Flutter and React Native by dedicated mobile engineers aligned to your market hours.',
    href: '/mobile-application-development',
  },
  {
    title: 'MVP Development',
    desc: 'Get to market in 6–10 weeks. A focused sprint to validate your idea with a shippable product — before committing to full-scale development.',
    href: '/services/mvp-development',
  },
  {
    title: 'Dedicated Development Teams',
    desc: 'A fully managed squad of Nepal-based engineers working exclusively on your product — your tools, your process, your roadmap.',
    href: '/location/hire-software-developers-from-nepal',
  },
  {
    title: 'Staff Augmentation',
    desc: 'Individual engineers embedded directly in your existing team — plugging specific skill gaps without the overhead of a full agency.',
    href: '/location/hire-software-developers-from-nepal',
  },
];

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Monthly cost (mid-level dev)', aitc: '$2,500–$4,000', col2: '$1,500–$3,000', col3: '$4,000–$8,000' },
  { feature: 'Fixed-price project option', aitc: true, col2: false, col3: false },
  { feature: 'English-first communication', aitc: true, col2: 'Varies', col3: 'Varies' },
  { feature: 'Free replacement guarantee', aitc: true, col2: false, col3: false },
  { feature: 'NDA before any discussion', aitc: true, col2: false, col3: false },
  { feature: 'Full IP ownership day one', aitc: true, col2: 'On delivery', col3: 'Varies' },
  { feature: 'Western timezone overlap', aitc: true, col2: 'Partial', col3: 'Varies' },
  { feature: 'Dedicated account manager', aitc: true, col2: false, col3: false },
  { feature: 'Proposal in 48 hours', aitc: true, col2: '1–2 weeks', col3: 'Varies' },
];

export const processSteps = [
  {
    timing: 'Day 1',
    title: 'Discovery call',
    desc: '30 minutes on your timezone to understand your product, goals, and technical requirements. We tell you honestly what we can build and how long it will take.',
  },
  {
    timing: 'Days 2–3',
    title: 'Fixed-price proposal',
    desc: 'A detailed written proposal covering scope, timeline, team composition, and a fixed price. No vague estimates — a number you can plan a budget around.',
  },
  {
    timing: 'Week 1',
    title: 'Design & architecture sprint',
    desc: 'We align on UX flows, system architecture, and technical approach before writing a line of code — so every sprint runs clean and on schedule.',
  },
  {
    timing: 'Week 2+',
    title: 'Agile delivery',
    desc: 'Two-week sprints with working demos after every cycle. Direct Slack access to your team on your hours. Adjust priorities between cycles as your product evolves.',
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
    desc: 'A dedicated squad of Nepal-based engineers working exclusively on your product — aligned to your timezone and integrated into your tools.',
    features: [
      '2–6 dedicated engineers',
      'Matched to your timezone overlap',
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
    desc: 'Individual engineers placed directly inside your existing team — your tools, your sprint, your codebase, from Kathmandu.',
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
    desc: 'HIPAA-compliant patient relationship management system built for a US health network by our Kathmandu-based team.',
    href: '/ourwork/healthcare-crm',
  },
  {
    industry: 'Fintech',
    category: 'Custom Software',
    title: 'Fintech Payment Gateway',
    desc: 'High-throughput transaction processing engine handling $1M+ daily volume for an international payments startup.',
    href: '/ourwork/fintech-payment-gateway',
  },
  {
    industry: 'E-commerce',
    category: 'AI Integration',
    title: 'AI Customer Support Bot',
    desc: 'LLM-powered support agent that reduced human ticket volume by 40% for a global e-commerce brand.',
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
        desc: 'Dedicated Nepal-based engineers on US hours.',
        href: '/location/offshore-development-team-nepal-for-usa',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Offshore Team for Australia',
        desc: 'Nepal engineers aligned to AEST hours.',
        href: '/location/offshore-development-team-nepal-for-australia',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Offshore Team for Europe',
        desc: 'Nepal engineers on CET / GMT hours.',
        href: '/location/offshore-development-team-nepal-for-europe',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Hire Developers from Nepal',
        desc: 'Pre-vetted engineers placed directly in your team.',
        href: '/location/hire-software-developers-from-nepal',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'Software Dev for US Clients',
        desc: 'Full-service software development for US businesses.',
        href: '/location/software-development-company-for-us-clients',
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
    desc: 'Patient portals, clinical workflow automation, and telehealth platforms built by Nepal-based engineers with HIPAA experience.',
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
    desc: 'Payment gateways, lending platforms, and financial data systems for fintech startups and financial services companies worldwide.',
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
    desc: 'Property listing apps, agent CRMs, rental management platforms, and investor dashboards for real estate businesses globally.',
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
    desc: 'Storefronts, inventory systems, and multi-channel commerce solutions for e-commerce brands across global markets.',
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
    desc: 'LMS platforms, course marketplaces, and interactive learning tools for EdTech startups and institutions worldwide.',
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
    desc: 'POS systems, reservation management, and delivery platforms for hospitality operators and restaurant chains worldwide.',
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
    question: 'Why choose Nepal for offshore software development?',
    answer:
      "Nepal offers a rare combination: a timezone (UTC+5:45) that overlaps with Europe, the Middle East, and Australia simultaneously — something India, Eastern Europe, or Latin America can't replicate. Engineers are English-first from university, cost significantly less than India's premium offshore firms, and are accustomed to working inside Western product teams using Jira, GitHub, Slack, and modern agile processes.",
  },
  {
    question: 'How does Nepal compare to India for offshore development?',
    answer:
      "Nepal's top engineers are cost-competitive with India's mid-tier offshore firms, but come with stronger English communication (English is the medium of instruction in Nepal's leading engineering colleges), greater cultural alignment with Western clients, and better timezone overlap with Europe and the Middle East. India has a larger talent pool; Nepal offers a tighter, more curated offshore experience with a dedicated team that doesn't rotate you through account managers.",
  },
  {
    question: 'What timezones does Nepal overlap with?',
    answer:
      "Nepal Standard Time (NPT, UTC+5:45) provides meaningful overlap with nearly every major business market: 5–7 hours with Europe (CET/GMT), 9+ hours with the Gulf (GST), 6+ hours with Australia (AEST), and reachable on US East Coast mornings (EST overlap of 4–5 hours if the Nepal team extends to early evening). This makes Nepal one of the most versatile offshore locations in the world.",
  },
  {
    question: 'How much does offshore development from Nepal cost?',
    answer:
      'Mid-level engineers cost $2,500–$4,000/month all-in — approximately 70% less than equivalent US or UK talent. Fixed-price projects start from $15,000. Dedicated team engagements start from $5,000/month for a squad of 2+ engineers. There are no recruitment fees, visa costs, or infrastructure overhead — the rate you agree is the rate you pay.',
  },
  {
    question: 'Is Nepal a reliable destination for offshore development?',
    answer:
      "Nepal has a growing, government-supported IT sector centred on Kathmandu's established IT parks and Lalitpur's tech hub. AITC has been delivering offshore software projects since 2010 across 14+ years. We maintain ISO-aligned development practices, formal NDAs on every engagement, and a structured delivery process with bi-weekly demos — the same accountability you'd expect from a local agency.",
  },
  {
    question: 'How does AITC manage offshore projects?',
    answer:
      'We run two-week agile sprints with a working product demo at the end of each cycle. Before development begins, we run a design and architecture sprint to align on UX flows and technical decisions. Throughout delivery, clients have direct Slack access to their team on their local hours, a shared project board, and written sprint summaries after each cycle.',
  },
  {
    question: 'What industries do your Nepal-based engineers serve?',
    answer:
      "We've shipped production software across healthcare (HIPAA-compliant), fintech, real estate, e-commerce, education technology, and hospitality. Our clients range from US Series A startups to established UK and Australian businesses. Tell us your industry and we'll be direct about our relevant experience.",
  },
  {
    question: 'Do you sign NDAs before discussing a project?',
    answer:
      'Yes, always. A mutual NDA is signed before any discovery call or proposal discussion. Your idea, business logic, and technical architecture are treated as completely confidential from the first conversation.',
  },
  {
    question: 'Who owns the code and intellectual property?',
    answer:
      'You do — 100%. Full IP transfer is contractually included in every engagement. Code lives in your own GitHub or GitLab repository from day one. On fixed-price projects, delivery includes complete handover: source code, documentation, infrastructure credentials, and all third-party service accounts.',
  },
  {
    question: 'What tech stacks do your Nepal-based engineers work with?',
    answer:
      'React / Next.js, Node.js, Python (Django / FastAPI), Flutter, React Native, PostgreSQL, MongoDB, AWS, and GCP are our most common stacks. We also cover Laravel, Vue, Ruby on Rails, and several niche technologies. With 200+ engineers across our network, we almost certainly cover the stack your product already runs on.',
  },
  {
    question: 'Can we start with a small engagement before committing to a larger team?',
    answer:
      "Yes — and we actively encourage it. Many of our longest-running client relationships started with a small fixed-price build or a single engineer placed in the client's team for a trial month. It's the lowest-risk way to evaluate quality and working style before scaling.",
  },
  {
    question: 'How quickly can we get an offshore Nepal team started?',
    answer:
      'Discovery calls can be booked same-day. Proposals are delivered within 48 hours of the call. For dedicated teams and staff augmentation, matched engineer profiles arrive within 24 hours of sharing requirements. Most clients have their offshore Nepal team onboarded and running sprints within 2 weeks of first contact.',
  },
];
