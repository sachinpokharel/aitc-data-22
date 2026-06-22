'use client';

import { delays } from '@/utils/animation-config';
import { useState } from 'react';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import ConsultationForm from './ConsultationForm';
import { ConsultationModal } from './ConsultationModal';

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Dummy data
  const data = {
    mainTitle: 'Ready to Build With a Reliable Offshore Team?',
    description: 'Book a free consultation and get a tailored plan: team structure, timeline, and pricing.',
  };
  const buttonText = 'Book a free consultation';

  return (
    <>
      <div
        style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
        className='main-common-padding common-section  flex flex-col gap-14 bg-[url("/images/cta_bg.svg")] text-white'
      >
        <div className='flex max-w-[1000px]  flex-col gap-8'>
          <CommonTitle title={data?.mainTitle} className='text-center text-white' delay={delays.medium} />
          <CommonParargraph text={data?.description} className='text-center text-white' delay={delays.long} />
        </div>
        <CommonAnimation>
          <CommonButton
            href='#'
            text={buttonText ?? 'Book a free consultation'}
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          />
        </CommonAnimation>
      </div>
      {isModalOpen && (
        <ConsultationModal onClose={closeModal} title='Book a Free Consultation'>
          <ConsultationForm onClose={closeModal} />
        </ConsultationModal>
      )}
    </>
  );
};

export default FinalCTA;
