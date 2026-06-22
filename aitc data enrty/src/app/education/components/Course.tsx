import moment from 'moment';
import { GoArrowRight } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';
import { type CourseDTO } from '@/types/classroom/offeredCourseDTO';
import TranslateYAnimation from '@/components/common/animation/TranslateYAnimation';
import { CommonHeader } from '@/components/common/CommonTitle';
import Progress from '@/components/common/icon/Progress';
import Rupee from '@/components/common/icon/Rupee';
import Tick from '@/components/common/icon/Tick';
import Timer from '@/components/common/icon/Timer';

const Course = ({ item, index }: { item: CourseDTO; index: number }) => {
  return (
    <TranslateYAnimation key={item?.id} delay={index * 0.2 + 0.2}>
      <div className='course flex w-full flex-col justify-between gap-8 rounded-2xl bg-white lg:max-w-[422px]'>
        <div className='relative h-[204px] w-full xmd:h-[289px] lg:h-[204px] lg:max-w-[422px] '>
          <Image
            src={item?.image ?? 'deletable/fallback.jpeg'}
            alt={item?.title}
            fill
            className='size-full rounded-t-2xl object-cover'
          />
        </div>
        <div className='flex flex-col gap-6 px-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <CommonHeader title={item.title} />
              <div className='flex flex-row items-center gap-4'>
                {item?.price !== 1 && (
                  <p className='flex flex-row items-center gap-2'>
                    <Rupee />
                    <span className='text-primary'>{Number(item?.price)?.toLocaleString('en-IN')}</span>
                  </p>
                )}
                <p className='flex flex-row items-center gap-2'>
                  <Timer />
                  <span>
                    {item?.minDuration} - {item?.maxDuration} {item?.durationUnit}
                  </span>
                </p>
              </div>
            </div>
            <p className='text-darkShade1'>{item?.description}</p>
          </div>

          <div className='sessions flex flex-col gap-2'>
            {item?.completedSessionCount ? (
              <p className='flex flex-row items-center gap-2 text-darkShade1'>
                {' '}
                <span>
                  <Tick />
                </span>{' '}
                {item?.completedSessionCount} sessions completed
              </p>
            ) : null}

            {item?.runningSessionCount ? (
              <p className='flex flex-row items-center gap-2 text-primary'>
                <Progress />
                {item?.runningSessionCount} Session running{' '}
              </p>
            ) : null}

            {item?.nextSessionStartDate ? (
              <p className='w-fit rounded bg-lightShade1 text-secondary'>
                Next session starts from {moment(item?.nextSessionStartDate).format('DD MMM YYYY')}
              </p>
            ) : null}
          </div>
        </div>

        <Link
          href={`/education/${item?.slug}`}
          className='group flex flex-row items-center gap-2 px-6 pb-6 text-lg font-black text-primary'
        >
          <p>Explore course</p>
          <GoArrowRight size={24} className='transition-all duration-300 group-hover:translate-x-2' />
        </Link>
      </div>
    </TranslateYAnimation>
  );
};

export default Course;
