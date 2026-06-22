import { cn } from '@/utils/cn';
import { GoDotFill } from 'react-icons/go';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { type Syllabus } from '@/types/classroom/CourseDetail';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

const CourseOverviewCard = ({ open, onClick, data }: { open: boolean; onClick: () => void; data: Syllabus }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(open ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [open]);
  return (
    <div className='flex w-full flex-col'>
      <button
        onClick={onClick}
        className={cn(
          'flex w-full flex-row justify-between p-6 ',
          open
            ? 'rounded-t-2xl bg-white'
            : 'rounded-2xl [background:linear-gradient(180deg,#FFF_65.67%,#F8F8FF_124.84%)]'
        )}
      >
        <div className='flex flex-row items-center gap-4'>
          <Image
            src='/icons/arrow.png'
            alt='check'
            width={20}
            height={20}
            className={cn('h-6 w-4 transition-all duration-700', open && 'rotate-90')}
          />
          <CommonHeader title={data?.chapterTitle} />
        </div>
        <CommonParargraph text={`${data?.hour.toString()} Hours`} />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden rounded-b-2xl transition-all duration-700 ease-in-out [background:linear-gradient(180deg,#FFF_65.67%,#F8F8FF_124.84%)]`}
        style={{ maxHeight: contentHeight }}
      >
        <div
          className='flex flex-col gap-4 px-8 pb-4 opacity-0 transition-opacity duration-700 ease-in-out'
          style={{ opacity: open ? 1 : 0 }}
        >
          {data?.topicTitle?.map((item) => (
            <div key={item} className='flex flex-row items-center gap-2'>
              <GoDotFill className='text-primary' />
              <CommonParargraph text={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewCard;
