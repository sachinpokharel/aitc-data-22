import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import { type Instructo, type InstructorsDTO } from '@/types/classroom/instructor';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

const Instructors = async () => {
  const data = await fetchData<InstructorsDTO>('/classroom/instructors');
  return (
    <CommonAnimation className='instructors-main bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1400px] flex-col gap-10 lg:gap-[3.25rem] '>
        <CommonTitle title={data?.mainTitle} className='text-center' />
        <div className='flex w-full flex-row flex-wrap justify-center gap-10 xmd:gap-4 md:gap-10 lg:gap-7  xl:gap-10'>
          {data?.instructors.map((item, index) => <Instructor key={item?.id} item={item} index={index} />)}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Instructors;

const Instructor = ({ item, index }: { item: Instructo; index: number }) => {
  return (
    <Slide
      key={item?.id}
      className='hover-scale-shadow-animation flex w-full flex-col gap-4 rounded-2xl  bg-white xmd:w-[288px] lg:w-[428px] xl:max-w-[329px]'
      cascade={true}
      direction='up'
      triggerOnce
      duration={800}
    >
      <div className=''>
        <div>
          <div className='profile relative h-[357px] w-full xmd:w-[288px] lg:w-[428px] xl:w-[329px]'>
            <Image
              src={item?.image || 'deletable/fallback.jpeg'}
              alt={item?.name}
              fill
              className='rounded-t-2xl object-cover '
              draggable={false}
              sizes='33vw'
            />
          </div>
          <div className='flex flex-col gap-4 p-6'>
            <h4 className='text-lg font-medium capitalize text-mainBlack'>{item?.name}</h4>
            <p className='font-medium capitalize text-grey'>{item?.designation}</p>
          </div>
        </div>
      </div>
    </Slide>
  );
};
