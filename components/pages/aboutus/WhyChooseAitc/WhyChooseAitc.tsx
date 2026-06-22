import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { Zoom } from 'react-awesome-reveal';
import { type OurMissionWhyChooseAitcResponse } from '@/types/aboutus/banner';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const WhyChooseAitc = async () => {
  const { sectionTitle, mainTitle, description, features } = await fetchData<OurMissionWhyChooseAitcResponse>(
    '/about-us/why-choose-aitc-section'
  );
  return (
    <CommonAnimation className='common-padding mx-auto flex max-w-[1354px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem] '>
      <div className='flex w-full flex-col gap-8 xmd:px-10'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={mainTitle} className='text-center' delay={delays.medium} />
        </div>
        <CommonParargraph text={description} className='text-center' delay={delays.long} />
      </div>
      <div className='grid grid-cols-1 place-items-start gap-8 xmd:grid-cols-2 lg:grid-cols-3'>
        {features?.map((item) => (
          <Zoom key={item?.id} cascade={false} fraction={0.4} triggerOnce>
            <Card title={item.title} icon={item?.icon} description={item?.description} />
          </Zoom>
        ))}
      </div>
      <CommonButton text='Be a partner' target='_blank' href='https://calendly.com/aitc-schedule/30min' />
    </CommonAnimation>
  );
};

export default WhyChooseAitc;
