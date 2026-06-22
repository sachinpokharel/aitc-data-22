import { fetchData } from '@/utils/getData';
import { type InsightIndividual } from '@/types/insights/insights';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import ExpertGuidance from '@/components/pages/insights/ExpertGuidance/ExpertGuidance';
import Banner from '@/components/pages/insights/IndividualInsight/Banner/Banner';
import InsightWrapper from '@/components/pages/insights/IndividualInsight/InsightContainer/InsightWrapper';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const metadata = await fetchData<InsightIndividual>(`/insight/${params.slug}`);

  return {
    title: metadata?.seoTitle,
    description: metadata?.seoDescription,

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}insights/${params.slug}`,
    },
    openGraph: {
      title: metadata?.seoTitle,
      description: metadata?.seoDescription,
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}insights/${params.slug}`,
      type: 'website',
      siteName: 'AITC International',
      images: [
        {
          url: metadata?.coverImage,
          width: 1200,
          height: 630,
          alt: metadata?.seoTitle,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchData<InsightIndividual>(`/insight/${params.slug}`);

  return (
    <main>
      <ErrorBoundaryWrapper>
        <Banner title={data?.title} coverImage={data?.coverImage} insightTags={data?.insightTags} />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <InsightWrapper data={data} />
      </ErrorBoundaryWrapper>
      <ExpertGuidance />
    </main>
  );
};

export default Page;
