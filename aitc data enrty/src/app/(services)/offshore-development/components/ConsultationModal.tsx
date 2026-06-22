'use client';

import { IoMdClose } from 'react-icons/io';
import { useEffect } from 'react';
import { CommonHeader } from '@/components/common/CommonTitle';

export const ConsultationModal = ({
  onClose,
  children,
  title = 'Book a Free Consultation',
}: {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='relative flex max-h-[90%] w-4/5 max-w-[700px] flex-col rounded-xl bg-white shadow-lg'>
        <div className='relative flex w-full flex-row items-center justify-between rounded-t-lg bg-secondary px-8 py-4'>
          <CommonHeader title={title} className='text-white' />
          <button onClick={onClose} className='text-xl text-white hover:text-primary'>
            <IoMdClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
