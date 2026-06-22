'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Service } from '@/types/Home/servicesList';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

const ServicesList = ({ services }: { services: Service[] }) => {
  const [index, setIndex] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slug, setSlug] = useState<string>('');

  const handleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    setIndex(index);
  };

  const getSubcategoriesById = (id: string) => {
    const service = services?.find((service) => service?.clientSlug === id);
    return service ?? null;
  };

  return (
    <ul
      className={cn(
        'grid h-auto w-full  grid-cols-1 place-items-center gap-x-6   xmd:grid-cols-2 lg:grid-cols-3 xl:w-fit xl:grid-cols-[repeat(3,262px)]  '
      )}
    >
      {services?.map((service, index) => (
        <li
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleIndex(index + 1);
            setSlug(service?.clientSlug);
          }}
          key={service?.slug}
          className='services z-40 my-4 flex h-auto w-full cursor-pointer flex-col items-center justify-center gap-6 rounded-2xl border border-transparent bg-lightShad2  px-4 py-6 hover:border-border'
        >
          <div className='relative mx-auto h-[95px] w-[123px] cursor-pointer overflow-hidden rounded-2xl bg-lightShad2'>
            <Image src={service?.image} alt={service?.title} fill className=' object-cover' />
          </div>
          <p className='` cursor-pointer text-center text-lg  font-medium text-mainBlack'>{service?.title}</p>
        </li>
      ))}

      <SubCategoryRowStart
        index={index}
        openIndex={openIndex}
        subcategories={getSubcategoriesById(slug)}
        slug={slug}
        key={`subcategory-${index}-${slug}`}
      />
    </ul>
  );
};

export default ServicesList;

const SubCategoryRowStart = ({
  index,

  subcategories,
  slug,
  openIndex,
}: {
  openIndex: number | null;
  index: number;
  slug: string;

  subcategories: Service | null;
}) => {
  const contentRef = useRef<HTMLLIElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(openIndex ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [openIndex]);

  return (
    <li
      ref={contentRef}
      style={{ maxHeight: contentHeight }}
      className={cn(
        'subcategory-row col-span-full  w-full transition-all  duration-700 ease-in-out ',
        openIndex ? 'my-4 opacity-100' : 'opacity-0'
      )}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.9 }}
          className='   relative gap-6 rounded-lg border border-border p-4 '
        >
          <div className='flex flex-col gap-6'>
            <CommonParargraph text={subcategories?.description as string} />
            <div className='flex flex-row flex-wrap gap-4'>
              {subcategories?.subServices?.map((category) => (
                <Link
                  // href={`/services/${slug}/${category?.slug}`}
                  href={`/${slug}/${category?.slug}`}
                  key={category?.slug}
                  className='rounded-[6px] bg-lightShad2 p-4 font-medium text-mainBlack'
                >
                  {category?.title}
                </Link>
              ))}
            </div>
            <CommonButton
              text='Learn more'
              variant='secondary'
              //  href={`/services/${slug}`}
              href={`/${slug}`}
            />
          </div>
          <span className='arrow-indicator absolute bottom-[99.3%]'>
            <svg width='23' height='20' viewBox='0 0 23 20' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 18.5217L10.2863 1.5746C10.7042 0.811841 12.0304 0.806796 12.4484 1.56954C14.8059 5.87111 20.3357 15.9612 22 19'
                stroke='#C2C2F0'
              />
            </svg>
          </span>
        </motion.div>
      </AnimatePresence>
      <style jsx>{`
        .subcategory-row {
          grid-row-start: ${index + 1};
        }
        .arrow-indicator {
          right: 50%;
        }
        @media (min-width: 744px) {
          .subcategory-row {
            grid-row-start: ${Math.floor((index + 3) / 2)};
          }
          .arrow-indicator {
            right: ${index % 2 === 0 ? '21%' : '74%'};
          }
        }
        @media (min-width: 1024px) {
          .subcategory-row {
            grid-row-start: ${Math.floor((index + 5) / 3)};
          }
          .arrow-indicator {
            right: ${index % 3 === 0 ? '15%' : index % 3 === 1 ? '80%' : '50%'};
          }
        }
      `}</style>
    </li>
  );
};
