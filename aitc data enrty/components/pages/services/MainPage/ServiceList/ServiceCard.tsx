import { Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { type Service } from '@/types/Home/servicesList';
import CommonParargraph from '@/components/common/CommonParargraph';
import LongArrow from '@/components/common/icon/LongArrow';

const ServiceCard = ({ item, index }: { item: Service; index: number }) => {
  return (
    <Zoom cascade={true} triggerOnce delay={(index + 1) * 4} damping={0.2}>
      <Link
        // href={`/services/${item?.clientSlug}
        href={`/${item?.clientSlug}
        `}
        className=' flex flex-col gap-6 rounded-2xl border border-transparent bg-lightShad2 p-6 transition-all duration-300 hover:border-primary  xl:min-h-[377px]'
      >
        <div>
          <Image
            src={item?.image}
            alt={item?.title}
            width={100}
            height={100}
            className='size-20 rounded-xl bg-white object-contain'
          />
        </div>
        <div className=' flex flex-row items-center gap-4'>
          <p className='whitespace-nowrap  text-lg font-black leading-[150%] tracking-[0.36px] text-mainBlack lg:whitespace-normal'>
            {item?.title}
          </p>
          <LongArrow />
        </div>
        <CommonParargraph text={item?.description} />
      </Link>
    </Zoom>
  );
};

export default ServiceCard;
