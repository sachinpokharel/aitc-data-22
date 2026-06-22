import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonFeaturesCrossPlatform from '../../common/CommonFeaturesCrossPlatform';
import EcommerceFeatures from '../../common/EcommerceFeatures';
import PageDetail from '../../common/PageDetail';
import QABanner from '../../managed-it-support-services/qa-and-testing/components/QABanner';
import WhyChooseUs from './components/WhyChooseUs';

export const metadata = generateMetadata(
  '/services/sub-service/graphics-design/seo',
  'digital-marketing/graphics-design'
);

const Page = () => {
  return (
    <div>
      <QABanner
        url={'/services/sub-service/graphics-design/hero-section'}
        chip={'Graphics Design'}
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Contact us now '}
        isSecondaryButton
        secondaryButtonLink={'/ourwork'}
        secondaryButtonText={'Check our portfolio'}
      />
      <PageDetail
        href='/contact-us'
        linkTitle='Get a free quote'
        url='/services/sub-service/graphics-design/section-one'
      />
      <CommonFeaturesCrossPlatform
        url='/services/sub-service/graphics-design/section-multiple'
        className='bg-lightShad2'
      />
      <WhyChooseUs url='/services/sub-service/graphics-design/section-three' />
      <EcommerceFeatures url='/services/sub-service/graphics-design/section-four' className='bg-lightShad2' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/graphics-design' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
