import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

export interface DevelopmentProcessDTO {
  id: string;
  title: string;
  description: string;
  processItems: ProcessItem[];
}

export interface ProcessItem {
  id: string;
  index: number;
  title: string;
  description: string;
  image: string;
}

const DevelopmentProcess = async () => {
  const data = await fetchData<DevelopmentProcessDTO>('/services/web-development/process-section');
  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1294px] flex-col gap-10 lg:gap-[3.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
          <CommonParargraph text={data?.description} className='max-w-[984px] text-center' delay={delays.long} />
        </div>
        {data?.processItems?.map((item) => <Steps key={item?.id} item={item} index={item?.index} />)}
      </div>
    </CommonAnimation>
  );
};

export default DevelopmentProcess;

const Steps = ({ item, index }: { item: ProcessItem; index: number }) => {
  return (
    <CommonAnimation delay={(index + 1) / 9} className='flex flex-col gap-4 xmd:gap-8'>
      <div className='flex flex-col items-start gap-4 xmd:flex-row xmd:items-center'>
        <span className='whitespace-nowrap rounded bg-primary p-1 text-lg text-white'>Stage {index} : </span>
        <CommonTitle title={item?.title} />
      </div>
      <div className={`  flex  ${index % 2 === 0 ? 'flex-col-reverse' : 'flex-col'} gap-8`}>
        <div className='images relative h-[155px]  w-full xmd:h-[475px]'>
          <Image src={item?.image} alt={item?.title} fill className='rounded-2xl object-cover  ' />
        </div>
        <CommonParargraph text={item?.description} />
      </div>
    </CommonAnimation>
  );
};
