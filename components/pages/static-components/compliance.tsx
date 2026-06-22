'use client';

import React from 'react';

import 'swiper/css';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

export interface ComplianceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ComplianceSliderProps {
  items: ComplianceItem[];
  badge?: string;
  heading?: string;
  description?: string;
}

export default function ComplianceSlider({ items, badge, heading, description }: ComplianceSliderProps) {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const hasHeader = badge || heading || description;

  const navButtons = (
    <div className='flex shrink-0 items-center gap-3'>
      <button
        onClick={() => swiperInstance?.slidePrev()}
        disabled={isBeginning}
        aria-label='Previous'
        className={`flex size-10 items-center justify-center rounded-full border border-lightShade1 bg-white text-secondary transition-colors hover:border-primary hover:text-primary ${
          isBeginning ? 'cursor-not-allowed opacity-40' : ''
        }`}
      >
        <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
        </svg>
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        disabled={isEnd}
        aria-label='Next'
        className={`flex size-10 items-center justify-center rounded-full border border-lightShade1 bg-white text-secondary transition-colors hover:border-primary hover:text-primary ${
          isEnd ? 'cursor-not-allowed opacity-40' : ''
        }`}
      >
        <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>
    </div>
  );

  return (
    <div>
      {hasHeader && (
        <div className='mb-10 flex items-start justify-between gap-6'>
          <div>
            {badge && <p className='text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>}
            {heading && <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>{heading}</h2>}
            {description && <p className='mt-4 max-w-2xl text-lg text-mainBlack'>{description}</p>}
          </div>
          <div className='mt-1 hidden sm:flex'>{navButtons}</div>
        </div>
      )}

      <div className='relative'>
        <Swiper
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.title} className='!h-auto'>
              <div className='flex h-full flex-col rounded-xl border border-lightShade1 bg-white p-6'>
                <div className='bg-secondary/8 mb-4 flex size-14 items-center justify-center rounded-xl [&_svg]:!size-7'>
                  {item.icon}
                </div>
                <h3 className='text-base font-bold text-secondary'>{item.title}</h3>
                <p className='mt-2 flex-1 text-base leading-relaxed text-grey'>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom nav for usage without a header */}
      {!hasHeader && (
        <div className='mt-6 flex items-center gap-3'>
          {navButtons}
          <span className='text-sm text-grey'>Scroll to see all {items.length} requirements</span>
        </div>
      )}

      {/* Mobile nav when header is present */}
      {hasHeader && <div className='mt-6 flex items-center gap-3 sm:hidden'>{navButtons}</div>}
    </div>
  );
}
