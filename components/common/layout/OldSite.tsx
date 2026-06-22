'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import Link from 'next/link';

import CommonParargraph from '../CommonParargraph';

const OldSiteBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              damping: 20,
              stiffness: 100,
              duration: 0.4,
              delay: 4,
            },
          }}
          exit={{
            opacity: 0,
            y: 100,
            transition: {
              type: 'spring',
              damping: 20,
              stiffness: 100,
              duration: 0.4,
            },
          }}
          className='fixed inset-x-0 bottom-3 z-50 mx-auto w-4/5 rounded-lg bg-secondary px-4 py-2 shadow-2xl'
        >
          <div className='relative gap-3 md:flex md:items-center'>
            <div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8'>
              <CommonParargraph
                text='Explore our new look and features. If you would like to visit our old site, you can still access it here.'
                className='pr-10 text-white md:pr-0'
              />
              <Link
                target='_blank'
                href='https://old.aitc.ai'
                className='w-fit whitespace-nowrap rounded bg-primary px-3 py-2 text-lg leading-[1.6875rem] text-white backdrop-blur-[10px] transition-all duration-300 hover:shadow-[10px_9px_14px_0px_rgba(255,117,0,0.2)]'
              >
                <CommonParargraph text='Visit Old Site' className='text-white' />
              </Link>
            </div>
            <motion.button
              onClick={handleClose}
              className='absolute right-0 top-0 rounded-full p-1.5 max-md:bg-lightShad2 md:relative md:top-auto'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoMdClose className='text-xl text-white max-md:text-black' />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OldSiteBanner;
