import type { FAQ } from '@/components/pages/static-components/faqs';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';
import type { WhyAITCCard } from '@/data/vs/freelancer-vs-software-development-company-data';

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroStats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Projects Delivered' },
  { value: 'ISO', label: 'Trusted Development Partner' },
];

export const heroData = {
  badge: 'Engagement Models · Outsourcing · Staff Augmentation',
  headline: 'Outsourcing vs Staff Augmentation: Which Hiring Model Should You Choose?',
  description:
    'Compare control, flexibility, cost, team structure, and delivery responsibility to choose the right engagement model for your software development needs.',
  primaryCTA: { label: 'Get Free Consultation', href: '/book-a-free-consultation' },
  secondaryCTA: { label: 'Compare Models', href: '#comparison' },
};

// ─── Quick Answer Cards ───────────────────────────────────────────────────────

export interface OsaModelCard {
  model: string;
  tagline: string;
  bestFor: string[];
  cta: { label: string; href: string };
}

export const quickAnswerCards: OsaModelCard[] = [
  {
    model: 'Outsourcing',
    tagline: 'Fully managed development from idea to delivery',
    bestFor: [
      'No internal tech team',
      'End-to-end product development',
      'Faster execution without hiring',
      'Startups and MVPs',
      'Full project ownership needed',
    ],
    cta: { label: 'Explore Outsourcing', href: '/request-a-quote' },
  },
  {
    model: 'Staff Augmentation',
    tagline: 'Extend your existing engineering team',
    bestFor: [
      'Existing internal tech team',
      'Need extra developers',
      'Skill gaps in current team',
      'Scaling delivery capacity',
      'Direct control over execution',
    ],
    cta: { label: 'Explore Staff Augmentation', href: '/hire/hire-dedicated-developers' },
  },
];

// ─── Feature-by-Feature Breakdown ────────────────────────────────────────────

export interface OsaFeatureComparison {
  feature: string;
  category: string;
  outsourcing: string;
  staffAug: string;
}

export const featureBreakdown: OsaFeatureComparison[] = [
  {
    feature: 'Team Control',
    category: 'Ownership of execution',
    outsourcing: 'Execution is handled by an external team while you focus on business outcomes.',
    staffAug: 'You directly manage developers as part of your internal team.',
  },
  {
    feature: 'Project Ownership',
    category: 'Delivery responsibility',
    outsourcing: 'Full delivery responsibility stays with the service provider.',
    staffAug: 'Ownership stays fully within your internal team.',
  },
  {
    feature: 'Management Effort',
    category: 'Day-to-day coordination',
    outsourcing: 'Low management effort since the vendor handles coordination and delivery.',
    staffAug: 'Higher management effort as you assign tasks and track progress.',
  },
  {
    feature: 'Flexibility',
    category: 'Adaptability',
    outsourcing: 'Flexible at project level but execution is handled externally.',
    staffAug: 'Flexible at resource level with easy scaling of developers.',
  },
  {
    feature: 'Speed of Execution',
    category: 'Time to delivery',
    outsourcing: 'Faster setup for full product delivery without hiring delays.',
    staffAug: 'Fast team expansion but depends on internal coordination.',
  },
  {
    feature: 'Cost Structure',
    category: 'Pricing model',
    outsourcing: 'Project-based or milestone-based pricing.',
    staffAug: 'Monthly per-developer pricing.',
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export interface OsaProcessStep {
  step: number;
  title: string;
  desc: string;
  isOngoing?: boolean;
}

export const outsourcingProcess: OsaProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Alignment',
    desc: 'Define goals, scope, timelines, and success criteria with the outsourcing team.',
  },
  {
    step: 2,
    title: 'Team Setup & Planning',
    desc: 'Assign developers, designers, QA, and PM based on project needs.',
  },
  {
    step: 3,
    title: 'Development Execution',
    desc: 'Team works in structured sprints or milestones with full ownership.',
  },
  {
    step: 4,
    title: 'Review & Feedback',
    desc: 'Regular demos and feedback cycles managed by the delivery team.',
  },
  {
    step: 5,
    title: 'Testing & Deployment',
    desc: 'QA, fixes, and production release handled by the vendor team.',
  },
  {
    step: 6,
    title: 'Ongoing Support & Enhancements',
    desc: 'Continuous improvements, maintenance, and feature updates if required.',
    isOngoing: true,
  },
];

export const staffAugProcess: OsaProcessStep[] = [
  {
    step: 1,
    title: 'Requirement & Skill Mapping',
    desc: 'Identify skills needed and define roles to be added to your team.',
  },
  {
    step: 2,
    title: 'Developer Allocation',
    desc: 'Select and onboard developers who match your technical requirements.',
  },
  {
    step: 3,
    title: 'Team Integration',
    desc: 'Developers join your internal team, tools, and communication flow.',
  },
  {
    step: 4,
    title: 'Task-Based Execution',
    desc: 'Work is assigned and managed directly by your internal team.',
  },
  {
    step: 5,
    title: 'Continuous Collaboration',
    desc: 'Daily coordination with your team for delivery and updates.',
  },
  {
    step: 6,
    title: 'Scale or Replace Resources',
    desc: 'Easily add or remove developers based on project demand.',
    isOngoing: true,
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const pricingModels: PricingTier[] = [
  {
    title: 'Outsourcing',
    price: 'Fully Managed Delivery Model',
    desc: 'A complete team responsible for planning, development, testing, and delivery.',
    features: [
      'Full product development',
      'MVPs and startups',
      'Companies without internal tech teams',
    ],
    bottomBadge: 'Best for: Full product builds · MVPs · Startups · No internal tech team',
    highlight: true,
    cta: 'Get a project proposal',
    ctaHref: '/request-a-quote',
  },
  {
    title: 'Staff Augmentation',
    price: 'Team Extension Model',
    desc: 'Individual developers who integrate into your internal team and work under your direction.',
    features: [
      'Scaling existing engineering teams',
      'Filling skill gaps',
      'Increasing development speed',
    ],
    bottomBadge: 'Best for: Existing tech teams · Skill gaps · Faster delivery capacity',
    highlight: false,
    cta: 'Hire dedicated developers',
    ctaHref: '/hire/hire-dedicated-developers',
  },
];

// ─── Real Scenarios ───────────────────────────────────────────────────────────

export interface OsaScenarioCard {
  title: string;
  model: 'Outsourcing' | 'Staff Augmentation';
  desc: string;
}

export const realScenarios: OsaScenarioCard[] = [
  {
    title: 'Startup MVP Development',
    model: 'Outsourcing',
    desc: 'You need a full team to build fast from scratch. Outsourcing gives speed, structure, and end-to-end ownership without internal hiring.',
  },
  {
    title: 'Scaling Engineering Team',
    model: 'Staff Augmentation',
    desc: 'Your product is growing and your internal team needs extra developers to increase delivery speed without expanding full-time hiring.',
  },
  {
    title: 'Full Product Development',
    model: 'Outsourcing',
    desc: 'Best when you want complete execution responsibility handled externally, from planning to deployment.',
  },
  {
    title: 'Feature Expansion for Existing Product',
    model: 'Staff Augmentation',
    desc: 'Ideal when your core team already exists but you need additional developers to accelerate roadmap delivery.',
  },
  {
    title: 'Early-Stage Startup Without Tech Team',
    model: 'Outsourcing',
    desc: "You don't have internal engineers yet, so a fully managed team is the fastest and safest way to build your product.",
  },
  {
    title: 'Established Tech Company Scaling Fast',
    model: 'Staff Augmentation',
    desc: 'You already have systems and processes, and need flexible engineers to extend capacity without restructuring your team.',
  },
];

// ─── Decision Tool ────────────────────────────────────────────────────────────

export interface OsaDecisionOption {
  label: string;
  recommendation: 'Outsourcing' | 'Staff Augmentation';
}

export interface OsaDecisionQuestion {
  question: string;
  options: OsaDecisionOption[];
}

export const decisionToolQuestions: OsaDecisionQuestion[] = [
  {
    question: 'Do you have an in-house technical team?',
    options: [
      { label: "No, we don't have a tech team", recommendation: 'Outsourcing' },
      { label: 'Yes, we already have developers', recommendation: 'Staff Augmentation' },
      { label: 'Small or partial team — either depends on scale', recommendation: 'Staff Augmentation' },
    ],
  },
  {
    question: 'How do you want to manage development work?',
    options: [
      { label: 'I want a fully managed team handling everything', recommendation: 'Outsourcing' },
      { label: 'I want to directly manage developers in my workflow', recommendation: 'Staff Augmentation' },
      { label: 'I want a mix of both — hybrid approach', recommendation: 'Outsourcing' },
    ],
  },
  {
    question: 'What is your main priority?',
    options: [
      { label: 'End-to-end delivery with minimal management', recommendation: 'Outsourcing' },
      { label: 'Faster scaling of my existing team', recommendation: 'Staff Augmentation' },
      { label: 'Flexibility to adjust team size anytime', recommendation: 'Staff Augmentation' },
    ],
  },
];

// ─── Real Projects ────────────────────────────────────────────────────────────

export interface OsaProjectCard {
  title: string;
  model: 'Outsourcing' | 'Staff Augmentation';
  desc: string;
}

export const realProjects: OsaProjectCard[] = [
  {
    title: 'SaaS Platform Development',
    model: 'Outsourcing',
    desc: 'Delivered full product development from architecture to deployment with a fully managed engineering team.',
  },
  {
    title: 'Enterprise Team Extension',
    model: 'Staff Augmentation',
    desc: 'Engineers were integrated into an existing client team to accelerate feature delivery and improve release speed.',
  },
  {
    title: 'MVP Product Build',
    model: 'Outsourcing',
    desc: 'A complete MVP was built from scratch using an external team to validate the product in the market quickly.',
  },
  {
    title: 'Scaling Engineering Capacity',
    model: 'Staff Augmentation',
    desc: 'Additional developers were added to an existing team to handle increased workload and faster roadmap execution.',
  },
];

// ─── Why AITC ─────────────────────────────────────────────────────────────────

export { WhyAITCCard };

export const whyAITCCards: WhyAITCCard[] = [
  {
    title: 'Right Model Guidance',
    point: 'We analyze your project requirements and recommend the right engagement model before development starts.',
    benefit: 'This ensures you avoid choosing a structure that slows delivery or increases cost later.',
  },
  {
    title: 'Flexible Delivery Options',
    point: 'We support both outsourcing and staff augmentation based on your needs.',
    benefit: 'This allows you to start with one model and switch or combine models as your product and team evolve.',
  },
  {
    title: 'Strong Execution Focus',
    point: 'We focus on clear delivery, consistent communication, and steady progress across all engagement models.',
    benefit: 'This ensures your project moves forward without confusion or delays.',
  },
  {
    title: 'Scalable Support',
    point: 'Our engagement models are designed to scale with your business needs.',
    benefit: 'Whether you are building an MVP or expanding an enterprise system, we adjust resources accordingly.',
  },
  {
    title: 'Practical Partnership',
    point: 'We work as a delivery partner aligned with your workflow and business goals.',
    benefit: 'This ensures smooth collaboration instead of rigid process-heavy execution.',
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'What is the main difference between outsourcing and staff augmentation?',
    answer:
      'Outsourcing gives full project responsibility to a vendor who manages the entire delivery. Staff augmentation adds individual developers to your internal team while you retain full management control.',
  },
  {
    question: 'Which is cheaper, outsourcing or staff augmentation?',
    answer:
      'It depends on project duration and how much control you need. Outsourcing is often more cost-efficient for full product builds. Staff augmentation can be more economical for long-term team extensions where internal infrastructure already exists.',
  },
  {
    question: 'Can I switch from outsourcing to staff augmentation?',
    answer:
      'Yes. Many companies start with outsourcing to build the initial product and later transition to staff augmentation as their internal team grows and they want to take more direct control over development.',
  },
  {
    question: 'When should I use staff augmentation?',
    answer:
      'Use staff augmentation when you already have a technical team but need extra developers to fill skill gaps, increase delivery speed, or handle additional workload without committing to full-time hires.',
  },
  {
    question: 'Is outsourcing risky?',
    answer:
      'Not when working with a partner who has structured delivery processes and clear communication models. The key is choosing a vendor with transparent reporting, milestone-based accountability, and a track record of delivery.',
  },
  {
    question: 'Can AITC provide both models?',
    answer:
      'Yes. AITC offers both outsourcing and staff augmentation based on your project needs. We evaluate your situation and recommend the right model — or a combination of both when that serves your goals best.',
  },
];