import { fetchData } from '@/utils/getData';
import { type CommonSubServiceHeroSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

import BannerBackground from '../../../common/BannerBackground';
import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

const SEOBanner = async ({ url, chip }: { url: string; chip?: string }) => {
  const data = await fetchData<CommonSubServiceHeroSection>(url);
  return (
    <CommonAnimation>
      <BannerBackground image={data?.bgImage} className='flex  h-[628px] items-center justify-center'>
        <ServiceCommonBanner
          isColumn
          title={data?.title as string}
          description={data?.description}
          chip={chip ?? 'Local SEO'}
          primarybuttonLink='/contact-us'
          primarybuttonText='Get a free quote'
          secondarybuttonLink='/ourwork'
          secondarybuttonText='Check our works'
          isSecondaryButton
          className='max-w-[984px]'
        />
      </BannerBackground>
    </CommonAnimation>
  );
};

export default SEOBanner;
