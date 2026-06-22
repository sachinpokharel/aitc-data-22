'use client';

import { delays } from '@/utils/animation-config';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CommonTitle from '@/components/common/CommonTitle';

const ProductDevelopment = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const path = searchParams.get('devTab') ?? '1';

    if (path) {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <section
      id={searchParams.get('devTab') ?? ''}
      className='product-development-main  bg-secondary px-6 py-[3.75rem] xmd:px-16 xmd:py-20 xl:px-[6.25rem] '
    >
      <div className='mx-auto flex max-w-[1308px]   flex-col items-center justify-center gap-[3.25rem]'>
        <CommonTitle
          title={title}
          className='max-w-[887px] text-center text-white max-sm:text-3xl'
          delay={delays.medium}
        />
        {children}
      </div>
    </section>
  );
};

export default ProductDevelopment;
