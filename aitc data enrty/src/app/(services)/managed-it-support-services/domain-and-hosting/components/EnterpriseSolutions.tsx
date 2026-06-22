import Image from 'next/image';
import { type EnterpriseSolution } from '@/types/service/domain-hoisting/domain-hoistingDTO';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const EnterpriseSolutions = ({ enterprise }: { enterprise: EnterpriseSolution }) => {
  return (
    <div className='main-common-padding flex  flex-col items-center justify-center gap-10 rounded-2xl  bg-secondary lg:flex-row lg:gap-20'>
      <div className='flex w-full flex-col gap-10 lg:w-3/4 lg:gap-[3.25rem]'>
        <div className='flex w-full flex-col  gap-8'>
          <CommonTitle title={enterprise?.title} className='text-center text-white lg:text-left' />
          <CommonParargraph text={enterprise?.description} className='text-center text-white lg:text-left' />
          <Features features={enterprise?.features} />
        </div>
        <CommonButton href='/contact-us' text='Get a free quote' className='mx-auto lg:mx-0' />
      </div>
      <div className='lg:w-1/2'>
        <Image
          src={enterprise?.image}
          alt='seo'
          width={600}
          height={418}
          className='rounded-2xl object-cover lg:min-w-[458px] xl:max-h-[520px]'
        />
      </div>
    </div>
  );
};

export default EnterpriseSolutions;

const Features = ({ features }: { features: string[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      <CommonHeader title='Features' className='text-white' />
      <div className='flex flex-col gap-6'>
        {features?.map((item) => (
          <div className='flex flex-row items-center gap-2' key={item}>
            <Arrow />
            <CommonParargraph text={item} className='text-white xmd:text-base' />
          </div>
        ))}
      </div>
    </div>
  );
};
