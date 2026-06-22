import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '10+', label: 'REMS modules available' },
  { value: '8–24', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$25K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Real Estate Management System Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build a Real Estate Platform ' }, { text: 'That Closes Deals Faster', highlight: true }],
  description:
    'Generic CRMs and spreadsheets weren\'t built for property. We build custom real estate management systems that connect your listings, leads, leases, documents, and commissions into one platform — built around how your agency or portfolio actually operates.',
  primaryCTA: { label: 'Get REMS Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Custom property workflows', 'Free scoping call'],
  form: {
    preselectedService: 'Real Estate Management System Development',
    formName: 'hero-rems',
    informationPlaceholder: 'Tell us about your real estate business — sales, rentals, or both, how many properties you manage, and what your current system is missing...',
  },
};

export const whenCards = [
  {
    title: 'Your CRM doesn\'t understand property',
    points: [
      'Generic CRMs track contacts, not properties — there\'s no concept of listings, viewings, tenancies, or property-specific pipelines',
      'A custom real estate platform models properties as first-class objects, with their own status, history, and linked contacts',
    ],
  },
  {
    title: 'Lease and tenancy management is still done in spreadsheets',
    points: [
      'Tracking rent due dates, lease renewals, deposit returns, and tenant correspondence across spreadsheets is error-prone and time-consuming',
      'A centralised tenancy module gives you automated rent reminders, renewal alerts, and a full history of every lease event',
    ],
  },
  {
    title: 'Your property portal and back-office are disconnected',
    points: [
      'Updating listings on your website manually after changing them in your internal system creates inconsistencies and extra work',
      'We build your portal and CRM as one system — publish a listing internally and it syncs to your public site instantly',
    ],
  },
  {
    title: 'Commission tracking and agent payouts are a monthly headache',
    points: [
      'Calculating agent commissions across multiple deals, split commissions, referrals, and milestone-based payouts in Excel is slow and error-prone',
      'A commission engine automates calculations based on your exact split rules and generates agent statements automatically',
    ],
  },
  {
    title: 'Document management and e-signatures are fragmented',
    points: [
      'Tenancy agreements, sale contracts, KYC documents, and inspection reports stored across email and file servers are impossible to audit',
      'We build a document management system with e-signature, version control, and property-linked storage so every document is in one place',
    ],
  },
  {
    title: 'Maintenance requests fall through the cracks',
    points: [
      'Tenants raising maintenance issues by phone or email, chased manually with no tracking, leads to missed jobs and unhappy tenants',
      'A work order system lets tenants raise requests online, assigns them to contractors, and tracks resolution — with SLA alerts for overdue jobs',
    ],
  },
];

export const remsModuleTabs: SolutionTab[] = [
  {
    label: 'Property Listings & Portal',
    desc: 'Centralised property database with photos, floor plans, documents, and status. One-click publishing to your public portal and syndication to Rightmove, Zoopla, REA, or regional portals — all updates sync automatically.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    label: 'CRM & Lead Management',
    desc: 'Property-aware CRM with buyer and tenant pipelines, lead source tracking, automated follow-up sequences, viewing scheduling, match alerts when a new listing fits a saved search, and agent performance dashboards.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z' />
      </svg>
    ),
  },
  {
    label: 'Tenancy & Lease Management',
    desc: 'Full tenancy lifecycle — move-in, rent scheduling, arrears tracking, lease renewal workflows, deposit management, and move-out inspections. Automated rent reminders via SMS and email, with a tenant self-service portal for payments and requests.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    label: 'Transactions & Documents',
    desc: 'Sale and purchase transaction pipeline from offer accepted through to completion — with milestone tracking, solicitor links, and automated status updates to all parties. E-signature on tenancy agreements, sale contracts, and KYC forms. All documents stored against the property.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' />
      </svg>
    ),
  },
  {
    label: 'Maintenance & Work Orders',
    desc: 'Tenant-facing maintenance request portal — photo upload, priority classification, and real-time status updates. Contractor assignment, quote approval, job completion sign-off, and SLA breach alerts for property managers.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    label: 'Commissions & Reporting',
    desc: 'Automated commission calculations based on your split rules — agent, team, and referral splits, milestone-based payouts, and monthly agent statements. Owner and landlord portals with income statements, occupancy rates, and portfolio performance reports.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Property Business Discovery',
    desc: 'We map your sales and rental workflows, property types, agent structure, commission rules, document requirements, and portal syndication needs — before any design begins.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Data Architecture',
    desc: 'Agent dashboard, tenant portal, property listing pages, and transaction pipeline designed and validated — including your property data model and how listings flow from internal to public.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Listings, CRM, tenancy, and document modules built in two-week sprints. You test real property workflows at the end of each cycle — with your actual listing data imported early.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Data Migration, QA & Go-Live',
    desc: 'Existing property, tenant, and contact data migrated from your current system. Full QA on lease calculations, commission splits, and portal sync — then phased rollout starting with one team or office.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'REMS Starter',
    price: '$25K – $50K',
    topBadge: '8–14 weeks',
    desc: 'Core real estate platform for sales or rental agencies — property listings, lead CRM, viewing management, and basic document storage without per-user SaaS fees.',
    features: [
      'Property database & listing management',
      'Buyer & tenant CRM with pipeline',
      'Viewing scheduling & calendar',
      'Document storage per property',
      'Basic commission tracking',
      'Agent performance dashboard',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full REMS Platform',
    price: '$50K – $100K',
    topBadge: '14–22 weeks',
    desc: 'A complete real estate management platform covering sales, lettings, tenancy, maintenance, e-signature, and landlord/owner portals.',
    features: [
      'Everything in Starter',
      'Full tenancy & lease management',
      'Rent collection & arrears tracking',
      'Maintenance work order system',
      'E-signature & contract management',
      'Landlord & owner portal',
      'Portal syndication (Rightmove, Zoopla, REA)',
      'Commission automation & agent statements',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Enterprise & Developer Platform',
    price: '$100K+',
    topBadge: '20–24 weeks',
    desc: 'Multi-office or developer platform with project sales tracking, investor portals, off-plan management, and franchise or white-label capability.',
    features: [
      'Everything in Full Platform',
      'Multi-office & franchise management',
      'Developer project & off-plan sales',
      'Investor & buyer portals',
      'Advanced financial reporting & forecasting',
      'White-label for franchise networks',
      'ERP & accounting integrations',
      'Dedicated post-launch support',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const remsIndustrySectors: IndustrySector[] = [
  {
    name: 'Residential Sales Agencies',
    tagline: 'Listings, viewings, offers, and completions — one pipeline.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    name: 'Property Management Companies',
    tagline: 'Large rental portfolios with tenant self-service.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    name: 'Commercial Real Estate',
    tagline: 'Office, retail, and industrial leasing with complex terms.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M12 3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0112 4.875v-1.5z' />
      </svg>
    ),
  },
  {
    name: 'Real Estate Developers',
    tagline: 'Off-plan sales, investor portals, and project tracking.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253' />
      </svg>
    ),
  },
  {
    name: 'PropTech Startups',
    tagline: 'Validate your property platform idea fast.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-pink-500',
    iconBg: 'bg-pink-500/15',
    icon: (
      <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    name: 'Short-term & Holiday Rentals',
    tagline: 'Channel management, dynamic pricing, and guest messaging.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5' />
      </svg>
    ),
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Custom CRM Development',
    desc: 'Property-aware CRM for lead tracking, buyer matching, and agent pipeline management.',
    href: '/build/build-an-custom-crm',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Marketplace Development',
    desc: 'Build a property listing marketplace where agents, landlords, and developers list directly.',
    href: '/build/build-a-marketplace-app',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Booking Platform Development',
    desc: 'Online viewing and inspection scheduling with deposit payment and confirmation.',
    href: '/build/build-a-booking-platform',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'AI Chatbot Development',
    desc: 'AI property assistant that qualifies buyers, answers listing queries, and books viewings.',
    href: '/build/build-an-ai-chatbot',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Mobile App Development',
    desc: 'Native iOS and Android apps for agents, landlords, and tenants.',
    href: '/services/mobile-app-development',
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Custom ERP Development',
    desc: 'Connect your property portfolio to finance, procurement, and operations.',
    href: '/build/erp-system',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How much does a custom real estate management system cost?',
    answer:
      'A starter REMS with property listings, CRM, and viewing management begins from $25,000. A full platform covering tenancy, maintenance, e-signature, and portal syndication ranges from $50,000 to $100,000. Enterprise and developer platforms start above $100,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom REMS?',
    answer:
      'A starter REMS takes 8–14 weeks. A full platform takes 14–22 weeks. Enterprise and developer platforms take 20–24 weeks. Timelines depend on the number of modules, data migration complexity, and portal syndication integrations required.',
  },
  {
    question: 'Can you sync our listings to Rightmove, Zoopla, REA, or other property portals?',
    answer:
      'Yes. We integrate with major property portals via their data feeds or APIs — so when you update a listing in your system, it syncs automatically to all connected portals without manual re-entry. We scope which portals are relevant to your market during discovery.',
  },
  {
    question: 'Can you migrate our existing data from our current software?',
    answer:
      'Yes. We handle data migration from most property management platforms — importing property records, tenant details, lease history, and contact data. Migration scope and data cleaning requirements are assessed during the scoping phase.',
  },
  {
    question: 'Can tenants pay rent and raise maintenance requests through the system?',
    answer:
      'Yes. We build a tenant self-service portal where tenants can view their lease details, pay rent online via Stripe or bank transfer, raise and track maintenance requests with photos, and download their tenancy documents — reducing the volume of calls your team handles.',
  },
  {
    question: 'Can you build automated commission calculations for our agents?',
    answer:
      'Yes. We build a commission engine based on your exact split rules — percentage-based, tiered, milestone splits, referral fees, and shared commissions. Agent statements are generated automatically at month-end so your finance team doesn\'t have to calculate them manually.',
  },
  {
    question: 'Can you build a landlord or property owner portal?',
    answer:
      'Yes. Landlord and owner portals give your clients visibility into their portfolio — rental income statements, occupancy rates, maintenance history, and lease renewal status — without needing to call or email your team for updates.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your business workflows, commission structures, and client data are treated with complete confidentiality.',
  },
];
