import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '10+', label: 'RMS modules available' },
  { value: '8–24', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$20K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Restaurant Management System Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build a Restaurant System That ' }, { text: 'Runs Your Operations', highlight: true }],
  description:
    'Generic POS software wasn\'t built for your menu, your kitchen layout, or your service model. We build custom restaurant management systems that connect your front-of-house, kitchen, delivery, and back-office into one platform — built exactly the way you operate.',
  primaryCTA: { label: 'Get RMS Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Custom menu & workflows', 'Free scoping call'],
  form: {
    preselectedService: 'Restaurant Management System Development',
    formName: 'hero-rms',
    informationPlaceholder: 'Tell us about your restaurant — type of service, number of locations, current software pain points, and what you need the system to handle...',
  },
};

export const whenCards = [
  {
    title: 'Your POS can\'t handle your menu complexity',
    points: [
      'Modifiers, combos, time-based menus, and dietary variants are clunky or impossible in most off-the-shelf POS systems',
      'A custom RMS models your exact menu structure — including modifiers, prep notes, and dynamic pricing',
    ],
  },
  {
    title: 'You manage multiple locations or a franchise network',
    points: [
      'Centralised menu updates, location-level pricing, and consolidated reporting are hard to do across multiple sites',
      'A custom system gives franchise owners their own view while head office keeps control of brand standards and reporting',
    ],
  },
  {
    title: 'Online ordering and delivery aren\'t connected to your kitchen',
    points: [
      'Orders from your website, app, or delivery platforms landing in separate tablets creates chaos in the kitchen',
      'We consolidate all order channels into one kitchen display and one queue — regardless of where the order came from',
    ],
  },
  {
    title: 'Inventory wastage is eating into your margins',
    points: [
      'Without real-time stock tracking linked to orders, you discover shortages mid-service and can\'t measure wastage accurately',
      'We build inventory management that deducts ingredients per dish, alerts on low stock, and tracks waste by shift',
    ],
  },
  {
    title: 'Staff scheduling and payroll are still done manually',
    points: [
      'Rostering across shifts, tracking clock-ins, and calculating tip splits in spreadsheets wastes management hours every week',
      'An integrated staff module handles scheduling, time tracking, and payroll calculations in the same system',
    ],
  },
  {
    title: 'You need customer data to drive loyalty and repeat visits',
    points: [
      'Most POS systems collect payments but not customers — you have no way to identify who your best customers are or bring them back',
      'We build loyalty programmes, customer profiles, and targeted offers directly into your ordering experience',
    ],
  },
];

export const rmsModuleTabs: SolutionTab[] = [
  {
    label: 'POS & Order Management',
    desc: 'Touch-optimised POS for dine-in, takeaway, and counter service — with split bills, modifier support, discount controls, multiple payment methods, and real-time order syncing to the kitchen and back-office.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    label: 'Kitchen Display System',
    desc: 'Real-time kitchen display showing orders by station — grill, fryer, cold, plating — with prep timers, course firing controls, bump-bar support, and order-ready notifications to servers. All channels feed one unified queue.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    label: 'Menu & Inventory Management',
    desc: 'Centralised menu builder with ingredient-level costing, modifier groups, combo deals, and time-based availability. Inventory auto-deducts per sale, low-stock alerts fire before service, and wastage is tracked by shift and staff member.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
  },
  {
    label: 'Online Ordering & Delivery',
    desc: 'Branded online ordering on your own domain — no third-party commission fees. Delivery zone management, driver tracking, and integration with Uber Eats, DoorDash, and Deliveroo so all orders land in one kitchen queue.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    label: 'Table & Reservation Management',
    desc: 'Interactive floor plan with real-time table status, walk-in queue management, online reservations, pre-order for groups, and waitlist notifications via SMS — so front-of-house always knows what\'s coming.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z' />
      </svg>
    ),
  },
  {
    label: 'Staff, Loyalty & Reporting',
    desc: 'Staff scheduling, clock-in/out, tip splitting, and payroll export. Customer loyalty programmes with points, stamps, and targeted offers. Real-time sales dashboards, shift reports, and food cost analysis for owners and managers.',
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
    title: 'Operations Discovery',
    desc: 'We map your service model, menu structure, kitchen layout, order channels, staff workflow, and reporting needs — so we build around how your restaurant actually runs, not how a generic system assumes it does.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Floor Plan Setup',
    desc: 'POS interface, KDS layout, online ordering flow, and manager dashboard designed and signed off — including your actual table layout and menu structure imported before development begins.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'POS, KDS, inventory, and ordering modules built in two-week sprints. You test real order flows at the end of each cycle — catching issues before they reach your service floor.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Hardware Setup, QA & Go-Live',
    desc: 'Receipt printers, KDS screens, card terminals, and kitchen hardware configured and tested. Staff trained, menu fully loaded, and a soft-launch period before full go-live.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'RMS Starter',
    price: '$20K – $40K',
    topBadge: '8–12 weeks',
    desc: 'Core restaurant management for a single location — POS, kitchen display, menu management, and basic reporting without the monthly SaaS fees.',
    features: [
      'Touch POS for dine-in & takeaway',
      'Kitchen display system (KDS)',
      'Menu builder with modifiers',
      'Basic inventory tracking',
      'Daily sales & shift reports',
      'Receipt & bill printing',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full RMS Platform',
    price: '$40K – $80K',
    topBadge: '12–20 weeks',
    desc: 'A complete restaurant management platform with online ordering, delivery integration, reservations, loyalty, and full inventory costing.',
    features: [
      'Everything in Starter',
      'Branded online ordering (own domain)',
      'Delivery platform integration',
      'Table & reservation management',
      'Ingredient-level inventory & wastage tracking',
      'Loyalty programme & customer profiles',
      'Staff scheduling & payroll export',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Multi-Location & Franchise',
    price: '$80K+',
    topBadge: '20–24 weeks',
    desc: 'Enterprise RMS for restaurant groups, franchise networks, and cloud kitchen operators — centralised menu control, location-level reporting, and franchise management portals.',
    features: [
      'Everything in Full Platform',
      'Centralised multi-location management',
      'Franchise owner portals',
      'Location-level pricing & menu variants',
      'Consolidated group reporting & analytics',
      'Cloud kitchen multi-brand order routing',
      'Dedicated post-launch support',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const rmsIndustrySectors: IndustrySector[] = [
  {
    name: 'Quick Service & Fast Food',
    tagline: 'High-volume ordering with speed at the counter.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 18m0-3.75h18M5.25 9h.008v.008H5.25V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm12.75 0h.008v.008h-.008V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
      </svg>
    ),
  },
  {
    name: 'Fine Dining',
    tagline: 'Course management, wine pairing, and reservations.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-rose-500',
    iconBg: 'bg-rose-500/15',
    icon: (
      <svg className='size-5 text-rose-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' />
      </svg>
    ),
  },
  {
    name: 'Cloud & Dark Kitchens',
    tagline: 'Multi-brand order routing from a single kitchen.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
  {
    name: 'Cafes & Coffee Chains',
    tagline: 'Queue-busting ordering with loyalty built in.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-amber-500',
    iconBg: 'bg-amber-500/15',
    icon: (
      <svg className='size-5 text-amber-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
      </svg>
    ),
  },
  {
    name: 'Hotels & Hospitality',
    tagline: 'Room service, restaurant, and bar — one system.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    name: 'Franchise Networks',
    tagline: 'Centralised control with location-level flexibility.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Booking Platform Development',
    desc: 'Add online table reservations and event bookings with deposits and waitlist management.',
    href: '/build/build-a-booking-platform',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Marketplace Development',
    desc: 'Build a food delivery marketplace where multiple restaurants list and customers order from one app.',
    href: '/build/build-a-marketplace-app',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Custom HRMS Development',
    desc: 'Connect your restaurant staff scheduling to payroll, leave management, and compliance.',
    href: '/build/build-an-hrms',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'AI Chatbot Development',
    desc: 'Build an AI assistant that handles reservations, menu queries, and customer support automatically.',
    href: '/build/build-an-ai-chatbot',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Mobile App Development',
    desc: 'Native iOS and Android ordering and loyalty apps for your customers.',
    href: '/services/mobile-app-development',
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Custom ERP Development',
    desc: 'Connect your restaurant operations to finance, procurement, and supplier management.',
    href: '/build/erp-system',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How much does a custom restaurant management system cost?',
    answer:
      'A starter RMS with POS, kitchen display, and basic inventory begins from $20,000. A full platform with online ordering, delivery integration, reservations, and loyalty ranges from $40,000 to $80,000. Multi-location and franchise systems start above $80,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom RMS?',
    answer:
      'A starter RMS takes 8–12 weeks. A full platform with online ordering and delivery integration takes 12–20 weeks. Multi-location systems take 20–24 weeks. Timelines depend on the number of modules, hardware setup, and how quickly your menu data and floor plan can be provided.',
  },
  {
    question: 'Can you integrate with our existing hardware — printers, card terminals, and KDS screens?',
    answer:
      'Yes. We integrate with major receipt printers (Epson, Star), kitchen display screens, bump bars, card terminals (Stripe, Square, SumUp, PAX), and customer-facing order displays. If you already own hardware, we assess compatibility during scoping.',
  },
  {
    question: 'Can orders from Uber Eats, DoorDash, and Deliveroo come into our kitchen automatically?',
    answer:
      'Yes. We integrate with major delivery platforms via their APIs so orders land directly in your kitchen display alongside dine-in and your own online orders — one unified queue, no manual entry from separate tablets.',
  },
  {
    question: 'Can you build an online ordering system on our own website?',
    answer:
      'Yes. We build branded online ordering on your own domain — no third-party commissions on each order. Customers order directly from you, payments go straight to your account, and orders fire to your kitchen automatically.',
  },
  {
    question: 'Can the system handle multiple locations with different menus and pricing?',
    answer:
      'Yes. We build multi-location support with a centralised menu management layer — you can push a base menu to all locations and override pricing, availability, or items at individual location level. Head office sees consolidated reporting; location managers see their own.',
  },
  {
    question: 'Can we track food costs and ingredient-level inventory?',
    answer:
      'Yes. We build recipe costing into the system — each menu item is linked to its ingredients, and every sale automatically deducts stock. You see real-time food cost percentages, wastage by shift, and low-stock alerts before service starts.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your business operations, pricing, and project details are treated with complete confidentiality.',
  },
];
