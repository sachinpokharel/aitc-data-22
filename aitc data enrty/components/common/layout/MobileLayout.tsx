'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import useOutsideClick from '../../../hooks/useOutSideClick';
import type { ServiceCategory } from './Header';
import MobileServices from './services/MobileServices';

const MobileLayout = ({ data, showHiring }: { data: ServiceCategory[]; showHiring: boolean }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useOutsideClick(ref, () => setOpenMenu(false));
  useEffect(() => {
    if (!openMenu) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openMenu]);

  return (
    <button
      ref={ref}
      onClick={() => setOpenMenu(!openMenu)}
      className='flex items-center justify-center transition-all duration-300 midlg:hidden'
    >
      {/* {openMenu ? <MdClose size={32} fill='#5F6368' /> : <RxHamburgerMenu size={32} fill='#5F6368' />} */}
      <div className='flex items-center justify-center'>
        <Hamburger toggled={openMenu} toggle={setOpenMenu} size={32} />
      </div>
      <AnimatePresence>{openMenu && <MobileMenu data={data} showHiring={showHiring} />}</AnimatePresence>
    </button>
  );
};

export default MobileLayout;

const MobileMenu = ({ data, showHiring }: { data: ServiceCategory[]; showHiring: boolean }) => {
  return (
    <motion.button
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className='absolute left-0 top-full z-[9999999999] flex w-full flex-col items-center justify-start border bg-white'
    >
      <div className='size-full '>
        {/* the height of 190px is the height of header */}
        <ul className='flex h-[calc(100dvh-100px)] flex-col items-start gap-8 overflow-y-auto p-6 pb-12 transition-all duration-300 ease-in-out'>
          <li>
            <Link className='text-lg text-mainBlack' href='/aboutus'>
              About
            </Link>
          </li>
          <li>
            <Link className='text-lg text-mainBlack' href='/why-us'>
              Why Us
            </Link>
          </li>
          <div className='h-auto w-full text-lg text-mainBlack'>
            <MobileServices data={data} />
          </div>
          <li>
            <Link className='text-lg text-mainBlack' href='/ourwork'>
              Our Work
            </Link>
          </li>
          <li>
            <Link className='flex flex-row items-center gap-2 text-lg text-mainBlack' href='/career'>
              Career
              {showHiring && (
                <p className='flex w-fit rounded-[4px] bg-primary px-1 py-0.5 text-white lg:hidden'>
                  We&apos;re hiring!
                </p>
              )}
            </Link>
          </li>
          <li>
            <Link className='text-lg text-mainBlack' href='/insights'>
              Insights
            </Link>
          </li>
          <li>
            <Link
              className='text-lg text-mainBlack'
              href='https://aitceducation.com/'
              // href='/education'
              target='_blank'
              rel='noopener noreferrer'
            >
              Education
            </Link>
          </li>
          <Link href='/contact-us' className='rounded bg-primary px-4 py-2.5 text-lg font-medium text-white  '>
            Contact us
          </Link>
        </ul>
      </div>
    </motion.button>
  );
};
