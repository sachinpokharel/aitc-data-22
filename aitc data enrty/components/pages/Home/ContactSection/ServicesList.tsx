/* eslint-disable @typescript-eslint/no-base-to-string */
import { cn } from '@/utils/cn';
import { type FieldErrors, type FieldValues } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { type ServicesListDTO } from '@/types/service';

import { servicesList } from './action';

const ServicesList = ({
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
  const [services, setServices] = useState<ServicesListDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    servicesList()
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
      <p className=' font-black text-mainBlack'>Which services you want to talk about</p>
      <div className='flex flex-row flex-wrap items-center gap-4'>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <p key={index + 1} className=' h-8 w-32 animate-pulse rounded bg-slate-400' />
          ))
        ) : services?.length < 0 ? (
          <p>No services found </p>
        ) : (
          services?.map((service) => (
            <button
              type='button'
              className={cn(
                'rounded-lg bg-lightShad2 px-4 py-3 text-mainBlack',
                serviceitem?.some((item) => item.id === service?.id) && 'border border-primary '
              )}
              onClick={(e) => {
                e.preventDefault();
                setService((prevServices) => {
                  // Check if the service already exists in the array
                  if (prevServices.some((s) => s?.id === service?.id)) {
                    // Remove it if it exists
                    return prevServices.filter((s) => s?.id !== service?.id);
                  } else {
                    // Add it if it doesn't exist
                    return [...prevServices, { id: service?.id }];
                  }
                });
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

export default ServicesList;
