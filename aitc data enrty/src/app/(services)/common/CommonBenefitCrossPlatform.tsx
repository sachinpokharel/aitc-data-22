import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const CommonBenefitsCrossPlatform = async ({ className, url }: { className?: string; url?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url as string);

  return (
    <CommonAnimation className={cn('common-padding ', className)}>
      <div className='common-section max-w-[1350px]'>
        <CommonTitle title={data?.title as string} className='text-center' delay={delays.long} />
        {data?.description && (
          <CommonParargraph text={data?.description} className='text-center' delay={delays.longer} />
        )}
        <div className='flex flex-wrap items-start justify-center gap-8'>
          {data?.keyPoints?.map((item, index) => (
            <CommonAnimation delay={(index + 1) * 0.4} key={item?.id} className='flex flex-col gap-4 md:max-w-[300px]'>
              <div className='flex flex-col items-center justify-center gap-2'>
                <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4 rotate-90' />
                <CommonHeader title={item?.title as string} className='text-center' />
              </div>
              <CommonParargraph text={item?.description as string} className='text-center' />
            </CommonAnimation>
          ))}
        </div>
        <CommonButton text='Book a free consultation' href='/contact-us' className='mx-auto' />
      </div>
    </CommonAnimation>
  );
};

export default CommonBenefitsCrossPlatform;
