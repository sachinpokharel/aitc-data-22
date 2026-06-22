import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonWhyAITCECommerce from '../../common/CommonWhyAITCECommerce';
import EcommerceFeatures from '../../common/EcommerceFeatures';
import EcommerceService from '../../common/EcommerceService';
import PageDetail from '../../common/PageDetail';
import CrossPlatformBanner from '../../mobile-application-development/cross-platform-app/components/CrossPlatformBanner';

export const metadata = generateMetadata(
  '/services/sub-service/ecommerce-development/seo',
  'web-design/ecommerce-development'
);

const Page = () => {
  return (
    <main>
      <CrossPlatformBanner
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Get a free quote'}
        chip={'Ecommerce Development'}
        url='/services/sub-service/ecommerce-development/hero-section'
      />
      <PageDetail
        url={'/services/sub-service/ecommerce-development/section-one'}
        href='/contact-us'
        linkTitle='Get a free consultation'
      />
      <EcommerceService url={'/services/sub-service/ecommerce-development/section-two'} />
      <CommonWhyAITCECommerce url={'/services/sub-service/ecommerce-development/section-three-process'} />
      <EcommerceFeatures url={'/services/sub-service/ecommerce-development/section-four'} />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/ecommerce-development' />
      </ErrorBoundaryWrapper>
    </main>
  );
};

export default Page;
