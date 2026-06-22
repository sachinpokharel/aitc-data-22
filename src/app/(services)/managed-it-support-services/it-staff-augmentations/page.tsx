import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonBenefitsCrossPlatform from '../../common/CommonBenefitCrossPlatform';
import CommonFeaturesCrossPlatform from '../../common/CommonFeaturesCrossPlatform';
import CommonWhyAITCECommerce from '../../common/CommonWhyAITCECommerce';
import PageDetail from '../../common/PageDetail';
import Banner from './components/CenteredBanner';
import DevelopmentProcess from './components/DevelopmentProcess';

export const metadata = generateMetadata(
  '/services/sub-service/it-staff-augmentations/seo',
  'managed-it-support-services/it-staff-augmentations'
);

const Page = () => {
  return (
    <div>
      <ErrorBoundaryWrapper>
        <Banner chip={'IT Staff Augmentations'} url={'/services/sub-service/it-staff-augmentations/hero-section'} />
        <PageDetail
          href=''
          linkTitle='Get free consultation'
          url='/services/sub-service/it-staff-augmentations/section-one'
        />
        <CommonFeaturesCrossPlatform
          url={'/services/sub-service/it-staff-augmentations/section-multiple'}
          className='bg-lightShad2'
        />
        <CommonBenefitsCrossPlatform url='/services/sub-service/it-staff-augmentations/section-three' />
      </ErrorBoundaryWrapper>
      <DevelopmentProcess url={'/services/sub-service/it-staff-augmentations/process-section'} />

      {/* TODO: Add our process component here */}
      <CommonWhyAITCECommerce url={'/services/sub-service/it-staff-augmentations/process-section'} />
      <FAQ url='/faq/sub-service/it-staff-augmentations' />
    </div>
  );
};

export default Page;
