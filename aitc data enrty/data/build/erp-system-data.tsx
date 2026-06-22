import type { BuildHeroData } from '@/components/pages/static-components/BuildHero';
import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwithservice';

export const heroStats = [
  { value: '10+', label: 'ERP modules available' },
  { value: '14–60', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$50K', label: 'Starting price' },
];

export const heroTrustItems = ['100% IP ownership', 'Modular architecture', 'Free scoping call'];

export const heroModules: { label: string; status: 'Active' | 'Configuring' }[] = [
  { label: 'Finance & Accounting', status: 'Active' },
  { label: 'HR & Payroll', status: 'Active' },
  { label: 'Inventory Management', status: 'Active' },
  { label: 'Procurement', status: 'Configuring' },
  { label: 'BI & Reporting', status: 'Configuring' },
];

export const heroData: BuildHeroData = {
  badge: 'Custom ERP Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build an ERP System That ' }, { text: 'Runs Your Business', highlight: true }],
  description:
    'Stop duct-taping spreadsheets and disconnected tools. We build unified ERP systems that connect finance, HR, inventory, procurement, and operations into one platform.',
  primaryCTA: { label: 'Get ERP Estimate →', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-primary',
      lines: [{ text: 'From $50K all-in' }],
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
          d='M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2'
        />
      </svg>
    ),
    iconLabel: 'ERP modules',
    iconSubtitle: 'Your platform, fully connected',
    rows: heroModules,
    counters: [
      { value: '10+', label: 'ERP modules' },
      { value: '100%', label: 'IP ownership' },
    ],
  },
};

export const whenCards = [
  {
    title: 'SAP and Oracle are too expensive',
    points: [
      'Enterprise licences run hundreds of thousands per year',
      'A custom ERP is a one-time build you own outright',
    ],
  },
  {
    title: 'Spreadsheets can no longer scale',
    points: [
      'Version conflicts, data silos, and manual errors compound fast',
      'QuickBooks + Excel works until it doesn\'t',
    ],
  },
  {
    title: 'Your workflows are industry-specific',
    points: [
      'Off-the-shelf ERPs force you into generic processes',
      'A custom build maps exactly to how your business operates',
    ],
  },
  {
    title: 'You need a system that grows with you',
    points: [
      'Add departments, users, and integrations incrementally',
      'No rip-and-replace when requirements change',
    ],
  },
];

export const erpModuleTabs: SolutionTab[] = [
  {
    label: 'Financial Management',
    desc: 'General ledger, AP/AR, budgeting, multi-currency support, and real-time P&L reporting — all in one unified finance module.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Inventory & Warehouse',
    desc: 'Real-time stock tracking, reorder automation, barcode/RFID scanning, and multi-warehouse management.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
        />
      </svg>
    ),
  },
  {
    label: 'Procurement & Vendors',
    desc: 'Purchase order workflows, vendor scorecards, contract lifecycle management, and spend analytics.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
    label: 'HR & Payroll',
    desc: 'Employee records, leave management, payroll processing, benefits administration, and compliance reporting.',
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
    label: 'Project Management',
    desc: 'Task tracking, resource allocation, timesheets, Gantt charts, and project-level P&L visibility.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6m-6 4h3'
        />
      </svg>
    ),
  },
  {
    label: 'Sales & CRM',
    desc: 'Lead tracking, quote-to-cash automation, pipeline visibility, customer history, and sales analytics.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
    label: 'Manufacturing & Production',
    desc: 'Bill of materials, production scheduling, material requirements planning (MRP), and shop floor control.',
    iconBg: 'from-gray-100 to-gray-200',
    icon: (
      <svg className='size-24 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Supply Chain',
    desc: 'Demand forecasting, supplier integration, logistics tracking, shipment status, and fulfilment management.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l-3-3m3 3l3-3'
        />
      </svg>
    ),
  },
  {
    label: 'BI & Reporting',
    desc: 'Custom dashboards, scheduled reports, KPI alerts, cross-module analytics, and data exports.',
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
    label: 'Document Management',
    desc: 'Centralised document storage, version control, role-based access, approval workflows, and full audit trails.',
    iconBg: 'from-pink-50 to-pink-100',
    icon: (
      <svg className='size-24 text-pink-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'
        />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1',
    title: 'Requirements & scoping',
    desc: 'We map your current workflows, identify pain points, and define the modules needed.',
  },
  {
    timing: 'Weeks 2–4',
    title: 'Architecture & design',
    desc: 'Data model, module structure, integrations, and UI/UX wireframes for sign-off.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Modular development',
    desc: 'Modules built and delivered in sprints so you can review working software early.',
  },
  {
    timing: 'Final phase',
    title: 'Migration, training & launch',
    desc: 'Data migration from legacy systems, user training, and go-live with ongoing support.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'Departmental ERP',
    price: '$50K – $100K',
    topBadge: '14–20 weeks',
    desc: 'ERP for 1–2 departments — ideal for finance + inventory or HR + payroll.',
    features: [
      '2–3 core modules',
      'User roles & permissions',
      'Basic reporting',
      'Data import/export',
      'Cloud deployment',
    ],
    highlight: false,
    cta: 'Get a departmental estimate',
    ctaHref: '/free-project-estimate',
  },
  {
    title: 'Mid-Size ERP',
    price: '$100K – $250K',
    topBadge: '24–40 weeks',
    desc: 'Multi-department ERP with third-party integrations and advanced workflows.',
    features: [
      '5–7 modules',
      'Custom workflows',
      'Third-party integrations',
      'Advanced reporting',
      'Mobile access',
      'Audit trails',
    ],
    highlight: true,
    cta: 'Get a mid-size estimate',
    ctaHref: '/free-project-estimate',
  },
  {
    title: 'Enterprise ERP',
    price: '$250K – $500K+',
    topBadge: '40–60+ weeks',
    desc: 'Full enterprise resource planning platform across all business units.',
    features: [
      'All modules',
      'Multi-location support',
      'Advanced analytics & BI',
      'Custom approval workflows',
      'SSO/SAML',
      'API ecosystem',
      'Data warehousing',
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
        desc: 'End-to-end custom software built around your unique business processes.',
        href: '/custom-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Dedicated Development Team',
        desc: 'A long-term team embedded in your workflow to build and maintain your ERP.',
        href: '/services/dedicated-development-team',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'SaaS Development',
        desc: 'Multi-tenant platforms and cloud-native products built to scale.',
        href: '/services/saas-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Hire Software Developers',
        desc: 'Pre-vetted Nepal-based engineers to join your in-house ERP team.',
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
        desc: 'Validate your ERP concept fast with a working minimum viable product.',
        href: '/services/mvp-development',
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
        title: 'Manufacturing',
        desc: 'Production planning, BOM, MRP, shop floor control, and supply chain integration.',
        href: '/industries/manufacturing-software-development',
      },
      {
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
        title: 'Healthcare',
        desc: 'HIPAA-compliant ERP covering HR, inventory, procurement, and patient billing.',
        href: '/industries/healthcare-software-development',
      },
      {
        iconBg: 'bg-[#fff3e8]',
        iconColor: 'text-[#ff7500]',
        title: 'Retail & E-commerce',
        desc: 'Inventory, POS, supplier management, and multi-channel order fulfilment.',
        href: '/industries/retail-software-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Construction & Real Estate',
        desc: 'Project costing, procurement, subcontractor management, and asset tracking.',
        href: '/industries/real-estate-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Education',
        desc: 'Student management, HR, payroll, fee collection, and reporting in one system.',
        href: '/industries/education-software-development',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Hospitality & Food',
        desc: 'Procurement, inventory, POS integration, and workforce management.',
        href: '/industries/restaurant-hospitality-software-development',
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How long does ERP development take?',
    answer:
      'A departmental ERP (2–3 modules) takes 14–20 weeks. A full multi-department ERP takes 24–40 weeks. Enterprise platforms with all modules and integrations can take 40–60+ weeks depending on complexity.',
  },
  {
    question: 'Can you integrate with our existing accounting software?',
    answer:
      'Yes. We integrate with QuickBooks, Xero, SAP, and other accounting systems via REST APIs or direct database connectors. We can also build a custom accounting module if no existing integration fits.',
  },
  {
    question: 'Do you provide training for ERP users?',
    answer:
      'Yes. Every ERP delivery includes user documentation, role-specific video tutorials, and optional on-site or remote training. We also build role-based dashboards so each user sees only what is relevant to them.',
  },
  {
    question: 'Do we own the code and IP?',
    answer:
      'Yes — 100%. Full IP transfer and NDA are signed before any work begins. The source code, database schemas, and all documentation belong to you.',
  },
  {
    question: 'Can we start with one module and expand later?',
    answer:
      'Absolutely. Our modular architecture is designed for this. Start with finance + inventory, then add HR, CRM, or manufacturing as your needs evolve — no rework required.',
  },
  {
    question: 'What technologies do you use to build ERP systems?',
    answer:
      'Typically React or Next.js frontend, Node.js or Python/Django backend, PostgreSQL or MySQL database, and cloud deployment on AWS or Azure. We adapt the stack to your team or compliance requirements.',
  },
  {
    question: 'How do you handle data migration from our old system?',
    answer:
      'We audit your existing data, clean and map it to the new schema, run parallel testing, and then cut over — minimising downtime. Migration from spreadsheets, legacy ERP, or custom databases is all within scope.',
  },
  {
    question: 'What ongoing support is available after launch?',
    answer:
      'We offer monthly retainer support covering bug fixes, feature additions, and infrastructure management. Most clients also keep a small dedicated team to handle ongoing development as the ERP evolves.',
  },
];

export const erpIndustrySectors: IndustrySector[] = [
  {
    name: 'Manufacturing',
    tagline: 'Production, BOM, and supply chain unified.',
    desc: '',
    useCases: [],
    href: '/industries/manufacturing-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    tagline: 'HR, inventory, and procurement in one system.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-pink-500',
    iconBg: 'bg-pink-500/15',
    icon: (
      <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    name: 'Retail & Distribution',
    tagline: 'Inventory, POS, and supplier management.',
    desc: '',
    useCases: [],
    href: '/industries/ecommerce-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
      </svg>
    ),
  },
  {
    name: 'Construction & Real Estate',
    tagline: 'Project costing, procurement, and asset tracking.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    name: 'Education',
    tagline: 'Student, HR, payroll, and fees in one place.',
    desc: '',
    useCases: [],
    href: '/industries/education-software-development',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.606 50.606 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    name: 'Hospitality & Food',
    tagline: 'Procurement, inventory, and workforce management.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 18m0-3.75h18M5.25 9h.008v.008H5.25V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm12.75 0h.008v.008h-.008V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
      </svg>
    ),
  },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Custom ERP Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build an ERP System That ' }, { text: 'Runs Your Business', highlight: true }],
  description:
    'Stop duct-taping spreadsheets and disconnected tools. We build unified ERP systems that connect finance, HR, inventory, procurement, and operations into one platform.',
  primaryCTA: { label: 'Get ERP Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Modular architecture', 'Free scoping call'],
  form: {
    preselectedService: 'Custom ERP Development',
    formName: 'hero-erp',
  },
};
