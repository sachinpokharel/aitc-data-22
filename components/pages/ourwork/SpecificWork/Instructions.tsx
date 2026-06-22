import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import { type InstructionsResponse } from '@/types/ourwork/specificpage/instructionsDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

/**
 * Reflects Steps and options to play in figma design
 */
const Instructions = async ({ id }: { id: string }) => {
  const data = await fetchData<InstructionsResponse>(`/our-work/product/section/nine/${id}`);
  return (
    <div className={cn(`common-section common-padding flex flex-col gap-12`, id && 'bg-lightShad2')}>
      <div className='flex flex-col items-center gap-8 2xxl:w-1/2'>
        <CommonTitle title={data?.title} delay={delays.medium} />
        <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
      </div>
      <div className='grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-secondary p-8 text-white md:grid-cols-2 2xxl:w-3/4'>
        {data?.steps?.map((item, index) => (
          <Slide key={item?.id} direction='right' cascade={true} triggerOnce damping={0.3}>
            <div className='flex w-full max-w-[543px] flex-row items-start gap-6'>
              <div className='rounded-md bg-primary p-[11px]'>
                <div className='rounded-md bg-white p-[7.5px] text-mainBlack'>
                  <p>{String(index + 1)?.padStart(2, '0')}</p>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-lg font-black leading-[150%] tracking-[0.36px]'>{item?.title}</p>
                <CommonParargraph text={item?.description} className='text-white' />
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
