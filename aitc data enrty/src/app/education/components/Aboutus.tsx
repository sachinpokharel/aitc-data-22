import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type BannerDTO } from '@/types/common/bannerDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Introduction = async () => {
  const data = await fetchData<BannerDTO>('/classroom/classroom-highlights-section');
  return (
    <CommonAnimation>
      <div className='relative z-[-1] h-[200px] max-h-[608px] w-full md:h-[400px] lg:h-[608px]'>
        <Image src={data?.bgImage} alt='spotlight' fill sizes='100vw' />
      </div>
      <div className=' z-10 mx-auto mt-[-8%] flex  w-[90%] flex-col items-center gap-10 rounded-[2rem] bg-lightShad2 p-8 xmd:w-4/5 xmd:gap-[3.25rem]  lg:mb-[6.25rem] lg:max-w-[1190px]'>
        <CommonAnimation className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
          </div>
          <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
        </CommonAnimation>
        <CommonButton href={'/contact-us'} text={'Contact us'} delay={delays.longer} />
      </div>
    </CommonAnimation>
  );
};

export default Introduction;
