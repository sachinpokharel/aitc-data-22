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
  title: 'Product Discovery Workshop | Validate Your Idea Before Building | AITC',
  description:
    'Structure your product idea with a professional Product Discovery Workshop. Validate assumptions, prioritize features, define your MVP, and create a development-ready product roadmap that reduces risk and accelerates delivery.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/product-discovery-workshop`,
  },
  openGraph: {
    title: 'Product Discovery Workshop | Validate Your Idea Before Building | AITC',
    description:
      'Turn your product idea into a validated, development-ready plan. AITC\'s Product Discovery Workshop covers user research, MVP definition, feature prioritization, and technical feasibility to reduce risk before a single line of code is written.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/product-discovery-workshop`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const discoverySolutionTabs: SolutionTab[] = [
  {
    label: 'Idea Clarification & Problem Definition',
    desc: 'We work with you to refine your product idea into a clear, actionable problem statement. This ensures the product you build is solving a real, validated need rather than a perceived one.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
        />
      </svg>
    ),
  },
  {
    label: 'User Research & Target Audience Analysis',
    desc: 'We analyze your target users — their needs, goals, pain points, and decision drivers — so that every product decision is rooted in real user behavior rather than assumption.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
        />
      </svg>
    ),
  },
  {
    label: 'Feature Prioritization & MVP Definition',
    desc: 'We apply structured prioritization frameworks to identify which features belong in the MVP and which should be deferred — keeping the first release lean, focused, and valuable.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
        />
      </svg>
    ),
  },
  {
    label: 'Technical Feasibility Assessment',
    desc: 'Before development begins, we evaluate technical constraints, integration requirements, architecture options, and potential risks to prevent costly surprises during the build phase.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18'
        />
      </svg>
    ),
  },
  {
    label: 'User Journey & Workflow Mapping',
    desc: 'We map how users will interact with your product step by step — defining critical flows, touchpoints, and decision paths that inform both UX design and development priorities.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4'
        />
      </svg>
    ),
  },
  {
    label: 'Product Scope Definition Document',
    desc: 'At the end of every engagement, you receive structured documentation covering product requirements, feature breakdown, user flows, and MVP scope — ready to hand off to any design or development team.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
        />
      </svg>
    ),
  },
];

const whyDiscovery = [
  {
    title: 'Reduce Product Failure Risk',
    desc: 'Avoid investing time and budget into features or products that do not solve real user problems or market needs.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
      </svg>
    ),
  },
  {
    title: 'Clear Product Direction',
    desc: 'Gain complete clarity on what to build, why it matters, and what should be excluded from the scope.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    title: 'Faster Development Phase',
    desc: 'Eliminate confusion and rework by starting development with a well-defined and validated product plan.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Better Budget Control',
    desc: 'Prevent cost overruns by avoiding unnecessary features, unclear requirements, and mid-development changes.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Stronger MVP Strategy',
    desc: 'Focus your MVP on only the most critical features needed to validate your idea in the real market.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Improved Stakeholder Alignment',
    desc: 'Ensure founders, teams, and stakeholders share the same vision, reducing miscommunication and decision delays.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    desc: 'We begin by understanding your product idea, business goals, target audience, and current challenges to establish a strong foundation for the discovery process.',
  },
  {
    step: '02',
    title: 'Research & Analysis',
    desc: 'We analyze market trends, competitor solutions, user expectations, and business requirements to identify opportunities, risks, and key considerations.',
  },
  {
    step: '03',
    title: 'Workshop Sessions',
    desc: 'Through collaborative sessions, we explore product goals, user journeys, workflows, feature requirements, and business priorities to refine product vision.',
  },
  {
    step: '04',
    title: 'MVP Definition',
    desc: 'We identify and prioritize the features required for the initial release, ensuring the MVP focuses on delivering maximum value with minimum complexity.',
  },
  {
    step: '05',
    title: 'Documentation & Blueprint',
    desc: 'We create structured documentation covering product requirements, workflows, user stories, and recommended implementation approaches.',
  },
  {
    step: '06',
    title: 'Final Review & Handoff',
    desc: 'We review the findings, recommendations, and deliverables with stakeholders, ensuring everyone is aligned before moving into design and development.',
  },
];

const industries = [
  {
    title: 'SaaS & Startups',
    desc: 'Define and validate SaaS product ideas with clear MVP scope, feature prioritization, and product-market alignment before development begins.',
    color: 'bg-[#fff7ef]',
    iconColor: 'text-primary',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
  {
    title: 'FinTech',
    desc: 'Structure secure financial product concepts with clear workflows, compliance considerations, and technical feasibility for scalable financial systems.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    desc: 'Design and validate online store and marketplace ideas with optimized user journeys, core features, and conversion-focused structure.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    desc: 'Validate healthcare workflows, patient management systems, and digital health platforms with a strong focus on usability, security, and compliance readiness.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'Education',
    desc: 'Define learning management systems and digital education platforms with structured user flows, engagement features, and scalable architecture planning.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'Real Estate',
    desc: 'Clarify property platforms, booking systems, and management solutions with well-defined workflows for buyers, tenants, and administrators.',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    title: 'Logistics',
    desc: 'Design tracking, delivery, and fleet management systems with clear operational flows and efficiency-focused product structure.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'On-Demand Services',
    desc: 'Structure service marketplace ideas with defined user journeys, matching logic, and scalable platform workflows for real-time service delivery.',
    color: 'bg-teal-50',
    iconColor: 'text-teal-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3' />
      </svg>
    ),
  },
];

const whyAitc = [
  {
    title: 'Structured Product Thinking',
    desc: 'We focus on building clarity before code. Our approach ensures your idea is properly defined, validated, and aligned with real user needs so development starts with direction, not assumptions.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' />
      </svg>
    ),
  },
  {
    title: 'Reduced Development Risk',
    desc: 'We help you avoid expensive mistakes by identifying gaps, removing unnecessary features, and validating your product direction before any development begins.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Clear Documentation Output',
    desc: 'You receive structured, development-ready outputs including product scope, MVP definition, feature breakdown, and user flows that your team can immediately act on.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
      </svg>
    ),
  },
  {
    title: 'Faster Development Handoff',
    desc: 'With clear requirements and validated structure in place, your design and development teams can move faster without confusion, delays, or repeated rework.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Cross-Domain Experience',
    desc: 'We bring experience across SaaS, fintech, healthcare, real estate, and enterprise systems, helping you design solutions that are practical and industry-aware.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' />
      </svg>
    ),
  },
  {
    title: 'Founder-Focused Approach',
    desc: 'We work closely with founders and product teams to turn early-stage ideas into structured, buildable strategies that are ready for real-world execution.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'What is included in a Product Discovery Workshop?',
    answer:
      'A Product Discovery Workshop includes idea clarification, user and market analysis, feature prioritization, MVP definition, user journey mapping, technical feasibility assessment, and a structured product scope document ready for development.',
  },
  {
    question: 'How long does the discovery process take?',
    answer:
      'The timeline usually ranges from a few days to a couple of weeks depending on the complexity of your idea, number of stakeholders involved, and depth of research required.',
  },
  {
    question: 'Do you help define MVP features?',
    answer:
      'Yes. We identify core features required for your MVP, prioritize what should be built first, and remove unnecessary features to ensure fast validation and reduced development risk.',
  },
  {
    question: 'Can you help if I only have an idea?',
    answer:
      "Yes. You don't need a fully defined product. We help you refine your idea, define the problem clearly, and turn it into a structured product plan ready for development.",
  },
  {
    question: 'Will I get documentation after the workshop?',
    answer:
      'Yes. You will receive clear documentation including product requirements, feature breakdown, user flows, MVP scope, and recommended development direction.',
  },
  {
    question: 'Is this required before development?',
    answer:
      'It is not mandatory, but highly recommended. It significantly reduces risk, improves clarity, and ensures development starts with a well-defined product strategy.',
  },
  {
    question: 'Can you also build the product after discovery?',
    answer:
      'Yes. Once the discovery phase is complete, we can move directly into UI/UX design, development, and full product execution based on the defined roadmap.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work across SaaS, FinTech, Healthcare, Real Estate, E-commerce, Education, Logistics, and other industries building digital products and platforms.',
  },
];

export default function ProductDiscoveryWorkshopPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className='relative overflow-hidden bg-white'>
        <div className='pointer-events-none absolute -right-40 -top-40 size-[700px] rounded-full bg-primary/5 blur-3xl' />
        <div className='pointer-events-none absolute -left-20 bottom-0 size-[400px] rounded-full bg-secondary/5 blur-3xl' />
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.03]'
          style={{ backgroundImage: 'radial-gradient(circle, #FF7500 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className='common-padding relative py-16 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              <div>
                <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary'>
                  <span className='size-1.5 animate-pulse rounded-full bg-primary' />
                  Product Discovery Workshop
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-secondary md:text-5xl lg:text-[3.25rem]'>
                  Define the Right Product{' '}
                  <span className='text-primary'>Before You Start Building</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-mainBlack md:text-xl'>
                  Validate your idea, prioritize the right features, and build a clear product roadmap that reduces risk
                  and accelerates development.
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Link
                    href='/book-a-free-consultation'
                    className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-opacity hover:opacity-90'
                  >
                    Book a Free Consultation
                  </Link>
                  <Link
                    href='/request-a-quote'
                    className='rounded-md border-2 border-secondary px-7 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white'
                  >
                    Start Discovery Workshop →
                  </Link>
                </div>
                <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mainBlack'>
                  <li><span className='text-primary'>✓</span> Product Strategy &amp; Planning</li>
                  <li><span className='text-primary'>✓</span> Feature Prioritization</li>
                  <li><span className='text-primary'>✓</span> MVP Definition Support</li>
                  <li><span className='text-primary'>✓</span> Technical Feasibility Analysis</li>
                </ul>
              </div>

              {/* Right — Discovery workshop progress card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-lightShade1 bg-white p-7 shadow-2xl'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/10'>
                        <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>Discovery Workshop</p>
                        <p className='text-sm font-semibold text-secondary'>Your roadmap to clarity</p>
                      </div>
                    </div>
                    <div className='space-y-3'>
                      {[
                        { phase: 'Day 1–2', label: 'Idea Clarification & Research', done: true },
                        { phase: 'Day 3–5', label: 'User Journey & Feature Mapping', done: true },
                        { phase: 'Day 5–7', label: 'MVP Definition & Prioritization', done: true },
                        { phase: 'Day 8–9', label: 'Technical Feasibility Review', done: false },
                        { phase: 'Day 10', label: '📄 Product Blueprint Delivered', done: false },
                      ].map((item) => (
                        <div key={item.label} className='flex items-center gap-3'>
                          <div
                            className={`flex size-5 shrink-0 items-center justify-center rounded-full ${item.done ? 'bg-green-500' : 'border-2 border-lightShade1 bg-white'}`}
                          >
                            {item.done && (
                              <svg className='size-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                              </svg>
                            )}
                          </div>
                          <div className='flex-1'>
                            <p className='text-sm font-semibold text-secondary'>{item.label}</p>
                            <p className='text-xs text-grey'>{item.phase}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-5 rounded-lg bg-primary/10 px-4 py-3 text-center'>
                      <p className='text-sm font-bold text-primary'>Average workshop duration: 1–2 weeks</p>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-secondary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>Full scope doc included</p>
                  </div>
                  <div className='absolute -right-4 -top-4 rounded-xl bg-primary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>NDA before discussion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className='bg-secondary text-white'>
        <div className='common-padding mx-auto max-w-screen-2xl py-10'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            {[
              { value: '200+', label: 'Products shaped' },
              { value: '1–2 wks', label: 'Workshop duration' },
              { value: '4.9 / 5', label: 'Client satisfaction' },
              { value: '60%', label: 'Faster development start' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className='text-4xl font-bold'>{stat.value}</p>
                <p className='mt-1 text-xs font-bold uppercase tracking-widest text-white/60'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* ── SERVICES — What's Included ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-12 max-w-3xl'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we offer</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              What&apos;s Included in Our Product Discovery Workshop
            </h2>
            <p className='mt-4 text-lg text-mainBlack'>
              A structured process that transforms your idea into a validated product plan ready for design and
              development.
            </p>
            <Link
              href='/book-a-free-consultation'
              className='mt-6 inline-flex items-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800'
            >
              Book a Consultation →
            </Link>
          </div>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              { num: '01', title: 'Idea Clarification & Problem Definition', desc: 'Refine your idea into a clear problem statement and identify what your product is actually solving.', accent: 'border-t-primary' },
              { num: '02', title: 'User Research & Target Audience Analysis', desc: 'Understand your users, their needs, pain points, and behavior to validate product direction.', accent: 'border-t-blue-400' },
              { num: '03', title: 'Feature Prioritization & MVP Definition', desc: 'Identify core features for MVP and separate them from unnecessary or future enhancements.', accent: 'border-t-purple-400' },
              { num: '04', title: 'Technical Feasibility Assessment', desc: 'Evaluate technical requirements, limitations, and possible system architecture before development.', accent: 'border-t-green-400' },
              { num: '05', title: 'User Journey & Workflow Mapping', desc: 'Define how users will interact with your product from start to finish in a structured flow.', accent: 'border-t-orange-400' },
              { num: '06', title: 'Product Scope Definition Document', desc: 'Create clear documentation of features, scope, and requirements for development teams.', accent: 'border-t-teal-400' },
            ].map((service) => (
              <div key={service.num} className={`rounded-xl border border-lightShade1 border-t-4 bg-white p-6 transition-shadow hover:shadow-md ${service.accent}`}>
                <span className='font-mono text-xs font-bold text-grey'>{service.num}</span>
                <h3 className='mt-2 text-base font-bold text-secondary'>{service.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PRODUCT DISCOVERY ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
                Why Product Discovery is Essential Before Development
              </h2>
              <p className='mt-4 text-lg text-mainBlack'>
                Great products are not just built well — they are defined correctly. Discovery ensures you build the
                right solution from the start.
              </p>
              <div className='mt-8 space-y-6'>
                {whyDiscovery.map((item) => (
                  <div key={item.title} className='flex gap-4'>
                    <div className='mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                      <p className='mt-1 text-base leading-relaxed text-grey'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='rounded-2xl border border-lightShade1 bg-lightShad2 p-8'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Why discovery saves money</p>
              <p className='mt-3 text-2xl font-bold text-secondary'>
                Products built without discovery are{' '}
                <span className='text-primary'>3× more likely</span> to require costly mid-development rework.
              </p>
              <div className='mt-8 space-y-5'>
                {[
                  { label: 'Reduction in feature rework', value: '70%', w: 'w-[70%]' },
                  { label: 'Faster development kickoff', value: '60%', w: 'w-[60%]' },
                  { label: 'Improved stakeholder alignment', value: '85%', w: 'w-[85%]' },
                  { label: 'Higher MVP success rate', value: '75%', w: 'w-[75%]' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className='mb-1.5 flex items-center justify-between'>
                      <span className='text-base font-medium text-secondary'>{stat.label}</span>
                      <span className='text-base font-bold text-primary'>{stat.value}</span>
                    </div>
                    <div className='h-2 rounded-full bg-lightShade1'>
                      <div className={`h-2 rounded-full bg-primary ${stat.w}`} />
                    </div>
                  </div>
                ))}
              </div>
              <p className='mt-6 text-sm text-grey'>Based on product development research from CB Insights &amp; ProductPlan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID CTA 1 ── */}
      <section className='bg-primary'>
        <div className='common-padding mx-auto max-w-screen-2xl py-14 md:py-16'>
          <div className='flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left'>
            <div className='max-w-2xl'>
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>Get started</p>
              <h2 className='mt-2 text-2xl font-bold text-white md:text-3xl'>
                Ready to validate your product idea before investing in development? Talk to our team — no commitment required.
              </h2>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'
            >
              Book a Free Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-[1fr_2fr]'>
            <div className='lg:sticky lg:top-24 lg:self-start'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
                How Our Product Discovery Workshop Works
              </h2>
              <p className='mt-4 text-lg text-mainBlack'>
                A structured approach to refining your idea, validating assumptions, and creating a clear execution
                roadmap.
              </p>
              <Link
                href='/request-a-quote'
                className='mt-6 inline-flex items-center rounded-md bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90'
              >
                Start your workshop →
              </Link>
            </div>
            <div className='space-y-0'>
              {processSteps.map((step, i) => (
                <div key={step.step} className='flex gap-5'>
                  <div className='flex flex-col items-center'>
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${i < 3 ? 'bg-primary' : 'bg-secondary'}`}
                    >
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className='mt-1 w-0.5 flex-1 bg-lightShade1' style={{ minHeight: '2.5rem' }} />
                    )}
                  </div>
                  <div className={`pb-8 ${i === processSteps.length - 1 ? 'pb-0' : ''}`}>
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
        badge='Discovery workshop'
        heading='End-to-End Product Discovery Services'
        subheading='From idea validation to a development-ready product blueprint — we cover every step of the discovery process so your team can build with confidence.'
        tabs={discoverySolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Start your workshop'
        ctaHref='/request-a-quote'
      />

      {/* ── TECHNOLOGIES ── */}
      <Technologies
        heading='Tools We Use to Structure Your Product'
        subheading='We use industry-standard tools to map ideas, define workflows, and create clear, development-ready documentation.'
      />

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden border-y border-lightShade1 bg-lightShad2'>
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Build the right product</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              Start with Clarity. Build with Confidence.
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Book a free consultation and we&apos;ll walk you through how our discovery workshop maps to your specific
              product goals.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link
                href='/request-a-quote'
                className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'
              >
                Start Discovery Workshop →
              </Link>
              <Link
                href='/book-a-free-consultation'
                className='w-full rounded-md border-2 border-secondary px-8 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white sm:w-auto'
              >
                Book a Free Call
              </Link>
            </div>
            <p className='mt-4 text-base text-grey'>No commitment · Fully confidential · Reply within 24 hours</p>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Industries we serve</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Industries We Help Shape Better Products For
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            We support startups and businesses across industries by turning early-stage ideas into structured, validated
            product plans.
          </p>
          <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {industries.map((industry) => (
              <div
                key={industry.title}
                className={`rounded-xl border border-lightShade1 p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${industry.color}`}
              >
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
            Why Choose AITC International
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            We help you reduce product risk by turning early ideas into structured, validated, and development-ready
            product strategies.
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

      {/* ── PORTFOLIO ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Case studies</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Products Shaped Through Discovery Workshops
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Real-world examples of how structured discovery leads to faster, clearer, and more successful product
            development.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                tag: 'SaaS',
                title: 'SaaS Product Definition',
                desc: 'Helped a SaaS startup refine core features and define MVP scope for a faster, more focused product launch.',
                color: 'bg-[#fff7ef]',
                tagColor: 'bg-primary/10 text-primary',
              },
              {
                tag: 'FinTech',
                title: 'FinTech Product Planning',
                desc: 'Structured user flows and compliance requirements for a financial platform before development began.',
                color: 'bg-blue-50',
                tagColor: 'bg-blue-100 text-blue-700',
              },
              {
                tag: 'Marketplace',
                title: 'Marketplace Product Strategy',
                desc: 'Defined core marketplace logic and reduced unnecessary feature scope, cutting development time by 40%.',
                color: 'bg-purple-50',
                tagColor: 'bg-purple-100 text-purple-700',
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl border border-lightShade1 p-6 ${item.color}`}>
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${item.tagColor}`}>
                  {item.tag}
                </span>
                <h3 className='mt-4 text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POST REVIEWS CTA ── */}
      <PostReviewsCTA
        badge='Product Discovery Workshop'
        heading='Ready to Build the Right Product?'
        description='Start with clarity. Validate your idea, define your MVP, and move into development with confidence. Our discovery workshop gives you the structure and direction to build smarter from day one.'
        primaryLabel='Book a Free Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Start Discovery Workshop'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description='Product discovery is the starting point. From MVP development to full SaaS platforms, our team supports your entire product journey — from idea to launch and beyond.'
        theme='light'
        items={[
          {
            iconBg: 'bg-[#fff3e8]',
            iconColor: 'text-[#ff7500]',
            title: 'MVP Development',
            desc: 'Turn your validated product plan into a working MVP, fast.',
            href: '/service/mvp-development',
          },
          {
            iconBg: 'bg-[#f1eef8]',
            iconColor: 'text-[#3d2d72]',
            title: 'SaaS Development',
            desc: 'Scale from MVP into a full multi-tenant SaaS platform.',
            href: '/service/saas-development',
          },
          {
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'Enterprise Software Development',
            desc: 'Custom enterprise solutions built around your validated workflows.',
            href: '/service/enterprise-software-development',
          },
          {
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            title: 'Dedicated Development Team',
            desc: 'Long-term engineers embedded in your product team post-discovery.',
            href: '/service/dedicated-development-team',
          },
          {
            iconBg: 'bg-teal-100',
            iconColor: 'text-teal-600',
            title: 'UI/UX Design',
            desc: 'User research, wireframes, and interface design from your product blueprint.',
            href: '/services/ui-ux-design',
          },
          {
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600',
            title: 'AI Software Development',
            desc: 'Add AI capabilities to your product with a validated technical foundation.',
            href: '/service/ai-software-development',
          },
        ]}
      />

      {/* ── FINAL CTA + FORM ── */}
      <section className='relative overflow-hidden bg-secondary text-white'>
        <div className='pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-primary/10 blur-3xl' />
        <svg
          className='absolute inset-x-0 top-0 h-32 w-full opacity-20'
          viewBox='0 0 1440 128'
          fill='none'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path d='M0 80 L360 30 L720 90 L1080 20 L1440 70' stroke='#486581' strokeWidth='1' />
        </svg>
        <div className='common-padding relative mx-auto max-w-screen-2xl py-20 md:py-28'>
          <div className='grid items-start gap-10 lg:grid-cols-[2fr_3fr]'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Start your project</p>
              <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>Ready to Build the Right Product?</h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Start with clarity. Validate your idea, define your MVP, and move into development with confidence.
                Share your concept and we&apos;ll come back with a scope and timeline — no obligation.
              </p>
              <ul className='mt-8 space-y-3 text-white/75'>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Free discovery call included</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Development-ready documentation</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> NDA signed before any discussion</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Reply within 1 business day</li>
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
              preselectedService='Product Discovery Workshop'
              preselectedIndustry='Technology'
              formName='bofu-product-discovery-workshop'
              heading='Book a Free Consultation'
              subheading="Tell us your product idea and we'll respond with a discovery workshop plan within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Start Discovery' quoteHref='/request-a-quote' />
    </>
  );
}
