import type { ChecklistReview } from '@/components/pages/static-components/checklist/ChecklistReviewSlider';
export type { ChecklistReview };

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface ChecklistPhase {
  id: string;
  title: string;
  items: ChecklistItem[];
}

export interface CoveredCard {
  title: string;
  desc: string;
}

export interface HowToUseStep {
  step: number;
  title: string;
  desc: string;
}

export interface WhydStat {
  value: string;
  label: string;
}


// ─── Hero ───────────────────────────────────────────────────────────────────

export const heroTrustItems: string[] = [
  '60+ MVP Validation & Launch Points',
  'Covers Idea to Market in One Framework',
  'Suitable for SaaS, Mobile, Web & AI Products',
  'Free Downloadable PDF',
];

// ─── Covered Cards ──────────────────────────────────────────────────────────

export const coveredCards: CoveredCard[] = [
  {
    title: 'Idea & Market Validation',
    desc: 'Problem definition, market size assessment, competitor analysis, customer discovery interviews, and demand validation.',
  },
  {
    title: 'User Research & Personas',
    desc: 'Target audience definition, user persona creation, pain point mapping, jobs-to-be-done analysis, and empathy mapping.',
  },
  {
    title: 'Feature Scoping & Prioritisation',
    desc: 'Core feature definition, MoSCoW prioritisation, user story mapping, scope constraints, and MVP boundary setting.',
  },
  {
    title: 'Technical Architecture',
    desc: 'Technology stack selection, infrastructure planning, API design, security requirements, and scalability considerations.',
  },
  {
    title: 'Design & UX Planning',
    desc: 'Wireframing, prototype creation, design system setup, usability testing, and accessibility planning.',
  },
  {
    title: 'Launch & Go-to-Market',
    desc: 'Launch strategy, success metrics, feedback loops, growth planning, and post-launch iteration roadmap.',
  },
];

// ─── Interactive Checklist ──────────────────────────────────────────────────

export const checklistPhases: ChecklistPhase[] = [
  {
    id: 'idea-validation',
    title: 'Idea & Market Validation',
    items: [
      { id: 'mv1-1', label: 'Define the core problem being solved' },
      { id: 'mv1-2', label: 'Identify target market and audience' },
      { id: 'mv1-3', label: 'Estimate total addressable market (TAM)' },
      { id: 'mv1-4', label: 'Conduct competitor analysis' },
      { id: 'mv1-5', label: 'Identify your unique value proposition' },
      { id: 'mv1-6', label: 'Run customer discovery interviews (min. 10)' },
      { id: 'mv1-7', label: 'Validate demand with surveys or landing page' },
      { id: 'mv1-8', label: 'Assess market timing and trends' },
      { id: 'mv1-9', label: 'Define key assumptions to test' },
      { id: 'mv1-10', label: 'Document validation findings and decisions' },
    ],
  },
  {
    id: 'user-research',
    title: 'User Research & Personas',
    items: [
      { id: 'mv2-1', label: 'Define primary and secondary user segments' },
      { id: 'mv2-2', label: 'Create detailed user personas (2–3 max)' },
      { id: 'mv2-3', label: 'Map user pain points and frustrations' },
      { id: 'mv2-4', label: 'Define jobs-to-be-done for each persona' },
      { id: 'mv2-5', label: 'Map existing user workflows and tools' },
      { id: 'mv2-6', label: 'Identify user goals and desired outcomes' },
      { id: 'mv2-7', label: 'Conduct empathy mapping sessions' },
      { id: 'mv2-8', label: 'Prioritise user needs by impact' },
      { id: 'mv2-9', label: 'Validate personas with real user feedback' },
      { id: 'mv2-10', label: 'Document user research findings' },
    ],
  },
  {
    id: 'feature-scoping',
    title: 'Feature Scoping & Prioritisation',
    items: [
      { id: 'mv3-1', label: 'List all potential features and ideas' },
      { id: 'mv3-2', label: 'Apply MoSCoW prioritisation framework' },
      { id: 'mv3-3', label: 'Define the MVP feature set (must-haves only)' },
      { id: 'mv3-4', label: 'Create user story map for core journeys' },
      { id: 'mv3-5', label: 'Write acceptance criteria for each feature' },
      { id: 'mv3-6', label: 'Define explicit out-of-scope items' },
      { id: 'mv3-7', label: 'Validate scope with stakeholders' },
      { id: 'mv3-8', label: 'Estimate effort for each MVP feature' },
      { id: 'mv3-9', label: 'Set scope change control process' },
      { id: 'mv3-10', label: 'Obtain stakeholder sign-off on MVP scope' },
    ],
  },
  {
    id: 'technical-planning',
    title: 'Technical Architecture & Planning',
    items: [
      { id: 'mv4-1', label: 'Select technology stack' },
      { id: 'mv4-2', label: 'Define system architecture and components' },
      { id: 'mv4-3', label: 'Plan database design and data model' },
      { id: 'mv4-4', label: 'Define API structure and integrations' },
      { id: 'mv4-5', label: 'Plan authentication and authorisation' },
      { id: 'mv4-6', label: 'Define security requirements and compliance' },
      { id: 'mv4-7', label: 'Plan hosting and infrastructure' },
      { id: 'mv4-8', label: 'Assess scalability needs post-MVP' },
      { id: 'mv4-9', label: 'Define technical constraints and trade-offs' },
      { id: 'mv4-10', label: 'Approve technical architecture plan' },
    ],
  },
  {
    id: 'design-ux',
    title: 'Design & UX Planning',
    items: [
      { id: 'mv5-1', label: 'Define core user flows and journeys' },
      { id: 'mv5-2', label: 'Create low-fidelity wireframes' },
      { id: 'mv5-3', label: 'Build interactive prototype' },
      { id: 'mv5-4', label: 'Conduct usability testing on prototype' },
      { id: 'mv5-5', label: 'Establish design system and style guide' },
      { id: 'mv5-6', label: 'Design high-fidelity UI screens' },
      { id: 'mv5-7', label: 'Plan responsive and mobile behaviour' },
      { id: 'mv5-8', label: 'Define accessibility requirements' },
      { id: 'mv5-9', label: 'Prepare design handoff for developers' },
      { id: 'mv5-10', label: 'Obtain design approval from stakeholders' },
    ],
  },
  {
    id: 'development-planning',
    title: 'Development & Sprint Planning',
    items: [
      { id: 'mv6-1', label: 'Break features into development tasks' },
      { id: 'mv6-2', label: 'Define sprint cadence and duration' },
      { id: 'mv6-3', label: 'Assign roles and responsibilities' },
      { id: 'mv6-4', label: 'Set up development environments' },
      { id: 'mv6-5', label: 'Configure source control and branching strategy' },
      { id: 'mv6-6', label: 'Set up CI/CD pipelines' },
      { id: 'mv6-7', label: 'Define coding standards and review process' },
      { id: 'mv6-8', label: 'Establish QA and testing strategy' },
      { id: 'mv6-9', label: 'Define definition of done for each feature' },
      { id: 'mv6-10', label: 'Kick off development sprint 1' },
    ],
  },
  {
    id: 'launch-gtm',
    title: 'Launch & Go-to-Market',
    items: [
      { id: 'mv7-1', label: 'Define launch success metrics and KPIs' },
      { id: 'mv7-2', label: 'Plan beta or soft launch strategy' },
      { id: 'mv7-3', label: 'Set up analytics and tracking' },
      { id: 'mv7-4', label: 'Prepare onboarding and user documentation' },
      { id: 'mv7-5', label: 'Plan marketing and acquisition channels' },
      { id: 'mv7-6', label: 'Define support and feedback collection process' },
      { id: 'mv7-7', label: 'Set up error monitoring and alerting' },
      { id: 'mv7-8', label: 'Conduct pre-launch readiness review' },
      { id: 'mv7-9', label: 'Execute launch and monitor closely' },
      { id: 'mv7-10', label: 'Schedule first post-launch iteration review' },
    ],
  },
];

export const TOTAL_ITEMS = checklistPhases.reduce((sum, p) => sum + p.items.length, 0);

// ─── How to Use ─────────────────────────────────────────────────────────────

export const howToUseSteps: HowToUseStep[] = [
  {
    step: 1,
    title: 'Validate',
    desc: 'Use the checklist during idea discovery to validate your market, research your users, and confirm real demand before writing a single line of code.',
  },
  {
    step: 2,
    title: 'Define',
    desc: 'Scope your MVP precisely — prioritise only the must-have features, define technical architecture, and align stakeholders on what is and isn\'t in scope.',
  },
  {
    step: 3,
    title: 'Build',
    desc: 'Execute with confidence using a structured sprint plan, clear roles, and defined quality standards to deliver your MVP on time and within budget.',
  },
  {
    step: 4,
    title: 'Launch & Learn',
    desc: 'Launch your MVP, gather real user feedback, monitor key metrics, and iterate rapidly to find product-market fit and plan your next release.',
  },
];

// ─── Why AITC ───────────────────────────────────────────────────────────────

export const whyStats: WhydStat[] = [
  { value: '50+', label: 'MVPs Delivered' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Custom Solutions' },
  { value: 'AI', label: 'Ready Expertise' },
];

// ─── Download CTA ────────────────────────────────────────────────────────────

export const downloadBullets: string[] = [
  'Complete MVP Planning Framework',
  'Feature Prioritisation Matrix',
  'Technical Architecture Checklist',
  'UX & Design Planning Guide',
  'Go-to-Market Launch Checklist',
  'Post-Launch Iteration Framework',
];

// ─── Why AITC Dashboard Rows ─────────────────────────────────────────────────

export const whyDashboardRows: Array<{ label: string; pct: number }> = [
  { label: 'Idea & Market Validation', pct: 100 },
  { label: 'User Research & Personas', pct: 100 },
  { label: 'Feature Scoping', pct: 85 },
  { label: 'Technical Architecture', pct: 60 },
  { label: 'Design & UX Planning', pct: 30 },
];

// ─── Reviews ─────────────────────────────────────────────────────────────────

export const checklistReviews: ChecklistReview[] = [
  {
    name: 'James Thornton',
    role: 'Co-Founder & CEO',
    company: 'LaunchStack',
    rating: 5,
    text: 'This MVP Planning Checklist saved us from making the classic mistake of building before validating. We caught three critical assumptions in week one that would have cost us months of wasted development.',
  },
  {
    name: 'Priya Mehta',
    role: 'Product Manager',
    company: 'FinTrack Solutions',
    rating: 5,
    text: 'The feature scoping and prioritisation section alone was worth its weight in gold. Our team went from endless scope debates to a clear, signed-off MVP in a single sprint planning session.',
  },
  {
    name: 'Daniel O\'Sullivan',
    role: 'CTO',
    company: 'HealthBridge',
    rating: 5,
    text: 'Finally a checklist that covers the technical architecture phase properly. We used it to align our engineering team before a single line of code was written — the project ran smoothly from day one.',
  },
  {
    name: 'Sophie Laurent',
    role: 'Startup Founder',
    company: 'EduPath',
    rating: 5,
    text: 'I\'ve built three products before and always struggled with the go-to-market phase. The launch checklist section gave us a repeatable framework that we now use for every release cycle.',
  },
];
