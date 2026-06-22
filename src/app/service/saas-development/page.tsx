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
  title: 'SaaS Development Services | Custom SaaS Platform Development | AITC',
  description:
    'Custom SaaS development services — multi-tenant platforms, subscription applications, and cloud-native products built by experienced SaaS engineers. Book a free consultation.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/saas-development`,
  },
  openGraph: {
    title: 'SaaS Development Services | Custom SaaS Platform Development | AITC',
    description:
      'End-to-end SaaS development — from product discovery to launch and long-term growth. Multi-tenant platforms, subscription billing, and cloud-native architecture.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/saas-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const saasSolutionTabs: SolutionTab[] = [
  {
    label: 'SaaS Product Discovery',
    desc: 'We validate your product idea, identify target users, define feature requirements, and establish a development roadmap aligned with your business goals — before a single line of code is written.',
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
    label: 'Custom SaaS Development',
    desc: 'Build secure, cloud-native, and feature-rich SaaS applications tailored to your business model, workflows, and customer needs — with scalable architecture from the ground up.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
        />
      </svg>
    ),
  },
  {
    label: 'Multi-Tenant Platforms',
    desc: 'Develop SaaS solutions capable of serving multiple customers from a single platform while maintaining security, performance, and strict data isolation between tenants.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
  },
  {
    label: 'SaaS Modernization',
    desc: 'Upgrade legacy applications with modern cloud infrastructure, improved user experiences, microservices architecture, and enhanced performance without disrupting your existing customers.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        />
      </svg>
    ),
  },
  {
    label: 'UI/UX Design for SaaS',
    desc: 'Design intuitive dashboards, onboarding flows, and customer journeys that reduce churn, improve engagement, and turn new signups into long-term paying customers.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
        />
      </svg>
    ),
  },
  {
    label: 'SaaS Scaling & Optimization',
    desc: 'As your platform grows, we optimize infrastructure, improve performance, enhance security, and introduce new features to support expansion without sacrificing reliability.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
  },
];

const whySaaS = [
  {
    title: 'Recurring Revenue Model',
    desc: 'Generate predictable monthly or annual revenue through subscription-based pricing. More stable than one-time software sales and supports long-term financial forecasting.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Scalable Growth',
    desc: 'Expand your customer base without rebuilding the platform. SaaS architecture accommodates growing users, customers, and features as your business evolves.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Cloud Accessibility',
    desc: 'Allow users to access your software from anywhere via web and mobile. Cloud-based access improves flexibility for remote teams, distributed workforces, and global customers.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
  {
    title: 'Lower Maintenance Costs',
    desc: 'Centralized updates reduce maintenance overhead. Bug fixes and security improvements roll out to all users without manual installations, reducing operational costs.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
      </svg>
    ),
  },
  {
    title: 'Faster Product Improvements',
    desc: 'Deploy new features and enhancements quickly without disrupting users. Continuous improvement helps respond faster to customer feedback and changing market demands.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    timing: 'Week 1–2',
    title: 'Product Discovery',
    desc: 'We analyze your business model, target audience, competitors, and product vision to establish a strong foundation before any development begins.',
  },
  {
    step: '02',
    timing: 'Week 2–3',
    title: 'Feature Planning',
    desc: 'Our team prioritizes features based on user value, business goals, and development efficiency to create a focused, executable roadmap.',
  },
  {
    step: '03',
    timing: 'Week 3–5',
    title: 'UX/UI Design',
    desc: 'Wireframes, prototypes, user journeys, and interfaces designed to deliver a seamless customer experience that converts and retains.',
  },
  {
    step: '04',
    timing: 'Weeks 5–N',
    title: 'SaaS Development',
    desc: 'Developers build the platform using scalable architecture, modern cloud technologies, and agile sprints with demos every 2 weeks.',
  },
  {
    step: '05',
    timing: 'Pre-launch',
    title: 'Quality Assurance',
    desc: 'The platform is tested for functionality, performance, security vulnerabilities, and usability before it reaches real users.',
  },
  {
    step: '06',
    timing: 'Launch',
    title: 'Deployment & Go-Live',
    desc: 'The SaaS product is deployed to production infrastructure and prepared for real-world users with monitoring in place from day one.',
  },
  {
    step: '07',
    timing: 'Post-launch',
    title: 'Growth & Optimization',
    desc: 'We help improve performance, expand functionality, and support platform growth as your user base and revenue scales.',
  },
];

const industries = [
  {
    title: 'FinTech SaaS',
    desc: 'Secure platforms for payments, lending, investment management, and financial operations.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />
      </svg>
    ),
  },
  {
    title: 'Healthcare SaaS',
    desc: 'HIPAA-ready solutions for patient management, telemedicine, and healthcare operations.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'EdTech SaaS',
    desc: 'Learning management systems, virtual classrooms, and online education platforms.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'HR & Workforce',
    desc: 'Recruitment, employee engagement, payroll, and workforce automation solutions.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Real Estate SaaS',
    desc: 'Property management, CRM, listing platforms, and real estate analytics tools.',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Fleet management, shipment tracking, warehouse optimization, and transportation software.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'E-Commerce SaaS',
    desc: 'Subscription commerce, marketplace management, and retail automation solutions.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Travel & Hospitality',
    desc: 'Booking engines, travel management systems, and customer experience platforms.',
    color: 'bg-teal-50',
    iconColor: 'text-teal-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' />
      </svg>
    ),
  },
];

const whyAitc = [
  {
    title: 'Startup & Business Focused',
    desc: 'We build SaaS products around business goals, customer needs, and growth opportunities — not just technical specifications. Our focus is on creating software that delivers measurable value.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' />
      </svg>
    ),
  },
  {
    title: 'Scalable Architecture',
    desc: 'We develop SaaS platforms with scalability built into the architecture, allowing your product to grow as users, features, and business requirements expand — without costly rebuilds.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' />
      </svg>
    ),
  },
  {
    title: 'Dedicated SaaS Specialists',
    desc: 'Our team includes developers, designers, architects, and project managers with direct SaaS product experience — not generalist developers learning on your project.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
      </svg>
    ),
  },
  {
    title: 'Agile Development Process',
    desc: 'We maintain transparent communication, iterative delivery, and continuous collaboration throughout the project lifecycle — with working demos every 2 weeks.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' />
      </svg>
    ),
  },
  {
    title: 'Cloud-Native Expertise',
    desc: 'Our solutions are designed for AWS, Google Cloud, and Azure — built for performance, security, reliability, and cost-efficient cloud deployment from the start.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z' />
      </svg>
    ),
  },
  {
    title: 'Long-Term Product Partnership',
    desc: 'We continue supporting your SaaS product after launch through maintenance, feature enhancements, and ongoing optimization as your platform and user base grows.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How long does SaaS development take?',
    answer:
      'Timelines vary depending on complexity, features, integrations, and business requirements. A focused MVP typically takes 10–16 weeks. A full-featured SaaS platform can range from 20–40+ weeks. We provide a detailed timeline estimate after a free scoping call.',
  },
  {
    question: 'What is the difference between SaaS and traditional software?',
    answer:
      'SaaS applications are cloud-based and accessed through the internet via a browser or mobile app — users pay a recurring subscription. Traditional software is typically installed locally on a device, sold as a one-time licence. SaaS offers centralized updates, lower upfront cost for users, and recurring revenue for you as the software owner.',
  },
  {
    question: 'Can you build both web and mobile SaaS products?',
    answer:
      'Yes. We develop SaaS platforms for web, iOS, Android, and cross-platform environments. We use React Native and Flutter for mobile, sharing backend infrastructure with the web application to keep development costs efficient.',
  },
  {
    question: 'How do you ensure the SaaS platform can scale?',
    answer:
      'We use cloud-native architecture on AWS, Google Cloud, or Azure with auto-scaling, microservices where appropriate, load balancing, caching layers, and database optimization strategies. Scalability is an architecture decision made at the start, not retrofitted later.',
  },
  {
    question: 'Can existing software be converted into a SaaS platform?',
    answer:
      'Yes. We can modernize and transform legacy applications into scalable SaaS products. This typically involves re-architecting for multi-tenancy, migrating to cloud infrastructure, modernizing the UI/UX, and implementing subscription billing.',
  },
  {
    question: 'What does SaaS development cost?',
    answer:
      'A focused SaaS MVP typically starts from $25K–$50K. A full-featured SaaS platform with advanced features, integrations, and multi-tenant architecture typically runs $80K–$200K+. We provide a fixed-price estimate after a free discovery call so there are no surprises.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. We offer maintenance packages, feature enhancements, performance monitoring, and ongoing technical support after launch. Many of our clients maintain a long-term partnership with us as their product grows.',
  },
  {
    question: 'Who owns the code and IP?',
    answer:
      '100% you. Full IP transfer is signed before any work begins. The source code, database schemas, and all documentation belong to you outright — no lock-in, no recurring licence fees to us.',
  },
];

export default function SaaSDevelopmentPage() {
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
                  SaaS Development Services
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]'>
                  SaaS Development for Businesses{' '}
                  <span className='text-primary'>Ready to Scale</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl'>
                  Transform your software idea into a scalable SaaS product — subscription platforms, multi-tenant
                  applications, and cloud-native solutions built by a team that ships.
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
                    Get SaaS Project Estimate →
                  </Link>
                </div>
                <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70'>
                  <li><span className='text-primary'>✓</span> Projects Delivered</li>
                  <li><span className='text-primary'>✓</span> Years of Industry Experience</li>
                  <li><span className='text-primary'>✓</span> Dedicated SaaS Developers</li>
                  <li><span className='text-primary'>✓</span> ISO Certified</li>
                </ul>
              </div>

              {/* Right — SaaS platform metrics card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/20'>
                        <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>Platform Dashboard</p>
                        <p className='text-sm font-semibold text-white'>Your SaaS metrics</p>
                      </div>
                    </div>
                    <div className='space-y-2.5'>
                      {[
                        { label: 'Monthly Recurring Revenue', value: '$48,200', change: '+24%', up: true },
                        { label: 'Active Subscribers', value: '2,840', change: '+18%', up: true },
                        { label: 'Churn Rate', value: '1.8%', change: '-43%', up: true },
                        { label: 'Trial → Paid Rate', value: '34%', change: '+11%', up: true },
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
                        <p className='text-2xl font-bold text-white'>99.9%</p>
                        <p className='text-xs text-white/50'>Platform uptime</p>
                      </div>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-white'>&lt;2s</p>
                        <p className='text-xs text-white/50'>Avg. page load</p>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-primary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>MVP from $25K</p>
                    <p className='text-[10px] text-white/70'>fixed-price estimate</p>
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
              { value: '200+', label: 'SaaS products delivered' },
              { value: '96%', label: 'Client satisfaction rate' },
              { value: '10 yrs', label: 'Industry experience' },
              { value: '99.9%', label: 'Platform uptime SLA' },
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
                Full-Cycle SaaS Development Services
              </h2>
              <p className='mt-4 text-base leading-relaxed text-grey'>
                End-to-end SaaS application development from product strategy and architecture to launch and long-term
                product growth.
              </p>
              <Link
                href='/book-a-free-consultation'
                className='mt-6 inline-flex items-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800'
              >
                Book Free Consultation →
              </Link>
            </div>
            <div className='flex-1 grid gap-5 sm:grid-cols-2'>
              {[
                {
                  title: 'SaaS Product Discovery & Strategy',
                  desc: 'Validate product ideas, identify target users, define feature requirements, and establish a development roadmap that aligns with your business goals.',
                  num: '01',
                },
                {
                  title: 'SaaS Consulting',
                  desc: 'Expert guidance on product architecture, technology selection, monetization strategies, scalability planning, and go-to-market preparation.',
                  num: '02',
                },
                {
                  title: 'Custom SaaS Development',
                  desc: 'Build secure, cloud-native, feature-rich SaaS applications tailored to your business model, workflows, and customer needs.',
                  num: '03',
                },
                {
                  title: 'Multi-Tenant SaaS Platforms',
                  desc: 'Serve multiple customers from a single platform while maintaining strict security, performance, and data isolation between tenants.',
                  num: '04',
                },
                {
                  title: 'SaaS Application Modernization',
                  desc: 'Upgrade legacy applications with modern technologies, improved user experiences, cloud infrastructure, and enhanced performance.',
                  num: '05',
                },
                {
                  title: 'UI/UX Design for SaaS',
                  desc: 'Design intuitive dashboards, workflows, and user experiences that improve engagement, usability, and customer retention.',
                  num: '06',
                },
                {
                  title: 'SaaS Scaling & Optimization',
                  desc: 'Optimize infrastructure, improve performance, enhance security, and introduce new features as your platform and user base expands.',
                  num: '07',
                },
              ].map((service) => (
                <div key={service.num} className='group rounded-xl border border-lightShade1 bg-white p-6 transition-shadow hover:shadow-md'>
                  <span className='font-mono text-xs font-bold text-primary'>{service.num}</span>
                  <h3 className='mt-2 text-base font-bold text-secondary'>{service.title}</h3>
                  <p className='mt-2 text-base leading-relaxed text-grey'>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BUILD SAAS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Businesses Invest in SaaS Platforms
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            SaaS products provide a scalable way to deliver software, generate recurring revenue, and reach customers
            across different markets without the limitations of traditional software distribution.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whySaaS.map((item) => (
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
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>SaaS Strategy</p>
              <h2 className='mt-2 text-2xl font-bold text-white md:text-3xl'>
                Whether you&apos;re launching a new SaaS platform or modernizing an existing application, our team can help
                you build, launch, and grow with confidence.
              </h2>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'
            >
              Schedule a SaaS Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            How We Bring SaaS Products from Concept to Market
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            A proven process focused on creating reliable, scalable, and user-friendly products that support long-term
            business growth and recurring revenue.
          </p>
          <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {processSteps.slice(0, 4).map((step) => (
              <div key={step.step} className='relative rounded-xl border border-lightShade1 bg-lightShad2 p-7'>
                <div className='mb-3 flex items-center gap-3'>
                  <span className='flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white'>
                    {step.step}
                  </span>
                  <span className='font-mono text-xs text-grey'>{step.timing}</span>
                </div>
                <h3 className='text-base font-bold text-secondary'>{step.title}</h3>
                <p className='mt-2 text-base leading-relaxed text-grey'>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className='mt-5 grid gap-5 md:grid-cols-3'>
            {processSteps.slice(4).map((step) => (
              <div key={step.step} className='relative rounded-xl border border-lightShade1 bg-lightShad2 p-7'>
                <div className='mb-3 flex items-center gap-3'>
                  <span className='flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white'>
                    {step.step}
                  </span>
                  <span className='font-mono text-xs text-grey'>{step.timing}</span>
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
        badge='SaaS solutions'
        heading='End-to-End SaaS Development Services'
        subheading='From MVP discovery to multi-tenant enterprise platforms — start with what you need and scale as your business grows.'
        tabs={saasSolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get a project estimate'
        ctaHref='/request-a-quote'
      />

      {/* ── TECHNOLOGIES ── */}
      <Technologies
        heading='Technologies Powering Modern SaaS Products'
        subheading='We use battle-tested technologies chosen for scalability, performance, and developer experience — so your platform can grow without hitting walls.'
      />

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-primary/5 blur-2xl' />
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Ready to build?</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              Start Building Your SaaS Platform Today
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Work with a team of experienced professionals in creating SaaS products that scale with your business from
              day one.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link
                href='/request-a-quote'
                className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'
              >
                Discuss Your SaaS Project →
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
            Industry-Specific SaaS Solutions
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            We build SaaS platforms tailored to the compliance requirements, workflows, and user expectations of your
            specific industry.
          </p>
          <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {industries.map((industry) => (
              <div
                key={industry.title}
                className={`rounded-xl border border-lightShade1 p-6 transition-shadow hover:shadow-md ${industry.color}`}
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
            Why Businesses Choose AITC for SaaS Development
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Senior engineers, fixed-price projects, and full IP ownership — without the rates you&apos;d pay in the UK, US,
            or Australia.
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

      {/* ── MID CTA BANNER (PostReviewsCTA) ── */}
      <PostReviewsCTA
        badge='SaaS Development'
        heading='Ready to Launch a Market-Leading SaaS Product?'
        description="Turn your idea into a reliable, cloud-based SaaS platform with expert product strategy, development, and long-term support. Our team handles everything from concept to scaling."
        primaryLabel='Schedule a Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Get a Free Project Estimate'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description='SaaS development is one part of a broader technology strategy. From mobile apps to AI integrations and dedicated offshore teams, our Nepal-based engineers cover every layer of your product stack — at 70% less than local development rates.'
        theme='light'
        items={[
          {
            iconBg: 'bg-[#fff3e8]',
            iconColor: 'text-[#ff7500]',
            title: 'Custom Software Development',
            desc: 'End-to-end software built around your unique business processes.',
            href: '/custom-software-development',
          },
          {
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'Mobile App Development',
            desc: 'iOS and Android apps that extend your SaaS to mobile users.',
            href: '/mobile-application-development',
          },
          {
            iconBg: 'bg-[#f1eef8]',
            iconColor: 'text-[#3d2d72]',
            title: 'MVP Development',
            desc: 'Validated minimum viable product to test your market before full build.',
            href: '/mvp-development',
          },
          {
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            title: 'E-Commerce Development',
            desc: 'Custom storefronts and marketplace platforms built for conversion.',
            href: '/ecommerce-development',
          },
          {
            iconBg: 'bg-teal-100',
            iconColor: 'text-teal-600',
            title: 'Dedicated Development Team',
            desc: 'Long-term engineers embedded in your SaaS product team.',
            href: '/services/dedicated-development-team',
          },
          {
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600',
            title: 'Cloud & DevOps',
            desc: 'Cloud infrastructure, CI/CD pipelines, and DevOps automation.',
            href: '/managed-it-support-services/devops',
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
                Let&apos;s Scope Your SaaS Platform
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Share your requirements and we&apos;ll come back with an architecture recommendation, timeline, and cost
                range — no obligation, no commitment.
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
              {/* Compliance badges */}
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
              preselectedService='SaaS Development'
              preselectedIndustry='Technology'
              formName='bofu-saas-development'
              heading='Get your SaaS project estimate'
              subheading="Tell us your requirements and we'll respond with a solution recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get SaaS Estimate' quoteHref='/request-a-quote' />
    </>
  );
}
