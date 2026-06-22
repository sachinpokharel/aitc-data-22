import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '8+', label: 'Booking modules available' },
  { value: '6–24', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$20K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Booking Platform Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build a Booking Platform ' }, { text: 'Customers Come Back To', highlight: true }],
  description:
    'Stop paying per-booking fees to generic tools that don\'t fit your business. We build custom booking platforms around your services, availability rules, and customer experience — fully branded and fully yours.',
  primaryCTA: { label: 'Get Booking Platform Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Zero per-booking fees', 'Free scoping call'],
  form: {
    preselectedService: 'Booking Platform Development',
    formName: 'hero-booking',
    informationPlaceholder: 'Tell us about your booking platform — what services you offer, how availability works, and how customers currently book...',
  },
};

export const whenCards = [
  {
    title: 'You\'re paying per-booking fees to a generic tool',
    points: [
      'Platforms like Mindbody, Calendly, or SimplyBook take a cut of every transaction or charge heavy monthly fees',
      'A custom platform eliminates per-booking costs — you own it outright and keep every dollar',
    ],
  },
  {
    title: 'Your availability rules are too complex for off-the-shelf tools',
    points: [
      'Buffer times, multi-staff booking, resource conflicts, and location-specific rules break most generic schedulers',
      'We build the exact availability logic your business runs on — no workarounds',
    ],
  },
  {
    title: 'You operate across multiple locations or service providers',
    points: [
      'Managing staff schedules, room availability, and bookings across multiple sites in one tool is hard with generic software',
      'A custom platform gives you full multi-location control with unified reporting',
    ],
  },
  {
    title: 'You need bookings integrated with your existing systems',
    points: [
      'Calendar sync, CRM updates, payment reconciliation, and SMS/email reminders rarely work seamlessly out-of-the-box',
      'We build bookings as part of your wider tech stack — fully integrated from day one',
    ],
  },
  {
    title: 'Your brand experience matters',
    points: [
      'Redirecting customers to a third-party booking page breaks trust and reduces conversions',
      'A fully branded booking flow — on your domain, in your design system — keeps customers in your experience end to end',
    ],
  },
  {
    title: 'You need packages, memberships, or subscription booking',
    points: [
      'Selling session packs, monthly memberships, or recurring bookings is clunky or impossible in most booking tools',
      'We build flexible pricing models: one-off, packages, subscriptions, and credit-based booking in one system',
    ],
  },
];

export const bookingModuleTabs: SolutionTab[] = [
  {
    label: 'Scheduling Engine',
    desc: 'Real-time availability management with configurable rules — buffer times, booking windows, blackout dates, resource conflicts, multi-staff allocation, and waitlist handling built for your exact service model.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z' />
      </svg>
    ),
  },
  {
    label: 'Customer Booking Portal',
    desc: 'A branded, mobile-first booking flow — service selection, staff or resource preference, date and time picker, deposit or full payment, and instant confirmation with calendar invite attachment.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' />
      </svg>
    ),
  },
  {
    label: 'Payments & Deposits',
    desc: 'Stripe-powered payments with full and partial deposit support, refund policies, no-show fees, coupon codes, package credits, and automatic invoicing — PCI compliant by default.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    label: 'Staff & Resource Management',
    desc: 'Individual staff calendars with working hours, leave, and service assignments. Room, equipment, or asset availability linked to bookings — conflicts prevented automatically.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
      </svg>
    ),
  },
  {
    label: 'Notifications & Reminders',
    desc: 'Automated SMS and email confirmations, reminders, cancellation notices, and follow-ups. Configurable timing, branded templates, and two-way SMS for rescheduling — all reducing no-show rates.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
      </svg>
    ),
  },
  {
    label: 'Packages & Memberships',
    desc: 'Sell session packs, monthly memberships, and subscriptions with automatic credit deduction on booking. Renewal reminders, pause/resume controls, and family or corporate account support.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Booking Flow Discovery',
    desc: 'We map your services, availability rules, staff setup, payment model, and customer journey before any design begins — so the system is built around how your business actually runs.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Booking Flow',
    desc: 'Customer-facing booking flow, admin dashboard, and staff calendar designed and validated — optimised for conversion and ease of use on mobile and desktop.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Development',
    desc: 'Scheduling engine, payments, notifications, and portal built in two-week sprints — with working demos at the end of every cycle so you can test real booking flows.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Integration, QA & Go-Live',
    desc: 'Calendar sync, payment gateway, SMS/email providers connected and tested. Full QA on booking edge cases — conflicts, cancellations, refunds — then staged go-live.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'Booking Starter',
    price: '$20K – $40K',
    topBadge: '6–10 weeks',
    desc: 'Core booking functionality for single-location businesses — online scheduling, payments, confirmations, and a simple admin dashboard.',
    features: [
      'Service & staff setup',
      'Real-time availability calendar',
      'Online booking flow',
      'Stripe payment & deposits',
      'Email & SMS confirmations',
      'Admin booking dashboard',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full Booking Platform',
    price: '$40K – $80K',
    topBadge: '10–18 weeks',
    desc: 'A complete booking platform with multi-location support, packages, memberships, customer portal, and deep integrations.',
    features: [
      'Everything in Starter',
      'Multi-location management',
      'Packages, memberships & subscriptions',
      'Customer self-service portal',
      'Mobile app (iOS & Android)',
      'CRM & calendar integrations',
      'Analytics & revenue reporting',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Enterprise Booking Suite',
    price: '$80K+',
    topBadge: '18–24 weeks',
    desc: 'Multi-tenant booking infrastructure for franchise networks, booking marketplaces, or enterprise service organisations.',
    features: [
      'Everything in Full Platform',
      'Multi-tenant franchise management',
      'Marketplace-style provider listings',
      'Dynamic pricing & yield management',
      'White-label customer portals',
      'ERP & HRMS integrations',
      'Dedicated post-launch support',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const bookingIndustrySectors: IndustrySector[] = [
  {
    name: 'Healthcare & Clinics',
    tagline: 'Patient appointment booking with EMR sync.',
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
    name: 'Beauty & Wellness',
    tagline: 'Salons, spas, and therapists — zero no-shows.',
    desc: '',
    useCases: [],
    href: '/industries/retail-software-development',
    accentColor: 'bg-rose-500',
    iconBg: 'bg-rose-500/15',
    icon: (
      <svg className='size-5 text-rose-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' />
      </svg>
    ),
  },
  {
    name: 'Fitness & Sports',
    tagline: 'Class scheduling, memberships, and equipment booking.',
    desc: '',
    useCases: [],
    href: '/industries/retail-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    name: 'Hospitality & Hotels',
    tagline: 'Room, table, and experience reservation management.',
    desc: '',
    useCases: [],
    href: '/industries/restaurant-hospitality-software-development',
    accentColor: 'bg-amber-500',
    iconBg: 'bg-amber-500/15',
    icon: (
      <svg className='size-5 text-amber-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    name: 'Professional Services',
    tagline: 'Consultants, lawyers, and advisors — self-service scheduling.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    name: 'Education & Tutoring',
    tagline: 'Lesson scheduling, trial classes, and recurring sessions.',
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
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Marketplace Development',
    desc: 'Build a two-sided booking marketplace where providers list services and customers book.',
    href: '/build/build-a-marketplace-app',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Custom CRM Development',
    desc: 'Pair your booking platform with a CRM to track customer history and lifetime value.',
    href: '/build/build-an-custom-crm',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Custom HRMS Development',
    desc: 'Connect staff scheduling in your booking platform with HR leave and payroll.',
    href: '/build/build-an-hrms',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'Mobile App Development',
    desc: 'Native iOS and Android apps for customers to book and manage appointments on the go.',
    href: '/services/mobile-app-development',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Dedicated Development Team',
    desc: 'A long-term Nepal-based team embedded in your workflow.',
    href: '/services/dedicated-development-team',
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Custom Software Development',
    desc: 'End-to-end custom software built around your unique business processes.',
    href: '/custom-software-development',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How much does a custom booking platform cost?',
    answer:
      'A starter booking platform with core scheduling, payments, and confirmations begins from $20,000. A full-featured platform with multi-location, packages, memberships, and mobile apps ranges from $40,000 to $80,000. Enterprise multi-tenant systems start above $80,000. We provide a detailed fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom booking platform?',
    answer:
      'A starter booking platform takes 6–10 weeks. A full platform with mobile apps and integrations takes 10–18 weeks. Enterprise systems take 18–24 weeks. Timelines depend on the complexity of your availability rules, number of integrations, and decision turnaround.',
  },
  {
    question: 'Can the platform sync with Google Calendar, Outlook, or Apple Calendar?',
    answer:
      'Yes. Two-way calendar sync with Google Calendar, Microsoft Outlook, and Apple Calendar is a standard feature. Staff and customers can see bookings in their preferred calendar app, and external events automatically block availability in the booking system.',
  },
  {
    question: 'Can you handle complex availability rules like buffer times and multi-staff booking?',
    answer:
      'Yes. Buffer times between bookings, travel time, multi-resource allocation, sequential staff assignments, and booking windows are all configurable. We build the exact rules your business operates on — not a simplified version of them.',
  },
  {
    question: 'Can customers cancel or reschedule themselves?',
    answer:
      'Yes. The customer portal supports self-service cancellation and rescheduling within your defined policies — with cancellation windows, rebooking limits, and automatic refund or credit handling based on your rules.',
  },
  {
    question: 'Can you build a marketplace where multiple providers take bookings?',
    answer:
      'Yes. We build multi-provider booking marketplaces where customers discover and book with individual providers, each managing their own availability. Stripe Connect handles split payments so each provider receives their share automatically.',
  },
  {
    question: 'Can the platform handle packages, memberships, and recurring bookings?',
    answer:
      'Yes. We build flexible pricing models — one-off sessions, session packs, monthly or annual memberships, and recurring appointment series. Credits deduct automatically on booking, and renewal reminders go out before expiry.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your business model, pricing, and platform details are treated with complete confidentiality.',
  },
];
