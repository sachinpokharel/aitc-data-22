'use client';

import { Suspense } from 'react';
import { type WorkflowProcessDetail } from '@/types/Home/ProductDevelopment';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import IndividualDetail from '@/components/pages/Home/ProductDevelopment/IndividualDetail';
import Menu from '@/components/pages/Home/ProductDevelopment/Menu';
import ProductDevelopment from '@/components/pages/Home/ProductDevelopment/ProductDevelopment';

const workflowProcessDetail: WorkflowProcessDetail[] = [
  {
    id: 1,
    title: 'Discovery Call (30 minutes)',
    iconUrl: '/icons/1.png',
    description:
      'We discuss your product goals, timeline, budget, and tech stack in a quick 30-minute call. We clarify priorities, risks, and the best engagement model—dedicated team, project delivery, or hybrid—so we can scope accurately and align expectations from day one.',
    slug: 'discovery-call',
    processRepresentImageUrl: '/icons/discovery.png',
    workflowStep: ['Initial consultation', 'Requirements gathering', 'Scope definition'],
  },
  {
    id: 2,
    title: 'Team Proposal (48–72 hours)',
    iconUrl: '/icons/2.png',
    description:
      'Within 2–3 business days, we share a tailored proposal with recommended roles, team size, pricing, and timelines. You also receive vetted candidate profiles that match your stack and delivery needs, with interview options if you want additional screening.',
    slug: 'team-proposal',
    processRepresentImageUrl: '/icons/proposal.png',
    workflowStep: ['Proposal creation', 'Team matching', 'Timeline planning'],
  },
  {
    id: 3,
    title: 'Onboarding (7–14 days)',
    iconUrl: '/icons/3.png',
    description:
      'We set up tools, access, and workflows for secure delivery. This includes NDA/IP protection, repo and environment access, sprint cadence, and communication channels. We review your codebase and finalize the first sprint plan to ensure a fast and smooth start.',
    slug: 'onboarding',
    processRepresentImageUrl: '/icons/onboarding.png',
    workflowStep: ['Setup & configuration', 'Access provisioning', 'Sprint planning'],
  },
  {
    id: 4,
    title: 'Weekly Sprint Delivery',
    iconUrl: '/icons/4.png',
    description:
      'We deliver in sprints with clear scope, regular updates, and weekly demos. You get full visibility in Jira and GitHub, plus quality controls like code reviews, QA, and CI/CD practices. We stay flexible to changing priorities while keeping delivery consistent.',
    slug: 'sprint-delivery',
    processRepresentImageUrl: '/icons/sprint.png',
    workflowStep: ['Sprint execution', 'Code review', 'Quality assurance', 'Deployment'],
  },
  {
    id: 5,
    title: 'Scale & Optimize',
    iconUrl: '/icons/5.png',
    description:
      'We scale your team as your roadmap grows—adding roles like QA automation, DevOps, or architects. We continuously improve velocity, stability, and automation, helping you deliver faster while maintaining quality and long-term reliability.',
    slug: 'scale-optimize',
    processRepresentImageUrl: '/icons/scale.png',
    workflowStep: ['Team scaling', 'Process optimization', 'Performance improvement'],
  },
];

const menu = workflowProcessDetail.map((item) => ({
  id: item.id,
  title: item.title,
  slug: item.slug,
  url: item.slug,
  icon: item.iconUrl,
}));

const data = {
  title: 'A Proven Offshore Delivery Process',
  workflowProcessDetail,
};

const Process = () => {
  return (
    <Suspense fallback={<div>Loading... Skeleton required </div>}>
      <CommonAnimation>
        <ProductDevelopment title={data.title}>
          <Menu menulist={menu} />
          <Suspense fallback={<div>Loading...</div>}>
            <IndividualDetail menuDetails={data.workflowProcessDetail} />
          </Suspense>
        </ProductDevelopment>
      </CommonAnimation>
    </Suspense>
  );
};

export default Process;
