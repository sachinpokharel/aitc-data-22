'use client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const tab: { id: string; title: string }[] = [
  {
    id: 'completed',
    title: 'Completed Courses',
  },
  {
    id: 'current',
    title: 'Current and Upcoming Courses',
  },
];

const CourseTab = ({ selectedCourse }: { selectedCourse: string }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>(selectedCourse || 'current');

  return (
    <div className='course-tab flex max-w-[99%] flex-row items-center overflow-x-auto  sm:max-w-full sm:overflow-x-hidden'>
      {tab?.map((item) => (
        <Link href={`/education?course=${item?.id}`} scroll={false} key={item?.id} className='shadow-lg shadow-primary'>
          <motion.button
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={() => setSelectedMenu(item?.id)}
            className={cn('relative flex cursor-pointer flex-row items-center rounded-lg shadow-lg ')}
          >
            {item?.id === selectedMenu && (
              <motion.span
                style={{
                  borderRadius: '0px 8px 8px 0px',
                }}
                transition={{ type: 'spring', duration: 0.5 }}
                className='absolute inset-0 z-10 whitespace-nowrap bg-white px-4 py-2.5 text-lg text-primary  '
                layoutId='clickedBackground'
              >
                {item?.title}
              </motion.span>
            )}
            <span className=' whitespace-nowrap bg-lightShad2 px-4 py-2.5 text-lg text-mainBlack '>{item?.title}</span>
          </motion.button>
        </Link>
      ))}
    </div>
  );
};

export default CourseTab;
