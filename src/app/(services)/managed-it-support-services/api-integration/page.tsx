import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonBenefitsCrossPlatform from '../../common/CommonBenefitCrossPlatform';
import EcommerceService from '../../common/EcommerceService';
import ServicesCTA from '../../common/ServicesCTA';
import SEOProcess from '../../seo/components/SEOProcess/SEOProcess';
import Introduction from '../../seo/local-seo/components/Introduction';
import OurNeed from '../../software-development/components/OurNeed';
import QABanner from '../qa-and-testing/components/QABanner';
import TechnologyUsed from './components/TechnologyUsed';

export const metadata = generateMetadata(
  '/services/sub-service/api-integration/seo',
  'managed-it-support-services/api-integration'
);

const Page = () => {
  return (
    <div>
      <QABanner
        url={'/services/sub-service/api-integration/hero-section'}
        chip={'API Integration'}
        primaryButtonLink={'/contact-us'}
        primaryButtonText={"Let's talk"}
      />
      <Introduction url='/services/sub-service/api-integration/section-one' buttonText='Get free consultation' />
      <EcommerceService url={'/services/sub-service/api-integration/section-two'} />
      <ServicesCTA url='/services/sub-service/api-integration/cta' buttonText='Schedule a meeting now' />
      <CommonBenefitsCrossPlatform url='/services/sub-service/api-integration/section-three' />
      <TechnologyUsed url={'/services/sub-service/api-integration/section-four'} />
      <SEOProcess url='/services/sub-service/api-integration/process-section' />
      <OurNeed url='/services/sub-service/api-integration/section-five' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/api-integration' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
