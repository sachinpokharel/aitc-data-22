import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonBenefitsCrossPlatform from '../../common/CommonBenefitCrossPlatform';
import CommonFeaturesCrossPlatform from '../../common/CommonFeaturesCrossPlatform';
import EcommerceFeatures from '../../common/EcommerceFeatures';
import { ServiceInfoReversed } from '../../common/ServiceInfo';
import ServicesCTA from '../../common/ServicesCTA';
import SEOProcess from '../../seo/components/SEOProcess/SEOProcess';
import CrossPlatformBanner from './components/CrossPlatformBanner';

export const metadata = generateMetadata(
  '/services/sub-service/cross-platform-app/seo',
  'mobile-application-development/cross-platform-app'
);

const Page = () => {
  return (
    <div>
      <CrossPlatformBanner
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Start your project'}
        chip={'Cross Platform App Development'}
        url='/services/sub-service/cross-platform-app/hero-section'
      />
      <ServiceInfoReversed url='/services/sub-service/cross-platform-app/section-one' />
      <EcommerceFeatures url='/services/sub-service/cross-platform-app/section-two' />
      <CommonFeaturesCrossPlatform url='/services/sub-service/cross-platform-app/section-multiple' />
      <CommonBenefitsCrossPlatform url='/services/sub-service/cross-platform-app/section-four' />
      <SEOProcess url='/services/sub-service/cross-platform-app/process-section' />
      <ServicesCTA url='/services/sub-service/cross-platform-app/cta' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/cross-platform-app' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
