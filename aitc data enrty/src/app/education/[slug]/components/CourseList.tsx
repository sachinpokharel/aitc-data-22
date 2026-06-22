/* eslint-disable @typescript-eslint/no-base-to-string */
import { cn } from '@/utils/cn';
import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { courseList, type CourseListDTO } from '@/components/pages/Home/ContactSection/action';

const CourseList = ({
  setService,
  serviceitem,
  errors,
}: {
  serviceitem: {
    id: string;
  }[];
  setService: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
      }[]
    >
  >;
  errors: FieldErrors<FieldValues>;
}) => {
  const [services, setServices] = useState<CourseListDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    courseList()
      .then((res) => {
        setServices(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-col gap-2'>
      <p className=' font-black text-mainBlack'>Preferred Courses</p>
      <div className='flex flex-row flex-wrap items-center gap-4'>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <p key={index + 1} className=' h-8 w-32 animate-pulse rounded bg-slate-400' />
          ))
        ) : services?.length < 0 ? (
          <p>No courses found </p>
        ) : (
          services?.map((service) => (
            <button
              type='button'
              className={cn(
                'rounded-lg bg-lightShad2 px-4 py-3 text-mainBlack',
                serviceitem?.some((item) => item.id === service?.title) && 'border border-primary '
              )}
              onClick={() => {
                setService((prevServices) => {
                  // Check if the service already exists in the array
                  if (prevServices.some((s) => s?.id === service?.title)) {
                    // Remove it if it exists
                    return prevServices.filter((s) => s?.id !== service?.title);
                  } else {
                    // Add it if it doesn't exist
                    return [...prevServices, { id: service?.title }];
                  }
                });
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              }}
              key={service?.id?.toString()}
            >
              {service?.title}
            </button>
          ))
        )}
      </div>
      <span className='text-sm font-medium text-error'>{errors['serviceId']?.message?.toString()}</span>
    </div>
  );
};

export default CourseList;
