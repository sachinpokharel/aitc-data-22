import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import CTA from '../common/CTA';
import GreatInvestment from '../common/GreatInvestment';
import Introduction from '../common/Introduction';
import OurWorkServices from '../common/OurWorkServices';
import RelatedServices from '../common/RelatedServices';
import SEOBanner from '../common/SEOBanner';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import Services from '../web-design/components/Services';
import SEOProcess from './components/SEOProcess/SEOProcess';

export const metadata = generateMetadata('/services/seo-service/seo-section', 'seo');

const ServicePage = () => {
  return (
    <div>
      <SEOBanner
        url='/services/seo-service/hero-section'
        subtitle='Search engine optimization service'
        buttonText='Get your SEO proposal'
        buttonUrl='/contact-us?form=service_enquiry'
      />
      <Introduction url='/services/seo-service/section-one' />
      <Services url='seo-service' isHeaderColor />
      {/* <ServicesWeOffer className='bg-lightShad2' url='/services/seo-service/section-two' /> */}
      <SEOProcess url='/services/seo-service/process-section' />
      <CTA url='/services/seo-service/cta-section-title' />
      <CollaborativePartners url='/home/partnership-section' />
      <GreatInvestment className='bg-lightShad2' url='/services/seo-service/section-two' />
      <TechnologyUsed url='/services/seo-service/tech-tool-section' />
      <Achievements url='/services/seo-service/award-section' />
      <RelatedServices url='/services/seo-service/related-service-section' />
      <TestimonialSection url='/testimonial/service/seo-service' />
      <OurWorkServices url='/services/seo-service/project-section' />
      <ServicesCTA url='/services/seo-service/cta-section' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/service/seo-service' />
      </ErrorBoundaryWrapper>
    </div>
  );
};

export default ServicePage;
