import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '10+', label: 'ATS modules available' },
  { value: '8–24', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$25K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Custom ATS Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build an ATS That ' }, { text: 'Fills Roles Faster', highlight: true }],
  description:
    'Off-the-shelf ATS tools are built for average hiring teams. We build custom applicant tracking systems around your exact hiring workflows — job boards, pipelines, scorecards, and offer management that match how your team actually recruits.',
  primaryCTA: { label: 'Get ATS Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Custom hiring workflows', 'Free scoping call'],
  form: {
    preselectedService: 'Custom ATS Development',
    formName: 'hero-ats',
    informationPlaceholder: 'Tell us about your recruitment process — how many roles you hire for, your pipeline stages, and what your current ATS is missing...',
  },
};

export const whenCards = [
  {
    title: 'Your hiring process doesn\'t fit generic ATS software',
    points: [
      'Most ATS tools assume a simple linear pipeline — your process has custom stages, multi-team reviews, and role-specific scorecards',
      'A custom ATS models your exact recruitment workflow — not a simplified version of it',
    ],
  },
  {
    title: 'You hire at volume or across multiple departments',
    points: [
      'High-volume hiring across multiple job families requires bulk screening, automated shortlisting, and department-level pipelines',
      'We build ATS systems that scale to hundreds of open roles without the per-seat licensing costs',
    ],
  },
  {
    title: 'You\'re a staffing agency managing multiple clients',
    points: [
      'Agencies need client-separated pipelines, candidate ownership rules, fee tracking, and white-label portals for client visibility',
      'A custom ATS gives you the multi-client infrastructure that no off-the-shelf tool fully provides',
    ],
  },
  {
    title: 'Candidate experience is part of your employer brand',
    points: [
      'Branded career pages, personalised application flows, and timely status updates signal that you take candidates seriously',
      'We build a fully branded candidate experience — from job discovery through to offer acceptance',
    ],
  },
  {
    title: 'You need the ATS integrated with your HRMS or ERP',
    points: [
      'When a candidate is hired, creating their employee record manually in a separate HRMS wastes time and introduces errors',
      'We build the handoff from ATS to HRMS automatically — offer accepted triggers onboarding without re-entering data',
    ],
  },
  {
    title: 'Compliance and data ownership matter to you',
    points: [
      'GDPR, EEOC, and data residency requirements are hard to enforce on third-party SaaS platforms',
      'A custom ATS on your own infrastructure gives you full control over candidate data, consent, and audit trails',
    ],
  },
];

export const atsModuleTabs: SolutionTab[] = [
  {
    label: 'Job Posting & Career Site',
    desc: 'Branded career site with role listings, team culture content, and smart job application forms. One-click distribution to LinkedIn, Indeed, and niche job boards — with UTM tracking to measure source quality.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    label: 'Candidate Pipeline',
    desc: 'Visual Kanban pipeline with configurable stages — applied, screened, interview, assessment, offer, hired. Bulk actions, drag-and-drop movement, filters, and role-based visibility for hiring managers.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' />
      </svg>
    ),
  },
  {
    label: 'Resume Parsing & Screening',
    desc: 'AI-powered resume parsing extracts skills, experience, and education into structured profiles. Configurable knockout questions, minimum criteria filters, and scoring rules to surface best-fit candidates automatically.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    label: 'Interview Scheduling',
    desc: 'Self-service interview scheduling links sent to candidates — they pick a slot from interviewer availability without email back-and-forth. Panel interview coordination, video conferencing integration, and automatic reminders.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5' />
      </svg>
    ),
  },
  {
    label: 'Scorecards & Assessments',
    desc: 'Structured interview scorecards with role-specific competencies, rating scales, and mandatory feedback fields. Integrated skills tests, take-home assignments, and third-party assessment tool connections.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
      </svg>
    ),
  },
  {
    label: 'Offer Management & Onboarding',
    desc: 'Digital offer letters with configurable approval chains, e-signature, and counter-offer handling. Accepted offers automatically trigger HRMS onboarding — new employee record created, equipment requests raised, day-one checklist sent.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Recruitment Workflow Discovery',
    desc: 'We map your hiring pipeline stages, team roles, scorecard criteria, compliance requirements, and HRMS handoff process — before any design or development begins.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Career Site',
    desc: 'Candidate-facing career site, application flow, and recruiter dashboard designed and signed off — optimised for candidate conversion and recruiter efficiency.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile ATS Development',
    desc: 'Pipeline, screening, scheduling, and offer modules built in two-week sprints. Working features demonstrated at the end of every cycle with real test candidates.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Integrations, QA & Go-Live',
    desc: 'Job board connections, HRMS handoff, video conferencing, and e-signature integrated and tested. Full QA on edge cases — duplicate candidates, withdrawn offers, re-applications — then go-live.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'ATS Starter',
    price: '$25K – $45K',
    topBadge: '8–12 weeks',
    desc: 'Core ATS for growing teams — career site, candidate pipeline, interview scheduling, and offer management without the per-seat licensing fees.',
    features: [
      'Branded career site & job listings',
      'Application pipeline with custom stages',
      'Resume parsing & candidate profiles',
      'Interview scheduling with calendar sync',
      'Basic scorecards & feedback',
      'Offer letter generation',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full ATS Platform',
    price: '$45K – $90K',
    topBadge: '12–20 weeks',
    desc: 'A complete recruitment platform for high-volume or multi-department hiring — with AI screening, assessments, analytics, and HRMS integration.',
    features: [
      'Everything in Starter',
      'AI-powered resume screening & scoring',
      'Skills assessments & take-home tasks',
      'Multi-department pipeline management',
      'Recruitment analytics & time-to-hire reports',
      'HRMS onboarding integration',
      'Job board distribution & source tracking',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Agency & Enterprise ATS',
    price: '$90K+',
    topBadge: '20–24 weeks',
    desc: 'Multi-client ATS for staffing agencies or enterprise organisations — with white-label portals, fee tracking, compliance exports, and advanced workflow automation.',
    features: [
      'Everything in Full Platform',
      'Multi-client candidate management',
      'White-label client portals',
      'Placement fee & commission tracking',
      'GDPR & EEOC compliance exports',
      'Advanced workflow automation',
      'Dedicated post-launch support',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const atsIndustrySectors: IndustrySector[] = [
  {
    name: 'Tech & SaaS Companies',
    tagline: 'Technical hiring with coding assessments built in.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    name: 'Healthcare & Clinical',
    tagline: 'Credentialing checks and compliance-ready hiring.',
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
    name: 'Staffing & Recruitment Agencies',
    tagline: 'Multi-client pipelines with placement fee tracking.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    name: 'Retail & Hospitality',
    tagline: 'High-volume hourly hiring with rapid screening.',
    desc: '',
    useCases: [],
    href: '/industries/retail-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' />
      </svg>
    ),
  },
  {
    name: 'Manufacturing & Logistics',
    tagline: 'Shift-based bulk hiring with skills verification.',
    desc: '',
    useCases: [],
    href: '/industries/manufacturing-software-development',
    accentColor: 'bg-amber-500',
    iconBg: 'bg-amber-500/15',
    icon: (
      <svg className='size-5 text-amber-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    name: 'Education & Non-profits',
    tagline: 'Academic hiring with committee review workflows.',
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
    title: 'Custom HRMS Development',
    desc: 'Connect your ATS to HR — hired candidates flow directly into employee records, payroll, and onboarding.',
    href: '/build/build-an-hrms',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Custom CRM Development',
    desc: 'Track candidate relationships over time — talent pools, re-engagement campaigns, and referral pipelines.',
    href: '/build/build-an-custom-crm',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Custom LMS Development',
    desc: 'Connect hiring to learning — auto-enrol new hires into onboarding and compliance training on day one.',
    href: '/build/build-an-lms',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'Dedicated Development Team',
    desc: 'A long-term Nepal-based team embedded in your workflow for ongoing ATS feature development.',
    href: '/services/dedicated-development-team',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Custom ERP Development',
    desc: 'Tie headcount planning in your ERP to open roles in your ATS — hire against budget, not gut feel.',
    href: '/build/erp-system',
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
    question: 'How much does a custom ATS cost?',
    answer:
      'A starter ATS with core pipeline, scheduling, and offer management begins from $25,000. A full platform with AI screening, assessments, analytics, and HRMS integration ranges from $45,000 to $90,000. Agency or enterprise multi-client systems start above $90,000. We provide a detailed fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom ATS?',
    answer:
      'A starter ATS takes 8–12 weeks. A full-featured platform takes 12–20 weeks. Agency or enterprise systems take 20–24 weeks. Timelines depend on the number of modules, integrations with HRMS and job boards, and decision turnaround on your side.',
  },
  {
    question: 'Can you integrate the ATS with LinkedIn, Indeed, and other job boards?',
    answer:
      'Yes. We integrate with major job boards via their APIs — posting roles from your ATS and pulling applications back automatically. Source tracking shows you which boards deliver the best-quality candidates so you can optimise your spend.',
  },
  {
    question: 'Can the ATS connect to our existing HRMS when a candidate is hired?',
    answer:
      'Yes. When an offer is accepted, the ATS can automatically create the employee record in your HRMS, trigger an onboarding checklist, raise equipment requests, and enrol the new hire in their first training programme — no manual re-entry of data.',
  },
  {
    question: 'Can you build AI-powered resume screening into the ATS?',
    answer:
      'Yes. We build AI screening that parses resumes, scores candidates against configurable criteria, and surfaces the best-fit profiles automatically. Knockout questions and minimum thresholds filter out clearly unqualified applications before a recruiter ever sees them.',
  },
  {
    question: 'Can multiple hiring managers score candidates independently?',
    answer:
      'Yes. Structured scorecards are sent to each interviewer separately — they complete their scoring without seeing other reviewers\' ratings first. Scores are then aggregated and visible to the hiring committee after everyone has submitted feedback.',
  },
  {
    question: 'Is the ATS GDPR compliant?',
    answer:
      'Yes. We build GDPR compliance into the platform — candidate consent capture, right-to-erasure workflows, data retention policies, and full audit trails. For EEOC or other regional compliance requirements, we configure the system to your jurisdiction.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your hiring processes, candidate data, and business details are treated with complete confidentiality.',
  },
];
