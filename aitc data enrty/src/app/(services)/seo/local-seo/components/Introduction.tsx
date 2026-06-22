import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Introduction = async ({ url, buttonText }: { url: string; buttonText?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);
  return (
    <CommonAnimation className='introduction main-common-padding flex max-w-[1500px] flex-col justify-center gap-10 lg:flex-row lg:gap-16'>
      <div className='flex justify-center lg:max-w-[451px] lg:justify-start'>
        <Image
          src={data?.image as string}
          alt='kho'
          width={600}
          height={541}
          className='w-full max-w-[451px] rounded-2xl object-cover'
        />
      </div>
      <div className='flex flex-col gap-10 xmd:gap-[3.25rem] lg:w-1/2'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title as string} className=' text-center lg:text-left ' delay={delays.medium} />
          <CommonParargraph
            text={data?.description as string}
            className='text-center lg:text-left'
            delay={delays.long}
          />
        </div>
        <CommonButton text={buttonText ?? 'Learn more'} href='/' className='mx-auto lg:mx-0' />
      </div>
    </CommonAnimation>
  );
};

export default Introduction;
