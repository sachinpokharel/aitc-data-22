import { generateMetadata } from '@/utils/getSeoData';
import { Suspense } from 'react';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import TechSuite from '@/components/pages/aboutus/TechSuite/TechSuite';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import Page from '@/components/pages/Home/ProductDevelopment/page';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';
import BestChoice from '@/components/pages/leaflet/BestChoice';
import Compliance from '@/components/pages/leaflet/Compliance';
import Excellence from '@/components/pages/leaflet/Excellence';
import LeafletCTA from '@/components/pages/leaflet/LeafletCta';
import Banner from '@/components/pages/services/MainPage/Banner';
import { CaseStudiesService } from '@/components/pages/services/MainPage/CaseStudies/CaseStudies';
import ServiceDescription from '@/components/pages/services/MainPage/ServiceDescription/ServiceDescription';
import ServiceList from '@/components/pages/services/MainPage/ServiceList/ServiceList';

export const metadata = generateMetadata('/services/seo-section', 'why-us');

const LeafletPage = () => {
  return (
    <main className='max-2xl:overflow-hidden'>
      <ErrorBoundaryWrapper>
        <Banner />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <ServiceDescription />
      </ErrorBoundaryWrapper>
      <BestChoice />
      <Excellence />
      <LeafletCTA />

      {/* <ErrorBoundaryWrapper>
        <Benefits />
      </ErrorBoundaryWrapper> */}
      <ErrorBoundaryWrapper>
        <ServiceList showGameDevelopmentCard />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <TechSuite />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <CollaborativePartners url='/home/partnership-section' />
      </ErrorBoundaryWrapper>
      <Compliance />
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
      <CaseStudiesService url='/services/our-work-feature' />
      <TestimonialSection url='/testimonial/service' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/service' />
      </ErrorBoundaryWrapper>
    </main>
  );
};

export default LeafletPage;
