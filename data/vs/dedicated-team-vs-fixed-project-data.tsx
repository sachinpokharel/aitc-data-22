import type { FAQ } from '@/components/pages/static-components/faqs';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroStats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Projects Delivered' },
  { value: 'ISO', label: 'Verified' },
];

export const heroData = {
  badge: 'Engagement Models · Dedicated Team · Fixed Project',
  headline: 'Dedicated Team vs Fixed Project',
  description:
    'Compare costs, flexibility, scalability, timelines, and long-term business value to choose the right software development engagement model for your business.',
  primaryCTA: { label: 'Get Free Consultation', href: '/book-a-free-consultation' },
  secondaryCTA: { label: 'Compare Pricing', href: '#pricing' },
};

// ─── Quick Answer Cards ───────────────────────────────────────────────────────

export interface ModelCard {
  model: string;
  tagline: string;
  bestFor: string[];
  cta: { label: string; href: string };
}

export const quickAnswerCards: ModelCard[] = [
  {
    model: 'Dedicated Team',
    tagline: 'Your own engineering team, on demand',
    bestFor: [
      'Startups & growing SaaS products',
      'Long-term continuous development',
      'Agile, evolving environments',
      'Scaling businesses',
      'Ongoing improvements & iterations',
    ],
    cta: { label: 'Explore Dedicated Team', href: '/hire/hire-dedicated-developers' },
  },
  {
    model: 'Fixed Project',
    tagline: 'Defined scope, clear budget, on-time delivery',
    bestFor: [
      'Websites, portals & landing pages',
      'Fixed budgets & defined requirements',
      'Predictable timelines',
      'One-time delivery projects',
      'Corporate & internal tools',
    ],
    cta: { label: 'Explore Fixed Projects', href: '/request-a-quote' },
  },
];

// ─── Feature-by-Feature Breakdown ────────────────────────────────────────────

export interface FeatureComparison {
  feature: string;
  category: string;
  dedicatedTeam: string;
  fixedProject: string;
}

export const featureBreakdown: FeatureComparison[] = [
  {
    feature: 'Flexibility',
    category: 'Scope adaptability',
    dedicatedTeam: 'Change requirements anytime without penalty. Adjust sprint priorities weekly.',
    fixedProject: 'Scope changes require formal revision requests and may impact cost and timeline.',
  },
  {
    feature: 'Budget Predictability',
    category: 'Cost certainty',
    dedicatedTeam: 'Monthly resource cost is known, but total project cost depends on duration and scope.',
    fixedProject: 'Total cost agreed upfront. No surprises — ideal for strict budget environments.',
  },
  {
    feature: 'Development Speed',
    category: 'Time to production',
    dedicatedTeam: "Continuous sprints deliver value weekly. Features ship as soon as they're ready.",
    fixedProject: 'Development follows a fixed schedule. All deliverables arrive at agreed milestones.',
  },
  {
    feature: 'Communication',
    category: 'Team access',
    dedicatedTeam: 'Daily standups, direct Slack access, sprint reviews. Team feels like in-house.',
    fixedProject: 'Structured check-ins at agreed milestones. Less ad-hoc collaboration.',
  },
  {
    feature: 'Scalability',
    category: 'Team growth',
    dedicatedTeam: 'Scale up or down by adding developers, designers, or QA engineers within days.',
    fixedProject: 'Team is fixed to the agreed scope. Scaling requires a new contract.',
  },
  {
    feature: 'Risk Management',
    category: 'Project risk',
    dedicatedTeam: 'Continuous feedback loops reduce risk of building the wrong thing.',
    fixedProject: 'Scope changes mid-project carry financial and timeline risk.',
  },
  {
    feature: 'Product Ownership',
    category: 'Control',
    dedicatedTeam: 'You direct the team daily. Full control over priorities and technical decisions.',
    fixedProject: 'AITC manages delivery. You review and approve at milestones.',
  },
  {
    feature: 'Long-term Support',
    category: 'Post-launch',
    dedicatedTeam: 'Ongoing maintenance, bug fixes, and feature development included by design.',
    fixedProject: 'Support after delivery requires a separate retainer or maintenance agreement.',
  },
  {
    feature: 'Innovation Capability',
    category: 'Creative input',
    dedicatedTeam: 'Deep product knowledge enables proactive suggestions, R&D, and new ideas.',
    fixedProject: 'Focused on delivering defined features. Innovation outside scope is limited.',
  },
  {
    feature: 'Time to Market',
    category: 'Launch speed',
    dedicatedTeam: 'MVP can ship in weeks, then iterate. No big-bang releases required.',
    fixedProject: 'Clear timeline agreed upfront. Best when launch date is non-negotiable.',
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export interface VsProcessStep {
  step: number;
  title: string;
  desc: string;
}

export const dedicatedTeamProcess: VsProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Alignment',
    desc: 'Define product goals, roadmap, and team structure based on business needs.',
  },
  {
    step: 2,
    title: 'Team Setup',
    desc: 'Assign developers, designers, QA, and project manager as a dedicated unit.',
  },
  {
    step: 3,
    title: 'Sprint Planning',
    desc: 'Plan work in short cycles with prioritized tasks and evolving requirements.',
  },
  {
    step: 4,
    title: 'Development Execution',
    desc: 'Work delivered in continuous sprints with regular updates and collaboration.',
  },
  {
    step: 5,
    title: 'Review & Feedback',
    desc: 'Frequent demos and feedback loops ensure alignment with business goals.',
  },
  {
    step: 6,
    title: 'Continuous Improvement',
    desc: 'New features, enhancements, and optimizations delivered over time.',
  },
];

export const fixedProjectProcess: VsProcessStep[] = [
  {
    step: 1,
    title: 'Requirement Gathering',
    desc: 'Define full project scope, features, timeline, and deliverables upfront.',
  },
  {
    step: 2,
    title: 'Planning & Estimation',
    desc: 'Finalize milestones, resources, cost, and delivery schedule.',
  },
  {
    step: 3,
    title: 'Development Phase',
    desc: 'Build the product strictly based on agreed requirements.',
  },
  {
    step: 4,
    title: 'Testing & QA',
    desc: 'Structured testing to ensure functionality and requirement match.',
  },
  {
    step: 5,
    title: 'Delivery & Handover',
    desc: 'Final product is delivered with documentation and deployment support.',
  },
  {
    step: 6,
    title: 'Optional Support',
    desc: 'Post-launch support provided through separate agreement if required.',
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const pricingModels: PricingTier[] = [
  {
    title: 'Dedicated Team',
    price: 'Monthly Resource-Based Model',
    desc: 'Pay for your team, not a fixed deliverable',
    features: [
      'Flexible, evolving scope',
      'Scale team up or down monthly',
      'Continuous delivery & releases',
      'Low cost of scope changes',
      'Higher long-term ROI',
    ],
    bottomBadge: 'Best for: Long-term products · SaaS platforms · Startups · Growing platforms',
    highlight: true,
    cta: 'Start with a dedicated team',
    ctaHref: '/hire/hire-dedicated-developers',
  },
  {
    title: 'Fixed Project',
    price: 'Fixed Scope Pricing',
    desc: 'One price, one deliverable, one timeline',
    features: [
      'Known budget from day one',
      'Defined deliverables & milestones',
      'Clear, agreed timeline',
      'Simpler procurement process',
      'Easier stakeholder approval',
    ],
    bottomBadge: 'Best for: Websites · Landing pages · Internal tools · Corporate projects',
    highlight: false,
    cta: 'Get a fixed-price proposal',
    ctaHref: '/request-a-quote',
  },
];

// ─── Real Scenarios ───────────────────────────────────────────────────────────

export interface ScenarioCard {
  title: string;
  model: 'Dedicated Team' | 'Fixed Project';
  desc: string;
}

export const realScenarios: ScenarioCard[] = [
  {
    title: 'Startup SaaS Platform',
    model: 'Dedicated Team',
    desc: 'Features evolve continuously. You need the ability to pivot based on user feedback without renegotiating contracts.',
  },
  {
    title: 'Corporate Website',
    model: 'Fixed Project',
    desc: 'Scope is predefined. Design, copy, and pages are agreed upfront — perfect for a fixed-price delivery.',
  },
  {
    title: 'Marketplace App',
    model: 'Dedicated Team',
    desc: 'Requires ongoing iterations based on buyer/seller behavior. Continuous improvement is essential.',
  },
  {
    title: 'Internal HR Portal',
    model: 'Fixed Project',
    desc: 'Stable, well-documented requirements. A fixed-price project delivers predictably within company budgets.',
  },
  {
    title: 'Fintech Platform',
    model: 'Dedicated Team',
    desc: 'Regulatory changes, new features, and security updates mean continuous development is non-negotiable.',
  },
  {
    title: 'Landing Page',
    model: 'Fixed Project',
    desc: 'Limited scope, clear goals, defined content. A fixed project gets it done efficiently.',
  },
];

// ─── Decision Tool ────────────────────────────────────────────────────────────

export interface DecisionOption {
  label: string;
  recommendation: 'Dedicated Team' | 'Fixed Project';
}

export interface DecisionQuestion {
  question: string;
  options: DecisionOption[];
}

export const decisionToolQuestions: DecisionQuestion[] = [
  {
    question: 'How stable are your project requirements?',
    options: [
      { label: 'Requirements will evolve over time', recommendation: 'Dedicated Team' },
      { label: 'Requirements are clearly defined upfront', recommendation: 'Fixed Project' },
      { label: 'Some clarity, but may change later', recommendation: 'Dedicated Team' },
    ],
  },
  {
    question: 'How involved do you want to be in development?',
    options: [
      { label: 'I want ongoing collaboration and flexibility', recommendation: 'Dedicated Team' },
      { label: 'I want minimal involvement after kickoff', recommendation: 'Fixed Project' },
      { label: 'I prefer structured updates at milestones', recommendation: 'Fixed Project' },
    ],
  },
  {
    question: 'What matters most for your delivery?',
    options: [
      { label: 'Continuous improvement and long-term growth', recommendation: 'Dedicated Team' },
      { label: 'Fixed budget and predictable timeline', recommendation: 'Fixed Project' },
      { label: 'Balance of both', recommendation: 'Dedicated Team' },
    ],
  },
];

// ─── Real Projects ────────────────────────────────────────────────────────────

export interface VsProjectCard {
  title: string;
  model: 'Dedicated Team' | 'Fixed Project';
  desc: string;
}

export const realProjects: VsProjectCard[] = [
  {
    title: 'SaaS Product Development',
    model: 'Dedicated Team',
    desc: 'Continuous product development delivered through iterative releases, feature updates, and long-term roadmap execution.',
  },
  {
    title: 'Corporate Website Launch',
    model: 'Fixed Project',
    desc: 'A clearly defined website delivered within agreed scope, timeline, and budget with no ongoing development required.',
  },
  {
    title: 'Marketplace Platform',
    model: 'Dedicated Team',
    desc: 'Ongoing development and improvements based on user behavior, scaling needs, and evolving business requirements.',
  },
  {
    title: 'Internal Business System',
    model: 'Fixed Project',
    desc: 'A structured internal tool built with fixed requirements, predictable delivery, and clear acceptance criteria.',
  },
];

// ─── Why AITC ─────────────────────────────────────────────────────────────────

export const whyAITCCards = [
  {
    title: 'Product-Focused Development',
    desc: "We lead with business outcomes, not just technical specs. Every decision is made with your product's growth in mind.",
  },
  {
    title: 'Experienced Engineering Team',
    desc: 'Full-stack developers, product designers, QA engineers, and DevOps specialists — all under one roof.',
  },
  {
    title: 'Flexible Engagement Models',
    desc: 'Whether you need a dedicated team, an MVP, or a fixed-price project, we match the model to your situation.',
  },
  {
    title: 'Transparent Communication',
    desc: 'Weekly sprint reviews, real-time reporting, and direct team access. No black-box development — ever.',
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'Which model is more cost effective?',
    answer:
      'It depends on your project type. A dedicated team is best for long-term work where cost is spread over time and value comes from continuous delivery. A fixed project is best for short-term work with a clear budget and defined scope from the start.',
  },
  {
    question: 'Can I switch from a fixed project to a dedicated team?',
    answer:
      'Yes. Many businesses start with a fixed project to build the initial product and later move to a dedicated team for scaling and ongoing development.',
  },
  {
    question: 'Which model is better for startups?',
    answer:
      'A dedicated team is better when the product is evolving and needs continuous improvements. A fixed project is better when the idea is clear and you want to build an MVP quickly within a fixed budget.',
  },
  {
    question: 'What happens if requirements change during a fixed project?',
    answer:
      'Changes are reviewed and may affect timeline and cost since the scope is agreed upfront before development starts.',
  },
  {
    question: 'Is a dedicated team only for large companies?',
    answer:
      'No. Startups and mid-sized businesses also use dedicated teams when they need flexibility and continuous development support.',
  },
  {
    question: 'Can AITC help choose the right model?',
    answer:
      'Yes. We evaluate your project scope, goals, and budget to recommend the most suitable engagement model for your situation.',
  },
];