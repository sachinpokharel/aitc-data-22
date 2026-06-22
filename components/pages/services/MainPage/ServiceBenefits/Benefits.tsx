import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type BenefitsSection } from '@/types/service';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import BenefitCard from './BenefitCard';

const Benefits = async () => {
  const data = await fetchData<BenefitsSection>('/services/benefits');

  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='common-padding mx-auto flex max-w-[1390px] flex-col items-center justify-center gap-16 py-14 md:py-20 xl:flex-row xl:py-24'>
        <div className='flex w-full flex-col items-center justify-center gap-14 xl:max-w-[350px] xl:flex-row xl:gap-16'>
          <div className='flex flex-col items-center gap-12 xl:items-start'>
            <div className='flex flex-col items-center gap-8 xl:items-start'>
              <div className='flex flex-col items-center gap-2 xl:items-start'>
                <CommonChip text={data?.sectionTitle} />
                <CommonTitle title={data?.mainTitle} className='text-center xl:text-left' />
              </div>
              <CommonParargraph text={data?.description} className='text-center xl:text-left' />
            </div>
            <CommonButton
              href='/contact-us'
              text='Get a free quote'
              className='mx-auto xl:mx-0'
              delay={delays.longer}
            />
          </div>
        </div>
        <div className='flex w-full flex-col gap-8 rounded-3xl bg-secondary p-8 text-white '>
          {data?.keyPoints?.map((item, index) => <BenefitCard key={item.id} data={item} index={index} />)}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Benefits;
