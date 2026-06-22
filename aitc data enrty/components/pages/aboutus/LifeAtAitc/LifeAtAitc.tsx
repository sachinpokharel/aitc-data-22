import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import { type LifeAtAitcResponse } from '@/types/aboutus/ourcorevalue';
import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';

import Marquee from '../../Home/CollaborativePartners/MarqueeComponent';
import Card from './Card';

const LifeAtAitc = async () => {
  // life at aitc and core values has same types
  const { mainTitle, description, images, sectionTitle } = await fetchData<LifeAtAitcResponse>(
    '/about-us/life-at-aitc-section'
  );

  return (
    <CommonAnimation className='mx-auto flex flex-col items-center gap-10  overflow-x-hidden py-[3.75rem]  xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
      <div className='common-padding flex  flex-col gap-8 xl:max-w-[70%]'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={mainTitle} className='text-center' delay={delays.medium} />
        </div>
        <CommonParargraph text={description} className='text-center' delay={delays.long} />
      </div>
      <Marquee pauseOnHover className={cn(` [--duration:120s]`)}>
        {images?.map((item) => <Card key={item?.id} id={item?.id} url={item?.url} />)}
      </Marquee>
      <CommonButton text='Join us now' href='/career' />
    </CommonAnimation>
  );
};

export default LifeAtAitc;
