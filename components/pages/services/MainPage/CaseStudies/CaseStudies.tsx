import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import SpotlightCard from '@/components/pages/Home/SpotlightSection/SpotlightCard';

type OurWorkDTOService = {
  id: number;
  mainTitle: string;
  description: string;
  products: {
    id: string;
    title: string;
    bgImage: string;
    slug: string;
    productTags: {
      name: string;
    }[];
  }[];
};

type OurWorkDTO = {
  id: string;
  title: string;
  bgImage: string;
  slug: string;
  productTags: {
    name: string;
  }[];
};

const CaseStudies = async ({ url }: { url: string }) => {
  const data = await fetchData<OurWorkDTO[]>(url);

  return (
    <>
      {data?.length > 0 ? (
        <CommonAnimation className='flex min-h-screen flex-col items-center justify-center  gap-12 px-6 py-14'>
          <div className='flex flex-col items-center justify-center gap-8 text-center'>
            <CommonTitle title='Our recent case studies' />
            <CommonParargraph
              text='Discover in-depth insights and innovative discoveries to understand the industry shifts. Our team provides valuable knowledge and expert guidance'
              className='xl:w-[90%]'
            />
          </div>
          <div className='grid  place-items-center gap-8 md:grid-cols-2 xl:w-3/5 xl:grid-cols-3'>
            {data?.map((item, index) => (
              <SpotlightCard
                key={item.id}
                title={item.title}
                image={item?.bgImage}
                tags={item?.productTags}
                link={`/ourwork/${item.slug}`}
                index={index}
              />
            ))}
          </div>
          <CommonButton text='Explore More' href='/ourwork' />
        </CommonAnimation>
      ) : null}
    </>
  );
};

export default CaseStudies;

export const CaseStudiesService = async ({ url }: { url: string }) => {
  const data = await fetchData<OurWorkDTOService>(url);

  return (
    <CommonAnimation className='flex min-h-screen flex-col items-center justify-center  gap-12 px-6 py-14'>
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <CommonTitle title={data?.mainTitle} />
        <CommonParargraph text={data?.description} className='xl:w-[90%]' />
      </div>
      <div className='grid  place-items-center gap-8 md:grid-cols-2 xl:w-3/5 xl:grid-cols-3'>
        {data?.products
          ?.slice(0, 6)
          .map((item, index) => (
            <SpotlightCard
              key={item.id}
              title={item.title}
              image={item?.bgImage}
              tags={item?.productTags}
              link={`/ourwork/${item.slug}`}
              index={index}
            />
          ))}
      </div>
      <CommonButton text='Explore More' href='/ourwork' />
    </CommonAnimation>
  );
};
