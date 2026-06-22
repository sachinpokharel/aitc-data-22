import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

interface DiversityProps {
  sectionTitle: string;
  mainTitle: string;
  description: string;
  bgImage: string;
}

const Diversity = async () => {
  const data = await fetchData<DiversityProps>('/career/diversity-inclusive-section');

  return (
    <div className='main-common-padding flex flex-col items-center justify-center gap-10 xl:gap-[3.25rem]'>
      <CommonAnimation
        className={cn(' flex max-w-[1375px] flex-col', ' w-full items-center justify-center xl:flex-row')}
      >
        <TitleParaWrapper className='z-20 w-[90%] items-start rounded-2xl bg-secondary p-6 xmd:w-3/4  xl:w-1/2 xl:max-w-[585px] '>
          <TitleChipWrapper className='items-start'>
            <CommonChip text={data?.sectionTitle} className='bg-lightShade1' />
            <CommonTitle title={data?.mainTitle} className='text-white' delay={delays.medium} />
          </TitleChipWrapper>
          <CommonParargraph className=' text-white' text={data?.description} delay={delays.long} />
        </TitleParaWrapper>
        <div className='image relative z-10 -mt-10 h-auto w-full rounded-2xl xl:-ml-40 xl:mt-0 xl:w-1/2'>
          <Image
            src={data?.bgImage}
            width={714}
            height={504}
            sizes='calc(100vw-2rem)'
            alt={data?.mainTitle}
            className='w-full rounded-2xl object-cover'
          />
        </div>
      </CommonAnimation>
      <CommonButton href='/aboutus' text='Learn More' className='mx-auto w-fit' />
    </div>
  );
};

export default Diversity;
