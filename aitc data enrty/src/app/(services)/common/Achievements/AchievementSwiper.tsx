'use client';

import { delays } from '@/utils/animation-config';
import { Slide } from 'react-awesome-reveal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import React from 'react';
import Image from 'next/image';
import { type AchievementsDTO } from '@/types/service/seo/SEODTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const AchievementSwiper = ({ data }: { data: AchievementsDTO }) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const handleSwiperInit = (swiper: SwiperType) => {
    setSwiperInstance(swiper);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <CommonAnimation
      style={{
        backgroundImage: `url("/svg/award.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='common-padding'
    >
      <div className='common-section max-w-[1350px]'>
        <CommonTitle title={data?.mainTitle} className='text-center' delay={delays.medium} />
        <CommonParargraph text={data?.description} className='max-w-[1350px] text-center' delay={delays.long} />
        <div className='flex w-full max-w-[1350px] flex-col items-center justify-center gap-6'>
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
            className={`testimonial-swiper flex flex-row justify-center gap-4 rounded-b-2xl ${
              data?.awardShowcases?.length < 3 ? '[&>.swiper-wrapper]:xmd:justify-center' : ''
            }`}
          >
            {data?.awardShowcases?.map((item) => (
              <SwiperSlide key={item?.id} className='justify-center'>
                <Slide key={item?.id} direction='right' triggerOnce duration={2000} damping={1}>
                  <Image src={item?.icon} alt={item?.name} width={400} height={400} className='object-contain' />
                </Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex flex-row items-center justify-center gap-6'>
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className={`flex size-12 items-center justify-center  rounded-md bg-lightShade1 p-3 ${isBeginning ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isBeginning}
          >
            <FaChevronLeft className='text-base' />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className={`flex size-12 items-center justify-center rounded-md bg-lightShade1 p-3 ${isEnd ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isEnd}
          >
            <FaChevronRight className='text-base' />
          </button>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default AchievementSwiper;
