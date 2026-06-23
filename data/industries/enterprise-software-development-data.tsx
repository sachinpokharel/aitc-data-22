import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '$752B', label: 'Global enterprise software market by 2030' },
  { value: '75%', label: 'IT budgets spent maintaining legacy systems' },
  { value: '40%', label: 'Productivity gain from workflow automation' },
  { value: '70%', label: 'Cost savings vs in-house engineers' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Enterprises running 900+ disconnected applications', value: '64%', status: 'warning' },
  { label: 'IT budgets consumed by legacy system maintenance', value: '75%', status: 'warning' },
  { label: 'Productivity gain from automated approval workflows', value: '40%', status: 'good' },
  { label: 'Cost reduction with purpose-built vs SaaS licensing', value: '60%', status: 'info' },
];

export const heroData: IndustryHeroData = {
  badge: 'Industry · Enterprise Software',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Software Development for ' },
    { text: 'Enterprise Organisations', highlight: true },
  ],
  description:
    'From custom ERP systems and CRM platforms to business intelligence dashboards, workflow automation, and legacy modernisation — we build enterprise software that replaces fragmented SaaS stacks, eliminates manual processes, and gives your teams systems that actually match how your business operates.',
  primaryCTA: { label: 'Discuss your project →', href: '/request-a-quote' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['ISO 27001-aligned builds', 'SSO & RBAC included', 'Free scoping call'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: '70% cost savings' }, { text: 'Nepal-based engineers', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Enterprise-grade security' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
    iconLabel: 'Enterprise reality',
    iconSubtitle: 'What enterprise teams are dealing with today',
    items: heroMetrics,
    note: 'Purpose-built enterprise software eliminates the SaaS sprawl, automates manual approvals, and gives every department a single source of truth.',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Large Enterprises & Corporations',
    desc: 'Established organisations with complex operational workflows, multi-department data needs, and integration requirements that off-the-shelf ERP or CRM platforms can no longer serve — who need software built around their processes rather than adapting their processes to fit the software.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    title: 'Mid-Market Companies Scaling Fast',
    desc: 'Growing companies that have outgrown spreadsheets and entry-level SaaS tools — who need enterprise-grade systems built to their current size with headroom to scale, without paying for enterprise software licences sized for a Fortune 500.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation Teams',
    desc: 'Internal IT and transformation leads tasked with replacing legacy systems, consolidating SaaS sprawl, and modernising core business platforms — who need an engineering partner that understands enterprise integration complexity and delivers on time.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' />
      </svg>
    ),
  },
  {
    title: 'Software ISVs & Product Companies',
    desc: 'Independent software vendors building enterprise-facing SaaS products who need a reliable offshore engineering team to accelerate feature development, maintain existing platforms, or build new product lines without expanding their headcount.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Legacy systems costing six figures annually in maintenance while blocking every new integration',
    solution: 'We modernise legacy platforms incrementally — strangler-fig migrations that replace core modules while keeping the business running. Modern APIs, cloud-native infrastructure, and a clean data model replace the brittle architecture, without a high-risk big-bang rewrite.',
  },
  {
    problem: 'Manual approval workflows creating multi-day bottlenecks across procurement, HR, and finance',
    solution: 'We build workflow automation platforms with configurable approval chains, role-based routing, SLA timers, and audit trails — cutting a 5-day approval cycle to same-day without changing the underlying approval policy.',
  },
  {
    problem: 'Data locked in 10+ disconnected systems with no single source of truth for reporting',
    solution: 'We build integration middleware and data pipelines that connect CRM, ERP, finance, and operations systems into a unified data layer — giving your BI dashboards and executive reports a single accurate source instead of twelve conflicting spreadsheets.',
  },
  {
    problem: 'Off-the-shelf ERP implementation failing after 18 months of customisation and $2M in consulting fees',
    solution: 'We scope and build purpose-built ERP modules for the workflows that matter to your business — procurement, inventory, project costing, or financial consolidation — without the configuration overhead, vendor lock-in, or licencing costs of a full platform suite.',
  },
  {
    problem: 'SaaS licence costs compounding as headcount grows, with tools that still do not fit the workflow',
    solution: 'We build owned internal tools and platforms — once. No per-seat licence, no feature walls, and no adapting your workflow to fit the vendor\'s roadmap. The economics improve with scale, not worsen.',
  },
  {
    problem: 'Security and compliance requirements blocking cloud adoption or new vendor onboarding',
    solution: 'We build with enterprise security requirements as first-class architecture concerns — SSO via SAML 2.0/OIDC, RBAC at every layer, end-to-end audit logging, secrets management, and infrastructure that meets ISO 27001, SOC 2, and GDPR requirements before the first audit.',
  },
];

export const enterpriseProjectTabs: SolutionTab[] = [
  {
    label: 'Custom ERP Systems',
    desc: 'Purpose-built enterprise resource planning systems covering procurement, inventory management, financial consolidation, project costing, and operations — designed around your processes rather than forcing your business into a generic module structure.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' />
      </svg>
    ),
  },
  {
    label: 'CRM & Sales Platforms',
    desc: 'Custom CRM systems and sales workflow platforms built around your pipeline stages, territory structure, and deal process — with integrations to your marketing, billing, and support tools so your sales team works from one screen.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    label: 'Business Intelligence & Analytics',
    desc: 'Executive dashboards, operational reporting, and self-service BI platforms that connect to every system your business runs — giving leadership real-time visibility and giving operational teams the data to act without waiting for a weekly report.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    label: 'Workflow Automation Platforms',
    desc: 'Internal platforms that automate multi-step approval workflows, document routing, task assignment, and cross-department handoffs — with configurable rules, SLA monitoring, escalation logic, and audit trails for every decision.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' />
      </svg>
    ),
  },
  {
    label: 'Legacy System Modernisation',
    desc: 'Incremental replacement of legacy monoliths, on-premise applications, and end-of-life platforms — using strangler-fig migration patterns that modernise the architecture without a high-risk big-bang rewrite or business disruption.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' />
      </svg>
    ),
  },
  {
    label: 'Enterprise API & System Integration',
    desc: 'Integration middleware, event-driven pipelines, and API gateways that connect SAP, Salesforce, Oracle, NetSuite, and custom internal systems — eliminating manual data re-entry and giving every application a real-time view of the data it needs.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Enterprise Discovery & Requirements',
    desc: 'We map your existing systems, data flows, integration points, and the business processes that will move into the new platform. Stakeholder interviews across IT, operations, and leadership are part of this phase — not an afterthought. We produce a requirements document and integration inventory before a single line is written.',
  },
  {
    timing: 'Week 3–4',
    title: 'Architecture Design & Integration Mapping',
    desc: 'System architecture, data model, API contracts, and security design finalised before development starts. Integration patterns for every connected system — ERP, CRM, identity provider, data warehouse — defined and reviewed with your technical team. Scalability and disaster recovery requirements built in from the design phase.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Agile Module Development',
    desc: 'Core modules built in two-week sprints with working software demonstrated at the end of each cycle. Integration testing with connected systems runs alongside feature development — not saved for the final sprint. Security controls, audit logging, and RBAC are implemented from sprint one, not retrofitted before launch.',
  },
  {
    timing: 'Final 3–6 weeks',
    title: 'UAT, Security Hardening & Go-Live',
    desc: 'User acceptance testing with real business scenarios, penetration testing, load testing against peak transaction volumes, and phased cutover planning. Parallel running alongside legacy systems where needed to minimise operational risk. Hypercare support for the first 30 days post go-live.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'ISO 27001 Information Security',
    desc: 'Systems designed with an ISO 27001-aligned security architecture — risk-based access controls, asset classification, incident response procedures, and the documentation trail your auditors require. We build to the standard, not around it.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'SOC 2 Type II Readiness',
    desc: 'Audit logging, access controls, change management, and availability monitoring built in from the first sprint — so your platform is SOC 2 Type II ready when your enterprise customers ask for the report, not when you start scrambling to produce one.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'GDPR & Data Privacy',
    desc: 'Data minimisation, consent management, right-to-erasure workflows, and cross-border data transfer controls built into the platform data model — so your enterprise software meets GDPR obligations without a legal retrofit before go-live.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    title: 'Enterprise SSO & Identity',
    desc: 'SAML 2.0 and OIDC integration with your corporate identity provider — Azure AD, Okta, Google Workspace, or any standards-compliant IdP. RBAC with least-privilege defaults, MFA enforcement, and session management that satisfies IT security policy.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z' />
      </svg>
    ),
  },
  {
    title: 'API Security & Zero Trust',
    desc: 'API gateway security, OAuth 2.0 token management, rate limiting, input validation, and zero-trust network architecture for internal and external integrations — so every service-to-service call is authenticated, authorised, and audited.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
  {
    title: 'Cloud Security & Infrastructure Compliance',
    desc: 'AWS, Azure, and GCP deployments configured with security-first infrastructure-as-code — encrypted storage, VPC isolation, secrets management via Vault or cloud-native services, and automated compliance checks aligned with CIS benchmarks.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
];

export const enterpriseSectors: IndustrySector[] = [
  {
    name: 'Financial Services & Banking',
    tagline: 'Core banking tools, risk dashboards, compliance reporting, and back-office automation for financial institutions.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' /></svg>,
  },
  {
    name: 'Manufacturing & Supply Chain',
    tagline: 'Production planning, inventory management, supplier portals, and shop-floor reporting systems.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' /></svg>,
  },
  {
    name: 'Professional Services & Consulting',
    tagline: 'Project management portals, utilisation tracking, billing automation, and knowledge management platforms.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>,
  },
  {
    name: 'Retail & Distribution',
    tagline: 'Omnichannel order management, warehouse systems, replenishment automation, and vendor portals.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /></svg>,
  },
  {
    name: 'Government & Public Sector',
    tagline: 'Citizen-facing portals, case management systems, procurement platforms, and regulatory reporting tools.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-rose-500', iconBg: 'bg-rose-500/15',
    icon: <svg className='size-5 text-rose-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' /></svg>,
  },
  {
    name: 'Energy & Utilities',
    tagline: 'Asset management, field workforce platforms, billing systems, and regulatory compliance reporting.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Custom ERP Development', desc: 'Purpose-built ERP modules for procurement, inventory, finance, and operations — without the licence cost or configuration overhead.', href: '/services/custom-software-development' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'CRM & Sales Platform Development', desc: 'Custom CRM systems built around your sales process, pipeline stages, and customer data model — integrated with your existing stack.', href: '/services/custom-software-development' },
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Business Intelligence & Analytics', desc: 'Executive dashboards and self-service reporting platforms connected to every system your business runs.', href: '/services/custom-software-development' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Enterprise Mobile Apps', desc: 'iOS and Android applications for field teams, managers, and customers — integrated with your enterprise systems in real time.', href: '/services/mobile-app-development' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Dedicated Engineering Teams', desc: 'Nepal-based enterprise software engineers embedded into your product or IT team — with architecture and integration experience.', href: '/services/dedicated-development-team' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Legacy System Modernisation', desc: 'Incremental migration from legacy monoliths and on-premise platforms to modern, cloud-native architecture — without the big-bang rewrite risk.', href: '/services/custom-software-development' },
];

export const faqs: FAQ[] = [
  {
    question: 'What types of enterprise software do you build?',
    answer:
      'We build custom ERP systems, CRM platforms, business intelligence and analytics dashboards, workflow automation tools, internal operations platforms, API integration middleware, and enterprise mobile applications. We also modernise legacy systems — replacing end-of-life platforms incrementally without disrupting live operations. If the problem is a business process that software cannot currently serve well, we can build a purpose-fit solution for it.',
  },
  {
    question: 'Can you integrate with our existing systems — SAP, Salesforce, Oracle, or NetSuite?',
    answer:
      'Yes. Enterprise system integration is a core part of what we do. We build API middleware and data pipelines that connect to SAP via RFC/IDoc/OData, Salesforce via REST and streaming APIs, Oracle via JDBC and REST, and NetSuite via SuiteTalk. Integration scope and API capabilities are assessed during discovery. For systems with limited API surface areas, we use event-driven integration patterns and ETL pipelines to synchronise data without real-time API dependency.',
  },
  {
    question: 'How do you handle enterprise security requirements?',
    answer:
      'Security is a first-class architecture concern from the first sprint — not a hardening pass before go-live. We implement SAML 2.0 or OIDC SSO with your identity provider (Azure AD, Okta, Google Workspace), RBAC with least-privilege defaults, end-to-end encryption at rest and in transit, comprehensive audit logging for every data access and modification, secrets management, and infrastructure-as-code that aligns with CIS benchmarks. We also conduct penetration testing before production deployments.',
  },
  {
    question: 'Can you modernise our legacy system without disrupting live operations?',
    answer:
      'Yes. We use strangler-fig migration patterns to replace legacy platforms incrementally. The new system runs in parallel with the legacy platform — individual modules or workflows migrate one at a time as they are ready, while the business continues to operate on the existing system. This eliminates the big-bang rewrite risk where everything must work perfectly on day one. Full cutovers happen gradually, with rollback options at each stage.',
  },
  {
    question: 'How long does enterprise software development take?',
    answer:
      'A focused enterprise tool — such as a workflow automation platform, an internal CRM, or a BI dashboard suite — typically takes 12–20 weeks from discovery to production. A full custom ERP or multi-system integration platform ranges from 6–18 months depending on scope and the number of integration points. We provide a timeline estimate after a free scoping call, and we structure delivery in working releases — not a single go-live at the end of a long project.',
  },
  {
    question: 'How much does custom enterprise software development cost?',
    answer:
      'A focused internal tool or workflow automation platform starts from $40,000–$80,000. A full custom ERP module suite or CRM platform ranges from $150,000 to $400,000. Multi-system integration platforms and large-scale legacy modernisation programmes start above $400,000 and are scoped on a project basis. We provide a fixed-price estimate after a free discovery call, and we can structure delivery in funded phases if that fits your budget cycle better.',
  },
];
