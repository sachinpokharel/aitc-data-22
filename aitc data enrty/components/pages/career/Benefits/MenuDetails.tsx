import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

import { type SubBenefit } from './Benefits';

const MenuDetails = ({ data }: { data: SubBenefit[] }) => {
  return (
    <div
      className='scrollbar-container-two grid  h-fit w-full grow grid-cols-1 gap-6 overflow-y-auto
      rounded-2xl bg-lightShade1 p-6 xmd:max-h-[500px] xmd:grid-cols-2'
    >
      {data?.map((item) => (
        <div className='flex h-fit max-h-[302px] w-full flex-col gap-6 rounded-lg bg-white p-6' key={item?.id}>
          <div className='flex flex-row items-center  gap-2'>
            <div className='max-h-[54px] max-w-[54px] object-contain'>
              <Image
                src={item?.icon}
                alt={item?.title}
                width={54}
                height={54}
                sizes='calc(100vw - 70%)'
                draggable={false}
              />
            </div>
            <CommonHeader title={item?.title} />
          </div>
          <CommonParargraph text={item?.description} className='text-base' />
        </div>
      ))}
    </div>
  );
};

export default MenuDetails;
