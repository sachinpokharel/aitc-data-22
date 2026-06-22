import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$38B', label: 'Global HR tech market by 2027' },
  { value: '60%', label: 'Of HR time spent on admin tasks' },
  { value: '3x', label: 'Faster hiring with ATS automation' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'HR time lost to manual admin', value: '60%', status: 'warning' },
  { label: 'Candidates who drop off poor ATS flows', value: '45%', status: 'warning' },
  { label: 'Reduction in time-to-hire with automation', value: '50%', status: 'good' },
  { label: 'Employee satisfaction lift with self-service', value: '+35%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · HR & Workforce Management',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'HR & Workforce Management', highlight: true },
    { text: ' Teams' },
  ],
  description:
    'From applicant tracking systems and HRMS platforms to payroll engines, performance management tools, and employee self-service portals — we build the custom HR software that automates your people operations and gives your HR team their time back.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['Payroll & compliance built in', 'Employee self-service portals', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'GDPR compliant' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z' />
      </svg>
    ),
    iconLabel: 'HR tech reality',
    iconSubtitle: 'What HR teams are dealing with',
    items: heroMetrics,
    note: 'Custom HR software pays for itself in admin hours saved in the first year — and no per-seat fees after that.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Mid-size & Enterprise Companies',
    desc: 'Companies with 100–5,000 employees who have outgrown spreadsheets but need HR software that fits their structure, org chart, and policies — not a generic HRMS.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'HR SaaS Companies',
    desc: 'HR software startups building new HRMS, ATS, payroll, or people analytics products — who need a technical partner to build and scale their product.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Staffing & Recruitment Agencies',
    desc: 'Agencies managing large candidate databases, client job orders, and placement tracking — who need an ATS and CRM built around their specific billing and placement model.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Professional Employer Organisations',
    desc: 'PEOs and HR outsourcing firms who need multi-client HR platforms — managing employees across multiple companies with different payroll rules, benefits, and compliance requirements.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Per-seat HRMS fees that grow with every hire',
    solution: 'We build custom HRMS platforms owned outright — no per-employee fees, no module unlocks. The cost is fixed at build time, and it scales with your headcount for free.',
  },
  {
    problem: 'ATS that loses candidates in the pipeline',
    solution: 'We build applicant tracking systems with automated status updates, interview scheduling, structured feedback, and offer management — so candidates have a good experience and hiring managers have full visibility.',
  },
  {
    problem: 'Payroll calculated manually every month',
    solution: 'We build payroll engines that calculate gross-to-net automatically based on your salary structures, tax rules, overtime policies, and deductions — generating payslips and payroll files without manual calculation.',
  },
  {
    problem: 'Leave and attendance tracked in spreadsheets',
    solution: 'We build leave management systems with employee self-service, manager approval workflows, accrual calculations, and calendar integration — eliminating the email chain and the spreadsheet update.',
  },
  {
    problem: 'Performance reviews done once a year in Word documents',
    solution: 'We build continuous performance management platforms with OKR tracking, 360-degree feedback, regular check-ins, and manager coaching tools — making performance a year-round conversation, not a once-a-year form.',
  },
  {
    problem: 'Onboarding is a pile of PDF forms and manual checklists',
    solution: 'We build digital onboarding workflows — e-signature on contracts, automated task checklists, equipment requests, IT provisioning triggers, and buddy matching — so new hires are productive in their first week, not their second month.',
  },
];

export const hrProjectTabs: SolutionTab[] = [
  {
    label: 'HRMS & People Platforms',
    desc: 'Core HR platforms — employee records, org chart, job history, document management, leave management, expense management, and employee self-service portals — built around your org structure and HR policies.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z' />
      </svg>
    ),
  },
  {
    label: 'ATS & Recruitment',
    desc: 'Applicant tracking systems with job posting, CV parsing, multi-stage pipelines, interview scheduling, structured scoring, offer management, and candidate portal — reducing time-to-hire and improving candidate experience.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    label: 'Payroll & Compensation',
    desc: 'Payroll calculation engines — gross-to-net payroll, tax calculations, multi-country payroll, commission and bonus payouts, expense reimbursement, and payslip generation — integrated with accounting systems.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    label: 'Performance Management',
    desc: 'Continuous performance management — OKR and goal setting, regular check-ins, 360-degree feedback, performance review cycles, calibration workflows, and manager coaching dashboards.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    label: 'Learning & Development',
    desc: 'Corporate LMS platforms — compliance training with audit trails, skills gap analysis, personalised learning paths, course completion tracking, and certification management for enterprise L&D teams.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    label: 'Workforce Analytics',
    desc: 'People analytics dashboards — headcount trends, attrition risk scoring, diversity metrics, time-to-hire analytics, engagement survey results, and compensation benchmarking — giving HR teams data to make decisions with.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'HR Process & Compliance Discovery',
    desc: 'We map your org structure, HR workflows, payroll rules, performance processes, and compliance requirements — before any design begins.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Data Architecture',
    desc: 'Employee self-service portal, manager dashboard, HR admin console, and payroll screens designed and validated with your HR team. Employee data model and role hierarchy defined.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Core HRMS modules built in two-week sprints — with your HR team testing real employee workflows at each cycle using actual org data from early in the build.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Data Migration, Payroll QA & Go-Live',
    desc: 'Employee records migrated from your current system. Payroll calculation QA against actual payslips. Phased rollout starting with one department before full company rollout.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'GDPR & Employee Data Privacy',
    desc: 'Employee data handled under GDPR — purpose limitation, data retention policies, right-to-erasure for former employees, and data access logs for all HR records.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Payroll Tax Compliance',
    desc: 'Tax calculation engines built to the rules of your jurisdiction — PAYE (UK), PAYG (AU), W-2 (US), or other payroll tax frameworks — updated for each tax year.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    title: 'Right-to-Work & Document Verification',
    desc: 'Digital right-to-work checks with document upload, verification workflows, and expiry alerts — keeping your compliance records current for every employee.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Working Time & Leave Regulations',
    desc: 'Leave accrual, carry-over, and entitlement calculations built to the employment laws of your jurisdiction — with automatic updates when regulations change.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5' />
      </svg>
    ),
  },
  {
    title: 'E-Signature & Contract Management',
    desc: 'Employment contracts, NDAs, and policy acknowledgements with legally binding e-signature — with version control, expiry management, and bulk signing for policy updates.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'Role-Based Access Control',
    desc: 'Granular permissions for employees, managers, HR admins, and payroll teams — each seeing only the data relevant to their role, with full audit logs of all sensitive data access.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
];

export const hrSectors: IndustrySector[] = [
  {
    name: 'Mid-size Companies',
    tagline: 'First HRMS built around your structure — not a generic template.',
    desc: '', useCases: [],
    href: '/build/build-an-hrms',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Enterprise HR Teams',
    tagline: 'Multi-entity payroll, org hierarchies, and global compliance.',
    desc: '', useCases: [],
    href: '/build/build-an-hrms',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z' /></svg>,
  },
  {
    name: 'HR SaaS Companies',
    tagline: 'Build your HR product with a senior engineering team.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /></svg>,
  },
  {
    name: 'Staffing & Recruitment Agencies',
    tagline: 'ATS and CRM built for your placement and billing model.',
    desc: '', useCases: [],
    href: '/build/build-an-ats',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>,
  },
  {
    name: 'PEOs & HR Outsourcing',
    tagline: 'Multi-client platforms with isolated payroll and compliance.',
    desc: '', useCases: [],
    href: '/build/build-an-hrms',
    accentColor: 'bg-pink-500', iconBg: 'bg-pink-500/15',
    icon: <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Corporate L&D Teams',
    tagline: 'Compliance training, skills tracking, and performance management.',
    desc: '', useCases: [],
    href: '/build/build-an-lms',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'HRMS Development', desc: 'Custom HRMS platforms covering the full employee lifecycle from hire to retire.', href: '/build/build-an-hrms' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'ATS & Recruitment', desc: 'Applicant tracking systems with CV parsing, pipeline management, and offer workflows.', href: '/build/build-an-ats' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Dedicated Engineering Teams', desc: 'Nepal-based HR software engineers embedded into your product team.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'MVP Development', desc: 'Validate your HR SaaS product idea with a live MVP in 10–14 weeks.', href: '/build/an-mvp' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'LMS & Training Platforms', desc: 'Corporate learning platforms with compliance training, skills tracking, and certificates.', href: '/build/build-an-lms' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'AI HR Assistants', desc: 'AI chatbots for employee FAQ handling, leave requests, and onboarding guidance.', href: '/build/build-an-ai-chatbot' },
];

export const faqs: FAQ[] = [
  {
    question: 'Can you build a custom payroll engine?',
    answer:
      'Yes. We build payroll calculation engines based on your specific payroll rules — salary structures, tax tables for your jurisdiction, overtime policies, commission calculations, and deductions. The engine generates payslips and payroll export files for your bank or accounting system automatically.',
  },
  {
    question: 'Can you migrate employee data from our current HRMS?',
    answer:
      'Yes. We handle data migration from most HR platforms — employee records, job history, leave balances, document files, and payroll history. Migration scope and data mapping requirements are assessed during the scoping phase.',
  },
  {
    question: 'Can employees access the platform on mobile?',
    answer:
      'Yes. We build mobile-first web platforms and optionally native iOS/Android apps for employee self-service — leave requests, payslip downloads, expense submissions, and direct manager messaging — from any device.',
  },
  {
    question: 'How much does a custom HRMS cost to build?',
    answer:
      'A starter HRMS with employee records, leave management, and a self-service portal starts from $25,000. A full platform with payroll, ATS, performance management, and L&D ranges from $60,000 to $120,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'Can you integrate with our existing payroll or accounting software?',
    answer:
      'Yes. We build integrations with Xero, QuickBooks, Sage, and most payroll bureau systems — exporting payroll data in the format required and syncing employee costs to your accounts automatically.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call. Employee data and HR processes are treated with complete confidentiality throughout the project.',
  },
];
