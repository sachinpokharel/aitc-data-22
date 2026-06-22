'use client';

import { classroomEnquirySchema } from '@/src/schemas/classroomEnquirySchema';
import { postFormData } from '@/utils/postData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import type * as yup from 'yup';
import { useEffect, useState } from 'react';
import useReCaptchaLogin from '@/hooks/useRecaptha';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';
import { CommonDocument } from '@/components/common/Form/CommonImage';
import { CommonInputV2, CommonRadio } from '@/components/common/Form/CommonInput';
import { verifyRecaptcha } from '@/components/pages/Home/ContactSection/action';

import CourseList from './CourseList';
import { Modal } from './Modal';

type IApplyFormData = yup.InferType<typeof classroomEnquirySchema>;

const EnquiryForm = ({ closeModal, slug }: { closeModal: () => void; slug: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(classroomEnquirySchema),
    mode: 'all',
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const [showResume, setShowResume] = useState<boolean>(false);
  const resumeFile: FileList | null = watch('documentUrl') as FileList;
  const [courses, setCourses] = useState<{ id: string }[]>([]);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const { verifyAndLogin } = useReCaptchaLogin();

  useEffect(() => {
    if (resumeFile && resumeFile?.length && !showResume) {
      setShowResume(true);
    }
  }, [resumeFile, showResume]);

  const onSubmit = async (data: IApplyFormData) => {
    try {
      setisSubmitting(true);
      setFormMessage(null);

      const formData = new FormData();

      formData.append('fullName', data.fullname);
      formData.append('email', data.email);
      formData.append('contact', data.contact);

      formData.append('currentStatus', data.currentStatus);
      formData.append('qualification', data.qualification);
      formData.append('fundedBy', data.fundedBy);
      formData.append('preferredCourses', JSON.stringify(courses?.map((course) => course.id)));
      formData.append('slug', slug);

      if (data.documentUrl && data.documentUrl instanceof FileList && data.documentUrl.length > 0) {
        formData.append('file', data.documentUrl[0]);
      }

      const endpoint = '/classroom/apply-course';

      const token = await verifyAndLogin('apply-course');
      const { success } = await verifyRecaptcha(token as string);

      if (!success) {
        setFormMessage({
          type: 'error',
          message: 'Something went wrong. Please try again.',
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
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error submitting application';
      setFormMessage({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <Modal
      onClose={() => {
        closeModal();
        reset();
      }}
    >
      {formMessage?.type === 'success' ? (
        <div className='flex flex-col items-center justify-center gap-6 p-6 text-center text-2xl font-bold '>
          <svg xmlns='http://www.w3.org/2000/svg' width='102' height='70' viewBox='0 0 102 70' fill='none'>
            <g clip-path='url(#clip0_9164_146812)'>
              <path
                opacity='0.09'
                d='M55.4482 68.646C68.9344 68.646 79.8672 67.2719 79.8672 65.5769C79.8672 63.8819 68.9344 62.5078 55.4482 62.5078C41.962 62.5078 31.0293 63.8819 31.0293 65.5769C31.0293 67.2719 41.962 68.646 55.4482 68.646Z'
                fill='black'
              />
              <path
                d='M61.2468 46.373C58.4184 48.1381 49.2068 56.908 52.8864 64.2581C53.5841 65.6493 54.9753 66.7 56.8534 67.3718C65.5494 70.4891 84.661 65.5579 93.3723 49.3283C97.3386 41.9399 97.2947 36.2077 95.5086 31.9456C94.453 29.4255 92.7876 27.4197 90.9827 25.889C88.8625 24.0917 86.5483 22.9503 84.7999 22.4006C66.2296 16.5875 31.5666 29.6237 10.9814 49.3744'
                stroke='#FFA457'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M54.6904 58.3807C69.9833 58.3807 82.3807 45.9833 82.3807 30.6904C82.3807 15.3974 69.9833 3 54.6904 3C39.3974 3 27 15.3974 27 30.6904C27 45.9833 39.3974 58.3807 54.6904 58.3807Z'
                fill='#338F56'
                stroke='#C9EAD5'
                stroke-width='2'
                stroke-miterlimit='10'
              />
              <path
                d='M42.1846 30.2834L50.1033 38.2022L67.6375 20.668'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <mask id='mask0_9164_146812' maskUnits='userSpaceOnUse' x='58' y='2' width='44' height='43'>
                <path
                  d='M96.4862 3.15282L61.2881 13.046C58.3013 13.8832 57.2052 17.5495 59.2411 19.891L64.7053 26.1771L63.8025 37.2382C63.499 40.9624 68.0179 43.0289 70.6356 40.3617L74.0305 36.904L79.7446 43.4768C81.7797 45.8183 85.5605 45.2427 86.8072 42.4017L101.502 8.92267C102.938 5.65332 99.9237 2.18653 96.4862 3.15282Z'
                  fill='white'
                />
              </mask>
              <g mask='url(#mask0_9164_146812)'>
                <path
                  d='M61.2881 13.046L96.4862 3.15282C99.9237 2.18653 102.938 5.65332 101.502 8.92267L86.8072 42.4017C85.5605 45.2427 81.7797 45.8204 79.7446 43.4768L59.2411 19.891C57.2052 17.5495 58.3013 13.886 61.2881 13.046Z'
                  fill='#FF7500'
                />
              </g>
              <path
                d='M61.2469 46.375C58.4185 48.1401 49.207 56.91 52.8865 64.2601'
                stroke='#FFA457'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M64.1474 37.3155L65.0502 26.2544L83.0943 14.8871C87.0774 12.3754 101.846 9 101.846 9L70.9805 40.4362C68.3628 43.1056 63.8439 41.0397 64.1474 37.3155Z'
                fill='#FF7500'
              />
              <path
                d='M73.1817 36.9362L71.9671 35.3197C71.1804 34.2716 70.8245 32.9621 70.9722 31.6599C71.12 30.3577 71.7602 29.1613 72.7618 28.3161L94.289 10.1646'
                stroke='white'
                stroke-linecap='square'
                stroke-linejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_9164_146812'>
                <rect width='101.735' height='70' fill='white' transform='translate(0.132812)' />
              </clipPath>
            </defs>
          </svg>
          <CommonHeader title='Submitted Successfully' className='text-green-600' />
          <CommonParargraph
            text='Your enquiry has been successfully submitted'
            className='text-center max-sm:text-sm'
          />
        </div>
      ) : (
        <div className='p-6'>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className='scroll-container flex h-[500px] flex-col gap-10 overflow-y-scroll'>
              <CommonInputV2
                id='fullname'
                name='Full Name'
                type='text'
                errors={errors}
                placeholder='Full Name'
                // @ts-expect-error next-line
                register={register}
                className={'bg-lightShad2'}
              />
              <CommonInputV2
                id='email'
                name='Email Address'
                type='text'
                errors={errors}
                placeholder='Email Address'
                // @ts-expect-error next-line
                register={register}
                className={'bg-lightShad2'}
              />
              <CommonInputV2
                id='contact'
                name='Contact Number'
                type='text'
                errors={errors}
                placeholder='Contact Number'
                // @ts-expect-error next-line
                register={register}
                className={'bg-lightShad2'}
              />
              <CommonRadio
                id='currentStatus'
                name='Current Status'
                options={[
                  { label: 'Student', value: 'Student' },
                  { label: 'Full Time', value: 'Full_Time' },
                  { label: 'Part Time', value: 'Part_Time' },
                ]}
                // @ts-expect-error next-line
                register={register}
                errors={errors}
              />
              <CommonRadio
                id='qualification'
                name='Qualification'
                options={[
                  { label: 'S.L.C', value: 'SLC' },
                  { label: '+2', value: 'Plus_Two' },
                  { label: 'Bachelors', value: 'Bachelors' },
                  { label: 'Masters', value: 'Masters' },
                  { label: 'Others', value: 'Others' },
                ]}
                // @ts-expect-error next-line
                register={register}
                errors={errors}
              />
              <CommonRadio
                id='fundedBy'
                name='Who will be funding your course?'
                options={[
                  { label: 'My Employer', value: 'My_Employer' },
                  { label: 'Self', value: 'Self' },
                  { label: 'Not Sure', value: 'Not_Sure' },
                ]}
                // @ts-expect-error next-line
                register={register}
                errors={errors}
              />
              <CourseList setService={setCourses} serviceitem={courses} errors={errors} />
              <div className='flex flex-col gap-4 xl:flex-row'>
                <div className='w-full'>
                  {showResume ? (
                    <div className='flex flex-row items-center gap-2'>
                      <p className='text-primary'>{resumeFile?.[0]?.name}</p>
                      <button
                        type='button'
                        onClick={() => {
                          setShowResume(false);
                          setValue('documentUrl', '');
                        }}
                      >
                        <IoClose />
                      </button>
                    </div>
                  ) : (
                    <CommonDocument
                      id='documentUrl'
                      isOptional
                      name='Upload Document'
                      // @ts-expect-error next-line
                      register={register}
                      errors={errors}
                    />
                  )}
                </div>
              </div>
            </div>
            {formMessage?.type === 'error' && (
              <p>
                <span className='text-red-500'>{formMessage?.message}</span>
              </p>
            )}
            <button type='submit' className='w-fit rounded bg-primary px-4 py-2 text-white hover:shadow-md'>
              {isSubmitting ? 'Sending Enquiry' : ' Send Enquiry'}
            </button>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default EnquiryForm;
