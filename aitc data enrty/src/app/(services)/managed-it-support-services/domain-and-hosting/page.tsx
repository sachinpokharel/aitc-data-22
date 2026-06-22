import { generateMetadata } from '@/utils/getSeoData';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CommonWhyAITCECommerce from '../../common/CommonWhyAITCECommerce';
import ServiceInfo from '../../common/ServiceInfo';
import ServicesCTA from '../../common/ServicesCTA';
import CrossPlatformBanner from '../../mobile-application-development/cross-platform-app/components/CrossPlatformBanner';
import WhatWeOffer from '../../software-development/software-support-and-maintenance/components/WhatWeOffer';
import HoistingPlan from './components/HostingPlan';

export const metadata = generateMetadata(
  '/services/sub-service/domain-and-hosting/seo',
  'managed-it-support-services/domain-and-hosting'
);

const Page = () => {
  return (
    <div>
      <CrossPlatformBanner
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Start your website today'}
        chip={'Domain and web hosting'}
        url='/services/sub-service/domain-and-hosting/hero-section'
      />
      <ServiceInfo url={`/services/sub-service/domain-and-hosting/section-one`} />
      <HoistingPlan />
      <CommonWhyAITCECommerce url={'/services/sub-service/domain-and-hosting/section-three-process'} />
      <WhatWeOffer url='/services/sub-service/domain-and-hosting/section-four' className='bg-lightShad2' />
      <ServicesCTA url='/services/sub-service/domain-and-hosting/cta' buttonText='Inquiry now' />
      <FAQ url='/faq/sub-service/domain-and-hosting' />
    </div>
  );
};

export default Page;
