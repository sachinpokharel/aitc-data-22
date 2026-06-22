import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import { ServiceInfoReversed } from '../../common/ServiceInfo';
import ServicesCTA from '../../common/ServicesCTA';
import CrossPlatformBanner from '../../mobile-application-development/cross-platform-app/components/CrossPlatformBanner';
import DesignProcess from '../../ui-ux/components/DesignProcess/DesignProcess';
import SoftwareMaintenanceBenefits from './components/SoftwareMaintenanceBenefits';
import WhatWeOffer from './components/WhatWeOffer';

export const metadata = generateMetadata(
  '/services/sub-service/software-support-and-maintenance/seo',
  'software-development/software-support-and-maintenance'
);
const Page = () => {
  return (
    <div>
      <CrossPlatformBanner
        primaryButtonLink={'/contact-us'}
        primaryButtonText={'Start your website today'}
        chip={'Software Support and Maintenance'}
        url='/services/sub-service/software-support-and-maintenance/hero-section'
      />
      <WhatWeOffer url='/services/sub-service/software-support-and-maintenance/section-one' />
      <ServiceInfoReversed url='/services/sub-service/software-support-and-maintenance/section-two' />
      <SoftwareMaintenanceBenefits url='/services/sub-service/software-support-and-maintenance/section-three' />
      <ServicesCTA url='/services/sub-service/software-support-and-maintenance/cta' buttonText='Talk to an expert' />
      <DesignProcess url='/services/sub-service/software-support-and-maintenance/process-section' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/software-support-and-maintenance' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
