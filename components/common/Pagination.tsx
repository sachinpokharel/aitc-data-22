'use client';

import { useRouter } from 'nextjs-toploader/app';
import React from 'react';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
  pageName: string;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, pageName }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => router.replace(`${i === 1 ? pageName : `${pageName}?page=${i}`}`)}
          className={`mx-1 rounded-[4px] px-4 py-2 ${i === currentPage ? 'bg-primary text-white' : 'bg-gray-200 text-mainBlack'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return <div className='mt-4 flex items-center justify-center space-x-2'>{renderPageNumbers()}</div>;
};

export default Pagination;

export const PaginationProject: React.FC<PaginationProps> = ({ totalPages, pageName }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() =>
            router.replace(`${i === 1 ? pageName : `${pageName}?ProjectPage=${i}`}`, {
              scroll: false,
            })
          }
          className={`mx-1 rounded-[4px] px-4 py-2 ${i === currentPage ? 'bg-primary text-white' : 'bg-gray-200 text-mainBlack'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return <div className='mt-4 flex items-center justify-center space-x-2'>{renderPageNumbers()}</div>;
};
