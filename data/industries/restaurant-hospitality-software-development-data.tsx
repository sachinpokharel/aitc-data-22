import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$4.2T', label: 'Global restaurant & hospitality market' },
  { value: '35%', label: 'Revenue increase from online ordering' },
  { value: '3x', label: 'Customer retention with loyalty programs' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Restaurants using manual reservation systems', value: '55%', status: 'warning' },
  { label: 'Revenue lost to inefficient table management', value: '23%', status: 'warning' },
  { label: 'Increase in orders from digital channels', value: '35%', status: 'good' },
  { label: 'Customer return rate with loyalty programs', value: '+40%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Restaurant & Hospitality',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Restaurant & Hospitality', highlight: true },
    { text: ' Businesses' },
  ],
  description:
    'From POS systems and online ordering platforms to kitchen display systems, reservation management, and loyalty programmes — we build the custom hospitality software that reduces operational costs and keeps guests coming back.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['Online ordering built in', 'POS integrations included', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Real-time kitchen ops' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75m18 0l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
    iconLabel: 'Hospitality reality',
    iconSubtitle: 'What restaurant & hospitality operators are dealing with',
    items: heroMetrics,
    note: 'Custom software eliminates manual operations, reduces errors, and gives guests the seamless experience they expect.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Restaurant Groups & Chains',
    desc: 'Multi-location restaurant groups that need centralised menu management, cross-site reporting, and a consistent ordering experience — without juggling separate systems for each venue.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75m18 0l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Hotels & Resorts',
    desc: 'Hospitality groups needing property management systems, integrated restaurant and room service ordering, guest-facing booking portals, and loyalty programmes that span every touchpoint.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'Food Delivery & Ghost Kitchens',
    desc: 'Delivery-first restaurant operators and dark kitchen businesses that need order aggregation from multiple platforms, kitchen workflow management, and real-time driver dispatch.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'Catering & Events Companies',
    desc: 'Corporate catering operations and event companies managing bookings, custom menus, staffing, and invoicing across dozens of events simultaneously — who need it all in one platform.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Orders from third-party apps not reaching the kitchen',
    solution: 'We build order aggregation middleware that pulls from Uber Eats, DoorDash, and your own online ordering channel into a single kitchen display — no manual re-entry, no missed tickets.',
  },
  {
    problem: 'Table reservations managed in a paper book or basic spreadsheet',
    solution: 'We build reservation management systems with real-time table availability, automated guest confirmations, waitlist management, and floor plan visualisation — accessible from any device in the venue.',
  },
  {
    problem: 'Covers, revenue, and waste data living in separate systems per site',
    solution: 'We build central management dashboards that consolidate sales, covers, inventory, staffing, and menu performance across every site — so you can identify underperforming venues and push menu changes from head office without logging into each location separately.',
  },
  {
    problem: 'Kitchen staff working from paper tickets causing errors and delays',
    solution: 'We build kitchen display systems with real-time order streaming, course pacing, item modification alerts, and preparation timers — eliminating paper tickets and reducing order errors.',
  },
  {
    problem: 'Ingredient over-ordering based on gut feel, not recipe-level usage data',
    solution: 'We build inventory systems that track stock consumption against actual recipe usage in real time — generating automated purchase orders at ingredient-level reorder points and surfacing waste patterns by item, shift, and day of week.',
  },
  {
    problem: 'Loyalty programmes not connected to point of sale',
    solution: 'We build integrated loyalty and CRM systems that track guest spend across every visit, trigger personalised offers at the right moment, and feed data back into your POS — without a separate loyalty card or app.',
  },
];

export const restaurantProjectTabs: SolutionTab[] = [
  {
    label: 'POS & Order Management',
    desc: 'Custom point-of-sale systems built around your service model — dine-in, counter service, or hybrid. Covers order taking, modifier management, split billing, kitchen routing, and end-of-day reporting.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3' />
      </svg>
    ),
  },
  {
    label: 'Online Ordering Platforms',
    desc: 'Branded online ordering for web and mobile — menu management, modifier rules, upsell prompts, delivery zone logic, and direct integration with your kitchen display and POS. No third-party commission.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    label: 'Kitchen Display Systems',
    desc: 'Real-time kitchen display systems that route orders by station, track preparation times, surface modification alerts, and pace courses — replacing paper tickets with live screens that update the moment an order is placed.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' />
      </svg>
    ),
  },
  {
    label: 'Reservation & Table Management',
    desc: 'Reservation systems with interactive floor plans, real-time table availability, automated SMS/email confirmations, waitlist management, and covers forecasting — for single venues and multi-location groups.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z' />
      </svg>
    ),
  },
  {
    label: 'Loyalty & Guest Engagement',
    desc: 'Points programmes, tiered rewards, birthday offers, and personalised promotions — fully integrated with your POS so every dine-in, takeaway, and delivery visit is tracked and rewarded.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
      </svg>
    ),
  },
  {
    label: 'Inventory & Procurement',
    desc: 'Stock management with recipe-level cost tracking, automated purchase orders, supplier portal integrations, wastage recording, and end-of-period variance reporting — across one site or fifty.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Operations & Integration Discovery',
    desc: 'We map your service model, order flows, kitchen layout, existing POS and third-party integrations, and compliance requirements — before any design begins. We assess hardware (tablets, printers, KDS screens, payment terminals) at this stage.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & System Architecture',
    desc: 'Front-of-house, kitchen, and back-office interfaces designed and validated with your team. Integration architecture with delivery platforms, payment gateways, and existing systems defined before development starts.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'POS, ordering, and kitchen modules built in two-week sprints — tested with real menu data and actual order flows at each cycle. Staff training materials prepared in parallel.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Integration Testing & Go-Live',
    desc: 'End-to-end testing with live payment terminals, kitchen printers, and KDS hardware. Parallel running alongside your existing system before full cutover — minimising service disruption during the transition.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'Food Safety & Allergen Management',
    desc: 'Allergen flagging on every menu item, dietary filter support for online ordering, and HACCP-aligned checklists built into kitchen and inventory workflows — so your team cannot dispatch an allergen-unsafe order.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'PCI-DSS Payment Compliance',
    desc: 'Tokenised card payments via Stripe or Square — raw card data never touches our servers. Payment flows designed to PCI-DSS SAQ-A standards, with SSL, secure session handling, and regular penetration testing.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    title: 'GDPR & Guest Data Privacy',
    desc: 'Guest data collected through loyalty, reservations, and online ordering handled under GDPR — consent management, data retention policies, and right-to-erasure workflows built in from the start.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    title: 'Multi-jurisdiction Tax & VAT',
    desc: 'Automated tax calculation across dine-in, takeaway, and delivery — handling different VAT rates, service charge rules, and jurisdiction-specific requirements without manual rate tables or end-of-month corrections.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Licensing & Regulatory Compliance',
    desc: 'Licence expiry tracking for alcohol, food hygiene certificates, and staff food-handler qualifications — with automated alerts before expiry so you are never operating out of compliance.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'Role-Based Access & Audit Logs',
    desc: 'Manager, supervisor, and staff access levels — each seeing only what they need. Void and discount audit trails, cash management logs, and end-of-shift reconciliation reports for every terminal.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
];

export const restaurantSectors: IndustrySector[] = [
  {
    name: 'Quick Service & Fast Casual',
    tagline: 'High-volume POS, self-service kiosks, and order aggregation for QSR operators.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>,
  },
  {
    name: 'Fine Dining & Casual Dining',
    tagline: 'Reservation management, table-side ordering, and course-paced kitchen displays.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-rose-500', iconBg: 'bg-rose-500/15',
    icon: <svg className='size-5 text-rose-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75m18 0l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75M12 12.75h.008v.008H12v-.008z' /></svg>,
  },
  {
    name: 'Hotels & Resorts',
    tagline: 'Property management, F&B ordering, and guest loyalty across every service touchpoint.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Ghost Kitchens & Dark Stores',
    tagline: 'Multi-brand order aggregation, kitchen routing, and delivery dispatch.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' /></svg>,
  },
  {
    name: 'Food Delivery Platforms',
    tagline: 'White-label ordering apps, driver dispatch, and real-time delivery tracking.',
    desc: '', useCases: [],
    href: '/build/build-a-marketplace-app',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' /></svg>,
  },
  {
    name: 'Catering & Events',
    tagline: 'Event booking, custom menu management, staffing, and multi-event invoicing.',
    desc: '', useCases: [],
    href: '/build/build-a-booking-platform',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Custom POS Development', desc: 'Point-of-sale systems built around your service model, menu structure, and kitchen layout.', href: '/services/custom-software-development' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Online Ordering Platforms', desc: 'Branded web and mobile ordering with direct kitchen integration — no third-party commission.', href: '/services/custom-software-development' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Mobile App Development', desc: 'Guest-facing ordering and loyalty apps for iOS and Android, built for high-volume use.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Delivery Platform Builds', desc: 'White-label food delivery apps with driver dispatch, real-time tracking, and order aggregation.', href: '/build/build-a-marketplace-app' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based hospitality software engineers embedded into your product team.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Custom ERP Development', desc: 'Operations platforms connecting your kitchen, inventory, finance, and HR in one system.', href: '/build/erp-system' },
];

export const faqs: FAQ[] = [
  {
    question: 'Can you build a custom POS system for our restaurant?',
    answer:
      'Yes. We build custom POS systems tailored to your service model — whether that is counter service, table service, or a hybrid. Custom POS means you own the system, pay no per-terminal licence fees, and can modify the interface as your menu or service evolves. We integrate with your payment terminal, receipt printers, and kitchen display hardware.',
  },
  {
    question: 'Can you integrate with Uber Eats, DoorDash, and other delivery platforms?',
    answer:
      'Yes. We build order aggregation middleware that pulls incoming orders from Uber Eats, DoorDash, Deliveroo, and other platforms directly into your kitchen display or POS — so your kitchen staff work from one screen rather than multiple tablets. We also build white-label direct ordering platforms to reduce your reliance on third-party commissions.',
  },
  {
    question: 'Can you build a kitchen display system (KDS)?',
    answer:
      'Yes. We build real-time kitchen display systems that stream orders by station, flag modifications, track prep times, and pace courses. KDS screens are web-based and run on standard tablet or commercial display hardware — no proprietary equipment required. Orders update the moment they are placed, online or at the table.',
  },
  {
    question: 'Can you build a reservation and table management system?',
    answer:
      'Yes. We build reservation management systems with interactive floor plans, real-time table availability, automated guest confirmations via SMS and email, waitlist management, and covers forecasting. The system is accessible from any device in the venue and can be integrated with your POS to link reservation and spend data per guest.',
  },
  {
    question: 'Can you build a loyalty programme connected to our POS?',
    answer:
      'Yes. We build loyalty and guest CRM systems that track spend across every visit — dine-in, takeaway, and delivery — and trigger personalised rewards at the right moment. Points are earned and redeemed at the POS without a separate loyalty card. Guest profiles accumulate visit history, preferences, and offer response data.',
  },
  {
    question: 'How much does a custom restaurant software platform cost?',
    answer:
      'A focused build — such as a custom online ordering platform or a standalone KDS — starts from $20,000–$35,000. A full restaurant management system with POS, ordering, inventory, and loyalty ranges from $60,000 to $150,000. Multi-location platforms or delivery marketplaces start above $150,000. We provide a fixed-price estimate after a free scoping call.',
  },
];
