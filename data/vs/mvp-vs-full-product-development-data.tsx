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
  badge: 'Development Approach · MVP · Full Product',
  headline: 'MVP vs Full Product Development: Which Approach Should You Choose?',
  description:
    'Compare speed, cost, risk, scope, and long-term product strategy to choose the right development approach for your business stage.',
  primaryCTA: { label: 'Get Free Consultation', href: '/book-a-free-consultation' },
  secondaryCTA: { label: 'Compare Approaches', href: '#comparison' },
};

// ─── Quick Answer Cards ───────────────────────────────────────────────────────

export interface MvpModelCard {
  model: string;
  tagline: string;
  bestFor: string[];
  cta: { label: string; href: string };
}

export const quickAnswerCards: MvpModelCard[] = [
  {
    model: 'MVP',
    tagline: 'Launch fast, validate early, iterate with confidence',
    bestFor: [
      'First-time product launches',
      'Unvalidated ideas and markets',
      'Limited initial budget',
      'Early-stage startups',
      'Rapid market testing',
    ],
    cta: { label: 'Build Your MVP', href: '/build/build-an-mvp' },
  },
  {
    model: 'Full Product Development',
    tagline: 'Complete product built to scale from day one',
    bestFor: [
      'Validated ideas with clear market demand',
      'Established businesses expanding digitally',
      'Products with known feature requirements',
      'Enterprise and B2B platforms',
      'Products needing full compliance or security',
    ],
    cta: { label: 'Start Full Development', href: '/request-a-quote' },
  },
];

// ─── Feature-by-Feature Breakdown ────────────────────────────────────────────

export interface MvpFeatureComparison {
  feature: string;
  category: string;
  mvp: string;
  fullProduct: string;
}

export const featureBreakdown: MvpFeatureComparison[] = [
  {
    feature: 'Development Speed',
    category: 'Time to first version',
    mvp: 'Fastest path to market — only core features are built first, everything else waits.',
    fullProduct: 'Longer timeline — full scope is designed and built before anything ships.',
  },
  {
    feature: 'Budget Required',
    category: 'Initial investment',
    mvp: 'Lower initial investment — minimal feature set keeps early-stage costs manageable.',
    fullProduct: 'Higher upfront investment — complete functionality requires more time and resources.',
  },
  {
    feature: 'Scope & Features',
    category: 'What gets built',
    mvp: 'Core features only — everything non-essential is deliberately deferred until validated.',
    fullProduct: 'Complete feature set — all planned functionality is designed and delivered at launch.',
  },
  {
    feature: 'Risk Level',
    category: 'Investment risk',
    mvp: 'Lower risk — market feedback validates the product before full budget is committed.',
    fullProduct: 'Higher initial risk — full investment is made before real user data is available.',
  },
  {
    feature: 'Time to Market',
    category: 'Launch timeline',
    mvp: 'Weeks to a few months — ships as soon as the core user journey is complete.',
    fullProduct: 'Months to over a year — all features must be complete and tested before launch.',
  },
  {
    feature: 'Flexibility for Changes',
    category: 'Adaptability',
    mvp: 'High — direction can pivot based on real user feedback without major rework.',
    fullProduct: 'Lower — significant changes require rework after full scope is built.',
  },
  {
    feature: 'User Feedback Loop',
    category: 'How decisions are made',
    mvp: 'Built on real usage data — every iteration is shaped by how actual users behave.',
    fullProduct: 'Based on pre-launch assumptions — features are built before users interact.',
  },
  {
    feature: 'Long-Term Scalability',
    category: 'Growth readiness',
    mvp: 'Requires planned architecture upfront to avoid costly rewrites when the product scales.',
    fullProduct: 'Designed with full scale in mind — infrastructure and systems built for growth from day one.',
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export interface MvpProcessStep {
  step: number;
  title: string;
  desc: string;
  isOngoing?: boolean;
}

export const mvpProcess: MvpProcessStep[] = [
  {
    step: 1,
    title: 'Core Feature Definition',
    desc: 'Identify the single most valuable problem to solve and define the minimum feature set needed.',
  },
  {
    step: 2,
    title: 'Rapid Design & Prototyping',
    desc: 'Build lightweight wireframes and UI focused on the core user journey — nothing else.',
  },
  {
    step: 3,
    title: 'Development Sprint',
    desc: 'Build only the agreed core features with speed and production-level quality.',
  },
  {
    step: 4,
    title: 'Launch to Early Users',
    desc: 'Ship to a limited audience to gather real usage data and honest product feedback.',
  },
  {
    step: 5,
    title: 'Measure & Learn',
    desc: 'Analyze how users interact with the product and identify what to build or change next.',
  },
  {
    step: 6,
    title: 'Iterate & Expand',
    desc: 'Add features based on validated demand and real feedback — building the right product.',
    isOngoing: true,
  },
];

export const fullProductProcess: MvpProcessStep[] = [
  {
    step: 1,
    title: 'Full Requirements Gathering',
    desc: 'Define the complete feature set, architecture, integrations, user roles, and acceptance criteria.',
  },
  {
    step: 2,
    title: 'System Design & Architecture',
    desc: 'Plan scalable infrastructure, database design, API structure, and full technical stack.',
  },
  {
    step: 3,
    title: 'UI/UX Design',
    desc: 'Complete design system — all screens, interaction flows, and design specs before development starts.',
  },
  {
    step: 4,
    title: 'Full Development',
    desc: 'Build all features across frontend, backend, integrations, and third-party systems.',
  },
  {
    step: 5,
    title: 'QA & Testing',
    desc: 'Comprehensive testing across all features, edge cases, performance, and security scenarios.',
  },
  {
    step: 6,
    title: 'Launch & Handover',
    desc: 'Full product delivery with documentation, deployment support, and post-launch transition.',
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const pricingModels: PricingTier[] = [
  {
    title: 'MVP Development',
    price: 'Lean Launch Model',
    desc: 'Build the core product, ship fast, and let real user data shape every decision that follows.',
    features: [
      'Lower initial development cost',
      'Faster time to first user feedback',
      'Reduced financial and market risk',
      'Clear path to product-market fit',
      'Builds only what matters first',
    ],
    bottomBadge: 'Best for: Early-stage startups · Unvalidated ideas · Limited budgets · First launches',
    highlight: false,
    cta: 'Build my MVP',
    ctaHref: '/build/build-an-mvp',
  },
  {
    title: 'Full Product Development',
    price: 'Complete Build Model',
    desc: 'Build the entire product with full features, complete integrations, and production-ready infrastructure.',
    features: [
      'Complete feature set from day one',
      'Designed and architected for scale',
      'No phased rebuild required later',
      'Suitable for compliance-heavy industries',
      'Handles complex integrations upfront',
    ],
    bottomBadge: 'Best for: Validated products · Enterprise platforms · B2B tools · Regulated industries',
    highlight: true,
    cta: 'Start full development',
    ctaHref: '/request-a-quote',
  },
];

// ─── Real Scenarios ───────────────────────────────────────────────────────────

export interface MvpScenarioCard {
  title: string;
  model: 'MVP' | 'Full Product Development';
  desc: string;
}

export const realScenarios: MvpScenarioCard[] = [
  {
    title: 'First-Time Founder with a New Idea',
    model: 'MVP',
    desc: 'You have an idea but no market validation. An MVP lets you test quickly and cheaply before committing full development budget.',
  },
  {
    title: 'Enterprise Internal Tool',
    model: 'Full Product Development',
    desc: 'Requirements are fully defined, users are internal, and the system needs to work completely from day one — no beta phase is acceptable.',
  },
  {
    title: 'New SaaS Product Launch',
    model: 'MVP',
    desc: 'Test your core value proposition with real users before building a full feature roadmap and investing in long-term infrastructure.',
  },
  {
    title: 'Regulated Fintech Platform',
    model: 'Full Product Development',
    desc: 'Compliance, security, and integration requirements make an incomplete product unusable in production. Full build is the only option.',
  },
  {
    title: 'Consumer App Idea',
    model: 'MVP',
    desc: 'Market behavior is unpredictable. Launch the core experience first and let users tell you what to build next.',
  },
  {
    title: 'B2B Platform with Known Clients',
    model: 'Full Product Development',
    desc: 'You already know your users and their requirements. Build the complete solution they expect rather than asking them to use an incomplete version.',
  },
];

// ─── Decision Tool ────────────────────────────────────────────────────────────

export interface MvpDecisionOption {
  label: string;
  recommendation: 'MVP' | 'Full Product Development';
}

export interface MvpDecisionQuestion {
  question: string;
  options: MvpDecisionOption[];
}

export const decisionToolQuestions: MvpDecisionQuestion[] = [
  {
    question: 'How validated is your product idea?',
    options: [
      { label: "It's still an idea — I need real market feedback", recommendation: 'MVP' },
      { label: 'I have user research and confirmed demand', recommendation: 'Full Product Development' },
      { label: 'I have early traction and want to scale it', recommendation: 'Full Product Development' },
    ],
  },
  {
    question: 'What is your current budget and timeline situation?',
    options: [
      { label: 'Limited budget — I need to launch fast and lean', recommendation: 'MVP' },
      { label: 'Sufficient budget — I want to build it right from the start', recommendation: 'Full Product Development' },
      { label: 'Flexible — I will invest based on the right recommendation', recommendation: 'Full Product Development' },
    ],
  },
  {
    question: 'Who are your first users?',
    options: [
      { label: 'Early adopters who are open to an early version', recommendation: 'MVP' },
      { label: 'Enterprise clients or paying customers from day one', recommendation: 'Full Product Development' },
      { label: 'Internal teams with specific workflow requirements', recommendation: 'Full Product Development' },
    ],
  },
];

// ─── Real Projects ────────────────────────────────────────────────────────────

export interface MvpProjectCard {
  title: string;
  model: 'MVP' | 'Full Product Development';
  desc: string;
}

export const realProjects: MvpProjectCard[] = [
  {
    title: 'SaaS MVP Launch',
    model: 'MVP',
    desc: 'Core product shipped in 8 weeks. Real user feedback shaped the full roadmap before the full development budget was committed.',
  },
  {
    title: 'Enterprise Platform Development',
    model: 'Full Product Development',
    desc: 'Complete enterprise system delivered with full integrations, user roles, compliance requirements, and zero-phase rollout.',
  },
  {
    title: 'Consumer Mobile App MVP',
    model: 'MVP',
    desc: 'A mobile MVP validated product-market fit with 500+ early users before the full feature set was designed and built.',
  },
  {
    title: 'B2B Product Suite',
    model: 'Full Product Development',
    desc: 'Full-featured B2B platform developed with complete CRM integration, reporting dashboards, and admin systems from launch.',
  },
];

// ─── Why AITC ─────────────────────────────────────────────────────────────────

export { WhyAITCCard };

export const whyAITCCards: WhyAITCCard[] = [
  {
    title: 'Right Approach Recommendation',
    point: 'We evaluate your idea stage, market certainty, and budget before recommending MVP or full product development.',
    benefit: 'This prevents overbuilding before validation or underbuilding for a market that is already ready.',
  },
  {
    title: 'MVP-First Expertise',
    point: 'We specialize in building focused MVPs that ship fast without sacrificing code quality or future scalability.',
    benefit: 'This means you reach market faster with a product that can grow — not one you will need to rebuild.',
  },
  {
    title: 'Scalable Architecture from Day One',
    point: 'Whether MVP or full product, we design the technical foundation to support future growth.',
    benefit: 'This ensures your MVP evolves into a full product without expensive architectural rewrites.',
  },
  {
    title: 'Full Product Capability',
    point: 'When full development is the right call, we deliver complete systems — design, development, QA, and deployment.',
    benefit: 'This gives you a production-ready product built to handle real users and real scale.',
  },
  {
    title: 'Continuous Product Partnership',
    point: 'We stay involved beyond the initial delivery to help iterate, expand, and scale your product.',
    benefit: 'This ensures your product keeps growing and improving long after the first version launches.',
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'What is an MVP?',
    answer:
      'An MVP (Minimum Viable Product) is the smallest version of your product that delivers core value to early users. It is built to test your idea in the real market before committing to full development investment.',
  },
  {
    question: 'When should I skip the MVP and build the full product?',
    answer:
      "When your idea is already validated, your requirements are fully defined, and your users expect a complete working product from day one — such as enterprise clients, internal tools, or regulated industries where a partial product is not usable.",
  },
  {
    question: 'Can I start with an MVP and evolve it into a full product?',
    answer:
      'Yes. Most successful products start as MVPs and expand based on real user feedback and validated demand. At AITC, we architect MVPs with this growth path in mind so the transition to a full product is smooth and cost-effective.',
  },
  {
    question: 'Is an MVP lower quality than a full product?',
    answer:
      'No. An MVP is intentionally limited in scope — not in quality. Every feature that is built is production-ready, fully tested, and works correctly. The difference is how much is built, not how well it is built.',
  },
  {
    question: 'How long does it take to build an MVP?',
    answer:
      'Depending on complexity, an MVP typically takes 6 to 12 weeks. Simple web MVPs can ship faster. Mobile apps or platforms with third-party integrations may take longer. We scope this clearly before development starts.',
  },
  {
    question: 'Can AITC help me decide between MVP and full product?',
    answer:
      'Yes. We assess your idea maturity, target users, budget, and timeline to recommend the right approach before any development begins. This consultation is free and comes with no obligation.',
  },
];