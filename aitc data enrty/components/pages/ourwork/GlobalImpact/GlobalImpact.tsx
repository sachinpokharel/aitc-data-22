import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type GlobalImpactSection } from '@/types/ourwork/main';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const GlobalImpact = async () => {
  const data = await fetchData<GlobalImpactSection>('/our-work/impact-on-industries');

  return (
    <CommonAnimation className='mx-auto flex max-w-screen-2xxl flex-col items-stretch justify-center gap-10 self-stretch px-6 py-[60px] xl:flex-row xl:gap-24 xl:px-[150px] xl:py-[100px]'>
      <div className='flex basis-1/2 flex-col items-center gap-8 self-stretch xl:items-start'>
        <div className='flex w-full flex-col items-center gap-2 self-stretch xl:items-start'>
          <CommonChip text={data?.sectionTitle} />
          <CommonTitle title={data?.mainTitle} delay={delays.medium} />
        </div>
        <CommonParargraph text={data?.description} className='text-center xl:text-left' delay={delays.long} />
        <CommonButton text='Get a free quote' href='/contact-us' />
      </div>
      <div className='basis-1/2'>
        <Image
          src={data?.bgImage}
          alt='global impact'
          width={1500}
          height={1500}
          className='size-full rounded-3xl object-cover'
        />
      </div>
    </CommonAnimation>
  );
};

export default GlobalImpact;
