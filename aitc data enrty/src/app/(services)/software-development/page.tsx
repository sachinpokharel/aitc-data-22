import { generateMetadata } from '@/utils/getSeoData';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import EcommerceFeatures from '../common/EcommerceFeatures';
import OurWorkServices from '../common/OurWorkServices';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import ManagedServices from '../managed-it-support-services/components/managed/ManagedServices';
import QAProcess from '../managed-it-support-services/qa-and-testing/components/QAProcess';
import Banner from './components/Banner';
import Innovation from './components/Innovation';
import OurNeed from './components/OurNeed';
import Servcies from './components/Servcies';

export const metadata = generateMetadata('/services/software-development/seo-section', 'software-development');

const Page = () => {
  return (
    <div className='softwaredevelopment'>
      <Banner />
      <ManagedServices url='software-development' />
      <EcommerceFeatures url='/services/software-development/section-one' className='bg-lightShad2' />
      <Servcies url={'/services/software-development/section-two'} />
      <OurNeed url={'/services/software-development/section-three'} />
      <CollaborativePartners url='/home/partnership-section' />
      <QAProcess url={'/services/software-development/process-section'} />
      <TechnologyUsed url='/services/software-development/tech-tool-section' />
      <Innovation url='/services/software-development/section-four' className='bg-lightShad2' />
      <RelatedServices url='/services/software-development/related-service-section' />
      <Achievements url='/services/software-development/award-section' />
      <TestimonialSection url='/testimonial/service/software-development' />
      <OurWorkServices url='/services/software-development/project-section' />
      <ServicesCTA url='/services/software-development/cta-section' />
      <FAQ url='/faq/service/software-development' />
    </div>
  );
};

export default Page;
