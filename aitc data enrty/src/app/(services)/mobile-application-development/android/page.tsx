import { generateMetadata } from '@/utils/getSeoData';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonFeaturesCrossPlatform from '../../common/CommonFeaturesCrossPlatform';
import PageDetail from '../../common/PageDetail';
import WhyAITC from '../../managed-it-support-services/qa-and-testing/components/WhyAITC';
import MobileAppBanner from './components/Banner';
import Info from './components/Info';

export const metadata = generateMetadata('/services/sub-service/android/seo', 'mobile-application-development/android');

const Page = () => {
  return (
    <div className='android'>
      <MobileAppBanner url={`/services/sub-service/android/hero-section-with-images`} btnText='Get your andriod app' />
      <PageDetail
        url={'/services/sub-service/android/section-one'}
        href='/contact-us'
        linkTitle='Get your andriod app'
      />
      <Info />
      <CommonFeaturesCrossPlatform url='/services/sub-service/android/section-multiple' />
      <WhyAITC className='bg-lightShad2' url='/services/sub-service/android/section-three' />
      <FAQ url='/faq/sub-service/android' />
    </div>
  );
};

export default Page;
