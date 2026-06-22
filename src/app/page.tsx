import { fetchData } from '@/utils/getData';
import { generateMetadata } from '@/utils/getSeoData';
import { Suspense } from 'react';
import { type Popup, type Statistics } from '@/types/Home/collaborative-partners';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import PopupBanner from '@/components/common/layout/PopUpBanner';
import BarrierSection from '@/components/pages/Home/BarriersSection/BarrierSection';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import CompanyStatistics from '@/components/pages/Home/CompanyStatistics/CompanyStatistics';
import CreativeStove from '@/components/pages/Home/CreativeStove/CreativeStove';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import Hero from '@/components/pages/Home/HeroSection/Hero';
import IndustrySegments, { type IndustryData } from '@/components/pages/Home/IndustrySegments/IndustrySegments';
import InsightSection from '@/components/pages/Home/InsightSection/InsightSection';
import KeyValue from '@/components/pages/Home/KeyValueSection/KeyValue';
import Page from '@/components/pages/Home/ProductDevelopment/page';
import Services from '@/components/pages/Home/Services/Services';
import SpotlightSection from '@/components/pages/Home/SpotlightSection/SpotlightSection';
import TestimonialSection from '@/components/pages/Home/Testimonials/TestimonialSection';
import VideoSection from '@/components/pages/Home/VideoSection/VideoSection';

export const metadata = generateMetadata('/home/seo-section');

export default async function Home() {
  const statisticsData = await fetchData<Statistics>('/achivement');
  const popupbanner = await fetchData<Popup>('/home/popup-banner-section');

  const industry = await fetchData<IndustryData>('/home/industry-we-offer-section');

  return (
    <div className='homepage relative'>
      {popupbanner?.featured === true && <PopupBanner popupbanner={popupbanner} />}
      <Hero />
      <ErrorBoundaryWrapper>
        <CollaborativePartners url='/home/partnership-section' />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <VideoSection />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <Services />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <KeyValue />
      </ErrorBoundaryWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
      <ErrorBoundaryWrapper>
        <IndustrySegments title={industry?.title} description={industry?.description} />
      </ErrorBoundaryWrapper>
      <BarrierSection />
      <ErrorBoundaryWrapper>
        <SpotlightSection url='/home/our-work-feature' />
      </ErrorBoundaryWrapper>
      <CreativeStove />
      <ErrorBoundaryWrapper>
        <CompanyStatistics data={statisticsData} />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <InsightSection url='/home/insight-section' />
      </ErrorBoundaryWrapper>
      <TestimonialSection url='/testimonial/landing' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/home' />
      </ErrorBoundaryWrapper>
    </div>
  );
}
