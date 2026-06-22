import { fetchData } from '@/utils/getData';
import { Suspense } from 'react';
import { type ProductDevelopmentDTO } from '@/types/Home/ProductDevelopment';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

import IndividualDetail from './IndividualDetail';
import Menu from './Menu';
import ProductDevelopment from './ProductDevelopment';

const Page = async () => {
  const data = await fetchData<ProductDevelopmentDTO>('/home/workflow-process-section');

  const menu = data?.workflowProcessDetail?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      icon: item?.iconUrl,
      url: item?.slug,
      slug: item?.slug,
    };
  });

  return (
    <Suspense fallback={<div>Loading... Skeleton required </div>}>
      <CommonAnimation>
        <ProductDevelopment title={data?.title}>
          <Menu menulist={menu} />
          <Suspense fallback={<div>Loading...</div>}>
            <IndividualDetail menuDetails={data?.workflowProcessDetail} />
          </Suspense>
        </ProductDevelopment>
      </CommonAnimation>
    </Suspense>
  );
};

export default Page;
