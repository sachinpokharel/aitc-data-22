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

export default function ChecklistPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ChecklistHero onOpenModal={openModal} />
      <ChecklistCoveredCards />
      <InteractiveChecklist onOpenModal={openModal} />
      <ChecklistDownloadCTA onOpenModal={openModal} />
      <ChecklistHowToUse />
      <ChecklistWhyAITC />
      <ChecklistFinalCTA />
      <ChecklistLeadModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
