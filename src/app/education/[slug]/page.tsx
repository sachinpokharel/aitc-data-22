import { redirect } from 'next/navigation';

/*
import { fetchData } from '@/utils/getData';
import { type CourseDetailType } from '@/types/classroom/CourseDetail';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CourseOverview from './components/CourseOverview';
import CoursesCTA from './components/CoursesCTA';
import Hero from './components/Hero';
import LearnMore from './components/LearnMore';
import RelatedCourses from './components/RelatedCourses';

type MetaType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const metadata: MetaType = await fetchData<MetaType>(`/classroom/course/seo/${params.slug}`);

  return {
    title: metadata?.title,
    description: metadata?.description,

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}education/${params.slug}`,
    },
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}education/${params.slug}`,
      type: 'website',
      siteName: 'AITC International',
      images: [
        {
          url: metadata?.imageUrl,
          width: 1200,
          height: 630,
          alt: metadata?.title,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const courseData = await fetchData<CourseDetailType>(`/classroom/course/${params.slug}`);

  return (
    <ErrorBoundaryWrapper>
      <Hero
        title={courseData?.title}
        price={courseData?.price}
        minDuration={courseData?.minDuration}
        maxDuration={courseData?.maxDuration}
        durationUnit={courseData?.durationUnit}
        coverImage={courseData?.image}
        description={courseData?.description}
        completedSessionCount={courseData?.completedSessionCount}
        runningSessionCount={courseData?.runningSessionCount}
        nextSession={courseData?.nextSession?.startDate}
        slug={params.slug}
      />
      <CourseOverview
        courseDetail={courseData?.courseDetail}
        minDuration={courseData?.minDuration}
        maxDuration={courseData?.maxDuration}
        durationUnit={courseData?.durationUnit}
        slug={params.slug}
      />
      <CoursesCTA data={courseData?.courseDetail?.classroomCTASection} />
      <RelatedCourses related={courseData?.relatedCourses} />
      <LearnMore insights={courseData?.courseDetail?.courseInsightFeature} />
      <FAQ url={`/classroom/offered-course/faq/${params.slug}`} />
    </ErrorBoundaryWrapper>
  );
};

export default Page;
*/

const Page = () => {
  redirect('https://aitceducation.com/');
};

export default Page;
