import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonBenefitsCrossPlatform from '../../common/CommonBenefitCrossPlatform';
import ServiceInfo from '../../common/ServiceInfo';
import ServicesCTA from '../../common/ServicesCTA';
import CrossPlatformBanner from '../../mobile-application-development/cross-platform-app/components/CrossPlatformBanner';
import SocialMediaServices from '../social-media-marketing/components/SocialMediaServices';
import PpcAgency from './components/PpcAgency';

export const metadata = generateMetadata(
  '/services/sub-service/ppc-advertising/seo',
  'digital-marketing/ppc-advertising'
);

const Page = () => {
  return (
    <main>
      <CrossPlatformBanner
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Get a free quote'}
        chip={'PPC management services'}
        url='/services/sub-service/ppc-advertising/hero-section'
      />
      <ServiceInfo url='/services/sub-service/ppc-advertising/section-one' />
      <SocialMediaServices
        url='/services/sub-service/ppc-advertising/section-multiple'
        serviceTitle='Our Paid Advertisement Services'
      />
      <PpcAgency />
      <ServicesCTA url='/services/sub-service/ppc-advertising/cta' />
      <CommonBenefitsCrossPlatform url='/services/sub-service/ppc-advertising/section-four' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/ppc-advertising' />
      </ErrorBoundaryWrapper>
    </main>
  );
};

export default Page;
