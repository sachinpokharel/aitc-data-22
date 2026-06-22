import { bannerDelays } from '@/utils/animation-config';
import Image from 'next/image';
import { type HeroData } from '@/types/ourwork/specificpageDTO';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

const Banner = ({ data }: { data: HeroData }) => {
  return (
    <div className='common-padding flex flex-col gap-14 bg-lightShad2 py-8 sm:py-12 md:flex-row md:items-center md:justify-between'>
      <div className='flex flex-col gap-2 2xxl:w-2/3'>
        <p className='text-lg font-black text-primary'>{data?.slogan}</p>
        <CommonTitleH1 title={data?.title} delay={bannerDelays.title} />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-center text-lg font-black leading-[150%] tracking-[0.36px] text-grey '>Client</p>
          <Image
            src={data?.clientLogo}
            alt='rennovation_guru_logo'
            width={500}
            height={500}
            className='size-[50px] rounded-2xl object-cover'
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-center text-lg font-black leading-[150%] tracking-[0.36px] text-grey '>Industry</p>
          <p className='text-center text-lg font-medium leading-[150%] tracking-[0.36px] text-mainBlack'>
            {data?.industryTag?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
