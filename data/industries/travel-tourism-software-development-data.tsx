import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$1.5T', label: 'Global travel & tourism market by 2030' },
  { value: '63%', label: 'Travellers abandoning slow booking flows' },
  { value: '45%', label: 'Revenue lift from personalised travel recommendations' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Travellers abandoning slow or broken booking flows', value: '63%', status: 'warning' },
  { label: 'Average cart abandonment rate on travel sites', value: '81%', status: 'warning' },
  { label: 'Revenue increase from personalised recommendations', value: '45%', status: 'good' },
  { label: 'Repeat booking rate lift with loyalty programmes', value: '+38%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Travel & Tourism',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Travel & Tourism', highlight: true },
    { text: ' Businesses' },
  ],
  description:
    'From booking engines and OTA platforms to tour operator portals, travel CRMs, and dynamic pricing systems — we build travel and tourism software that converts lookers into bookers, reduces manual ops, and scales with demand.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['PCI-DSS compliant payment flows', 'GDS & API integrations included', 'Free scoping call'],
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
        <path strokeLinecap='round' strokeLinejoin='round' d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
      </svg>
    ),
    iconLabel: 'Travel industry reality',
    iconSubtitle: 'What travel operators are dealing with',
    items: heroMetrics,
    note: 'Custom software reduces drop-off, automates operations, and drives repeat bookings through personalisation.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Online Travel Agencies (OTAs)',
    desc: 'OTAs aggregating flights, hotels, transfers, and experiences who need high-performance search, real-time inventory, and checkout flows that convert at scale — without the constraints of white-label platforms.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0-.778.099-1.533.284-2.253' />
      </svg>
    ),
  },
  {
    title: 'Tour Operators & DMCs',
    desc: 'Tour operators and destination management companies managing complex multi-day itineraries, supplier relationships, capacity allocation, and guide scheduling — who need operational software built for the way tours actually run.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' />
      </svg>
    ),
  },
  {
    title: 'Hotels & Accommodation Groups',
    desc: 'Independent hotels, boutique groups, and accommodation chains that need direct booking engines, property management integrations, channel manager connectivity, and guest experience tools that reduce OTA commission dependency.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'Travel Tech Startups',
    desc: 'Founders building new travel products — AI trip planners, experience marketplaces, corporate travel tools, or niche vertical booking platforms — who need a technical partner that understands travel APIs, GDS, and conversion-focused UX.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Booking drop-off spiking because search results take 6+ seconds to load',
    solution: 'We build high-performance booking engines with cached availability layers, async GDS polling, and progressive result loading — reducing search response times to under 1.5 seconds and cutting abandonment at the search step.',
  },
  {
    problem: 'Itinerary management still done in spreadsheets and WhatsApp chains',
    solution: 'We build tour management systems with digital itinerary builders, supplier confirmation tracking, guide assignment, real-time customer communication, and document generation — replacing the spreadsheet entirely.',
  },
  {
    problem: 'Every booking channel (website, OTA, phone) creating separate records with no sync',
    solution: 'We build centralised reservation management systems that consolidate bookings from all channels into a single source of truth — with live availability updates pushed back to each channel on every new booking.',
  },
  {
    problem: 'Payment processing failing on international cards or unsupported currencies',
    solution: 'We build multi-currency, multi-gateway checkout flows with Stripe, Adyen, and regional payment providers — handling FX, localised payment methods, and instalment options so international customers can complete their purchase.',
  },
  {
    problem: 'No loyalty or CRM system, so repeat customers get the same generic emails as first-timers',
    solution: 'We build travel CRM and loyalty platforms with booking history, preference profiling, segmented campaigns, points or credit systems, and personalised recommendation engines — turning one-time bookers into repeat customers.',
  },
  {
    problem: 'Dynamic pricing is manual — staff check competitor rates daily and update prices by hand',
    solution: 'We build dynamic pricing engines that monitor competitor rates, occupancy, demand signals, and seasonality in real time — and apply configurable pricing rules automatically, without a staff member touching a spreadsheet.',
  },
];

export const travelTourismProjectTabs: SolutionTab[] = [
  {
    label: 'Online Booking Engines',
    desc: 'High-performance booking engines for flights, hotels, tours, transfers, and experiences — with real-time availability, multi-currency pricing, upsell flows, PCI-DSS compliant payment processing, and instant confirmation emails.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
      </svg>
    ),
  },
  {
    label: 'Tour & Itinerary Management',
    desc: 'End-to-end tour management platforms for operators and DMCs — itinerary builders, supplier confirmation tracking, guide and vehicle scheduling, capacity management, manifest generation, and customer communication automation.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' />
      </svg>
    ),
  },
  {
    label: 'Travel CRM & Loyalty Platforms',
    desc: 'Customer relationship and loyalty systems built for travel — booking history, traveller profiles, preference tracking, segmented email campaigns, points or credit programmes, and AI-powered personalised trip recommendations.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    label: 'Property & Channel Management',
    desc: 'Direct booking engines for hotels and accommodation groups — with PMS integration, channel manager connectivity (Booking.com, Expedia, Airbnb), rate management, room allocation, and guest communication tools.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    label: 'Dynamic Pricing & Revenue Management',
    desc: 'Automated pricing engines that monitor competitor rates, occupancy levels, demand signals, and seasonality — applying configurable pricing rules in real time across all booking channels without manual intervention.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    label: 'Travel Operations & Back-Office',
    desc: 'Internal operations platforms for travel businesses — supplier management, commission tracking, document generation (vouchers, invoices, manifests), financial reconciliation, reporting dashboards, and agent portal tools.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Travel Workflow & Integration Discovery',
    desc: 'We map your booking flows, supplier relationships, GDS and API dependencies, payment requirements, and operational bottlenecks before any design begins. We assess which integrations (Amadeus, Sabre, Travelport, Stripe) are needed from day one.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & System Architecture',
    desc: 'Booking interfaces, admin back-office screens, and supplier portals designed and validated with your operations team. Integration architecture with GDS, payment gateways, and channel managers defined before development starts.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Booking, inventory, payment, and operational modules built in two-week sprints — tested with realistic inventory and booking scenarios at each cycle. Performance and PCI-DSS controls built in from sprint one.',
  },
  {
    timing: 'Final 2–4 weeks',
    title: 'Load Testing & Go-Live',
    desc: 'End-to-end testing under simulated peak-season load, payment flow validation, and parallel running alongside existing systems before full cutover — minimising booking disruption during the transition.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'PCI-DSS Compliance',
    desc: 'Payment card data handled under PCI-DSS from architecture — tokenisation, no raw card data storage, TLS 1.3 in transit, and compliant gateway integrations with Stripe or Adyen so your checkout is secure and audit-ready.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    title: 'GDPR & Traveller Data Privacy',
    desc: 'Traveller consent management, data minimisation, right-to-erasure workflows, and regional data residency built for GDPR and UK GDPR — so your platform handles passport data, preferences, and purchase history lawfully.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'GDS & NDC Integration Standards',
    desc: 'IATA NDC Level 4 compliance and GDS integration with Amadeus, Sabre, and Travelport — following airline and hotel distribution standards for search, book, service, and order management flows.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    title: 'Package Travel Regulations',
    desc: 'For tour operators selling package holidays — ATOL/ABTA compliance support, package travel directive requirements (EU PTD 2018), financial protection disclosures, and booking confirmation documentation built into the platform.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'Booking Data Security',
    desc: 'Role-based access for agents, operators, and customers — each seeing only their permitted data. Audit trails on every booking modification, cancellation, and payment event for dispute resolution and compliance reporting.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
  {
    title: 'Accessibility & Localisation',
    desc: 'WCAG 2.1 AA accessibility compliance, multi-language support, RTL layouts, and localised date/currency/address formatting — so your platform works for travellers and agents across every market you operate in.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0-.778.099-1.533.284-2.253' />
      </svg>
    ),
  },
];

export const travelTourismSectors: IndustrySector[] = [
  {
    name: 'Online Travel Agencies',
    tagline: 'High-performance search, real-time inventory aggregation, and conversion-optimised checkout for OTAs.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0-.778.099-1.533.284-2.253' /></svg>,
  },
  {
    name: 'Tour Operators & DMCs',
    tagline: 'Itinerary management, supplier coordination, capacity planning, and customer communication tools.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' /></svg>,
  },
  {
    name: 'Hotels & Accommodation',
    tagline: 'Direct booking engines, PMS integrations, channel management, and guest experience platforms.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Corporate Travel Management',
    tagline: 'Self-booking tools, policy enforcement, expense integration, and reporting for corporate travel programmes.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-rose-500', iconBg: 'bg-rose-500/15',
    icon: <svg className='size-5 text-rose-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>,
  },
  {
    name: 'Experience & Activity Platforms',
    tagline: 'Marketplace booking platforms for tours, activities, and experiences with operator portals and review tools.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' /></svg>,
  },
  {
    name: 'Travel Tech Startups',
    tagline: 'AI trip planners, niche booking platforms, and travel marketplaces built from MVP to scale.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Custom Booking Engine Development', desc: 'High-performance booking engines for flights, hotels, tours, and transfers with real-time inventory and PCI-DSS checkout.', href: '/services/custom-software-development' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Tour & Itinerary Management Systems', desc: 'End-to-end tour management platforms for operators — itinerary builders, supplier tracking, guide scheduling, and document generation.', href: '/services/custom-software-development' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Travel Mobile Apps', desc: 'Traveller-facing iOS and Android apps for booking, itinerary management, offline access, and in-destination support.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Travel Tech MVP Development', desc: 'Travel platform MVPs built in 12–16 weeks — enough to validate with real users, raise funding, or pilot with a distribution partner.', href: '/build/an-mvp' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based travel software engineers embedded in your product team — with GDS integration, booking flow, and conversion rate experience.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'GDS & API Integration', desc: 'Amadeus, Sabre, Travelport, and third-party supplier API integrations — connecting your platform to live inventory, pricing, and booking flows.', href: '/services/custom-software-development' },
];

export const faqs: FAQ[] = [
  {
    question: 'Can you integrate with GDS systems like Amadeus, Sabre, or Travelport?',
    answer:
      'Yes. We build GDS integrations for flight search, availability, pricing, and booking — including Amadeus Travel APIs, Sabre Dev Studio, and Travelport Universal API. We also work with IATA NDC-compliant direct airline APIs and aggregators like Duffel and Kiwi.com. Integration scope is assessed during discovery based on your inventory requirements.',
  },
  {
    question: 'Do you build PCI-DSS compliant booking and payment flows?',
    answer:
      'Yes. PCI-DSS compliance is an architecture decision, not an afterthought. We build checkout flows using tokenised payment gateways (Stripe, Adyen, Braintree) so raw card data never touches your servers. We implement TLS 1.3 in transit, server-side form handling, and hosted payment pages where appropriate — keeping your compliance scope minimal.',
  },
  {
    question: 'Can you build a tour operator management system?',
    answer:
      'Yes. We build end-to-end tour management platforms covering itinerary creation, supplier confirmation tracking, guide and vehicle assignment, capacity management, customer communication, voucher and document generation, and financial reconciliation. These systems replace the spreadsheet-and-WhatsApp workflow that most operators grow out of as they scale.',
  },
  {
    question: 'Can you build a direct booking engine for our hotel?',
    answer:
      'Yes. We build direct booking engines with real-time availability from your PMS (Opera, Mews, Cloudbeds, or custom), rate management, room upsell, multi-currency pricing, and PCI-DSS compliant checkout. We also connect to channel managers (SiteMinder, Staah) and OTA extranets so your direct channel stays synchronised with all distribution.',
  },
  {
    question: 'How long does it take to build a travel booking platform?',
    answer:
      'A focused build — such as a tour booking system, a hotel direct booking engine, or an experience marketplace MVP — typically takes 12–20 weeks from discovery to launch. A full OTA platform with GDS integration, multi-supplier aggregation, and back-office ops tools ranges from 6–12 months depending on scope. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How much does custom travel software development cost?',
    answer:
      'A focused booking engine or tour management system starts from $30,000–$60,000. A mid-scale OTA or travel marketplace with supplier integrations and back-office tooling ranges from $80,000–$200,000. Enterprise GDS-connected platforms and large-scale aggregation systems start above $200,000. We scope a fixed-price estimate after understanding your specific requirements.',
  },
];
