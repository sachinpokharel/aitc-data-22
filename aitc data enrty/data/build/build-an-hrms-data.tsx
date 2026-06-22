import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '10+', label: 'HRMS modules available' },
  { value: '8–36', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$30K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Custom HRMS Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build an HRMS Your ' }, { text: 'People Actually Use', highlight: true }],
  description:
    'Generic HR software forces your team to adapt to it. We build custom HRMS platforms around your exact workflows — payroll, attendance, recruitment, and performance in one unified system.',
  primaryCTA: { label: 'Get HRMS Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Custom workflows', 'Free scoping call'],
  form: {
    preselectedService: 'Custom HRMS Development',
    formName: 'hero-hrms',
  },
};

export const whenCards = [
  {
    title: 'Your HR software doesn\'t fit your policies',
    points: [
      'Off-the-shelf HRMS forces you to change your leave, payroll, or appraisal rules to match the tool',
      'A custom HRMS is built around your policies — not the other way around',
    ],
  },
  {
    title: 'Payroll and attendance are disconnected',
    points: [
      'Manual reconciliation between attendance sheets and payroll wastes hours every month',
      'We integrate both into one system so payroll runs automatically from attendance data',
    ],
  },
  {
    title: 'You manage a multi-location or multi-entity workforce',
    points: [
      'Different offices, entities, or countries often have different rules, currencies, and compliance needs',
      'We build multi-entity HRMS with location-aware policies, reporting, and payroll processing',
    ],
  },
  {
    title: 'Recruitment is still spreadsheet-based',
    points: [
      'Tracking applicants across email threads and spreadsheets leads to missed candidates and slow hiring',
      'A built-in ATS gives you a pipeline, scoring, and offer management in one place',
    ],
  },
  {
    title: 'You have no single source of truth for employee data',
    points: [
      'HR data spread across Excel, email, and legacy systems creates errors and compliance risk',
      'A centralised employee record with role-based access solves the problem permanently',
    ],
  },
  {
    title: 'Performance reviews happen in email or never',
    points: [
      'Without a structured process, appraisals are inconsistent, delayed, or skipped entirely',
      'We build goal-setting, continuous feedback, and review cycles into your HRMS',
    ],
  },
];

export const hrmsModuleTabs: SolutionTab[] = [
  {
    label: 'Employee Records',
    desc: 'A centralised employee database with complete profiles — personal details, job history, documents, org chart position, and role-based access controls for HR, managers, and employees.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    label: 'Payroll & Compensation',
    desc: 'Automated payroll processing with tax calculations, deductions, allowances, multi-currency support, payslip generation, and direct bank transfer integration — compliant with local regulations.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    label: 'Leave & Attendance',
    desc: 'Configurable leave policies, approval workflows, biometric or geofenced clock-in, shift scheduling, overtime tracking, and real-time attendance dashboards for managers.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    label: 'Recruitment & ATS',
    desc: 'End-to-end hiring pipeline — job postings, application tracking, resume screening, interview scheduling, candidate scorecards, offer letter generation, and onboarding handoff.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    label: 'Performance Management',
    desc: 'Goal-setting (OKRs or KPIs), continuous feedback, 360-degree reviews, appraisal cycles, rating calibration, and performance-linked compensation adjustments — built to your review process.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
      </svg>
    ),
  },
  {
    label: 'Self-Service & Mobile',
    desc: 'Employee self-service portal and mobile app — apply for leave, view payslips, update personal details, submit expenses, access company documents, and get HR approvals on the go.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'HR Process Discovery',
    desc: 'We map your existing HR workflows — payroll rules, leave policies, org structure, compliance requirements, and reporting needs — before writing a single line of code.',
  },
  {
    timing: 'Week 3–4',
    title: 'Module Scoping & UX Design',
    desc: 'We define the exact modules for your v1, design the employee portal and admin dashboards, and get sign-off on flows before development begins.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Core modules built in two-week sprints — you see working software at the end of each cycle and can adjust priorities as you go.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'Integration, QA & Payroll Testing',
    desc: 'End-to-end testing of payroll runs, leave calculations, and approval flows. Integration with your existing tools — ERP, accounting software, biometric devices.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'HRMS Starter',
    price: '$30K – $55K',
    topBadge: '8–14 weeks',
    desc: 'Core HR functionality for growing teams — employee records, leave management, basic payroll, and an employee self-service portal.',
    features: [
      'Employee records & org chart',
      'Leave & attendance tracking',
      'Basic payroll processing',
      'Employee self-service portal',
      'Role-based access control',
      'Standard HR reports',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full HRMS Platform',
    price: '$55K – $110K',
    topBadge: '14–24 weeks',
    desc: 'Complete HRMS covering the full employee lifecycle — from recruitment and onboarding through payroll, performance, and offboarding.',
    features: [
      'Everything in Starter',
      'Recruitment pipeline & ATS',
      'Performance management & appraisals',
      'Advanced payroll with tax compliance',
      'Mobile app for employees',
      'Custom approval workflows',
      'Analytics & HR dashboards',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Enterprise HRMS',
    price: '$110K+',
    topBadge: '24–36 weeks',
    desc: 'Multi-entity, multi-location HRMS for large organisations — with advanced compliance, integrations, learning management, and white-label portals.',
    features: [
      'Everything in Full Platform',
      'Multi-entity & multi-currency payroll',
      'Learning & development (LMS)',
      'Advanced compliance & audit trails',
      'ERP & third-party integrations',
      'White-label employee portal',
      'Dedicated post-launch support',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const hrmsIndustrySectors: IndustrySector[] = [
  {
    name: 'Manufacturing & Operations',
    tagline: 'Shift scheduling and shop-floor attendance.',
    desc: '',
    useCases: [],
    href: '/industries/manufacturing-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    name: 'Healthcare & Hospitals',
    tagline: 'Rostering, compliance, and credentialing.',
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
    name: 'IT & Tech Companies',
    tagline: 'Remote-first HR with OKRs and async reviews.',
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
    name: 'Retail & Hospitality',
    tagline: 'High-volume hourly workforce management.',
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
    name: 'Education & NGOs',
    tagline: 'Faculty management, grants, and compliance.',
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
    name: 'Construction & Real Estate',
    tagline: 'Site-based workforce with contractor payroll.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Custom ERP Development',
    desc: 'Modular ERP systems that unify finance, inventory, procurement, and operations.',
    href: '/build/erp-system',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Custom CRM Development',
    desc: 'Sales pipelines, contact management, and automation built for your process.',
    href: '/build/build-an-custom-crm',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Custom Software Development',
    desc: 'End-to-end custom software built around your unique business processes.',
    href: '/custom-software-development',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'Dedicated Development Team',
    desc: 'A long-term Nepal-based team embedded in your workflow.',
    href: '/services/dedicated-development-team',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Mobile App Development',
    desc: 'iOS and Android apps — including employee self-service and manager apps.',
    href: '/services/mobile-app-development',
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
    question: 'How much does a custom HRMS cost?',
    answer:
      'Costs depend on the modules required, team size, integrations, and compliance complexity. A starter HRMS typically begins from $30,000. A full-featured platform with recruitment, payroll, and performance management ranges from $55,000 to $110,000. Enterprise-grade multi-entity systems start above $110,000. We provide a detailed fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom HRMS?',
    answer:
      'A starter HRMS takes 8–14 weeks. A full platform covering the complete employee lifecycle takes 14–24 weeks. Enterprise-grade multi-entity systems take 24–36 weeks. Timelines depend on the number of modules, integrations with existing tools, and how quickly decisions are made on your side.',
  },
  {
    question: 'Can you integrate the HRMS with our existing payroll or accounting software?',
    answer:
      'Yes. We regularly integrate with Xero, QuickBooks, SAP, Tally, and other accounting tools, as well as biometric attendance devices, bank payment APIs, and third-party background-check services. We map out all required integrations during the scoping phase.',
  },
  {
    question: 'Will the HRMS handle our local payroll tax and compliance rules?',
    answer:
      'Yes. We build payroll engines around your specific jurisdiction — tax slabs, provident fund, social security, and statutory deductions. For multi-country setups, we configure each entity separately with its own compliance rules.',
  },
  {
    question: 'Can employees access the HRMS from their phones?',
    answer:
      'Yes. Every HRMS we build includes either a mobile-responsive web portal or a dedicated mobile app (iOS and Android) so employees can apply for leave, view payslips, clock in, and complete approvals from anywhere.',
  },
  {
    question: 'Can you migrate data from our existing HR system?',
    answer:
      'Yes. We handle data migration from spreadsheets, legacy HRMS platforms, or third-party tools as part of the project. We clean, transform, and validate the data before import to ensure accuracy.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your HR data, business processes, and project details are treated with complete confidentiality.',
  },
];
