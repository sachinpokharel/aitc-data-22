import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '90%', label: 'Of startups fail — most from technical missteps' },
  { value: '10–14', label: 'Weeks to a shippable MVP with AITC' },
  { value: '70%', label: 'Cost savings vs US/UK in-house engineers' },
  { value: '100%', label: 'IP ownership — yours from day one' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Startups that overbuild their first MVP', value: '70%', status: 'warning' },
  { label: 'Founders who switch tech partner once', value: '55%', status: 'warning' },
  { label: 'Faster time to market with a dedicated team', value: '3x', status: 'good' },
  { label: 'Cost saving vs US/UK senior engineers', value: '70%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Startups & Scale-ups',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Startups & Scale-ups', highlight: true },
  ],
  description:
    'We build the MVPs, SaaS products, and technical foundations that take startups from idea to traction — with the engineering rigour to scale without a painful rewrite. Nepal-based engineers at 70% the cost of US/UK hiring.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Built to scale from day one', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: '10–14 week MVP' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
    iconLabel: 'Startup reality',
    iconSubtitle: 'What founders are dealing with',
    items: heroMetrics,
    note: 'The right technical partner ships faster, costs less, and builds something that does not need to be rewritten at Series A.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Pre-seed & Seed Founders',
    desc: 'Non-technical or semi-technical founders who need an engineering partner to build their first product — from validated Figma prototype to a live, shippable MVP.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Series A Scale-ups',
    desc: 'Companies past product-market fit who need to scale their engineering team fast — without the 6-month hiring cycle for senior engineers in London, New York, or Sydney.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Accelerator Cohort Companies',
    desc: 'YC, Techstars, and other accelerator companies who need to build and ship quickly within a 3-month demo day deadline — with a team that understands the pace and the pressure.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Corporate Innovation Teams',
    desc: 'Enterprise innovation labs and digital transformation teams who need to validate new product ideas quickly — without the internal IT backlog or the procurement cycle.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'First technical hire takes 4–6 months and costs $150K+',
    solution: 'We give you a senior engineering team from week one — at 70% the cost of US/UK in-house hiring, with no equity, no benefits overhead, and no notice periods.',
  },
  {
    problem: 'MVP takes 12 months instead of 3',
    solution: 'We scope, design, and ship a focused MVP in 10–14 weeks — by cutting scope ruthlessly to the core user flow and building exactly what is needed to test your hypothesis, not a full product.',
  },
  {
    problem: 'Technical debt makes the v2 a rewrite',
    solution: 'We build with the architecture patterns that let you scale — clean separation of concerns, typed APIs, automated tests on critical paths — so your Series A engineers inherit code they can work with.',
  },
  {
    problem: 'Freelancers are cheap but unreliable',
    solution: 'We operate as a team, not a collection of freelancers — with a dedicated project lead, sprint ceremonies, weekly demos, and a shared commitment to your roadmap beyond the current invoice.',
  },
  {
    problem: 'Building for today cannot accommodate tomorrow',
    solution: 'We design data models and API layers that can support multi-tenancy, internationalisation, and feature expansion from the start — without an architectural rewrite when you scale.',
  },
  {
    problem: 'No one owns the product vision technically',
    solution: 'We embed a technical lead who challenges your product decisions, proposes alternatives when a feature is over-engineered, and keeps your roadmap grounded in what is actually buildable in your budget.',
  },
];

export const startupProjectTabs: SolutionTab[] = [
  {
    label: 'MVP Development',
    desc: 'Focused MVPs shipped in 10–14 weeks — scoped to the core user flow that tests your hypothesis, built with the architecture that survives success, and documented so your next engineer can onboard in a day.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    label: 'SaaS Product Development',
    desc: 'Multi-tenant SaaS platforms — subscription billing, team workspaces, usage-based pricing, admin dashboards, customer onboarding flows, and the integrations your enterprise customers will ask for in the sales process.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
  {
    label: 'Mobile App Development',
    desc: 'Native iOS and Android apps, or React Native for cross-platform delivery — consumer-facing products with smooth onboarding, push notifications, in-app payments, and the performance users expect from a well-funded startup.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3' />
      </svg>
    ),
  },
  {
    label: 'Marketplace Platforms',
    desc: 'Two-sided marketplaces — buyer and seller onboarding, listing management, trust and safety systems, payment processing with platform take-rate, dispute resolution, and the network effects features that make marketplaces defensible.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' />
      </svg>
    ),
  },
  {
    label: 'AI-Powered Products',
    desc: 'AI product development — LLM integration, RAG pipelines, AI agents, computer vision, and predictive analytics. We build the product wrapper, the data pipeline, and the fine-tuning infrastructure that turns a GPT-4o call into a defensible product.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' />
      </svg>
    ),
  },
  {
    label: 'Scale-up Engineering',
    desc: 'Engineering scale-up for Series A/B companies — dedicated engineering teams embedded into your product org, legacy codebase refactoring, infrastructure scaling, and the senior engineering leadership you need before you can afford a VP of Engineering.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1',
    title: 'Product Scoping & Scope Cuts',
    desc: 'We run a focused scoping session to define the core user flow, cut scope ruthlessly to the MVP, and agree on a fixed price and timeline — before any design or engineering work begins.',
  },
  {
    timing: 'Week 2–3',
    title: 'Design & Architecture',
    desc: 'UX wireframes validated with your target users, and a technical architecture designed to support the MVP and the next two rounds of features — so you do not rewrite at v2.',
  },
  {
    timing: 'Weeks 4–N',
    title: 'Sprint-based Development',
    desc: 'Two-week sprints with a shippable increment at the end of each one. You test real features with real users from the first sprint — not after 6 months of building in the dark.',
  },
  {
    timing: 'Launch',
    title: 'Launch & Handover',
    desc: 'Production deployment, analytics setup, error monitoring, and full codebase documentation. Your engineers — or ours — can continue from a clean, documented starting point.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'Code Ownership & IP Transfer',
    desc: 'Full IP transfer on every project — all code, designs, and documentation become yours on final payment. No licence lock-in, no dependency on AITC to keep your product running.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'GDPR-Ready from Day One',
    desc: 'User data architecture designed for GDPR compliance — consent flows, data minimisation, right-to-erasure, and data residency options — so you can acquire European customers without a compliance rewrite.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Scalable Cloud Architecture',
    desc: 'AWS or GCP infrastructure designed to scale — containerised services, managed databases, CDN, auto-scaling, and monitoring — so your first viral moment does not take the product down.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
  {
    title: 'Security Best Practices',
    desc: 'OWASP Top 10 mitigations built into every project — input validation, parameterised queries, secure session management, and dependency scanning — so security is not a sprint 20 afterthought.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
  {
    title: 'NDA & Confidentiality',
    desc: 'Mutual NDA signed before any discovery call or code review. Your product idea, user data, and technical architecture are treated as confidential — before and after the engagement.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'Fixed Price, No Surprise Invoices',
    desc: 'We agree a fixed scope and fixed price before development begins. If scope grows, we agree it together before we build it — no surprise invoices at the end of a sprint.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
];

export const startupSectors: IndustrySector[] = [
  {
    name: 'Pre-seed & Seed Founders',
    tagline: 'From validated idea to shippable MVP in 10–14 weeks.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /></svg>,
  },
  {
    name: 'Series A Scale-ups',
    tagline: 'Dedicated engineering teams that scale with your roadmap.',
    desc: '', useCases: [],
    href: '/services/dedicated-development-team',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' /></svg>,
  },
  {
    name: 'Accelerator Cohort Companies',
    tagline: 'Ship before demo day — sprint-paced builds for tight deadlines.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>,
  },
  {
    name: 'Corporate Innovation Labs',
    tagline: 'Validate new product ideas at startup speed without the backlog.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Bootstrapped Founders',
    tagline: 'Senior engineering at 70% the cost of US/UK in-house hiring.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-pink-500', iconBg: 'bg-pink-500/15',
    icon: <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>,
  },
  {
    name: 'Non-technical Founders',
    tagline: 'A technical co-founder equivalent — without the equity.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'MVP Development', desc: 'Shippable MVP in 10–14 weeks — scoped to your core hypothesis, not a full product.', href: '/build/an-mvp' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Dedicated Engineering Teams', desc: 'Senior Nepal-based engineers embedded into your product team from week one.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Custom Software Development', desc: 'Full-stack web, mobile, and AI product development from design to production.', href: '/services/custom-software-development' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Mobile App Development', desc: 'iOS and Android apps built for the performance and UX your users expect.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'AI Product Development', desc: 'LLM-powered products, RAG pipelines, and AI agents built into production applications.', href: '/build/build-an-ai-chatbot' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Marketplace Platforms', desc: 'Two-sided marketplaces with payments, trust systems, and network effects features.', href: '/build/build-a-marketplace-app' },
];

export const faqs: FAQ[] = [
  {
    question: 'How quickly can you ship an MVP?',
    answer:
      'We ship focused MVPs in 10–14 weeks. The key is scope discipline — we cut ruthlessly to the core user flow that tests your hypothesis, build that well, and ship it. We have seen founders waste 12 months and $200K building features that users did not want. A tight 10-week MVP prevents that.',
  },
  {
    question: 'Do I own the code?',
    answer:
      'Yes — 100%. All code, designs, and documentation become yours on final payment. There is no licence dependency on AITC, no monthly fee to keep your product running, and no lock-in. You can take the codebase to any engineer or agency after we finish.',
  },
  {
    question: 'How do you compare to hiring in-house?',
    answer:
      'A senior full-stack engineer in London or New York costs $120K–$200K per year — plus equity, benefits, and a 3–6 month hiring cycle. Our dedicated teams start from $6,000–$12,000/month depending on team size, with no equity, no benefits overhead, and no notice periods. For early-stage startups, the maths is straightforward.',
  },
  {
    question: 'What if I have a Figma design and just need engineering?',
    answer:
      'We take Figma-ready designs and ship production code. We will review your designs for engineering feasibility and flag anything that will take disproportionate time to build — before we start — so there are no surprises.',
  },
  {
    question: 'Can you work with our existing technical co-founder or team?',
    answer:
      'Yes. We embed into your existing team — attending your standups, working in your GitHub repo, and following your conventions. We have worked alongside solo technical co-founders, small founding teams, and larger engineering orgs. We adapt to your process, not the other way around.',
  },
  {
    question: 'What happens after the MVP launches?',
    answer:
      'We offer post-launch support, ongoing feature development, and dedicated team arrangements for scale-ups. Most of our clients start with an MVP and continue with us for the next 12–24 months as the product grows. We also do clean handovers if you want to bring engineering in-house — with full documentation and a structured knowledge transfer.',
  },
];
