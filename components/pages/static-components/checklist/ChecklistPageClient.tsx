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
} from '@/data/checklist/software-development-checklist-data';

export default function ChecklistPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ChecklistHero
        onOpenModal={openModal}
        heroTrustItems={heroTrustItems}
        titleLine1='Software Development'
        titleLine2='Project Checklist'
        tagline='Plan Smarter. Build Faster. Deliver Successfully.'
        description="Launching a software project without a structured plan leads to missed deadlines, budget overruns, and costly rework. Whether you're building a web app, mobile app, SaaS platform, or AI solution — this checklist provides a practical SDLC framework trusted by project managers and development teams."
        source='software-development-checklist'
        formSubtitle='Get instant access to the complete Software Development Project Checklist PDF.'
      />
      <ChecklistCoveredCards
        coveredCards={coveredCards}
        description='Everything your team needs to successfully plan, build, test, launch, and support a software project.'
      />
      <InteractiveChecklist
        onOpenModal={openModal}
        checklistPhases={checklistPhases}
        totalItems={TOTAL_ITEMS}
        storageKey='aitc_checklist_v2'
        heading='Software Development Project Checklist'
        description='Track your project readiness in real time. Check off each item as you complete it — progress saves automatically.'
        sidebarLabel='Project Completion'
      />
      <ChecklistDownloadCTA
        onOpenModal={openModal}
        downloadBullets={downloadBullets}
        heading='Download the Complete Software Development Project Checklist'
        description='A professionally structured PDF you can share with your project managers, stakeholders, developers, and leadership teams.'
      />
      <ChecklistHowToUse
        howToUseSteps={howToUseSteps}
        description='A four-phase workflow to guide your project from discovery to continuous improvement.'
      />
      <ChecklistWhyAITC
        whyStats={whyStats}
        heading='Why Choose AITC for Software Development?'
        description='AITC International helps organisations transform ideas into scalable, secure, and future-ready software solutions. We combine strategic consulting, engineering expertise, AI innovation, and modern development methodologies to deliver measurable business outcomes.'
        ctaText='Talk to Our Software Experts'
        testimonial="We don't just build software — we build solutions that scale with your business."
      />
      <ChecklistFinalCTA
        heading='Ready to Start Your Software Project?'
        description="Whether you're planning a new application, modernising existing systems, building an AI solution, or launching a SaaS platform — AITC can help you move from concept to deployment with confidence."
      />
      <ChecklistLeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        source='software-development-checklist'
        productName='Software Development Project Checklist'
      />
    </>
  );
}
