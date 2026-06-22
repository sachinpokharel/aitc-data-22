/* eslint-disable @typescript-eslint/no-base-to-string */
import { cn } from '@/utils/cn';
import { type FieldErrors, type FieldValues, type UseFormRegister } from 'react-hook-form';

interface CommonInputProps {
  type: string;
  placeholder?: string;
  id: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  className?: string;
}

const CommonInput = ({ id, name, type, placeholder, register, errors }: CommonInputProps) => {
  return (
    <div className='form-group flex w-full flex-col gap-2'>
      <label className='text-lg font-black text-mainBlack' htmlFor={id}>
        {name}
      </label>
      <input
        type={type}
        className={cn(
          'form-control w-full rounded bg-lightShad2 px-4 py-3 placeholder:text-grey focus:border focus:border-lightShad2 focus:outline-primary ',
          errors[id] && 'border border-error'
        )}
        id={id}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        {...register(id)}
      />

      {errors[id] && <span className='text-sm font-medium text-error'>{errors[id].message?.toString()}</span>}
    </div>
  );
};

export default CommonInput;

export const CommonInputV2 = ({ id, name, type, placeholder, register, errors, className }: CommonInputProps) => {
  return (
    <div className='form-group flex w-full flex-col gap-2'>
      <label className='text-lg font-black text-mainBlack' htmlFor={id}>
        {name}
      </label>
      <input
        type={type}
        className={cn(
          'form-control w-full rounded bg-white px-4 py-3 placeholder:text-grey focus:border focus:border-lightShad2 ',
          errors[id] && 'border border-error',
          className
        )}
        id={id}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        {...register(id)}
      />

      {errors[id] && <span className='text-sm font-medium text-error'>{errors[id]?.message?.toString()}</span>}
    </div>
  );
};

export const CommonRadio = ({
  id,
  name,
  options,
  register,
  errors,
  className,
}: {
  id: string;
  name: string;
  options: { value: string; label: string }[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  className?: string;
}) => {
  return (
    <div className='form-group flex w-full flex-col gap-2'>
      <label className='text-lg font-black text-mainBlack' htmlFor={id}>
        {name}
      </label>
      <div className='flex flex-wrap gap-8'>
        {options.map((option, index) => (
          <label key={index} className={cn('flex items-center gap-6 text-mainBlack', className)}>
            <input
              type='radio'
              className={cn(
                'form-radio text-main size-5 border-primary checked:text-primary focus:ring-2  focus:ring-lightShad2',
                errors[id] && 'border border-error'
              )}
              id={`${id}-${index}`}
              value={option.value}
              {...register(id)}
            />
            {option.label}
          </label>
        ))}
      </div>
      {errors[id] && <span className='text-sm font-medium text-error'>{errors[id]?.message?.toString()}</span>}
    </div>
  );
};

interface CommonSelectProps extends CommonInputProps {
  options: { value: string; label: string }[];
}

export const CommonSelectV2 = ({ id, name, placeholder, register, errors, options, className }: CommonSelectProps) => {
  return (
    <div className='form-group relative flex w-full flex-col gap-2'>
      <label className='text-lg font-black text-mainBlack' htmlFor={id}>
        {name}
      </label>

      <div className='relative w-full'>
        <select
          id={id}
          className={cn(
            'form-control w-full appearance-none rounded bg-white px-4 py-3 pr-12 text-mainBlack outline-none ring-0 focus:outline-none focus:ring-0',
            errors[id] && 'border border-error',
            className
          )}
          {...register(id)}
          defaultValue=''
        >
          {/* Disabled placeholder option with custom color */}
          <option value='' disabled className='text-[#ABABAD]'>
            {placeholder || `Select ${name}`}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500'>
          <svg
            className='size-5'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>

      {errors[id] && <span className='text-sm font-medium text-error'>{errors[id]?.message?.toString()}</span>}
    </div>
  );
};
