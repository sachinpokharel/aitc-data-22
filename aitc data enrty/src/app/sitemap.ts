import { fetchData, fetchPaginationData } from '@/utils/getData';
import { type OfferedCourseResponsePagination } from '@/types/classroom/offeredCourseDTO';
import { type ServicesListdto } from '@/types/Home/servicesList';
import { type InsightsResponse } from '@/types/insights/insights';
import { type OurVacancySection } from '@/components/pages/career/JobOpenings/JobOpenings';

const staticurl = [
  {
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}aboutus`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}career`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}insights`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}education`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}contact-us`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}buy-domain`,
    lastModified: new Date(),
  },
  // {
  //   url: `${process.env.NEXT_PUBLIC_CLIENT_URL}services`,
  //   lastModified: new Date(),
  // },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork/ludo-rollnwin`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork/callbreak-clash-of-cards`,
    lastModified: new Date(),
  },
  {
    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork/aitc-homes`,
    lastModified: new Date(),
  },
];

export default async function sitemap() {
  const staticroutes = staticurl.map((route) => ({
    url: route.url,
    lastModified: new Date(),
  }));

  const servicelist = await fetchData<ServicesListdto>('/services/sub-service');
  const servicelistroutes = servicelist?.services?.map((item) => {
    return {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}${item?.clientSlug}`,
      lastModified: new Date(),
    };
  });

  const subServicesListRoutes = servicelist?.services?.map((items) =>
    items?.subServices?.map((item) => {
      return {
        url: `${process.env.NEXT_PUBLIC_CLIENT_URL}${items?.clientSlug}/${item?.slug}`,
        lastModified: new Date(),
      };
    })
  );

  // const InhouseProject = await fetchData<InhouseProject>('/home/our-work-feature?type=inhouse');

  // InhouseProject?.products?.forEach((item) => {
  //   staticroutes.push({
  //     url: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork/${item?.slug}`,
  //     lastModified: new Date(),
  //   });
  // });

  // const productData = await fetchPaginationData<ProductResponse>(
  //   `/our-work/product/list?limit=1000&page=${1}&type=client`
  // );

  // productData?.data?.forEach((item) => {
  //   staticroutes.push({
  //     url: `${process.env.NEXT_PUBLIC_CLIENT_URL}ourwork/${item?.slug}`,
  //     lastModified: new Date(),
  //   });
  // });

  const careerlist = await fetchData<OurVacancySection>('/career/our-vacancy-section');

  careerlist?.vacancies?.forEach((item) => {
    staticroutes.push({
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}career/${item?.slug}`,
      lastModified: new Date(),
    });
  });

  const courselist = await fetchPaginationData<OfferedCourseResponsePagination>(
    `/classroom/offered-course?limit=1000&page=${1}`
  );

  courselist?.data?.courses?.forEach((item) => {
    staticroutes.push({
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}education/${item?.slug}`,
      lastModified: new Date(),
    });
  });

  const insights = await fetchPaginationData<InsightsResponse>(`/insight?page=${1}&limit=${1000}`);

  insights?.data?.forEach((item) => {
    staticroutes.push({
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}insights/${item?.slug}`,
      lastModified: new Date(),
    });
  });

  return [...staticroutes, ...servicelistroutes, ...subServicesListRoutes.flat()];
}
