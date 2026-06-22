'use client';

import { cn } from '@/utils/cn';
import { FaChevronRight } from 'react-icons/fa';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { type Service } from '@/types/Home/servicesList';

import useOutsideClick from '../../../../hooks/useOutSideClick';
import CommonParargraph from '../../CommonParargraph';
import { CommonHeader } from '../../CommonTitle';

export const Services = ({ services }: { services: Service[] }) => {
  return (
    <div className='flex flex-col gap-[1.125rem]'>
      <CommonHeader title='SERVICE' />
      <div className='serviceslist flex flex-col gap-4'>
        {services?.map((service) => <FooterServcies key={service?.slug} service={service} />)}
      </div>
    </div>
  );
};

const FooterServcies = ({ service }: { service: Service }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useOutsideClick(ref, () => setShowMenu(false));
  return (
    <button
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      onMouseLeave={() => setShowMenu(false)}
      ref={ref}
      className='relative flex w-fit cursor-pointer flex-row items-center gap-4 pr-6'
    >
      {service?.subServices?.length > 0 ? (
        <>
          <CommonParargraph text={service?.title} className='whitespace-nowrap' />
          <span>
            <FaChevronRight size={12} fill='#3C3C46' />
          </span>
        </>
      ) : (
        <Link
          // href={`/services/${service?.clientSlug}
          href={`/${service?.clientSlug}
          `}
          className='border-b border-transparent  font-medium text-mainBlack hover:border-primary hover:text-primary xmd:text-lg '
        >
          {service?.title}
        </Link>
      )}

      {showMenu && service?.subServices?.length > 0 && <PopOver service={service} slug={service?.clientSlug} />}
    </button>
  );
};

export default FooterServcies;

const PopOver = ({ service, slug }: { service: Service; slug: string }) => {
  return (
    <div
      className={
        'absolute bottom-[200%] left-0  flex h-auto flex-col rounded-lg bg-secondary px-6 py-4 sm:bottom-[-20%] sm:left-full sm:min-h-[110px]  '
      }
    >
      <div className='popover relative flex size-full flex-col gap-4'>
        <span
          className={cn(
            'absolute max-sm:left-1/3 max-sm:top-full max-sm:-translate-x-1/3 max-sm:-rotate-90 sm:right-full ',
            service?.clientSlug === 'managed-it-support-services' ? 'sm:top-[90%] ' : 'sm:top-[80%]'
          )}
        >
          <svg width='41' height='30' viewBox='0 0 41 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M35.2314 1.04929L2.1034 13.585C0.361225 14.2442 0.387012 16.7177 2.14255 17.3405L35.3097 29.1066C37.9133 30.0302 40.6471 28.0993 40.6471 25.3368L40.6471 4.7904C40.6471 1.99252 37.8482 0.0590822 35.2314 1.04929Z'
              fill='#3D2D7B'
            />
          </svg>
        </span>
        <Link
          // href={`/services/${slug}`}
          href={`/${slug}`}
        >
          <CommonHeader
            title={`${service?.title} Service`}
            className='w-full whitespace-nowrap text-start font-bold text-white hover:text-primary'
          />
        </Link>
        <div className='flex flex-col gap-2.5'>
          {service?.subServices?.map((sub) => (
            <Link
              className='flex w-full flex-row items-center gap-2 whitespace-nowrap text-start font-medium text-white hover:text-primary'
              // href={`/services/${slug}/${sub?.slug}`}
              href={`/${slug}/${sub?.slug}`}
              key={sub?.slug}
            >
              <svg width='16' height='16' viewBox='0 0 13 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M0 8.70868C0 8.93081 0.0880234 9.14384 0.244706 9.3009L7.70291 16.7774C8.02919 17.1045 8.55818 17.1045 8.88446 16.7774L12.5602 13.0927C12.8864 12.7656 12.8864 12.2353 12.5602 11.9082L1.42625 0.746985C0.899927 0.219372 0 0.59305 0 1.33921V8.70868Z'
                  fill='#484BA0'
                />
                <path
                  d='M0 23.6608C0 24.407 0.899945 24.7806 1.42626 24.253L12.5586 13.0929C12.8849 12.7658 12.8849 12.2355 12.5586 11.9084L8.88339 8.2242C8.55713 7.89713 8.02814 7.89712 7.70187 8.22418L0.244725 15.6992C0.088031 15.8562 0 16.0693 0 16.2914V23.6608Z'
                  fill='#FF7500'
                />
              </svg>
              {sub?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
