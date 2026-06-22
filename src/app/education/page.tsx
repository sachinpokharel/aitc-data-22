import { redirect } from 'next/navigation';

/*
import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';
import InsightSection from '@/components/pages/Home/InsightSection/InsightSection';

import CommonWhyAITCECommerce from '../(services)/common/CommonWhyAITCECommerce';
import ServicesCTA from '../(services)/common/ServicesCTA';
import Introduction from './components/Aboutus';
import Banner from './components/Banner';
import Instructors from './components/Instructors';
import OfferCourses from './components/OfferCourses';
import Portal from './components/Portal';

export const metadata = generateMetadata('/classroom/seo', 'education');

const page = ({ searchParams }: { searchParams: { course: string; page: number } }) => {
  return (
    <div>
      <Banner />
      <Introduction />
      <OfferCourses course={searchParams?.course} page={searchParams?.page || 1} />
      <CommonWhyAITCECommerce url={'/classroom/classroom-features'} />
      <Instructors />
      <ErrorBoundaryWrapper>
        <CollaborativePartners url='/classroom/placement-partner' />
      </ErrorBoundaryWrapper>
      <Portal />
      <ServicesCTA url={'/classroom/cta-section'} />
      <InsightSection url={'/classroom/insight-section'} />
      <FAQ url={'/classroom/faqs'} />
    </div>
  );
};

export default page;
*/

const Page = () => {
  redirect('https://aitceducation.com/');
};

export default Page;
