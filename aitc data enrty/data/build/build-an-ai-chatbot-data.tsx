import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';

export const heroStats = [
  { value: '8+', label: 'Chatbot types we build' },
  { value: '4–16', label: 'Weeks to delivery' },
  { value: '100%', label: 'IP & code ownership' },
  { value: '$15K', label: 'Starting price' },
];

export const heroFormData: BuildHeroWithFormData = {
  badge: 'Custom AI Chatbot Development',
  badgeVariant: 'primary',
  bgVariant: 'light',
  dotColor: '#FF7500',
  heading: [{ text: 'Build an AI Chatbot That ' }, { text: 'Knows Your Business', highlight: true }],
  description:
    'Generic chatbots give generic answers. We build custom AI chatbots trained on your data — your products, policies, and processes — so every conversation feels like it came from your best team member.',
  primaryCTA: { label: 'Get Chatbot Estimate', href: '/free-project-estimate' },
  secondaryCTA: { label: 'Book a free consultation', href: '/book-a-free-consultation' },
  trustItems: ['100% IP ownership', 'Trained on your data', 'Free scoping call'],
  form: {
    preselectedService: 'Custom AI Chatbot Development',
    formName: 'hero-ai-chatbot',
    informationPlaceholder: 'Tell us about your chatbot use case — customer support, internal knowledge base, lead qualification — and what data it should be trained on...',
  },
};

export const whenCards = [
  {
    title: 'Generic chatbots can\'t answer questions about your business',
    points: [
      'Off-the-shelf bots don\'t know your products, pricing, policies, or processes — so they frustrate users instead of helping them',
      'A custom AI chatbot is trained on your own data and responds with accurate, context-aware answers every time',
    ],
  },
  {
    title: 'Your support team spends hours on repetitive questions',
    points: [
      'If 60% of incoming queries are variations of the same questions, you\'re wasting expensive human time on low-value work',
      'An AI chatbot handles the repetitive load automatically — your team focuses on complex cases that actually need a person',
    ],
  },
  {
    title: 'You need an internal knowledge assistant for your team',
    points: [
      'Staff waste time searching docs, Notion pages, and Slack threads for information that should be instantly accessible',
      'An internal AI assistant indexes your knowledge base and gives instant, cited answers to team questions',
    ],
  },
  {
    title: 'You want to qualify and convert leads around the clock',
    points: [
      'Your sales team can\'t respond to every inbound lead instantly — and slow response times kill conversion',
      'An AI chatbot qualifies visitors, answers product questions, and books discovery calls while your team sleeps',
    ],
  },
  {
    title: 'You need chatbot + voice across multiple channels',
    points: [
      'Customers reach you on your website, WhatsApp, Facebook, and by phone — expecting the same quality of service everywhere',
      'We build omnichannel AI assistants that maintain context across web, mobile, and messaging platforms',
    ],
  },
  {
    title: 'Your data must stay on your infrastructure',
    points: [
      'Healthcare, finance, and legal businesses can\'t send sensitive data to third-party LLM APIs without compliance risk',
      'We build private, self-hosted AI chatbots using open-source models that keep your data entirely on your own servers',
    ],
  },
];

export const chatbotModuleTabs: SolutionTab[] = [
  {
    label: 'Conversational AI Engine',
    desc: 'LLM-powered conversation engine with intent detection, context retention across turns, fallback handling, and configurable tone — built on GPT-4o, Claude, Gemini, or a self-hosted open-source model depending on your data privacy requirements.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' />
      </svg>
    ),
  },
  {
    label: 'Knowledge Base & RAG',
    desc: 'Retrieval-Augmented Generation pipeline that ingests your documents, PDFs, help articles, product catalogues, and internal wikis — so the chatbot cites your actual content instead of hallucinating. Continuous sync keeps answers current as your docs change.',
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125' />
      </svg>
    ),
  },
  {
    label: 'Omnichannel Deployment',
    desc: 'Deploy your chatbot across your website, mobile app, WhatsApp Business, Facebook Messenger, Slack, Microsoft Teams, and SMS — all running from a single bot logic layer with unified conversation history.',
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3' />
      </svg>
    ),
  },
  {
    label: 'Human Handoff & Live Chat',
    desc: 'Configurable escalation triggers — sentiment detection, topic complexity, or explicit user request — route conversations to a live agent with full context preserved. Agents see the entire chat history and any data the bot collected.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-4.5 0 2.625 2.625 0 014.5 0z' />
      </svg>
    ),
  },
  {
    label: 'Analytics & Improvement',
    desc: 'Conversation analytics dashboard — resolution rate, fallback frequency, top unhandled intents, CSAT scores, and conversation funnel visualisation. Use real conversation data to continuously improve bot accuracy.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    label: 'CRM & Backend Integrations',
    desc: 'Live lookups and write-backs to your CRM, helpdesk, booking system, or ERP — the chatbot can check order status, raise tickets, book appointments, update contact records, and trigger workflows without leaving the conversation.',
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
    title: 'Use Case & Data Discovery',
    desc: 'We map the conversations your chatbot needs to handle, the data sources it should draw from, integration points, privacy requirements, and the LLM stack that fits your use case and compliance needs.',
  },
  {
    timing: 'Week 3–4',
    title: 'Conversation Design & UX',
    desc: 'Conversation flows, fallback handling, escalation triggers, and the chat widget or voice interface designed and validated — before any model training or development begins.',
  },
  {
    timing: 'Weeks 5–N',
    title: 'Build, Train & Integrate',
    desc: 'RAG pipeline built and tested on your data, bot logic developed, integrations connected. You test real conversations at the end of every sprint and steer the bot\'s behaviour based on actual interactions.',
  },
  {
    timing: 'Final 2 weeks',
    title: 'QA, Safety Testing & Launch',
    desc: 'Adversarial testing for hallucinations, out-of-scope queries, and edge cases. Guardrails configured, analytics wired up, then phased rollout — starting with low-risk traffic before full deployment.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    title: 'AI Chatbot Starter',
    price: '$15K – $30K',
    topBadge: '4–8 weeks',
    desc: 'A focused AI chatbot for a single use case — customer FAQ, internal knowledge assistant, or lead qualification — trained on your data and deployed on your website or one channel.',
    features: [
      'Single use case scoping',
      'RAG pipeline on your documents',
      'Web widget or one channel deployment',
      'Fallback & escalation handling',
      'Basic conversation analytics',
      'GPT-4o or Claude integration',
    ],
    cta: 'Get Starter Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
  {
    title: 'Full AI Chatbot Platform',
    price: '$30K – $70K',
    topBadge: '8–14 weeks',
    desc: 'A multi-use-case chatbot platform with omnichannel deployment, live agent handoff, CRM integrations, and a management dashboard for non-technical teams to update content.',
    features: [
      'Everything in Starter',
      'Omnichannel deployment (web, WhatsApp, Messenger)',
      'Live agent handoff with context transfer',
      'CRM, helpdesk & booking integrations',
      'Admin dashboard for content management',
      'Advanced analytics & CSAT tracking',
      'Continuous learning pipeline',
    ],
    cta: 'Get Platform Estimate',
    ctaHref: '/free-project-estimate',
    highlight: true,
  },
  {
    title: 'Enterprise AI Assistant',
    price: '$70K+',
    topBadge: '12–16 weeks',
    desc: 'A private, self-hosted AI assistant for enterprises with strict data residency requirements — multiple departments, voice support, SSO, and deep ERP/HRMS integration.',
    features: [
      'Everything in Full Platform',
      'Self-hosted LLM on your infrastructure',
      'Voice AI (phone & IVR integration)',
      'Multi-department bot management',
      'SSO & enterprise access controls',
      'ERP, HRMS & legacy system integration',
      'Dedicated post-launch AI support',
    ],
    cta: 'Get Enterprise Estimate',
    ctaHref: '/free-project-estimate',
    highlight: false,
  },
];

export const chatbotIndustrySectors: IndustrySector[] = [
  {
    name: 'E-commerce & Retail',
    tagline: 'Order tracking, product Q&A, and returns — automated.',
    desc: '',
    useCases: [],
    href: '/industries/retail-software-development',
    accentColor: 'bg-orange-500',
    iconBg: 'bg-orange-500/15',
    icon: (
      <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      </svg>
    ),
  },
  {
    name: 'Healthcare & Clinics',
    tagline: 'Symptom triage, appointment booking, and patient FAQs.',
    desc: '',
    useCases: [],
    href: '/industries/healthcare-software-development',
    accentColor: 'bg-pink-500',
    iconBg: 'bg-pink-500/15',
    icon: (
      <svg className='size-5 text-pink-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
      </svg>
    ),
  },
  {
    name: 'Financial Services',
    tagline: 'Account queries, loan eligibility, and compliance-safe advice.',
    desc: '',
    useCases: [],
    href: '/industries/fintech-software-development',
    accentColor: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15',
    icon: (
      <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
      </svg>
    ),
  },
  {
    name: 'SaaS & Tech Companies',
    tagline: 'In-app support, onboarding guidance, and feature discovery.',
    desc: '',
    useCases: [],
    href: '/industries/saas-software-development',
    accentColor: 'bg-blue-500',
    iconBg: 'bg-blue-500/15',
    icon: (
      <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    name: 'Education & EdTech',
    tagline: 'Student support, course navigation, and enrolment Q&A.',
    desc: '',
    useCases: [],
    href: '/industries/education-software-development',
    accentColor: 'bg-violet-500',
    iconBg: 'bg-violet-500/15',
    icon: (
      <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.606 50.606 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' />
      </svg>
    ),
  },
  {
    name: 'Real Estate',
    tagline: 'Property search, viewing scheduling, and buyer qualification.',
    desc: '',
    useCases: [],
    href: '/industries/real-estate-software-development',
    accentColor: 'bg-teal-500',
    iconBg: 'bg-teal-500/15',
    icon: (
      <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' />
      </svg>
    ),
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  {
    iconBg: 'bg-[#fff3e8]',
    iconColor: 'text-[#ff7500]',
    title: 'Custom CRM Development',
    desc: 'Connect your chatbot to a CRM so every conversation enriches your customer records automatically.',
    href: '/build/build-an-custom-crm',
  },
  {
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Booking Platform Development',
    desc: 'Let your chatbot book appointments directly — no context switch, no drop-off.',
    href: '/build/build-a-booking-platform',
  },
  {
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Custom LMS Development',
    desc: 'Build an AI learning assistant that guides learners through courses and answers curriculum questions.',
    href: '/build/build-an-lms',
  },
  {
    iconBg: 'bg-[#f1eef8]',
    iconColor: 'text-[#3d2d72]',
    title: 'MVP Development',
    desc: 'Validate your AI product idea fast with a focused, investor-ready MVP.',
    href: '/build/an-mvp',
  },
  {
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    title: 'Dedicated Development Team',
    desc: 'A long-term Nepal-based AI engineering team embedded in your workflow.',
    href: '/services/dedicated-development-team',
  },
  {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    title: 'SaaS Development',
    desc: 'Embed your AI chatbot into a fully productised, multi-tenant SaaS platform.',
    href: '/services/saas-development',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'How much does a custom AI chatbot cost?',
    answer:
      'A focused single-use-case chatbot — customer FAQ, internal knowledge base, or lead qualifier — begins from $15,000. A full omnichannel platform with live handoff, CRM integrations, and an admin dashboard ranges from $30,000 to $70,000. Enterprise self-hosted assistants start above $70,000. We provide a fixed-price estimate after a free scoping call.',
  },
  {
    question: 'How long does it take to build a custom AI chatbot?',
    answer:
      'A starter chatbot for a single use case takes 4–8 weeks. A full platform with omnichannel deployment and integrations takes 8–14 weeks. Enterprise self-hosted systems take 12–16 weeks. Timelines depend on the volume of data to process, the number of integrations, and how quickly you can provide training content.',
  },
  {
    question: 'Which AI models do you use — GPT, Claude, or something else?',
    answer:
      'We build model-agnostic architectures so you\'re not locked in. We work with OpenAI GPT-4o, Anthropic Claude, Google Gemini, and open-source models like Llama and Mistral. The right model depends on your use case, cost targets, and data privacy requirements — we recommend the best fit during scoping.',
  },
  {
    question: 'Can the chatbot be trained on our own documents and data?',
    answer:
      'Yes. We build Retrieval-Augmented Generation (RAG) pipelines that ingest your PDFs, help articles, product catalogues, SOPs, and internal wikis. The chatbot retrieves relevant chunks and cites your actual content — it doesn\'t hallucinate answers from general training data.',
  },
  {
    question: 'Can we keep our data private and not send it to OpenAI or other third parties?',
    answer:
      'Yes. For strict data residency requirements, we build self-hosted solutions using open-source LLMs (Llama, Mistral, Qwen) deployed on your own cloud infrastructure. Your data never leaves your servers. This is particularly important for healthcare, legal, and financial services clients.',
  },
  {
    question: 'Can the chatbot hand off to a human agent when needed?',
    answer:
      'Yes. We build configurable escalation rules — the bot can detect frustration, complexity, or an explicit "speak to a person" request and seamlessly transfer the conversation to a live agent with the full chat history intact. Agents see everything the bot collected so the customer doesn\'t have to repeat themselves.',
  },
  {
    question: 'Can the chatbot integrate with our CRM, helpdesk, or booking system?',
    answer:
      'Yes. We regularly integrate AI chatbots with Salesforce, HubSpot, Zendesk, Intercom, custom CRMs, booking platforms, and ERPs. The chatbot can look up order status, raise tickets, book appointments, update contact records, and trigger backend workflows mid-conversation.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Always. We sign a mutual NDA before any discovery call or proposal discussion. Your business processes, data, and AI use case details are treated with complete confidentiality.',
  },
];
