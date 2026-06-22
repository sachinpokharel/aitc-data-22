/* eslint-disable @typescript-eslint/no-base-to-string */
import { type FieldErrors, type FieldValues, type UseFormRegister, type UseFormWatch } from 'react-hook-form';
import { ImAttachment } from 'react-icons/im';
import { type Maybe } from 'yup';

interface CommonImageProps {
  name: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch?: UseFormWatch<{
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    document?: Maybe<File | null | undefined>;
    number: string;
    message: string;
    fullname: string;
    email: string;
    subject: string;
  }>;
  isOptional?: boolean;
}
const CommonImage = ({ name, id, placeholder, register, errors, watch }: CommonImageProps) => {
  return (
    <div className='form-group flex flex-col gap-2'>
      <label className='flex cursor-pointer flex-col gap-2' htmlFor={id}>
        <p className='flex flex-row gap-2 text-lg font-black text-mainBlack'>
          {name} <span className='font-medium text-primary '>Optional</span>
        </p>
        <div className='flex flex-row items-center gap-4'>
          <p className='flex w-full flex-row items-center gap-4 rounded bg-lightShad2 px-4 py-2.5 xmd:w-fit '>
            {' '}
            <span>
              <ImAttachment size={24} fill='#949494' />
            </span>
            <span className='text-grey'>Attach your files</span>
          </p>
          {/* tslint:disable-next-line: no-misused-promises */}
          <span className=' capitalize text-primary'>
            {watch && ((watch('document') as File[] | null) ?? [])[0]?.name}
          </span>
        </div>

        <span className='font-medium text-mainBlack'>
          Accepted file type <span className='text-primary'>.pdf , .docs</span>
        </span>
      </label>
      <input
        type='file'
        id={id}
        placeholder={placeholder}
        {...register(id)}
        className=' form-control hidden w-full bg-lightShad2 px-4 py-3 placeholder:text-grey'
      />
      {errors[id] && <span className='text-sm font-medium text-error'>{errors[id]?.message?.toString()}</span>}
    </div>
  );
};

export default CommonImage;

export const CommonDocument = ({ name, id, placeholder, register, errors, isOptional = false }: CommonImageProps) => {
  return (
    <div className='form-group flex flex-col gap-2'>
      <label className='flex cursor-pointer flex-col gap-2' htmlFor={id}>
        <p className='flex flex-row gap-2 text-lg font-black text-mainBlack'>
          {name} {isOptional && <span className='font-medium text-primary '>Optional</span>}
        </p>
        <p className='flex w-full flex-row items-center gap-4 rounded bg-white px-4 py-2.5 '>
          {' '}
          <span>
            <ImAttachment size={24} fill='#949494' />
          </span>
          <span className='text-grey'>Attach your files</span>
        </p>
        <span className='font-medium text-grey'>
          Accepted file type <span className='text-primary'>.pdf, .docs</span> .
        </span>
        <span className='font-medium text-grey'>
          Max file size <span className='text-primary'>5MB</span> .
        </span>
      </label>
      <input
        type='file'
        id={id}
        accept='.pdf, .doc, .docx'
        placeholder={placeholder}
        {...register(id)}
        className=' form-control hidden w-full bg-lightShad2 px-4 py-3 placeholder:text-grey'
      />
      {errors[id] && <span className='text-sm font-medium text-error'>{errors[id].message?.toString()}</span>}
    </div>
  );
};
