'use client';

import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';
import { type Statistics } from '@/types/Home/collaborative-partners';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';

export default function CompanyStatistics({ data }: { data: Statistics }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <CommonAnimation>
      <section
        ref={ref}
        className='statistics-section relative z-10 flex size-full h-auto place-content-center items-center bg-secondary'
      >
        <span className='absolute inset-0 z-20 hidden size-full bg-red-400 md:flex'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 1920 564'
            fill='none'
            preserveAspectRatio='none'
            className='size-full'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='1920' height='564' fill='#3D2D72' />
            <path
              d='M1570.86 544.711H1920L1920 0.710938H1654.22L1457.26 161.303C1450.26 167.012 1445.39 174.923 1443.46 183.748L1401.45 375.601C1394.52 407.257 1407.37 439.968 1434 458.441L1548.06 537.575C1554.75 542.221 1562.71 544.711 1570.86 544.711Z'
              fill='#413079'
            />
          </svg>
        </span>
        <span className='absolute inset-0 z-20 flex size-full md:hidden'>
          <svg
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            height='382'
            viewBox='0 0 320 382'
            fill='none'
            className='w-full'
          >
            <path
              d='M320 270.221L320 0L3.05176e-05 -4.79397e-06L2.18371e-05 198.586L91.4091 340.984C96.7177 349.254 104.885 355.28 114.352 357.913L190.1 378.98C225.936 388.947 263.914 372.899 281.745 340.256L320 270.221Z'
              fill='#413079'
            />
          </svg>
        </span>
        <div className='statistics-container main-common-padding z-40 grid w-full grid-cols-1 gap-16 xl:grid-cols-[0.4fr_0.6fr] 2xxl:grid-cols-[0.35fr_0.65fr]'>
          {/* Left Section */}
          <div className='statistics-left-wrapper flex flex-col items-center gap-10 px-6 md:px-16 lg:gap-[52px] lg:px-0 xl:items-start'>
            <h3 className='text-center text-[2rem] font-extrabold capitalize leading-[40.32px] tracking-[2%] text-white lg:text-5xl lg:leading-[60.32px] xl:text-left'>
              {data?.title}
            </h3>
            <p className='text-center text-lg text-white xl:text-left'>{data?.description}</p>
            <CommonButton text='Get a free quote' href='/contact-us' className='text-base max-xmd:text-sm' />
          </div>

          {/* Right Section */}
          <div className='number-wrapper grid grid-cols-1 place-items-center gap-10 md:grid-cols-4 '>
            {data?.achievementItems?.map((item) => (
              <div key={item?.id} className='flex min-w-[200px] flex-col items-center'>
                <h3 className='number-shadow min-w-[120px] bg-gradient-to-b from-[#4F3B8F] to-[#3D2D72] bg-clip-text text-center text-[64px] font-bold leading-[62px] text-transparent lg:text-[70px] xl:text-8xl 2xl:text-9xl'>
                  <CountUp duration={3} start={isInView ? 0 : undefined} end={Number(item?.value)} />
                </h3>
                <div className='number-title -mt-6 flex flex-col items-center gap-6 2xl:-mt-10'>
                  <h3 className='text-[40px] font-extrabold text-white lg:text-[44px] xl:text-[48px] 2xl:text-[64px]'>
                    <CountUp duration={4} start={isInView ? 0 : undefined} end={Number(item?.value)} />
                    {item?.modifier}
                  </h3>
                  <p className='text-lg capitalize text-primary'>{item?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CommonAnimation>
  );
}
