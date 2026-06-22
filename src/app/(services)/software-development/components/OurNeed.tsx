import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const OurNeed = async ({ url }: { url?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url as string);
  return (
    <CommonAnimation className='where-you-need-us bg-secondary'>
      <div className='main-common-padding flex w-full max-w-[1500px] flex-col gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title={data?.title as string} className='text-center text-white' delay={delays.medium} />
        {data?.description && (
          <CommonParargraph text={data?.description} className='text-center text-white' delay={delays.long} />
        )}
        <div className='list flex flex-row flex-wrap items-start justify-center gap-8'>
          {data?.keyPoints?.map((item, index) => (
            <Card
              key={item?.id}
              index={index}
              title={item?.title as string}
              description={item?.description as string}
            />
          ))}
        </div>
        <CommonButton
          text='Get a free consultation'
          target='_blank'
          href='https://calendly.com/aitc-schedule/30min'
          className='mx-auto'
        />
      </div>
    </CommonAnimation>
  );
};

export default OurNeed;

const Card = ({ index, title, description }: { index: number; title: string; description: string }) => {
  return (
    <CommonAnimation
      delay={index * 0.4}
      className='card flex max-w-[315px] flex-col items-center  justify-center gap-4 '
    >
      <div className='flex flex-col gap-2'>
        <hr className='h-2 w-full rounded bg-primary' />
        <span className='text-[1.375rem] font-black text-white '>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <CommonHeader title={title} className='text-center text-white' />
      <CommonParargraph text={description} className='text-center text-white' />
    </CommonAnimation>
  );
};
