import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';

import Achievements from '../common/Achievements/Achievements';
import Introduction from '../common/Introduction';
import RelatedServices from '../common/RelatedServices';
import ServicesCTA from '../common/ServicesCTA';
import ThreeImageBanner from '../digital-marketing/components/Banner';
import WhyChooseAitc from '../digital-marketing/components/WhyChooseAitc';
import AugmentedReality from './components/AugmentedReality/AugmentedReality';
import ExperienceVR from './components/ExperienceVR';
import ModelingAndDesign from './components/ModelingAndDesign';
import VRDevelopment from './components/VRDevelopment';

export const metadata = generateMetadata('/services/ar-vr/seo-section', 'ar-vr');

const ARVRPage = () => {
  return (
    <main>
      <ThreeImageBanner type='AR' url='/services/ar-vr/hero-section' />
      <AugmentedReality type='AR' url='/services/ar-vr/section-one' />
      <AugmentedReality className='bg-lightShad2' type='VR' url='/services/ar-vr/section-two' />
      <CollaborativePartners url='/home/partnership-section' />
      <Introduction url='/services/ar-vr/section-three' className='bg-lightShad2' />
      <VRDevelopment url='/services/ar-vr/section-four' />
      <ModelingAndDesign url='/services/ar-vr/section-five' />
      <ExperienceVR url='/services/ar-vr/section-six' />
      <WhyChooseAitc url='/services/ar-vr/section-seven' />
      <ServicesCTA url='/services/ar-vr/cta-section' />
      <RelatedServices url='/services/ar-vr/related-service-section' />
      <TestimonialSection url='/testimonial/service/ar-vr' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/service/ar-vr' />
      </ErrorBoundaryWrapper>
      <Achievements url='/services/ar-vr/award-section' />
    </main>
  );
};

export default ARVRPage;
