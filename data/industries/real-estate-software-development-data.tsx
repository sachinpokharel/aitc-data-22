import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$4.4T', label: 'Global real estate market value' },
  { value: '80%', label: 'Of buyers start searches online' },
  { value: '3x', label: 'Faster deal cycles with digital tools' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Agent hours lost to manual admin weekly', value: '12hrs', status: 'warning' },
  { label: 'Buyers who start searches online', value: '80%', status: 'info' },
  { label: 'Revenue from digital-first agencies', value: '+35%', status: 'good' },
  { label: 'Tenants who prefer online self-service', value: '73%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Real Estate & PropTech',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Real Estate & PropTech', highlight: true },
    { text: ' Companies' },
  ],
  description:
    'From residential agencies and property management firms to commercial brokers, developers, and PropTech startups — we build the custom property software that automates your workflows and connects your listings, leads, leases, and data in one place.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['Portal syndication built in', 'Tenancy & lease management', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'PropTech ready' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
    iconLabel: 'Real estate reality',
    iconSubtitle: 'What property businesses are dealing with',
    items: heroMetrics,
    note: 'Custom software solves the admin bottleneck — and builds a moat competitors using the same SaaS cannot match.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Residential Sales Agencies',
    desc: 'Sales agencies managing buyer and vendor pipelines, viewings, offers, and completions — who need a CRM and portal sync built around how they actually sell.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    title: 'Property Management Companies',
    desc: 'Large residential or mixed-use portfolios with hundreds of tenancies to manage — rent collection, maintenance requests, lease renewals, and landlord reporting.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'Commercial Real Estate Brokers',
    desc: 'Commercial agents managing office, retail, and industrial leases — with complex multi-party deals, rent review schedules, and long transaction timelines.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'PropTech Startups',
    desc: 'Founders building new property platforms — listing portals, rental marketplaces, virtual viewing tools, or data products for the real estate industry.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Listing updates require manual re-entry across every portal',
    solution: 'We build unified listing management with one-click syndication to Rightmove, Zoopla, REA, Domain, and regional portals — so updates propagate automatically without manual re-entry.',
  },
  {
    problem: 'CRM does not understand properties as first-class objects',
    solution: 'We build property-aware CRMs where listings, leads, viewings, offers, and transactions are all connected — not shoehorned into a generic contact management tool.',
  },
  {
    problem: 'Lease and tenancy management still done in spreadsheets',
    solution: 'We build tenancy management systems covering the full lifecycle — move-in, rent scheduling, arrears, maintenance, renewal, and move-out — with automated reminders and a tenant self-service portal.',
  },
  {
    problem: 'Commission calculations are done manually at month-end',
    solution: 'We build commission engines that calculate agent payouts automatically based on your split rules — team splits, referral fees, milestone payments — and generate statements without spreadsheets.',
  },
  {
    problem: 'Maintenance requests handled by phone with no tracking',
    solution: 'We build maintenance portals where tenants submit requests online, contractors are assigned with SLAs, and property managers track every job to resolution — with audit trails for compliance.',
  },
  {
    problem: 'No visibility across the portfolio for landlords or investors',
    solution: 'We build landlord and investor portals with real-time portfolio dashboards — income statements, occupancy rates, maintenance history, and lease status — reducing the volume of enquiry calls your team handles.',
  },
];

export const realEstateProjectTabs: SolutionTab[] = [
  {
    label: 'Property Listing Portals',
    desc: 'Public-facing property search portals with map search, advanced filters, saved searches, and instant alert notifications when new listings match buyer criteria. Built with SEO-optimised listing pages and portal syndication APIs.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    label: 'Real Estate CRM',
    desc: 'Property-aware CRM covering buyer and tenant pipelines, lead source tracking, automated follow-up sequences, viewing scheduling, and agent performance dashboards — all connected to live listings.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z' />
      </svg>
    ),
  },
  {
    label: 'Property Management Systems',
    desc: 'Full tenancy lifecycle management — rent collection, arrears tracking, lease renewals, maintenance work orders, deposit management, and landlord portals with income statements and occupancy dashboards.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    label: 'Developer & Off-Plan Platforms',
    desc: 'Project sales platforms for residential and commercial developers — unit availability matrices, reservation management, buyer portals with progress updates, and investor dashboards for off-plan projects.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M12 3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0112 4.875v-1.5z' />
      </svg>
    ),
  },
  {
    label: 'Transaction & Document Management',
    desc: 'Sale and purchase transaction pipelines from offer accepted to completion — milestone tracking, e-signature on contracts, KYC document management, and automated status updates to all parties.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z' />
      </svg>
    ),
  },
  {
    label: 'Short-term Rental & Hospitality',
    desc: 'Channel management for Airbnb, Booking.com, and VRBO — dynamic pricing engines, guest messaging automation, cleaning schedule management, and owner reporting portals for short-term rental portfolios.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Property Business Discovery',
    desc: 'We map your sales and rental workflows, agent structure, commission rules, portal requirements, and data migration needs — before any design begins.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Data Architecture',
    desc: 'Agent dashboard, tenant portal, and listing management screens designed and validated with your team. Property data model and portal syndication architecture defined.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Listings, CRM, and tenancy modules built in two-week sprints — with your team testing real property workflows using actual listing data from early in the build.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Data Migration, QA & Go-Live',
    desc: 'Existing property, tenant, and contact data migrated from your current system. Full QA on lease calculations, portal sync, and commission splits — then a phased rollout.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'GDPR & Data Privacy',
    desc: 'Landlord, tenant, and buyer data handled under GDPR — consent management, data retention policies, and right-to-erasure workflows built in from the start.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'E-Signature & Document Security',
    desc: 'Tenancy agreements, sale contracts, and KYC documents with legally binding e-signature, version control, and encrypted storage — accessible and auditable.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'AML & KYC for Property Transactions',
    desc: 'Anti-money laundering checks on property buyers and beneficial owners — integrated with identity verification providers and FINTRAC/HMRC reporting requirements.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Portal Syndication Standards',
    desc: 'Rightmove, Zoopla, REA, and Domain data feed formats — listings published to the correct spec so they appear correctly and do not get rejected or de-listed.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    title: 'Tenancy Law Compliance',
    desc: 'Deposit protection, notice period tracking, and tenancy agreement templates built to the tenancy laws of your jurisdiction — UK AST, Australian residential, or US lease regulations.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97z' />
      </svg>
    ),
  },
  {
    title: 'Data Security & Access Control',
    desc: 'Role-based access for agents, managers, tenants, and landlords — each seeing only the data relevant to them. Encrypted storage and full audit logs of all property data access.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
];

export const realEstateSectors: IndustrySector[] = [
  {
    name: 'Residential Sales Agencies',
    tagline: 'Listings, viewings, offers, and completions — one pipeline.',
    desc: '', useCases: [],
    href: '/build/build-a-real-estate-management-system',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' /></svg>,
  },
  {
    name: 'Property Management Companies',
    tagline: 'Large portfolios with tenant self-service and landlord portals.',
    desc: '', useCases: [],
    href: '/build/build-a-real-estate-management-system',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Commercial Real Estate',
    tagline: 'Complex multi-party deals and long-term lease management.',
    desc: '', useCases: [],
    href: '/build/build-a-real-estate-management-system',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Developers & Off-plan Sales',
    tagline: 'Unit availability, investor portals, and project tracking.',
    desc: '', useCases: [],
    href: '/build/build-a-real-estate-management-system',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3' /></svg>,
  },
  {
    name: 'PropTech Startups',
    tagline: 'Validate your property platform idea fast.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-pink-500', iconBg: 'bg-pink-500/15',
    icon: <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /></svg>,
  },
  {
    name: 'Short-term & Holiday Rentals',
    tagline: 'Channel management, dynamic pricing, and guest messaging.',
    desc: '', useCases: [],
    href: '/build/build-a-booking-platform',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Real Estate Management Systems', desc: 'Custom REMS covering listings, CRM, tenancy, maintenance, commissions, and landlord portals.', href: '/build/build-a-real-estate-management-system' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'MVP Development', desc: 'Validate your PropTech product idea with a live MVP in 10–14 weeks.', href: '/build/an-mvp' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based property software engineers embedded into your existing team.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Mobile App Development', desc: 'iOS and Android apps for agents, landlords, and tenants.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'AI Property Assistant', desc: 'AI chatbots that qualify buyer enquiries, answer listing questions, and book viewings.', href: '/build/build-an-ai-chatbot' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Booking Platforms', desc: 'Online viewing and inspection scheduling with deposit collection and confirmation.', href: '/build/build-a-booking-platform' },
];

export const faqs: FAQ[] = [
  {
    question: 'Can you sync our listings to Rightmove, Zoopla, REA, or other portals?',
    answer:
      'Yes. We build listing management with portal syndication built in — one-click publish to Rightmove, Zoopla, REA, Domain, or regional portals via their data feeds. Updates to a listing in your system sync automatically to all connected portals without manual re-entry.',
  },
  {
    question: 'Can you migrate our existing data from our current property software?',
    answer:
      'Yes. We handle data migration from most property management and CRM platforms — property records, tenant details, lease history, contact data, and documents. Migration scope and data cleaning requirements are assessed during the scoping phase.',
  },
  {
    question: 'Can you build a tenant self-service portal?',
    answer:
      'Yes. We build tenant portals where tenants can view their lease, pay rent online, raise maintenance requests with photos, track work order status, and download documents — without needing to call your office.',
  },
  {
    question: 'Can you build automated commission calculations for our agents?',
    answer:
      'Yes. We build commission engines based on your specific split rules — percentage splits, tiered commissions, referral fees, and shared commissions. Agent statements are generated automatically at month-end.',
  },
  {
    question: 'How much does custom real estate software cost?',
    answer:
      'A starter platform with property listings, CRM, and viewing management starts from $25,000. A full platform with tenancy, maintenance, e-signature, and portal syndication ranges from $50,000 to $100,000. Enterprise and developer platforms start above $100,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your business workflows, commission structures, and client data are treated with complete confidentiality.',
  },
];
