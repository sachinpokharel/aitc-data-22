import { generateMetadata } from '@/utils/getSeoData';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonFeaturesCrossPlatform from '../../common/CommonFeaturesCrossPlatform';
import CommonWhyAITCECommerce from '../../common/CommonWhyAITCECommerce';
import ServicesCTA from '../../common/ServicesCTA';
import MobileAppBanner from '../android/components/Banner';

export const metadata = generateMetadata('/services/sub-service/ios/seo', 'mobile-application-development/ios');

const Page = () => {
  return (
    <div>
      <MobileAppBanner
        url={`/services/sub-service/ios/hero-section-with-images`}
        btnText='Start your iOS project today'
      />
      <CommonFeaturesCrossPlatform url='/services/sub-service/ios/section-multiple' />
      <CommonWhyAITCECommerce url={'/services/sub-service/ios/section-two-process'} />
      <ServicesCTA url='/services/sub-service/ios/cta' />
      <FAQ url='/faq/sub-service/ios' />
    </div>
  );
};

export default Page;
