import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Help = async () => {
  const data = await fetchData<CommonSubServiceSection>('/services/web-development/section-one');

  return (
    <CommonAnimation className='main-common-padding flex max-w-[1300px]  flex-col items-center gap-10 lg:flex-row lg:gap-16 '>
      <div className='flex w-full flex-col gap-[3.25rem] lg:w-1/2'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title as string} className='text-center lg:text-left' delay={delays.medium} />
          <CommonParargraph
            text={data?.description as string}
            className='text-center lg:text-left'
            delay={delays.long}
          />
        </div>
        <CommonButton text='Learn more' href='/contact-us' className='mx-auto lg:mx-0' />
      </div>
      <div
        className=' lg:w-1/2
      '
      >
        <Image src={data?.image as string} width={521} height={358} alt='help' />
      </div>
    </CommonAnimation>
  );
};

export default Help;

export const MobileHelp = async () => {
  const data = await fetchData<CommonSubServiceSection>('/services/app-development/section-three');

  return (
    <CommonAnimation className='main-common-padding flex max-w-[1300px]  flex-col items-center gap-10 lg:flex-row lg:gap-16 '>
      <div className='flex w-full flex-col gap-[3.25rem] lg:w-1/2'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title as string} className='text-center lg:text-left' delay={delays.medium} />
          <CommonParargraph
            text={data?.description as string}
            className='text-center lg:text-left'
            delay={delays.long}
          />
        </div>
        <CommonButton text='Learn more' href='/contact-us' className='mx-auto lg:mx-0' />
      </div>
      <div
        className=' lg:w-1/2
      '
      >
        <Image src={data?.image as string} width={521} height={358} alt='help' />
      </div>
    </CommonAnimation>
  );
};
