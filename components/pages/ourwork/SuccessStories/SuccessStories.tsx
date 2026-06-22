import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import Pagination from '@/components/common/Pagination';
import { type ProductResponse, type ProductSection, type ServiceTags } from '@/types/ourwork/main';
import { fetchData, fetchPaginationData } from '@/utils/getData';

import SpotlightCard from '../../Home/SpotlightSection/SpotlightCard';
import Categories from './Categories';

type SuccessStoriesProps = {
  activeTab: string;
  activePage: number;
};

const SuccessStories = async ({ activeTab, activePage }: SuccessStoriesProps) => {
  const data = await fetchData<ProductSection>('/our-work/our-product-section');
  const tagData = await fetchData<ServiceTags[]>('/our-work/product/tag/list');

  const productData = await fetchPaginationData<ProductResponse>(
    `/our-work/product/list?${activeTab ? `serviceTagId=${activeTab}&` : ''}limit=9&page=${activePage}&type=client`
  );

  return (
    <CommonAnimation className='flex flex-col items-center justify-center gap-10 self-stretch overflow-hidden px-6 py-[60px] [background:#FFF] lg:px-[150px] lg:py-[100px]'>
      <div className='flex flex-col items-center justify-center gap-6 *:text-center'>
        <CommonChip text={data.sectionTitle} />
        <CommonTitle title={data.mainTitle} />
        <CommonParargraph text={data.description} />
      </div>

      <div className='hide-scrollbar auto flex w-full max-w-full gap-6 overflow-x-auto whitespace-nowrap px-4 py-2 lg:w-[867px] lg:flex-wrap lg:justify-center lg:px-6'>
        {[{ id: 0, name: 'All', slug: 'all' }, ...tagData]?.map((item) => (
          <Categories key={item.id} name={item?.name} slug={item?.slug} />
        ))}
      </div>

      {productData?.data && productData?.data?.length > 0 ? (
        <div className='flex flex-wrap justify-center gap-8'>
          {productData?.data?.map((product, index) => (
            <SpotlightCard
              key={product?.id}
              title={product?.title}
              image={product?.bgImage}
              tags={product?.productTags}
              link={`/ourwork/${product?.slug}`}
              hasCaseStudy={product?.hasCaseStudy}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div>
          <p className='text-center text-lg text-gray-500'>
            Apologies, but we could not find any information related to this category.
          </p>
        </div>
      )}
      {(productData?.pagination?.total?.page as number) > 1 && (
        <Pagination totalPages={productData?.pagination?.total?.page as number} pageName='/ourwork' />
      )}
    </CommonAnimation>
  );
};

export default SuccessStories;
