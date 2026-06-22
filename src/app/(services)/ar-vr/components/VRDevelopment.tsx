import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TranslateXAnimation from '@/components/common/animation/TranslateXAnimation';
import TranslateYAnimation from '@/components/common/animation/TranslateYAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const VRDevelopment = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='common-padding common-section flex flex-col items-center gap-14 overflow-x-hidden'>
      <div className='flex flex-col place-content-center items-center gap-14 lg:flex-row lg:items-start '>
        <div className='flex flex-col items-center gap-12 lg:items-start'>
          <CommonTitle title={data?.title as string} className='text-center lg:text-left' />
          <TranslateYAnimation translateY={'40px'}>
            <Image
              src={data?.image as string}
              alt='seo'
              width={500}
              height={500}
              className='rounded-2xl object-cover xl:max-h-[520px]'
            />
          </TranslateYAnimation>
        </div>
        <div className='flex flex-col gap-14 lg:w-1/2 xl:w-1/3'>
          <div className='flex flex-col gap-6 '>
            <CommonParargraph text={data?.description as string} className='text-center lg:text-start' />
            {data?.keyPoints?.map((item) => (
              <TranslateXAnimation key={item?.id} className='flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-4'>
                  <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                  <CommonParargraph text={item?.title as string} className='font-bold' />
                </div>
                <CommonParargraph text={item?.description as string} />
              </TranslateXAnimation>
            ))}
          </div>
          <CommonButton
            target='_blank'
            href='https://calendly.com/aitc-schedule/30min'
            text='Book a free consultation'
            className='mx-auto xmd:mx-0'
          />
        </div>
      </div>
    </CommonAnimation>
  );
};

export default VRDevelopment;
