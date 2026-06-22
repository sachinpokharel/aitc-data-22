import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import ThreeImageBanner from './components/Banner';
import DigitalMarketing from './components/DigitalMarketing';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import WhyChooseAitc from './components/WhyChooseAitc';

export const metadata = generateMetadata('/services/digital-marketing/seo-section', 'digital-marketing');

const page = () => {
  return (
    <div className='digitalmarketing'>
      <ThreeImageBanner url='/services/digital-marketing/hero-section' />
      <DigitalMarketing url='/services/digital-marketing/section-one' />
      <SoftwareDevelopment url={`digital-marketing`} isHeaderColor />
      <CollaborativePartners url='/home/partnership-section' />
      <WhyChooseAitc url='/services/digital-marketing/section-two' />
      <TechnologyUsed url='/services/digital-marketing/tech-tool-section' />
      <ServicesCTA url='/services/digital-marketing/cta-section' />
      <RelatedServices url='/services/digital-marketing/related-service-section' />
      <TestimonialSection url='/testimonial/service/digital-marketing' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/service/digital-marketing' />
      </ErrorBoundaryWrapper>
      <Achievements url='/services/digital-marketing/award-section' />
    </div>
  );
};

export default page;
