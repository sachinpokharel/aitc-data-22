'use client';

import { cn } from '@/utils/cn';
import { FaAngleDown } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

const SubServicePoint = ({
  className,
  title,
  slug,
  index,
  description,
}: {
  title: string;
  className: string;
  slug: string;
  index: number;
  description: string;
}) => {
  const pathname = usePathname();
  return (
    <div className='group'>
      <div className='transition-all duration-700 group-hover:rounded-2xl group-hover:bg-white group-hover:p-4'>
        <div
          className={cn(
            index % 2 === 0 ? 'bg-primary' : 'bg-secondary',
            'group-hover flex items-center justify-between rounded-lg p-4'
          )}
        >
          <CommonHeader title={title} className={`  text-white ${className}`} />
          <FaAngleDown size={24} className=' text-white transition-all duration-300 group-hover:rotate-180' />
        </div>
        <div className='hidden flex-col gap-4 py-4 transition-all duration-700 group-hover:flex group-hover:bg-white'>
          <CommonParargraph text={description} />
          <Link
            href={`${pathname}/${slug ? slug : '?form=book_a_consultation'}`}
            className='flex flex-row items-center gap-2 '
          >
            <CommonParargraph
              text={`${slug ? 'Learn more' : 'Book a consultation'}`}
              className='font-black text-primary'
            />
            <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4.49968 13.14C4.30077 13.14 4.11 13.0609 3.96935 12.9203C3.8287 12.7796 3.74968 12.5889 3.74968 12.39C3.74968 12.1911 3.8287 12.0003 3.96935 11.8596C4.11 11.719 4.30077 11.64 4.49968 11.64L13.7497 11.64L13.7497 6.38997C13.7498 6.24173 13.7939 6.09685 13.8763 5.97363C13.9587 5.85042 14.0758 5.75439 14.2128 5.69768C14.3497 5.64097 14.5004 5.62612 14.6458 5.655C14.7912 5.68388 14.9248 5.75521 15.0297 5.85997L21.0297 11.86C21.1701 12.0006 21.249 12.1912 21.249 12.39C21.249 12.5887 21.1701 12.7793 21.0297 12.92L15.0297 18.92C14.9248 19.0247 14.7912 19.096 14.6458 19.1249C14.5004 19.1538 14.3497 19.139 14.2128 19.0823C14.0758 19.0255 13.9587 18.9295 13.8763 18.8063C13.7939 18.6831 13.7498 18.5382 13.7497 18.39L13.7497 13.14L4.49968 13.14Z'
                fill='#FF7500'
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubServicePoint;
