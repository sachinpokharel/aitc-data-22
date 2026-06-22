import { generateMetadata } from '@/utils/getSeoData';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import OurWorkServices from '../common/OurWorkServices';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import SoftwareDevelopment from '../digital-marketing/components/SoftwareDevelopment';
import DevelopmentProcess from '../managed-it-support-services/it-staff-augmentations/components/DevelopmentProcess';
import { InnovationMobile } from '../software-development/components/Innovation';
import { MobileHelp } from '../web-design/components/Help';
import Banner from './components/Banner';
import KeyFeatures from './components/KeyFeatures';
import WhyChoose from './components/WhyChoose';

export const metadata = generateMetadata('/services/app-development/seo-section', 'mobile-application-development');

const Page = () => {
  return (
    <div className='mobileapplication'>
      <Banner
        primaryButtonText='Discuss my project'
        primarybuttonLink='/contact-us'
        secondarybuttonLink='/ourwork'
        secondarybuttonText='Check our portfolio'
      />
      <SoftwareDevelopment url={`app-development`} />
      <WhyChoose />
      <CollaborativePartners url='/home/partnership-section' />
      <DevelopmentProcess url={'/services/app-development/process-section'} />
      <KeyFeatures />
      <MobileHelp />
      <InnovationMobile url={`/services/app-development/section-four`} className='bg-lightShad2' />
      <RelatedServices url={`/services/app-development/related-service-section`} />
      <Achievements url={`/services/app-development/award-section`} />
      <ServicesCTA url={`/services/app-development/cta-section`} />
      <TechnologyUsed url={`/services/app-development/tech-tool-section`} />

      <FAQ url='/faq/service/app-development' />
      <TestimonialSection url='/testimonial/service/app-development' />
      <OurWorkServices url='/services/app-development/project-section' />
    </div>
  );
};

export default Page;
