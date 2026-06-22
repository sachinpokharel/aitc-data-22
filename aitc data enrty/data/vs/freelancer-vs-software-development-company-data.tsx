import type { FAQ } from '@/components/pages/static-components/faqs';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroStats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Projects Delivered' },
  { value: 'ISO', label: 'Trusted Development Partner' },
];

export const heroData = {
  badge: 'Engagement Models · Freelancer · Software Development Company',
  headline: 'Freelancer vs Software Development Company: What Should You Choose?',
  description:
    'Compare cost, reliability, scalability, accountability, and delivery quality to choose the right way to build your software product.',
  primaryCTA: { label: 'Get Free Consultation', href: '/book-a-free-consultation' },
  secondaryCTA: { label: 'Compare Models', href: '#comparison' },
};

// ─── Quick Answer Cards ───────────────────────────────────────────────────────

export interface FreelancerModelCard {
  model: string;
  tagline: string;
  bestFor: string[];
  cta: { label: string; href: string };
}

export const quickAnswerCards: FreelancerModelCard[] = [
  {
    model: 'Freelancer',
    tagline: 'Individual execution for small and defined tasks',
    bestFor: [
      'Small, well-defined tasks',
      'One-time fixes or updates',
      'Tight budget projects',
      'Quick delivery needs',
      'Simple websites or components',
    ],
    cta: { label: 'Explore Freelancers', href: '/book-a-free-consultation' },
  },
  {
    model: 'Software Development Company',
    tagline: 'Structured team delivery for scalable products',
    bestFor: [
      'Full product development',
      'SaaS platforms and startups',
      'Long-term projects',
      'Scalable systems',
      'Reliable ongoing support',
    ],
    cta: { label: 'Explore Development Company', href: '/request-a-quote' },
  },
];

// ─── Feature-by-Feature Breakdown ────────────────────────────────────────────

export interface FreelancerFeatureComparison {
  feature: string;
  category: string;
  freelancer: string;
  softwareDev: string;
}

export const featureBreakdown: FreelancerFeatureComparison[] = [
  {
    feature: 'Team Structure',
    category: 'Ownership model',
    freelancer:
      'A single individual handles design, development, and delivery, often working independently.',
    softwareDev:
      'A coordinated team of developers, designers, QA engineers, and project managers work together on the product.',
  },
  {
    feature: 'Reliability',
    category: 'Delivery consistency',
    freelancer:
      "Delivery depends on one person's availability, workload, and capacity at a given time.",
    softwareDev:
      'Work continues through structured processes even if team members change, ensuring consistent delivery.',
  },
  {
    feature: 'Project Management',
    category: 'Coordination & oversight',
    freelancer:
      'The client usually manages communication, task assignment, and progress tracking.',
    softwareDev:
      'A dedicated project manager handles coordination, timelines, and execution flow.',
  },
  {
    feature: 'Scalability',
    category: 'Growth capacity',
    freelancer:
      "Limited to one person's capacity, which can slow down delivery as project complexity increases.",
    softwareDev:
      'Multiple team members can be added to scale development speed and handle larger workloads.',
  },
  {
    feature: 'Quality Control',
    category: 'QA & review process',
    freelancer:
      'Quality depends entirely on individual skill, experience, and self-review practices.',
    softwareDev:
      'Work goes through structured QA processes, peer reviews, and testing before delivery.',
  },
  {
    feature: 'Long-Term Support',
    category: 'Post-launch maintenance',
    freelancer:
      'Support after delivery is often limited or informal, depending on individual availability.',
    softwareDev:
      'Ongoing maintenance, updates, and feature improvements are part of the engagement.',
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export interface FreelancerVsProcessStep {
  step: number;
  title: string;
  desc: string;
  isOngoing?: boolean;
}

export const outsourcingProcess: FreelancerVsProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Alignment',
    desc: 'Define goals, scope, timelines, and success criteria with the outsourcing partner.',
  },
  {
    step: 2,
    title: 'Team Setup & Planning',
    desc: 'A complete delivery team (developers, designers, QA, and project managers) is assigned to your project.',
  },
  {
    step: 3,
    title: 'Development Execution',
    desc: 'The vendor team takes full ownership and delivers work through structured sprints or milestones.',
  },
  {
    step: 4,
    title: 'Review & Feedback',
    desc: 'Regular demos and structured feedback cycles are handled by the outsourcing team.',
  },
  {
    step: 5,
    title: 'Testing & Deployment',
    desc: 'QA, bug fixes, and production releases are fully managed by the vendor.',
  },
  {
    step: 6,
    title: 'Ongoing Support & Enhancements',
    desc: 'Continuous maintenance, improvements, and feature updates can be provided after delivery.',
    isOngoing: true,
  },
];

export const staffAugProcess: FreelancerVsProcessStep[] = [
  {
    step: 1,
    title: 'Requirement & Skill Mapping',
    desc: 'Define the technical skills and roles needed to extend your existing team.',
  },
  {
    step: 2,
    title: 'Developer Allocation',
    desc: 'Individual developers are selected based on your required skills and expertise.',
  },
  {
    step: 3,
    title: 'Team Integration',
    desc: 'Developers are onboarded into your internal systems, tools, and communication channels.',
  },
  {
    step: 4,
    title: 'Task-Based Execution',
    desc: 'Your internal team assigns tasks and directly manages day-to-day execution.',
  },
  {
    step: 5,
    title: 'Continuous Collaboration',
    desc: 'Augmented developers work closely with your team in daily workflows and standups.',
  },
  {
    step: 6,
    title: 'Scale or Replace Resources',
    desc: 'You can quickly adjust team size by adding or replacing developers as needed.',
    isOngoing: true,
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const pricingModels: PricingTier[] = [
  {
    title: 'Freelancer',
    price: 'Individual Contributor Model',
    desc: 'The time and expertise of a single individual responsible for completing the assigned work.',
    features: [
      'Small projects and one-time tasks',
      'Bug fixes and minor enhancements',
      'Simple websites and landing pages',
      'Short-term engagements',
      'Budget-sensitive work',
    ],
    bottomBadge: 'Best for: Small projects · One-time tasks · Simple websites · Quick fixes',
    highlight: false,
    cta: 'Discuss my project',
    ctaHref: '/book-a-free-consultation',
  },
  {
    title: 'Software Development Company',
    price: 'Team-Based Delivery Model',
    desc: 'A complete delivery team, structured processes, quality assurance, project management, and long-term product support.',
    features: [
      'Full product development',
      'SaaS platforms and startup products',
      'Business-critical applications',
      'Long-term development initiatives',
      'Projects requiring ongoing support',
    ],
    bottomBadge: 'Best for: SaaS products · Startups · Enterprise apps · Long-term growth',
    highlight: true,
    cta: 'Get a proposal',
    ctaHref: '/request-a-quote',
  },
];

// ─── Real Scenarios ───────────────────────────────────────────────────────────

export interface FreelancerScenarioCard {
  title: string;
  model: 'Freelancer' | 'Software Development Company';
  desc: string;
}

export const realScenarios: FreelancerScenarioCard[] = [
  {
    title: 'Small Website or Landing Page',
    model: 'Freelancer',
    desc: 'The scope is simple, timelines are short, and the project can be handled efficiently by a single specialist.',
  },
  {
    title: 'Startup MVP Development',
    model: 'Software Development Company',
    desc: 'Building an MVP requires coordinated design, development, testing, and future scalability planning.',
  },
  {
    title: 'Quick Bug Fixes or Minor Enhancements',
    model: 'Freelancer',
    desc: 'Small isolated tasks can often be completed faster and more cost-effectively by an individual contributor.',
  },
  {
    title: 'SaaS Product Development',
    model: 'Software Development Company',
    desc: 'A SaaS product requires multiple skill sets, structured delivery, and ongoing development beyond the initial launch.',
  },
  {
    title: 'Business-Critical Application',
    model: 'Software Development Company',
    desc: 'Reliability, quality assurance, documentation, and long-term support are too important to depend on a single individual.',
  },
  {
    title: 'Ongoing Feature Development & Scaling',
    model: 'Software Development Company',
    desc: 'As products grow, dedicated teams provide the resources, processes, and continuity needed for long-term success.',
  },
];

// ─── Decision Tool ────────────────────────────────────────────────────────────

export interface FreelancerDecisionOption {
  label: string;
  recommendation: 'Freelancer' | 'Software Development Company';
}

export interface FreelancerDecisionQuestion {
  question: string;
  options: FreelancerDecisionOption[];
}

export const decisionToolQuestions: FreelancerDecisionQuestion[] = [
  {
    question: 'How complex is your project?',
    options: [
      { label: 'Small task or simple website', recommendation: 'Freelancer' },
      { label: 'Full product or scalable system', recommendation: 'Software Development Company' },
      { label: 'Not sure, but expect growth', recommendation: 'Software Development Company' },
    ],
  },
  {
    question: 'What level of reliability do you need?',
    options: [
      { label: 'Basic delivery is fine', recommendation: 'Freelancer' },
      { label: 'Consistent quality and structured execution', recommendation: 'Software Development Company' },
      { label: 'Long-term stability and support', recommendation: 'Software Development Company' },
    ],
  },
  {
    question: 'How do you want your project managed?',
    options: [
      { label: 'I will manage everything myself', recommendation: 'Freelancer' },
      { label: 'I want a structured team handling coordination', recommendation: 'Software Development Company' },
      { label: 'I want minimal involvement after kickoff', recommendation: 'Software Development Company' },
    ],
  },
];

// ─── Real Projects ────────────────────────────────────────────────────────────

export interface FreelancerVsProjectCard {
  title: string;
  model: 'Freelancer' | 'Software Development Company';
  desc: string;
}

export const realProjects: FreelancerVsProjectCard[] = [
  {
    title: 'Business Website Development',
    model: 'Freelancer',
    desc: 'A simple marketing website was delivered quickly and cost-effectively with a clearly defined scope and limited functionality.',
  },
  {
    title: 'SaaS Platform Development',
    model: 'Software Development Company',
    desc: 'A full product team handled design, development, testing, deployment, and ongoing feature releases.',
  },
  {
    title: 'Feature Enhancements & Maintenance',
    model: 'Freelancer',
    desc: 'Small updates, bug fixes, and minor improvements were completed without requiring a dedicated development team.',
  },
  {
    title: 'Enterprise Application Development',
    model: 'Software Development Company',
    desc: 'A cross-functional team delivered a scalable business application with structured project management, QA, and long-term support.',
  },
];

// ─── Why AITC ─────────────────────────────────────────────────────────────────

export interface WhyAITCCard {
  title: string;
  point: string;
  benefit: string;
}

export const whyAITCCards: WhyAITCCard[] = [
  {
    title: 'Right Model Guidance',
    point: 'We evaluate your project first and help you decide whether a freelancer, a team-based approach, or a structured development model is the right fit.',
    benefit: 'This reduces the risk of choosing the wrong setup.',
  },
  {
    title: 'Structured Delivery',
    point: 'We work as a full development team instead of fragmented individual execution.',
    benefit: 'This ensures your project is not dependent on a single person.',
  },
  {
    title: 'Reliable Execution',
    point: 'We follow structured processes for development, review, and delivery.',
    benefit: 'This reduces delays, missed requirements, and inconsistent quality.',
  },
  {
    title: 'Scalable Teams',
    point: 'We provide team-based development that can grow with your product.',
    benefit: 'This is ideal when freelancer capacity is no longer enough.',
  },
  {
    title: 'Long-Term Support',
    point: 'We stay involved after delivery for improvements, scaling, and maintenance.',
    benefit: 'This ensures your product does not stop evolving after launch.',
  },
  {
    title: 'Clear Communication',
    point: 'You work with a coordinated team structure instead of managing multiple individuals.',
    benefit: 'This reduces confusion and improves execution speed.',
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'Is hiring a freelancer cheaper than a company?',
    answer:
      'Yes, the initial hourly or project rate is often lower with a freelancer. However, software development companies reduce long-term risk, rework costs, and the management overhead that comes with coordinating individual contractors.',
  },
  {
    question: 'When should I hire a freelancer?',
    answer:
      'Hire a freelancer for small, simple, and well-defined tasks — such as a landing page, a bug fix, or a minor feature update where scope and timeline are clear from the start.',
  },
  {
    question: 'Is a software development company better for startups?',
    answer:
      'Yes, if the startup is building a scalable product. A company provides the structured processes, multiple skill sets, and long-term support that a product evolving based on user feedback requires.',
  },
  {
    question: 'Can I switch from freelancer to company later?',
    answer:
      'Yes. Many businesses start with a freelancer for an initial version and later engage a development company as complexity, team size, and long-term support needs grow.',
  },
  {
    question: 'Do companies use freelancers internally?',
    answer:
      'Sometimes, but they manage and integrate that work within structured internal systems. The difference is that the company takes full accountability for quality, coordination, and delivery — the client does not manage individuals.',
  },
  {
    question: 'Can AITC replace freelancers completely?',
    answer:
      'Yes. AITC provides structured development teams instead of fragmented individual hiring, giving you a single point of accountability, professional project management, and long-term product support.',
  },
];