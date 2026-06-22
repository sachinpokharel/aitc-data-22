import { fetchData } from '@/utils/getData';
import type { CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonTitle from '@/components/common/CommonTitle';
import CardWrapper, { type featureProps } from '@/components/pages/aboutus/OurMission/CardWrapper';

const DigitalEvolution = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='main-common-padding mx-auto flex max-w-[1450px] flex-col items-center gap-10 xmd:gap-[3.25rem]  '>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonTitle title={data?.title as string} className='text-center' />
          </div>
        </div>
        <CardWrapper features={data?.keyPoints as featureProps[]} />
        <CommonButton text='Get a free quote' target='_blank' href='https://calendly.com/aitc-schedule/30min' />
      </div>
    </CommonAnimation>
  );
};

export default DigitalEvolution;
