import type { FAQ } from '@/components/pages/static-components/faqs';
import type { LocationHeroData } from '@/components/pages/static-components/LocationHero';
import type { CardItem } from '@/components/pages/static-components/CardGrid';
import type { ProjectCard } from '@/components/pages/static-components/ProjectCards';

export const heroStats = [
  { value: '50+', label: 'Outsourcing projects delivered' },
  { value: '2', label: 'Key destinations compared' },
  { value: '10+', label: 'Years of outsourcing experience' },
  { value: '98%', label: 'Client retention across destinations' },
];

export const heroData: LocationHeroData = {
  badge: 'Outsourcing Comparison · Nepal vs India · Make the Right Choice',
  badgeVariant: 'primary',
  bgVariant: 'orange',
  dotColor: '#FF7500',
  heading: [
    { text: 'Nepal vs India: Which ' },
    { text: 'Outsourcing Destination', highlight: true },
    { text: ' Is Right for You?' },
  ],
  description:
    'Compare cost, communication, talent access, collaboration style, and delivery approach to choose the right outsourcing destination for your software development needs.',
  primaryCTA: {
    label: 'Get Free Consultation →',
    href: '/book-a-free-consultation',
    colorClass: 'bg-secondary hover:bg-purple-800',
  },
  secondaryCTA: { label: 'Compare Development Options', href: '#comparison' },
  trustItems: [
    'Objective comparison based on 50+ real outsourcing projects',
    'Real use cases matched to the right destination',
    'Free consultation to discuss your specific needs',
  ],
  floatingBadges: [
    {
      position: 'bottom-left',
      bg: 'bg-secondary',
      lines: [
        { text: 'Collaboration-first model' },
        { text: 'Nepal excels in direct communication', small: true },
      ],
    },
    {
      position: 'top-right',
      bg: 'bg-primary',
      lines: [{ text: 'Free outsourcing consultation' }],
    },
  ],
  rightCard: {
    iconBg: 'bg-primary/10',
    icon: (
      <svg className='size-5 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' />
      </svg>
    ),
    iconLabel: 'Nepal vs India at a glance',
    iconSubtitle: 'Key differences summarized',
    rows: [
      { label: 'Collaboration & direct communication', time: 'Nepal', active: true },
      { label: 'Enterprise scale & large teams', time: 'India', active: true },
      { label: 'Startup & MVP development', time: 'Nepal', active: false },
    ],
    counters: [
      { value: '🇳🇵', label: 'Nepal: collaboration-first' },
      { value: '🇮🇳', label: 'India: scale-focused' },
    ],
  },
};

export const quickAnswerCards = [
  {
    country: 'Nepal',
    flag: '🇳🇵',
    tagline: 'Collaborative development with direct communication and dedicated team attention',
    bestFor: [
      'Startups and growing product businesses',
      'Long-term product development partnerships',
      'Agile teams with evolving requirements',
      'Businesses that value direct access to developers',
      'MVPs and innovation-driven projects',
    ],
    cta: 'Explore Development in Nepal',
    ctaHref: '/hire/hire-dedicated-developers',
    highlight: true,
  },
  {
    country: 'India',
    flag: '🇮🇳',
    tagline: 'Large-scale delivery supported by a broad and deep talent ecosystem',
    bestFor: [
      'Enterprise-scale systems and platforms',
      'Large development teams and multi-team programs',
      'High-volume project requirements',
      'Businesses with structured corporate procurement',
      'Multi-vendor and large-capacity engagements',
    ],
    cta: 'Get an Outsourcing Recommendation',
    ctaHref: '/request-a-quote',
    highlight: false,
  },
];

export const comparisonRows: Array<{ factor: string; nepal: string; india: string }> = [
  {
    factor: 'Cost Efficiency',
    nepal: 'Competitive rates with dedicated team attention. Particularly strong value for startups, growing businesses, and long-term product engagements.',
    india: 'Wide pricing range — from budget-friendly options to large enterprise consulting rates — depending on vendor size and project complexity.',
  },
  {
    factor: 'Communication',
    nepal: 'Direct communication with developers and decision-makers reduces layers and speeds up alignment throughout the project.',
    india: 'Communication quality varies widely by vendor. Larger organizations often involve multiple management layers that can slow down responses.',
  },
  {
    factor: 'Collaboration Style',
    nepal: 'Close, iterative collaboration suited to agile delivery, fast feedback loops, and evolving product requirements.',
    india: 'Structured, process-oriented delivery well-suited for defined-scope projects and enterprise procurement models.',
  },
  {
    factor: 'Team Attention',
    nepal: 'Dedicated teams focus exclusively on your product — no context-switching across multiple large client accounts simultaneously.',
    india: 'Attention is often distributed across multiple large accounts, especially at higher vendor tiers. Focus depends on contract structure.',
  },
  {
    factor: 'Talent Availability',
    nepal: 'Strong mid-level and senior talent pool in web, mobile, backend, cloud, and data engineering. Growing ecosystem with experienced professionals.',
    india: "One of the world's largest developer talent pools, covering every technology and seniority level at significant scale.",
  },
  {
    factor: 'Flexibility',
    nepal: 'Highly flexible — well-suited for changing requirements, evolving product direction, and long-term iterative development.',
    india: 'Flexible at scale, though structured vendors often require more formal change management for scope adjustments.',
  },
  {
    factor: 'Project Scale',
    nepal: 'Best suited for small-to-mid-sized development teams (1–20 engineers) on focused product development or specific system builds.',
    india: 'Capable of supporting very large teams (20–200+ engineers) and multi-stream enterprise programs at significant scale.',
  },
  {
    factor: 'Relationship Focus',
    nepal: "Partnership-oriented model — vendors invest in long-term relationships, product understanding, and client success beyond delivery.",
    india: "Relationship quality varies significantly. Large vendors prioritize scale; boutique firms often mirror Nepal's partnership focus.",
  },
  {
    factor: 'Decision-Making Speed',
    nepal: 'Faster decision cycles — direct access to technical leads and project owners reduces approval layers and accelerates delivery.',
    india: 'Decision speed depends on vendor size. Smaller Indian firms can move quickly; large organizations typically have longer approval chains.',
  },
  {
    factor: 'Long-Term Growth',
    nepal: 'Ideal for businesses building long-term product capabilities, where ongoing collaboration and product knowledge accumulate over time.',
    india: 'Scalable for long-term enterprise programs. Suits businesses that prioritize delivery capacity and vendor ecosystem breadth over time.',
  },
];

export const pricingCards = [
  {
    country: 'Nepal',
    flag: '🇳🇵',
    model: 'Cost-Effective Collaborative Model',
    description:
      'Pay for a focused development team with strong collaboration, consistent attention, and a long-term partnership approach to your product.',
    features: [
      'Competitive pricing with strong value for startups and growing businesses',
      'Direct access to developers and decision-makers reduces overhead',
      'Flexible engagement suited for evolving requirements and agile delivery',
      'Cost-efficient for long-term collaboration and ongoing product development',
      'Better value when dedicated team attention is central to your delivery model',
    ],
    bestFor: ['Startups', 'SaaS products', 'Long-term product development', 'MVPs with evolving scope', 'Growing businesses'],
    highlight: true,
  },
  {
    country: 'India',
    flag: '🇮🇳',
    model: 'Wide-Range Vendor Pricing Ecosystem',
    description:
      'Pricing varies significantly by vendor size, expertise level, and delivery structure — from cost-efficient to premium enterprise consulting rates.',
    features: [
      'Broad pricing options covering budget-friendly to enterprise-grade providers',
      'Strong capacity for large-scale and multi-team development programs',
      'Suitable for structured enterprise procurement and vendor-based hiring models',
      'Competitive pricing for high-volume or offshore development at scale',
      'Flexible vendor selection based on budget, scope, and project complexity',
    ],
    bestFor: ['Enterprise systems', 'Large-scale platforms', 'Multi-vendor programs', 'High-volume development', 'Structured corporate procurement'],
    highlight: false,
  },
];

export const scenarioCards: Array<{
  title: string;
  recommendation: 'Nepal' | 'India';
  reason: string;
}> = [
  {
    title: 'Startup SaaS Platform',
    recommendation: 'Nepal',
    reason: 'Early-stage products benefit from close collaboration, faster iteration, and direct developer communication during uncertain product direction.',
  },
  {
    title: 'Enterprise-Scale System',
    recommendation: 'India',
    reason: 'Large systems with complex requirements and multiple modules need the high delivery capacity and large engineering teams India provides.',
  },
  {
    title: 'MVP Product Development',
    recommendation: 'Nepal',
    reason: 'MVPs require fast feedback loops and flexible development — making closer collaboration and direct communication more effective during validation.',
  },
  {
    title: 'High-Volume Dev Programme',
    recommendation: 'India',
    reason: "Projects requiring multiple parallel development streams are better suited to India's large-scale delivery ecosystem and deep talent pool.",
  },
  {
    title: 'Long-Term Product Platform',
    recommendation: 'Nepal',
    reason: 'Continuous iteration and product evolution benefit from long-term partnership, accumulated product knowledge, and consistent team involvement.',
  },
  {
    title: 'Corporate Internal System',
    recommendation: 'India',
    reason: "Structured enterprise environments require scale, process maturity, and large team coordination — strengths of India's enterprise delivery vendors.",
  },
];

export const ourWork: ProjectCard[] = [
  {
    industry: 'SaaS',
    category: 'Nepal-Based Development',
    title: 'SaaS MVP — Nepal Team',
    desc: 'Built for an early-stage product where fast iteration, close collaboration, and continuous feedback were critical during the validation phase.',
    href: '/ourwork',
  },
  {
    industry: 'Enterprise',
    category: 'India-Based Development',
    title: 'Enterprise Platform Rollout',
    desc: 'Delivered as a large-scale system requiring multiple development streams, structured execution, and high engineering capacity.',
    href: '/ourwork',
  },
  {
    industry: 'Startup',
    category: 'Nepal-Based Development',
    title: 'Product Development Partnership',
    desc: 'End-to-end product built with flexible requirements, allowing the product direction to evolve based on early user feedback.',
    href: '/ourwork',
  },
  {
    industry: 'Corporate',
    category: 'India-Based Development',
    title: 'Corporate Digital System',
    desc: 'Structured internal system delivered with clear scope, defined milestones, and enterprise-level delivery process.',
    href: '/ourwork',
  },
];

export const whyCards: CardItem[] = [
  {
    title: 'Objective Guidance',
    desc: 'We match you to the right outsourcing destination based on your actual project needs — not vendor preference or sales incentives.',
  },
  {
    title: 'Direct Collaboration',
    desc: 'Work directly with experienced developers and decision-makers for faster clarity, fewer layers, and better execution.',
  },
  {
    title: 'Flexible Engagement',
    desc: 'Choose dedicated teams, project-based delivery, or hybrid models — matched to how you actually want to work.',
  },
  {
    title: 'Strong Communication Flow',
    desc: 'Clear updates, structured reporting, and transparent development cycles throughout your outsourcing engagement.',
  },
  {
    title: 'Long-Term Partnership',
    desc: 'We stay involved after delivery — supporting growth, product improvements, and ongoing team scaling as your needs evolve.',
  },
];

export type DecisionValue = 'nepal' | 'india' | 'either';

export interface DecisionOption {
  label: string;
  value: DecisionValue;
  hint: string;
}

export interface DecisionQuestion {
  id: string;
  text: string;
  options: DecisionOption[];
}

export const decisionQuestions: DecisionQuestion[] = [
  {
    id: 'priority',
    text: 'What matters most for your project?',
    options: [
      { label: 'Close collaboration and direct communication', value: 'nepal', hint: 'Nepal' },
      { label: 'Large talent pool and enterprise scale options', value: 'india', hint: 'India' },
      { label: 'Balanced approach with both flexibility and scale', value: 'either', hint: 'Either works' },
    ],
  },
  {
    id: 'scale',
    text: 'What is your project scale?',
    options: [
      { label: 'Startup, MVP, or mid-sized product', value: 'nepal', hint: 'Nepal' },
      { label: 'Large enterprise system or multi-team project', value: 'india', hint: 'India' },
      { label: 'Uncertain or evolving scope', value: 'nepal', hint: 'Nepal' },
    ],
  },
  {
    id: 'workflow',
    text: 'How do you prefer to work with your development team?',
    options: [
      { label: 'Direct, close collaboration with consistent communication', value: 'nepal', hint: 'Nepal' },
      { label: 'Structured vendor-based execution with larger teams', value: 'india', hint: 'India' },
      { label: 'Flexible based on project phase', value: 'either', hint: 'Either works' },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Is Nepal cheaper than India for software development?',
    answer:
      'In many cases, Nepal offers competitive pricing with stronger team attention, while India provides a wider range of pricing depending on vendor size and complexity. The best value depends on your project type, team size, and how you prioritize collaboration versus scale.',
  },
  {
    question: 'Is India better than Nepal for outsourcing?',
    answer:
      'Neither is universally better. India excels in scale, talent volume, and enterprise delivery capacity. Nepal excels in collaboration, direct communication, and long-term partnership-focused engagement. The right choice depends on what your project needs most.',
  },
  {
    question: 'Which destination is better for startups?',
    answer:
      'Startups typically benefit more from Nepal — closer communication, flexible development cycles, and long-term collaboration are important when product direction is still evolving and fast iteration matters.',
  },
  {
    question: 'Can Nepal handle large-scale projects?',
    answer:
      'Yes, but India typically has larger enterprise-scale vendor capacity and a deeper pool for projects requiring very large teams, many parallel streams, or high-volume output. Nepal is strongest for focused mid-sized teams.',
  },
  {
    question: 'Why choose Nepal over India for software development?',
    answer:
      'Choose Nepal when you need closer collaboration, direct access to your development team, flexibility for evolving requirements, and a long-term partnership-focused approach to building your product.',
  },
  {
    question: 'Why choose India over Nepal for software development?',
    answer:
      'Choose India when you need large engineering teams, high delivery volume, a broad vendor ecosystem to choose from, or enterprise-scale delivery capacity for complex systems.',
  },
  {
    question: 'Does AITC work with teams in both Nepal and India?',
    answer:
      'AITC is headquartered in Nepal and primarily places Nepal-based teams. We can provide an objective recommendation based on your project type and help you evaluate options across both destinations.',
  },
  {
    question: 'Can AITC work with international clients?',
    answer:
      'Yes. AITC works with global clients across the US, UK, Europe, and Australia — across industries, project types, and team sizes — with strong timezone overlap management for distributed teams.',
  },
];
