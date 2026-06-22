import { bannerDelays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type BannerDTO } from '@/types/common/bannerDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

import BannerBackground from '../../(services)/common/BannerBackground';

const Banner = async () => {
  const data = await fetchData<BannerDTO>('/classroom/hero-section');
  return (
    <CommonAnimation>
      <BannerBackground
        image={data?.bgImage || '/deletable/fallback.jpeg'}
        className='flex h-[628px] flex-col items-center justify-center '
      >
        <div className='flex max-w-[800px] flex-col items-center gap-12'>
          <div className='flex flex-col items-center gap-8'>
            <CommonTitleH1 title={data?.title} className={'text-center'} delay={bannerDelays.title} />
            <CommonParargraph text={data?.description} className={'text-center'} delay={bannerDelays.description} />
          </div>

          <CommonButton href={'/contact-us'} text={'Contact us'} />
          {/* <CommonButton target='_blank' href={'https://aitc-education-career.mercury360.com'} text={'Contact us'} /> */}
        </div>
      </BannerBackground>
    </CommonAnimation>
  );
};

export default Banner;
