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
  title: 'AI Software Development Services | Custom AI Solutions | AITC',
  description:
    'Custom AI software development services — intelligent applications, machine learning models, generative AI, and automation solutions built for real business outcomes. Book a free consultation.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/ai-software-development`,
  },
  openGraph: {
    title: 'AI Software Development Services | Custom AI Solutions | AITC',
    description:
      'Build intelligent software solutions that automate workflows, improve decision-making, and create personalized user experiences with advanced AI technologies.',
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/ai-software-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const aiSolutionTabs: SolutionTab[] = [
  {
    label: 'AI Product Discovery & Strategy',
    desc: 'We analyze your business goals, data availability, user needs, and automation opportunities to define the right AI development roadmap — before any model or code is written.',
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
    label: 'Custom AI Software Development',
    desc: 'Build tailored AI-powered applications that solve specific business challenges, enhance operations, and improve customer experiences — engineered around your data and workflows.',
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
    label: 'Generative AI Development',
    desc: 'Develop AI solutions powered by large language models for content generation, chatbots, knowledge assistants, workflow automation, and intelligent search tailored to your business.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
        />
      </svg>
    ),
  },
  {
    label: 'Machine Learning Solutions',
    desc: 'Create machine learning models that analyze data, detect patterns, predict outcomes, and support smarter business decisions — built on your existing data assets.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
  },
  {
    label: 'AI Chatbot & Virtual Assistant',
    desc: 'Build intelligent conversational systems that improve customer support, automate responses, and deliver personalized user interactions across web, mobile, and messaging channels.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
        />
      </svg>
    ),
  },
  {
    label: 'AI Integration & Automation',
    desc: 'Integrate AI into existing software, CRMs, ERPs, SaaS platforms, and business workflows to improve efficiency, eliminate manual work, and unlock new operational capabilities.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
        />
      </svg>
    ),
  },
];

const whyAI = [
  {
    title: 'Automate Repetitive Work',
    desc: 'Reduce manual tasks across customer support, operations, reporting, data processing, and internal workflows. This allows teams to save time, increase productivity, and focus on strategic business initiatives instead of routine tasks.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495' />
      </svg>
    ),
  },
  {
    title: 'Improve Decision-Making',
    desc: 'Use AI-driven analytics and predictions to identify trends, reduce uncertainty, and make better business decisions. Access real-time insights that help leaders respond faster to changing market conditions and customer behavior.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    title: 'Enhance Customer Experience',
    desc: 'Deliver personalized recommendations, faster responses, intelligent search, and more relevant digital interactions. AI helps create seamless customer journeys that improve satisfaction, engagement, and long-term loyalty.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z' />
      </svg>
    ),
  },
  {
    title: 'Increase Operational Efficiency',
    desc: 'Streamline business processes, reduce errors, and help teams focus on higher-value work. By optimizing workflows and resource allocation, businesses can achieve greater efficiency while lowering operational costs.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z' />
      </svg>
    ),
  },
  {
    title: 'Create Competitive Advantage',
    desc: 'Adopt AI solutions that help your business innovate faster, improve service delivery, and stay ahead in your market. Leveraging AI enables organizations to adapt quickly to industry changes and uncover new growth opportunities.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: 'AI Opportunity Discovery',
    desc: 'We assess your business goals, workflows, data sources, and automation opportunities to identify high-impact AI use cases.',
  },
  {
    step: '02',
    title: 'Requirement & Data Assessment',
    desc: 'Our team evaluates technical requirements, data quality, integrations, and system dependencies before development begins.',
  },
  {
    step: '03',
    title: 'Solution Architecture',
    desc: 'We design the AI system architecture, define model requirements, plan integrations, and select the right technology stack.',
  },
  {
    step: '04',
    title: 'AI Software Development',
    desc: 'Our developers build the application, integrate AI models, and create the core features needed for your business use case.',
  },
  {
    step: '05',
    title: 'Model Testing & Quality Assurance',
    desc: 'We test performance, accuracy, usability, security, and reliability to ensure the solution works effectively in real-world conditions.',
  },
  {
    step: '06',
    title: 'Deployment & Integration',
    desc: 'The AI software is deployed into your environment and integrated with existing platforms, tools, and workflows.',
  },
  {
    step: '07',
    title: 'Optimization & Continuous Improvement',
    desc: 'We monitor performance, refine AI outputs, improve workflows, and support future enhancements as your business grows.',
  },
];

const industries = [
  {
    title: 'Healthcare AI Solutions',
    desc: 'AI-powered tools for patient management, medical data analysis, appointment automation, and healthcare workflow optimization.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    title: 'FinTech AI Software',
    desc: 'Intelligent platforms for fraud detection, risk analysis, customer insights, financial automation, and investment support.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' />
      </svg>
    ),
  },
  {
    title: 'E-commerce AI Applications',
    desc: 'AI solutions for product recommendations, customer personalization, inventory forecasting, and automated support.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Education & E-Learning',
    desc: 'AI-powered learning platforms, personalized tutoring systems, assessment tools, and student engagement solutions.',
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    title: 'Real Estate AI Software',
    desc: 'Tools for property recommendations, lead scoring, market analysis, document automation, and customer communication.',
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
    desc: 'Optimize route planning, demand forecasting, inventory management, shipment tracking, and operational efficiency with AI.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' />
      </svg>
    ),
  },
  {
    title: 'HR & Recruitment AI',
    desc: 'Intelligent solutions for candidate screening, employee engagement, workforce analytics, and HR automation.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    icon: (
      <svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    title: 'Travel & Hospitality',
    desc: 'AI tools for booking recommendations, customer support, pricing optimization, and personalized travel experiences.',
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
    title: 'Business-First AI Approach',
    desc: 'We focus on AI solutions that solve real business problems instead of adding technology without purpose. Every model, integration, and feature is designed around measurable outcomes.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' />
      </svg>
    ),
  },
  {
    title: 'Custom AI Development Expertise',
    desc: 'Our team builds AI-powered software tailored to your workflows, users, data, and long-term goals — not generic solutions adapted to fit your use case.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
      </svg>
    ),
  },
  {
    title: 'Secure & Reliable Implementation',
    desc: 'We design AI systems with security, performance, usability, and responsible implementation in mind — following best practices for data handling and model governance.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Full-Cycle Development Team',
    desc: 'Work with experienced developers, designers, project managers, AI consultants, and software architects — all under one roof with a single point of contact.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' />
      </svg>
    ),
  },
  {
    title: 'Seamless System Integration',
    desc: 'We connect AI solutions with your existing tools, platforms, databases, and business processes to ensure smooth adoption without disrupting current operations.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    title: 'Long-Term Optimization Support',
    desc: 'We continue improving your AI software after launch through monitoring, model retraining, performance enhancements, and ongoing optimization as your data and business evolves.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How long does it take to build AI software?',
    answer:
      'The timeline depends on project complexity, data requirements, features, integrations, and AI model needs. A focused AI feature or chatbot typically takes 6–12 weeks. A full custom AI software platform with model training, integrations, and dashboards can range from 16–32+ weeks. We provide a detailed timeline estimate after a free scoping call.',
  },
  {
    question: 'How much does AI software development cost?',
    answer:
      'The cost depends on the type of AI solution, required features, data complexity, integrations, and development scope. AI-powered features integrated into existing software typically start from $15K–$30K. Fully custom AI platforms with model training and enterprise integrations can range from $60K–$200K+. We provide a fixed-price estimate after a discovery call.',
  },
  {
    question: 'Do you build AI chatbots and virtual assistants?',
    answer:
      'Yes. We develop AI chatbots, virtual assistants, knowledge assistants, and conversational AI solutions powered by large language models for different business use cases — including customer support, internal knowledge bases, lead qualification, and workflow automation.',
  },
  {
    question: 'Do I need my own data to build AI software?',
    answer:
      'Not always. Some AI solutions can use existing foundation models and third-party AI APIs (such as OpenAI or Hugging Face) without requiring your own training data. Others — such as custom machine learning models for prediction or classification — may require your business data for better accuracy and personalization. We assess your data situation during discovery.',
  },
  {
    question: 'How do you ensure AI software is secure?',
    answer:
      'We follow secure development practices, protect sensitive data with encryption and access controls, manage user permissions carefully, and test the system for vulnerabilities before deployment. We also apply responsible AI practices to ensure model outputs are reliable and safe for your users.',
  },
];

export default function AISoftwareDevelopmentPage() {
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
                  AI Software Development Services
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]'>
                  AI Software Development for{' '}
                  <span className='text-primary'>Smarter Business Growth</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl'>
                  Build intelligent software solutions that automate workflows, improve decision-making, and create
                  personalized user experiences with advanced AI technologies.
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
                    Get AI Project Estimate →
                  </Link>
                </div>
                <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70'>
                  <li><span className='text-primary'>✓</span> AI Solutions Delivered</li>
                  <li><span className='text-primary'>✓</span> Experienced AI Developers</li>
                  <li><span className='text-primary'>✓</span> Custom Software Expertise</li>
                  <li><span className='text-primary'>✓</span> ISO Certified</li>
                </ul>
              </div>

              {/* Right — AI model pipeline card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-md'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/20'>
                        <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.7-1.4 2.7H4.198c-1.43 0-2.4-1.7-1.4-2.7L5 14.5' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>AI Pipeline</p>
                        <p className='text-sm font-semibold text-white'>Live model performance</p>
                      </div>
                    </div>
                    <div className='space-y-2.5'>
                      {[
                        { label: 'Automation Rate', value: '87%', change: '+34%', up: true },
                        { label: 'Prediction Accuracy', value: '94.2%', change: '+12%', up: true },
                        { label: 'Avg. Response Time', value: '0.4s', change: '-61%', up: true },
                        { label: 'Tasks Automated / Day', value: '12,400', change: '+210%', up: true },
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
                        <p className='text-xs text-white/50'>Model uptime</p>
                      </div>
                      <div className='text-center'>
                        <p className='text-2xl font-bold text-white'>&lt;1s</p>
                        <p className='text-xs text-white/50'>Inference latency</p>
                      </div>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-primary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>NDA before discussion</p>
                    <p className='text-[10px] text-white/70'>Your IP stays protected</p>
                  </div>
                  <div className='absolute -right-4 -top-4 rounded-xl bg-white px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-secondary'>Free AI Consultation</p>
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
              { value: '150+', label: 'AI solutions delivered' },
              { value: '96%', label: 'Client satisfaction rate' },
              { value: '10 yrs', label: 'Industry experience' },
              { value: '40%', label: 'Avg. efficiency gain' },
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
                AI Development Services Built Around Your Business Goals
              </h2>
              <p className='mt-4 text-base leading-relaxed text-grey'>
                From AI strategy and model integration to custom software development, automation, and deployment, we help
                businesses turn artificial intelligence into practical, scalable digital solutions.
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
                  title: 'AI Product Discovery & Strategy',
                  desc: 'We analyze your business goals, data availability, user needs, and automation opportunities to define the right AI development roadmap.',
                },
                {
                  num: '02',
                  title: 'AI Consulting Services',
                  desc: 'Our AI consultants help identify use cases, select technologies, evaluate feasibility, and plan implementation strategies that align with your business objectives.',
                },
                {
                  num: '03',
                  title: 'Custom AI Software Development',
                  desc: 'Build tailored AI-powered applications that solve specific business challenges, enhance operations, and improve customer experiences.',
                },
                {
                  num: '04',
                  title: 'Generative AI Development',
                  desc: 'Develop AI solutions powered by large language models for content generation, chatbots, knowledge assistants, workflow automation, and intelligent search.',
                },
                {
                  num: '05',
                  title: 'Machine Learning Solutions',
                  desc: 'Create machine learning models that analyze data, detect patterns, predict outcomes, and support smarter business decisions.',
                },
                {
                  num: '06',
                  title: 'AI Chatbot & Virtual Assistant Development',
                  desc: 'Build intelligent conversational systems that improve customer support, automate responses, and deliver personalized user interactions.',
                },
                {
                  num: '07',
                  title: 'AI Integration & Automation',
                  desc: 'Integrate AI into existing software, CRMs, ERPs, SaaS platforms, and business workflows to improve efficiency and reduce manual work.',
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

      {/* ── WHY BUILD AI SOFTWARE ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            Why Businesses Are Investing in AI Software
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            AI-powered software helps companies automate complex processes, unlock insights from data, and deliver faster,
            more personalized digital experiences.
          </p>
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {whyAI.map((item) => (
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
              <p className='text-xs font-bold uppercase tracking-widest text-white/70'>AI Strategy</p>
              <h2 className='mt-2 text-2xl font-bold text-white md:text-3xl'>
                Let&apos;s discuss your AI project and create a clear roadmap for building intelligent, business-ready
                software.
              </h2>
            </div>
            <Link
              href='/book-a-free-consultation'
              className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'
            >
              Schedule an AI Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>
            How We Build AI Software That Delivers Real Value
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Our AI software development process focuses on identifying the right use cases, building reliable solutions,
            and deploying AI systems that support measurable business outcomes.
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
        badge='AI solutions'
        heading='End-to-End AI Software Development Services'
        subheading='From AI strategy and model selection to custom development, deployment, and optimization — start with what you need and scale as your business grows.'
        tabs={aiSolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get a project estimate'
        ctaHref='/request-a-quote'
      />

      {/* ── TECHNOLOGIES ── */}
      <Technologies
        heading='Technologies We Use for AI Software Development'
        subheading='We use modern AI frameworks, cloud platforms, and software technologies to build intelligent applications that are secure, reliable, and ready for real-world use.'
      />

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden bg-lightShad2'>
        <div className='pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-primary/5 blur-2xl' />
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Ready to build?</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>
              Turn Your AI Idea into a Practical Software Solution
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Let&apos;s turn your AI idea into a practical software solution built around your business goals with expert
              strategy, development, and long-term support.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link
                href='/request-a-quote'
                className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'
              >
                Discuss Your AI Software Project →
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
            AI Software Development Across Industries
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Every industry has unique challenges, workflows, and data opportunities, so we build AI software tailored to
            your market, users, and business goals.
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
            Why Choose AITC for AI Software Development
          </h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Experienced AI engineers, business-focused delivery, and full IP ownership — without the rates you&apos;d pay
            in the UK, US, or Australia.
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
        badge='AI Software Development'
        heading='Ready to Transform Your Business with Intelligent AI Software?'
        description='Turn your AI idea into a practical, high-performing software solution with expert strategy, development, and long-term support. Our team handles everything from concept to optimization.'
        primaryLabel='Schedule a Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Get a Free Project Estimate'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description='AI development is one part of a broader technology strategy. From SaaS platforms to mobile apps and custom software, our Nepal-based engineering team covers every layer of your product stack — at 70% less than local development rates.'
        theme='light'
        items={[
          {
            iconBg: 'bg-[#fff3e8]',
            iconColor: 'text-[#ff7500]',
            title: 'SaaS Development',
            desc: 'Cloud-native subscription platforms built for scale and recurring revenue.',
            href: '/service/saas-development',
          },
          {
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: 'Mobile App Development',
            desc: 'iOS and Android apps with AI-powered features built in from day one.',
            href: '/mobile-application-development',
          },
          {
            iconBg: 'bg-[#f1eef8]',
            iconColor: 'text-[#3d2d72]',
            title: 'MVP Development',
            desc: 'Validated minimum viable product to test your AI concept before full build.',
            href: '/service/mvp-development',
          },
          {
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            title: 'Custom Software Development',
            desc: 'End-to-end software built around your unique business processes and data.',
            href: '/custom-software-development',
          },
          {
            iconBg: 'bg-teal-100',
            iconColor: 'text-teal-600',
            title: 'Dedicated Development Team',
            desc: 'Long-term AI engineers embedded in your product or engineering team.',
            href: '/services/dedicated-development-team',
          },
          {
            iconBg: 'bg-orange-100',
            iconColor: 'text-orange-600',
            title: 'Cloud & DevOps',
            desc: 'Cloud infrastructure and MLOps pipelines for reliable AI deployment.',
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
                Let&apos;s Scope Your AI Software Project
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Share your requirements and we&apos;ll come back with a solution recommendation, timeline, and cost range
                — no obligation, no commitment.
              </p>
              <ul className='mt-8 space-y-3 text-white/75'>
                <li className='flex items-center gap-2'>
                  <span className='text-primary'>✓</span> Free AI discovery call included
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
              preselectedService='AI Software Development'
              preselectedIndustry='Technology'
              formName='bofu-ai-software-development'
              heading='Get your AI project estimate'
              subheading="Tell us your requirements and we'll respond with a solution recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get AI Estimate' quoteHref='/request-a-quote' />
    </>
  );
}
