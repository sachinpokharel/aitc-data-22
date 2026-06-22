import { delays } from '@/utils/animation-config';
import { fetchData, fetchPaginationData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import { type ProductSection } from '@/types/ourwork/main';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import { PaginationProject } from '@/components/common/Pagination';

import CreativeStoveCard from './CreativeStoveCard';

export type InhouseProject = {
  id: string;
  mainTitle: string;
  description: string;
  type: string;
  products: {
    id: string;
    title: string;
    bgImage: string;
    slug: string;
    description: string;
  }[];
};

export type ProductInHouse = {
  data: { id: string; title: string; bgImage: string; slug: string; description: string }[];
  pagination: {
    total: {
      page: number;
      limit: number;
    };
    next: {
      page: number | null;
      limit: number;
    };
    prev: {
      page: number | null;
      limit: number;
    };
  };
};

type IndividualProduct = {
  id: string;
  title: string;
  bgImage: string;
  slug: string;
  description: string;
};

const CreativeStove = async () => {
  const data = await fetchData<InhouseProject>('/home/our-work-feature?type=inhouse');

  return (
    <div className=' bg-lightShad2'>
      <CommonAnimation className='main-common-padding mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-12  '>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
          <CommonTitle title={data?.mainTitle} delay={delays.short} />
          <CommonParargraph text={data?.description} delay={delays.medium} />
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
          {data?.products?.map((item) => (
            <Slide
              className='w-full md:max-w-[350px]'
              key={item.id}
              direction='up'
              triggerOnce
              cascade
              damping={0.2}
              fraction={0.2}
            >
              <CreativeStoveCard
                key={item.id}
                id={item.slug}
                title={item.title}
                description={item?.description}
                image={item?.bgImage}
              />
            </Slide>
          ))}
        </div>
        <CommonButton text='Explore More' href='/ourwork' />
      </CommonAnimation>
    </div>
  );
};

export default CreativeStove;

export const CreativeStoveOurWork = async ({ activeProjectPage }: { activeProjectPage: number }) => {
  const headerdata = await fetchData<ProductSection>('/our-work/our-product-section?type=inhouse');
  const data = await fetchPaginationData<ProductInHouse>(
    `/our-work/product/list?limit=9&page=${activeProjectPage}&type=inhouse`
  );

  return (
    <div className=' bg-lightShad2'>
      <CommonAnimation className='main-common-padding mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-12'>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
          <CommonTitle title={headerdata?.mainTitle} delay={delays.medium} />
          <CommonParargraph text={headerdata?.description} delay={delays.long} />
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
          {data?.data?.map((item) => (
            <Slide
              key={item.id}
              direction='up'
              triggerOnce
              cascade
              damping={0.2}
              fraction={0.2}
              className='w-full max-w-[350px]'
            >
              <CreativeStoveCard
                key={item.id}
                id={item?.slug}
                title={item.title}
                description={item?.description}
                image={item?.bgImage}
              />
            </Slide>
          ))}
        </div>
        {data?.pagination?.next?.page && (
          <PaginationProject totalPages={data?.pagination?.total?.page} pageName={'/ourwork'} />
        )}
      </CommonAnimation>
    </div>
  );
};

export const CreativeStoveRelated = async ({ slug }: { slug: string }) => {
  const data = await fetchData<IndividualProduct[]>(`/our-work/product/specific-page/list/${slug}?type=inhouse`);

  return (
    <>
      {data?.length > 0 ? (
        <div className=' bg-lightShad2'>
          <CommonAnimation className='main-common-padding mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-12  '>
            <div className='flex flex-col items-center justify-center gap-8 text-center'>
              <CommonTitle title='Related Projects' delay={delays.medium} />
            </div>
            <div className='grid place-items-center gap-8 md:grid-cols-2 xl:grid-cols-3'>
              {data?.map((item, index) => (
                <CommonAnimation key={item.id} delay={(index + 1) / 4} className='w-full'>
                  <CreativeStoveCard
                    key={item.id}
                    id={item.slug}
                    title={item.title}
                    description={item?.description}
                    image={item?.bgImage}
                  />
                </CommonAnimation>
              ))}
            </div>
            <CommonButton text='Explore More' href='/ourwork' />
          </CommonAnimation>
        </div>
      ) : null}
    </>
  );
};
