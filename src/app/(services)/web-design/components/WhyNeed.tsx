import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { Zoom } from 'react-awesome-reveal';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const WhyNeed = async () => {
  const data = await fetchData<CommonSubServiceSection>('/services/web-development/section-three');
  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='main-common-padding flex flex-col gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title={data?.title as string} className='text-center' delay={delays.medium} />
        <div className='flex flex-row flex-wrap justify-center gap-8'>
          {data?.keyPoints?.map((item, index) => (
            <Card
              key={item?.id}
              index={index}
              title={item?.title as string}
              description={item?.description as string}
            />
          ))}
        </div>
        <CommonButton text='Contact us' href='/contact-us' className='mx-auto' />
      </div>
    </CommonAnimation>
  );
};

export default WhyNeed;

const Card = ({ index, title, description }: { index: number; title: string; description: string }) => {
  return (
    <Zoom duration={1500} fraction={0.2} triggerOnce>
      <div className='hover-scale-shadow-animation flex w-full flex-col gap-6 rounded-2xl bg-white p-6 sm:max-w-[342px] '>
        <div className='flex flex-row items-center gap-4'>
          <p
            className='w-fit rounded-lg bg-primary p-[11px]'
            style={{
              boxShadow: ' 3px 0px 4px 0px rgba(255, 117, 0, 0.22)',
            }}
          >
            <span className='rounded bg-white px-[0.4375rem] py-[0.3125rem]'>
              {String(index + 1)?.padStart(2, '0')}
            </span>
          </p>
          <CommonHeader title={title} />
        </div>
        <CommonParargraph text={description} />
      </div>
    </Zoom>
  );
};
