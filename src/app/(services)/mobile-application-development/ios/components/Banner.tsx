import { fetchData } from '@/utils/getData';
import { type CommonSubServiceHeroSectionMultipleImages } from '@/types/index';

import BannerBackground from '../../../common/BannerBackground';
import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

const Banner = async ({
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
  const data = await fetchData<CommonSubServiceHeroSectionMultipleImages>(url);
  return (
    <BannerBackground image={data?.image[0]?.url}>
      <div className='main-common-padding flex w-full justify-center lg:justify-start'>
        <ServiceCommonBanner
          title={data?.title as string}
          description={data?.description}
          chip={chip}
          primarybuttonLink={primaryButtonLink}
          primarybuttonText={primaryButtonText}
          className='lg:w-1/2'
        />
      </div>
    </BannerBackground>
  );
};

export default Banner;
