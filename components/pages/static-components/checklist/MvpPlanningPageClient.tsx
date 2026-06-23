'use client';

import { useState } from 'react';
import ChecklistHero from './ChecklistHero';
import ChecklistCoveredCards from './ChecklistCoveredCards';
import InteractiveChecklist from './InteractiveChecklist';
import ChecklistDownloadCTA from './ChecklistDownloadCTA';
import ChecklistHowToUse from './ChecklistHowToUse';
import ChecklistWhyAITC from './ChecklistWhyAITC';
import ChecklistFinalCTA from './ChecklistFinalCTA';
import ChecklistLeadModal from './ChecklistLeadModal';
import {
  heroTrustItems,
  coveredCards,
  checklistPhases,
  TOTAL_ITEMS,
  howToUseSteps,
  whyStats,
  downloadBullets,
 
} from '@/data/checklist/mvp-planning-checklist-data';

export default function MvpPlanningPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ChecklistHero
        onOpenModal={openModal}
        heroTrustItems={heroTrustItems}
        titleLine1='MVP Planning'
        titleLine2='Checklist'
        tagline='Validate Fast. Build Right. Launch with Confidence.'
        description="Building an MVP without a structured plan leads to wasted resources, missed product-market fit, and costly pivots. Whether you're a founder, product manager, or startup team — this checklist provides a practical framework to go from idea to launched MVP with confidence."
        source='mvp-planning-checklist'
        formSubtitle='Get instant access to the complete MVP Planning Checklist PDF.'
      />
      <ChecklistCoveredCards
        coveredCards={coveredCards}
        description='Everything your team needs to successfully validate, plan, build, and launch a minimum viable product.'
      />
      <InteractiveChecklist
        onOpenModal={openModal}
        checklistPhases={checklistPhases}
        totalItems={TOTAL_ITEMS}
        storageKey='aitc_mvp_checklist_v1'
        heading='MVP Planning Checklist'
        description='Track your MVP readiness in real time. Check off each item as you complete it — progress saves automatically.'
        sidebarLabel='MVP Planning Progress'
        completionHeading='Great Progress!'
        completionDescription="You've completed a significant portion of your MVP Planning Checklist. Your product is well on its way to a successful launch."
      />
      <ChecklistDownloadCTA
        onOpenModal={openModal}
        downloadBullets={downloadBullets}
        heading='Download the Complete MVP Planning Checklist'
        description="A professionally structured PDF you can share with your co-founders, product team, stakeholders, and investors to align on your MVP strategy."
      />
      <ChecklistHowToUse
        howToUseSteps={howToUseSteps}
        description='A four-phase workflow to guide your product from raw idea to a launched, iterated MVP.'
      />
      <ChecklistWhyAITC
        whyStats={whyStats}
        
        heading='Why Choose AITC to Build Your MVP?'
        description='AITC International partners with founders, startups, and enterprise teams to turn ideas into validated, scalable MVPs. We bring strategic product thinking, engineering expertise, and AI-ready development to every engagement — helping you get to market faster without compromising quality.'
        ctaText='Talk to Our Product Experts'
        testimonial="We don't just build MVPs — we help you find product-market fit faster."
        dashboardRows={[
          { label: 'Idea & Market Validation', pct: 100 },
          { label: 'User Research & Personas', pct: 100 },
          { label: 'Feature Scoping', pct: 85 },
          { label: 'Technical Architecture', pct: 60 },
          { label: 'Design & UX Planning', pct: 30 },
        ]}
      />
      <ChecklistFinalCTA
        heading='Ready to Build Your MVP?'
        description="Whether you're validating a new idea, launching a SaaS product, building a mobile app, or developing an AI-powered solution — AITC can help you move from concept to MVP with speed and confidence."
      />
      <ChecklistLeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        source='mvp-planning-checklist'
        productName='MVP Planning Checklist'
      />
    </>
  );
}
