'use client';

import { useState } from 'react';
import { type CourseDetail } from '@/types/classroom/CourseDetail';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

import CourseOverviewCard from './CourseOverviewCard';
import EnquiryForm from './EnquiryForm';

const CourseOverview = ({
  courseDetail,
  minDuration,
  maxDuration,
  durationUnit,
  slug,
}: {
  courseDetail: CourseDetail;
  minDuration: number;
  maxDuration: number;
  durationUnit: string;
  slug: string;
}) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='common-padding common-section max-w-[1350px]'>
        <CommonTitle title={courseDetail?.mainTitle} />
        <CommonParargraph text={courseDetail?.description} className='text-center' />
        <div className='flex w-full flex-col items-center justify-center gap-6'>
          <div className='flex flex-row items-center gap-4'>
            <CommonHeader title='Syllabus' className='rounded-lg bg-primary p-1 text-white' />
            <CommonParargraph
              text={`(${courseDetail?.syllabusManagement?.totalHours} hours) ${minDuration} - ${maxDuration} ${durationUnit}`}
              className='capitalize'
            />
          </div>
          {courseDetail?.syllabusManagement?.syllabus?.map((item, index) => (
            <CourseOverviewCard
              key={item?.chapterTitle}
              open={activeCard === index}
              data={item}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            />
          ))}
        </div>
        <button
          onClick={openModal}
          className=' w-fit whitespace-nowrap rounded bg-primary px-4 py-[0.78125rem] text-lg leading-[1.6875rem] text-white backdrop-blur-[7px] hover:shadow-[5px_4px_9px_0px_rgba(255,117,0,0.2)]'
        >
          Get Enrolled
        </button>
      </div>
      {isModalOpen && <EnquiryForm closeModal={closeModal} slug={slug} />}
    </CommonAnimation>
  );
};

export default CourseOverview;
