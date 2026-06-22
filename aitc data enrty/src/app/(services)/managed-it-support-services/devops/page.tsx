import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import PageDetail from '../../common/PageDetail';
import ServicesCTA from '../../common/ServicesCTA';
import SEOProcess from '../../seo/components/SEOProcess/SEOProcess';
import WhatWeOffer from '../../software-development/software-support-and-maintenance/components/WhatWeOffer';
import DevopsBanner from './components/DevopsBanner';
import Help from './components/Help';

export const metadata = generateMetadata('/services/sub-service/devops/seo', 'managed-it-support-services/devops');

const Page = () => {
  return (
    <div>
      <DevopsBanner url={'/services/sub-service/devops/hero-section'} chip={'DevOps Service'} />
      <PageDetail url={'/services/sub-service/devops/section-one'} href={'/'} linkTitle={'Get a free quote'} />
      <Help />
      <WhatWeOffer url='/services/sub-service/devops/section-three' />
      <ServicesCTA url='/services/sub-service/devops/cta' />
      <SEOProcess url='/services/sub-service/devops/process-section' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/devops' />
      </ErrorBoundaryWrapper>{' '}
    </div>
  );
};

export default Page;
