'use client';

import { domainRequestSchema } from '@/src/schemas/buyDomainSchema';
import { cn } from '@/utils/cn';
import { postData } from '@/utils/postData';
import { yupResolver } from '@hookform/resolvers/yup';
import { countries } from 'countries-list';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import { IoChevronDownOutline } from 'react-icons/io5';
import { LuLoader } from 'react-icons/lu';
import { MdError } from 'react-icons/md';
import type * as yup from 'yup';
import { useEffect, useState } from 'react';
import useReCaptchaLogin from '@/hooks/useRecaptha';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import { CommonHeader } from '@/components/common/CommonTitle';
import CommonInput from '@/components/common/Form/CommonInput';

import { verifyRecaptcha } from '../../Home/ContactSection/action';

const countryOptions = Object.entries(countries).map(([code, country]) => ({
  value: code,
  label: country.name,
}));

const getCountryName = (code: string) => {
  return countries[code as keyof typeof countries]?.name || code;
};

type DomainRequestFormData = yup.InferType<typeof domainRequestSchema>;

const DomainRequestForm = ({ domainId }: { domainId: string }) => {
  const [formMessage, setFormMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DomainRequestFormData>({
    resolver: yupResolver(domainRequestSchema),
  });

  const { verifyAndLogin } = useReCaptchaLogin();

  useEffect(() => {
    if (formMessage) {
      const timer = setTimeout(() => {
        setFormMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formMessage]);
  const onSubmit = async (data: DomainRequestFormData) => {
    try {
      setFormMessage(null);

      const requestData = {
        name: data.fullName,
        email: data.email,
        contact: data.contactNo,
        country: getCountryName(data.country),
        price: data.offerPrice || 0,
      };

      const token = await verifyAndLogin('buy-domain');
      const { success } = await verifyRecaptcha(token as string);

      if (!success) {
        setFormMessage({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        });
        return;
      } else {
        const response = await postData<typeof requestData, { success: boolean; message: string }>(
          `/buy-domain/domain/enquiry/${domainId}`,
          requestData
        );

        setFormMessage({
          type: response.success ? 'success' : 'error',
          message: 'Thank you for your response. We will be in contact with you soon.',
        });

        if (response.success) {
          reset({
            fullName: '',
            email: '',
            contactNo: '',
            country: '',
            offerPrice: 0,
          });
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error submitting form. Please try again.';
      setFormMessage({
        type: 'error',
        message: errorMessage,
      });
    }
  };
  return (
    <CommonAnimation className=' domain-request-form-container relative z-10   bg-lightShad2 px-4 py-16'>
      <div className=' mx-auto -mt-32 flex max-w-lg flex-col gap-8 rounded-2xl bg-white p-6  max-xmd:-mt-24 xmd:max-w-2xl 2xl:max-w-3xl'>
        <CommonHeader title='Make an Offer' className='text-center text-3xl font-extrabold max-xmd:text-2xl' />

        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <CommonInput
            placeholder='Enter your full name'
            id='fullName'
            name='Full Name'
            type='text'
            errors={errors}
            // @ts-expect-error error
            register={register}
          />

          <div className='grid gap-4 sm:grid-cols-2'>
            <CommonInput
              id='email'
              name='Email'
              type='email'
              placeholder='Enter your email address '
              // @ts-expect-error error
              register={register}
              errors={errors}
            />
            <CommonInput
              id='contactNo'
              name='Contact No'
              type='tel'
              placeholder='Enter your contact number'
              errors={errors}
              // @ts-expect-error error
              register={register}
            />
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='form-group flex w-full flex-col gap-2'>
              <p className='text-lg font-black text-mainBlack'>Country</p>
              <div className='relative w-full'>
                <select
                  {...register('country')}
                  className={cn(
                    'form-control w-full appearance-none rounded bg-lightShad2 px-4 py-3 placeholder:text-grey focus:border focus:border-lightShad2'
                  )}
                >
                  <option value=''>Country</option>
                  {countryOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {/* Custom marker */}
                <span className='pointer-events-none absolute inset-y-0 right-4 flex items-center text-grey'>
                  <IoChevronDownOutline size={20} />
                </span>
              </div>
              {errors.country && <span className='mt-1 text-sm text-red-500'>{errors.country.message}</span>}
            </div>

            <CommonInput
              id='offerPrice'
              type='number'
              name='Make an Offer (USD)'
              placeholder='$'
              errors={errors}
              //@ts-expect-error error
              register={register}
            />
          </div>

          <div className='space-y-4'>
            {formMessage && (
              <div className='flex items-center justify-start gap-4 rounded-md border bg-lightShad2 p-4'>
                {formMessage.type === 'success' ? (
                  <FaCheckCircle size={32} fill='#52BD94' />
                ) : (
                  <MdError size={32} fill='#FF5C5C' />
                )}
                <p className='text-center text-base'>{formMessage.message}</p>
              </div>
            )}
            <button
              type='submit'
              className='btn w-fit rounded bg-primary px-4 py-[0.78125rem] font-medium text-white'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className='flex items-center gap-2'>
                  <LuLoader size={14} className='animate-spin' />
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit Offer'
              )}
            </button>
          </div>
        </form>
      </div>
    </CommonAnimation>
  );
};

export default DomainRequestForm;
