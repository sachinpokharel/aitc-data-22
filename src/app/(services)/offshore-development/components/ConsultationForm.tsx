'use client';

import { generalEnquirySchema } from '@/src/schemas/constactusSchema';
import { postFormData } from '@/utils/postData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import { LuLoader } from 'react-icons/lu';
import { MdError } from 'react-icons/md';
import { useState } from 'react';
import CommonInput from '@/components/common/Form/CommonInput';
import CommonTextArea from '@/components/common/Form/CommonTextArea';

interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm = ({ onClose }: ConsultationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(generalEnquirySchema),
  });

  const onSubmit = async (data: unknown) => {
    setIsSubmitting(true);
    setFormMessage(null);

    try {
      const formData = new FormData();
      const typedData = data as {
        name: string;
        email: string;
        contact: string;
        message: string;
        subject?: string;
        document?: FileList;
      };

      // Get service, budget, and company name from form elements (not in schema)
      const serviceNeeded = (document.getElementById('serviceNeeded') as HTMLSelectElement)?.value || '';
      const budgetRange = (document.getElementById('budgetRange') as HTMLSelectElement)?.value || '';
      const companyName = (document.getElementById('companyName') as HTMLInputElement)?.value || '';

      formData.append('name', typedData.name);
      formData.append('email', typedData.email);
      formData.append('contact', typedData.contact);
      const fullMessage = `${typedData.message || ''}${companyName ? `\n\nCompany Name: ${companyName}` : ''}${serviceNeeded ? `\nService Needed: ${serviceNeeded}` : ''}${budgetRange ? `\nBudget Range: ${budgetRange}` : ''}`;
      formData.append('message', fullMessage.trim() || 'Offshore Development Consultation');
      formData.append('subject', typedData.subject || 'Offshore Development Consultation');
      if (typedData.document && typedData.document.length > 0) {
        formData.append('file', typedData.document[0]);
      }

      const response = await postFormData('/connectus/general-enquiry', formData);

      if (response?.success) {
        setFormMessage({
          type: 'success',
          message: 'Thank you! We will contact you within 24 hours.',
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setFormMessage({
          type: 'error',
          message: response?.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setFormMessage({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='max-h-[80vh] overflow-y-auto p-8'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
        className='form flex flex-col gap-10'
      >
        <CommonInput
          id='name'
          name='Full Name'
          type='text'
          placeholder='Full name'
          // @ts-expect-error - CommonInput expects specific register type
          register={register}
          errors={errors}
        />
        <div className='flex flex-col gap-6 sm:flex-row'>
          <CommonInput
            id='email'
            name='Business Email'
            type='email'
            placeholder='Enter your email address'
            // @ts-expect-error - CommonInput expects specific register type
            register={register}
            errors={errors}
          />
          <CommonInput
            id='contact'
            name='Contact Number'
            type='text'
            placeholder='Enter your contact number'
            // @ts-expect-error - CommonInput expects specific register type
            register={register}
            errors={errors}
          />
        </div>
        <div className='form-group flex w-full flex-col gap-2'>
          <label className='text-lg font-black text-mainBlack' htmlFor='companyName'>
            Company Name
          </label>
          <input
            id='companyName'
            type='text'
            className='form-control w-full rounded bg-lightShad2 px-4 py-3 placeholder:text-grey focus:border focus:border-lightShad2 focus:outline-primary'
            placeholder='Enter your company name'
          />
        </div>
        <CommonInput
          id='subject'
          name='Subject'
          type='text'
          placeholder='Offshore Development Consultation'
          // @ts-expect-error - CommonInput expects specific register type
          register={register}
          errors={errors}
        />
        <div className='form-group relative flex w-full flex-col gap-2'>
          <label className='text-lg font-black text-mainBlack' htmlFor='serviceNeeded'>
            Service Needed
          </label>
          <div className='relative w-full'>
            <select
              id='serviceNeeded'
              className='form-control w-full appearance-none rounded bg-lightShad2 px-4 py-3 pr-12 text-mainBlack outline-none ring-0 focus:outline-none focus:ring-0'
              defaultValue=''
            >
              <option value='' disabled className='text-[#ABABAD]'>
                Select a service
              </option>
              <option value='Dedicated Team'>Dedicated Team</option>
              <option value='Project Delivery'>Project Delivery</option>
              <option value='Hybrid'>Hybrid</option>
              <option value='Maintenance'>Maintenance</option>
            </select>
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
        </div>
        <div className='form-group relative flex w-full flex-col gap-2'>
          <label className='text-lg font-black text-mainBlack' htmlFor='budgetRange'>
            Budget Range
          </label>
          <div className='relative w-full'>
            <select
              id='budgetRange'
              className='form-control w-full appearance-none rounded bg-lightShad2 px-4 py-3 pr-12 text-mainBlack outline-none ring-0 focus:outline-none focus:ring-0'
              defaultValue=''
            >
              <option value='' disabled className='text-[#ABABAD]'>
                Select budget range
              </option>
              <option value='<$5k'>&lt;$5k</option>
              <option value='$5–10k'>$5–10k</option>
              <option value='$10–25k'>$10–25k</option>
              <option value='$25k+'>$25k+</option>
            </select>
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
        </div>
        <CommonTextArea
          id='message'
          name='Message (optional)'
          placeholder='Tell us about your project...'
          // @ts-expect-error - CommonTextArea expects specific register type
          register={register}
          errors={errors}
          maxlength={500}
        />
        {formMessage && (
          <div className='my-4 flex items-center justify-start gap-4 rounded-md border bg-lightShad2 p-4'>
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
              <span>Sending...</span>
            </div>
          ) : (
            'Book a Free Consultation'
          )}
        </button>
        <p className='text-xs text-gray-500'>We respond within 24 hours. No spam. NDA available.</p>
      </form>
    </div>
  );
};

export default ConsultationForm;
