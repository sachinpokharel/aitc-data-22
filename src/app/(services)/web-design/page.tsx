import { generateMetadata } from '@/utils/getSeoData';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import GreatInvestment from '../common/GreatInvestment';
import OurWorkServices from '../common/OurWorkServices';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import OurNeed from '../software-development/components/OurNeed';
import Banner from './components/Banner';
import Design from './components/Design';
import DevelopmentProcess from './components/DevelopmentProcess';
import Help from './components/Help';
import Services from './components/Services';
import WebDevelopment from './components/WebDevelopment';
import WhyNeed from './components/WhyNeed';

export const metadata = generateMetadata('/services/web-development/seo-section', 'web-design');

const Page = () => {
  return (
    <div className=''>
      <Banner />
      <Help />
      <WebDevelopment />
      <Services url='web-development' />
      <ServicesCTA url='/services/web-development/cta-section' />
      <Design />
      <CollaborativePartners url='/home/partnership-section' />
      <WhyNeed />
      <GreatInvestment url='/services/web-development/section-four' />
      <DevelopmentProcess />
      <OurNeed url='/services/web-development/section-five' />
      <RelatedServices url='/services/web-development/related-service-section' />
      <TechnologyUsed url='/services/web-development/tech-tool-section' />
      <TestimonialSection url='/testimonial/service/web-development' />
      <OurWorkServices url='/services/web-development/project-section' />
      <Achievements url='/services/web-development/award-section' />
      <FAQ url='/faq/service/web-development' />
    </div>
  );
};

export default Page;
