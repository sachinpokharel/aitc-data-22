import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import Introduction from '../seo/local-seo/components/Introduction';
import International from './components/internationalservice/International';
import ManagedServices from './components/managed/ManagedServices';
import National from './components/national/National';

export const metadata = generateMetadata('/services/it-support/seo-section', 'managed-it-support-services');
const Page = () => {
  return (
    <div>
      <National url='/services/it-support/hero-section' />
      <Introduction url='/services/it-support/section-one' />
      <International />
      <ManagedServices url={'it-support'} />
      <ServicesCTA url='/services/it-support/cta-section' />
      <CollaborativePartners url='/home/partnership-section' />
      <TestimonialSection url='/testimonial/service/it-support' />
      <RelatedServices url='/services/it-support/related-service-section' />
      <TechnologyUsed url='/services/it-support/tech-tool-section' />
      <Achievements url='/services/it-support/award-section' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/service/it-support' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default Page;
