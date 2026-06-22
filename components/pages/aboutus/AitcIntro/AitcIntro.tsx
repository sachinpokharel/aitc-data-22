import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type WhoWeAreResponse } from '@/types/aboutus/banner';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Description from './Description';

const AitcIntro = async () => {
  const introData = await fetchData<WhoWeAreResponse>('/about-us/who-we-are-section');
  return (
    <CommonAnimation className='aitc-intro main-common-padding flex max-w-[1330px] flex-col items-center justify-center gap-10 '>
      <div className='flex flex-col items-center gap-2'>
        <CommonChip text={introData.sectionTitle} />
        <CommonTitle title={introData?.mainTitle} className='text-center' delay={delays.medium} />
      </div>

      <CommonAnimation>
        <Description text={introData?.description} image={introData?.bgImage} />
      </CommonAnimation>

      <CommonParargraph
        className='text-center font-medium lg:max-w-[900px] lg:text-xl'
        text={`"${introData?.quote.charAt(0)?.toUpperCase() + introData?.quote?.slice(1)}"`}
        delay={delays.long}
      />
      <div className='flex w-fit flex-col items-center gap-2'>
        <CommonParargraph
          text='Co-Founder/MD, AITC International'
          className='text-center text-primary'
          delay={delays.longer}
        />
        <hr className='h-[2px] w-3/5 rounded-md bg-lightShade1' />
      </div>
    </CommonAnimation>
  );
};

export default AitcIntro;
