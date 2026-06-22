import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type KeyPoint, type KeypointsResponse } from '@/types/service/KeypointsDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const KeyFeatures = async () => {
  const data = await fetchData<KeypointsResponse>('/services/app-development/section-two');
  return (
    <CommonAnimation
      style={{
        backgroundImage: `url("/svg/keyfeatures.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className=' h-fit w-full'
    >
      <div className='main-common-padding flex max-w-[1400px] flex-col items-center justify-center gap-10 xmd:gap-[3.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
          <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
        </div>
        <div className='features flex flex-wrap items-center justify-center gap-8'>
          {data?.keyPoints?.map((item, index) => <Card key={item.id} index={index} item={item} />)}
        </div>
        <CommonButton text='Get a free consultation' href='/' className='mx-auto' />
      </div>
    </CommonAnimation>
  );
};

export default KeyFeatures;

const Card = ({ index, item }: { index: number; item: KeyPoint }) => {
  return (
    <div className='group flex w-full flex-row items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFFFFF] to-[#EDEDFF] p-4 xmd:max-w-[286px]'>
      <Arrow />
      <CommonHeader title={item?.title} className='transition-all duration-300 group-hover:translate-x-2' />
    </div>
  );
};
