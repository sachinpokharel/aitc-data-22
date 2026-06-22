import type { BuildHeroData } from '@/components/pages/static-components/BuildHero';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwithservice';

export const heroStats = [
  { value: '8+', label: 'CRM modules available' },
  { value: '8–40', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$25K', label: 'Starting price' },
];

export const heroTrustItems = ['100% IP ownership', 'Fully custom workflows', 'Free scoping call'];

export const heroModules: { label: string; status: 'Active' | 'Configuring' }[] = [
  { label: 'Lead & Contact Management', status: 'Active' },
  { label: 'Sales Pipeline', status: 'Active' },
  { label: 'Email & Communication', status: 'Active' },
  { label: 'Marketing Automation', status: 'Configuring' },
  { label: 'Analytics & Reporting', status: 'Configuring' },
];

export const heroData: BuildHeroData = {
  badge: 'Custom CRM Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build a CRM That ' }, { text: 'Closes More Deals', highlight: true }],
  description:
    'Stop paying for features you never use. We build custom CRMs around your exact sales process — contacts, pipelines, automation, and reporting that match how your team actually works.',
  primaryCTA: { label: 'Get CRM Estimate →', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-primary',
      lines: [{ text: 'From $25K all-in' }],
    },
    {
      position: 'top-right',
      bg: 'bg-white',
      lines: [{ text: 'Free scoping call', color: 'text-xs font-bold text-secondary' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-primary/10',
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    iconLabel: 'CRM modules',
    iconSubtitle: 'Your pipeline, fully connected',
    rows: heroModules,
    counters: [
      { value: '8+', label: 'CRM modules' },
      { value: '100%', label: 'IP ownership' },
    ],
  },
};

export const whenCards = [
  {
    title: 'Salesforce and HubSpot cost too much',
    points: [
      'Seat-based SaaS licences compound fast as your team grows',
      'A custom CRM is a one-time investment you own outright',
    ],
  },
  {
    title: 'Your sales process doesn\'t fit the template',
    points: [
      'Generic CRMs force you to adapt your workflow to their pipeline stages',
      'A custom build mirrors exactly how your team sells',
    ],
  },
  {
    title: 'You need tight integration with internal systems',
    points: [
      'Off-the-shelf CRMs rely on limited APIs and third-party connectors',
      'A custom CRM connects directly to your ERP, billing, and ops tools',
    ],
  },
  {
    title: 'You want full ownership of your customer data',
    points: [
      'SaaS CRMs store your data on their infrastructure under their terms',
      'Own your database, your schema, and your customer relationships',
    ],
  },
];

export const crmModuleTabs: SolutionTab[] = [
  {
    label: 'Lead & Contact Management',
    desc: 'Unified contact records, company hierarchies, lead scoring, duplicate detection, and custom field mapping for your specific business model.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Sales Pipeline',
    desc: 'Visual drag-and-drop pipelines, custom deal stages, probability tracking, weighted forecasting, and rep-level performance dashboards.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
  },
  {
    label: 'Email & Communication',
    desc: 'Two-way email sync, call logging, SMS integration, shared inbox, conversation history per contact, and automated follow-up sequences.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    label: 'Marketing Automation',
    desc: 'Drip campaigns, lead nurturing workflows, segmentation, A/B testing, campaign attribution, and ROI reporting tied to pipeline outcomes.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
        />
      </svg>
    ),
  },
  {
    label: 'Customer Support & Ticketing',
    desc: 'Helpdesk ticketing, SLA management, priority queues, customer portal, CSAT tracking, and escalation rules tied to account value.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Quotes & Proposals',
    desc: 'Branded proposal builder, product catalogue, discount rules, e-signature, approval workflows, and conversion tracking per deal.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        />
      </svg>
    ),
  },
  {
    label: 'Task & Activity Management',
    desc: 'Shared task queues, meeting scheduling, activity reminders, calendar sync, and productivity analytics per rep or team.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        />
      </svg>
    ),
  },
  {
    label: 'Analytics & Reporting',
    desc: 'Custom dashboards, pipeline velocity metrics, churn prediction, revenue forecasting, and exportable reports for leadership.',
    iconBg: 'from-indigo-50 to-indigo-100',
    icon: (
      <svg className='size-24 text-indigo-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
        />
      </svg>
    ),
  },
  {
    label: 'Integration Hub',
    desc: 'Native connectors to your ERP, accounting software, email provider, payment gateway, and any third-party tool via REST API or webhook.',
    iconBg: 'from-pink-50 to-pink-100',
    icon: (
      <svg className='size-24 text-pink-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    label: 'Mobile CRM',
    desc: 'Native iOS and Android apps for field sales reps — offline mode, business card scanning, location check-ins, and real-time sync.',
    iconBg: 'from-gray-100 to-gray-200',
    icon: (
      <svg className='size-24 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1',
    title: 'Discovery & scoping',
    desc: 'We map your sales process, define pipeline stages, identify integrations needed, and scope the module set.',
  },
  {
    timing: 'Weeks 2–3',
    title: 'Architecture & design',
    desc: 'Data model, permissions structure, workflow logic, and UI/UX wireframes reviewed and approved before any code is written.',
  },
  {
    timing: 'Weeks 4–N',
    title: 'Sprint-based development',
    desc: 'Modules delivered in two-week sprints so you test working software early and request adjustments before the next sprint.',
  },
  {
    timing: 'Final phase',
    title: 'Data migration, training & launch',
    desc: 'Import contacts and deals from your existing CRM or spreadsheets, train your team, and go live with full support.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'Starter CRM',
    price: '$25K – $60K',
    topBadge: '8–14 weeks',
    desc: 'Core CRM for small teams — contacts, pipeline, email logging, and basic reporting.',
    features: [
      'Contact & lead management',
      'Sales pipeline (custom stages)',
      'Email & activity logging',
      'Role-based access',
      'Basic dashboards',
      'Cloud deployment',
    ],
    highlight: false,
    cta: 'Get a starter estimate',
    ctaHref: '/free-project-estimate',
  },
  {
    title: 'Growth CRM',
    price: '$60K – $150K',
    topBadge: '16–28 weeks',
    desc: 'Multi-team CRM with automation, support ticketing, and third-party integrations.',
    features: [
      'All Starter features',
      'Marketing automation',
      'Customer support & ticketing',
      'Quotes & proposal builder',
      'Third-party integrations',
      'Advanced analytics',
      'Mobile app (iOS + Android)',
    ],
    highlight: true,
    cta: 'Get a growth estimate',
    ctaHref: '/free-project-estimate',
  },
  {
    title: 'Enterprise CRM',
    price: '$150K – $350K+',
    topBadge: '28–50+ weeks',
    desc: 'Full enterprise CRM platform — multi-region, AI-assisted, deeply integrated with your entire tech stack.',
    features: [
      'All Growth features',
      'AI lead scoring & forecasting',
      'Multi-region / multi-brand',
      'Custom approval workflows',
      'SSO/SAML',
      'Data warehousing',
      'API ecosystem',
      'Dedicated support retainer',
    ],
    highlight: false,
    cta: 'Get an enterprise estimate',
    ctaHref: '/free-project-estimate',
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
        title: 'Custom Software Development',
        desc: 'End-to-end custom software built around your business processes and workflows.',
        href: '/custom-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'ERP System Development',
        desc: 'Unify finance, HR, inventory, and procurement alongside your CRM in one platform.',
        href: '/build/erp-system',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'SaaS Development',
        desc: 'Multi-tenant CRM platforms and cloud-native products built for scale.',
        href: '/services/saas-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Hire Software Developers',
        desc: 'Pre-vetted Nepal-based engineers to join your in-house CRM team.',
        href: '/hire-software-developer-nepal',
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
        title: 'MVP Development',
        desc: 'Validate your CRM concept fast with a working minimum viable product.',
        href: '/build/an-mvp',
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
        title: 'Real Estate',
        desc: 'Lead capture, property matching, agent pipelines, and client communication in one CRM.',
        href: '/industries/real-estate-software-development',
      },
      {
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
        title: 'Healthcare',
        desc: 'HIPAA-compliant patient CRM covering referrals, appointments, and follow-up care.',
        href: '/industries/healthcare-software-development',
      },
      {
        iconBg: 'bg-[#fff3e8]',
        iconColor: 'text-[#ff7500]',
        title: 'Retail & E-commerce',
        desc: 'Customer profiles, purchase history, loyalty programmes, and re-engagement campaigns.',
        href: '/industries/retail-software-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Financial Services',
        desc: 'Client onboarding, AUM tracking, compliance workflows, and relationship management.',
        href: '/industries/fintech-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Education',
        desc: 'Student enquiry pipelines, enrolment tracking, alumni management, and fee follow-up.',
        href: '/industries/education-software-development',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Manufacturing & B2B',
        desc: 'Account-based selling, distributor management, and long-cycle deal tracking.',
        href: '/industries/manufacturing-software-development',
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How long does custom CRM development take?',
    answer:
      'A starter CRM (contacts, pipeline, email logging) takes 8–14 weeks. A growth CRM with automation and support ticketing takes 16–28 weeks. Enterprise platforms with AI features and multi-region support can take 28–50+ weeks depending on complexity.',
  },
  {
    question: 'Can you migrate data from our existing CRM?',
    answer:
      'Yes. We migrate from Salesforce, HubSpot, Zoho, Pipedrive, and spreadsheets. We audit your data, clean and map it to the new schema, run parallel testing, then cut over — minimising downtime and data loss.',
  },
  {
    question: 'Will the CRM integrate with our existing tools?',
    answer:
      'Yes. We build native connectors to your email provider (Gmail, Outlook), accounting software (QuickBooks, Xero), telephony (Twilio), marketing platforms, and any internal system via REST API or webhook.',
  },
  {
    question: 'Do we own the code and IP?',
    answer:
      'Yes — 100%. Full IP transfer and NDA are signed before any work begins. The source code, database schemas, and all documentation belong to you.',
  },
  {
    question: 'Can we start with core features and add modules later?',
    answer:
      'Absolutely. We design the architecture to be modular from day one. Start with pipeline and contacts, then add marketing automation, ticketing, or mobile apps as your needs grow — no rework required.',
  },
  {
    question: 'What technologies do you use to build CRMs?',
    answer:
      'Typically React or Next.js frontend, Node.js or Python/Django backend, PostgreSQL database, and cloud deployment on AWS or Azure. For mobile apps we use React Native. We adapt the stack to your team or compliance requirements.',
  },
  {
    question: 'Can the CRM handle multiple teams or regions?',
    answer:
      'Yes. We support role-based access, team hierarchies, territory management, and multi-region data residency. Each team or region can have its own pipeline stages, fields, and reporting while sharing a single contact database.',
  },
  {
    question: 'What ongoing support is available after launch?',
    answer:
      'We offer monthly retainer support covering bug fixes, feature additions, and infrastructure management. Most clients keep a small dedicated team to handle ongoing development as their CRM evolves with the business.',
  },
];

export const crmIndustrySectors: IndustrySector[] = [
  {
    name: 'Real Estate',
    tagline: 'Close more properties, faster.',
    desc: 'Track leads from first inquiry to signed contract. Manage agent pipelines, property matches, and client communication in one place — with automated follow-ups so no deal goes cold.',
    useCases: ['Lead-to-listing pipeline', 'Agent performance', 'Automated follow-up', 'Client portal'],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-6 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    tagline: 'Manage patients, not spreadsheets.',
    desc: 'HIPAA-compliant patient CRM covering referrals, appointments, care follow-ups, and billing communication. Built for clinics, hospitals, and telehealth providers who need data security without complexity.',
    useCases: ['Patient referral tracking', 'Appointment pipeline', 'HIPAA compliance', 'Care follow-ups'],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-pink-500',
    iconBg: 'bg-pink-500/15',
    icon: (
      <svg className='size-6 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    name: 'Financial Services',
    tagline: 'Grow AUM, strengthen client trust.',
    desc: 'Onboard clients, track portfolios, manage compliance workflows, and log every interaction — all in a CRM built for the scrutiny of financial regulation and the expectations of high-value clients.',
    useCases: ['Client onboarding', 'AUM tracking', 'Compliance workflows', 'Advisor dashboards'],
    href: '/industries/fintech-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-6 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    name: 'Education',
    tagline: 'Turn enquiries into enrolments.',
    desc: 'Manage student enquiry pipelines, track application stages, automate admission communications, and handle alumni relationships — from first interest through graduation and beyond.',
    useCases: ['Enquiry-to-enrolment', 'Application tracking', 'Alumni management', 'Fee follow-up'],
    href: '/industries/education-software-development',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-6 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.606 50.606 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    name: 'Manufacturing & B2B',
    tagline: 'Win long-cycle deals at scale.',
    desc: 'Account-based selling, distributor and channel partner management, quote-to-order workflows, and long deal-cycle tracking — built for the complexity of B2B sales with multiple stakeholders.',
    useCases: ['Account-based selling', 'Distributor management', 'Quote-to-order', 'Deal forecasting'],
    href: '/industries/manufacturing-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-6 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    name: 'Retail & E-commerce',
    tagline: 'Build loyalty, reduce churn.',
    desc: 'Customer profiles built from purchase history, loyalty programmes tied to CRM events, re-engagement campaigns triggered by behaviour, and support ticketing connected directly to order data.',
    useCases: ['Customer profiles', 'Loyalty programmes', 'Re-engagement', 'Order-linked support'],
    href: '/industries/ecommerce-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-6 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
      </svg>
    ),
  },
];
