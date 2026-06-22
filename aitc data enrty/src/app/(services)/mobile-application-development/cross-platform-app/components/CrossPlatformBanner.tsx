import { fetchData } from '@/utils/getData';
import { type CommonSubServiceHeroSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

import BannerBackground from '../../../common/BannerBackground';
import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

const CrossPlatformBanner = async ({
  url,
  chip,
  primaryButtonLink,
  primaryButtonText,
}: {
  url: string;
  chip: string;
  primaryButtonLink: string;
  primaryButtonText: string;
}) => {
  const data = await fetchData<CommonSubServiceHeroSection>(url);
  return (
    <CommonAnimation>
      <BannerBackground
        image={data?.bgImage}
        className='flex  h-[628px] items-center justify-center bg-[rgba(255,255,255,0.3)]'
      >
        <ServiceCommonBanner
          isColumn
          title={data?.title as string}
          description={data?.description}
          chip={chip}
          primarybuttonLink={primaryButtonLink}
          primarybuttonText={primaryButtonText}
          className='max-w-[984px] '
        />
      </BannerBackground>
    </CommonAnimation>
  );
};

export default CrossPlatformBanner;
