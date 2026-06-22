/* eslint-disable @typescript-eslint/no-base-to-string */
import { cn } from '@/utils/cn';
import { type FieldErrors, type FieldValues, type UseFormRegister } from 'react-hook-form';

interface CommonTextAreaProps {
  name: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  maxlength?: number;
}

const CommonTextArea = ({ name, id, placeholder, register, errors, maxlength }: CommonTextAreaProps) => {
  return (
    <div className='form-group flex flex-col gap-2'>
      <label htmlFor={id} className='text-lg font-black text-mainBlack'>
        {name}
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        {...register(id)}
        className={cn(
          'form-control w-full rounded bg-lightShad2 px-4 py-3 placeholder:text-grey focus:outline-primary ',
          errors[id] && 'border border-error'
        )}
        rows={4}
        maxLength={maxlength}
      />
      <span className='text-sm font-medium text-error'>{errors[id]?.message?.toString()}</span>
    </div>
  );
};

export default CommonTextArea;
