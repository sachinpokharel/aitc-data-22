import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const WhyAITC = async ({ className, url }: { className?: string; url?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url as string);

  return (
    <CommonAnimation className={className}>
      <div className='common-padding common-section max-w-[1400px]'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title as string} className='text-center' delay={delays.medium} />
          {data?.description ? (
            <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
          ) : null}
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {data?.keyPoints?.map((item, index) => (
            <CommonAnimation
              key={item?.id}
              delay={(index + 1) / 3}
              className='flex flex-col items-start gap-4 self-stretch rounded-2xl bg-white p-4 md:max-w-[300px]'
            >
              <CommonHeader title={item?.title as string} className='w-full rounded-xl bg-[#484ba0] p-1 text-white' />
              <CommonParargraph text={item?.description as string} />
            </CommonAnimation>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default WhyAITC;
