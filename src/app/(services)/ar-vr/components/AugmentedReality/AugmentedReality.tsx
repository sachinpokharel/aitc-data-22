import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import AugmentedRealityCard from './AugmentedRealityCard';

const AugmentedReality = async ({ className, type, url }: { className?: string; type: string; url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className={cn(className, 'augmented-reality overflow-x-hidden')}>
      <div className='common-section common-padding relative max-w-[1350px]'>
        <CommonTitle title={data?.title as string} delay={delays.medium} />
        <Image
          src={data?.image as string}
          alt='check'
          width={628}
          height={366}
          sizes='(100vw-10rem)'
          className=' rounded-2xl object-cover '
        />
        <CommonParargraph text={data?.description as string} className='text-center' delay={delays.long} />
        <p className='rounded-lg bg-primary p-1 text-lg font-black leading-[150%] tracking-[0.36px] text-white'>
          Key features of {type}
        </p>
        <div className='relative flex w-full flex-col '>
          <div className='relative'>
            {/* Background color */}
            <div className='absolute inset-0 z-0 bg-primary opacity-75'></div>
            {/* Image */}
            <div className='absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 xmd:block'>
              <Image src='/svg/ar.svg' alt='check' width={634} height={323} sizes='(100vw-10rem)' />
            </div>
          </div>
          <div className='relative z-20 flex w-full flex-col gap-8'>
            {data?.keyPoints?.map((item, index) => (
              <div key={index + 1} className={cn(index % 2 === 0 ? 'justify-start ' : 'justify-end', 'flex w-full')}>
                <div
                  className={cn(
                    'flex flex-row items-start gap-6',
                    index % 2 === 0 ? 'flex-row' : 'max-w-[400px] flex-row-reverse'
                  )}
                >
                  <AugmentedRealityCard
                    index={index}
                    description={item?.description as string}
                    title={item?.title as string}
                    image={item?.image as string}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default AugmentedReality;
