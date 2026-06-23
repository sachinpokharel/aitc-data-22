import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$31T', label: 'Global retail market size' },
  { value: '73%', label: 'Consumers shopping across multiple channels' },
  { value: '2x', label: 'Higher spend from loyalty programme members' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Retailers managing stock across locations on spreadsheets', value: '41%', status: 'warning' },
  { label: 'Average retail shrinkage from poor inventory visibility', value: '1.6%', status: 'warning' },
  { label: 'Revenue uplift from personalised loyalty programmes', value: '+29%', status: 'good' },
  { label: 'Customer retention improvement with omnichannel', value: '+89%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Retail & Omnichannel',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Retail & Omnichannel', highlight: true },
    { text: ' Businesses' },
  ],
  description:
    'From custom POS systems and real-time inventory management to loyalty platforms, omnichannel order management, and retail analytics — we build software that gives retailers a single view of stock, customers, and sales across every channel.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['PCI-DSS compliant builds', 'Omnichannel integration included', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'PCI-DSS compliant' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' />
      </svg>
    ),
    iconLabel: 'Retail reality',
    iconSubtitle: 'What retail operators are dealing with',
    items: heroMetrics,
    note: 'Custom software gives you a real-time single view of stock, customers, and sales — across every channel and location.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Independent & Multi-site Retailers',
    desc: 'Brick-and-mortar retailers — from single stores to 20-location chains — who have outgrown their off-the-shelf POS and need real-time inventory visibility, customer loyalty, and end-of-day reconciliation that actually works.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' />
      </svg>
    ),
  },
  {
    title: 'Omnichannel Retail Groups',
    desc: 'Brands with physical stores and an online presence who need unified stock, a single customer record across all channels, and click-and-collect or ship-from-store workflows — without duct-taping three separate platforms together.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z' />
      </svg>
    ),
  },
  {
    title: 'Franchise & Chain Operators',
    desc: 'Multi-location franchise businesses and chain retailers who need central reporting, standardised POS, and head office visibility into per-store sales, stock, and staff performance — without each location running its own disconnected system.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'Retail Technology Startups',
    desc: 'Founders building the next generation of retail SaaS — POS platforms, loyalty engines, inventory tools, or retail analytics products — who need an experienced engineering team to take their product from concept to production.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Stock-outs on fast movers while overstock sits on shelves — no automated reorder points',
    solution: 'We build inventory systems that track real-time stock levels across all locations, set SKU-level reorder points based on sell-through rate and supplier lead time, and generate automated purchase orders — so you replenish fast movers before you lose the sale and stop over-buying slow ones.',
  },
  {
    problem: 'No single view of inventory across locations — each POS terminal is an island',
    solution: 'We build central stock management platforms that give head office and store managers a live view of on-hand, on-order, and in-transit quantities across every location and warehouse — with inter-store transfer workflows when one site has surplus another needs.',
  },
  {
    problem: 'Loyalty points in one system, purchase history in another — staff cannot see the full customer picture at the till',
    solution: 'We build unified customer profiles that consolidate transaction history, loyalty balance, tier status, and communication preferences into a single record — surfaced at the POS so your team can personalise every interaction and apply rewards in the same transaction.',
  },
  {
    problem: 'End-of-day reconciliation done manually across multiple payment terminals and cash drawers',
    solution: 'We build automated till reconciliation workflows that pull expected sales totals from the POS, cross-reference against terminal settlements and cash-up counts, and flag variances for manager review — turning a 45-minute manual process into a two-minute exception check.',
  },
  {
    problem: 'Markdown decisions made on gut feel, not days-on-hand and sell-through rate data',
    solution: 'We build retail analytics dashboards that surface sell-through rate, days-on-hand, and forward cover by SKU, category, and location — giving buyers the data to time markdowns before stock becomes unshiftable rather than after the season ends.',
  },
  {
    problem: 'No click-and-collect capability despite customer demand for BOPIS',
    solution: 'We build buy-online-pick-up-in-store workflows — from web order capture and real-time in-store stock reservation, through to staff pick-list generation and customer-ready SMS notification — integrated with your existing POS so there is no double-handling of orders.',
  },
];

export const retailProjectTabs: SolutionTab[] = [
  {
    label: 'Point of Sale (POS) Systems',
    desc: 'Custom POS built for your store format — barcode scanning, split payments, returns, staff login, end-of-day reports, and loyalty redemption in a single interface. Cloud-synced across all locations with offline mode for connectivity dropouts.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z' />
      </svg>
    ),
  },
  {
    label: 'Inventory & Stock Management',
    desc: 'Real-time stock tracking across stores, warehouses, and online channels — with SKU-level reorder points, automated purchase orders, inter-store transfers, goods-received workflows, and shrinkage reporting.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' />
      </svg>
    ),
  },
  {
    label: 'Loyalty & Customer Engagement',
    desc: 'Points-based and tier loyalty programmes, digital stamp cards, personalised offer distribution, and post-purchase email flows — with a unified customer profile that works across in-store POS, ecommerce, and mobile app.',
    iconBg: 'from-pink-50 to-pink-100',
    icon: (
      <svg className='size-24 text-pink-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    label: 'Omnichannel Order Management',
    desc: 'Unified order routing across online, in-store, and click-and-collect channels — with real-time stock reservation, pick-list generation, carrier integration, and customer-facing order tracking from placement to collection or delivery.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    label: 'Retail Analytics & Reporting',
    desc: 'Sales performance dashboards by store, category, and SKU — with sell-through rate, days-on-hand, like-for-like comparisons, basket analysis, and forward cover reports so buyers and ops teams can act before problems become write-offs.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    label: 'Staff & Store Management',
    desc: 'Rota scheduling, shift management, staff performance reporting, and role-based access controls — integrated with the POS so manager overrides, void permissions, and till access are managed from one place.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Retail Operations & Systems Discovery',
    desc: 'We map your current POS, inventory, loyalty, and reporting systems — along with your store formats, stock workflows, and channel mix. Gaps and integration points identified before a line of code is written.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Integration Architecture',
    desc: 'Staff-facing POS interfaces, manager dashboards, and customer-facing touchpoints designed and reviewed with your team. Integration architecture with existing ERP, accounting, ecommerce, and payment systems defined.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Retail modules built in two-week sprints — tested with realistic sales and stock scenarios at each cycle. PCI-DSS controls, audit logging, and role-based access built in from sprint one, not retrofitted before launch.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Store Testing & Go-Live',
    desc: 'End-to-end testing with real payment terminals and barcode scanners. Parallel running alongside existing systems where possible. Phased rollout across locations with a defined go-live sequence and rollback plan.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'PCI-DSS Payment Security',
    desc: 'Card payment data handled to PCI-DSS Level 1 requirements — tokenised card processing, no raw PAN storage, network segmentation between POS and payment terminals, and evidence packs for your annual QSA assessment.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    title: 'GDPR & Customer Data Privacy',
    desc: 'Loyalty programme and customer data managed with GDPR consent records, marketing opt-in/opt-out workflows, right-to-erasure implementation, and data minimisation — so your CRM does not become a compliance liability.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    title: 'Inventory Audit & Tax Compliance',
    desc: 'Stock valuation methods (FIFO, AVCO) applied consistently for audit purposes. VAT and sales tax applied at the correct rate by product category, jurisdiction, and channel — with reconciliation reports for your accountant and HMRC submissions.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
      </svg>
    ),
  },
  {
    title: 'Consumer Protection & Returns Law',
    desc: 'Returns, refunds, and exchange workflows built to the Consumer Rights Act and equivalent legislation in your operating markets — with refund audit trails, restocking logic, and original payment method reversal.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Accessibility (WCAG 2.1)',
    desc: 'Customer-facing web and kiosk interfaces built to WCAG 2.1 AA — colour contrast, keyboard navigation, screen reader compatibility, and alt text for product imagery — reducing legal exposure in markets with digital accessibility legislation.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' /><path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    title: 'Role-based Access & Audit Trails',
    desc: 'Staff, supervisors, and managers each see only the POS functions, reports, and data their role requires. Every void, override, discount, and refund logged with the user, timestamp, and authorising manager — for loss prevention and internal audit.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
];

export const retailSectors: IndustrySector[] = [
  {
    name: 'Fashion & Apparel',
    tagline: 'POS with size/colour/fit variants, season-based markdown automation, and loyalty for fashion retailers.',
    desc: '', useCases: [],
    href: '/industries/ecommerce-software-development',
    accentColor: 'bg-pink-500', iconBg: 'bg-pink-500/15',
    icon: <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z' /><path strokeLinecap='round' strokeLinejoin='round' d='M6 6h.008v.008H6V6z' /></svg>,
  },
  {
    name: 'Home & Furniture',
    tagline: 'Large-item POS with deposit management, delivery scheduling, and supplier lead-time tracking.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-amber-500', iconBg: 'bg-amber-500/15',
    icon: <svg className='size-5 text-amber-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' /></svg>,
  },
  {
    name: 'Health & Beauty',
    tagline: 'Loyalty, appointment booking, and expiry-date stock tracking for pharmacy, beauty, and wellness retailers.',
    desc: '', useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' /></svg>,
  },
  {
    name: 'Food & Grocery (Physical)',
    tagline: 'Weighted item POS, date-code stock management, and waste reporting for food retailers.',
    desc: '', useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-green-500', iconBg: 'bg-green-500/15',
    icon: <svg className='size-5 text-green-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' /></svg>,
  },
  {
    name: 'Electronics & Tech Retail',
    tagline: 'Serial number tracking, warranty registration, trade-in valuation, and repair job management.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3' /></svg>,
  },
  {
    name: 'Franchise & Chain Operators',
    tagline: 'Head office dashboards, standardised POS rollout, and per-franchisee reporting for multi-location chains.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Custom POS Development', desc: 'Cloud-based or on-premise POS built for your store format — with offline mode, multi-tender, and loyalty integration.', href: '/services/custom-software-development' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Inventory Management Systems', desc: 'Real-time stock tracking across stores and warehouses with automated reorder points and inter-store transfers.', href: '/services/custom-software-development' },
  { iconBg: 'bg-pink-100', iconColor: 'text-pink-600', title: 'Loyalty Programme Platforms', desc: 'Points, tiers, digital stamp cards, and personalised offer distribution — unified across POS, web, and mobile.', href: '/services/custom-software-development' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Retail Mobile Apps', desc: 'Customer-facing iOS and Android apps for loyalty, BOPIS, product browsing, and in-store assisted selling.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based retail software engineers embedded into your product team — at 70% of the cost of in-house hiring.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Retail Analytics Dashboards', desc: 'Sell-through, days-on-hand, basket analysis, and like-for-like dashboards for buyers and ops teams.', href: '/services/custom-software-development' },
];

export const faqs: FAQ[] = [
  {
    question: 'Can you build a custom POS system?',
    answer:
      'Yes. We build cloud-based and hybrid POS systems designed for your specific store format — whether that is fashion with size/colour variants, food with weighted items, or electronics with serial number tracking. Custom POS includes barcode scanning, multi-tender (card, cash, voucher), returns, end-of-day reconciliation, staff login, and manager overrides. We also build offline mode so the system keeps taking sales if the internet drops.',
  },
  {
    question: 'Can you integrate with our existing ERP or accounting software?',
    answer:
      'Yes. We build integrations with Xero, QuickBooks, Sage, NetSuite, and custom ERP systems — syncing sales, stock movements, purchase orders, and customer data so your finance team is not re-entering data manually. Integration scope is assessed during discovery and scoped before development starts.',
  },
  {
    question: 'Can you build a loyalty programme for our retail business?',
    answer:
      'Yes. We build points-based and tier loyalty programmes, digital stamp cards, and referral schemes — with a unified customer profile that works across your in-store POS, ecommerce site, and mobile app. Loyalty redemption is handled in the same POS transaction as the sale, with no manual processing step.',
  },
  {
    question: 'How long does a custom retail software project take?',
    answer:
      'A focused build — such as a custom POS, an inventory management system, or a loyalty platform — typically takes 10–16 weeks. A full retail management suite covering POS, inventory, loyalty, and analytics takes 20–32 weeks. Timeline depends on the number of integrations, locations, and bespoke workflows. We provide a fixed-price estimate and timeline after a free scoping call.',
  },
  {
    question: 'Is the software GDPR and PCI-DSS compliant?',
    answer:
      'Yes. Payment card data is handled to PCI-DSS requirements — we use tokenised payment processing so raw card numbers never touch our systems. Customer loyalty and marketing data is managed with GDPR consent records, marketing opt-in/opt-out workflows, and right-to-erasure implementation. We provide compliance documentation as part of the project delivery.',
  },
  {
    question: 'How much does custom retail software cost?',
    answer:
      'A custom POS or inventory management system starts from $30,000–$50,000. A loyalty platform or omnichannel order management system typically ranges from $40,000–$80,000. A full retail management suite covering POS, inventory, loyalty, analytics, and integrations starts from $100,000. We provide a fixed-price estimate after a free scoping call — no hidden costs once the scope is agreed.',
  },
];
