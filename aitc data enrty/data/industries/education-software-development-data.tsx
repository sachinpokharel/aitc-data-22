import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$7.3T', label: 'Global education market by 2025' },
  { value: '400M+', label: 'Online learners worldwide' },
  { value: '5x', label: 'ROI on digital learning infrastructure' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Students who drop off due to poor UX', value: '57%', status: 'warning' },
  { label: 'Learners preferring mobile access', value: '72%', status: 'info' },
  { label: 'Completion lift with personalised paths', value: '+40%', status: 'good' },
  { label: 'Institutions planning digital investment', value: '89%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Education & EdTech',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Education & EdTech', highlight: true },
    { text: ' Companies' },
  ],
  description:
    'From learning management systems and student information platforms to online course marketplaces and corporate training tools — we build the custom education software that drives engagement, completion, and outcomes.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['SCORM & xAPI compliant builds', 'Mobile-first learning experiences', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'SCORM ready' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
    iconLabel: 'EdTech reality',
    iconSubtitle: 'What education platforms are dealing with',
    items: heroMetrics,
    note: 'Custom software solves engagement and completion — the two metrics that determine whether your platform succeeds.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Universities & Schools',
    desc: 'Higher education institutions and K-12 schools building custom student portals, learning management systems, and administrative platforms that integrate with their existing systems.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'EdTech Startups',
    desc: 'Founders building online learning platforms, tutoring marketplaces, language learning apps, or assessment tools — who need a solid technical foundation without a large in-house engineering team.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Corporate Training Providers',
    desc: 'L&D teams and training companies building custom compliance training platforms, onboarding systems, and skills assessment tools for enterprise clients.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Online Course Creators',
    desc: 'Course creators and training companies who need their own platform — without the revenue share, branding restrictions, and feature limitations of Teachable or Thinkific.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Off-the-shelf LMS cannot model your pedagogy',
    solution: 'We build custom LMS platforms designed around your specific learning model — blended learning, cohort-based, self-paced, or competency-based — rather than forcing your curriculum into a generic template.',
  },
  {
    problem: 'High drop-off rates and low course completion',
    solution: 'We build personalised learning paths, progress nudges, gamification mechanics, and social learning features that keep learners engaged — increasing completion rates measurably.',
  },
  {
    problem: 'Content is locked in video with no interactivity',
    solution: 'We build interactive content layers — embedded quizzes, branching scenarios, live coding environments, and collaborative whiteboards — on top of video to make passive watching active learning.',
  },
  {
    problem: 'No mobile experience for learners on the go',
    solution: 'We build mobile-first web platforms and native iOS/Android apps with offline content download — so learners can continue a course on a commute with or without a data connection.',
  },
  {
    problem: 'Student data siloed across multiple disconnected tools',
    solution: 'We build integrated student information systems that connect enrolment, attendance, assessment, grades, and communications — giving administrators and parents one view of the student.',
  },
  {
    problem: 'Revenue model cannot scale beyond one-off course sales',
    solution: 'We build flexible monetisation engines — subscriptions, course bundles, cohort enrolments, B2B team licenses, and certificate programs — so you can expand your revenue model without rebuilding the platform.',
  },
];

export const educationProjectTabs: SolutionTab[] = [
  {
    label: 'Learning Management Systems',
    desc: 'Custom LMS platforms with course authoring tools, video hosting, interactive content, learner progress tracking, assessments, certificates, and instructor dashboards — SCORM and xAPI compliant.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    label: 'Student Information Systems',
    desc: 'Centralised SIS covering enrolment, attendance tracking, grade management, parent portals, fee collection, timetabling, and teacher reporting — integrated with your existing tools via API.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z' />
      </svg>
    ),
  },
  {
    label: 'Online Course Marketplaces',
    desc: 'Multi-instructor course marketplaces where creators publish courses and earn revenue share — with student enrolment, ratings, reviews, completion certificates, and payout management.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z' />
      </svg>
    ),
  },
  {
    label: 'Assessment & Certification Platforms',
    desc: 'Online examination platforms with proctoring, adaptive questioning, multiple question types, automatic grading, and digital certificate issuance — with fraud detection and detailed analytics.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    label: 'Corporate Training Platforms',
    desc: 'L&D platforms for enterprise clients — compliance training with audit trails, skills gap analysis, personalised learning paths, manager dashboards, and SCORM content import from existing course libraries.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    label: 'Tutoring & Mentoring Platforms',
    desc: 'Two-sided platforms matching students with tutors or mentors — with scheduling, video sessions, session notes, payment processing, review systems, and tutor availability management.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Learning Model Discovery',
    desc: 'We map your pedagogical approach, learner types, content formats, assessment methods, and monetisation model — before any design begins. We also scope which SCORM/xAPI requirements apply.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Content Architecture',
    desc: 'Learner dashboard, course player, instructor tools, and admin screens designed and validated with your team. Content delivery architecture and video streaming strategy defined.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Course player, assessment engine, and learner tracking built in two-week sprints — with real courses loaded and tested by actual learners from the first sprint.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Content Migration, QA & Launch',
    desc: 'Existing courses migrated from your current platform. Performance QA on video delivery, assessment grading, and certificate issuance — then a phased launch to a cohort of pilot learners.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'SCORM & xAPI Compliance',
    desc: 'Course content built to SCORM 1.2, SCORM 2004, or xAPI (Tin Can) standards — so content is portable, trackable, and compatible with any compliant LRS or LMS.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'GDPR & FERPA for Student Data',
    desc: 'Student data privacy handled under GDPR and FERPA — parental consent flows, data minimisation, and data residency options for EU and US institutions.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Accessibility (WCAG 2.1 AA)',
    desc: 'Learning platforms built to WCAG 2.1 AA accessibility standards — screen reader support, keyboard navigation, caption support, and colour contrast compliance for all learners.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Proctoring & Academic Integrity',
    desc: 'Online exam integrity controls — browser lockdown, webcam monitoring, AI-assisted anomaly detection, and session recording — with configurable trust levels per assessment type.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    title: 'Payment & PCI Compliance',
    desc: 'Course sales, subscriptions, and B2B invoicing built on Stripe — PCI-DSS compliant payment handling with no raw card data stored on your servers.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    title: 'SSO & LTI Integration',
    desc: 'Single sign-on via Google, Microsoft, or SAML — and LTI 1.3 integration so your platform connects to existing institutional LMS tools without requiring separate logins.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
];

export const educationSectors: IndustrySector[] = [
  {
    name: 'Universities & Schools',
    tagline: 'Custom SIS, student portals, and LMS with SSO integration.',
    desc: '', useCases: [],
    href: '/build/build-an-lms',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' /></svg>,
  },
  {
    name: 'EdTech Startups',
    tagline: 'Fast MVP and scalable learning platform builds.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /></svg>,
  },
  {
    name: 'Corporate Training & L&D',
    tagline: 'Compliance training with audit trails and skills tracking.',
    desc: '', useCases: [],
    href: '/build/build-an-lms',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>,
  },
  {
    name: 'Online Course Creators',
    tagline: 'Own your platform — no revenue share or branding limits.',
    desc: '', useCases: [],
    href: '/build/build-an-lms',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5' /></svg>,
  },
  {
    name: 'Tutoring & Mentoring Platforms',
    tagline: 'Two-sided matching with scheduling, video, and payments.',
    desc: '', useCases: [],
    href: '/build/build-a-booking-platform',
    accentColor: 'bg-pink-500', iconBg: 'bg-pink-500/15',
    icon: <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z' /></svg>,
  },
  {
    name: 'Language Learning Platforms',
    tagline: 'Gamified lessons, speech recognition, and spaced repetition.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'LMS Development', desc: 'Custom learning management systems with course authoring, video delivery, assessments, and SCORM compliance.', href: '/build/build-an-lms' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'MVP Development', desc: 'Validate your EdTech product idea with a live MVP in 10–14 weeks.', href: '/build/an-mvp' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based EdTech engineers embedded into your existing product team.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Mobile App Development', desc: 'iOS and Android learning apps with offline content download and push notifications.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'AI Learning Assistants', desc: 'AI tutors and Q&A chatbots trained on your course content for instant learner support.', href: '/build/build-an-ai-chatbot' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Booking Platforms', desc: 'Tutor and session booking systems with payments, video integration, and scheduling.', href: '/build/build-a-booking-platform' },
];

export const faqs: FAQ[] = [
  {
    question: 'Can you build a SCORM-compliant LMS?',
    answer:
      'Yes. We build learning management systems that are SCORM 1.2, SCORM 2004, and xAPI (Tin Can) compliant — so courses can be imported, tracked, and reported across any compliant LRS or LMS. We scope which standard is relevant to your content library during discovery.',
  },
  {
    question: 'Can you migrate our existing courses from Teachable, Thinkific, or Moodle?',
    answer:
      'Yes. We handle content migration from most existing LMS and course platforms — video content, quizzes, student enrolment records, progress data, and completion certificates. Migration scope and format conversion requirements are assessed during the scoping phase.',
  },
  {
    question: 'How do you handle video streaming at scale?',
    answer:
      'We use Mux or AWS MediaConvert for adaptive video encoding and CloudFront for global CDN delivery — so video loads fast for learners in any location. We also implement resume playback, chapter navigation, and progress tracking so learners can pick up exactly where they left off.',
  },
  {
    question: 'Can you build a tutor or mentoring marketplace?',
    answer:
      'Yes. We build two-sided platforms where students find and book tutors or mentors — with availability calendars, video session integration, payment processing, review systems, and tutor payout management. We also build the matching algorithm if your platform has specific matching criteria.',
  },
  {
    question: 'How much does a custom LMS or EdTech platform cost?',
    answer:
      'A starter LMS with course delivery, assessments, and learner tracking starts from $20,000. A full platform with marketplace features, live video, gamification, and mobile apps ranges from $50,000 to $120,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your course content, learner data, and business model are treated with complete confidentiality.',
  },
];
