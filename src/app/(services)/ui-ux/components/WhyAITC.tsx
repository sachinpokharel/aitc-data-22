import { fetchData } from '@/utils/getData';
import type { CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const WhyAITC = async ({ url, className }: { url: string; className?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);
  return (
    <div className={className}>
      <CommonAnimation className='main-common-padding flex max-w-[1500px] flex-col justify-center gap-10 lg:flex-row '>
        <div className='flex flex-col gap-12 max-lg:items-center lg:w-1/2'>
          <CommonTitle title={data?.title as string} className='text-center lg:text-left' />
          <CommonButton text='Get a free quote' target='_blank' href='https://calendly.com/aitc-schedule/30min' />
        </div>
        <div className='flex flex-wrap gap-8 max-lg:justify-center lg:w-1/2 '>
          {data?.keyPoints?.map((item) => (
            <div key={item?.id} className='flex w-full flex-col items-center gap-4 md:max-w-[294px] xl:max-w-[260px]'>
              <CommonHeader title={item?.title as string} className='w-full text-center lg:text-left' />
              <CommonParargraph text={item?.description as string} className='w-full text-center lg:text-left' />
            </div>
          ))}
        </div>
      </CommonAnimation>
    </div>
  );
};

export default WhyAITC;
