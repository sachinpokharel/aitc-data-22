'use client';

import { IoClose } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import { type Popup } from '@/types/Home/collaborative-partners';

import { CommonAnimation } from '../animation/CommonAnimation';

const PopupBanner = ({ popupbanner }: { popupbanner: Popup }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      setIsVisible(false);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    isVisible && (
      <CommonAnimation
        delay={0}
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className='fixed inset-0 z-50 flex place-content-center items-center bg-black bg-opacity-50'
      >
        <div ref={popupRef} className='relative h-auto max-h-[80dvh] max-w-[60%] rounded-lg'>
          <button
            onClick={handleClose}
            className='absolute right-2 top-2 rounded-full bg-primary p-2 text-white hover:text-secondary'
          >
            <IoClose className='size-6 transition-all duration-300 hover:scale-125' />
          </button>
          <a href={popupbanner?.link} target='_blank' rel='noopener noreferrer'>
            <picture>
              {/* <source srcSet={popupbanner?.mobile} media='(max-width: 768px)' /> */}
              <img
                src={popupbanner?.mobile}
                alt='Popup Banner'
                className='max-h-[80dvh] w-full rounded-md object-contain xmd:hidden'
                sizes='80vw'
              />
              <img
                src={popupbanner?.tablet}
                alt='Popup Banner'
                className='hidden max-h-[80dvh] w-full rounded-md object-contain xmd:block lg:hidden'
                sizes='80vw'
              />
              <img
                src={popupbanner?.web}
                alt='Popup Banner'
                className='hidden max-h-[80dvh] w-full rounded-md object-contain lg:block'
                sizes='80vw'
              />
            </picture>
          </a>
        </div>
      </CommonAnimation>
    )
  );
};

export default PopupBanner;
