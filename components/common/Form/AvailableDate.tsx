'use client';

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { useSearchParams } from 'next/navigation';
import { type ContactusDTO } from '@/types/contactus/ContactusDTO';

import 'react-calendar/dist/Calendar.css';

import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';

import { type FieldErrors, type UseFormRegister } from 'react-hook-form';
import { getAvailableTimeSlot } from '@/components/pages/Home/ContactSection/action';

export interface IProps {
  register: UseFormRegister<{
    slotId: number;
  }>;
  errors: FieldErrors<{
    slotId: number;
  }>;
  startDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
}

const AvailableDate = ({ register, errors, startDate, setStartDate }: IProps) => {
  console.log(startDate);
  const [availableDate, setAvailableDate] = useState<ContactusDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const onChange = (date: Date | null) => {
    setLoading(true);
    if (date !== null) {
      const localDate = new Date(date);
      localDate.setHours(12, 0, 0, 0);

      const year = localDate.getFullYear();
      const month = String(localDate.getMonth() + 1).padStart(2, '0');
      const day = String(localDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      getAvailableTimeSlot(formattedDate)
        .then((data) => {
          setAvailableDate(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching available dates:', error);
          setLoading(false);
        });

      setStartDate(formattedDate);
    }
  };
  const today = new Date();

  const params = useSearchParams().get('form');

  useEffect(() => {
    const date = new Date();
    if (params === 'book_a_consultation') {
      date.setHours(12, 0, 0, 0);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      getAvailableTimeSlot(formattedDate)
        .then((data) => {
          setAvailableDate(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching available dates:', error);
          setLoading(false);
        });
    }
  }, [params]);

  return (
    <div className='flex flex-col gap-10'>
      <section className='flex flex-col gap-2'>
        <p className='text-lg font-black text-mainBlack '>Please select a date</p>
        <DatePicker
          onChange={(date) => onChange(date as Date)}
          value={startDate ? new Date(startDate) : null}
          minDate={today}
          className='rounded px-4 py-3 text-mainBlack'
        />
      </section>

      <div className='time'>
        <div className='timeslot flex flex-col gap-2'>
          <p className='text-lg font-black text-mainBlack '>Available time slots</p>

          <div className='grid grid-cols-2 gap-6 '>
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <p className=' h-8 w-full animate-pulse rounded bg-slate-400' key={index + 1} />
              ))
            ) : availableDate?.length < 1 ? (
              <p className='col-span-2 font-medium  text-error'>Sorry! there are no available slots for today.</p>
            ) : (
              <>
                {availableDate?.map((slot) => {
                  return (
                    <div className='flex cursor-pointer gap-3' key={slot?.id}>
                      <input
                        type='radio'
                        id={slot?.id}
                        value={slot?.id.toString()}
                        className='size-6 cursor-pointer'
                        {...register('slotId')}
                      />
                      <label htmlFor={slot?.id} className='font-medium text-mainBlack '>
                        {slot?.startTime} - {slot?.endTime}
                      </label>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          {errors[`slotId`] && (
            <span className='text-sm font-normal text-error'>{errors[`slotId`].message as string}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableDate;
