import { fetchData } from '@/utils/getData';
import { type CommonSubServiceHeroSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';

import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

const QABanner = async ({
  url,
  chip,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  isSecondaryButton,
}: {
  url?: string;
  chip: string;
  primaryButtonLink: string;
  primaryButtonText: string;
  secondaryButtonLink?: string;
  secondaryButtonText?: string;
  isSecondaryButton?: boolean;
}) => {
  const data = await fetchData<CommonSubServiceHeroSection>(url as string);

  return (
    <CommonAnimation>
      <BannerWrapper image={data?.bgImage}>
        <ServiceCommonBanner
          title={data?.title as string}
          description={data?.description}
          chip={chip || 'QA & Testing'}
          primarybuttonLink={primaryButtonLink}
          primarybuttonText={primaryButtonText}
          secondarybuttonLink={secondaryButtonLink}
          secondarybuttonText={secondaryButtonText}
          isSecondaryButton={isSecondaryButton}
        />
      </BannerWrapper>
    </CommonAnimation>
  );
};

export default QABanner;
