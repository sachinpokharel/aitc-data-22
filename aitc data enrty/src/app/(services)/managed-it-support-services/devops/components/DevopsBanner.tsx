import { fetchData } from '@/utils/getData';
import { type CommonSubServiceHeroSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';

import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

const DevopsBanner = async ({ url, chip }: { url?: string; chip: string }) => {
  const data = await fetchData<CommonSubServiceHeroSection>(url as string);

  return (
    <CommonAnimation>
      <BannerWrapper image={data?.bgImage}>
        <ServiceCommonBanner
          title={data?.title as string}
          description={data?.description}
          chip={chip || 'DevOps Service'}
          primarybuttonLink='/contact-us'
          primarybuttonText='Contact us now'
        />
      </BannerWrapper>
    </CommonAnimation>
  );
};

export default DevopsBanner;
