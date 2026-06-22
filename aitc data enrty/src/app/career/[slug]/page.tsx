import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import IndividualCareerBanner from '@/components/pages/career/IndividualCareer/Banner';
import JobDescription from '@/components/pages/career/IndividualCareer/JobDescription';
import SimilarVacancies from '@/components/pages/career/IndividualCareer/SimilarVacancies';
import { type JobDescriptionProps } from '@/types/career/career';
import { fetchData } from '@/utils/getData';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const metadata = await fetchData<JobDescriptionProps>(`/career/vacancy/${params.slug}`);
  // Return null to prevent metadata generation for expired jobs
  if (!metadata || new Date(metadata.expiryDate) < new Date()) {
    return null;
  }
  return {
    title: metadata?.jobTitle,
    description: metadata?.description,

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}career/${params.slug}`,
    },
    openGraph: {
      title: metadata?.jobTitle,
      description: metadata?.description,
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}career/${params.slug}`,
      type: 'website',
      siteName: 'AITC International',
      images: [
        {
          url: metadata?.coverImage,
          width: 1200,
          height: 630,
          alt: metadata?.jobTitle,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchData<JobDescriptionProps>(`/career/vacancy/${params.slug}`);
  if (new Date(data.expiryDate) < new Date()) {
    notFound()
  }
  return (
    <div>
      <ErrorBoundaryWrapper>
        <IndividualCareerBanner url={`/career/vacancy/${params.slug}`} />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <JobDescription data={data} />
      </ErrorBoundaryWrapper>
      <SimilarVacancies slug={params.slug} />
    </div>
  );
};

export default Page;
