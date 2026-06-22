import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

// interface ServiceInfoProps {
//   title: string;
//   text: string;
//   image: string;
//   buttonText: string;
//   buttonLink: string;
// }

const ServiceInfo = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);
  return (
    <CommonAnimation className='main-common-padding flex max-w-[1300px] flex-col items-center justify-center  gap-10 lg:flex-row lg:gap-16'>
      <div className='lg:w-1/2'>
        <Image
          src={data?.image as string}
          alt='seo'
          width={600}
          height={418}
          className='rounded-2xl object-cover xl:max-h-[520px]'
        />
      </div>
      <div className='flex w-full flex-col gap-10 lg:w-1/2 lg:gap-[3.25rem]'>
        <div className='flex w-full flex-col  gap-8'>
          <CommonTitle title={data?.title as string} className='text-center lg:text-left' />
          <CommonParargraph text={data?.description as string} className='text-center lg:text-left' />
        </div>
        <CommonButton href='/contact-us' text='Contact us' className='mx-auto lg:mx-0' />
      </div>
    </CommonAnimation>
  );
};

export default ServiceInfo;

export const ServiceInfoReversed = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='main-common-padding flex max-w-[1300px] flex-col items-center justify-center  gap-10 lg:flex-row lg:gap-16'>
      <div className='flex w-full flex-col gap-10 lg:w-1/2 lg:gap-[3.25rem]'>
        <div className='flex w-full flex-col  gap-8'>
          <CommonTitle title={data?.title as string} className='text-center lg:text-left' />
          <CommonParargraph text={data?.description as string} className='text-center lg:text-left' />
        </div>
        <CommonButton href='/contact-us' text='Contact us' className='mx-auto lg:mx-0' />
      </div>
      <div className='lg:w-1/2'>
        <Image
          src={data?.image as string}
          alt='seo'
          width={600}
          height={418}
          className='rounded-2xl object-cover xl:max-h-[520px]'
        />
      </div>
    </CommonAnimation>
  );
};
