import { fetchData, fetchPaginationData } from '@/utils/getData';
import { generateMetadata } from '@/utils/getSeoData';
import { type IndustryTags, type InsightHero, type InsightsResponse } from '@/types/insights/insights';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import Banner from '@/components/pages/insights/Banner/Banner';
import ExpertGuidance from '@/components/pages/insights/ExpertGuidance/ExpertGuidance';
import InsightListing from '@/components/pages/insights/Listing/InsightListing';

export const metadata = generateMetadata('/insight/seo-section', 'insights');

const Page = async ({
  searchParams,
}: {
  searchParams: { search: string; category: string; page: number; limit: number };
}) => {
  const activePage = searchParams.page || 1;

  const { search, category } = searchParams;
  const hero = await fetchData<InsightHero>('/insight/hero-section');
  const industryTags = await fetchData<IndustryTags[]>('/insight/industry-tag');
  const selectedIndustry = industryTags.find((tag) => tag.slug === category);
  const insights = await fetchPaginationData<InsightsResponse>(
    `/insight?page=${activePage}&limit=${9}${search ? `&q=${search}` : ''}${selectedIndustry ? `&industries=${selectedIndustry.id}` : ''}`
  );

  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner hero={hero} industryTags={industryTags} />
      </ErrorBoundaryWrapper>
      <InsightListing insights={insights?.data} pagination={insights?.pagination} />
      <ExpertGuidance />
    </main>
  );
};

export default Page;
