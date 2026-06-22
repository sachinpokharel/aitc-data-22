'use client';

import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';

import ApplyFormInterest from '../IndividualCareer/ApplyFormInterest';
import { type Positions } from './JobOpenings';

const ApplyFormMain = ({ positions }: { positions: Positions[] }) => {
  return (
    <div className='mt-[3.25rem] flex w-full flex-col gap-12 rounded-2xl bg-lightShade1 p-8 xl:flex-row'>
      <div className='flex flex-col items-center gap-8 xl:w-1/2 xl:items-start'>
        <Image src='/icons/apply.png' alt='apply' width={400} height={400} className='size-[240px] ' />
        <p className='self-stretch text-center text-[32px] font-black leading-[126%] tracking-[0.64px] text-mainBlack xl:text-start'>
          We don&apos;t have any open vacancies for now.
        </p>
        <CommonParargraph
          text='If you would like to be considered for future opportunities, please submit your resume or connect with us on our socials. We would love to hear from you.'
          className='text-center xl:text-start'
        />
      </div>
      <div className='flex flex-col gap-8 rounded-2xl bg-white p-6 xl:w-1/2'>
        <p className='self-stretch text-center text-[32px] font-black leading-[126%] tracking-[0.64px] text-mainBlack'>
          Apply Now
        </p>
        <ApplyFormInterest alternate positions={positions} />
      </div>
    </div>
  );
};

export default ApplyFormMain;
