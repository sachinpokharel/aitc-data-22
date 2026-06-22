import { applySchemaInterest } from '@/src/schemas/jobApplySchema';
import { cn } from '@/utils/cn';
import { postFormData } from '@/utils/postData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { IoClose } from 'react-icons/io5';
import type * as yup from 'yup';
import { useEffect, useState } from 'react';
import useReCaptchaLogin from '@/hooks/useRecaptha';
import { CommonDocument } from '@/components/common/Form/CommonImage';
import { CommonInputV2, CommonSelectV2 } from '@/components/common/Form/CommonInput';

import { verifyRecaptcha } from '../../Home/ContactSection/action';
import { type Positions } from '../JobOpenings/JobOpenings';

type IApplyFormData = yup.InferType<typeof applySchemaInterest>;

const ApplyFormInterest = ({
  vacancyId,
  alternate,
  positions,
}: {
  vacancyId?: number;
  alternate?: boolean;
  positions: Positions[];
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IApplyFormData>({
    resolver: yupResolver(applySchemaInterest),
    mode: 'all',
  });

  const [showResume, setShowResume] = useState<boolean>(false);
  const [showCover, setShowCover] = useState<boolean>(false);
  const resumeFile: FileList | null = watch('resume') as FileList;
  const coverFile: FileList | null = watch('cover') as FileList;
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const { verifyAndLogin } = useReCaptchaLogin();

  const positionList = positions?.map((role) => ({
    value: role?.name,
    label: role?.name,
  }));

  useEffect(() => {
    if (resumeFile && resumeFile?.length && !showResume) {
      setShowResume(true);
    }
    if (coverFile && coverFile?.length && !showCover) {
      setShowCover(true);
    }
  }, [resumeFile, showResume, coverFile, showCover, watch, errors]);

  const onSubmit = async (data: IApplyFormData) => {
    try {
      setFormMessage(null);

      const formData = new FormData();

      formData.append('fullName', data.fullname);
      formData.append('email', data.email);
      formData.append('contact', data.number);
      formData.append('position', data.position);

      if (data.resume && data.resume instanceof FileList && data.resume.length > 0) {
        formData.append('resume', data.resume[0]);
      }
      if (data.cover && data.cover instanceof FileList && data.cover.length > 0) {
        formData.append('coverLetter', data.cover[0]);
      }

      if (!alternate && vacancyId) {
        formData.append('vacancyId', vacancyId.toString());
      }

      const endpoint = '/career/interest-based-application';

      const token = await verifyAndLogin('apply-job');
      const { success } = await verifyRecaptcha(token as string);

      if (!success) {
        setFormMessage({
          type: 'error',
          message: 'Failed reCAPTCHA validation',
        });
        return;
      } else {
        const response = await postFormData(endpoint, formData);

        setFormMessage({
          type: 'success',
          message: response.message || 'Application submitted successfully!',
        });

        reset();
        setShowResume(false);
        setShowCover(false);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error submitting application';
      setFormMessage({
        type: 'error',
        message: errorMessage,
      });
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className='flex w-full flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
      <CommonInputV2
        id='fullname'
        name='Full Name'
        type='text'
        errors={errors}
        placeholder='Full Name'
        // @ts-expect-error next-line
        register={register}
        className={cn(alternate && 'bg-lightShad2')}
      />
      <div className='flex flex-col gap-4 xl:flex-row'>
        <div className='w-full'>
          <CommonInputV2
            id='email'
            name='Email'
            type='email'
            errors={errors}
            placeholder='Email'
            // @ts-expect-error next-line
            register={register}
            className={cn(alternate && 'bg-lightShad2')}
          />
        </div>
        <div className='w-full'>
          <CommonInputV2
            id='number'
            name='Contact no'
            type='text'
            errors={errors}
            placeholder='Contact Number'
            // @ts-expect-error next-line
            register={register}
            className={cn(alternate && 'bg-lightShad2')}
          />
        </div>
      </div>
      <CommonSelectV2
        id='position'
        name='Position'
        placeholder='Select position'
        options={positionList}
        errors={errors}
        // @ts-expect-error next-line
        register={register}
        className={cn(alternate && 'bg-lightShad2')}
      />
      <div className='flex flex-col gap-4 xl:flex-row'>
        <div className='w-full'>
          {showResume ? (
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row items-center gap-2'>
                <p className='text-primary'>{resumeFile?.[0]?.name}</p>
                <button
                  type='button'
                  onClick={() => {
                    setShowResume(false);
                    setValue('resume', '');
                  }}
                >
                  <IoClose />
                </button>
              </div>
              {errors.resume && <span className='text-sm font-medium text-error'>{errors.resume.message}</span>}
            </div>
          ) : (
            <CommonDocument
              id='resume'
              name='Resume'
              // @ts-expect-error next-line
              register={register}
              errors={errors}
            />
          )}
        </div>
        <div className='w-full'>
          {showCover ? (
            <div className='flex flex-row items-center gap-2'>
              <p className='text-primary'>{coverFile?.[0]?.name}</p>
              <button
                type='button'
                onClick={() => {
                  setShowCover(false);
                  setValue('cover', '');
                }}
              >
                <IoClose />
              </button>
            </div>
          ) : (
            <CommonDocument
              id='cover'
              name='Cover Letter'
              isOptional={true}
              // @ts-expect-error next-line
              register={register}
              errors={errors}
            />
          )}
        </div>
      </div>
      {formMessage && (
        <div
          className={`rounded-md p-4 ${formMessage.type === 'success' ? 'bg-green-500 ' : 'bg-red-500'} text-lightShad2`}
        >
          {formMessage.message}
        </div>
      )}

      <button
        type='submit'
        className={cn(
          'flex w-full items-center justify-center rounded px-4 py-3 text-white transition',
          errors && Object.keys(errors).length > 0
            ? 'cursor-not-allowed bg-gray-400'
            : 'hover:bg-primary-dark bg-primary'
        )}
        disabled={isSubmitting || (errors && Object.keys(errors).length > 0)}
      >
        {isSubmitting ? (
          <>
            <ImSpinner2 className='mr-2 animate-spin' />
            Submitting...
          </>
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
};

export default ApplyFormInterest;
