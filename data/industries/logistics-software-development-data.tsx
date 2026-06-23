import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$14T', label: 'Global logistics market by 2028' },
  { value: '30%', label: 'Of logistics costs from inefficiency' },
  { value: '4x', label: 'ROI on transport management systems' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Logistics costs from manual inefficiency', value: '30%', status: 'warning' },
  { label: 'Orders tracked via manual phone calls', value: '48%', status: 'warning' },
  { label: 'Fuel savings from route optimisation', value: '15%', status: 'good' },
  { label: 'Customer satisfaction lift from real-time tracking', value: '+40%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Logistics & Supply Chain',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Logistics & Supply Chain', highlight: true },
    { text: ' Companies' },
  ],
  description:
    'From transport management systems and warehouse management to fleet tracking, route optimisation, and last-mile delivery platforms — we build the custom logistics software that cuts operational costs and gives your customers real-time visibility.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['Real-time tracking built in', 'Route optimisation included', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Real-time tracking' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
    iconLabel: 'Logistics reality',
    iconSubtitle: 'What logistics companies are dealing with',
    items: heroMetrics,
    note: 'Custom software eliminates manual tracking, reduces empty miles, and gives customers the visibility they expect.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Third-Party Logistics (3PLs)',
    desc: '3PL providers managing fulfilment, warehousing, and transport for multiple shipper clients — who need a platform that gives each client their own real-time view without exposing other clients\' data.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'E-Commerce & Retail Logistics',
    desc: 'D2C brands and retailers building their own last-mile delivery capability — or who need warehouse management and order fulfilment software that connects directly to their storefront.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z' />
      </svg>
    ),
  },
  {
    title: 'Fleet & Transport Operators',
    desc: 'Haulage companies, courier networks, and distribution operators who need fleet tracking, driver management, route planning, and proof-of-delivery — in one platform rather than three separate tools.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' />
      </svg>
    ),
  },
  {
    title: 'Freight Brokers & Forwarders',
    desc: 'Freight brokers and forwarders managing shipments across air, sea, and road — who need a platform that tracks shipments across carriers, automates documentation, and gives shippers a real-time view.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Dispatchers still calling drivers for status updates',
    solution: 'We build driver apps with GPS tracking, automated status updates, and proof-of-delivery capture — so dispatchers see real-time fleet position on a live map without making a single phone call.',
  },
  {
    problem: 'Route planning done manually or in basic mapping tools',
    solution: 'We build route optimisation engines that calculate the most efficient multi-stop routes in seconds — considering vehicle capacity, time windows, driver hours, and traffic — reducing fuel costs and empty miles.',
  },
  {
    problem: 'Customers call to ask "where is my delivery?"',
    solution: 'We build customer-facing tracking portals with live GPS tracking, estimated arrival windows, and automated SMS/email notifications at each status milestone — eliminating the inbound "where is my order" call.',
  },
  {
    problem: 'Warehouse stock counts done physically every week',
    solution: 'We build WMS platforms with barcode and QR scanning, real-time inventory levels, pick and pack workflows, and cycle count scheduling — so your warehouse team always knows what is where without a physical count.',
  },
  {
    problem: 'Driver hours and compliance tracked in paper logs',
    solution: 'We build digital driver hours of service tracking — electronic logbooks, HOS alerts, tachograph data imports, and compliance reporting — keeping your fleet within regulatory limits without paper.',
  },
  {
    problem: 'Billing based on delayed, manually reconciled POD sheets',
    solution: 'We build electronic proof-of-delivery workflows — driver app capture with GPS timestamp, photo, and signature — that trigger automated invoice generation the moment a delivery is confirmed.',
  },
];

export const logisticsProjectTabs: SolutionTab[] = [
  {
    label: 'Transport Management Systems',
    desc: 'End-to-end TMS platforms — shipment booking, carrier selection, load planning, dispatch management, real-time tracking, and freight rate management. Integrated with your carriers and customer ERP systems.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    label: 'Warehouse Management Systems',
    desc: 'WMS platforms with receiving, putaway, pick and pack, cycle counting, and despatch management. Barcode and QR scanning, slotting optimisation, multi-location inventory, and integration with carrier label printing.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' />
      </svg>
    ),
  },
  {
    label: 'Fleet Tracking & Driver Apps',
    desc: 'Real-time fleet tracking with GPS telemetry, live map dispatch, driver mobile apps for job acceptance, navigation, status updates, and digital proof-of-delivery with photo and signature capture.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
      </svg>
    ),
  },
  {
    label: 'Order Management & Last Mile',
    desc: 'Order management systems connecting your sales channels to your fulfilment operation — with automated allocation, pick and pack workflows, last-mile delivery scheduling, and customer-facing order tracking.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z' />
      </svg>
    ),
  },
  {
    label: 'Route Optimisation',
    desc: 'Multi-stop route planning engines for delivery and field service — considering vehicle capacity, time windows, driver hours, and real-time traffic. Integrated with Google Maps, HERE, or your preferred mapping provider.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z' />
      </svg>
    ),
  },
  {
    label: 'Supply Chain Analytics',
    desc: 'Supply chain visibility dashboards — shipment status across all carriers and modes, on-time delivery rates, carrier performance scoring, cost-per-shipment analytics, and demand forecasting to reduce stockouts and overstock.',
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
    title: 'Operations & Integration Discovery',
    desc: 'We map your fleet structure, warehouse layout, order flows, carrier integrations, and compliance requirements — before any design begins. We also scope hardware integrations (scanners, GPS devices, telematics).',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & System Architecture',
    desc: 'Dispatcher console, driver app, warehouse scanner interface, and customer tracking portal designed and validated with your operations team. Integration architecture with carriers and ERP systems defined.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'TMS, fleet tracking, and WMS modules built in two-week sprints — with your operations team testing real shipment flows at each cycle. Driver app tested on actual devices in the field.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Integration Testing & Go-Live',
    desc: 'End-to-end testing with live carriers, real GPS devices, and actual warehouse scanners. Parallel running alongside your existing system before full cutover — minimising operational risk.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'Driver Hours of Service (HOS)',
    desc: 'Electronic logging device (ELD) integration and HOS tracking — FMCSA compliance in the US, EU drivers\' hours under EC 561/2006, and GB domestic rules — with automated alerts for limit breaches.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Dangerous Goods & ADR',
    desc: 'ADR classification, UN number tracking, and shipping documentation for dangerous goods — with validation checks that prevent non-compliant loads from being dispatched.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Vehicle Inspection & Maintenance Records',
    desc: 'Digital DVIR (Driver Vehicle Inspection Reports), defect reporting, maintenance scheduling, and compliance documentation — with expiry alerts for MOTs, vehicle inspections, and service intervals.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Data Security & Customer Access',
    desc: 'Role-based access control for dispatchers, drivers, warehouse staff, and shipper clients — each seeing only the data relevant to their role. Encrypted data transmission and comprehensive audit logs.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
  {
    title: 'GDPR & Driver Data Privacy',
    desc: 'GPS tracking and telematics data handled under GDPR — driver consent management, data retention policies, and access controls that balance operational visibility with employee privacy rights.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    title: 'Customs & Cross-Border Documentation',
    desc: 'Customs documentation generation for cross-border shipments — commercial invoices, packing lists, certificates of origin, and CMR consignment notes — reducing border delays and customs holds.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253' />
      </svg>
    ),
  },
];

export const logisticsSectors: IndustrySector[] = [
  {
    name: 'Freight & Trucking Companies',
    tagline: 'Dispatch, route optimisation, and driver apps for road freight operations.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' /></svg>,
  },
  {
    name: 'Third-party Logistics (3PLs)',
    tagline: 'WMS, carrier portals, and client-facing tracking dashboards.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' /></svg>,
  },
  {
    name: 'E-commerce Fulfilment',
    tagline: 'Order management, warehouse pick-pack, and last-mile delivery integration.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' /></svg>,
  },
  {
    name: 'Last-mile Delivery Platforms',
    tagline: 'Real-time driver tracking, customer notifications, and proof-of-delivery.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' /><path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' /></svg>,
  },
  {
    name: 'Freight Marketplaces & Load Boards',
    tagline: 'Two-sided platforms connecting shippers and carriers with live rate matching.',
    desc: '', useCases: [],
    href: '/build/build-a-marketplace-app',
    accentColor: 'bg-pink-500', iconBg: 'bg-pink-500/15',
    icon: <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5' /></svg>,
  },
  {
    name: 'Logistics SaaS Startups',
    tagline: 'Logistics tech products built from MVP to enterprise-ready at startup pace.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Custom TMS Development', desc: 'Transport management systems built around your carrier mix, customer base, and billing model.', href: '/services/custom-software-development' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based logistics software engineers embedded into your product team.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Mobile App Development', desc: 'Driver and warehouse mobile apps for iOS and Android — built for real field conditions.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Booking Platforms', desc: 'Customer-facing freight booking and shipment management portals.', href: '/build/build-a-booking-platform' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'AI Tracking Assistants', desc: 'AI chatbots that answer shipment status queries without dispatcher involvement.', href: '/build/build-an-ai-chatbot' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Custom ERP Development', desc: 'Custom ERP systems that connect logistics, finance, procurement, and customer management.', href: '/build/erp-system' },
];

export const faqs: FAQ[] = [
  {
    question: 'Can you build real-time fleet tracking?',
    answer:
      'Yes. We build real-time fleet tracking using GPS telemetry from hardware trackers or driver mobile apps — showing live vehicle positions on a dispatcher map, with speed, heading, and stop history. We integrate with telematics hardware from Samsara, Geotab, Webfleet, and others, or build GPS tracking directly into a driver mobile app.',
  },
  {
    question: 'Can you build a driver mobile app?',
    answer:
      'Yes. We build native iOS and Android driver apps — or cross-platform using React Native — with job dispatch, turn-by-turn navigation, digital proof-of-delivery (photo + signature + GPS timestamp), hours of service logging, and vehicle inspection reports. Apps are built for offline resilience when the driver is in a low-signal area.',
  },
  {
    question: 'Can you build route optimisation for multi-stop deliveries?',
    answer:
      'Yes. We build route optimisation engines that calculate the most efficient multi-stop delivery routes — considering vehicle capacity, time windows, driver hours, and real-time traffic. We integrate with Google Maps, HERE, or Vroom for the underlying optimisation depending on your fleet size and route complexity.',
  },
  {
    question: 'Can you integrate with our existing ERP or WMS?',
    answer:
      'Yes. We build API integrations with SAP, Oracle, Microsoft Dynamics, and most WMS platforms — importing orders, exporting shipment status, and syncing inventory levels bidirectionally. Integration scope and data mapping are assessed during the scoping phase.',
  },
  {
    question: 'How much does a custom TMS or logistics platform cost?',
    answer:
      'A starter platform with basic dispatch, driver tracking, and POD collection starts from $30,000. A full TMS with route optimisation, carrier integrations, and a customer portal ranges from $60,000 to $150,000. Enterprise platforms with WMS, multi-carrier integrations, and advanced analytics start above $150,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your operational workflows, carrier rates, and customer data are treated with complete confidentiality.',
  },
];
