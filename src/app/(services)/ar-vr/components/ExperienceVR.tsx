import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const ExperienceVR = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='mixed-reality-experiences common-padding common-section max-w-[1460px]'>
      <CommonTitle title={data?.title as string} className='text-center' />
      <Image
        src={data?.image as string}
        alt='check'
        width={1000}
        height={1000}
        className='h-[370px] w-[550px] rounded-2xl object-cover'
      />
      <CommonParargraph text={data?.description as string} className='text-center' />
      <div className='flex flex-wrap justify-center gap-8'>
        {data?.keyPoints?.map((item, index) => (
          <CommonAnimation
            key={item?.id}
            delay={index * 0.2 + 0.2}
            className='flex flex-col gap-4 rounded-2xl bg-lightShad2 p-4 md:max-w-[365px]'
          >
            <p className='rounded-lg bg-secondary p-2 text-lg font-black leading-[150%] tracking-[0.36px] text-white'>
              {item?.title as string}
            </p>
            <CommonParargraph text={item?.description as string} />
          </CommonAnimation>
        ))}
      </div>
      <CommonButton href='/contact-us' text='Get a free quote' />
    </CommonAnimation>
  );
};

export default ExperienceVR;
