import { type Metadata } from 'next';
import Link from 'next/link';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import InlineInquiryForm from '@/components/pages/static-components/InlineInquiryForm';
import Solutions, { type SolutionTab } from '@/components/pages/static-components/solution';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWith from '@/components/pages/static-components/Wehelpwith';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Tailored Solutions | AITC',
  description:
    'Custom software development services — web applications, enterprise platforms, API integrations, and cloud-native solutions built around your unique business workflows. Book a free consultation.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/custom-software-development`,
  },
  openGraph: {
    title: 'Custom Software Development Services | Tailored Solutions | AITC',
    description:
      'End-to-end software built around your workflows, users, and goals — from architecture to launch and beyond. Get a free project estimate today.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/custom-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const customSolutionTabs: SolutionTab[] = [
  {
    label: 'Custom Web Application Development',
    desc: 'We design and build web applications tailored to your specific business processes — from internal tools and portals to customer-facing platforms and data dashboards built for real users.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3'
        />
      </svg>
    ),
  },
  {
    label: 'Enterprise Software Development',
    desc: 'Build large-scale software platforms that handle complex workflows, multiple user roles, deep integrations, and high transaction volumes — designed for reliability, security, and long-term growth.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
    label: 'API & System Integration',
    desc: 'Connect disparate tools, platforms, and data sources into a unified ecosystem. We build robust APIs and middleware layers that allow your software to communicate and share data seamlessly.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
        />
      </svg>
    ),
  },
  {
    label: 'Legacy System Modernization',
    desc: 'Migrate outdated software to modern, maintainable architectures without disrupting operations. We re-platform, refactor, or rebuild legacy systems to support new features, integrations, and scale.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
        />
      </svg>
    ),
  },
  {
    label: 'Cloud-Native Application Development',
    desc: 'Design and build scalable, resilient software on cloud platforms like AWS, Azure, and GCP. We architect applications for performance, availability, and cost efficiency from day one.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'
        />
      </svg>
    ),
  },
  {
    label: 'Mobile Application Development',
    desc: 'Create native iOS, Android, and cross-platform mobile apps that extend your software ecosystem to users on the go — with offline support, push notifications, and seamless backend integration.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
        />
      </svg>
    ),
  },
];

const whyCustomSoftware = [
  {
    title: 'Built Around Your Workflows',
    desc: 'Off-the-shelf tools force your team to adapt to generic processes. Custom software is engineered to match your exact workflows, user roles, and data structures — removing friction and boosting productivity from day one.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Scale Without Limits',
    desc: 'Custom software grows with your business. You control the architecture, data model, and feature set — meaning you can add users, modules, or integrations as your needs evolve without being constrained by vendor roadmaps or pricing tiers.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Competitive Differentiation',
    desc: 'Proprietary software becomes a business asset that competitors cannot replicate. Custom-built solutions enable unique features, experiences, and automation that set your business apart and create durable advantages in your market.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.175-1.125-1.175h-.375a1.125 1.125 0 01-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h.375c.621 0 1.125-.504 1.125-1.125V6.375M6 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.375c.621 0 1.125-.504 1.125-1.125v-1.5A1.125 1.125 0 007.5 11.25H7.125C6.504 11.25 6 10.746 6 10.125V6.375m10.5 0A2.625 2.625 0 0014.25 3.75h-4.5A2.625 2.625 0 007.125 6.375m10.5 0v.75c0 .621-.504 1.125-1.125 1.125h-9A1.125 1.125 0 016.75 7.125v-.75' />
      </svg>
    ),
  },
  {
    title: 'Reduce Long-Term Costs',
    desc: 'While custom development has an upfront investment, it eliminates recurring SaaS licensing fees, workaround tooling costs, and the ongoing productivity drag of software that doesn&apos;t fit. ROI improves significantly over time.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Full Ownership & Control',
    desc: 'You own every line of code, the database schema, and all intellectual property. There are no vendor lock-ins, no feature limitations, and no risk of a third-party shutting down a service your business depends on.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Requirements',
    desc: 'We run structured workshops to understand your business goals, user needs, technical constraints, and existing systems before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Solution Architecture',
    desc: 'Our architects define the technology stack, database design, system components, and integration points to ensure a scalable, maintainable foundation.',
  },
  {
    step: '03',
    title: 'UI/UX Design',
    desc: 'We design intuitive user interfaces and workflows informed by user research and business logic — validated with prototypes before development starts.',
  },
  {
    step: '04',
    title: 'Agile Development',
    desc: 'Development runs in 2-week sprints with regular demos, feedback cycles, and transparent progress reporting so you stay in control throughout.',
  },
  {
    step: '05',
    title: 'Quality Assurance & Testing',
    desc: 'We run functional, integration, performance, and security testing across every release to ensure your software works reliably under real-world conditions.',
  },
  {
    step: '06',
    title: 'Deployment & Go-Live',
    desc: 'We manage production deployment, environment configuration, database migrations, and go-live support to ensure a smooth, zero-disruption launch.',
  },
  {
    step: '07',
    title: 'Maintenance & Continuous Improvement',
    desc: 'After launch we provide monitoring, bug fixes, performance optimization, and feature enhancements as your business needs and user base evolve.',
  },
];

const industries = [
  {
    title: 'Healthcare & MedTech',
    desc: 'Custom patient management systems, clinical workflow tools, telemedicine platforms, and HIPAA-compliant healthcare software.',
    href: '/industries/healthcare-software-development',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'FinTech & Banking',
    desc: 'Secure financial platforms, payment processing tools, portfolio management systems, and compliance-ready banking software.',
    href: '/industries/fintech-software-development',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />
      </svg>
    ),
  },
  {
    title: 'E-commerce & Retail',
    desc: 'Custom storefronts, order management systems, inventory platforms, and B2B commerce solutions tailored to your business model.',
    href: '/industries/ecommerce-software-development',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Real Estate & PropTech',
    desc: 'Property listing platforms, CRM tools, lease management systems, and document automation solutions for real estate businesses.',
    href: '/industries/real-estate-software-development',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    title: 'Education & E-Learning',
    desc: 'LMS platforms, student portals, assessment tools, virtual classroom software, and custom course delivery systems.',
    href: '/industries/education-software-development',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Fleet tracking platforms, warehouse management systems, shipment visibility tools, and supplier portal software.',
    href: '/industries/logistics-software-development',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'Manufacturing & Operations',
    desc: 'Production scheduling tools, quality management systems, ERP integrations, and operational dashboards for manufacturing businesses.',
    href: '/industries/enterprise-software-development',
    color: 'bg-slate-50',
    iconColor: 'text-slate-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    title: 'HR & Professional Services',
    desc: 'Recruitment platforms, employee portals, time & attendance systems, and custom HR software built around your people processes.',
    href: '/industries/hr-software-development',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
];

const whyAitc = [
  {
    title: 'Business-First Engineering',
    desc: 'We start with your business goals, not technology choices. Every architecture decision, feature, and design choice is evaluated against the outcome it needs to drive — not just technical best practice.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' />
      </svg>
    ),
  },
  {
    title: 'Full-Cycle Development Team',
    desc: 'From product strategy and UX design to backend engineering and QA — work with a complete team of specialists under a single point of contact, without coordinating multiple vendors.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
      </svg>
    ),
  },
  {
    title: 'Agile & Transparent Process',
    desc: 'Regular sprint demos, shared project dashboards, and weekly updates keep you fully informed and in control. No surprises — just steady, verifiable progress toward your launch date.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    title: 'Secure by Design',
    desc: 'Security is built into every layer — from data encryption and role-based access controls to vulnerability testing and secure deployment practices. We follow ISO 27001-aligned development standards.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Seamless System Integration',
    desc: 'We connect your new software with existing ERP, CRM, payment, and third-party systems through well-designed APIs and middleware — ensuring your tech stack works as a unified whole.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    title: 'Post-Launch Support & Growth',
    desc: 'Our engagement doesn&apos;t end at go-live. We provide structured maintenance, performance monitoring, and iterative feature development to keep your software aligned with your evolving business needs.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How long does custom software development take?',
    answer:
      'The timeline depends on scope, complexity, number of integrations, and team size. A focused internal tool or web application typically takes 8–16 weeks. A full enterprise platform with complex workflows and integrations can range from 20–40+ weeks. We provide a detailed timeline estimate after a free discovery call where we scope your requirements.',
  },
  {
    question: 'How much does custom software development cost?',
    answer:
      'The cost varies based on the features required, number of user roles, integrations, design complexity, and platform targets. A single-module web application typically starts from $20K–$50K. A full enterprise platform with multiple modules and integrations can range from $80K–$300K+. We provide a fixed-price estimate after an initial discovery and scoping session.',
  },
  {
    question: 'Do you work with both startups and enterprises?',
    answer:
      'Yes. We work across company sizes and stages — from early-stage startups building their first product to established enterprises modernizing legacy systems or adding new capabilities. We adapt our process, communication style, and engagement model to suit your team and project needs.',
  },
  {
    question: 'Will I own the source code and intellectual property?',
    answer:
      'Absolutely. You retain full ownership of all source code, databases, designs, and related intellectual property upon project completion. We sign IP assignment agreements as part of our standard engagement. We also sign NDAs before any project discussion to protect your confidential business information.',
  },
  {
    question: 'How do you ensure software quality?',
    answer:
      'We combine code reviews, automated testing (unit, integration, and end-to-end), manual QA testing, and performance testing across every development sprint. Before launch, we conduct full regression testing, security reviews, and user acceptance testing to ensure the software meets both functional requirements and real-world reliability standards.',
  },
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className='relative overflow-hidden bg-secondary'>
        <div className='pointer-events-none absolute -right-32 -top-32 size-[600px] rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-24 left-1/4 size-[400px] rounded-full bg-primary/5 blur-2xl' />
        <div
          className='pointer-events-none absolute inset-0 opacity-10'
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className='common-padding relative py-16 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              {/* Left — copy */}
              <div>
                <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm'>
                  <span className='size-1.5 animate-pulse rounded-full bg-primary' />
                  Custom Software Development Services
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]'>
                  Custom Software Built for{' '}
                  <span className='text-primary'>Your Exact Business Needs</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl'>
                  End-to-end software development tailored to your workflows, users, and goals — from architecture and
                  design through to launch and long-term support.
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Link
                    href='/book-a-free-consultation'
                    className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-opacity hover:opacity-90'
                  >
                    Book Free Consultation
                  </Link>
                  <Link
                    href='/request-a-quote'
                    className='rounded-md border-2 border-white/30 px-7 py-3.5 text-center font-medium text-white transition-colors hover:border-white hover:bg-white/10'
                  >
                    Get Project Estimate →
                  </Link>
                </div>
                <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70'>
                  <li><span className='text-primary'>✓</span> 300+ Projects Delivered</li>
                  <li><span className='text-primary'>✓</span> Full IP Ownership</li>
                  <li><span className='text-primary'>✓</span> Fixed-Price Available</li>
                  <li><span className='text-primary'>✓</span> ISO Certified</li>
                </ul>
              </div>

              {/* Right — project metrics card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/20'>
                        <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>Project Dashboard</p>
                        <p className='text-sm font-semibold text-white'>Live delivery metrics</p>
                      </div>
                    </div>
                    <div className='space-y-2.5'>
                      {[
                        { label: 'Sprints on Schedule', value: '24/25', change: '96%', up: true },
                        { label: 'Test Coverage', value: '92%', change: '+8%', up: true },
                        { label: 'Bug Resolution Time', value: '4 hrs', change: '-55%', up: true },
                        { label: 'On-Time Deployments', value: '97%', change: '+5%', up: true },
                      ].map((metric) => (
                        <div
                          key={metric.label}
                          className='flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2.5'
                        >
                          <span className='text-base text-white/70'>{metric.label}</span>
                          <div className='flex items-center gap-2'>
                            <span className='font-semibold text-white'>{metric.value}</span>
                            <span className='text-xs font-semibold text-green-400'>{metric.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5'>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-white'>98%</p>
                        <p className='text-xs text-white/50'>Client satisfaction</p>
                      </div>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-white'>10 yrs</p>
                        <p className='text-xs text-white/50'>Industry experience</p>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-primary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>NDA before discussion</p>
                    <p className='text-[10px] text-white/70'>Your IP stays protected</p>
                  </div>
                  <div className='absolute -right-4 -top-4 rounded-xl bg-white px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-secondary'>Free Scoping Call</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className='border-b border-gray-100 bg-white'>
        <div className='common-padding mx-auto max-w-screen-2xl py-10'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            {[
              { value: '300+', label: 'Software projects delivered' },
              { value: '98%', label: 'Client satisfaction rate' },
              { value: '10 yrs', label: 'Industry experience' },
              { value: '70%', label: 'Cost savings vs. local rates' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className='text-4xl font-bold text-secondary'>{stat.value}</p>
                <p className='mt-1 text-xs font-bold uppercase tracking-widest text-grey'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* ── SERVICES ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16'>
            <div className='lg:sticky lg:top-24 lg:w-80 lg:shrink-0'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we offer</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
                Custom Software Development Services Tailored to Your Business
              </h2>
              <p className='mt-4 text-base leading-relaxed text-grey'>
                From discovery and architecture to development, testing, and post-launch support — we cover the entire
                software delivery lifecycle under one roof.
              </p>
              <Link
                href='/book-a-free-consultation'
                className='mt-6 inline-flex items-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800'
              >
                Book Free Consultation →
              </Link>
            </div>
            <div className='grid flex-1 gap-5 sm:grid-cols-2'>
              {[
                {
                  num: '01',
                  title: 'Custom Web Application Development',
                  desc: 'Business-specific web apps — internal tools, customer portals, data platforms, and operational dashboards built to your exact requirements.',
                },
                {
                  num: '02',
                  title: 'Enterprise Software Development',
                  desc: 'Large-scale platforms designed for complex workflows, multi-role access, compliance requirements, and high transaction volumes.',
                },
                {
                  num: '03',
                  title: 'API Development & System Integration',
                  desc: 'Connect your software to third-party services, internal systems, and data sources with well-documented, reliable APIs and middleware.',
                },
                {
                  num: '04',
                  title: 'Legacy System Modernization',
                  desc: 'Migrate outdated systems to modern, maintainable architectures without business disruption — re-platforming, refactoring, or full rebuilds.',
                },
                {
                  num: '05',
                  title: 'Cloud-Native Application Development',
                  desc: 'Scalable, resilient applications built on AWS, Azure, or GCP — architected for performance, cost efficiency, and cloud-first deployment.',
                },
                {
                  num: '06',
                  title: 'Mobile Application Development',
                  desc: 'Native iOS, Android, and cross-platform mobile apps that extend your software to users on any device.',
                },
                {
                  num: '07',
                  title: 'SaaS Product Development',
                  desc: 'Build subscription-based software products with multi-tenancy, billing integrations, onboarding flows, and scalable cloud infrastructure.',
                },
              ].map((service) => (
                <div
                  key={service.num}
                  className='group rounded-xl border border-lightShade1 bg-white p-6 transition-shadow hover:shadow-md'
                >
                  <span className='font-mono text-xs font-bold text-primary'>{service.num}</span>
                  <h3 className='mt-2 text-base font-bold text-secondary'>{service.title}</h3>
                  <p className='mt-2 text-base leading-relaxed text-grey'>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CUSTOM SOFTWARE ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Businesses Choose Custom Software Over Off-the-Shelf
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Generic software forces your business to adapt to someone else&apos;s workflows. Custom software is built
            around how you actually work — and grows exactly as your business grows.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyCustomSoftware.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 1 ── */}
      <section className='bg-primary'>
        <div className='common-padding mx-auto max-w-screen-2xl py-14 md:py-16'>
          <div className='flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left'>
            <div className='max-w-2xl'>
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>Project Scoping</p>
              <h2 className='mt-2 text-2xl font-bold text-white md:text-3xl'>
                Let&apos;s discuss your software project and map out a clear plan to build exactly what your business
                needs.
              </h2>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'
            >
              Schedule a Free Discovery Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            How We Deliver Custom Software That Works in the Real World
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Our structured, iterative development process keeps you in control at every stage — from requirements through
            to a stable, tested production release.
          </p>
          <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {processSteps.slice(0, 4).map((step) => (
              <div key={step.step} className='relative rounded-xl border border-lightShade1 bg-lightShad2 p-7'>
                <div className='mb-3'>
                  <span className='flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white'>
                    {step.step}
                  </span>
                </div>
                <h3 className='text-base font-bold text-secondary'>{step.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className='mt-5 grid gap-5 md:grid-cols-3'>
            {processSteps.slice(4).map((step) => (
              <div key={step.step} className='relative rounded-xl border border-lightShade1 bg-lightShad2 p-7'>
                <div className='mb-3'>
                  <span className='flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white'>
                    {step.step}
                  </span>
                </div>
                <h3 className='text-base font-bold text-secondary'>{step.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS (TABBED) ── */}
      <Solutions
        badge='Our services'
        heading='End-to-End Custom Software Development Services'
        subheading='From web applications and enterprise platforms to integrations and mobile apps — we cover the full spectrum of custom software development from day one.'
        tabs={customSolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get a project estimate'
        ctaHref='/request-a-quote'
      />

      {/* ── TECHNOLOGIES ── */}
      <Technologies
        heading='Technologies We Use for Custom Software Development'
        subheading='We select the technology stack best suited to your project requirements — modern, well-supported frameworks that ensure long-term maintainability and performance.'
        items={[
          { name: 'React', icon: '/images/techstack/React.svg' },
          { name: 'Next.js', icon: '/images/techstack/Next.js.svg' },
          { name: 'Vue.js', icon: '/images/techstack/Vue.js.svg' },
          { name: 'Angular', icon: '/images/techstack/Angular.svg' },
          { name: 'Node.js', icon: '/images/techstack/Node.js.svg' },
          { name: 'Python', icon: '/images/techstack/Python.svg' },
          { name: 'Java', icon: '/images/techstack/Java.svg' },
          { name: '.NET', icon: '/images/techstack/NET.svg' },
          { name: 'PHP', icon: '/images/techstack/PHP.svg' },
          { name: 'Flutter', icon: '/images/techstack/Flutter.svg' },
          { name: 'Android', icon: '/images/techstack/android.svg' },
          { name: 'iOS', icon: '/images/techstack/ios.svg' },
          { name: 'PostgreSQL', icon: '/images/techstack/PostgresSQL.svg' },
          { name: 'MongoDB', icon: '/images/techstack/MongoDB.svg' },
          { name: 'MySQL', icon: '/images/techstack/MySQL.svg' },
          { name: 'Redis', icon: '/images/techstack/Redis.svg' },
          { name: 'AWS', icon: '/images/techstack/AWS.svg' },
          { name: 'Azure', icon: '/images/techstack/Azure.svg' },
          { name: 'GCP', icon: '/images/techstack/GCP.svg' },
          { name: 'Docker', icon: '/images/techstack/Docker.svg' },
          { name: 'Kubernetes', icon: '/images/techstack/Kubernetes.svg' },
          { name: 'Terraform', icon: '/images/techstack/Terraform.svg' },
          { name: 'Cypress', icon: '/images/techstack/Cypress.svg' },
          { name: 'Playwright', icon: '/images/techstack/Playwrite.svg' },
          { name: 'Postman', icon: '/images/techstack/Postman.svg' },
        ]}
      />

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-primary/5 blur-2xl' />
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Ready to build?</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              Turn Your Software Idea into a Production-Ready Solution
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Share your requirements and we&apos;ll provide a clear scope, timeline, and cost estimate — no commitment
              required.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link
                href='/request-a-quote'
                className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'
              >
                Discuss Your Software Project →
              </Link>
              <Link
                href='/book-a-free-consultation'
                className='w-full rounded-md border-2 border-secondary px-8 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white sm:w-auto'
              >
                Book a Free Call
              </Link>
            </div>
            <p className='mt-4 text-base text-grey'>No commitment · NDA on request · Reply within 24 hours</p>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Verticals we serve</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Custom Software Development Across Industries
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Every industry has distinct workflows, compliance requirements, and user expectations. We build software
            that reflects the realities of your specific market.
          </p>
          <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className={`rounded-xl border border-lightShade1 p-6 transition-shadow hover:shadow-md ${industry.color}`}
              >
                <div className={`mb-4 ${industry.iconColor}`}>{industry.icon}</div>
                <h3 className='text-base font-bold text-secondary'>{industry.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{industry.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AITC ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Why AITC</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Choose AITC for Custom Software Development
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Experienced engineers, transparent process, and full IP ownership — at 70% less than typical UK, US, or
            Australian development rates.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyAitc.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POST REVIEWS CTA ── */}
      <PostReviewsCTA
        badge='Custom Software Development'
        heading='Ready to Build Software That Works Exactly the Way Your Business Does?'
        description='From the first discovery call to post-launch support, our team delivers custom software built around your goals — on time, on budget, and ready for real users.'
        primaryLabel='Schedule a Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Get a Free Project Estimate'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description='Custom software is one part of a complete technology strategy. From AI-powered tools to SaaS platforms and dedicated engineering teams, our Nepal-based team covers every layer of your digital product — at 70% less than local rates.'
        theme='light'
        items={[
          {
            iconBg: 'bg-[#fff3e8]',
            iconColor: 'text-[#ff7500]',
            title: 'AI Software Development',
            desc: 'Add intelligent automation, machine learning, and generative AI features to your custom software.',
            href: '/service/ai-software-development',
          },
          {
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'SaaS Development',
            desc: 'Cloud-native subscription platforms with multi-tenancy, billing, and onboarding built in.',
            href: '/service/saas-development',
          },
          {
            iconBg: 'bg-[#f1eef8]',
            iconColor: 'text-[#3d2d72]',
            title: 'MVP Development',
            desc: 'Launch a validated minimum viable product to test your concept before the full build.',
            href: '/service/mvp-development',
          },
          {
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            title: 'Enterprise Software Development',
            desc: 'Large-scale platforms for complex workflows, compliance requirements, and high user volumes.',
            href: '/service/enterprise-software-development',
          },
          {
            iconBg: 'bg-teal-100',
            iconColor: 'text-teal-600',
            title: 'Dedicated Development Team',
            desc: 'Long-term engineers embedded into your product team for ongoing development and growth.',
            href: '/service/dedicated-development-team',
          },
          {
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600',
            title: 'Product Discovery Workshop',
            desc: 'Structured discovery process to define requirements, architecture, and delivery roadmap.',
            href: '/service/product-discovery-workshop',
          },
        ]}
      />

      {/* ── FINAL CTA + FORM ── */}
      <section className='relative overflow-hidden bg-secondary text-white'>
        <svg
          className='absolute inset-x-0 top-0 h-32 w-full opacity-20'
          viewBox='0 0 1440 128'
          fill='none'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path d='M0 100 L220 40 L400 90 L600 20 L800 85 L1000 35 L1200 90 L1440 55' stroke='#486581' strokeWidth='1' />
        </svg>
        <div className='common-padding relative mx-auto max-w-screen-2xl py-20 md:py-28'>
          <div className='grid items-start gap-10 lg:grid-cols-[2fr_3fr]'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Start your project</p>
              <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>
                Let&apos;s Scope Your Custom Software Project
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Share your requirements and we&apos;ll come back with a solution recommendation, timeline, and cost range
                — no obligation, no commitment.
              </p>
              <ul className='mt-8 space-y-3 text-white/75'>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> Free discovery call included
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> Fixed-price estimate available
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> NDA before any project discussion
                </li>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> Reply within 1 business day
                </li>
              </ul>
              <div className='mt-8 flex flex-wrap items-center gap-3'>
                {['ISO 9001', 'ISO 27001', 'GDPR Ready', 'AWS Partner'].map((badge) => (
                  <span
                    key={badge}
                    className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80'
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <InlineInquiryForm
              preselectedService='Custom Software Development'
              preselectedIndustry='Technology'
              formName='bofu-custom-software-development'
              heading='Get your project estimate'
              subheading="Tell us your requirements and we'll respond with a solution recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get Project Estimate' quoteHref='/request-a-quote' />
    </>
  );
}
