import { FaArrowRight } from 'react-icons/fa';
import { type Dispatch, type SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CommonAnimation } from '../../animation/CommonAnimation';
import CommonParargraph from '../../CommonParargraph';
import { CommonHeader } from '../../CommonTitle';
import { type ServiceCategory, type ServiceList } from '../Header';

const DesktopServices = ({
  setShowServices,
  data,
}: {
  data: ServiceCategory[];
  setShowServices: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onMouseLeave={() => setShowServices(false)}
      onMouseEnter={() => setShowServices(true)}
      className='services common-padding absolute 
       left-0 z-[999999999999999999] flex w-full flex-row justify-center gap-8 overflow-hidden bg-gradient-to-b from-[#F4F4FF] to-[#FAFAFF] py-6 shadow-2xl'
    >
      <div className='flex w-full flex-row justify-center gap-6'>
        <div className='grid w-[82%] grid-cols-2 gap-4 xl:grid-cols-3'>
          <div className='flex flex-col gap-4'>
            <CommonParargraph text={data[0]?.category} className='text-secondary' />
            {data[0]?.services?.map((item, index) => (
              <ServiceCard setShowServices={setShowServices} key={index} item={item} index={index} />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            <CommonParargraph text={data[1]?.category} className='text-secondary' />
            {data[1]?.services?.map((item, index) => (
              <ServiceCard setShowServices={setShowServices} key={index} item={item} index={index} />
            ))}
          </div>
          <div className='flex flex-col gap-4'>
            <CommonParargraph text={data[2]?.category} className='text-secondary' />
            {data[2]?.services?.map((item, index) => (
              <ServiceCard setShowServices={setShowServices} key={index} item={item} index={index} />
            ))}
          </div>
        </div>
        <Link
          onClick={() => setShowServices(false)}
          href={'/buy-domain'}
          className='group h-fit w-[18%] rounded-lg bg-white'
        >
          <div className='flex flex-col gap-4 p-4'>
            <CommonHeader title='Secure your perfect domain' />
            <CommonParargraph text='Find the ideal domain name for your brand and make your online presence unforgettable, start your search today' />
            <div className='flex flex-row items-center gap-2 text-primary'>
              <CommonHeader title='Explore domains' className='text-primary' />
              <span className='hover-arrow-slide'>
                <FaArrowRight size={18} />
              </span>
            </div>
          </div>
          <Image
            src='/images/domain.png'
            alt='services'
            width={500}
            height={500}
            className='max-h-[250px] w-full rounded-b-lg object-contain'
          />
        </Link>
      </div>
    </div>
  );
};

export default DesktopServices;

export const ServiceCard = ({
  item,
  setShowServices,
  index,
}: {
  item: ServiceList;
  setShowServices: Dispatch<SetStateAction<boolean>>;
  index: number;
}) => {
  return (
    <CommonAnimation delay={(index + 1) / 30} className='w-full'>
      <Link
        onClick={() => setShowServices(false)}
        href={`/${item?.clientSlug}`}
        // href={`/services/${item?.clientSlug}`}
        className='flex w-full max-w-[425px] flex-row items-start gap-4 rounded-lg border-2 border-transparent bg-white p-4 transition-all duration-300 hover:border-[#B8B8FF]'
      >
        <Image
          src={item?.bgImage}
          alt={item?.title}
          width={50}
          height={50}
          className='h-[42px] w-[55px] rounded-2xl object-cover'
        />
        <div className='flex flex-col gap-1'>
          <CommonHeader title={item?.title} className='font-bold' />
          <div className='flex h-auto flex-wrap gap-1'>
            {item?.keyword?.map((desc, index) => (
              <p key={index} className='text-sm capitalize text-grey'>
                {index + 1 < item?.keyword?.length ? `${desc},` : desc}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </CommonAnimation>
  );
};
