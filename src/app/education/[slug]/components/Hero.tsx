'use client';

import moment from 'moment';
import { useState } from 'react';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleH1 } from '@/components/common/CommonTitle';
import Progress from '@/components/common/icon/Progress';
import Rupee from '@/components/common/icon/Rupee';
import Tick from '@/components/common/icon/Tick';
import Timer from '@/components/common/icon/Timer';

import EnquiryForm from './EnquiryForm';

const Hero = ({
  title,
  price,
  minDuration,
  maxDuration,
  durationUnit,
  coverImage,
  description,
  completedSessionCount,
  runningSessionCount,
  nextSession,
  slug,
}: {
  title: string;
  price: number;
  minDuration: number;
  maxDuration: number;
  durationUnit: string;
  coverImage: string;
  description: string;
  completedSessionCount: number;
  runningSessionCount: number;
  nextSession: string;
  slug: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CommonAnimation className='main-common-padding mx-auto max-w-[1350px]'>
      <div className='relative z-[-1] h-[445px] w-full rounded-2xl max-md:h-[150px]'>
        <Image src={coverImage} alt='spotlight' fill sizes='100vw ' className='rounded-2xl object-cover' />
      </div>
      <div className='z-10 mx-auto mt-[-10%] flex w-[90%] max-w-[1190px] flex-col items-center gap-10 rounded-2xl bg-white p-8 shadow-2xl xmd:gap-[3.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitleH1 title={title} className='text-center' />
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {price !== 1 && (
              <p className='flex flex-row items-center gap-2'>
                <Rupee />
                <span className='text-primary'>{Number(price)?.toLocaleString('en-IN')}</span>
              </p>
            )}
            <div className='flex flex-row gap-2'>
              <Timer />
              <p className='capitalize text-mainBlack'>
                {minDuration}-{maxDuration} {durationUnit}
              </p>
            </div>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-6'>
            {completedSessionCount > 0 && (
              <div className='flex flex-row items-center gap-2'>
                <Tick />
                <p className='text-mainBlack'>{completedSessionCount} Session completed</p>
              </div>
            )}
            {runningSessionCount > 0 && (
              <div className='flex flex-row gap-2 text-primary'>
                <Progress />
                <p>{runningSessionCount} Session running</p>
              </div>
            )}
            <p className='rounded-md bg-lightShade1 p-0.5 text-secondary'>
              Next session starts from {moment(nextSession).format('MMM YYYY')}
            </p>
          </div>
          <CommonParargraph text={description} className='text-center' />
        </div>
        <button
          onClick={openModal}
          className=' w-fit whitespace-nowrap rounded bg-primary px-4 py-[0.78125rem] text-lg leading-[1.6875rem] text-white backdrop-blur-[7px] hover:shadow-[5px_4px_9px_0px_rgba(255,117,0,0.2)]'
        >
          Enquiry Now
        </button>
      </div>
      {isModalOpen && <EnquiryForm closeModal={closeModal} slug={slug} />}
    </CommonAnimation>
  );
};

export default Hero;
