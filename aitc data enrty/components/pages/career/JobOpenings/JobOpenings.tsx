import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Link from 'next/link';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import LongArrow from '@/components/common/icon/LongArrow';

import ApplyFormMain from './ApplyFormMain';

export interface OurVacancySection {
  sectionTitle: string;
  mainTitle: string;
  description: string;
  vacancies: {
    id: number;
    jobTitle: string;
    location: string;
    slug: string;
    positionLevel: string;
  }[];
}

export interface Positions {
  id: number;
  name: string;
}

const JobOpenings = async () => {
  const data = await fetchData<OurVacancySection>('/career/our-vacancy-section');
  const positions = await fetchData<Positions[]>('/career/positions');

  return (
    <CommonAnimation className='w-full '>
      <div className='flex flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={data?.sectionTitle} />
          <CommonTitle title={data?.mainTitle} className='text-center' delay={delays.medium} />
        </div>
        <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
      </div>
      {data?.vacancies?.length === 0 ? (
        <ApplyFormMain positions={positions} />
      ) : (
        <div className=' mt-10 flex w-full flex-col items-center gap-8'>
          <div className='flex w-full flex-wrap justify-center gap-8'>
            {data?.vacancies?.map((item) => (
              <Link
                href={`/career/${item?.slug}`}
                key={item?.id}
                className='group flex w-full flex-col gap-4 rounded-lg border border-transparent bg-lightShad2 p-4 transition-all duration-700 hover:border-primary lg:max-w-[300px]'
              >
                <div className='flex flex-row items-center justify-between gap-4'>
                  <CommonHeader title={`${item?.positionLevel} ${item?.jobTitle}`} />
                  <span className='hover-arrow-slide'>
                    <LongArrow />
                  </span>
                </div>
                <CommonParargraph text={item?.location} />
              </Link>
            ))}
          </div>
          <div className='flex flex-col items-center justify-center gap-10 rounded-2xl bg-lightShad2 p-8 xl:max-w-[480px]'>
            <div className='flex flex-col items-center gap-8'>
              <p className='self-stretch text-center text-[32px] font-black leading-[126%] tracking-[0.64px] text-mainBlack'>
                Cannot find the right job?
              </p>
              <CommonParargraph
                text='Email us your resume or connect with us on social media. We would love to hear from you!'
                className='text-center'
              />
            </div>
            <CommonButton text='Apply now' href='mailto:info@aitc.ai' />
          </div>
        </div>
      )}
    </CommonAnimation>
  );
};

export default JobOpenings;
