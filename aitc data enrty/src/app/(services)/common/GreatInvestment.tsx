import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TranslateXAnimation from '@/components/common/animation/TranslateXAnimation';
import TranslateYAnimation from '@/components/common/animation/TranslateYAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const GreatInvestment = async ({ className, url }: { className?: string; url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);
  return (
    <CommonAnimation className={cn(className, 'main-common-padding overflow-x-hidden')}>
      <div className='mx-auto flex max-w-[1354px] flex-col justify-center gap-10 lg:flex-row'>
        <div className='flex flex-col items-center gap-10 overflow-hidden lg:max-w-[570px] lg:items-start'>
          <CommonTitle title={data?.title as string} className='text-center lg:text-left' />
          <TranslateYAnimation translateY='80px'>
            <Image
              src={data?.image as string}
              alt='why-seo'
              width={509}
              height={500}
              className=' rounded-lg lg:max-w-[509px]'
            />
          </TranslateYAnimation>
        </div>
        <div className='flex flex-col gap-[3.25rem] lg:max-w-[580px]'>
          <div className='flex flex-col gap-8'>
            {data?.description && <CommonParargraph text={data?.description} />}

            {data?.keyPoints?.map((item, index) => (
              <TranslateXAnimation key={index} translateX='50px' delay={index * 0.2}>
                <div key={index} className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-4'>
                    <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                    <p className='text-lg font-black leading-[150%] tracking-[0.36px]'>{item?.title as string}</p>
                  </div>
                  <CommonParargraph text={item?.description as string} />
                </div>
              </TranslateXAnimation>
            ))}
          </div>

          <div className='flex items-center justify-center lg:items-start lg:justify-start'>
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

export default GreatInvestment;
