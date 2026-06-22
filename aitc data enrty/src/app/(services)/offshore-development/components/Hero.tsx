'use client';

import { cn } from '@/utils/cn';
import { useState } from 'react';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

import ConsultationForm from './ConsultationForm';
import { ConsultationModal } from './ConsultationModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <CommonAnimation>
        <BannerWrapper image={'/offshore/hero.jpg'}>
          <div
            className={cn(
              'flex max-w-[616px] flex-col items-center justify-center gap-8 xl:max-w-[580px] xl:items-start'
            )}
          >
            <CommonTitleH1
              title='Offshore Software Development Teams That Deliver Like In-House'
              className='text-center capitalize xl:text-left'
              delay={0.8}
            />
            <div className='flex flex-col items-center gap-6 xl:items-start'>
              <CommonParargraph
                text='Hire ISO-certified, senior offshore engineers with flexible overlap hours—built for USA product teams. Get a dedicated team or full project delivery with predictable sprints, quality assurance, and lower cost.'
                className='text-center lg:text-start'
                delay={0.9}
              />

              <div className='flex flex-wrap items-center justify-center gap-4'>
                <button
                  onClick={openModal}
                  className='w-fit whitespace-nowrap rounded bg-primary px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]'
                >
                  Book a Free Consultation
                </button>
                <CommonButton
                  href='/contact-us?form=service_enquiry'
                  text='Get Pricing & Team Options'
                  variant='secondary'
                />
              </div>
              <div className='flex flex-col gap-4 md:flex-row'>
                <span className='flex items-center gap-2 text-lg font-medium text-mainBlack'>
                  <span className='inline-block size-2 rounded-full bg-primary' />
                  ISO Certified
                </span>
                <span className='flex items-center gap-2 text-lg font-medium text-mainBlack'>
                  <span className='inline-block size-2 rounded-full bg-primary' />
                  NDA & IP Protection
                </span>
                <span className='flex items-center gap-2 text-lg font-medium text-mainBlack'>
                  <span className='inline-block size-2 rounded-full bg-primary' />
                  Start in 7-14 Days
                </span>
              </div>
            </div>
          </div>
        </BannerWrapper>
      </CommonAnimation>
      {isModalOpen && (
        <ConsultationModal onClose={closeModal} title='Book a Free Consultation'>
          <ConsultationForm onClose={closeModal} />
        </ConsultationModal>
      )}
    </>
  );
};

export default Hero;
