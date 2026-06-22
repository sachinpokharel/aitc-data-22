import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type OurMissionWhyChooseAitcResponse } from '@/types/aboutus/banner';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import CardWrapper from './CardWrapper';

const OurMission = async () => {
  const { sectionTitle, mainTitle, description, features } = await fetchData<OurMissionWhyChooseAitcResponse>(
    '/about-us/our-mission-section'
  );

  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='common-padding mx-auto flex max-w-[1370px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonChip text={sectionTitle} />
            <CommonTitle title={mainTitle} className='text-center' delay={delays.long} />
          </div>
          <CommonParargraph text={description} className='text-center' delay={delays.longer} />
        </div>
        <CardWrapper features={features} />
        <CommonButton text='Get a free quote' href='/aboutus?form=general_enquiry' />
      </div>
    </CommonAnimation>
  );
};

export default OurMission;
