import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import Corevalues from '@/components/pages/aboutus/CoreValues/Corevalues';
import Banner from '@/components/pages/career/Banner';
import Benefits from '@/components/pages/career/Benefits/Benefits';
import Diversity from '@/components/pages/career/Diversity/Diversity';
import HiringProcess from '@/components/pages/career/HiringProcess/HiringProcess';
import JoinOurTeam from '@/components/pages/career/JoinOurTeam';
import JoinUs from '@/components/pages/career/JoinUs/JoinUs';

export const metadata = generateMetadata('/career/seo', 'career');

const Career = () => {
  return (
    <ErrorBoundaryWrapper>
      <Banner />
      <JoinOurTeam />
      <JoinUs />
      <Diversity />
      <Corevalues />
      <Benefits />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ClientComponents>
          <JobOpenings />
        </ClientComponents>
      </Suspense> */}
      <HiringProcess />
    </ErrorBoundaryWrapper>
  );
};

export default Career;
