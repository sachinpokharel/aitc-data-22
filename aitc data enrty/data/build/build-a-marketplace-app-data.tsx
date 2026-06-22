import type { BuildHeroData } from '@/components/pages/static-components/BuildHero';
import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';

import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpTab } from '@/components/pages/static-components/Wehelpwithservice';

export const heroStats = [
  { value: '$7T+', label: 'Global marketplace GMV by 2030' },
  { value: '8–36', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$40K', label: 'Starting price' },
];

export const heroTrustItems = ['100% IP ownership', 'Two-sided architecture', 'Free scoping call'];

export const heroModules: { label: string; status: 'Active' | 'Configuring' }[] = [
  { label: 'Seller Onboarding & Profiles', status: 'Active' },
  { label: 'Listings & Search', status: 'Active' },
  { label: 'Payments & Commission Engine', status: 'Active' },
  { label: 'Reviews & Trust System', status: 'Configuring' },
  { label: 'Admin & Moderation Panel', status: 'Configuring' },
];

export const heroData: BuildHeroData = {
  badge: 'Marketplace App Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build a Marketplace App ' }, { text: 'Buyers and Sellers Love', highlight: true }],
  description:
    'From niche service platforms to multi-vendor e-commerce — we build two-sided marketplaces with the seller tools, buyer experience, and payment infrastructure to grow a real network effect.',
  primaryCTA: { label: 'Get Marketplace Estimate →', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: heroTrustItems,
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-primary',
      lines: [{ text: 'From $40K all-in' }],
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
          d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
        />
      </svg>
    ),
    iconLabel: 'Marketplace features',
    iconSubtitle: 'Two sides, one platform',
    rows: heroModules,
    counters: [
      { value: '2-sided', label: 'Architecture' },
      { value: '100%', label: 'IP ownership' },
    ],
  },
};

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Marketplace App Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build a Marketplace App ' }, { text: 'Buyers and Sellers Love', highlight: true }],
  description:
    'From niche service platforms to multi-vendor e-commerce — we build two-sided marketplaces with the seller tools, buyer experience, and payment infrastructure to grow a real network effect.',
  primaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Two-sided architecture', 'Free scoping call'],
  form: {
    preselectedService: 'Marketplace App Development',
    formName: 'hero-marketplace',
    informationPlaceholder: "Tell us about your marketplace idea — the buyer side, the seller side, and how you plan to monetise...",
  },
};

export const whenCards = [
  {
    title: 'You want to connect buyers and sellers',
    points: [
      'A marketplace earns on every transaction without holding inventory',
      'Off-the-shelf platforms can\'t model a two-sided business natively',
    ],
  },
  {
    title: 'Your niche is underserved by Amazon or Etsy',
    points: [
      'Vertical marketplaces for specific industries win on trust and relevance',
      'A focused platform attracts both sides faster than a general one',
    ],
  },
  {
    title: 'You need a custom commission or pricing model',
    points: [
      'Flat fee, percentage, subscription, or hybrid — SaaS tools lock you in',
      'A custom build lets you define exactly how you monetise each transaction',
    ],
  },
  {
    title: 'Trust and safety are central to your model',
    points: [
      'Reviews, identity verification, and dispute resolution define the experience',
      'Generic platforms can\'t build the trust infrastructure your niche requires',
    ],
  },
];

export const marketplaceTypeTabs: SolutionTab[] = [
  {
    label: 'Product Marketplace',
    desc: 'Multi-vendor e-commerce platform where multiple sellers list physical or digital products. Includes seller storefronts, product moderation, split payments via Stripe Connect, and order management.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Service Marketplace',
    desc: 'Connect service providers with buyers — freelancers, consultants, tradespeople, or professionals. Features include availability calendars, booking flows, service packages, and escrow payments.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
        />
      </svg>
    ),
  },
  {
    label: 'Rental & Booking',
    desc: 'Peer-to-peer or B2C rental platforms for assets, spaces, or equipment. Real-time availability calendars, deposit handling, damage protection flows, and host/guest review systems.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
        />
      </svg>
    ),
  },
  {
    label: 'B2B Marketplace',
    desc: 'Wholesale and procurement platforms connecting businesses. Account-based pricing, bulk order workflows, RFQ management, verified supplier profiles, and net payment terms.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
        />
      </svg>
    ),
  },
  {
    label: 'On-demand Platform',
    desc: 'Real-time service dispatch platforms — drivers, couriers, cleaners, or field workers matched to customers instantly. Geolocation, live tracking, dynamic pricing, and driver apps included.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
        />
      </svg>
    ),
  },
  {
    label: 'Digital Goods Marketplace',
    desc: 'Platforms for selling digital products — templates, courses, plugins, stock assets, or software licences. Instant delivery, licence key management, revenue sharing, and creator dashboards.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
        />
      </svg>
    ),
  },
  {
    label: 'Healthcare Marketplace',
    desc: 'HIPAA-compliant platforms connecting patients with doctors, therapists, or specialists. Telemedicine integration, appointment scheduling, insurance verification, and secure record sharing.',
    iconBg: 'from-pink-50 to-pink-100',
    icon: (
      <svg className='size-24 text-pink-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
        />
      </svg>
    ),
  },
  {
    label: 'Education Marketplace',
    desc: 'Course and tutoring platforms connecting educators with learners. Cohort or self-paced enrolment, live sessions, progress tracking, certificate issuance, and instructor revenue splits.',
    iconBg: 'from-indigo-50 to-indigo-100',
    icon: (
      <svg className='size-24 text-indigo-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.606 50.606 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
        />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1',
    title: 'Discovery & marketplace design',
    desc: 'We map both sides of your market — who the buyers are, who the sellers are, how trust works, and what the commission model looks like before writing a line of code.',
  },
  {
    timing: 'Weeks 2–3',
    title: 'Architecture & UX design',
    desc: 'Two-sided data model, payment flow, onboarding funnels for both sides, and UI/UX wireframes reviewed and approved for sign-off.',
  },
  {
    timing: 'Weeks 4–N',
    title: 'Sprint-based development',
    desc: 'Core marketplace loop built first (list → discover → transact → review) then extended with admin tools, notifications, and analytics in fortnightly sprints.',
  },
  {
    timing: 'Launch phase',
    title: 'Seeding strategy & go-live',
    desc: 'Seller onboarding flows, buyer acquisition pages, payment go-live, and a cold-start seeding plan to get your first transactions on the platform.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'Starter Marketplace',
    price: '$40K – $80K',
    topBadge: '8–16 weeks',
    desc: 'Core two-sided marketplace — listings, search, checkout, and seller dashboard.',
    features: [
      'Buyer & seller onboarding',
      'Listing management',
      'Search & filters',
      'Stripe Connect payments',
      'Basic reviews & ratings',
      'Admin moderation panel',
    ],
    highlight: false,
    cta: 'Get a starter estimate',
    ctaHref: '/free-project-estimate',
  },
  {
    title: 'Growth Marketplace',
    price: '$80K – $200K',
    topBadge: '16–28 weeks',
    desc: 'Full-featured platform with mobile apps, advanced search, and monetisation tools.',
    features: [
      'All Starter features',
      'iOS & Android apps',
      'Advanced search & recommendations',
      'Subscription & featured listing revenue',
      'In-app messaging',
      'Analytics dashboards',
      'Multi-currency support',
    ],
    highlight: true,
    cta: 'Get a growth estimate',
    ctaHref: '/free-project-estimate',
  },
  {
    title: 'Enterprise Marketplace',
    price: '$200K – $500K+',
    topBadge: '28–36+ weeks',
    desc: 'Large-scale two-sided platform with AI recommendations, fraud detection, and global infrastructure.',
    features: [
      'All Growth features',
      'AI-powered recommendations',
      'Identity & KYC verification',
      'Fraud detection',
      'Multi-region infrastructure',
      'White-label seller storefronts',
      'API ecosystem',
      'Dedicated support retainer',
    ],
    highlight: false,
    cta: 'Get an enterprise estimate',
    ctaHref: '/free-project-estimate',
  },
];

export const marketplaceIndustrySectors: IndustrySector[] = [
  {
    name: 'E-commerce & Retail',
    tagline: 'Multi-vendor stores with split payments.',
    desc: '',
    useCases: [],
    href: '/industries/ecommerce-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
      </svg>
    ),
  },
  {
    name: 'Real Estate',
    tagline: 'Property listings, agents, and rentals.',
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
    name: 'Healthcare',
    tagline: 'Doctors, therapists, and specialists on demand.',
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
    name: 'Education',
    tagline: 'Courses, tutors, and learning on one platform.',
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
    name: 'Food & Restaurant',
    tagline: 'On-demand delivery and restaurant discovery.',
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
  {
    name: 'Freelance & Services',
    tagline: 'Professionals matched to clients instantly.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
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
        desc: 'End-to-end custom platforms built around your business model.',
        href: '/custom-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Build a Custom CRM',
        desc: 'Manage your seller and buyer relationships alongside your marketplace.',
        href: '/build/build-an-custom-crm',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'SaaS Development',
        desc: 'Multi-tenant platforms and cloud-native products built for scale.',
        href: '/services/saas-development',
      },
      {
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'Mobile App Development',
        desc: 'Native iOS and Android apps for both sides of your marketplace.',
        href: '/mobile-application-development',
      },
      {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        title: 'Dedicated Development Team',
        desc: 'A long-term team embedded in your marketplace product roadmap.',
        href: '/services/dedicated-development-team',
      },
      {
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'MVP Development',
        desc: 'Validate your marketplace idea with a lean two-sided MVP first.',
        href: '/build/an-mvp',
      },
    ],
  },
  {
    key: 'industries',
    label: 'Industries',
    items: [
      {
        iconBg: 'bg-[#fff3e8]',
        iconColor: 'text-[#ff7500]',
        title: 'Retail & E-commerce',
        desc: 'Multi-vendor storefronts, POS integration, and fulfilment automation.',
        href: '/industries/ecommerce-software-development',
      },
      {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'Real Estate',
        desc: 'Property listing platforms, agent marketplaces, and rental portals.',
        href: '/industries/real-estate-software-development',
      },
      {
        iconBg: 'bg-pink-100',
        iconColor: 'text-pink-600',
        title: 'Healthcare',
        desc: 'HIPAA-compliant platforms for doctors, therapists, and specialists.',
        href: '/industries/healthcare-software-development',
      },
      {
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
        title: 'Education',
        desc: 'Course marketplaces, tutoring platforms, and cohort-based learning.',
        href: '/industries/education-software-development',
      },
      {
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        title: 'Food & Hospitality',
        desc: 'Food delivery, restaurant discovery, and table booking platforms.',
        href: '/industries/restaurant-hospitality-software-development',
      },
      {
        iconBg: 'bg-[#f1eef8]',
        iconColor: 'text-[#3d2d72]',
        title: 'Manufacturing & B2B',
        desc: 'Wholesale procurement portals and supplier-buyer matching platforms.',
        href: '/industries/manufacturing-software-development',
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How long does it take to build a marketplace app?',
    answer:
      'A starter marketplace with core buyer/seller flows, listings, search, and Stripe Connect payments takes 8–16 weeks. A full-featured platform with mobile apps, messaging, and advanced analytics takes 16–28 weeks. Enterprise platforms with AI recommendations and KYC can take 28–36+ weeks.',
  },
  {
    question: 'How do you handle payments and seller payouts?',
    answer:
      'We use Stripe Connect for most marketplaces — it handles split payments, seller onboarding, compliance, and automatic payouts in 40+ countries. We can also integrate PayPal Commerce, Adyen, or a custom escrow model depending on your business requirements and geography.',
  },
  {
    question: 'How do you solve the chicken-and-egg problem?',
    answer:
      'We help design the cold-start strategy as part of the scoping phase — typically by launching supply-side first (easier to acquire), building a curated beta with hand-picked sellers, and designing the UX to show value to buyers even before the marketplace is fully stocked.',
  },
  {
    question: 'Do you build mobile apps for both sides?',
    answer:
      'Yes. We build buyer-facing and seller-facing apps separately or as a unified app with role-based views. We use React Native for cross-platform delivery (iOS + Android from one codebase), or native Swift/Kotlin if performance requirements demand it.',
  },
  {
    question: 'Can you build identity verification and KYC into the platform?',
    answer:
      'Yes. We integrate with Stripe Identity, Persona, or Onfido for document verification, selfie matching, and KYC compliance. This is common for service marketplaces, financial platforms, and healthcare providers.',
  },
  {
    question: 'Do we own the code and IP?',
    answer:
      'Yes — 100%. Full IP transfer and NDA are signed before any work begins. The source code, database schemas, and all documentation belong to you from day one.',
  },
  {
    question: 'What monetisation models can you build?',
    answer:
      'We build any commission structure: percentage of GMV, flat transaction fee, seller subscription tiers, featured listing fees, lead fees, freemium with paid upgrades, or hybrid models. The business logic is fully custom — not constrained by a template.',
  },
  {
    question: 'What ongoing support is available after launch?',
    answer:
      'We offer monthly retainer support covering bug fixes, feature additions, and infrastructure management. Most marketplace clients keep a small dedicated team to iterate on the product as the network grows.',
  },
];
