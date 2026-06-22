import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type KeyPoint, type KeypointsResponse } from '@/types/service/KeypointsDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

import { MiddleImage } from './MainImage';

const Servcies = async ({ url }: { url: string }) => {
  const data = await fetchData<KeypointsResponse>(url);

  return (
    <CommonAnimation className='softwaredevelopment common-section common-padding  justify-center'>
      <CommonTitle title={data?.title} className='text-center' delay={delays.long} />
      <div className='list grid grid-cols-1 gap-[3.25rem] xmd:grid-cols-2 lg:grid-cols-3'>
        {data?.keyPoints?.map((item) => <Card key={item?.id} item={item} />)}

        <MiddleImage index={Math.ceil(data?.keyPoints?.length / 2)} image={data?.image} />
      </div>
    </CommonAnimation>
  );
};

export default Servcies;

const Card = ({ item }: { item: KeyPoint }) => {
  return (
    <div className='flex  max-w-[349px] flex-col gap-6'>
      <div className='flex flex-row items-center gap-4'>
        <div>
          <Image src={item?.image} alt='arrow' width={64} height={64} />
        </div>
        <CommonHeader title={item?.title} />
      </div>
      <CommonParargraph text={item?.description} />
    </div>
  );
};
