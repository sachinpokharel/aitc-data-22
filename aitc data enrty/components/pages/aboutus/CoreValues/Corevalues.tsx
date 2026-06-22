import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { type OurCoreValuesResponse } from '@/types/aboutus/ourcorevalue';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const Corevalues = async () => {
  const {
    sectionTitle,
    mainTitle,
    description,
    features,
    bgImage: image,
  } = await fetchData<OurCoreValuesResponse>('/about-us/core-values-section');

  return (
    <CommonAnimation className='mb-16'>
      <div className='relative z-[-1] max-h-[679px] w-full'>
        <Image src={image} alt='spotlight' width={64} height={64} sizes='100vw' className='size-full object-cover' />
      </div>
      <div
        style={{
          background: 'linear-gradient(180deg, #FFF 6.75%, #F8F8FF 59.3%)',
        }}
        className='common-padding z-10 mx-auto mt-[-17%] flex w-[90%] max-w-[1354px] flex-col items-center gap-10 overflow-hidden rounded-2xl py-[3.75rem] xmd:w-4/5 xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'
      >
        <CommonAnimation className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonChip text={sectionTitle} />
            <CommonTitle title={mainTitle} className='text-center' delay={delays.medium} />
          </div>
          <CommonParargraph text={description} className='text-center xmd:max-w-3xl' delay={delays.long} />
        </CommonAnimation>

        <div className='cardwrapeer grid grid-cols-1 gap-10 xmd:grid-cols-2 xl:grid-cols-3 '>
          {features?.map((item) => (
            <Fade key={item?.id} direction='up' triggerOnce cascade damping={0.2} fraction={0.8}>
              <Card title={item?.title} description={item?.description} icon={item?.icon} />
            </Fade>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Corevalues;
