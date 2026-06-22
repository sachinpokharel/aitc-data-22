import { type CourseDTO } from '@/types/classroom/offeredCourseDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

import Course from '../../components/Course';

const RelatedCourses = ({ related }: { related: CourseDTO[] }) => {
  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='common-padding common-section max-w-[1350px]'>
        <CommonTitle title='Other related courses we offer' />
        <div className='flex w-full flex-row flex-wrap justify-center gap-8'>
          {related?.map((item, index) => <Course key={item?.id} item={item} index={index} />)}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default RelatedCourses;
