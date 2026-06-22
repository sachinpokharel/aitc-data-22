import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Innovation = async ({ url, className }: { url: string; className?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <div className={className}>
      <CommonAnimation className='common-padding common-section flex flex-col items-center gap-14'>
        <div className='flex flex-col place-content-center items-start gap-14 md:flex-row md:items-start '>
          <div className='flex flex-col items-center gap-12'>
            <Image
              src={data?.image as string}
              alt='seo'
              width={450}
              height={500}
              className='rounded-2xl object-cover xl:max-h-[655px]'
            />
          </div>
          <div className='flex flex-col gap-14 md:w-1/2 '>
            <div className='flex flex-col gap-4'>
              <CommonTitle title={data?.title as string} delay={delays.long} />

              <CommonParargraph
                text={data?.subTitle as string}
                className=' text-start font-bold'
                delay={delays.longer}
              />
              <CommonParargraph text={data?.description as string} className='text-start' delay={delays.longer} />
              {data?.keyPoints?.map((item) => (
                <Fade
                  direction='up'
                  key={item?.id}
                  delay={delays.extralong}
                  cascade={true}
                  fraction={0.7}
                  duration={2000}
                >
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                      <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                      <CommonParargraph text={item?.title as string} />
                    </div>
                    <CommonParargraph text={item?.description as string} />
                  </div>
                </Fade>
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
    </div>
  );
};

export default Innovation;

export const InnovationMobile = async ({ url, className }: { url: string; className?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <div className={className}>
      <CommonAnimation className='common-padding common-section flex max-w-[1350px] flex-col items-center gap-14'>
        <CommonTitle title={data?.title as string} delay={delays.long} />
        <div className='flex flex-col place-content-center items-start gap-14 md:flex-row md:items-start '>
          <div className='flex flex-col items-center gap-12'>
            <Image
              src={data?.image as string}
              alt='seo'
              width={450}
              height={500}
              className='rounded-2xl object-cover xl:max-h-[655px]'
            />
          </div>
          <div className='flex flex-col gap-14'>
            <div className='flex flex-col gap-4'>
              <CommonParargraph
                text={data?.description as string}
                className=' text-start font-bold'
                delay={delays.longer}
              />
              <CommonParargraph text={data?.description as string} className='text-start' delay={delays.longer} />
              {data?.points?.map((item) => (
                <Fade direction='up' key={item} delay={delays.extralong} cascade={true} fraction={0.7} duration={2000}>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                      <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                      <CommonParargraph text={item} />
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
            <CommonButton href='/contact-us' text='Book a free consultation' className='mx-auto xmd:mx-0' />
          </div>
        </div>
      </CommonAnimation>
    </div>
  );
};
