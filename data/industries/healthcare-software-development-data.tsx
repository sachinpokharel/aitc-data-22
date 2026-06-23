import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$659B', label: 'Global digital health market by 2030' },
  { value: '49%', label: 'Clinicians reporting EHR-driven burnout' },
  { value: '40%', label: 'Reduction in admin cost with digital intake' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Clinicians spending 2+ hours daily on admin', value: '49%', status: 'warning' },
  { label: 'Average appointment no-show rate', value: '30%', status: 'warning' },
  { label: 'Admin cost reduction with digital patient intake', value: '40%', status: 'good' },
  { label: 'Patient satisfaction lift from self-service portals', value: '+35%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Healthcare & MedTech',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Healthcare & MedTech', highlight: true },
    { text: ' Organisations' },
  ],
  description:
    'From electronic health records and telemedicine platforms to patient portals, medical billing systems, and clinical workflow tools — we build HIPAA-compliant healthcare software that reduces administrative burden and improves patient outcomes.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['HIPAA-ready builds', 'HL7/FHIR integration included', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'HIPAA compliant' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
    iconLabel: 'Healthcare reality',
    iconSubtitle: 'What healthcare operators are dealing with',
    items: heroMetrics,
    note: 'Custom software cuts documentation burden, reduces no-shows, and gives clinicians time back for patients.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Private Clinics & GP Practices',
    desc: 'Single and multi-site clinics that need appointment scheduling, digital patient intake, clinical notes, and billing — in one system that fits their workflow rather than forcing their workflow to fit the software.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'Hospitals & Health Networks',
    desc: 'Health systems managing multiple departments, wards, and care pathways — who need EHR platforms, bed management, referral workflows, and cross-department reporting that generic systems cannot provide.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819' />
      </svg>
    ),
  },
  {
    title: 'Telehealth & Digital Health Startups',
    desc: 'Founders building remote consultation platforms, chronic disease management tools, mental health apps, or remote patient monitoring products — who need compliant architecture from the first sprint.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3' />
      </svg>
    ),
  },
  {
    title: 'Health Insurers & Billing Companies',
    desc: 'Payers and revenue cycle management companies processing claims, managing pre-authorisations, and reconciling reimbursements — who need automation to reduce rejection rates and accelerate cash flow.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Clinicians spending 40% of their day on documentation instead of patients',
    solution: 'We build clinical workflow systems with structured note templates, voice-to-text integration, and automated pre-population from previous visits — cutting documentation time so clinicians see more patients per session without extending their day.',
  },
  {
    problem: '30% no-show rate with no automated SMS recall or waitlist backfill',
    solution: 'We build appointment management systems with automated SMS and email reminders at configurable intervals, one-click cancellation links, and instant waitlist promotion — so a cancelled slot is filled within minutes, not lost.',
  },
  {
    problem: 'Patient notes in one system, lab results in another, billing in a third',
    solution: 'We build integrated EHR platforms — or HL7/FHIR middleware — that consolidate clinical notes, investigation results, prescriptions, and billing into a single patient record your entire care team can access.',
  },
  {
    problem: 'Claim rejections from coding errors eating 10–15% of billed revenue',
    solution: 'We build medical billing systems with ICD-10 and CPT code validation, pre-submission claim scrubbing, and automated rejection follow-up workflows — reducing your denial rate and accelerating reimbursement cycles.',
  },
  {
    problem: 'Patients expecting a telemedicine option your practice cannot offer',
    solution: 'We build HIPAA-compliant video consultation platforms with secure messaging, digital consent, e-prescribing, and post-consultation note sync — so your clinicians can see remote patients without switching to a consumer video tool.',
  },
  {
    problem: 'Lab results faxed or emailed as PDFs with no link to the clinical record',
    solution: 'We build HL7-integrated lab result workflows that receive structured results directly into the patient record, flag abnormal values for clinician review, and trigger automated patient notification — without a fax or manual filing step.',
  },
];

export const healthcareProjectTabs: SolutionTab[] = [
  {
    label: 'Electronic Health Records (EHR/EMR)',
    desc: 'Custom EHR platforms built around your clinical workflows — structured note templates, problem lists, medication management, investigation ordering, result review, and audit trails. Integrated with labs, imaging, and billing.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z' />
      </svg>
    ),
  },
  {
    label: 'Telemedicine Platforms',
    desc: 'HIPAA-compliant video consultation platforms with appointment booking, waiting room management, secure messaging, digital consent forms, e-prescribing, and post-consultation note sync to the patient EHR.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
  {
    label: 'Patient Portals & Engagement',
    desc: 'Self-service patient portals with appointment booking, medical record access, test result viewing, secure messaging with care teams, prescription renewal requests, and digital intake forms that pre-populate the clinical record.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    label: 'Medical Billing & Revenue Cycle',
    desc: 'End-to-end medical billing systems — charge capture, ICD-10/CPT coding validation, claim scrubbing, payer submission, ERA posting, denial management, and patient statement generation. Reduces rejection rates and accelerates cash flow.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    label: 'Clinical Workflow & Scheduling',
    desc: 'Appointment scheduling with provider availability rules, referral management, waiting list automation, ward round tools, bed management, and clinical task assignment — built around how your care teams actually work.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z' />
      </svg>
    ),
  },
  {
    label: 'Health Analytics & Reporting',
    desc: 'Population health dashboards, clinical outcome reporting, capacity utilisation analytics, readmission risk scoring, and regulatory submission data pipelines — giving clinical and operational leaders the data to act, not just describe.',
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
    title: 'Clinical Workflow & Compliance Discovery',
    desc: 'We map your care pathways, existing system integrations, regulatory requirements (HIPAA, GDPR, NHS standards), and data flows before any design begins. Clinician and admin interviews are part of this phase — not an afterthought.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & System Architecture',
    desc: 'Clinical interfaces, patient-facing screens, and admin dashboards designed and validated with real users from your team. Integration architecture with EHR systems, labs, imaging, and billing systems defined before development starts.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Clinical and administrative modules built in two-week sprints — tested with realistic patient data scenarios at each cycle. Compliance controls and audit logging built in from sprint one, not retrofitted before launch.',
  },
  {
    timing: 'Final 2–4 weeks',
    title: 'Clinical Validation & Go-Live',
    desc: 'End-to-end testing with clinical staff, penetration testing, and regulatory sign-off preparation. Parallel running alongside existing systems before full cutover — minimising disruption to patient care during the transition.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'HIPAA Compliance',
    desc: 'Protected Health Information (PHI) handled under HIPAA from architecture — encryption at rest and in transit, Business Associate Agreements, access controls, audit logs, and breach notification workflows built in from the start.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'GDPR & Patient Data Privacy',
    desc: 'Patient consent management, data minimisation, right-to-erasure workflows, and regional data residency — built to UK GDPR and EU GDPR requirements so your platform operates legally across jurisdictions.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    title: 'HL7 & FHIR Interoperability',
    desc: 'HL7 v2 and FHIR R4 integrations with lab systems, imaging platforms, pharmacy systems, and national health records — so your platform exchanges structured clinical data without manual re-entry or PDF workarounds.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    title: 'Clinical Data Security',
    desc: 'Role-based access control for clinicians, nurses, admin, and patients — each seeing only the data their role permits. Comprehensive audit trails on every record access, modification, and export for regulatory and medico-legal purposes.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
  {
    title: 'NHS & CQC Standards',
    desc: 'For UK healthcare providers — systems designed to meet NHS Digital standards, Data Security and Protection Toolkit requirements, and CQC inspection expectations around record-keeping and information governance.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'Medical Device Software (IEC 62304)',
    desc: 'For MedTech products with a software component — development lifecycle documentation, risk management under ISO 14971, and software classification under IEC 62304 built into the engineering process from the start.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
];

export const healthcareSectors: IndustrySector[] = [
  {
    name: 'Primary Care & GP Practices',
    tagline: 'Appointment scheduling, digital intake, clinical notes, and patient portals for GP-led care.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' /></svg>,
  },
  {
    name: 'Hospitals & Specialist Clinics',
    tagline: 'EHR, bed management, referral workflows, and department-level reporting for secondary care.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-rose-500', iconBg: 'bg-rose-500/15',
    icon: <svg className='size-5 text-rose-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819' /></svg>,
  },
  {
    name: 'Telehealth & Remote Care',
    tagline: 'HIPAA-compliant video consultation, asynchronous messaging, and remote monitoring platforms.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z' /></svg>,
  },
  {
    name: 'Mental Health Platforms',
    tagline: 'Therapy booking, secure messaging, mood tracking, and crisis escalation workflows.',
    desc: '', useCases: [],
    href: '/build/an-mvp',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' /></svg>,
  },
  {
    name: 'MedTech & Device Companies',
    tagline: 'IEC 62304-compliant software for medical devices, wearables, and diagnostic tools.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' /></svg>,
  },
  {
    name: 'Health Insurers & Revenue Cycle',
    tagline: 'Claims processing, pre-authorisation management, and denial reduction automation.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Custom EHR/EMR Development', desc: 'Electronic health record systems built around your clinical speciality and workflow, not a generic template.', href: '/services/custom-software-development' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Telemedicine Platforms', desc: 'HIPAA-compliant video consultation platforms with digital consent, e-prescribing, and EHR sync.', href: '/services/custom-software-development' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Mobile Health Apps', desc: 'Patient-facing iOS and Android apps for appointment booking, results, messaging, and remote monitoring.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Healthcare MVP Development', desc: 'HIPAA-compliant digital health MVPs built in 12–16 weeks — enough to raise funding or pilot with a health system.', href: '/build/an-mvp' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based healthcare software engineers embedded into your product team — with clinical domain experience.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'HL7/FHIR Integration', desc: 'Middleware and integration layers connecting your platform to EHRs, lab systems, and national health records.', href: '/services/custom-software-development' },
];

export const faqs: FAQ[] = [
  {
    question: 'Do you build HIPAA-compliant healthcare software?',
    answer:
      'Yes. HIPAA compliance is an architecture decision, not a feature added at the end. We design systems with PHI encryption at rest and in transit, role-based access controls, comprehensive audit logs, automatic session timeouts, and Business Associate Agreement-eligible infrastructure on AWS. We can provide a BAA as part of your compliance documentation.',
  },
  {
    question: 'Can you integrate with existing EHR systems like Epic, Cerner, or Meditech?',
    answer:
      'Yes. We build HL7 v2 and FHIR R4 integrations with major EHR platforms — receiving ADT feeds, results, and clinical documents, and writing back structured data. Integration scope and the specific HL7 message types or FHIR resources required are assessed during discovery. We also build standalone middleware layers when a direct integration is not available.',
  },
  {
    question: 'Can you build a telemedicine platform?',
    answer:
      'Yes. We build HIPAA-compliant video consultation platforms with appointment booking, virtual waiting rooms, secure clinician-patient messaging, digital consent capture, and post-consultation note generation synced to the clinical record. We use WebRTC-based video infrastructure (Daily.co, Twilio Video) that meets HIPAA BAA requirements.',
  },
  {
    question: 'Can you build a digital health MVP for a fundraise?',
    answer:
      'Yes. We build HIPAA-compliant digital health MVPs in 12–16 weeks — covering the core clinical or patient-facing workflow, compliance architecture, and enough live functionality to demonstrate to health system partners or investors. We scope what is essential for the MVP vs what follows in v2 so you are not over-engineering before product-market fit.',
  },
  {
    question: 'How do you handle clinical data security?',
    answer:
      'Security is an architecture decision from sprint one. We implement encryption at rest (AES-256) and in transit (TLS 1.3), role-based access control with least-privilege principles, comprehensive audit trails on every PHI access and modification, network segmentation, and penetration testing before launch. For UK providers, we align with the NHS Data Security and Protection Toolkit.',
  },
  {
    question: 'How much does a custom healthcare software platform cost to build?',
    answer:
      'A focused build — such as a patient portal, a telemedicine module, or a medical billing system — starts from $35,000–$60,000. A full custom EHR or clinical workflow platform ranges from $100,000 to $250,000. Enterprise health systems with complex integrations and multi-site deployments start above $250,000. We provide a fixed-price estimate after a free scoping call.',
  },
];
