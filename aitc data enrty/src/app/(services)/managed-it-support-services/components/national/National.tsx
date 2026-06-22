import { fetchData } from '@/utils/getData';
import { type CommonSubServiceHeroSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';

import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

const National = async ({ url, chip }: { url: string; chip?: string }) => {
  const data = await fetchData<CommonSubServiceHeroSection>(url);

  return (
    <CommonAnimation>
      <BannerWrapper image={data?.bgImage}>
        <ServiceCommonBanner
          title={data?.title as string}
          description={data?.description}
          chip={chip ?? 'Managed IT Support Services'}
          primarybuttonLink='/contact-us'
          primarybuttonText='Contact us now'
        />
      </BannerWrapper>
    </CommonAnimation>
  );
};

export default National;
