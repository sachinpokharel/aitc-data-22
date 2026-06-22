import { FaAngleDown, FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '../../../../utils/cn';
import CommonParargraph from '../../CommonParargraph';
import { CommonHeader } from '../../CommonTitle';
import { type ServiceCategory, type ServiceList } from '../Header';

const MobileServices = ({ data }: { data: ServiceCategory[] }) => {
  const [height, setHeight] = useState('0px');
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className='accordion-container flex w-full flex-col gap-6'>
      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className='accordion-header flex w-full items-center justify-between'
      >
        <p className={cn('text-lg font-medium ', isOpen ? 'text-primary' : 'text-mainBlack')}> Services</p>
        {isOpen ? (
          <FaAngleDown size={24} className=' rotate-180 transition-all duration-300' />
        ) : (
          <FaAngleDown size={24} className=' transition-all duration-300' />
        )}
      </button>
      {isOpen && (
        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className='accordion-body flex flex-col items-start justify-start gap-8 overflow-hidden rounded bg-gradient-to-b from-[#F4F4FF] to-[#FAFAFF] p-4 transition-all duration-300 md:p-6'
        >
          <div className='flex w-full flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <CommonParargraph text={data[0]?.category} className='text-left text-secondary' />
              {data[0]?.services?.map((item) => <ServiceCard key={item?.clientSlug} item={item} />)}
            </div>
            <div className='flex  flex-col gap-4'>
              <CommonParargraph text={data[1]?.category} className='text-left text-secondary' />
              {data[1]?.services?.map((item) => <ServiceCard key={item?.clientSlug} item={item} />)}
            </div>
            <div className='flex  flex-col gap-4'>
              <CommonParargraph text={data[2]?.category} className='text-left text-secondary' />
              {data[2]?.services?.map((item) => <ServiceCard key={item?.clientSlug} item={item} />)}
            </div>
          </div>
          <Link href={'/buy-domain'} className='group h-fit rounded-lg bg-white'>
            <div className='flex flex-col gap-4 p-4'>
              <CommonHeader title='Secure your perfect domain' className='text-left' />
              <CommonParargraph
                text='Find the ideal domain name for your brand and make your online presence unforgettable, start your search today'
                className='text-left'
              />
              <div className='flex flex-row items-center gap-2 text-primary'>
                <CommonHeader title='Explore domains' className='text-left text-primary' />
                <span className='hover-arrow-slide'>
                  <FaArrowRight size={18} />
                </span>
              </div>
            </div>
            <Image
              src='/images/domain.png'
              alt='services'
              width={700}
              height={700}
              className='max-h-[648px] w-full rounded-b-lg object-contain'
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileServices;

const ServiceCard = ({ item }: { item: ServiceList }) => {
  return (
    <Link
      // href={`/services/${item?.clientSlug}`}
      href={`/${item?.clientSlug}`}
      className='flex w-full flex-row items-start gap-4 rounded-lg border-2 border-transparent bg-white p-4 transition-all duration-300 hover:border-[#B8B8FF]  '
    >
      <Image
        src={item?.bgImage}
        alt={item?.title}
        width={50}
        height={50}
        className='h-[42px] w-[55px] rounded-2xl object-cover'
      />
      <div className='flex flex-col gap-1'>
        <CommonHeader title={item?.title} className='text-left font-bold' />
        <div className='flex h-auto flex-wrap gap-1'>
          {item?.keyword?.map((desc, index) => (
            <>
              <p key={index} className='text-left text-sm capitalize text-grey'>
                {index + 1 < item?.keyword?.length ? `${desc},` : desc}
              </p>
            </>
          ))}
        </div>
      </div>
    </Link>
  );
};
