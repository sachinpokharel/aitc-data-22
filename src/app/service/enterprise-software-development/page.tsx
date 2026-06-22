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
  title: 'Enterprise Software Development Services | Custom Enterprise Solutions | AITC',
  description:
    'Custom enterprise software development — scalable, secure applications that streamline operations, connect systems, and support long-term business growth. Book a free consultation.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/enterprise-software-development`,
  },
  openGraph: {
    title: 'Enterprise Software Development Services | Custom Enterprise Solutions | AITC',
    description:
      'Build secure, scalable enterprise software that streamlines operations, improves productivity, and supports long-term business growth across your organization.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/enterprise-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const enterpriseSolutionTabs: SolutionTab[] = [
  {
    label: 'Enterprise Consulting',
    desc: 'We assess your business processes, technology landscape, and operational challenges to develop a software strategy that aligns with your goals and future growth plans — before a line of code is written.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' />
      </svg>
    ),
  },
  {
    label: 'Custom Application Development',
    desc: 'We design and develop custom enterprise applications that streamline operations, improve cross-department collaboration, and support complex business workflows at scale.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
      </svg>
    ),
  },
  {
    label: 'System Integration',
    desc: 'Our team connects ERP systems, CRMs, databases, and third-party applications to create a unified, efficient technology ecosystem — eliminating data silos across your organization.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    label: 'Legacy Modernization',
    desc: 'We modernize outdated systems with updated technologies, improved user experiences, enhanced performance, and greater scalability — without disrupting critical business operations.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
      </svg>
    ),
  },
  {
    label: 'Workflow Automation',
    desc: 'We automate repetitive tasks, approvals, reporting, and business processes to improve efficiency and reduce manual effort — freeing your teams to focus on higher-value work.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' />
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    label: 'Cloud Enterprise Solutions',
    desc: 'We build cloud-based enterprise applications that improve accessibility, security, operational flexibility, and long-term scalability — on AWS, Azure, or Google Cloud.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
];

const whyEnterprise = [
  {
    title: 'Improve Operational Efficiency',
    desc: 'Enterprise software automates routine processes, reduces manual work, and standardizes workflows across departments — helping teams accomplish more while improving consistency.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Centralize Business Data',
    desc: 'Bring information from multiple systems into a single platform for easier access and management. Centralized data improves accuracy, reduces duplication, and enables better decision-making.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125' />
      </svg>
    ),
  },
  {
    title: 'Enhance Collaboration',
    desc: 'Enable teams, departments, and stakeholders to work together through connected systems and shared information — leading to faster communication and more effective project execution.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Increase Visibility & Control',
    desc: 'Gain real-time insights into operations, performance metrics, and business activities through centralized dashboards. Leaders make informed decisions and respond quickly to emerging challenges.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Strengthen Security & Compliance',
    desc: 'Enterprise-grade software includes advanced security controls, access management, and compliance capabilities — protecting sensitive business data while meeting industry regulations.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Support Business Growth',
    desc: 'As organizations expand, enterprise software provides the flexibility to handle increasing users, processes, and complexity — creating a strong foundation for sustainable growth.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' />
      </svg>
    ),
  },
];

const processSteps = [
  { step: '01', timing: 'Phase 1', title: 'Business Discovery', desc: 'We analyze your operations, workflows, systems, stakeholders, and business objectives to fully understand project requirements before proposing any solution.' },
  { step: '02', timing: 'Phase 2', title: 'Solution Planning', desc: 'Our team defines system architecture, feature requirements, integrations, and implementation priorities — aligned to your timeline and budget.' },
  { step: '03', timing: 'Phase 3', title: 'UX/UI Design', desc: 'We create user-friendly interfaces, workflows, and experiences designed for high adoption across teams and departments within your organization.' },
  { step: '04', timing: 'Phase 4', title: 'Enterprise Development', desc: 'Developers build the solution using modern technologies, secure architecture, and industry best practices — with progress demos every 2 weeks.' },
  { step: '05', timing: 'Phase 5', title: 'Integration & Testing', desc: 'We integrate the software with existing systems and perform extensive testing to ensure functionality, security, performance, and reliability.' },
  { step: '06', timing: 'Phase 6', title: 'Deployment & Training', desc: 'The solution is deployed within your environment, and users receive training and documentation to support successful adoption across the organization.' },
  { step: '07', timing: 'Ongoing', title: 'Support & Enhancement', desc: 'We provide maintenance, updates, performance optimization, and future enhancements to maximize long-term value and keep pace with your business growth.' },
];

const industries = [
  {
    title: 'Manufacturing',
    desc: 'Production planning, inventory management, supply chain visibility, quality control, and operational efficiency software for manufacturing facilities.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    desc: 'Secure platforms for patient management, healthcare operations, compliance tracking, and workflow automation that improve service delivery.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'Financial Services',
    desc: 'Enterprise applications for banking, lending, insurance, risk management, compliance, and financial reporting that maintain security and accuracy.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />
      </svg>
    ),
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Transportation management, warehouse operations, fleet monitoring, and inventory tracking systems that improve visibility across complex networks.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'Inventory management, order processing, customer engagement, analytics, and multi-channel operation platforms that improve efficiency and customer experience.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Real Estate',
    desc: 'Property management, lease administration, CRM operations, reporting, and portfolio management software that helps businesses manage assets more effectively.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    title: 'Education',
    desc: 'Administration, student management, reporting, communication, and institutional operations platforms that help educational organizations improve efficiency.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'Energy & Utilities',
    desc: 'Asset management, maintenance planning, operational monitoring, compliance management, and resource optimization software for energy and utility businesses.',
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
];

const whyAitc = [
  { title: 'Business-Centric Approach', desc: 'We focus on solving operational challenges and achieving measurable business outcomes rather than simply delivering software features. Every decision connects back to your goals.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' /></svg>) },
  { title: 'Enterprise Architecture Expertise', desc: 'Our team designs software architectures capable of supporting complex workflows, large user bases, and evolving business requirements without performance degradation.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' /></svg>) },
  { title: 'Experienced Development Teams', desc: 'Work with skilled software engineers, architects, designers, and project managers experienced in enterprise-scale projects — not generalists learning on your budget.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' /></svg>) },
  { title: 'Seamless System Integration', desc: 'We ensure your enterprise software works efficiently with existing applications, databases, and third-party platforms — eliminating silos without disrupting current operations.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' /></svg>) },
  { title: 'Security & Compliance Focus', desc: 'Security, data protection, and compliance considerations are built into every stage of development and deployment — not bolted on after the fact.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' /></svg>) },
  { title: 'Long-Term Technology Partnership', desc: 'From planning and development to optimization and future enhancements, we support your software throughout its lifecycle — not just during the build.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' /></svg>) },
];

const faqs = [
  { question: 'How long does enterprise software development take?', answer: 'Project timelines vary depending on complexity, integrations, business requirements, and the number of users involved. A focused module or internal tool can be delivered in 8–16 weeks. A full enterprise platform typically ranges from 6–18+ months. We provide a detailed timeline after a discovery session.' },
  { question: 'How much does enterprise software development cost?', answer: 'Cost depends on system complexity, required features, integrations, security requirements, and implementation scope. Enterprise projects typically start from $50K for focused tools and scale to $500K+ for large-scale platforms. We provide a customized fixed-price estimate based on your specific project needs.' },
  { question: 'Can legacy software be modernized instead of replaced?', answer: 'Yes. We can modernize existing systems by improving architecture, user experience, performance, and scalability while preserving critical business functionality and data. This is often faster and lower risk than a full replacement.' },
  { question: 'How do you ensure software security?', answer: 'We follow secure development practices (OWASP standards), conduct security testing, implement role-based access controls, encrypt sensitive data, and apply industry-standard security measures throughout every project — including during design, development, and deployment.' },
  { question: 'Do you provide post-launch support?', answer: 'Yes. We provide maintenance, monitoring, updates, optimization, and ongoing technical support after deployment. Most of our enterprise clients maintain a long-term partnership with our team as the software evolves.' },
  { question: 'Can you integrate with our existing ERP or CRM systems?', answer: 'Yes. We regularly integrate with Salesforce, Microsoft Dynamics, SAP, Oracle, and custom internal systems via APIs, middleware, and direct database connections. Integration is a core part of our enterprise development process.' },
  { question: 'Do you work with both on-premise and cloud environments?', answer: 'Yes. We develop enterprise software for cloud environments (AWS, Azure, Google Cloud) as well as hybrid and on-premise deployments, depending on your security, compliance, and infrastructure requirements.' },
];

export default function EnterpriseSoftwareDevelopmentPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className='relative overflow-hidden bg-secondary'>
        <div className='pointer-events-none absolute -left-32 -top-32 size-[600px] rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-20 right-0 size-[500px] rounded-full bg-white/5 blur-3xl' />
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.06]'
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className='common-padding relative py-16 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              {/* Left */}
              <div>
                <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm'>
                  <span className='size-1.5 animate-pulse rounded-full bg-primary' />
                  Enterprise Software Development
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]'>
                  Enterprise Software for{' '}
                  <span className='text-primary'>Complex Business Operations</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl'>
                  Build secure, scalable, and high-performance enterprise software that streamlines operations, improves
                  productivity, and supports long-term business growth across your organization.
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Link href='/book-a-free-consultation' className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-opacity hover:opacity-90'>
                    Book Free Consultation
                  </Link>
                  <Link href='/request-a-quote' className='rounded-md border-2 border-white/30 px-7 py-3.5 text-center font-medium text-white transition-colors hover:border-white hover:bg-white/10'>
                    Get Enterprise Project Estimate →
                  </Link>
                </div>
                <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70'>
                  <li><span className='text-primary'>✓</span> Enterprise Solutions Delivered</li>
                  <li><span className='text-primary'>✓</span> Experienced Software Engineers</li>
                  <li><span className='text-primary'>✓</span> Dedicated Development Teams</li>
                  <li><span className='text-primary'>✓</span> ISO Certified</li>
                </ul>
              </div>

              {/* Right — enterprise system metrics card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/20'>
                        <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>Operations Dashboard</p>
                        <p className='text-sm font-semibold text-white'>Your enterprise at a glance</p>
                      </div>
                    </div>
                    <div className='space-y-2.5'>
                      {[
                        { label: 'Process Automation Rate', value: '84%', change: '+31%', },
                        { label: 'Manual Effort Reduced', value: '62 hrs/wk', change: '-68%', },
                        { label: 'Cross-Team Collaboration', value: '94%', change: '+47%', },
                        { label: 'Data Accuracy Score', value: '99.2%', change: '+28%', },
                      ].map((metric) => (
                        <div key={metric.label} className='flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2.5'>
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
                        <p className='text-2xl font-bold text-white'>ISO</p>
                        <p className='text-xs text-white/50'>27001 Certified</p>
                      </div>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-white'>99.9%</p>
                        <p className='text-xs text-white/50'>Uptime SLA</p>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-primary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>From $50K fixed-price</p>
                    <p className='text-[10px] text-white/70'>custom estimate available</p>
                  </div>
                  <div className='absolute -right-4 -top-4 rounded-xl bg-white px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-secondary'>NDA before discussion</p>
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
              { value: '300+', label: 'Enterprise solutions delivered' },
              { value: '10 yrs', label: 'Industry experience' },
              { value: '99.9%', label: 'Platform uptime SLA' },
              { value: '96%', label: 'Client satisfaction rate' },
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
          <div className='mb-12 grid gap-8 lg:grid-cols-[1fr_auto]'>
            <div className='max-w-2xl'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we deliver</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
                Custom Enterprise Software Solutions Built Around Your Strategic Goals
              </h2>
              <p className='mt-4 text-lg text-mainBlack'>
                Modern enterprises require intelligent software that connects people, processes, and data across the
                organization. We design and develop solutions that drive digital transformation and support sustainable
                growth.
              </p>
            </div>
            <div className='flex items-end'>
              <Link href='/book-a-free-consultation' className='inline-flex items-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800 whitespace-nowrap'>
                Book Free Consultation →
              </Link>
            </div>
          </div>

          {/* 3-column service cards with colored left border */}
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {[
              { num: '01', title: 'Enterprise Software Consulting', desc: 'We assess your business processes, technology landscape, and operational challenges to develop a software strategy aligned with your goals and future growth plans.', border: 'border-l-primary' },
              { num: '02', title: 'Custom Enterprise Application Development', desc: 'We design and develop custom enterprise applications that streamline operations, improve collaboration, and support complex business workflows.', border: 'border-l-blue-400' },
              { num: '03', title: 'Enterprise System Integration', desc: 'Our team connects ERP systems, CRMs, databases, and third-party applications to create a unified and efficient technology ecosystem.', border: 'border-l-purple-400' },
              { num: '04', title: 'Legacy Software Modernization', desc: 'We modernize outdated systems with updated technologies, improved user experiences, enhanced performance, and greater scalability.', border: 'border-l-green-400' },
              { num: '05', title: 'Enterprise Workflow Automation', desc: 'We automate repetitive tasks, approvals, reporting, and business processes to improve efficiency and reduce manual effort across departments.', border: 'border-l-orange-400' },
              { num: '06', title: 'Enterprise Mobility Solutions', desc: 'We develop secure mobile applications that provide employees and stakeholders with access to critical business information anytime, anywhere.', border: 'border-l-pink-400' },
              { num: '07', title: 'Cloud-Based Enterprise Solutions', desc: 'We build cloud-based enterprise applications that improve accessibility, security, operational flexibility, and long-term scalability.', border: 'border-l-teal-400' },
            ].map((service) => (
              <div key={service.num} className={`rounded-xl border border-lightShade1 border-l-4 bg-white p-6 transition-shadow hover:shadow-md ${service.border}`}>
                <span className='font-mono text-xs font-bold text-grey'>{service.num}</span>
                <h3 className='mt-2 text-base font-bold text-secondary'>{service.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INVEST IN ENTERPRISE SOFTWARE ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Modern Businesses Invest in Enterprise Software
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Enterprise software enables organizations to streamline operations, improve collaboration, and gain greater
            visibility across business functions — helping businesses operate more efficiently and adapt faster to
            changing demands.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyEnterprise.map((item) => (
              <div key={item.title} className='flex gap-4 rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <div className='mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                  <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
                </div>
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
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>Enterprise Strategy</p>
              <h2 className='mt-2 text-2xl font-bold text-white md:text-3xl'>
                Ready to streamline operations and improve business performance with custom enterprise software?
              </h2>
            </div>
            <Link href='/book-a-free-consultation' className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'>
              Schedule an Enterprise Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-[1fr_2fr]'>
            {/* Sticky left */}
            <div className='lg:sticky lg:top-24 lg:self-start'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
                How We Turn Complex Requirements into Powerful Software
              </h2>
              <p className='mt-4 text-lg text-mainBlack'>
                Our enterprise development process focuses on understanding business requirements, minimizing
                implementation risks, and delivering solutions that create measurable value.
              </p>
              <Link href='/request-a-quote' className='mt-6 inline-flex items-center rounded-md bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90'>
                Get a free estimate →
              </Link>
            </div>
            {/* Timeline */}
            <div className='space-y-0'>
              {processSteps.map((step, i) => (
                <div key={step.step} className='flex gap-5'>
                  <div className='flex flex-col items-center'>
                    <div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${i < 4 ? 'bg-primary' : 'bg-secondary'}`}>
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className='mt-1 w-0.5 flex-1 bg-lightShade1' style={{ minHeight: '2.5rem' }} />
                    )}
                  </div>
                  <div className={`pb-8 ${i === processSteps.length - 1 ? 'pb-0' : ''}`}>
                    <span className='font-mono text-xs font-bold text-primary'>{step.timing}</span>
                    <h3 className='mt-1 text-lg font-bold text-secondary'>{step.title}</h3>
                    <p className='mt-1 text-base leading-relaxed text-grey'>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS TABS ── */}
      <Solutions
        badge='Enterprise solutions'
        heading='Enterprise Software Solutions We Deliver'
        subheading='From consulting and custom application development to system integration and cloud migration — end-to-end enterprise software services.'
        tabs={enterpriseSolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get a project estimate'
        ctaHref='/request-a-quote'
      />

      {/* ── TECHNOLOGIES ── */}
      <Technologies
        heading='Technologies Powering Modern Enterprise Solutions'
        subheading='Proven technologies, cloud platforms, and enterprise-grade frameworks to build secure, reliable, and future-ready software.'
      />

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Start your project</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              Need a Technology Partner for Your Enterprise Initiative?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Let&apos;s discuss your business requirements and build a solution designed for long-term success.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link href='/request-a-quote' className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'>
                Discuss Your Enterprise Project →
              </Link>
              <Link href='/book-a-free-consultation' className='w-full rounded-md border-2 border-secondary px-8 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white sm:w-auto'>
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
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Industries we serve</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Enterprise Software Development Across Industries
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Every industry operates with unique processes, compliance requirements, and operational challenges. We build
            enterprise solutions tailored to your specific workflows, business objectives, and growth strategies.
          </p>
          <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {industries.map((industry) => (
              <div key={industry.title} className={`rounded-xl border border-lightShade1 p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${industry.color}`}>
                <div className={`mb-4 ${industry.iconColor}`}>{industry.icon}</div>
                <h3 className='text-base font-bold text-secondary'>{industry.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AITC ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Why AITC</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Businesses Choose AITC for Enterprise Software Development
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Enterprise-grade expertise, senior engineering teams, and full IP ownership — at 70% less than UK, US, or
            Australian development rates.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyAitc.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>{item.icon}</div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA BANNER ── */}
      <PostReviewsCTA
        badge='Enterprise Software Development'
        heading='Ready to Transform Your Business with Enterprise Software?'
        description='Empower your organization with custom enterprise solutions designed to improve efficiency, enhance collaboration, and support long-term growth across every department.'
        primaryLabel='Schedule a Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Get a Free Project Estimate'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description='Enterprise software is the foundation of your digital operations. From cloud infrastructure and AI automation to dedicated development teams, our Nepal-based engineers support every layer of your technology stack — at 70% less than local rates.'
        theme='light'
        items={[
          { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'SaaS Development', desc: 'Multi-tenant cloud platforms built to serve multiple customers at scale.', href: '/service/saas-development' },
          { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'AI Software Development', desc: 'Intelligent automation, ML models, and AI-powered enterprise workflows.', href: '/service/ai-software-development' },
          { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Custom Software Development', desc: 'Bespoke software built around your unique business processes.', href: '/custom-software-development' },
          { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Cloud & DevOps', desc: 'Cloud migration, CI/CD pipelines, and infrastructure automation.', href: '/managed-it-support-services/devops' },
          { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Dedicated Development Team', desc: 'Long-term engineers embedded in your enterprise product teams.', href: '/services/dedicated-development-team' },
          { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'QA & Testing', desc: 'Enterprise-grade testing, security audits, and performance validation.', href: '/managed-it-support-services/qa-and-testing' },
        ]}
      />

      {/* ── FINAL CTA + FORM ── */}
      <section className='relative overflow-hidden bg-secondary text-white'>
        <div className='pointer-events-none absolute -right-20 bottom-0 size-96 rounded-full bg-primary/10 blur-3xl' />
        <svg className='absolute inset-x-0 top-0 h-32 w-full opacity-20' viewBox='0 0 1440 128' fill='none' preserveAspectRatio='none' aria-hidden='true'>
          <path d='M0 100 L220 40 L400 90 L600 20 L800 85 L1000 35 L1200 90 L1440 55' stroke='#486581' strokeWidth='1' />
        </svg>
        <div className='common-padding relative mx-auto max-w-screen-2xl py-20 md:py-28'>
          <div className='grid items-start gap-10 lg:grid-cols-[2fr_3fr]'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Start your project</p>
              <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>
                Ready to Transform Your Business with Enterprise Software?
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Share your business requirements and we&apos;ll come back with an architecture recommendation, timeline,
                and cost range — no obligation.
              </p>
              <ul className='mt-8 space-y-3 text-white/75'>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Free discovery session included</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Fixed-price estimate available</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> NDA signed before any discussion</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Reply within 1 business day</li>
              </ul>
              <div className='mt-8 flex flex-wrap items-center gap-3'>
                {['ISO 9001', 'ISO 27001', 'GDPR Ready', 'AWS Partner'].map((badge) => (
                  <span key={badge} className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80'>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <InlineInquiryForm
              preselectedService='Enterprise Software Development'
              preselectedIndustry='Technology'
              formName='bofu-enterprise-software'
              heading='Get your enterprise project estimate'
              subheading="Tell us your business requirements and we'll respond with a solution recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get Enterprise Estimate' quoteHref='/request-a-quote' />
    </>
  );
}
