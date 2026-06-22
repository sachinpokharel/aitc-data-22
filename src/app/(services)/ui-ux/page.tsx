import { fetchData } from '@/utils/getData';
import { generateMetadata } from '@/utils/getSeoData';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import IndustrySegments from '@/components/pages/Home/IndustrySegments/IndustrySegments';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import CTA from '../common/CTA';
import OurWorkServices from '../common/OurWorkServices';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import TechnologyUsed from '../common/TechnologyUsed';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import DesignProcess from './components/DesignProcess/DesignProcess';
import DesignServices from './components/DesignServices';
import DigitalEvolution from './components/DigitalEvolution';
import ServiceOverview from './components/ServiceOverview';
import WhyAITC from './components/WhyAITC';

export const metadata = generateMetadata('/services/ux-ui/seo-section', 'ui-ux');

const Page = async () => {
  const data = await fetchData<{ mainTitle: string; description: string }>('/services/ux-ui/industries-served-section');
  return (
    <main>
      <Banner url='/services/ux-ui/hero-section' />
      <ServiceOverview url='/services/ux-ui/section-one' />
      <DigitalEvolution url='/services/ux-ui/section-two' />
      <CollaborativePartners url='/home/partnership-section' />
      <DesignServices url='/services/ux-ui/section-three' />
      <TechnologyUsed url='/services/ux-ui/tech-tool-section' />
      <Benefits url='/services/ux-ui/section-four' />
      <IndustrySegments title={data?.mainTitle} description={data?.description} />
      <WhyAITC url='/services/ux-ui/section-five' className='bg-lightShad2' />
      <DesignProcess url='/services/ux-ui/process-section' />
      <CTA url={'/services/ux-ui/cta-section-title'} />
      <RelatedServices url='/services/ux-ui/related-service-section' />
      <Achievements url='/services/ux-ui/award-section' />
      <TestimonialSection url='/testimonial/service/ui-ux' />
      <OurWorkServices url='/services/ux-ui/project-section' />
      <ServicesCTA url='/services/ux-ui/cta-section' />
      <FAQ url='/faq/service/ui-ux' />
    </main>
  );
};

export default Page;
