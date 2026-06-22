import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonBenefitsCrossPlatform from '../../common/CommonBenefitCrossPlatform';
import CommonFeaturesCrossPlatform from '../../common/CommonFeaturesCrossPlatform';
import PageDetail from '../../common/PageDetail';
import QABanner from './components/QABanner';
import QAProcess from './components/QAProcess';
import WhyAITC from './components/WhyAITC';

export const metadata = generateMetadata(
  '/services/sub-service/qa-and-testing/seo',
  'managed-it-support-services/qa-and-testing'
);

const Page = () => {
  return (
    <div>
      <QABanner
        url={'/services/sub-service/qa-and-testing/hero-section'}
        chip={'QA & software testing services'}
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Contact us now '}
      />
      <PageDetail
        url={'/services/sub-service/qa-and-testing/section-one'}
        href='/contact-us'
        linkTitle='Get a free quote'
      />
      <CommonFeaturesCrossPlatform
        url='/services/sub-service/qa-and-testing/section-multiple'
        className='bg-lightShad2'
      />
      <QAProcess url={'/services/sub-service/qa-and-testing/process-section'} />
      <WhyAITC className='bg-lightShad2' url='/services/sub-service/qa-and-testing/section-three' />
      <CommonBenefitsCrossPlatform url='/services/sub-service/qa-and-testing/section-four' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/qa-and-testing' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
