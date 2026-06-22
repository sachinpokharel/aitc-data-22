import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '10+', label: 'HMS modules available' },
  { value: '10–36', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$30K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Healthcare Management System Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build a Healthcare Platform ' }, { text: 'That Puts Patients First', highlight: true }],
  description:
    'Off-the-shelf EMR software charges per seat, locks you into their workflows, and never quite fits your clinical model. We build custom healthcare management systems — EHR, appointments, billing, telehealth, and patient portals — designed around how your practice or health system actually operates, with HIPAA and data sovereignty built in from day one.',
  primaryCTA: { label: 'Get HMS Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'HIPAA & GDPR-ready architecture', 'Free scoping call'],
  form: {
    preselectedService: 'Healthcare Management System Development',
    formName: 'hero-hms',
    informationPlaceholder:
      'Tell us about your healthcare setting — clinic, hospital, or telehealth — how many practitioners, what your current system is missing, and any compliance requirements...',
  },
};

export const whenCards = [
  {
    title: 'Your EMR was built for billing, not clinical workflow',
    points: [
      'Most off-the-shelf EMRs optimise for insurance coding and claims, forcing clinicians to adapt their documentation to the software rather than the other way around',
      'A custom HMS models your clinical workflows first — from consultation notes to care plans — with billing as a downstream output, not the primary constraint',
    ],
  },
  {
    title: 'Per-seat SaaS costs scale faster than your headcount',
    points: [
      'At scale, per-seat pricing on commercial EMR platforms can cost more annually than building and owning a custom system outright',
      'A custom platform is a capital investment with predictable operating costs — no per-user fees, no module upgrades you have to pay for separately',
    ],
  },
  {
    title: 'You need telehealth and in-person workflows in one system',
    points: [
      'Running telehealth on a separate video tool, in-person on your EMR, and billing in a third system creates gaps in patient records and doubles admin time',
      'We build hybrid systems where telehealth, in-person, and home visits all feed the same patient record, billing engine, and practitioner schedule',
    ],
  },
  {
    title: 'Patient data is scattered across departments or locations',
    points: [
      'Multi-site practices often run siloed systems where patient records, referrals, and test results don\'t follow the patient across locations',
      'A centralised HMS with role-based access lets any authorised clinician see the full patient history, regardless of which site they are at',
    ],
  },
  {
    title: 'Insurance claims and prior authorisations are a manual bottleneck',
    points: [
      'Manual claims submission, chasing prior authorisations by phone, and reconciling rejections in spreadsheets consumes hours of admin time weekly',
      'We build claims automation with eligibility checking, prior authorisation workflows, and rejection reason tracking — reducing days in AR and write-offs',
    ],
  },
  {
    title: 'You are building a digital health product, not just automating a clinic',
    points: [
      'Telehealth startups, chronic disease management platforms, and digital therapeutics companies need custom infrastructure — not a generic EMR',
      'We build the full product stack: patient app, clinical dashboard, API layer, device integrations, and the compliance framework your investors and regulators expect',
    ],
  },
];

export const hmsModuleTabs: SolutionTab[] = [
  {
    label: 'Patient Management & EHR',
    desc: 'Centralised patient records with full clinical history, consultation notes, diagnoses, allergies, medications, lab results, and imaging. SOAP note templates, custom form builders, and structured data capture that feeds downstream reporting and billing automatically.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    label: 'Appointment Scheduling & Telehealth',
    desc: 'Online self-booking for patients with practitioner availability, appointment type, and location selection. Automated SMS and email reminders, waitlist management, and recurring appointment scheduling. Built-in telehealth with video consultation, screen sharing, and session notes — all linked to the patient record.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V9zm0 3.75h.008v.008H12v-.008zm0 3.75h.008v.008H12v-.008zM9.75 9.75h.008v.008H9.75V9.75zm0 3.75h.008v.008H9.75v-.008zm0 3.75h.008v.008H9.75v-.008zm4.5-7.5h.008v.008h-.008V9.75zm0 3.75h.008v.008h-.008v-.008zm0 3.75h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    label: 'Billing & Insurance Claims',
    desc: 'Fee-for-service and insurance billing in one workflow — eligibility verification, claim generation, prior authorisation tracking, and ERA remittance posting. Real-time claim status, rejection management with reason codes, and patient payment plans via Stripe or direct debit.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z' />
      </svg>
    ),
  },
  {
    label: 'Clinical Workflow & Care Plans',
    desc: 'Structured care plan templates for chronic disease management, post-operative recovery, and preventive care programs. Task assignments to multidisciplinary team members, automated follow-up triggers based on clinical milestones, and patient-facing care plan access via the patient portal.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' />
      </svg>
    ),
  },
  {
    label: 'Pharmacy & Prescriptions',
    desc: 'E-prescribing with drug interaction checking, formulary management, and direct transmission to pharmacy systems. Medication tracking on patient records, repeat prescription request workflows, and controlled substance audit trails.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' />
      </svg>
    ),
  },
  {
    label: 'Patient Portal & Analytics',
    desc: 'Secure patient portal for booking, viewing results, downloading documents, messaging their care team, and paying invoices — reducing inbound call volume significantly. Clinical and operational dashboards covering patient outcomes, appointment utilisation, revenue cycle metrics, and practitioner productivity.',
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
    title: 'Clinical & Compliance Discovery',
    desc: 'We map your clinical workflows, patient journey, practitioner roles, billing model, and compliance requirements — HIPAA, GDPR, or local health data regulations — before any design begins.',
  },
  {
    timing: 'Week 3–4',
    title: 'UX Design & Data Architecture',
    desc: 'Practitioner dashboard, patient portal, appointment flow, and billing screens designed and validated with your clinical staff. Patient data model and HL7/FHIR integration architecture defined.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'EHR, scheduling, and billing modules built in two-week sprints with your clinical team testing real patient workflows at each cycle — using anonymised or test patient data from week one.',
  },
  {
    timing: 'Final 2–4 weeks',
    title: 'Data Migration, QA & Go-Live',
    desc: 'Existing patient records migrated from your legacy system. Security penetration testing, clinical workflow QA, and compliance review completed — then a phased rollout starting with one department or location.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'HMS Starter',
    price: '$30K – $60K',
    topBadge: '10–16 weeks',
    desc: 'Core clinic management for small to mid-size practices — patient records, appointment scheduling, basic billing, and a patient portal without per-seat SaaS fees.',
    features: [
      'Patient records & consultation notes',
      'Online appointment scheduling',
      'SMS & email appointment reminders',
      'Basic invoicing & payment collection',
      'Patient portal (booking, results, messaging)',
      'Practitioner calendar management',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full HMS Platform',
    price: '$60K – $120K',
    topBadge: '16–28 weeks',
    desc: 'A complete healthcare management platform with EHR, telehealth, insurance billing, care plans, e-prescribing, and a full patient portal.',
    features: [
      'Everything in Starter',
      'Full EHR with structured clinical data',
      'Integrated telehealth with video',
      'Insurance claims & prior authorisation',
      'Care plans & chronic disease management',
      'E-prescribing with drug interaction checks',
      'Lab & imaging result management',
      'Compliance-ready security & audit logs',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Enterprise Health System',
    price: '$120K+',
    topBadge: '24–36 weeks',
    desc: 'Multi-site hospital or health network platform with HL7/FHIR integrations, advanced analytics, patient flow management, and digital health product infrastructure.',
    features: [
      'Everything in Full Platform',
      'Multi-site & multi-department management',
      'HL7 & FHIR integration layer',
      'Advanced clinical analytics & dashboards',
      'Patient flow & bed management',
      'Vendor & procurement management',
      'API platform for device integrations',
      'Dedicated post-launch support & SLA',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const hmsIndustrySectors: IndustrySector[] = [
  {
    name: 'Private Clinics & GP Practices',
    tagline: 'Replace per-seat EMR fees with a system you own.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    name: 'Hospitals & Health Systems',
    tagline: 'Multi-department platforms with HL7/FHIR and patient flow.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    name: 'Telehealth & Digital Health Startups',
    tagline: 'Build your telehealth product with compliance from the start.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
      </svg>
    ),
  },
  {
    name: 'Mental Health Platforms',
    tagline: 'Therapy scheduling, notes, and outcome tracking with privacy first.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    name: 'Dental & Specialist Clinics',
    tagline: 'Specialty-specific charting, imaging, and treatment plans.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-pink-500',
    iconBg: 'bg-pink-500/15',
    icon: (
      <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' />
      </svg>
    ),
  },
  {
    name: 'Allied Health & Physiotherapy',
    tagline: 'Treatment plans, exercise programs, and progress tracking.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' />
      </svg>
    ),
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'AI Chatbot Development',
    desc: 'AI patient assistant for symptom triage, appointment booking, and FAQ handling — reducing front-desk call volume.',
    href: '/build/build-an-ai-chatbot',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Booking Platform Development',
    desc: 'Patient-facing online booking with practitioner availability, service type, and location selection.',
    href: '/build/build-a-booking-platform',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Custom CRM Development',
    desc: 'Patient relationship management for outreach, recall campaigns, and chronic disease follow-up programs.',
    href: '/build/build-an-custom-crm',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'HRMS Development',
    desc: 'Staff scheduling, credentialing, payroll, and compliance management for clinical teams.',
    href: '/build/build-an-hrms',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Mobile App Development',
    desc: 'Native iOS and Android patient apps for appointments, results, messaging, and medication reminders.',
    href: '/services/mobile-app-development',
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'Custom ERP Development',
    desc: 'Connect your clinical platform to finance, procurement, HR, and inventory across your health network.',
    href: '/build/erp-system',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How much does a custom healthcare management system cost?',
    answer:
      'A starter HMS with patient records, appointment scheduling, and basic billing begins from $30,000. A full platform covering EHR, telehealth, insurance claims, e-prescribing, and a patient portal ranges from $60,000 to $120,000. Enterprise health system platforms start above $120,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom HMS?',
    answer:
      'A starter HMS takes 10–16 weeks. A full platform takes 16–28 weeks. Enterprise and multi-site systems take 24–36 weeks. Timelines depend on the number of modules, HL7/FHIR integration requirements, and data migration complexity.',
  },
  {
    question: 'Is your system HIPAA and GDPR compliant?',
    answer:
      'We build compliance-ready architecture from the start — encrypted data at rest and in transit, role-based access control, comprehensive audit logs, BAA-ready infrastructure, and data residency options. We work with your compliance or legal team to ensure the system meets your specific regulatory requirements, whether that is HIPAA, GDPR, the Australian Privacy Act, or local health data regulations.',
  },
  {
    question: 'Can you migrate our existing patient data from our current EMR?',
    answer:
      'Yes. We handle data migration from most EMR and practice management platforms — extracting patient demographics, clinical notes, appointment history, billing records, and documents. Migration scope and data cleaning requirements are assessed during the scoping phase, and all migration is done with strict data handling protocols.',
  },
  {
    question: 'Can you integrate with lab systems, imaging, and other health IT?',
    answer:
      'Yes. We build HL7 and FHIR integration layers that connect your HMS to pathology labs, radiology systems, pharmacy networks, and health information exchanges. We scope which integrations are required during discovery and build them as part of the core platform.',
  },
  {
    question: 'Can patients book appointments and pay online through the system?',
    answer:
      'Yes. We build a patient portal where patients can self-book appointments based on real practitioner availability, receive automated reminders, view test results, message their care team, download documents, and pay invoices via Stripe or direct debit — all without needing to call the front desk.',
  },
  {
    question: 'Can you build telehealth into the same system as our in-person workflows?',
    answer:
      'Yes. We build hybrid systems where telehealth video consultations, in-person appointments, and home visits all use the same scheduling engine, patient record, and billing workflow — so practitioners have one system regardless of how they see the patient.',
  },
  {
    question: 'Do you sign NDAs and BAAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. For healthcare clients, we also sign a Business Associate Agreement (BAA) as required under HIPAA before any patient data is shared with us. Patient data is handled with strict confidentiality throughout the project.',
  },
];
