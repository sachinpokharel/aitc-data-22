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
  '50+ Project Validation Points',
  'Covers the Full Software Development Lifecycle',
  'Suitable for Web, Mobile, SaaS & AI Projects',
  'Free Downloadable PDF',
];

// ─── Covered Cards ──────────────────────────────────────────────────────────

export const coveredCards: CoveredCard[] = [
  {
    title: 'Planning & Discovery',
    desc: 'Project goals, stakeholder alignment, business requirements, scope definition, budgeting, timelines, and risk management.',
  },
  {
    title: 'Architecture & Design',
    desc: 'System architecture, technology selection, database planning, integrations, security frameworks, and UX planning.',
  },
  {
    title: 'Software Development',
    desc: 'Frontend, backend, APIs, integrations, development workflows, and code quality practices across the full stack.',
  },
  {
    title: 'Testing & Quality Assurance',
    desc: 'Unit testing, integration testing, performance validation, security testing, and user acceptance testing.',
  },
  {
    title: 'Deployment & Launch',
    desc: 'Production readiness, deployment planning, rollback procedures, monitoring configuration, and go-live validation.',
  },
  {
    title: 'Support & Optimization',
    desc: 'Post-launch monitoring, performance improvements, analytics review, and continuous development planning.',
  },
];

// ─── Interactive Checklist ──────────────────────────────────────────────────

export const checklistPhases: ChecklistPhase[] = [
  {
    id: 'planning',
    title: 'Planning & Discovery',
    items: [
      { id: 'p1-1', label: 'Define project objectives' },
      { id: 'p1-2', label: 'Identify stakeholders' },
      { id: 'p1-3', label: 'Gather business requirements' },
      { id: 'p1-4', label: 'Gather technical requirements' },
      { id: 'p1-5', label: 'Define project scope' },
      { id: 'p1-6', label: 'Establish budget' },
      { id: 'p1-7', label: 'Create timeline' },
      { id: 'p1-8', label: 'Define success metrics' },
      { id: 'p1-9', label: 'Conduct risk assessment' },
      { id: 'p1-10', label: 'Approve project plan' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Design',
    items: [
      { id: 'p2-1', label: 'Define system architecture' },
      { id: 'p2-2', label: 'Select technology stack' },
      { id: 'p2-3', label: 'Design database schema' },
      { id: 'p2-4', label: 'Define API requirements' },
      { id: 'p2-5', label: 'Create wireframes' },
      { id: 'p2-6', label: 'Review UX design' },
      { id: 'p2-7', label: 'Define security requirements' },
      { id: 'p2-8', label: 'Plan scalability requirements' },
      { id: 'p2-9', label: 'Define integrations' },
      { id: 'p2-10', label: 'Approve solution architecture' },
    ],
  },
  {
    id: 'dev-prep',
    title: 'Development Preparation',
    items: [
      { id: 'p3-1', label: 'Setup repository' },
      { id: 'p3-2', label: 'Configure development environments' },
      { id: 'p3-3', label: 'Configure staging environment' },
      { id: 'p3-4', label: 'Configure production environment' },
      { id: 'p3-5', label: 'Setup CI/CD pipelines' },
      { id: 'p3-6', label: 'Define branching strategy' },
      { id: 'p3-7', label: 'Establish coding standards' },
      { id: 'p3-8', label: 'Assign team roles' },
      { id: 'p3-9', label: 'Setup monitoring tools' },
      { id: 'p3-10', label: 'Prepare technical documentation' },
    ],
  },
  {
    id: 'development',
    title: 'Software Development',
    items: [
      { id: 'p4-1', label: 'Complete frontend development' },
      { id: 'p4-2', label: 'Complete backend development' },
      { id: 'p4-3', label: 'Develop APIs' },
      { id: 'p4-4', label: 'Implement integrations' },
      { id: 'p4-5', label: 'Configure authentication' },
      { id: 'p4-6', label: 'Configure authorization' },
      { id: 'p4-7', label: 'Complete peer reviews' },
      { id: 'p4-8', label: 'Complete documentation' },
      { id: 'p4-9', label: 'Address technical debt' },
      { id: 'p4-10', label: 'Finalize development deliverables' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Quality Assurance',
    items: [
      { id: 'p5-1', label: 'Execute unit tests' },
      { id: 'p5-2', label: 'Execute integration tests' },
      { id: 'p5-3', label: 'Conduct security testing' },
      { id: 'p5-4', label: 'Perform performance testing' },
      { id: 'p5-5', label: 'Validate user journeys' },
      { id: 'p5-6', label: 'Conduct UAT' },
      { id: 'p5-7', label: 'Fix critical defects' },
      { id: 'p5-8', label: 'Retest resolved issues' },
      { id: 'p5-9', label: 'Validate requirements coverage' },
      { id: 'p5-10', label: 'Approve release candidate' },
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment & Launch',
    items: [
      { id: 'p6-1', label: 'Verify deployment readiness' },
      { id: 'p6-2', label: 'Complete deployment checklist' },
      { id: 'p6-3', label: 'Prepare rollback procedures' },
      { id: 'p6-4', label: 'Configure monitoring' },
      { id: 'p6-5', label: 'Configure alerts' },
      { id: 'p6-6', label: 'Deploy to production' },
      { id: 'p6-7', label: 'Validate production environment' },
      { id: 'p6-8', label: 'Verify integrations' },
      { id: 'p6-9', label: 'Verify performance' },
      { id: 'p6-10', label: 'Obtain launch approval' },
    ],
  },
  {
    id: 'support',
    title: 'Support & Optimization',
    items: [
      { id: 'p7-1', label: 'Monitor system health' },
      { id: 'p7-2', label: 'Review analytics' },
      { id: 'p7-3', label: 'Collect user feedback' },
      { id: 'p7-4', label: 'Resolve production issues' },
      { id: 'p7-5', label: 'Prioritize enhancements' },
      { id: 'p7-6', label: 'Update roadmap' },
      { id: 'p7-7', label: 'Maintain security updates' },
      { id: 'p7-8', label: 'Optimize performance' },
      { id: 'p7-9', label: 'Conduct project retrospective' },
      { id: 'p7-10', label: 'Plan future releases' },
    ],
  },
];

export const TOTAL_ITEMS = checklistPhases.reduce((sum, p) => sum + p.items.length, 0);

// ─── How to Use ─────────────────────────────────────────────────────────────

export const howToUseSteps: HowToUseStep[] = [
  {
    step: 1,
    title: 'Plan',
    desc: 'Use the checklist during discovery and planning to define requirements, scope, risks, stakeholders, and business objectives.',
  },
  {
    step: 2,
    title: 'Build',
    desc: 'Track development activities, technical milestones, integrations, and implementation progress across all workstreams.',
  },
  {
    step: 3,
    title: 'Validate',
    desc: 'Ensure QA, security testing, performance validation, and user acceptance testing are fully completed before launch.',
  },
  {
    step: 4,
    title: 'Launch & Improve',
    desc: 'Deploy with confidence, monitor performance, gather feedback, and continuously iterate on your software solution.',
  },
];

// ─── Why AITC ───────────────────────────────────────────────────────────────

export const whyStats: WhydStat[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Custom Solutions' },
  { value: 'AI', label: 'Ready Expertise' },
];

// ─── Download CTA ────────────────────────────────────────────────────────────

export const downloadBullets: string[] = [
  'Complete SDLC Checklist',
  'Project Planning Framework',
  'Development Readiness Checklist',
  'Quality Assurance Validation Points',
  'Deployment Readiness Guide',
  'Post-Launch Success Framework',
];
