'use client';

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

import { type Testimonial } from './TestimonialSection';

const TestimonialSwiper = ({ data }: { data: Testimonial[] }) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType>();
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const hasNavigation = data?.length > 1;

  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 lg:w-2/3 xl:w-1/2'>
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={1}
        className='testimonial-swiper flex flex-row rounded-b-2xl'
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
      >
        {data?.map((data, index) => (
          <SwiperSlide key={index} className='swiper-slide '>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-center'>
                <div className='z-10 -mb-8 flex w-fit flex-row items-center gap-4 rounded-lg bg-primary p-4'>
                  <Image
                    src={data?.imageUrl}
                    alt='testimonials'
                    width={400}
                    height={400}
                    className='size-16 rounded-lg object-cover'
                  />
                  <div className='flex flex-col items-start text-lg'>
                    <p className='text-white'>{data?.name}</p>
                    <p className='text-white'>
                      {data?.designation}, {data?.company}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mx-auto flex min-h-[305px] max-w-[800px] flex-col gap-6 rounded-2xl border bg-white px-8 pb-8 pt-14 shadow-sm max-sm:shadow-lg'>
                <div className='flex flex-row items-end justify-center gap-6'>
                  <Image
                    src='/icons/quote.png'
                    alt='quote'
                    width={100}
                    height={100}
                    className='size-16 object-contain'
                  />
                  <p className='rounded-2xl bg-secondary p-1.5 text-center text-white'>{data?.highlight}</p>
                </div>
                <p className='text-center text-mainBlack'>{data?.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex flex-row items-center gap-4'>
        {hasNavigation && (
          <>
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className={`flex size-12 items-center justify-center rounded-md bg-lightShade1 p-3 font-light ${isBeginning ? 'opacity-50' : ''}`}
              disabled={isBeginning}
            >
              <MdChevronLeft className='text-2xl' />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className={`flex size-12 items-center justify-center rounded-md bg-lightShade1 p-3 ${isEnd ? 'opacity-50' : ''}`}
              disabled={isEnd}
            >
              <MdChevronRight className='text-2xl' />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialSwiper;
