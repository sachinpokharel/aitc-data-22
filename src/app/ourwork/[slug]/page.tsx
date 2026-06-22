import { fetchData } from '@/utils/getData';
import { type HeroData, type SpecificPageDTO } from '@/types/ourwork/specificpageDTO';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import { CreativeStoveRelated } from '@/components/pages/Home/CreativeStove/CreativeStove';
import AboutProject from '@/components/pages/ourwork/SpecificWork/AboutProject';
import Banner from '@/components/pages/ourwork/SpecificWork/Banner';
import Features from '@/components/pages/ourwork/SpecificWork/Features';
import FeaturesExplored from '@/components/pages/ourwork/SpecificWork/FeaturesExplored';
import Instructions from '@/components/pages/ourwork/SpecificWork/Instructions';
import Introduction from '@/components/pages/ourwork/SpecificWork/Introduction';
import Platforms from '@/components/pages/ourwork/SpecificWork/Platforms';
import Solutions from '@/components/pages/ourwork/SpecificWork/Solutions';
import TeamMembers from '@/components/pages/ourwork/SpecificWork/TeamMembers';
import TechnologyUsed from '@/components/pages/ourwork/SpecificWork/TechnologyUsed';
import WorkImage, { WorkImageEight } from '@/components/pages/ourwork/SpecificWork/WorkImage';
import CaseStudies from '@/components/pages/services/MainPage/CaseStudies/CaseStudies';

import ServicesCTA from '../../(services)/common/ServicesCTA';

const ComponentMapping: {
  [key: string]: (props: { id: string; position?: number }) => JSX.Element | Promise<JSX.Element>;
} = {
  sectionOne: TechnologyUsed,
  sectionTwo: AboutProject,
  sectionThree: Features,
  sectionFour: FeaturesExplored,
  sectionFive: TeamMembers,
  sectionSix: Solutions,
  sectionSeven: WorkImage,
  sectionEight: WorkImageEight,
  sectionNine: Instructions,
  sectionTen: Platforms,
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const metadata = await fetchData<HeroData>(`/our-work/product/seo/${params?.slug}`);

  return {
    title: metadata?.title,
    description: metadata?.description,

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork/${params.slug}`,
    },
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork/${params.slug}`,
      type: 'website',
      siteName: 'AITC International',
      images: [
        {
          url: metadata?.bgImage,
          width: 1200,
          height: 630,
          alt: metadata?.title,
        },
      ],
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchData<SpecificPageDTO>(`/our-work/section-detail-of-products/${params?.slug}`);

  const mainData = await fetchData<HeroData>(`/our-work/product/${params?.slug}`);

  const sortedComponents = Object.keys(data)
    .sort((a, b) => {
      const aPosition = data[a as keyof typeof data]?.position;
      const bPosition = data[b as keyof typeof data]?.position;
      return (aPosition ?? 0) - (bPosition ?? 0);
    })
    .map((key: string) => {
      const Component = ComponentMapping[key as keyof SpecificPageDTO];

      const { id } = data[key as keyof SpecificPageDTO];
      return Component ? <Component key={key} id={id} /> : null;
    });

  // Render the sorted components
  return (
    <ErrorBoundaryWrapper>
      <Banner data={mainData} />
      <Introduction data={mainData} />
      {sortedComponents}
      <ServicesCTA url={`/our-work/product/cta-section/${params?.slug}`} />
      <CaseStudies url={`/our-work/product/specific-page/list/${params?.slug}?type=client`} />
      <CreativeStoveRelated slug={params?.slug} />
    </ErrorBoundaryWrapper>
  );
};

export default Page;
