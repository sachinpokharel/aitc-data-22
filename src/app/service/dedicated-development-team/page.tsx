import { type Metadata } from 'next';
import Link from 'next/link';
import PostReviewsCTA from '@/components/pages/static-components/CTA-women';
import FAQSection from '@/components/pages/static-components/faqs';
import InlineInquiryForm from '@/components/pages/static-components/InlineInquiryForm';
import StickyMobileCTA from '@/components/pages/static-components/StickyMobileCTA';
import Technologies from '@/components/pages/static-components/technologies';
import ClientLogos from '@/components/pages/static-components/Trustclientlogos';
import WeHelpWith from '@/components/pages/static-components/Wehelpwith';

export const metadata: Metadata = {
  title: 'Dedicated Development Teams | Extend Your Engineering Capacity | AITC',
  description:
    'Extend your engineering capacity with fully integrated dedicated development teams. Build faster, scale efficiently, and maintain long-term product ownership without hiring overhead.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/dedicated-development-team`,
  },
  openGraph: {
    title: 'Dedicated Development Teams | Extend Your Engineering Capacity | AITC',
    description:
      'Extend your engineering capacity with fully integrated dedicated development teams that help you build faster, scale efficiently, and maintain long-term product ownership.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/dedicated-development-team`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const services = [
  {
    title: 'Dedicated Software Developers',
    desc: 'Engineers focused exclusively on your project — accelerating delivery without the overhead of hiring.',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' /></svg>,
  },
  {
    title: 'Frontend Development Teams',
    desc: 'Responsive, pixel-perfect interfaces built with React, Next.js, Angular, or Vue — across every device.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3' /></svg>,
  },
  {
    title: 'Backend Development Teams',
    desc: 'Secure, scalable APIs and server systems built to handle growth, integrations, and complex logic.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z' /></svg>,
  },
  {
    title: 'Mobile App Development Teams',
    desc: 'iOS and Android apps built with Flutter or React Native — high performance, single codebase.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3' /></svg>,
  },
  {
    title: 'UI/UX Designers',
    desc: 'Intuitive user journeys and engaging interfaces that drive product adoption and satisfaction.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' /></svg>,
  },
  {
    title: 'QA & Testing Specialists',
    desc: 'Structured testing across manual and automated processes — catching issues before they reach production.',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-500',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>,
  },
  {
    title: 'Project Managers & Scrum Masters',
    desc: 'Sprint coordination, stakeholder updates, and delivery tracking — keeping your team aligned and on schedule.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5' /></svg>,
  },
  {
    title: 'Cross-Functional Product Teams',
    desc: 'A full delivery team — developers, designers, QA, and PMs — assembled and managed as one unit.',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    icon: <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' /></svg>,
    featured: true,
  },
];

const benefits: Array<{ title: string; bullets: string[]; icon: React.ReactNode }> = [
  {
    title: 'Faster Team Expansion',
    bullets: [
      'No long recruitment cycles or onboarding delays',
      'Ready-to-work engineers contributing from day one',
      'Scale capacity in days, not months',
    ],
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Access to Specialized Talent',
    bullets: [
      'Developers, designers, QA engineers, and PMs',
      'Expertise across modern technologies and stacks',
      'Experience across complex, multi-phase projects',
    ],
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
      </svg>
    ),
  },
  {
    title: 'Reduced Hiring Overhead',
    bullets: [
      'No sourcing, interviewing, or retaining costs',
      'We handle team formation and management',
      'Redirect resources toward product growth',
    ],
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />
      </svg>
    ),
  },
  {
    title: 'Greater Flexibility',
    bullets: [
      'Adjust team size and skill sets at any stage',
      'Adapt to changing requirements without disruption',
      'Add or remove specialists as priorities shift',
    ],
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    title: 'Focus on Core Business Goals',
    bullets: [
      'Internal team stays focused on strategy',
      'Dedicated specialists own day-to-day execution',
      'Faster decisions, less management overhead',
    ],
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Long-Term Product Continuity',
    bullets: [
      'Teams stay aligned with your product over time',
      'Knowledge retention reduces onboarding friction',
      'Stable progress across the full product lifecycle',
    ],
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
];

const processSteps = [
  { step: '01', timing: 'Phase 1', title: 'Discovery & Team Planning', desc: 'We understand your project requirements, technology stack, team structure, and business objectives to define the right team composition for your needs.' },
  { step: '02', timing: 'Phase 2', title: 'Talent Selection', desc: 'We identify and recommend professionals whose skills and experience match your specific requirements, technology stack, and team culture.' },
  { step: '03', timing: 'Phase 3', title: 'Team Onboarding', desc: 'Team members are integrated into your workflows, communication channels, and development processes for smooth, immediate collaboration.' },
  { step: '04', timing: 'Phase 4', title: 'Development & Collaboration', desc: 'Your dedicated team works alongside your stakeholders with regular communication, sprint ceremonies, and continuous progress tracking.' },
  { step: '05', timing: 'Phase 5', title: 'Performance Management', desc: 'We monitor delivery, team performance, and resource allocation to ensure consistent project success and team alignment.' },
  { step: '06', timing: 'Ongoing', title: 'Ongoing Scaling & Support', desc: 'Expand, optimize, or restructure the team as project requirements evolve — with full flexibility to adjust capacity at any stage.' },
];

const industries = [
  {
    title: 'Healthcare',
    desc: 'Support healthcare organizations with secure, compliant, and scalable software solutions for patients, providers, and operations.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'FinTech',
    desc: 'Develop reliable financial platforms, payment systems, and digital solutions that prioritize security and performance.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />
      </svg>
    ),
  },
  {
    title: 'Real Estate',
    desc: 'Build property management, listing, booking, and real estate operations platforms tailored to industry needs.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    desc: 'Create online stores, marketplaces, and digital commerce solutions that support growth and customer engagement.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Education',
    desc: 'Develop learning management systems, student portals, and educational platforms that enhance learning experiences.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'Logistics',
    desc: 'Build systems for shipment tracking, fleet management, inventory control, and operational visibility.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'Human Resources',
    desc: 'Support HR operations with platforms for recruitment, employee management, payroll, and workforce engagement.',
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    title: 'SaaS & Technology',
    desc: 'Accelerate product development with dedicated teams experienced in building scalable software products and platforms.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
];

const whyAitc = [
  {
    title: 'Experienced Talent Pool',
    desc: 'Work with highly skilled developers, designers, QA specialists, and project managers who bring hands-on experience across multiple industries, technologies, and complex product environments, ensuring reliable execution from day one.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
      </svg>
    ),
  },
  {
    title: 'Flexible Team Structure',
    desc: 'Scale your dedicated team up or down based on evolving project priorities, product roadmaps, and business goals, giving you complete control over resources without the constraints of traditional hiring.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
  },
  {
    title: 'Transparent Collaboration',
    desc: 'Maintain full visibility throughout the development process with clear communication, structured updates, and seamless integration into your existing tools, workflows, and project management systems.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z' />
      </svg>
    ),
  },
  {
    title: 'Strong Technical Expertise',
    desc: 'Leverage deep technical knowledge across modern frameworks, programming languages, and cloud platforms to build scalable, secure, and high-performance software solutions.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
      </svg>
    ),
  },
  {
    title: 'Long-Term Partnership',
    desc: 'Build continuity with teams that understand your product over time, enabling faster decision-making, reduced onboarding friction, and consistent progress across the entire product lifecycle.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'Quality-Focused Delivery',
    desc: 'Ensure strong engineering standards through structured development practices, code reviews, testing processes, and continuous improvement focused on reliability, performance, and scalability.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
];

const techCategories = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'Vue.js'],
    color: 'bg-blue-50 text-blue-700',
    dotColor: 'bg-blue-400',
  },
  {
    label: 'Backend',
    items: ['Node.js', '.NET', 'Laravel', 'Python'],
    color: 'bg-purple-50 text-purple-700',
    dotColor: 'bg-purple-400',
  },
  {
    label: 'Mobile',
    items: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
    color: 'bg-green-50 text-green-700',
    dotColor: 'bg-green-400',
  },
  {
    label: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    color: 'bg-orange-50 text-orange-700',
    dotColor: 'bg-orange-400',
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    color: 'bg-teal-50 text-teal-700',
    dotColor: 'bg-teal-400',
  },
];

const caseStudies = [
  {
    title: 'SaaS Product Development Team',
    category: 'SaaS',
    desc: 'Assembled a cross-functional team of 6 engineers and a QA specialist that helped a SaaS startup ship their MVP within 4 months and scale to 10,000+ users.',
    metrics: [{ label: 'Time to market', value: '4 months' }, { label: 'Engineers placed', value: '7' }, { label: 'User growth', value: '10K+' }],
    color: 'border-t-blue-400',
  },
  {
    title: 'Enterprise Application Team',
    category: 'Enterprise',
    desc: 'Provided a dedicated backend and integration team for a logistics company, reducing their manual reporting time by 65% and improving system reliability.',
    metrics: [{ label: 'Reporting time reduced', value: '65%' }, { label: 'System uptime', value: '99.9%' }, { label: 'Integrations built', value: '12+' }],
    color: 'border-t-purple-400',
  },
  {
    title: 'Mobile App Development Team',
    category: 'Mobile',
    desc: 'Dedicated Flutter team delivered cross-platform iOS and Android apps for a healthcare client, achieving 4.8-star ratings across both stores.',
    metrics: [{ label: 'App store rating', value: '4.8 ★' }, { label: 'Platforms', value: 'iOS & Android' }, { label: 'Dev cycle', value: '6 months' }],
    color: 'border-t-green-400',
  },
];

const testimonials = [
  {
    quote: 'The dedicated team AITC provided felt like a natural extension of our in-house engineers from day one. Communication was excellent and delivery was consistent throughout.',
    name: 'Mark Thompson',
    role: 'CTO, SaaS Platform',
    initials: 'MT',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    quote: "We scaled from 2 to 8 engineers in under 3 weeks without any disruption to our sprint velocity. AITC's talent selection process was thorough and the results speak for themselves.",
    name: 'Sarah Chen',
    role: 'VP Engineering, FinTech Startup',
    initials: 'SC',
    color: 'bg-green-100 text-green-700',
  },
  {
    quote: "Long-term partnership is where AITC truly shines. After 18 months, our dedicated team knows the product inside out. Onboarding new features takes days, not weeks.",
    name: 'James Whitfield',
    role: 'Product Director, Healthcare Platform',
    initials: 'JW',
    color: 'bg-purple-100 text-purple-700',
  },
];

const faqs = [
  { question: 'How does a dedicated development team model work?', answer: 'A dedicated development team works exclusively on your project as an extension of your in-house team, handling development, collaboration, and delivery while you maintain full control over priorities and direction.' },
  { question: 'How quickly can I onboard a dedicated development team?', answer: 'You can typically get a dedicated team assembled quickly after sharing your requirements. We match relevant developers, designers, and specialists based on your project needs and technology stack.' },
  { question: 'Can I choose the members of my dedicated team?', answer: 'Yes. You can review shortlisted profiles and select team members based on their experience, skills, and suitability for your project.' },
  { question: 'Will the dedicated team work with my existing processes and tools?', answer: 'Yes. The team integrates directly into your workflows, communication tools, and project management systems to ensure smooth collaboration.' },
  { question: 'Can I scale my dedicated team later?', answer: 'Yes. You can easily scale your team by adding developers, designers, QA engineers, or other specialists as your project requirements grow.' },
  { question: 'How is communication handled with a dedicated team?', answer: 'We maintain structured communication through regular updates, sprint meetings, and collaboration tools to ensure complete transparency and alignment.' },
  { question: 'What technologies do your dedicated teams support?', answer: 'Our teams work with modern technologies including React, Angular, Vue, Node.js, .NET, Laravel, Python, Flutter, React Native, and major cloud platforms like AWS, Azure, and Google Cloud.' },
  { question: 'Can dedicated teams work long-term on my product?', answer: 'Yes. Dedicated teams are designed for long-term engagement, helping you maintain consistency, product knowledge, and continuous development momentum.' },
  { question: 'Do you provide project management support with the team?', answer: 'Yes. You can include project managers or scrum masters to help coordinate tasks, track progress, and ensure smooth delivery.' },
  { question: 'What if my project requirements change over time?', answer: 'Dedicated teams are flexible and can adapt to changing requirements by adjusting priorities, scaling resources, or adding new skill sets as needed.' },
];

export default function DedicatedDevelopmentTeamPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        {/* Decorative blobs */}
        <div className='pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-secondary/5 blur-2xl' />
        {/* Dot grid */}
        <div
          className='pointer-events-none absolute inset-0 opacity-[7%]'
          style={{ backgroundImage: 'radial-gradient(circle, #FF7500 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className='common-padding relative py-12 md:py-20 lg:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-12'>

              {/* ── Left: copy ── */}
              <div>
                <span className='mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm'>
                  <span className='size-1.5 rounded-full bg-primary' />
                  Dedicated Development Teams
                </span>

                <h1 className='mb-4 text-3xl font-bold leading-tight text-secondary sm:text-4xl md:text-5xl'>
                  Dedicated Development Teams for{' '}
                  <span className='text-primary'>Long-Term Product Success</span>
                </h1>

                <p className='mb-3 text-base font-bold text-secondary sm:text-lg md:text-xl'>
                  Extend Your Engineering Capacity. Ship Faster. Scale Without the Overhead.
                </p>

                <p className='mb-6 max-w-xl text-sm leading-relaxed text-mainBlack sm:text-base md:text-lg'>
                  Extend your engineering capacity with fully integrated development teams that help you build faster,
                  scale efficiently, and maintain long-term product ownership without hiring overhead.
                </p>

                <ul className='mb-7 space-y-2.5'>
                  {[
                    'Flexible team scaling — add or remove specialists anytime',
                    'Experienced technology specialists across 15+ stacks',
                    'Transparent collaboration integrated into your workflows',
                    'Long-term development support with full product continuity',
                  ].map((item) => (
                    <li key={item} className='flex items-center gap-3 text-sm font-semibold text-mainBlack'>
                      <span className='flex size-5 shrink-0 items-center justify-center rounded-full bg-primary'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white' className='size-3'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                  <Link
                    href='/book-a-free-consultation'
                    className='inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto'
                  >
                    Book a Free Consultation
                  </Link>
                  <Link
                    href='/request-a-quote'
                    className='inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-secondary px-7 py-3.5 font-medium text-secondary transition-colors hover:bg-secondary hover:text-white sm:w-auto'
                  >
                    Build Your Team →
                  </Link>
                </div>
              </div>

              {/* ── Right: team composition card ── */}
              <div className='rounded-2xl border-x border-b border-t-4 border-lightShade1 border-t-primary bg-white shadow-xl'>
                <div className='px-5 py-7 sm:px-8 sm:py-9'>
                  <h2 className='mb-1 text-lg font-bold text-secondary sm:text-xl'>Build Your Team Today</h2>
                  <p className='mb-5 text-sm leading-relaxed text-grey'>
                    Tell us what roles you need and we&apos;ll have shortlisted profiles ready within days.
                  </p>

                  {/* Role checklist */}
                  <p className='mb-3 text-xs font-bold uppercase tracking-widest text-grey'>Common team roles</p>
                  <div className='space-y-2 mb-6'>
                    {[
                      { role: 'Frontend Developer', tag: 'React / Next.js / Vue' },
                      { role: 'Backend Developer', tag: 'Node.js / .NET / Laravel' },
                      { role: 'Mobile Developer', tag: 'Flutter / React Native' },
                      { role: 'QA & Testing Specialist', tag: 'Manual & Automated' },
                      { role: 'UI/UX Designer', tag: 'Figma / Prototyping' },
                      { role: 'Project Manager', tag: 'Scrum / Agile' },
                    ].map((item) => (
                      <div key={item.role} className='flex items-center justify-between rounded-lg border border-lightShade1 bg-lightShad2 px-3 py-2.5'>
                        <div className='flex items-center gap-2.5'>
                          <span className='flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10'>
                            <span className='size-1.5 rounded-full bg-primary' />
                          </span>
                          <span className='text-sm font-semibold text-secondary'>{item.role}</span>
                        </div>
                        <span className='text-xs text-grey'>{item.tag}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href='/book-a-free-consultation'
                    className='flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 font-bold text-white transition hover:opacity-90'
                  >
                    Get My Team Plan
                  </Link>

                  <p className='mt-4 flex items-center justify-center gap-1.5 text-xs text-grey'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' className='size-3 shrink-0'>
                      <rect x='3' y='11' width='18' height='11' rx='2' ry='2' />
                      <path d='M7 11V7a5 5 0 0 1 10 0v4' />
                    </svg>
                    No commitment · NDA on request · Reply within 24 hours
                  </p>
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
              { value: '200+', label: 'Projects Delivered' },
              { value: '10 yrs', label: 'Years of Experience' },
              { value: '96%', label: 'Client Satisfaction' },
              { value: '40+', label: 'Global Clients' },
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

            {/* Sticky left sidebar */}
            <div className='lg:sticky lg:top-24 lg:w-72 lg:shrink-0'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we deliver</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
                Why Businesses Choose Dedicated Development Teams
              </h2>
              <p className='mt-4 text-base leading-relaxed text-grey'>
                Accelerate delivery and scale engineering without the complexity of in-house hiring.
              </p>
              <Link
                href='/book-a-free-consultation'
                className='mt-6 inline-flex items-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800'
              >
                Book Free Consultation →
              </Link>
            </div>

            {/* Cards grid */}
            <div className='flex-1 grid gap-4 sm:grid-cols-2'>
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`group rounded-xl border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                    service.featured
                      ? 'border-primary/30 bg-gradient-to-br from-white to-primary/5 sm:col-span-2'
                      : 'border-lightShade1'
                  }`}
                >
                  <div className={`mb-4 inline-flex size-11 items-center justify-center rounded-xl ${service.iconBg} ${service.iconColor}`}>
                    {service.icon}
                  </div>
                  <h3 className='text-base font-bold text-secondary'>{service.title}</h3>
                  <p className='mt-2 text-base leading-relaxed text-grey'>{service.desc}</p>
                  {service.featured && (
                    <span className='mt-3 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary'>Most popular</span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY DEDICATED TEAMS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Dedicated Development Teams Work for Modern Businesses
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Dedicated teams give you the flexibility of an in-house team without the cost, delay, and complexity of
            traditional hiring.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {benefits.map((item) => (
              <div key={item.title} className='rounded-xl border border-lightShade1 bg-lightShad2 p-6'>
                <div className='mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <ul className='mt-3 space-y-2'>
                  {item.bullets.map((point) => (
                    <li key={point} className='flex items-start gap-2.5 text-sm text-grey'>
                      <span className='mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-2.5 text-primary'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
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
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>Scale Your Engineering Team</p>
              <h2 className='mt-2 text-2xl font-bold text-white md:text-3xl'>
                Ready to extend your development capacity without the delays and costs of traditional hiring?
              </h2>
            </div>
            <Link href='/book-a-free-consultation' className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'>
              Build Your Dedicated Team →
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
                How We Build and Manage Dedicated Development Teams
              </h2>
              <p className='mt-4 text-lg text-mainBlack'>
                A structured approach to assembling, integrating, and scaling teams that align with your goals and
                delivery expectations.
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

      {/* ── TECHNOLOGIES ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Technology expertise</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Expert Development Teams Across Modern Technologies
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Work with specialized engineers experienced in the latest frameworks, tools, and cloud platforms.
          </p>
          <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {techCategories.map((cat) => (
              <div key={cat.label} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <h3 className='mb-4 text-sm font-bold uppercase tracking-widest text-secondary'>{cat.label}</h3>
                <div className='flex flex-wrap gap-2'>
                  {cat.items.map((item) => (
                    <span key={item} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${cat.color}`}>
                      <span className={`size-1.5 rounded-full ${cat.dotColor}`} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Industries we serve</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Dedicated Teams for Industry-Specific Solutions
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Build software faster with teams experienced in solving complex challenges across multiple industries.
          </p>
          <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {industries.map((industry) => (
              <div key={industry.title} className={`rounded-xl border border-lightShade1 p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${industry.color}`}>
                <div className={`mb-4 ${industry.iconColor}`}>{industry.icon}</div>
                <h3 className='text-base font-bold text-secondary'>{industry.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-grey'>{industry.desc}</p>
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
            Why Choose AITC for Dedicated Development Teams
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            We provide reliable, scalable development teams that integrate seamlessly into your workflow and deliver
            consistent long-term value.
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

      {/* ── PORTFOLIO / CASE STUDIES ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Portfolio</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Dedicated Teams That Delivered Measurable Results
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            See how our development teams helped companies scale faster, improve performance, and accelerate product
            delivery.
          </p>
          <div className='mt-12 grid gap-6 md:grid-cols-3'>
            {caseStudies.map((cs) => (
              <div key={cs.title} className={`rounded-xl border border-lightShade1 border-t-4 bg-lightShad2 p-6 ${cs.color}`}>
                <span className='inline-block rounded-full bg-white px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-grey'>{cs.category}</span>
                <h3 className='mt-4 text-base font-bold text-secondary'>{cs.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-grey'>{cs.desc}</p>
                <div className='mt-5 grid grid-cols-3 gap-3 border-t border-lightShade1 pt-5'>
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className='text-lg font-bold text-secondary'>{m.value}</p>
                      <p className='text-xs text-grey'>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Client testimonials</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            What Clients Say About Our Dedicated Teams
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Trusted by companies that rely on our teams for consistent delivery and long-term development support.
          </p>
          <div className='mt-12 grid gap-6 md:grid-cols-3'>
            {testimonials.map((t) => (
              <div key={t.name} className='rounded-xl border border-lightShade1 bg-white p-6'>
                <svg className='mb-4 size-8 text-primary/30' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                </svg>
                <p className='text-base leading-relaxed text-grey'>{t.quote}</p>
                <div className='mt-5 flex items-center gap-3'>
                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className='text-sm font-bold text-secondary'>{t.name}</p>
                    <p className='text-xs text-grey'>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Start building</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              Need a High-Performing Team for Your Product?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Tell us your requirements and we&apos;ll recommend the right team structure, skill set, and approach for
              your product.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link href='/request-a-quote' className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'>
                Build Your Dedicated Team →
              </Link>
              <Link href='/book-a-free-consultation' className='w-full rounded-md border-2 border-secondary px-8 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white sm:w-auto'>
                Book a Free Consultation
              </Link>
            </div>
            <p className='mt-4 text-base text-grey'>No commitment · Team ready in days · Reply within 24 hours</p>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <PostReviewsCTA
        badge='Dedicated Development Teams'
        heading='Ready to Build Your Dedicated Development Team?'
        description='Get a high-performing development team tailored to your product goals, technical needs, and growth plans.'
        primaryLabel='Book a Free Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Build Your Team Now'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description='Dedicated teams are one part of your delivery strategy. From enterprise software and AI automation to cloud infrastructure, our Nepal-based engineers support every layer of your technology stack — at 70% less than local rates.'
        theme='light'
        items={[
          { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Enterprise Software Development', desc: 'Custom enterprise applications for complex business operations at scale.', href: '/service/enterprise-software-development' },
          { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'AI Software Development', desc: 'Intelligent automation, ML models, and AI-powered product workflows.', href: '/service/ai-software-development' },
          { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'SaaS Development', desc: 'Multi-tenant cloud platforms built to serve multiple customers at scale.', href: '/service/saas-development' },
          { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Cloud & DevOps', desc: 'Cloud migration, CI/CD pipelines, and infrastructure automation.', href: '/managed-it-support-services/devops' },
          { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'MVP Development', desc: 'Launch your product faster with a lean, focused MVP approach.', href: '/service/mvp-development' },
          { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'QA & Testing', desc: 'Structured testing services that ensure reliability and performance.', href: '/managed-it-support-services/qa-and-testing' },
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
                Ready to Build Your Dedicated Development Team?
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Get a high-performing development team tailored to your product goals, technical needs, and growth plans.
                Share your requirements and we&apos;ll respond within 24 hours.
              </p>
              <ul className='mt-8 space-y-3 text-white/75'>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Free team planning consultation</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Shortlisted profiles within days</li>
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
              preselectedService='Dedicated Development Team'
              preselectedIndustry='Technology'
              formName='bofu-dedicated-development-team'
              heading='Build your dedicated team today'
              subheading="Tell us your project requirements and team needs — we'll respond with a tailored recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Build Your Team' quoteHref='/request-a-quote' />
    </>
  );
}
