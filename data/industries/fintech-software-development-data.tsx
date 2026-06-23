import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$310B', label: 'Global fintech market by 2025' },
  { value: '65%', label: 'Adults now use digital payments' },
  { value: '3x', label: 'Faster to market with a dedicated team' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Fintechs that fail compliance at launch', value: '42%', status: 'warning' },
  { label: 'Users who abandon slow KYC flows', value: '68%', status: 'warning' },
  { label: 'Cost reduction with automation', value: '40%', status: 'good' },
  { label: 'Growth from embedded finance features', value: '+55%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Fintech & Financial Services',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Fintech & Financial Services', highlight: true },
  ],
  description:
    'From payment platforms and digital banking to lending, wealth management, and InsurTech — we build the compliant, scalable financial software that helps you move fast without breaking regulations.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['PCI-DSS & SOC 2 ready builds', 'KYC/AML integration included', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'PCI-DSS ready' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
    iconLabel: 'Fintech reality',
    iconSubtitle: 'What financial software teams are dealing with',
    items: heroMetrics,
    note: 'Compliance, speed, and user experience are all solvable with the right engineering team.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Payment & Neo-bank Startups',
    desc: 'Early-stage founders building digital wallets, payment rails, or challenger bank products who need compliant architecture from day one.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    title: 'Lending & Credit Platforms',
    desc: 'Companies building consumer or SME lending platforms — loan origination, credit scoring, underwriting automation, and repayment management.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Investment & Wealth Platforms',
    desc: 'Robo-advisors, trading platforms, and portfolio management tools for retail or institutional clients that require real-time data and regulatory reporting.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    title: 'InsurTech Companies',
    desc: 'Digital insurance platforms covering policy management, claims automation, telematics, and embedded insurance products built on top of existing carriers.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Compliance architecture retrofitted after launch',
    solution: 'We design PCI-DSS, SOC 2, and KYC/AML compliance into the architecture from sprint one — not as an afterthought that requires a costly rewrite at regulatory review time.',
  },
  {
    problem: 'KYC onboarding flows that lose 60%+ of users',
    solution: 'We build streamlined, mobile-first KYC flows integrated with Jumio, Onfido, or Stripe Identity — reducing drop-off without compromising verification accuracy.',
  },
  {
    problem: 'Payment integrations that take months to build',
    solution: 'Our engineers have built integrations with Stripe, Plaid, TrueLayer, Wise, and SWIFT. We scope, build, and test payment rails in weeks — not quarters.',
  },
  {
    problem: 'Real-time transaction processing that cannot scale',
    solution: 'We architect event-driven backends with message queues, idempotent transaction handling, and horizontal scaling so your payment throughput grows with your volume — not against it.',
  },
  {
    problem: 'Fraud detection that is either too strict or too loose',
    solution: 'We build rule-based and ML-assisted fraud scoring engines that flag suspicious transactions without blocking legitimate ones — tuned to your user base and transaction patterns.',
  },
  {
    problem: 'Regulatory reporting that is done manually in spreadsheets',
    solution: 'We build automated regulatory reporting pipelines — generating the structured transaction data, audit logs, and reconciliation reports your compliance team and regulators require.',
  },
];

export const fintechProjectTabs: SolutionTab[] = [
  {
    label: 'Payment Platforms',
    desc: 'Custom payment processing systems — digital wallets, payment gateways, multi-currency accounts, P2P transfers, and split payment engines. Integrated with Stripe, Plaid, TrueLayer, and open banking APIs.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    label: 'Digital Banking & Neo-banks',
    desc: 'Current accounts, savings products, card issuing (via Marqeta or Stripe Issuing), transaction history, spending analytics, and customer onboarding — white-labelled or fully custom.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' />
      </svg>
    ),
  },
  {
    label: 'Lending & Credit',
    desc: 'Loan origination platforms, credit scoring engines (bureau integrations + alternative data), underwriting automation, repayment management, and collections workflow systems.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    label: 'Investment & Wealth Tech',
    desc: 'Robo-advisors, portfolio management dashboards, trading platform UIs, fractional investing engines, real-time market data feeds, and MiFID II / SEC-compliant reporting.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    label: 'KYC, AML & RegTech',
    desc: 'KYC onboarding flows with document verification (Jumio, Onfido), AML transaction monitoring, sanctions screening, PEP checks, and regulatory reporting pipelines for FCA, FinCEN, or AUSTRAC.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    label: 'InsurTech & Embedded Finance',
    desc: 'Digital insurance platforms — policy management, claims automation, telematics, and underwriting engines. Embedded finance products — BNPL, insurance APIs, and banking-as-a-service wrappers.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Compliance & Product Discovery',
    desc: 'We map your regulatory requirements, payment flows, user onboarding journey, and integration dependencies before writing a line of code — so compliance is an input, not an afterthought.',
  },
  {
    timing: 'Week 3–4',
    title: 'Architecture & Security Design',
    desc: 'We design your data model, API layer, security architecture, and third-party integration points — with PCI-DSS, SOC 2, and audit log requirements built into every decision.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Development',
    desc: 'Core financial features built and demonstrated in two-week sprints — with real transaction flows testable from the first sprint. Compliance and security reviewed at each sprint end.',
  },
  {
    timing: 'Final 2–4 weeks',
    title: 'Security Testing & Launch',
    desc: 'Penetration testing, load testing on payment flows, regulatory review, and staged rollout — starting with internal users before full launch to protect your licence and reputation.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'PCI-DSS Compliance',
    desc: 'Payment Card Industry Data Security Standard compliance designed into every payment flow — tokenisation, encryption, and network segmentation from the start.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    title: 'KYC & AML Integration',
    desc: 'Identity verification (Jumio, Onfido, Stripe Identity) and transaction monitoring built into onboarding — reducing compliance risk without sacrificing conversion rate.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    title: 'SOC 2 Type II Ready',
    desc: 'Security controls, access logging, and audit trails designed to support SOC 2 Type II certification — documentation and evidence collection built into the platform.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'GDPR & Data Residency',
    desc: 'Data minimisation, consent management, right-to-erasure workflows, and regional data residency options — so you can operate in the EU without a compliance incident.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Open Banking & API Standards',
    desc: 'Open Banking API integration (PSD2, UK Open Banking, CDR) — account information, payment initiation, and consent management built to the standard.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    title: 'Fraud Detection & Prevention',
    desc: 'Rule-based and ML-assisted fraud scoring on transactions — velocity checks, device fingerprinting, behavioural anomaly detection, and chargeback dispute workflows.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88' />
      </svg>
    ),
  },
];

export const fintechSectors: IndustrySector[] = [
  {
    name: 'Payment Platforms & Wallets',
    tagline: 'Custom payment rails, wallets, and multi-currency accounts.',
    desc: '',
    useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    name: 'Digital Banking & Neo-banks',
    tagline: 'Current accounts, card issuing, and transaction analytics.',
    desc: '',
    useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' />
      </svg>
    ),
  },
  {
    name: 'Lending & Credit Platforms',
    tagline: 'Loan origination, credit scoring, and underwriting automation.',
    desc: '',
    useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    name: 'Investment & WealthTech',
    tagline: 'Robo-advisors, portfolio dashboards, and trading UIs.',
    desc: '',
    useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    name: 'InsurTech',
    tagline: 'Policy management, claims automation, and embedded insurance.',
    desc: '',
    useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-pink-500',
    iconBg: 'bg-pink-500/15',
    icon: (
      <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    name: 'RegTech & KYC/AML',
    tagline: 'Identity verification, AML monitoring, and compliance reporting.',
    desc: '',
    useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88' />
      </svg>
    ),
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Custom Fintech Development',
    desc: 'End-to-end payment, lending, and banking platform builds from discovery to launch.',
    href: '/services/custom-software-development',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'MVP Development',
    desc: 'Validated fintech MVP in 10–14 weeks — enough to raise a seed round or test with early users.',
    href: '/build/an-mvp',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Dedicated Engineering Teams',
    desc: 'Extend your in-house team with Nepal-based fintech engineers embedded into your sprint cycle.',
    href: '/services/dedicated-development-team',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Mobile App Development',
    desc: 'iOS and Android fintech apps — digital wallets, investment platforms, and insurance apps.',
    href: '/services/mobile-app-development',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'AI Chatbot Development',
    desc: 'AI assistants for financial product onboarding, KYC guidance, and customer support automation.',
    href: '/build/build-an-ai-chatbot',
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Custom ERP Development',
    desc: 'Connect your fintech platform to finance, operations, and compliance reporting systems.',
    href: '/build/erp-system',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Do you have experience building PCI-DSS compliant payment systems?',
    answer:
      'Yes. We design payment systems with PCI-DSS compliance built into the architecture — tokenisation of card data, encrypted transmission, network segmentation, and audit logging. We work with PCI-certified payment processors (Stripe, Adyen) so you never store raw card data, which significantly reduces your compliance scope.',
  },
  {
    question: 'Can you integrate KYC and AML checks into our onboarding flow?',
    answer:
      'Yes. We build KYC onboarding flows integrated with Jumio, Onfido, Stripe Identity, or Veriff — covering document scanning, liveness checks, sanctions screening, and PEP checks. We design the flow to minimise drop-off while meeting your regulatory requirements, whether that is FCA, FinCEN, AUSTRAC, or MAS.',
  },
  {
    question: 'Can you build open banking integrations?',
    answer:
      'Yes. We build PSD2 and UK Open Banking integrations via TrueLayer, Plaid, or Yapily — covering account information services (AIS), payment initiation services (PIS), and consent management flows. We scope which provider and regions are relevant to your product during discovery.',
  },
  {
    question: 'How do you handle the security of financial data?',
    answer:
      'Security is an architecture decision, not a feature we add at the end. We implement encryption at rest and in transit, role-based access control, comprehensive audit logs, network segmentation, and penetration testing before launch. For client-specific requirements — SOC 2, ISO 27001, or regional data residency — we design to those standards from the start.',
  },
  {
    question: 'Can you build a fintech MVP quickly enough to support a fundraise?',
    answer:
      'Yes. We build validated fintech MVPs in 10–16 weeks — covering the core user flow, compliance essentials, and enough live functionality to demonstrate to investors. We scope what is essential for the MVP vs what can follow in v2, so you are not building a full platform before you have proven demand.',
  },
  {
    question: 'How much does a custom fintech platform cost to build?',
    answer:
      'A fintech MVP with core payment flows and KYC onboarding starts from $30,000–$50,000. A full platform — digital banking, lending system, or investment platform — ranges from $80,000 to $200,000+. Enterprise-grade systems with complex integrations and multi-jurisdiction compliance start above $200,000. We provide a fixed-price estimate after a free scoping call.',
  },
];
