import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '8+', label: 'LMS modules available' },
  { value: '8–28', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$25K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Custom LMS Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build an LMS That ' }, { text: 'Actually Drives Learning', highlight: true }],
  description:
    'Generic LMS platforms force your content into rigid templates. We build custom learning platforms around your curriculum, learners, and business model — so training actually sticks.',
  primaryCTA: { label: 'Get LMS Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Custom learning flows', 'Free scoping call'],
  form: {
    preselectedService: 'Custom LMS Development',
    formName: 'hero-lms',
  },
};

export const whenCards = [
  {
    title: 'Off-the-shelf LMS doesn\'t match your learning model',
    points: [
      'Platforms like Moodle or Teachable force you to adapt your curriculum to their structure',
      'A custom LMS is built around your course format, assessment style, and learner journey',
    ],
  },
  {
    title: 'You want to sell courses as a business',
    points: [
      'Consumer LMS tools take a cut of every sale and limit your branding and pricing flexibility',
      'Own your platform, keep 100% of revenue, and set your own subscription or one-time pricing',
    ],
  },
  {
    title: 'You need to train a large internal workforce',
    points: [
      'Corporate training at scale needs role-based content, compliance tracking, and manager dashboards',
      'A custom LMS lets you assign training by department, track completion, and enforce deadlines',
    ],
  },
  {
    title: 'You need SCORM, xAPI, or custom integrations',
    points: [
      'Many platforms support SCORM only partially or charge extra for xAPI and LRS integrations',
      'We build full SCORM/xAPI compliance and integrate with your HRMS, CRM, or ERP',
    ],
  },
  {
    title: 'Your learners need mobile-first access',
    points: [
      'Most LMS tools have poor mobile experiences — learners drop off when training feels clunky on mobile',
      'We build native or PWA mobile apps so your learners can train anywhere, including offline',
    ],
  },
  {
    title: 'You need certificates, CPD points, or accreditation',
    points: [
      'Regulated industries require auditable completion records, verifiable certificates, and CPD tracking',
      'We build custom certificate engines with QR verification, branded templates, and compliance exports',
    ],
  },
];

export const lmsModuleTabs: SolutionTab[] = [
  {
    label: 'Course Builder',
    desc: 'A drag-and-drop content authoring tool supporting video, audio, documents, SCORM packages, interactive H5P content, and branching scenarios — built for instructors, not developers.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
      </svg>
    ),
  },
  {
    label: 'Assessments & Quizzes',
    desc: 'MCQs, true/false, fill-in-the-blank, video response, and assignment submissions — with configurable pass marks, retake limits, randomised question pools, and anti-cheating controls.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' />
      </svg>
    ),
  },
  {
    label: 'Learner Portal',
    desc: 'A personalised learner dashboard — enrolled courses, progress tracking, deadlines, certificates earned, leaderboards, discussion forums, and recommended next courses.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
      </svg>
    ),
  },
  {
    label: 'Instructor & Admin Dashboard',
    desc: 'Course management, cohort creation, enrolment controls, progress monitoring, grading, messaging, live session scheduling, and organisation-level compliance reporting.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2' />
      </svg>
    ),
  },
  {
    label: 'Certificates & Compliance',
    desc: 'Branded certificate generation with QR-code verification, CPD point tracking, expiry and renewal reminders, bulk certificate export, and audit-ready compliance reports.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
      </svg>
    ),
  },
  {
    label: 'Live Classes & Cohorts',
    desc: 'Scheduled live sessions via integrated video conferencing, cohort-based learning paths, group assignments, peer review, cohort leaderboards, and instructor-led discussion threads.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Learning Design Discovery',
    desc: 'We map your curriculum structure, learner personas, delivery format, assessment model, and business goals before any design or development begins.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Content Architecture',
    desc: 'Learner portal, instructor dashboard, and course builder UX designed for your specific content types — with sign-off on flows before a single component is built.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Core LMS modules built in two-week sprints. You see working features at the end of each cycle and can adjust scope and priority as you go.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Content Migration, QA & Launch',
    desc: 'Existing courses migrated or imported, full QA on enrolment flows, assessments, and certificate generation, then staged rollout to your first cohort.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'LMS Starter',
    price: '$25K – $45K',
    topBadge: '8–12 weeks',
    desc: 'Core learning platform for small teams or course creators — course builder, learner portal, assessments, and basic certificates.',
    features: [
      'Course builder with video & documents',
      'Learner portal & progress tracking',
      'Quizzes & assessments',
      'Basic certificate generation',
      'Instructor & admin dashboard',
      'Enrolment management',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full LMS Platform',
    price: '$45K – $90K',
    topBadge: '12–20 weeks',
    desc: 'A complete learning platform for growing organisations — with live classes, compliance tracking, monetisation, and mobile access.',
    features: [
      'Everything in Starter',
      'Live classes & cohort learning',
      'CPD & compliance certificate tracking',
      'Course marketplace & payments',
      'Mobile app (iOS & Android)',
      'Advanced analytics & reporting',
      'SCORM / xAPI support',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Enterprise LMS',
    price: '$90K+',
    topBadge: '20–28 weeks',
    desc: 'Multi-tenant LMS for training providers, universities, or enterprises — with white-labelling, HRMS integration, and accreditation support.',
    features: [
      'Everything in Full Platform',
      'Multi-tenant white-label portals',
      'HRMS & ERP integration',
      'AI-powered course recommendations',
      'Advanced learner analytics',
      'Accreditation & audit trail exports',
      'Dedicated post-launch support',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const lmsIndustrySectors: IndustrySector[] = [
  {
    name: 'Corporate Training',
    tagline: 'Onboarding, compliance, and upskilling at scale.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    name: 'EdTech Startups',
    tagline: 'Sell courses and subscriptions on your own platform.',
    desc: '',
    useCases: [],
    href: '/industries/education-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.606 50.606 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    name: 'Healthcare & Clinical',
    tagline: 'CPD-accredited training with audit trails.',
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
    name: 'Government & Public Sector',
    tagline: 'Mandatory training with compliance reporting.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' />
      </svg>
    ),
  },
  {
    name: 'Higher Education',
    tagline: 'Blended learning for universities and colleges.',
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
    name: 'Professional Training Providers',
    tagline: 'Certification programmes with renewal management.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
      </svg>
    ),
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Custom HRMS Development',
    desc: 'Connect your LMS to HR for automated enrolment, compliance tracking, and workforce reports.',
    href: '/build/build-an-hrms',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Custom ERP Development',
    desc: 'Modular ERP systems that unify finance, inventory, procurement, and operations.',
    href: '/build/erp-system',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Marketplace Development',
    desc: 'Build a two-sided course marketplace where instructors sell and learners discover content.',
    href: '/build/build-a-marketplace-app',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'Mobile App Development',
    desc: 'Native iOS and Android apps for offline-first learning on the go.',
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
    title: 'SaaS Development',
    desc: 'Multi-tenant platforms and cloud-native products built to scale.',
    href: '/services/saas-development',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How much does a custom LMS cost?',
    answer:
      'A starter LMS with core course delivery and assessments begins from $25,000. A full platform with live classes, mobile apps, SCORM support, and monetisation ranges from $45,000 to $90,000. Enterprise multi-tenant systems start above $90,000. We provide a detailed fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom LMS?',
    answer:
      'A starter LMS takes 8–12 weeks. A full-featured platform takes 12–20 weeks. Enterprise multi-tenant systems take 20–28 weeks. Timelines depend on the number of modules, content types supported, integrations required, and decision turnaround on your side.',
  },
  {
    question: 'Do you support SCORM and xAPI?',
    answer:
      'Yes. We build full SCORM 1.2, SCORM 2004, and xAPI (Tin Can) compliance into the LMS. We also integrate with external Learning Record Stores (LRS) if you need a separate data layer for learning analytics.',
  },
  {
    question: 'Can learners access the LMS on mobile and offline?',
    answer:
      'Yes. We build either a Progressive Web App (PWA) or native iOS/Android app with offline content caching — so learners can download modules and complete them without an internet connection, syncing progress when they reconnect.',
  },
  {
    question: 'Can we sell courses and subscriptions through the LMS?',
    answer:
      'Yes. We build course marketplace functionality with Stripe or PayPal integration, supporting one-time purchases, subscription plans, coupon codes, and instructor revenue sharing if needed.',
  },
  {
    question: 'Can you migrate our existing courses from Moodle, Teachable, or another platform?',
    answer:
      'Yes. We handle content migration from most LMS platforms — importing SCORM packages, video content, quiz banks, and learner records. Migration scope and complexity is assessed during scoping.',
  },
  {
    question: 'Can the LMS integrate with our HRMS or ERP?',
    answer:
      'Yes. We regularly integrate LMS platforms with HRMS systems for automated enrolment based on role, department, or hire date, and with ERPs or CRMs for customer training and partner certification programmes.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal. Your curriculum, business model, and project details are treated with complete confidentiality.',
  },
];
