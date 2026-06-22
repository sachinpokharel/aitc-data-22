import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const Design = async () => {
  const data = await fetchData<CommonSubServiceSection>('/services/web-development/additional-service');

  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='main-common-padding flex flex-col items-center gap-10 lg:gap-[3.25rem] '>
        <CommonTitle title={data?.title as string} className='max-w-[984px] text-center' />
        {data?.image && (
          <div className='images relative size-full h-[212px] xss:h-[262px] sm:w-[562px] xmd:h-[384px]'>
            <Image
              src={data?.image}
              alt='spotlight'
              fill
              sizes='calc(100vw - 2rem)'
              className=' rounded-t-2xl object-contain '
            />
          </div>
        )}
        <div className='flex flex-col gap-10'>
          <CommonParargraph text={data?.description as string} className='max-w-[984px] text-center' />
          <div className='flex flex-wrap justify-center gap-8'>
            {data?.keyPoints?.map((item) => (
              <div key={item?.id} className='flex flex-col gap-4 lg:max-w-[300px]'>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4 rotate-90' />
                  <CommonHeader title={item?.title as string} />
                </div>
                <CommonParargraph text={item?.description as string} className='text-center' />
              </div>
            ))}
          </div>
        </div>

        <CommonButton
          text='Book a free consultation'
          target='_blank'
          href='https://calendly.com/aitc-schedule/30min'
          className='mx-auto'
        />
      </div>
    </CommonAnimation>
  );
};

export default Design;
