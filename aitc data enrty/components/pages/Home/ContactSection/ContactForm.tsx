/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { consulatationSchema, generalEnquirySchema, serviceSchema } from '@/src/schemas/constactusSchema';
import { postData, postFormData } from '@/utils/postData';
import { yupResolver } from '@hookform/resolvers/yup';
import { PopupButton } from 'react-calendly';
import { useForm } from 'react-hook-form';
import { FaCheckCircle, FaRegCalendarCheck } from 'react-icons/fa';
import { IoChevronDownOutline } from 'react-icons/io5';
import { LuLoader } from 'react-icons/lu';
import { MdError } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import { validateRecaptcha } from '@/utils/actions';
import useReCaptchaLogin from '@/hooks/useRecaptha';
// import { ReCAPTCHA } from 'react-google-recaptcha';
import { CommonHeader } from '@/components/common/CommonTitle';
import AvailableDate from '@/components/common/Form/AvailableDate';
import CommonImage from '@/components/common/Form/CommonImage';
import CommonInput from '@/components/common/Form/CommonInput';
import CommonTextArea from '@/components/common/Form/CommonTextArea';

import { verifyRecaptcha } from './action';
import ServicesList from './ServicesList';

const typeofForm: {
  id: string;
  name: string;
}[] = [
  {
    id: 'general_enquiry',
    name: 'General Enquiry',
  },
  {
    id: 'service_enquiry',
    name: 'Service Enquiry',
  },
  // {
  //   id: 'book_a_consultation',
  //   name: 'Book a consultation',
  // },
];

const ContactForm = () => {
  const params = useSearchParams().get('form');
  const [selectedForm, setSelectedForm] = useState<string>('general_enquiry');
  const [isEnquiryDropdownOpen, setIsEnquiryDropdownOpen] = useState(false);
  const enquiryDropdownRef = useRef<HTMLDivElement | null>(null);
  const [services, setServices] = useState<{ id: string }[]>([]);
  const [formMessage, setFormMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const [calendlyRoot, setCalendlyRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setCalendlyRoot(document.getElementById('root'));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(
      // @ts-expect-error
      selectedForm === 'general_enquiry'
        ? generalEnquirySchema
        : selectedForm === 'service_enquiry'
          ? serviceSchema
          : consulatationSchema
    ),
    mode: 'all',
  });

  useEffect(() => {
    if (params) {
      reset();
      const element = document.getElementById(params);
      if (element) {
        setSelectedForm(params);

        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [params, reset]);

  useEffect(() => {
    if (selectedForm === 'service_enquiry') {
      if (services.length > 0) {
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        setValue('serviceId', services.map((s) => s.id).join(','));
      } else {
        // @ts-expect-error

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions

        setValue('serviceId', '');
      }
    }
  }, [selectedForm, services, setValue]);

  useEffect(() => {
    if (formMessage) {
      const timer = setTimeout(() => {
        setFormMessage(null);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [formMessage]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (enquiryDropdownRef.current && !enquiryDropdownRef.current.contains(event.target as Node)) {
        setIsEnquiryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);
  // const [, setIsVerified] = useState(false);

  // const onReCaptchaChange = async (token: string | null) => {
  //   if (!token) {
  //     setIsVerified(false);
  //     return;
  //   }
  //   try {
  //     await validateRecaptcha(token);
  //     setIsVerified(true);
  //   } catch (error) {
  //     console.error('reCAPTCHA validation failed:', error);
  //     setIsVerified(false);
  //     setFormMessage({
  //       type: 'error',
  //       message: 'reCAPTCHA verification failed. Please try again.',
  //     });
  //   }
  // };

  const today = new Date();

  const [startDate, setStartDate] = useState<string>(today.toISOString().split('T')[0]);
  const { verifyAndLogin } = useReCaptchaLogin();
  const handleFormTypeChange = (formType: string) => {
    setSelectedForm(formType);
    setIsEnquiryDropdownOpen(false);
    setFormMessage(null);
    setServices([]);
    reset();
  };

  const onSubmit = async (data: unknown) => {
    try {
      if (selectedForm === 'service_enquiry' && services.length === 0) {
        setFormMessage({
          type: 'error',
          message: 'Please select at least one service',
        });
        return;
      }

      setFormMessage(null);
      const url = selectedForm === 'general_enquiry' ? '/connectus/general' : '/connectus/service';

      const formData = new FormData();
      const typedData = data as {
        name: string;
        email: string;
        contact: string;
        message: string;
        subject?: string;
        document?: FileList;
        slotId: string;
      };

      formData.append('name', typedData.name);
      formData.append('email', typedData.email);
      formData.append('contact', typedData.contact);
      formData.append('message', typedData.message);

      if (selectedForm === 'service_enquiry' && services.length > 0) {
        services.forEach((service) => {
          formData.append('serviceIds', service.id);
        });
      }
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (selectedForm === 'general_enquiry') formData.append('subject', data.subject);
      // @ts-expect-error

      data?.document?.length > 0 && formData.append('file', data.document[0]);

      if (selectedForm === 'book_a_consultation') {
        const consultationData = {
          name: typedData.name,
          email: typedData.email,
          contact: typedData.contact,
          purpose: typedData.message,
          date: startDate,
          slotId: typedData.slotId,
        };
        const token = await verifyAndLogin('book_a_consultation');
        const { success } = await verifyRecaptcha(token as string);

        if (!success) {
          setFormMessage({
            type: 'error',
            message: 'Something went wrong. Please try again.',
          });
          return;
        }
        await postData(`/connectus/consultation`, consultationData);
        setFormMessage({
          type: 'success',
          message: 'Thank you for your message. We will be in contact with you soon.',
        });
      } else {
        const token = await verifyAndLogin('general_enquiry');
        const { success } = await verifyRecaptcha(token as string);

        if (!success) {
          setFormMessage({
            type: 'error',
            message: 'Something went wrong. Please try again.',
          });
          return;
        }
        await postFormData(url, formData);
        setFormMessage({
          type: 'success',
          message: 'Thank you for your message. We will be in contact with you soon.',
        });
      }

      reset();
      setServices([]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error submitting form. Please try again.';
      setFormMessage({
        type: 'error',
        message: errorMessage,
      });
    }
  };

  return (
    <div className='contactus flex flex-col gap-8 rounded-2xl   lg:w-3/5 '>
      <div className='prefer-direct rounded-2xl bg-white p-4'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-bold text-primary'>Prefer a Direct Consultation?</span>
          <span className='text-sm text-grey'>Skip the form and book a call with our experts.</span>
        </div>
        {/* <Link
          target='_blank'
          href='https://calendly.com/aitc-schedule/30min'
          className='mt-4 flex max-w-[228px]  items-center gap-2 rounded-md bg-primary px-4 py-3 text-white'
        >
          <FaRegCalendarCheck />
          <span>Book a free consultation</span>
        </Link> */}

        {calendlyRoot ? (
          <PopupButton
            url='https://calendly.com/aitc-schedule/30min'
            className='mt-4 flex max-w-[228px]  items-center gap-2 rounded-md bg-primary px-4 py-3 text-white'
            rootElement={calendlyRoot}
            // @ts-expect-error - react-calendly text accepts ReactNode
            text={
              <>
                <FaRegCalendarCheck />
                <span>Book a free consultation</span>
              </>
            }
          />
        ) : (
          <span className='mt-4 flex max-w-[228px] items-center gap-2 rounded-md bg-primary px-4 py-3 text-white'>
            <FaRegCalendarCheck />
            <span>Book a free consultation</span>
          </span>
        )}
      </div>

      <div className='flex items-center gap-4'>
        <hr className='border-1 h-px flex-1 bg-[#CFCFCF]' />
        <span className=' !text-grey'>Or Fill this Form</span>
        <hr className='border-1 h-px flex-1 bg-[#CFCFCF]' />
      </div>

      <div
        id={params ?? 'general_enquiry'}
        className='contactus flex flex-1 flex-col gap-8 rounded-2xl bg-white  p-6  '
      >
        <CommonHeader title='Get in Touch' className='text-center lg:text-3xl' />

        <form className='form flex flex-col gap-10' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group flex w-full flex-col gap-2'>
            <label htmlFor='enquiryType' className='text-lg font-black text-mainBlack'>
              Enquiry type
            </label>
            <div className='relative w-full' ref={enquiryDropdownRef}>
              <button
                id='enquiryType'
                type='button'
                onClick={() => setIsEnquiryDropdownOpen((prev) => !prev)}
                className='form-control flex w-full items-center justify-between rounded bg-lightShad2 px-4 py-3 text-left text-mainBlack focus:border focus:border-lightShad2 focus:outline-primary'
                aria-haspopup='listbox'
                aria-expanded={isEnquiryDropdownOpen}
              >
                <span>{typeofForm.find((type) => type.id === selectedForm)?.name ?? 'Select enquiry type'}</span>
                <IoChevronDownOutline
                  size={20}
                  className={`transition-transform duration-200 ${isEnquiryDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isEnquiryDropdownOpen && (
                <ul
                  role='listbox'
                  aria-labelledby='enquiryType'
                  className='absolute z-20 mt-2 w-full rounded-md border border-lightShad2 bg-white py-1 shadow-lg'
                >
                  {typeofForm.map((type) => (
                    <li key={type.id}>
                      <button
                        type='button'
                        onClick={() => handleFormTypeChange(type.id)}
                        className={`w-full px-4 py-3 text-left text-mainBlack transition-colors ${
                          selectedForm === type.id ? 'bg-lightShad2 font-semibold' : 'hover:bg-lightShad2'
                        }`}
                        role='option'
                        aria-selected={selectedForm === type.id}
                      >
                        {type.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <CommonInput
            id='name'
            name='Full Name'
            type='text'
            errors={errors}
            placeholder='Full name'
            // @ts-expect-error
            register={register}
          />
          <div className='flex flex-col gap-6  sm:flex-row'>
            <CommonInput
              id='email'
              name='Email'
              type='email'
              placeholder='Enter your email address '
              // @ts-expect-error
              register={register}
              errors={errors}
            />
            <CommonInput
              id='contact'
              name='Contact no'
              type='text'
              placeholder='Enter your contact no. '
              // @ts-expect-error
              register={register}
              errors={errors}
            />
          </div>

          {selectedForm === 'service_enquiry' && (
            <ServicesList setService={setServices} serviceitem={services} errors={errors} />
          )}

          {selectedForm === 'general_enquiry' && (
            <CommonInput
              id='subject'
              name='Subject of enquiry'
              type='text'
              placeholder='Enter the subject of enquiry '
              // @ts-expect-error
              register={register}
              errors={errors}
            />
          )}
          <CommonTextArea
            id='message'
            name={`${selectedForm === 'book_a_consultation' ? 'Purpose to schedule a call' : 'Message'}`}
            placeholder={` ${selectedForm === 'book_a_consultation' ? 'Purpose to schedule a call' : ''} Please enter your detailed message`}
            // @ts-expect-error
            register={register}
            maxlength={500}
            errors={errors}
          />
          {selectedForm === 'book_a_consultation' && (
            <AvailableDate
              // @ts-expect-error
              register={register}
              errors={errors}
              startDate={startDate}
              setStartDate={setStartDate}
            />
          )}
          {selectedForm !== 'book_a_consultation' && (
            <CommonImage
              id='document'
              name='Upload document'
              // @ts-expect-error
              watch={watch}
              // @ts-expect-error
              register={register}
              errors={errors}
            />
          )}
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
            className='btn  w-fit rounded bg-primary px-4 py-[0.78125rem] font-medium text-white'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className='flex items-center gap-2'>
                <LuLoader size={14} className='animate-spin' />
                <span>Sending...</span>
              </div>
            ) : (
              'Send enquiry'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
