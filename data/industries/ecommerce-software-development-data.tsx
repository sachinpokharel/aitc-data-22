import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$5.8T', label: 'Global e-commerce market in 2023' },
  { value: '60%', label: 'Of orders now come from mobile' },
  { value: '70%', label: 'Average cart abandonment industry-wide' },
  { value: '<2s', label: 'Page load shoppers expect before leaving' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Average cart abandonment rate', value: '70%', status: 'warning' },
  { label: 'Orders from mobile devices', value: '60%', status: 'info' },
  { label: "Shoppers who won't wait 3s", value: '53%', status: 'warning' },
  { label: 'Revenue lift from personalisation', value: '+15%', status: 'good' },
];

export const heroTrustItems = ['PCI-DSS compliant builds', 'Platform migrations included', 'SEO rankings preserved'];

export const heroData: IndustryHeroData = {
  badge: 'Industry · E-Commerce & Retail',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'E-Commerce & Retail', highlight: true },
    { text: ' Businesses' },
  ],
  description:
    'From growth-stage online stores to enterprise multi-vendor marketplaces, we build the commerce technology that powers your revenue — without the limitations of off-the-shelf platforms.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
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
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
    iconLabel: 'E-Commerce reality',
    iconSubtitle: 'What growing stores are dealing with',
    items: heroMetrics,
    note: 'Software solves all of these. Off-the-shelf platforms solve none of them fully.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'D2C Brands',
    desc: 'Growth-stage direct-to-consumer brands that have outgrown Shopify themes and need a storefront that reflects their brand and converts at a higher rate.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Marketplace Operators',
    desc: 'Businesses running or launching multi-vendor marketplaces that need seller management, commission engines, and split payment infrastructure.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
        />
      </svg>
    ),
  },
  {
    title: 'B2B Distributors',
    desc: 'Wholesale and distribution businesses moving online with complex pricing tiers, account-based ordering, and buyer portal requirements.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
        />
      </svg>
    ),
  },
  {
    title: 'Retail Chains Online',
    desc: 'Established brick-and-mortar retailers building omnichannel systems that connect physical POS with online inventory, loyalty, and fulfilment.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
        />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Your platform is becoming the ceiling, not the launchpad',
    solution:
      'Shopify and WooCommerce work until your catalog, pricing logic, or checkout needs exceed what templates allow. We build the custom layer — or a full replacement — that removes the constraint.',
  },
  {
    problem: '7 in 10 shoppers abandon at checkout',
    solution:
      "Generic checkout flows can't be optimised without code access. We build checkout experiences designed around your specific customer journey, trust signals, and payment methods.",
  },
  {
    problem: 'Inventory is managed in spreadsheets or manual sync',
    solution:
      'As order volume grows, manual stock management creates discrepancies, overselling, and delayed fulfilment. We build real-time inventory systems connected to your storefront, WMS, and 3PL.',
  },
  {
    problem: "Your systems don't talk to each other",
    solution:
      'Orders in one place, finance in another, shipping in a third. We build the integrations — or a unified platform — that puts your data in one place and automates the handoffs between systems.',
  },
  {
    problem: 'Peak traffic events expose platform limits',
    solution:
      'Black Friday downtime or slow performance during a sale event destroys revenue and brand trust. We design for burst capacity with auto-scaling infrastructure, CDN layers, and pre-launch load testing.',
  },
  {
    problem: 'Multi-vendor operations outgrow standard tools',
    solution:
      'Seller onboarding, commission management, split payments, and product moderation require custom architecture. We build marketplace platforms from the ground up for businesses operating at this complexity.',
  },
];

export const ecommerceProjectTabs: SolutionTab[] = [
  {
    label: 'Custom Storefronts',
    desc: 'Product pages, checkout flows, and promotional logic built for conversion — not constrained by a theme. Performance-optimised from day one with Core Web Vitals targets baked into the architecture.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Multi-Vendor Marketplaces',
    desc: 'Seller onboarding, commission engines, split payments via Stripe Connect, product moderation queues, and individual seller dashboards. Built for businesses running or launching a marketplace model.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    href: '/build-a-marketplace-app',
  },
  {
    label: 'Headless Commerce',
    desc: 'API-first commerce infrastructure decoupled from the frontend — sell on web, mobile, kiosk, or any channel from a single backend. Full control over every customer touchpoint.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
    label: 'Inventory & Warehouse',
    desc: 'Real-time stock tracking, automatic reorder triggers, barcode/RFID scanning, multi-warehouse allocation, and supplier portals that eliminate stock discrepancies and delays.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
    label: 'Order & Fulfilment',
    desc: 'End-to-end order lifecycle — picking, packing, shipping integrations (FedEx, UPS, DHL, Shippo), returns management, refund automation, and proactive customer communication at every stage.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
        />
      </svg>
    ),
  },
  {
    label: 'Mobile Commerce Apps',
    desc: 'iOS and Android shopping apps connected to the same backend as your web store — shared cart, order history, push notifications, loyalty integration, and offline browsing capability.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        />
      </svg>
    ),
  },
  {
    label: 'Subscription Commerce',
    desc: 'Recurring billing infrastructure with trial management, dunning automation, churn analytics, pause/skip logic, payment method recovery, and subscriber lifecycle dashboards.',
    iconBg: 'from-indigo-50 to-indigo-100',
    icon: (
      <svg className='size-24 text-indigo-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        />
      </svg>
    ),
  },
  {
    label: 'Loyalty & Rewards',
    desc: 'Points systems, tiered membership, referral mechanics, and personalised offers that increase repeat purchase rate and customer lifetime value — fully integrated with your storefront and CRM.',
    iconBg: 'from-pink-50 to-pink-100',
    icon: (
      <svg className='size-24 text-pink-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
        />
      </svg>
    ),
  },
  {
    label: 'Platform Migrations',
    desc: 'Full data migration from Shopify, Magento, WooCommerce, or any legacy platform — product data, customer records, order history, and SEO URL structure all preserved with zero ranking loss.',
    iconBg: 'from-gray-100 to-gray-200',
    icon: (
      <svg className='size-24 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
        />
      </svg>
    ),
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'PCI-DSS Compliance',
    desc: 'Tokenisation and hosted payment fields ensure raw card data never touches our servers. Checkout flows designed to meet PCI-DSS SAQ-A, with SSL, secure session management, and penetration testing.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
        />
      </svg>
    ),
  },
  {
    title: 'GDPR & Privacy',
    desc: 'Cookie consent banners, data retention policies, right-to-erasure workflows, and privacy-by-design architecture so your store is compliant from launch — not patched after the fact.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
        />
      </svg>
    ),
  },
  {
    title: 'WCAG Accessibility',
    desc: 'Accessible storefronts and checkout flows that serve all customers. Screen reader support, keyboard navigation, colour contrast, and focus management baked into every UI component we build.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Core Web Vitals',
    desc: 'LCP, INP, and CLS optimised from the start — image lazy loading, font optimisation, layout stability, and server-side rendering strategies that keep your store fast and your rankings healthy.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        />
      </svg>
    ),
  },
  {
    title: 'Sales Tax & Multi-Currency',
    desc: 'Automated tax calculation across jurisdictions, multi-currency checkout with live FX rates, and cross-border compliance via Avalara or TaxJar integrations — no manual rate tables.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    title: 'Scalable Infrastructure',
    desc: 'Auto-scaling groups, CDN distribution, read replicas, and Redis caching layers designed for peak events — your store stays live when Black Friday traffic spikes 10× overnight.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'
        />
      </svg>
    ),
  },
  {
    title: 'Fraud Detection',
    desc: 'Velocity rules, device fingerprinting, 3D Secure enforcement, and integration with fraud prevention services (Signifyd, Kount, Stripe Radar) to reduce chargeback rates.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z'
        />
      </svg>
    ),
  },
  {
    title: 'SEO & Migration Safety',
    desc: 'Every platform migration includes full 301 redirect mapping, canonical tag management, structured data preservation, and 30-day ranking monitoring to protect your organic traffic.',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z'
        />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1',
    title: 'Understand your commerce stack',
    desc: "We audit your current platform, integrations, and data flows — identifying what's working, what's limiting growth, and where the biggest technical debt sits.",
  },
  {
    timing: 'Weeks 2–3',
    title: 'Design for conversion & scale',
    desc: 'Customer journey mapping, checkout UX, mobile-first design, and architecture decisions made before any code is written.',
  },
  {
    timing: 'Weeks 4–N',
    title: 'Build in agile sprints',
    desc: 'Working demos every 2 weeks. Payments, shipping, inventory, and analytics wired in progressively so you see real progress throughout.',
  },
  {
    timing: 'Launch phase',
    title: 'Launch without losing rankings',
    desc: 'SEO URL migration, 301 redirects, sitemap regeneration, load testing against peak projections, and 30-day post-launch monitoring.',
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
        desc: 'End-to-end custom e-commerce systems built around your processes.',
        href: '/custom-software-development',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Mobile App Development',
        desc: 'iOS and Android shopping apps connected to your commerce backend.',
        href: '/mobile-application-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Build a Marketplace App',
        desc: 'Multi-vendor marketplace with seller management and split payments.',
        href: '/build-a-marketplace-app',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Build an ERP System',
        desc: 'Connect your store to finance, HR, and inventory in one platform.',
        href: '/build-an-erp-system',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Dedicated Development Team',
        desc: 'A long-term engineering team embedded in your commerce product work.',
        href: '/services/dedicated-development-team',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'SaaS Development',
        desc: 'Multi-tenant commerce or retail SaaS platforms built to scale.',
        href: '/services/saas-development',
      },
    ],
  },
  {
    key: 'industries',
    label: 'Related Industries',
    items: [
      {
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
        title: 'Fashion & Apparel',
        desc: 'Size-matrix catalogs, returns management, and virtual try-on for clothing brands.',
        href: '/industries/retail-software-development',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Fintech & Payments',
        desc: 'Embedded finance, BNPL, and payment gateway infrastructure for commerce.',
        href: '/industries/fintech-software-development',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'Healthcare & Wellness',
        desc: 'HIPAA-compliant commerce for supplements, equipment, and telehealth.',
        href: '/industries/healthcare-software-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Food & Grocery',
        desc: 'Same-day delivery platforms, dark stores, and recipe-to-cart experiences.',
        href: '/industries/restaurant-hospitality-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Education & E-learning',
        desc: 'Course marketplaces, digital product delivery, and cohort enrollment.',
        href: '/industries/education-software-development',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Real Estate',
        desc: 'Property listing platforms, virtual tours, and agent marketplace solutions.',
        href: '/industries/real-estate-software-development',
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Do you work with existing Shopify or WooCommerce stores?',
    answer:
      "Yes. We extend existing platforms (custom apps, theme modifications, checkout customisation) and also build fully custom replacements when the platform becomes a constraint. We'll recommend the right approach after a discovery call.",
  },
  {
    question: 'What types of e-commerce businesses do you typically work with?',
    answer:
      'We work with direct-to-consumer brands, B2B distributors, multi-vendor marketplace operators, subscription box companies, and brick-and-mortar retailers moving online. Project sizes range from $30K single-store builds to $500K+ enterprise marketplace platforms.',
  },
  {
    question: 'Can you help us migrate from Magento or an old custom platform?',
    answer:
      'Yes. Platform migrations are a significant portion of our e-commerce work. We preserve all product data, customer records, order history, and — critically — your SEO URL structure and rankings during the transition.',
  },
  {
    question: 'How do you handle Black Friday and high-traffic events?',
    answer:
      'We build on horizontally scalable cloud infrastructure with auto-scaling, CDN layers, database read replicas, and aggressive caching strategies. Before major sale events, we run load tests against projected peak traffic numbers.',
  },
  {
    question: 'Do you build multi-vendor marketplaces?',
    answer:
      'Yes. We build multi-vendor platforms with seller onboarding, commission structures, split payments (via Stripe Connect), product moderation workflows, and seller-facing analytics dashboards. Most marketplace builds start from $200K.',
  },
  {
    question: 'What does your typical engagement with an e-commerce company look like?',
    answer:
      "It starts with a free discovery call to understand your current tech stack and growth goals. We then propose a solution — whether that's a platform extension, a new build, or a migration — with a timeline and fixed-price estimate. Projects run in 2-week agile sprints with regular demos.",
  },
  {
    question: 'How do you ensure PCI compliance in checkout flows?',
    answer:
      'We use tokenisation and hosted payment fields (Stripe, Braintree) to ensure raw card data never touches our servers. All checkout flows are designed to meet PCI-DSS SAQ-A requirements, with SSL, secure session management, and regular penetration testing.',
  },
  {
    question: 'Can you integrate our commerce platform with our ERP or WMS?',
    answer:
      'Yes — ERP and WMS integrations are routine for us. We connect commerce platforms to systems like SAP, Odoo, NetSuite, and custom-built ERPs via REST APIs or direct database connectors. We build the middleware when no native connector exists.',
  },
];
