import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type IntroductionDTO } from '@/types/service/seo/SEODTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

/**
 * Introduction component for SEO services page. Reference: Second component of SEO Page
 *
 * @param {string} url URL of introduction section
 *
 * @returns {JSX.Element} Introduction section component
 */
const Introduction = async ({ className, url }: { className?: string; url?: string }) => {
  const data = await fetchData<IntroductionDTO>(url as string);
  return (
    <CommonAnimation className={cn(className)}>
      <div className='main-common-padding flex max-w-[1350px] flex-col items-center gap-10 overflow-x-hidden lg:gap-[3.25rem]'>
        <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
        <div className='flex flex-col place-content-center items-start gap-14 md:flex-row md:items-start '>
          <div className='flex items-center '>
            <Image
              src={data?.image}
              alt='seo'
              width={461}
              height={516}
              sizes='50vw'
              className='aspect-auto rounded-2xl object-cover xl:max-h-[520px]'
            />
          </div>
          <div className='flex flex-col gap-14 md:w-1/2 '>
            <div className='flex flex-col gap-6 '>
              <CommonParargraph text={data?.description} className=' text-start' delay={delays.long} />
              {data?.points?.map((item) => (
                <div key={item} className='flex flex-row items-center gap-4'>
                  <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                  <CommonParargraph text={item} />
                </div>
              ))}
            </div>
            <CommonButton
              target='_blank'
              href='https://calendly.com/aitc-schedule/30min'
              text='Book a free consultation'
            />
          </div>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Introduction;

export const IntroductionAlternate = async ({ className, url }: { className?: string; url?: string }) => {
  const data = await fetchData<IntroductionDTO>(url as string);
  return (
    <div className={cn(className)}>
      <div className='common-padding common-section flex flex-col items-center gap-14'>
        <div className='flex flex-col place-content-center items-start gap-14 md:flex-row md:items-start '>
          <div className='flex items-center '>
            <Image
              src={data?.image}
              alt='seo'
              width={500}
              height={500}
              className='rounded-2xl object-cover xl:max-h-[520px]'
            />
          </div>
          <div className='flex flex-col gap-14 md:w-1/2 '>
            <CommonTitle title={data?.title} />
            <div className='flex flex-col gap-6 '>
              <CommonParargraph text={data?.description} className='text-center md:text-start' />
              {data?.points?.map((item) => (
                <div key={item} className='flex flex-row items-center gap-4'>
                  <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                  <CommonParargraph text={item} />
                </div>
              ))}
            </div>
            <CommonButton
              target='_blank'
              href='https://calendly.com/aitc-schedule/30min'
              text='Book a free consultation'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
