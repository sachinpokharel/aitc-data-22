import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import { type KeyPoint, type KeypointsResponse } from '@/types/service/KeypointsDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const WhyChoose = async () => {
  const data = await fetchData<KeypointsResponse>('/services/app-development/section-one');
  return (
    <CommonAnimation className='why-choose bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1500px] flex-col items-center gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
        <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
        <div className='grid grid-cols-1 gap-8  overflow-hidden xmd:grid-cols-2'>
          {data?.keyPoints?.map((item, index) => <Card key={item?.id} index={index + 1} item={item} />)}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default WhyChoose;

const Card = ({ index, item }: { index: number; item: KeyPoint }) => {
  return (
    <Slide
      direction={'up'}
      duration={1500}
      damping={0.2}
      fraction={0.2}
      triggerOnce
      className={`hover-scale-shadow-animation   min-h-[205px] max-w-[570px] self-center rounded-2xl bg-white p-6 ${index % 2 != 0 ? 'last:col-span-full last:place-self-center ' : ''} 
        `}
      // bg-[linear-gradient(180.31deg, #FFFFFF 38.89%, #F8F8FF 107.4%)]
    >
      <div className='flex flex-col gap-4 '>
        <div className='flex flex-row items-center gap-4'>
          <Arrow />
          <CommonHeader title={item?.title} />
        </div>
        <CommonParargraph text={item?.description} />
      </div>
    </Slide>
  );
};
