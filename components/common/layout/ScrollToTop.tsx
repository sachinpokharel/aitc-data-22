'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useEffect, useState } from 'react';

// Define WhatsApp numbers based on location
const getTimezoneWhatsAppNumber = (timezone: string): string => {
  if (timezone.includes('America')) {
    return '+18555510417'; // Example USA number
  } else if (timezone === 'Asia/Dubai') {
    return '+9779761806704'; // Example UAE number
  } else {
    return '+9779761806704'; // Default: Nepal
  }
};
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex flex-col gap-4'>
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
          >
            <FloatingWhatsAppComponent />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1], delay: 0.15 }}
              className='isVisible'
            >
              <FloatingWhatsAppComponent />
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
              }}
              aria-label='Scroll to Top'
              className='group z-[999] cursor-pointer rounded-full border border-transparent bg-white p-[14px] shadow-lg hover:border-primary'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1], delay: 0.15 }}
            >
              <span className='hidden transition-all duration-300 group-hover:-translate-y-2 md:block'>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
                  <path
                    d='M15.8691 3L16.1291 29'
                    stroke='#FF7500'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.8701 3L20.9101 6.95'
                    stroke='#FF7500'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.8702 3L10.9102 7.05'
                    stroke='#FF7500'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <span className='block transition-all duration-300 hover:-translate-y-2 md:hidden'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M11.9023 2.25L12.0973 21.75'
                    stroke='#FF7500'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.9023 2.25L15.6823 5.2125'
                    stroke='#FF7500'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.9026 2.25L8.18262 5.2875'
                    stroke='#FF7500'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;

export const FloatingWhatsAppComponent = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const phoneNumber = getTimezoneWhatsAppNumber(timezone);
  console.log(phoneNumber);
  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
      chatMessage='Welcome to AITC International. How can we help you?'
      accountName='AITC International'
      avatar='/icons/logo.png'
      allowEsc
      placeholder='Type a message...'
      className='.styles-module_whatsappButton__tVits whatsapp-button'
    />
  );
};
