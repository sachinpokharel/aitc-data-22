import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonFeaturesCrossPlatform from '../../common/CommonFeaturesCrossPlatform';
import CommonWhyAITCECommerce from '../../common/CommonWhyAITCECommerce';
import EcommerceFeatures from '../../common/EcommerceFeatures';
import PageDetail from '../../common/PageDetail';
import CrossPlatformBanner from '../../mobile-application-development/cross-platform-app/components/CrossPlatformBanner';
import OurNeed from '../../software-development/components/OurNeed';
import CommonWhyCMS from './components/CommonWhyCMS';

export const metadata = generateMetadata(
  '/services/sub-service/content-management-system/seo',
  'web-design/content-management-system'
);

const Page = () => {
  return (
    <div>
      <CrossPlatformBanner
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Get a free quote'}
        chip={'Content Management System'}
        url='/services/sub-service/content-management-system/hero-section'
      />
      <PageDetail
        url={'/services/sub-service/content-management-system/section-one'}
        href='/contact-us'
        linkTitle='Get a free quote'
      />
      <CommonFeaturesCrossPlatform
        url={'/services/sub-service/content-management-system/section-multiple'}
        className='bg-lightShad2'
      />
      <EcommerceFeatures url={'/services/sub-service/content-management-system/section-three'} />
      <CommonWhyAITCECommerce
        url={'/services/sub-service/content-management-system/section-four-process'}
        className='bg-lightShad2'
      />
      <CommonWhyCMS url={'/services/sub-service/content-management-system/section-five'} />
      <OurNeed url={'/services/sub-service/content-management-system/section-six'} />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/content-management-system' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
