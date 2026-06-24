import type { ComplianceItem } from '@/components/pages/static-components/compliance';
import type { FAQ } from '@/components/pages/static-components/faqs';
import type { IndustryHeroData } from '@/components/pages/static-components/IndustryHero';
import type { IndustrySector } from '@/components/pages/static-components/IndustrySectors';
import type { SolutionTab } from '@/components/pages/static-components/list-solution';
import type { WeHelpItem } from '@/components/pages/static-components/Wehelpwith';
import type { BuildHeroWithFormData } from '@/components/pages/static-components/BuildHeroWithForm';

export const heroStats = [
  { value: '50+', label: 'AI & software products delivered' },
  { value: '98%', label: 'Client retention rate' },
  { value: '40%', label: 'Of enterprise apps will include AI agents by 2026' },
  { value: '12+', label: 'Countries served globally' },
];

export const heroMetrics: { label: string; value: string; status: 'warning' | 'info' | 'good' }[] = [
  { label: 'Hours lost per employee weekly to manual, repetitive tasks', value: '8+', status: 'warning' },
  { label: 'Businesses planning AI agent deployment within 2 years', value: '65%', status: 'info' },
  { label: 'Reduction in task completion time with workflow automation', value: '60%', status: 'good' },
  { label: 'Cost savings vs hiring additional headcount for admin', value: '70%', status: 'good' },
];

export const heroData: IndustryHeroData = {
  badge: 'Service · AI Agent Development',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Custom AI Agent Development ' },
    { text: 'for Business Automation', highlight: true },
  ],
  description:
    'AITc International builds AI agents that connect to your workflows and get real work done — automatically. Not just chatbots that talk, but agentic systems that take action across your tools, data, and processes to save your team hours every week.',
  primaryCTA: { label: 'Book an AI Agent Strategy Call →', href: '/request-a-quote' },
  secondaryCTA: { label: "See what we've built", href: '/book-a-free-consultation' },
  trustItems: ['50+ AI & software products', '12+ countries served', '98% client retention'],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [{ text: 'Agents live in weeks' }, { text: 'Not months', small: true }],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Real integration expertise' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-secondary/10',
    icon: (
      <svg className='size-5 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' />
      </svg>
    ),
    iconLabel: 'AI automation reality',
    iconSubtitle: 'What businesses are dealing with today',
    items: heroMetrics,
    note: 'AI agents eliminate the manual, repetitive work slowing your team down — and connect to the tools you already use so there is nothing new to learn.',
  },
};

export const heroWithFormData: BuildHeroWithFormData = {
  badge: 'Service · AI Agent Development',
  badgeVariant: 'secondary',
  bgVariant: 'light',
  dotColor: '#3D2D72',
  heading: [
    { text: 'Custom AI Agent Development ' },
    { text: 'for Business Automation', highlight: true },
  ],
  description:
    'AITc International builds AI agents that connect to your workflows and get real work done — automatically. Not just chatbots that talk, but agentic systems that take action across your tools, data, and processes to save your team hours every week.',
  primaryCTA: { label: 'Book an AI Agent Strategy Call →', href: '/request-a-quote' },
  secondaryCTA: { label: "See what we've built", href: '/book-a-free-consultation' },
  trustItems: ['50+ AI & software products', '12+ countries served', '98% client retention'],
  form: {
    preselectedService: 'AI Agent Development',
    formName: 'hero-ai-agent-development',
    informationPlaceholder:
      'Tell us what workflow you want to automate — what tools you use, what takes the most time, and what a successful agent would do for your team...',
  },
};

export const whoWeWorkWith = [
  {
    title: 'Operations & Process Teams',
    desc: 'Teams drowning in manual handoffs, status updates, data entry, and repetitive approvals — who need reliable automation they can trust to run without constant supervision, and that integrates with the systems they already use.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' />
      </svg>
    ),
  },
  {
    title: 'Customer Support Teams',
    desc: 'Support operations handling high volumes of routine tickets, repetitive queries, and knowledge-base lookups — who need an agent that resolves common issues instantly, drafts accurate responses, and escalates only the complex cases to humans.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155' />
      </svg>
    ),
  },
  {
    title: 'Sales & Revenue Teams',
    desc: 'Sales organisations where reps spend more time on CRM admin, lead qualification, and outreach drafting than on actual selling — who need an agent to handle the busywork so their team can focus on closing.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
      </svg>
    ),
  },
  {
    title: 'Technology & Product Leaders',
    desc: 'CTOs, heads of product, and digital transformation leads looking to embed agentic AI into their products or internal platforms — who need a reliable development partner with real integration expertise, not just prompt engineers.',
    icon: (
      <svg className='size-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z' />
      </svg>
    ),
  },
];

export const painPoints = [
  {
    problem: 'Teams spending hours every week on copy-paste data entry, status updates, and manual handoffs that follow a predictable pattern',
    solution: 'We map your repetitive workflows and hand them to a custom AI agent — one that reads from your sources, applies your logic, updates your systems, and notifies your team automatically. The pattern runs itself; your team handles the exceptions.',
  },
  {
    problem: 'Customer support overwhelmed by routine tickets while complex cases wait in the same queue',
    solution: 'We build support agents that resolve common queries instantly from your knowledge base, draft accurate responses for human review, and route complex cases to the right person with full context — cutting average response time without adding headcount.',
  },
  {
    problem: 'Sales reps spending more time on CRM admin and lead qualification than on actual sales conversations',
    solution: 'We build sales agents that qualify and route incoming leads, enrich contact records automatically, draft personalised outreach, and keep your CRM current — so your reps open their day with a clean pipeline and real conversations to have.',
  },
  {
    problem: 'Critical data living in disconnected tools, forcing someone to manually transfer information between systems every day',
    solution: 'We connect AI agents to your full stack — CRM, ERP, helpdesk, database, and productivity tools — so they can read, act, and update across your systems in real time. No more copy-paste between tabs; no more "who updated this last?"',
  },
  {
    problem: 'Off-the-shelf automation tools that stop working the moment the task gets slightly more complex',
    solution: 'A custom AI agent reasons through context rather than matching rigid rules. When a situation is ambiguous, it makes a decision — or escalates to a human with full context. We build the guardrails and evaluation frameworks so that decision is reliable.',
  },
  {
    problem: 'No clear picture of which workflows are worth automating or where AI agents would actually deliver ROI',
    solution: 'Our discovery and consulting engagement maps your current workflow costs, identifies the highest-value automation opportunities, and produces a prioritised roadmap — so your first agent investment pays off, not just proves a concept.',
  },
];

export const aiAgentProjectTabs: SolutionTab[] = [
  {
    label: 'Custom AI Agent Development',
    desc: 'Bespoke AI agents built around your specific workflows, data, and business rules — agents that understand context, follow your logic, and integrate cleanly into your operations without requiring your team to adapt to a new tool.',
    iconBg: 'from-[#faf8ff] to-[#f1eef8]',
    icon: (
      <svg className='size-24 text-[#9d91c2]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' />
      </svg>
    ),
  },
  {
    label: 'AI Workflow Automation',
    desc: "We identify the repetitive, rules-based tasks eating your team's time and hand them to an agent. Lead routing, data entry, email triage, report generation, status updates — if it follows a pattern, we can automate it reliably.",
    iconBg: 'from-green-50 to-green-100',
    icon: (
      <svg className='size-24 text-green-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z' />
      </svg>
    ),
  },
  {
    label: 'AI Agent Integration',
    desc: 'Your agent is only as useful as the tools it can reach. We connect AI agents to your CRM, ERP, helpdesk, payment systems, databases, and productivity tools so they can read, act, and update across your stack — not sit in isolation.',
    iconBg: 'from-teal-50 to-teal-100',
    icon: (
      <svg className='size-24 text-teal-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
  {
    label: 'Multi-Agent Systems',
    desc: "Some problems need more than one agent. We build coordinated multi-agent systems where specialised agents hand off tasks, check each other's work, and collaborate to handle complex, multi-step processes end to end — reliably and at scale.",
    iconBg: 'from-blue-50 to-blue-100',
    icon: (
      <svg className='size-24 text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' />
      </svg>
    ),
  },
  {
    label: 'LLM & Custom GPT Agents',
    desc: 'We build on the leading foundation models — OpenAI, Anthropic Claude, Google Gemini, and open-source LLMs — fine-tuning behaviour, guardrails, and knowledge for your use case so your agent stays accurate, on-brand, and safe in production.',
    iconBg: 'from-[#fff7ef] to-[#fff3e8]',
    icon: (
      <svg className='size-24 text-[#ffb066]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' />
      </svg>
    ),
  },
  {
    label: 'AI Agent Consulting & Strategy',
    desc: 'Not sure where agents fit in your business? We help you find the highest-value automation opportunities, scope realistic use cases, and build a roadmap — so you invest in agents that pay off, not science projects that demo well but deliver little.',
    iconBg: 'from-orange-50 to-orange-100',
    icon: (
      <svg className='size-24 text-orange-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    timing: 'Week 1–2',
    title: 'Discovery & Use-Case Scoping',
    desc: 'We map your workflows, tools, and goals — identifying where an agent delivers the most value, defining success metrics, and choosing the right approach. We build something that pays off, not just something that demos well.',
  },
  {
    timing: 'Week 2–3',
    title: 'Agent Design & Architecture',
    desc: 'We design how your agent reasons, what actions it takes, what data it accesses, and where humans stay in the loop. Models, guardrails, and integrations are fully mapped before development begins.',
  },
  {
    timing: 'Week 3–8',
    title: 'Agile Agent Development',
    desc: 'We build in sprints, with a working agent you can test at the end of each cycle. You see real behaviour early; we refine prompts, logic, and integrations based on how the agent performs on your actual tasks.',
  },
  {
    timing: 'Ongoing',
    title: 'Deploy, Monitor & Scale',
    desc: 'We deploy into your live environment, connect securely to your tools, and set up monitoring. Agents improve with feedback — we track performance, refine behaviour, and expand capabilities as you see what is working.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    title: 'Guardrails & Safety Controls',
    desc: 'Every agent we build has explicit guardrails — defined scope boundaries, action limits, and refusal logic — so it operates within the rules you set and never takes actions beyond what it is authorised to do.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
      </svg>
    ),
  },
  {
    title: 'Human-in-the-Loop Design',
    desc: 'We design agents with configurable human checkpoints — the agent handles routine cases autonomously and escalates edge cases or high-stakes decisions to a human with full context, so you stay in control where it matters.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
      </svg>
    ),
  },
  {
    title: 'Data Privacy & Access Control',
    desc: 'Agents are granted least-privilege access to your data — they can only read and write what the task requires. Sensitive information stays protected; credentials and secrets are managed securely and never exposed in prompts or logs.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
      </svg>
    ),
  },
  {
    title: 'Rigorous Evaluation & QA',
    desc: 'AI agents need a different kind of QA. We test for accuracy, reliability, edge cases, and graceful failure — running evaluations across real scenarios so your agent behaves predictably before it ever touches a live customer or system.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' />
      </svg>
    ),
  },
  {
    title: 'Production Monitoring & Observability',
    desc: 'We set up monitoring so you can see exactly what your agent is doing in production — every action logged, every decision traceable. When something unexpected happens, you know immediately and can act before it becomes a problem.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
      </svg>
    ),
  },
  {
    title: 'Secure API & Tool Integration',
    desc: 'Every integration is built with OAuth 2.0, token management, encrypted transport, and least-privilege API scopes. Your agent connects only to what it needs — and every external call is authenticated, rate-limited, and audited.',
    icon: (
      <svg className='size-6 text-secondary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
      </svg>
    ),
  },
];

export const aiAgentSectors: IndustrySector[] = [
  {
    name: 'Fintech & Payments',
    tagline: 'Fraud-review assistants, customer onboarding agents, transaction support, and compliance workflow automation.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-blue-500', iconBg: 'bg-blue-500/15',
    icon: <svg className='size-5 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' /></svg>,
  },
  {
    name: 'Healthtech & Telehealth',
    tagline: 'Patient intake agents, appointment scheduling, clinical documentation support, and secure data handling.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-emerald-500', iconBg: 'bg-emerald-500/15',
    icon: <svg className='size-5 text-emerald-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' /></svg>,
  },
  {
    name: 'E-Commerce & Retail',
    tagline: 'Customer service agents, order management automation, product recommendation, and inventory alert systems.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-orange-500', iconBg: 'bg-orange-500/15',
    icon: <svg className='size-5 text-orange-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' /></svg>,
  },
  {
    name: 'HR & Recruitment',
    tagline: 'Candidate screening agents, interview scheduling, employee Q&A bots, and onboarding workflow automation.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-violet-500', iconBg: 'bg-violet-500/15',
    icon: <svg className='size-5 text-violet-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' /></svg>,
  },
  {
    name: 'Logistics & Supply Chain',
    tagline: 'Shipment tracking agents, exception monitoring, supplier communication automation, and reporting.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-teal-500', iconBg: 'bg-teal-500/15',
    icon: <svg className='size-5 text-teal-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' /></svg>,
  },
  {
    name: 'Professional Services',
    tagline: 'Research agents, document processing, client intake automation, and internal knowledge assistants.',
    desc: '', useCases: [],
    href: '/services/custom-software-development',
    accentColor: 'bg-rose-500', iconBg: 'bg-rose-500/15',
    icon: <svg className='size-5 text-rose-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}><path strokeLinecap='round' strokeLinejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>,
  },
];

export const weHelpWithItems: WeHelpItem[] = [
  { iconBg: 'bg-[#f1eef8]', iconColor: 'text-[#3d2d72]', title: 'Custom AI Agent Development', desc: 'Bespoke agents built around your specific workflows, data, and business rules — integrated cleanly into your existing operations.', href: '/services/custom-software-development' },
  { iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'AI Workflow Automation', desc: 'Identify and automate the repetitive, rules-based tasks eating your team\'s time — lead routing, data entry, email triage, and more.', href: '/services/custom-software-development' },
  { iconBg: 'bg-teal-100', iconColor: 'text-teal-600', title: 'AI Agent Integration', desc: 'Connect AI agents to your CRM, ERP, helpdesk, databases, and productivity tools so they can act across your full stack.', href: '/services/custom-software-development' },
  { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Multi-Agent Systems', desc: 'Coordinated agent networks where specialised agents collaborate to handle complex, multi-step processes end to end.', href: '/services/custom-software-development' },
  { iconBg: 'bg-[#fff3e8]', iconColor: 'text-[#ff7500]', title: 'LLM & Custom GPT Agents', desc: 'Agents built on OpenAI, Claude, Gemini, and open-source LLMs — fine-tuned for your use case with guardrails and knowledge baked in.', href: '/services/custom-software-development' },
  { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'AI Agent Consulting & Strategy', desc: 'Find your highest-value automation opportunities and build a prioritised roadmap — so you invest in agents that pay off.', href: '/services/custom-software-development' },
];

export const faqs: FAQ[] = [
  {
    question: 'What is an AI agent?',
    answer:
      'An AI agent is a software system powered by AI that can understand a goal, reason through the steps to achieve it, and take actions across your tools and data — not just respond to questions. Unlike a basic chatbot, an agent can do real work: updating records, sending messages, processing documents, and completing multi-step tasks with minimal human input.',
  },
  {
    question: 'What is the difference between an AI agent and a chatbot?',
    answer:
      'A chatbot mainly holds a conversation and answers questions. An AI agent takes action. Agents can connect to your systems, make decisions based on context, use tools, and complete tasks autonomously — for example, qualifying a lead, updating your CRM, and scheduling a follow-up, all on its own.',
  },
  {
    question: 'How much does AI agent development cost?',
    answer:
      'Cost depends on the complexity of the workflow, the number of integrations, and the level of autonomy required. A focused single-workflow agent is significantly less than a coordinated multi-agent system. During your strategy call, we provide a detailed estimate tailored to your specific use case and goals.',
  },
  {
    question: 'How long does it take to build an AI agent?',
    answer:
      'A focused agent automating a single workflow can often be live in a few weeks. More complex or multi-agent systems with several integrations typically take a few months. Timelines depend on scope, the systems we are connecting to, and how quickly decisions are made on your side.',
  },
  {
    question: 'Can AI agents integrate with our existing tools?',
    answer:
      'Yes — that is the core of what we do. We connect agents to CRMs, ERPs, helpdesks, databases, payment systems, and productivity tools through APIs and native integrations, so your agent can read and act across the systems you already use.',
  },
  {
    question: 'How do you make sure AI agents are reliable and safe?',
    answer:
      'We build in guardrails, human-in-the-loop checkpoints, and rigorous evaluation from the start. Agents are tested across real scenarios and edge cases, given clear limits on what they can access and do, and monitored in production — so they behave predictably and escalate to humans when appropriate.',
  },
  {
    question: 'Do you sign NDAs before discussing our project?',
    answer:
      'Yes, always. We are happy to sign a mutual NDA before any strategy call or proposal discussion. Your idea and business information are treated with complete confidentiality.',
  },
];
