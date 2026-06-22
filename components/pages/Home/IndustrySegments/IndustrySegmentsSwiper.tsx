'use client';

import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import IndustrySegmentCard from './IndustrySegmentCard';
import { type Industry } from './IndustrySegments';

const IndustrySegmentsSwiper = ({ data }: { data: Industry[] }) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType>();
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className='flex w-full flex-col items-center justify-center gap-8  2xxl:w-[90%] 3xl:w-4/5'>
      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Grid]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        className='industry-swiper w-full'
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id} className='swiper-slide'>
            <IndustrySegmentCard icon={item?.imageUrl} title={item?.name} description={item?.description} />
          </SwiperSlide>
        ))}
      </Swiper>
      {data?.length > 0 ? (
        <div className='flex flex-row items-center gap-4'>
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className={`rounded-md bg-lightShade1 p-3 font-light ${isBeginning ? 'opacity-50' : ''}`}
            disabled={isBeginning}
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className={`rounded-md bg-lightShade1 p-3 ${isEnd ? 'opacity-50' : ''}`}
            disabled={isEnd}
          >
            <MdChevronRight size={24} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default IndustrySegmentsSwiper;
