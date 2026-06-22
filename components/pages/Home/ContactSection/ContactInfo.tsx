'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

import ContactForm from './ContactForm';

const ContactInfo = () => {
  const path = usePathname();

  return (
    <div
      className={`flex w-full max-w-[1300px] flex-col justify-center gap-9 lg:flex-row xl:gap-16 ${
        path === '/contact-us' ? 'order-first' : ''
      }`}
    >
      <div className='flex w-full shrink-0 flex-col gap-12 lg:w-2/5 xl:w-[527px]'>
        <div className='flex h-fit flex-col gap-8 rounded-2xl bg-secondary p-6 text-white'>
          <div className='flex flex-col gap-4'>
            <p className='text-xl font-black'>Contact</p>
            <p className='text-lg'>Our friendly team is here to help</p>
            <p className='text-lg text-primary'>+97715900970</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-xl font-black'>What will you get?</p>
            <div className='grod-cols-1 grid gap-6 md:grid-cols-2 lg:max-w-[80%]'>
              <p className='text-lg'>- Client Oriented</p>
              <p className='text-lg'>- Driven</p>
              <p className='text-lg'>- Secured</p>
              <p className='text-lg'>- Solving</p>
              <p className='text-lg'>- Competent</p>
              <p className='text-lg'>- Transparent</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-xl font-black'>What next?</p>
            <p className='text-lg'>- We will contact you at your convenience</p>
            <p className='text-lg'>- We do discovery and deep discussion on your problems</p>
            <p className='text-lg'>- We prepare a proposal</p>
          </div>
        </div>

        <div className='flex flex-col gap-8 rounded-2xl bg-primary p-6 '>
          <CommonHeader title='Looking for job opportunities?' className='text-white' />
          <Link href='/career' className='flex flex-row items-center gap-2'>
            <CommonParargraph text='Explore careers at AITC' className='text-white' />
            <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4.50017 13.2357C4.30126 13.2357 4.11049 13.1566 3.96984 13.016C3.82919 12.8753 3.75017 12.6846 3.75017 12.4857C3.75017 12.2868 3.82919 12.096 3.96984 11.9553C4.11049 11.8147 4.30126 11.7357 4.50017 11.7357L13.7502 11.7357L13.7502 6.48567C13.7503 6.33743 13.7944 6.19255 13.8768 6.06934C13.9592 5.94612 14.0763 5.85009 14.2132 5.79338C14.3502 5.73667 14.5009 5.72182 14.6463 5.7507C14.7917 5.77959 14.9253 5.85091 15.0302 5.95567L21.0302 11.9557C21.1706 12.0963 21.2495 12.2869 21.2495 12.4857C21.2495 12.6844 21.1706 12.875 21.0302 13.0157L15.0302 19.0157C14.9253 19.1204 14.7917 19.1917 14.6463 19.2206C14.5009 19.2495 14.3502 19.2347 14.2132 19.178C14.0763 19.1212 13.9592 19.0252 13.8768 18.902C13.7944 18.7788 13.7503 18.6339 13.7502 18.4857L13.7502 13.2357L4.50017 13.2357Z'
                fill='white'
              />
            </svg>
          </Link>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default ContactInfo;
