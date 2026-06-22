import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import { CreativeStoveOurWork } from '@/components/pages/Home/CreativeStove/CreativeStove';
import GlobalImpact from '@/components/pages/ourwork/GlobalImpact/GlobalImpact';
import SuccessStories from '@/components/pages/ourwork/SuccessStories/SuccessStories';

import Banner from '../../../components/pages/ourwork/banner/Banner';

export const metadata = generateMetadata('/our-work/seo', 'ourwork');

const Page = ({ searchParams }: { searchParams: { tab: string; page: number; ProjectPage: number } }) => {
  const activePage = searchParams.page || 1;

  const activeProjectPage = searchParams.ProjectPage || 1;

  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <GlobalImpact />
      </ErrorBoundaryWrapper>
      <CreativeStoveOurWork activeProjectPage={activeProjectPage} />
      <ErrorBoundaryWrapper>
        <SuccessStories activeTab={searchParams?.tab} activePage={activePage} />
      </ErrorBoundaryWrapper>
    </main>
  );
};

export default Page;
