import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import SpotlightCard from './SpotlightCard';

interface ProductTag {
  name: string;
}

interface Product {
  id: string;
  mainTitle: string;
  description: string;
  bgImage: string;
  products: {
    id: string;
    title: string;
    bgImage: string;
    slug: string;
    productTags: ProductTag[];
  }[];
}

const SpotlightSection = async ({ url }: { url: string }) => {
  const spotlightData = await fetchData<Product>(url);

  return (
    <CommonAnimation className='flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-14 xl:py-24'>
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <CommonTitle title={spotlightData?.mainTitle} delay={delays.short} />
        <CommonParargraph text={spotlightData?.description} delay={delays.medium} className='text-center lg:w-4/5' />
      </div>
      <div className='flex max-w-[1500px] flex-wrap justify-center gap-8'>
        {spotlightData?.products?.map((item, index) => (
          <SpotlightCard
            key={item?.id}
            title={item.title}
            image={item?.bgImage}
            tags={item?.productTags}
            link={`/ourwork/${item?.slug}`}
            index={index}
          />
        ))}
      </div>
      <CommonButton text='Explore More' href='/ourwork' />
    </CommonAnimation>
  );
};

export default SpotlightSection;
