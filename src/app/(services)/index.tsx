import { Suspense } from 'react';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import TechSuite from '@/components/pages/aboutus/TechSuite/TechSuite';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import Page from '@/components/pages/Home/ProductDevelopment/page';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';
import Banner from '@/components/pages/services/MainPage/Banner';
import { CaseStudiesService } from '@/components/pages/services/MainPage/CaseStudies/CaseStudies';
import Benefits from '@/components/pages/services/MainPage/ServiceBenefits/Benefits';
import ServiceDescription from '@/components/pages/services/MainPage/ServiceDescription/ServiceDescription';
import ServiceList from '@/components/pages/services/MainPage/ServiceList/ServiceList';

// export const metadata = generateMetadata('/services/seo-section', 'services');

const ServicePage = () => {
  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <ServiceDescription />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <Benefits />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <ServiceList />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <TechSuite />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <CollaborativePartners url='/home/partnership-section' />
      </ErrorBoundaryWrapper>
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

export default ServicePage;
