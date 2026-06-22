import { delays } from '@/utils/animation-config';
import { fetchPaginationData } from '@/utils/getData';
import { type OfferedCourseResponsePagination } from '@/types/classroom/offeredCourseDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import Pagination from '@/components/common/Pagination';

import Course from './Course';
import CourseTab from './CourseTab';

const OfferCourses = async ({ course, page }: { course: string; page: number }) => {
  const selectedcourse = course === 'completed' ? 'completed' : 'current';

  const data = await fetchPaginationData<OfferedCourseResponsePagination>(
    `/classroom/offered-course?filter=${selectedcourse}&limit=9&page=${page}`
  );

  return (
    <div id={selectedcourse} className=' mt-24 bg-lightShad2'>
      <div className='main-common-padding flex  flex-col items-center justify-center gap-10 xsm:gap-[3.25rem] '>
        <div className='flex w-full max-w-[1000px] flex-col items-center gap-8'>
          <CommonTitle title={data?.data?.mainTitle} className='text-center' delay={delays.medium} />
          <CommonParargraph text={data?.data?.description} className='text-center xmd:text-base ' delay={delays.long} />
        </div>
        <CourseTab selectedCourse={selectedcourse} />
        <div className='courses-list flex w-full flex-row flex-wrap justify-center gap-8 lg:max-w-[1532px]'>
          {data?.data?.courses?.map((item, index) => <Course key={item?.id} item={item} index={index} />)}
        </div>
        {data?.pagination?.total?.page > 1 && (
          <Pagination totalPages={data?.pagination?.total?.page} pageName={'/education'} />
        )}
      </div>
    </div>
  );
};

export default OfferCourses;
