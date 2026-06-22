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
  title: 'MVP Development Services for Startups | Build & Launch Fast | AITC',
  description:
    'Expert MVP development services for startups and growing businesses. Validate your idea, launch faster, and reduce risk with a scalable minimum viable product built by experienced product developers.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/mvp-development`,
  },
  openGraph: {
    title: 'MVP Development Services for Startups | Build & Launch Fast | AITC',
    description:
      "Validate your idea faster with a scalable MVP. Launch quickly, gather user feedback, and reduce development risk with AITC's end-to-end MVP development services.",
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL || 'https://aitc.ai/'}service/mvp-development`,
    type: 'website',
    siteName: 'AITC International',
  },
};

const mvpSolutionTabs: SolutionTab[] = [
  {
    label: 'Product Discovery',
    desc: 'Before development begins, we conduct market research, competitor analysis, user research, and feature prioritization to ensure your MVP solves a real problem and meets actual customer needs.',
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
    label: 'Web MVP Development',
    desc: 'Build fast, scalable, and secure web applications with essential features that allow you to launch quickly and validate your business idea with real users.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
    label: 'Mobile MVP Development',
    desc: 'Develop iOS and Android MVP applications that deliver a seamless user experience while keeping development costs under control — using React Native or Flutter for cross-platform efficiency.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3'
        />
      </svg>
    ),
  },
  {
    label: 'SaaS MVP Development',
    desc: 'Launch subscription-based software products with core features that help you acquire early adopters and validate recurring revenue models before a full-scale build.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
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
    label: 'UI/UX Design for MVPs',
    desc: 'Create intuitive user experiences through wireframing, prototyping, user flow design, and interface optimization — making sure your MVP is usable and engaging from day one.',
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
    label: 'MVP Scaling & Optimization',
    desc: 'Once your MVP gains traction, we help improve performance, add new features, optimize infrastructure, and prepare your product for the next stage of growth.',
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

const whyMVP = [
  {
    title: 'Validate Market Demand',
    desc: 'Test your product idea with real users and collect valuable feedback before making major investments in full-scale development.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Reduce Development Costs',
    desc: "Focus only on essential features and avoid spending resources on unnecessary functionality — build what matters, skip what doesn't.",
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    title: 'Launch Faster',
    desc: 'Get your product into the market quickly and start learning from actual customer behavior — before competitors catch up or market conditions change.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
  {
    title: 'Attract Investors',
    desc: 'A working MVP demonstrates traction, market validation, and business potential to investors — far more convincing than a pitch deck alone.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Minimize Risk',
    desc: 'Identify usability issues, technical challenges, and market opportunities early — before committing full budget to a product the market may not want.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
];

const processSteps = [
  { step: '01', timing: 'Week 1', title: 'Discovery Workshop', desc: 'We analyze your business goals, target audience, competitors, and product vision to build a shared understanding before any code is written.' },
  { step: '02', timing: 'Week 1–2', title: 'Feature Prioritization', desc: "Our team identifies must-have features that deliver maximum value while keeping development lean — cutting everything that doesn't validate the core idea." },
  { step: '03', timing: 'Week 2–3', title: 'Wireframing & UX Design', desc: 'We create user flows, wireframes, and prototypes to visualize the product before development starts — reducing costly rework later.' },
  { step: '04', timing: 'Weeks 3–N', title: 'MVP Development', desc: 'Our developers build the core functionality using scalable technologies and agile sprints, with working demos every 2 weeks.' },
  { step: '05', timing: 'Pre-launch', title: 'Testing & QA', desc: 'Every MVP undergoes extensive testing to ensure performance, usability, security, and reliability before it reaches real users.' },
  { step: '06', timing: 'Launch', title: 'Launch & Feedback', desc: 'We deploy your MVP and help you collect feedback from real users to guide future improvements and validate product-market fit.' },
  { step: '07', timing: 'Post-launch', title: 'Product Scaling', desc: 'Based on market validation and user insights, we enhance features and prepare your product for the next stage of growth.' },
];

const industries = [
  { title: 'Healthcare', desc: 'Patient management, telemedicine, and digital health MVPs built HIPAA-ready from day one.', color: 'bg-red-50', iconColor: 'text-red-500', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' /></svg>) },
  { title: 'FinTech', desc: 'Payment platforms, lending tools, and investment MVPs with secure financial architecture.', color: 'bg-blue-50', iconColor: 'text-blue-500', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' /></svg>) },
  { title: 'Education', desc: 'EdTech MVPs — LMS platforms, tutoring marketplaces, and online learning tools.', color: 'bg-yellow-50', iconColor: 'text-yellow-600', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' /></svg>) },
  { title: 'Logistics', desc: 'Fleet tracking, delivery management, and supply chain MVPs with real-time visibility.', color: 'bg-orange-50', iconColor: 'text-orange-500', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' /></svg>) },
  { title: 'Real Estate', desc: 'Property listing platforms, CRM tools, and investment analysis MVPs.', color: 'bg-green-50', iconColor: 'text-green-500', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' /></svg>) },
  { title: 'E-Commerce', desc: 'Marketplace MVPs, subscription commerce, and D2C storefronts built to validate quickly.', color: 'bg-pink-50', iconColor: 'text-pink-500', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' /></svg>) },
  { title: 'Travel', desc: 'Booking engines, travel planning tools, and hospitality MVPs with great UX.', color: 'bg-teal-50', iconColor: 'text-teal-500', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5' /></svg>) },
  { title: 'HR Tech', desc: 'Recruitment platforms, employee engagement tools, and payroll MVPs built for scale.', color: 'bg-purple-50', iconColor: 'text-purple-500', icon: (<svg className='size-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' /></svg>) },
];

const whyAitc = [
  { title: 'Startup-Focused Approach', desc: "We understand startup challenges and build MVPs designed for validation, growth, and investor readiness — not over-engineered products that take too long to ship.", icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' /></svg>) },
  { title: 'Rapid Development Cycles', desc: 'Our agile process helps startups launch products faster and gain market feedback quickly — with working demos delivered every 2 weeks throughout the build.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' /></svg>) },
  { title: 'Scalable Architecture', desc: "We build MVPs with future growth in mind — ensuring your product can scale seamlessly as your user base expands without requiring a full rebuild.", icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' /></svg>) },
  { title: 'Dedicated Product Team', desc: 'Work with experienced designers, developers, project managers, and product consultants — all aligned to your MVP goals from day one.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' /></svg>) },
  { title: 'Agile Methodology', desc: "Transparent communication, continuous improvements, and flexible development processes so your MVP evolves based on feedback — not a fixed spec from week one.", icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' /></svg>) },
  { title: 'End-to-End Product Support', desc: 'From idea validation and development to launch, optimization, and scaling — we support your entire product journey, not just the build phase.', icon: (<svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' /></svg>) },
];

const faqs = [
  { question: 'What is MVP development?', answer: 'An MVP (Minimum Viable Product) is a version of your product with just enough features to be usable by early customers, who can then provide feedback for future development. The goal is to validate your idea with real users while minimizing time and cost.' },
  { question: 'How long does it take to build an MVP?', answer: 'Most MVPs take between 8–16 weeks depending on complexity, the number of features, and integrations required. After a discovery session we provide a detailed timeline. Many of our clients go from concept to live product in under 12 weeks.' },
  { question: 'How much does MVP development cost?', answer: 'MVP development typically starts from $15K–$25K for a focused web or mobile product. More complex MVPs with third-party integrations or custom backend logic run $30K–$60K. We provide a fixed-price estimate after a free scoping call so there are no surprises.' },
  { question: 'What features should an MVP include?', answer: "An MVP should include only the core features that directly test your primary business hypothesis. We use a feature prioritization framework during discovery to identify what's essential vs. what can come in version 2 — keeping the build lean and the launch fast." },
  { question: 'Can you scale my MVP later?', answer: "Yes. We build MVPs with scalable architecture from the start, so once your product gains traction you're not stuck with technical debt or a rebuild. We continue as your development partner through growth phases." },
  { question: 'Do you sign NDAs?', answer: 'Yes. We sign NDAs before discussing any project details. Your idea, business model, and product specifications remain fully confidential.' },
  { question: 'Do you provide UI/UX design?', answer: 'Yes. UI/UX design is included as part of our MVP development process. We create wireframes, user flows, prototypes, and high-fidelity interfaces before development begins — ensuring the product is intuitive from launch.' },
  { question: 'Can you build both web and mobile MVPs?', answer: 'Yes. We develop web MVPs using React and Next.js, and mobile MVPs using React Native or Flutter for iOS and Android. We can also build both simultaneously on a shared backend to keep costs efficient.' },
];

export default function MVPDevelopmentPage() {
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
                  MVP Development Services
                </span>
                <h1 className='mb-6 text-4xl font-bold leading-tight text-secondary md:text-5xl lg:text-[3.25rem]'>
                  MVP Development for Startups{' '}
                  <span className='text-primary'>&amp; Growing Businesses</span>
                </h1>
                <p className='mb-8 max-w-xl text-lg leading-relaxed text-mainBlack md:text-xl'>
                  Validate your idea faster with a scalable MVP built by experienced product developers. Launch quickly,
                  gather user feedback, and reduce development risk.
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Link href='/book-a-free-consultation' className='rounded-md bg-primary px-7 py-3.5 text-center font-semibold text-white transition-opacity hover:opacity-90'>
                    Book Free Consultation
                  </Link>
                  <Link href='/request-a-quote' className='rounded-md border-2 border-secondary px-7 py-3.5 text-center font-medium text-secondary transition-colors hover:bg-secondary hover:text-white'>
                    Get MVP Cost Estimate →
                  </Link>
                </div>
                <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mainBlack'>
                  <li><span className='text-primary'>✓</span> Projects Delivered</li>
                  <li><span className='text-primary'>✓</span> Years of Experience</li>
                  <li><span className='text-primary'>✓</span> 4.9 Client Rating</li>
                  <li><span className='text-primary'>✓</span> ISO Certified</li>
                </ul>
              </div>

              {/* Right — MVP launch timeline card */}
              <div className='hidden lg:block'>
                <div className='relative mx-auto max-w-sm'>
                  <div className='rounded-2xl border border-lightShade1 bg-white p-7 shadow-2xl'>
                    <div className='mb-5 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-full bg-primary/10'>
                        <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
                        </svg>
                      </div>
                      <div>
                        <p className='text-xs font-bold uppercase tracking-widest text-primary'>MVP Launch Tracker</p>
                        <p className='text-sm font-semibold text-secondary'>Your path to market</p>
                      </div>
                    </div>
                    <div className='space-y-3'>
                      {[
                        { week: 'Week 1–2', label: 'Discovery & Feature Plan', done: true },
                        { week: 'Week 2–4', label: 'UX Design & Prototype', done: true },
                        { week: 'Week 4–10', label: 'Core Development', done: true },
                        { week: 'Week 10–11', label: 'Testing & QA', done: false },
                        { week: 'Week 12', label: '🚀 Live Product Launch', done: false },
                      ].map((item) => (
                        <div key={item.label} className='flex items-center gap-3'>
                          <div className={`flex size-5 shrink-0 items-center justify-center rounded-full ${item.done ? 'bg-green-500' : 'border-2 border-lightShade1 bg-white'}`}>
                            {item.done && (
                              <svg className='size-3 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                              </svg>
                            )}
                          </div>
                          <div className='flex-1'>
                            <p className='text-sm font-semibold text-secondary'>{item.label}</p>
                            <p className='text-xs text-grey'>{item.week}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-5 rounded-lg bg-primary/10 px-4 py-3 text-center'>
                      <p className='text-sm font-bold text-primary'>Average MVP Launch: 10–12 weeks</p>
                    </div>
                  </div>
                  <div className='absolute -bottom-4 -left-6 rounded-xl bg-secondary px-4 py-2.5 shadow-lg'>
                    <p className='text-xs font-bold text-white'>From $15K fixed-price</p>
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
              { value: '150+', label: 'MVPs launched' },
              { value: '12 wks', label: 'Average time to launch' },
              { value: '4.9 / 5', label: 'Average client rating' },
              { value: '80%', label: 'MVPs go to full product' },
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

      {/* ── SERVICES ── */}
      <section className='common-padding bg-lightShad2 py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-12 max-w-3xl'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>What we offer</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>Our MVP Development Services</h2>
            <p className='mt-4 text-lg text-mainBlack'>
              Turn your idea into a functional product with end-to-end MVP development services. From concept validation
              to product launch and scaling, we help startups build market-ready solutions efficiently.
            </p>
            <Link href='/book-a-free-consultation' className='mt-6 inline-flex items-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-800'>
              Book a Consultation →
            </Link>
          </div>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {[
              { num: '01', title: 'Product Discovery & Validation', desc: 'Market research, competitor analysis, user research, and feature prioritization to ensure your MVP solves a real problem.', accent: 'border-t-primary' },
              { num: '02', title: 'MVP Consulting', desc: 'Define product requirements, technology choices, development roadmaps, and go-to-market strategies to maximize success.', accent: 'border-t-blue-400' },
              { num: '03', title: 'Web MVP Development', desc: 'Fast, scalable, and secure web applications with essential features to launch quickly and validate your business idea.', accent: 'border-t-purple-400' },
              { num: '04', title: 'Mobile MVP Development', desc: 'iOS and Android MVP applications that deliver a seamless user experience while keeping development costs under control.', accent: 'border-t-green-400' },
              { num: '05', title: 'SaaS MVP Development', desc: 'Launch subscription-based software products with core features that help you acquire early adopters and validate revenue.', accent: 'border-t-orange-400' },
              { num: '06', title: 'UI/UX Design for MVPs', desc: 'Wireframing, prototyping, user flow design, and interface optimization to create intuitive first-user experiences.', accent: 'border-t-pink-400' },
              { num: '07', title: 'MVP Scaling & Optimization', desc: 'Once your MVP gains traction, we improve performance, add features, optimize infrastructure, and prepare for growth.', accent: 'border-t-teal-400' },
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

      {/* ── WHY BUILD AN MVP ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>The business case</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>Why Build an MVP?</h2>
              <p className='mt-4 text-lg text-mainBlack'>
                Building a Minimum Viable Product is one of the most effective ways to validate a business idea before
                investing heavily in full-scale development.
              </p>
              <div className='mt-8 space-y-6'>
                {whyMVP.map((item) => (
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
            {/* Right — stat visual */}
            <div className='rounded-2xl border border-lightShade1 bg-lightShad2 p-8'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Why MVPs succeed</p>
              <p className='mt-3 text-2xl font-bold text-secondary'>
                Companies that launch an MVP are{' '}
                <span className='text-primary'>3× more likely</span> to secure funding than those that don&apos;t.
              </p>
              <div className='mt-8 space-y-5'>
                {[
                  { label: 'Faster time to first revenue', value: '65%', w: 'w-[65%]' },
                  { label: 'Lower initial development cost', value: '72%', w: 'w-[72%]' },
                  { label: 'Better product-market fit', value: '58%', w: 'w-[58%]' },
                  { label: 'Higher investor confidence', value: '80%', w: 'w-[80%]' },
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
              <p className='mt-6 text-sm text-grey'>Based on startup success data from CB Insights &amp; Failory</p>
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
                Ready to validate your idea and launch your MVP? Talk to our team — no commitment, no pitch.
              </h2>
            </div>
            <Link href='/book-a-free-consultation' className='shrink-0 rounded-md bg-white px-8 py-3.5 font-semibold text-primary transition-opacity hover:opacity-90'>
              Book a Free Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS — vertical timeline ── */}
      <section className='common-padding bg-white py-20 md:py-28'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-[1fr_2fr]'>
            <div className='lg:sticky lg:top-24 lg:self-start'>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>How we work</p>
              <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>How We Build Successful MVPs</h2>
              <p className='mt-4 text-lg text-mainBlack'>
                Our proven process helps startups move from concept to launch efficiently while maintaining product quality.
              </p>
              <Link href='/request-a-quote' className='mt-6 inline-flex items-center rounded-md bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90'>
                Get a free estimate →
              </Link>
            </div>
            <div className='space-y-0'>
              {processSteps.map((step, i) => (
                <div key={step.step} className='flex gap-5'>
                  <div className='flex flex-col items-center'>
                    <div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${i < 4 ? 'bg-primary' : 'bg-secondary'}`}>
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && <div className='mt-1 w-0.5 flex-1 bg-lightShade1' style={{ minHeight: '2.5rem' }} />}
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
        badge='MVP solutions'
        heading='End-to-End MVP Development Services'
        subheading='From product discovery to launch and scaling — start lean, validate fast, and build what your market actually wants.'
        tabs={mvpSolutionTabs}
        sectionClassName='bg-lightShad2'
        ctaLabel='Get a project estimate'
        ctaHref='/request-a-quote'
      />

      {/* ── TECHNOLOGIES ── */}
      <Technologies
        heading='Technologies for MVP Development'
        subheading='Battle-tested frontend, backend, mobile, and cloud technologies chosen for speed, scalability, and developer experience.'
      />

      {/* ── MID CTA 2 ── */}
      <section className='relative overflow-hidden border-y border-lightShade1 bg-lightShad2'>
        <div className='common-padding mx-auto max-w-screen-2xl py-16 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-xs font-bold uppercase tracking-widest text-primary'>Build your MVP</p>
            <h2 className='mt-3 text-3xl font-bold text-secondary sm:text-4xl'>Turn Your Idea Into a Working Product</h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-mainBlack'>
              Start with a free scoping call. We&apos;ll define your MVP scope, timeline, and cost — no obligation.
            </p>
            <div className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
              <Link href='/request-a-quote' className='w-full rounded-md bg-secondary px-8 py-3.5 text-center font-semibold text-white transition-colors hover:bg-purple-800 sm:w-auto'>
                Get MVP Cost Estimate →
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
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Verticals we serve</p>
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>MVP Development for Every Industry</h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            We build MVPs tailored to the compliance requirements, workflows, and user expectations of your specific industry.
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
          <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>Why Choose AITC for MVP Development</h2>
          <p className='mt-4 max-w-2xl text-lg text-mainBlack'>
            Senior engineers, startup-tested process, and full IP ownership — at 70% less than UK, US, or Australian development rates.
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
        badge='MVP Development'
        heading='Ready to Launch Your MVP?'
        description='Turn your idea into a working product with expert MVP development services. We handle everything from discovery and design to development, launch, and scaling.'
        primaryLabel='Schedule a Consultation'
        primaryHref='/book-a-free-consultation'
        secondaryLabel='Get a Free Project Estimate'
        secondaryHref='/request-a-quote'
      />

      {/* ── WE ALSO HELP WITH ── */}
      <WeHelpWith
        heading='We Also Help With'
        description="MVP development is the start of your product journey. From full SaaS platforms to mobile apps and dedicated development teams, our Nepal-based engineers support every stage — at 70% less than local development rates."
        theme='light'
        items={[
          { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'SaaS Development', desc: 'Scale your MVP into a full multi-tenant SaaS platform.', href: '/service/saas-development' },
          { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Mobile App Development', desc: 'Native iOS and Android apps built on your MVP backend.', href: '/mobile-application-development' },
          { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'Custom Software Development', desc: 'Full-scale software built around your unique business processes.', href: '/custom-software-development' },
          { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'E-Commerce Development', desc: 'Custom storefronts and marketplace platforms built for conversion.', href: '/ecommerce-development' },
          { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'Dedicated Development Team', desc: 'Long-term engineers embedded in your product team post-MVP.', href: '/services/dedicated-development-team' },
          { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'UI/UX Design', desc: 'User research, design systems, and interface design for your product.', href: '/services/ui-ux-design' },
        ]}
      />

      {/* ── FINAL CTA + FORM ── */}
      <section className='relative overflow-hidden bg-secondary text-white'>
        <div className='pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-primary/10 blur-3xl' />
        <svg className='absolute inset-x-0 top-0 h-32 w-full opacity-20' viewBox='0 0 1440 128' fill='none' preserveAspectRatio='none' aria-hidden='true'>
          <path d='M0 80 L360 30 L720 90 L1080 20 L1440 70' stroke='#486581' strokeWidth='1' />
        </svg>
        <div className='common-padding relative mx-auto max-w-screen-2xl py-20 md:py-28'>
          <div className='grid items-start gap-10 lg:grid-cols-[2fr_3fr]'>
            <div>
              <p className='text-xs font-bold uppercase tracking-widest text-primary'>Start your project</p>
              <h2 className='mt-3 text-3xl font-bold sm:text-4xl'>Ready to Launch Your MVP?</h2>
              <p className='mt-4 text-lg leading-relaxed text-white/80'>
                Turn your idea into a working product. Share your requirements and we&apos;ll come back with a scope,
                timeline, and fixed-price estimate — no obligation.
              </p>
              <ul className='mt-8 space-y-3 text-white/75'>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Free discovery call included</li>
                <li className='flex items-center gap-2'><span className='text-primary'>✓</span> Fixed-price estimate, no surprises</li>
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
              preselectedService='MVP Development'
              preselectedIndustry='Technology'
              formName='bofu-mvp-development'
              heading='Get your MVP project estimate'
              subheading="Tell us your idea and we'll respond with a scope recommendation within 24 hours."
              ctaLabel='Send my requirements'
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <StickyMobileCTA quoteLabel='Get MVP Estimate' quoteHref='/request-a-quote' />
    </>
  );
}
