import type { FAQ } from '@/components/pages/static-components/faqs';
import type { PricingTier } from '@/components/pages/static-components/PricingCards';

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroStats = [
  { value: '200+', label: 'Custom software projects delivered' },
  { value: '3–6 mo', label: 'Average delivery timeline' },
  { value: '100%', label: 'IP ownership with custom software' },
  { value: '98%', label: 'Client retention rate' },
];

export const heroData = {
  badge: 'Software Decision Guide · Custom Software · SaaS',
  headline: 'Custom Software vs SaaS: Which Is the Right Investment for Your Business?',
  description:
    'Compare custom software development and SaaS products across cost, flexibility, ownership, and long-term value — so you can make the right technology decision for your business.',
  primaryCTA: { label: 'Explore Custom Software Development →', href: '/build' },
  secondaryCTA: { label: 'Compare Side by Side', href: '#comparison' },
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
    model: 'Custom Software',
    tagline: 'Built exactly for your business — your workflows, your rules, your IP',
    bestFor: [
      'Businesses with unique workflows no off-the-shelf tool handles',
      'Long-term platform investment where ROI compounds over time',
      'Full IP ownership and no vendor dependency',
      'Competitive differentiation through proprietary technology',
      'High-volume scaling beyond SaaS per-seat pricing limits',
    ],
    cta: { label: 'Explore Custom Software', href: '/build' },
  },
  {
    model: 'SaaS',
    tagline: 'Fast, affordable, and ready to deploy for standard business needs',
    bestFor: [
      'Standard business processes covered by existing products',
      'Limited initial budget with need for fast deployment',
      'Short-term or trial-stage requirements',
      'Teams without technical resources to manage software infrastructure',
      'Non-core tools where customization is not critical',
    ],
    cta: { label: 'Talk to Our Team', href: '/book-a-free-consultation' },
  },
];

// ─── Feature-by-Feature Breakdown ────────────────────────────────────────────

export interface FeatureComparison {
  feature: string;
  category: string;
  customSoftware: string;
  saas: string;
}

export const featureBreakdown: FeatureComparison[] = [
  {
    feature: 'Cost Model',
    category: 'Investment structure',
    customSoftware: 'Higher upfront build cost. No per-seat fees — total cost is fixed once built, making long-term cost lower at scale.',
    saas: 'Low upfront commitment. Ongoing monthly or annual subscription that grows with your user count and tier requirements.',
  },
  {
    feature: 'Flexibility',
    category: 'Customisation & control',
    customSoftware: 'Built exactly to your workflows. Every feature, screen, and process reflects your specific business logic.',
    saas: 'Limited to what the vendor offers. Customization is possible within vendor-defined limits but cannot exceed the product roadmap.',
  },
  {
    feature: 'Time to Deploy',
    category: 'Launch speed',
    customSoftware: 'Typically 3–9 months depending on scope. MVP can ship faster, with further features delivered iteratively.',
    saas: 'Days to a few weeks. Onboarding and configuration are fast — no build time required.',
  },
  {
    feature: 'Ownership',
    category: 'IP & data control',
    customSoftware: 'You own the codebase, the data, and the intellectual property. No vendor dependency — ever.',
    saas: 'Vendor owns the product. You license access. Data portability and continuity depend on the vendor.',
  },
  {
    feature: 'Maintenance',
    category: 'Ongoing responsibility',
    customSoftware: 'Maintenance is your responsibility — handled by your development team or ongoing retainer with your build partner.',
    saas: 'Vendor manages all infrastructure, updates, and bug fixes. No technical overhead on your side.',
  },
  {
    feature: 'Scalability',
    category: 'Growth capacity',
    customSoftware: 'Scales to your architecture and business requirements. No pricing tier ceiling or per-seat bottlenecks.',
    saas: 'Scales within the vendor\'s infrastructure and pricing model. Costs increase significantly at enterprise scale.',
  },
  {
    feature: 'Integration',
    category: 'Ecosystem fit',
    customSoftware: 'Built to integrate with exactly the systems you use. Deep, reliable integrations designed into the architecture.',
    saas: 'Integrates via APIs and connectors — often limited to officially supported tools. Complex integrations may not be possible.',
  },
  {
    feature: 'Security & Compliance',
    category: 'Data and risk control',
    customSoftware: 'Full control over security architecture, data storage, access control, and compliance implementation.',
    saas: 'Security is managed by the vendor. Compliance depends on vendor certifications — may not meet specific industry requirements.',
  },
  {
    feature: 'Competitive Advantage',
    category: 'Business differentiation',
    customSoftware: 'Your software becomes a proprietary asset. What you build, competitors cannot simply buy.',
    saas: 'Competitors have access to the same tool. Differentiation must come from how you use it, not from the software itself.',
  },
  {
    feature: 'Long-Term ROI',
    category: 'Value over time',
    customSoftware: 'Higher upfront cost offsets over time as the product grows without per-seat licensing. ROI compounds at scale.',
    saas: 'Subscription costs accumulate indefinitely. Good ROI at low volume; less efficient as team size and feature needs grow.',
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export interface VsProcessStep {
  step: number;
  title: string;
  desc: string;
}

export const customSoftwareProcess: VsProcessStep[] = [
  {
    step: 1,
    title: 'Discovery & Requirements',
    desc: 'Define business goals, user needs, workflows, and technical requirements.',
  },
  {
    step: 2,
    title: 'Architecture & Design',
    desc: 'Plan technology stack, data models, system architecture, and UI/UX.',
  },
  {
    step: 3,
    title: 'Development',
    desc: 'Build the application feature by feature through iterative sprints.',
  },
  {
    step: 4,
    title: 'Testing & QA',
    desc: 'Functional, performance, and security testing before release.',
  },
  {
    step: 5,
    title: 'Deployment',
    desc: 'Launch to production with full infrastructure setup and configuration.',
  },
  {
    step: 6,
    title: 'Maintenance & Evolution',
    desc: 'Ongoing improvements, new features, and scaling as the business grows.',
  },
];

export const saasAdoptionProcess: VsProcessStep[] = [
  {
    step: 1,
    title: 'Evaluate & Trial',
    desc: 'Research SaaS options, compare features, and run a trial period.',
  },
  {
    step: 2,
    title: 'Subscribe & Onboard',
    desc: 'Purchase a plan and set up accounts for your team.',
  },
  {
    step: 3,
    title: 'Configure',
    desc: 'Adjust settings, connect integrations, and tailor available options to your workflow.',
  },
  {
    step: 4,
    title: 'Train Your Team',
    desc: 'Onboard team members and establish usage guidelines and best practices.',
  },
  {
    step: 5,
    title: 'Full Rollout',
    desc: 'Deploy the tool organization-wide and retire previous solutions.',
  },
  {
    step: 6,
    title: 'Manage & Renew',
    desc: 'Monitor usage, manage seats, handle vendor support, and renew subscriptions.',
  },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const pricingModels: PricingTier[] = [
  {
    title: 'Custom Software',
    price: 'Project-Based or Dedicated Team Model',
    desc: 'One build cost — then you own it forever',
    features: [
      'Full IP ownership from day one',
      'No per-seat licensing ever',
      'Tailored to your exact business workflows',
      'Scales without pricing tier ceilings',
      'Competitive advantage through proprietary technology',
    ],
    bottomBadge: 'Best for: Unique workflows · Long-term platforms · IP-driven businesses · Scale-up products',
    highlight: true,
    cta: 'Explore custom software development',
    ctaHref: '/build',
  },
  {
    title: 'SaaS',
    price: 'Subscription-Based Model',
    desc: 'Monthly or annual licensing — no build required',
    features: [
      'Fast to get started — days, not months',
      'No development team required',
      'Regular product updates from the vendor',
      'Standard support and documentation included',
      'Lower initial investment to get operational',
    ],
    bottomBadge: 'Best for: Standard processes · Limited budgets · Fast deployment · Non-core tooling',
    highlight: false,
    cta: 'Talk to our team',
    ctaHref: '/book-a-free-consultation',
  },
];

// ─── Real Scenarios ───────────────────────────────────────────────────────────

export interface ScenarioCard {
  title: string;
  model: 'Custom Software' | 'SaaS';
  desc: string;
}

export const realScenarios: ScenarioCard[] = [
  {
    title: 'Financial Compliance Platform',
    model: 'Custom Software',
    desc: 'Regulatory workflows specific to your jurisdiction require custom logic no generic SaaS product supports out of the box.',
  },
  {
    title: 'Small Business CRM',
    model: 'SaaS',
    desc: 'Standard contact management and pipeline tracking are well-served by existing CRM tools at a fraction of the cost of building.',
  },
  {
    title: 'E-commerce Pricing Engine',
    model: 'Custom Software',
    desc: 'Dynamic, rule-based pricing across thousands of SKUs with proprietary business logic cannot be replicated in a generic platform.',
  },
  {
    title: 'Team Project Management',
    model: 'SaaS',
    desc: 'Standard task assignment, timelines, and collaboration are exactly what established project management SaaS tools are built for.',
  },
  {
    title: 'Healthcare Patient Portal',
    model: 'Custom Software',
    desc: 'HIPAA-compliant workflows, custom patient journeys, and integration with proprietary clinical systems require purpose-built software.',
  },
  {
    title: 'Accounting & Invoicing',
    model: 'SaaS',
    desc: 'Standard bookkeeping, invoicing, and reporting are handled reliably and affordably by established accounting SaaS products.',
  },
];

// ─── Decision Tool ────────────────────────────────────────────────────────────

export interface DecisionOption {
  label: string;
  recommendation: 'Custom Software' | 'SaaS';
}

export interface DecisionQuestion {
  question: string;
  options: DecisionOption[];
}

export const decisionToolQuestions: DecisionQuestion[] = [
  {
    question: 'What best describes your software need?',
    options: [
      { label: 'We have unique processes no existing tool handles well', recommendation: 'Custom Software' },
      { label: 'We need standard features already available in existing products', recommendation: 'SaaS' },
      { label: 'Mostly standard, but with some customization needs', recommendation: 'SaaS' },
    ],
  },
  {
    question: 'What matters most for your investment?',
    options: [
      { label: 'Full ownership and long-term cost control at scale', recommendation: 'Custom Software' },
      { label: 'Fast deployment with a predictable subscription cost', recommendation: 'SaaS' },
      { label: 'Low upfront cost to validate before committing further', recommendation: 'SaaS' },
    ],
  },
  {
    question: 'How critical is your software as a competitive differentiator?',
    options: [
      { label: 'Critical — our software IS our competitive advantage', recommendation: 'Custom Software' },
      { label: 'Not critical — we just need the tool to work', recommendation: 'SaaS' },
      { label: 'Somewhat important — we can work within vendor limits', recommendation: 'SaaS' },
    ],
  },
];

// ─── Why AITC ─────────────────────────────────────────────────────────────────

export const whyAITCCards = [
  {
    title: 'Purpose-Built for Your Business',
    desc: 'We build software around your actual workflows — not the other way around.',
  },
  {
    title: 'Full IP Ownership',
    desc: 'Your software, your codebase, your data. Complete ownership from day one, no vendor lock-in.',
  },
  {
    title: 'Scales Without Limits',
    desc: 'Built to your architecture, not a vendor\'s pricing tier. Scale on your terms as your business grows.',
  },
  {
    title: 'Ongoing Support & Evolution',
    desc: 'We stay involved after launch to support growth, improvements, and new features over time.',
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'When should I choose custom software over SaaS?',
    answer:
      'Choose custom software when your business has unique workflows no existing product handles well, when you need full IP ownership, or when long-term scaling costs make subscription pricing unviable. SaaS works well for standard needs where the vendor roadmap matches your requirements.',
  },
  {
    question: 'Is custom software always more expensive than SaaS?',
    answer:
      'Upfront, yes — custom software has a higher initial build cost. But over time, the absence of per-seat licensing and vendor dependency typically makes custom software more cost-efficient at scale. The crossover point depends on your team size, usage, and growth trajectory.',
  },
  {
    question: 'How long does it take to build custom software?',
    answer:
      'A focused MVP typically takes 3–6 months. More complex systems or full platforms can take 6–12 months. Using an iterative approach, early features can be live and usable well before the full product is complete.',
  },
  {
    question: 'Can I start with SaaS and switch to custom software later?',
    answer:
      'Yes, and this is a common approach. Many businesses use SaaS to validate a product or process, then invest in custom software once the need is proven and the cost of SaaS limitations becomes apparent.',
  },
  {
    question: 'What happens if my SaaS vendor shuts down or raises prices?',
    answer:
      'Vendor dependency is one of the key risks of SaaS. If a vendor discontinues a product or significantly raises prices, your options are limited. Custom software eliminates this risk — you own the codebase and are not subject to any vendor\'s business decisions.',
  },
  {
    question: 'Can AITC help me decide between custom software and SaaS?',
    answer:
      'Yes. We offer a free consultation where we evaluate your business needs, workflows, budget, and long-term goals to give you an honest recommendation — even if that recommendation is to use a SaaS tool instead of building.',
  },
];
