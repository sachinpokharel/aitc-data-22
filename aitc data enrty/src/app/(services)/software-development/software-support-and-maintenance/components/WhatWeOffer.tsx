import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import AugmentedRealityCard from '../../../ar-vr/components/AugmentedReality/AugmentedRealityCard';

const WhatWeOffer = async ({ className, url }: { className?: string; url?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url as string);

  return (
    <CommonAnimation className={cn(className, 'augmented-reality')}>
      <div className='common-section common-padding max-w-[1350px] overflow-hidden'>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title={data?.title as string} delay={delays.medium} />
          {data?.description && (
            <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
          )}
        </div>
        {data?.image && (
          <Image
            src={data?.image}
            width={628}
            height={366}
            alt='augmented-reality'
            className='w-full max-w-[628px] rounded-2xl'
          />
        )}
        <div
          style={{
            backgroundImage: `url("/svg/ar.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
          className='flex w-full flex-col gap-8'
        >
          {data?.keyPoints?.map((item, index) => (
            <div key={index} className={cn(index % 2 === 0 ? 'justify-start ' : 'justify-end', 'flex w-full')}>
              <div className={cn('flex flex-row items-start gap-6', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')}>
                <AugmentedRealityCard
                  index={index}
                  title={item?.title as string}
                  description={item?.description as string}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default WhatWeOffer;
