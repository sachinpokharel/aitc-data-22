import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceProcessSection } from '@/types/index';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const QAProcess = async ({ url }: { url?: string }) => {
  const data = await fetchData<CommonSubServiceProcessSection>(url as string);

  return (
    <div className='  bg-lightShad2  '>
      <div className='main-common-padding mx-auto flex  w-full max-w-[1300px]  flex-col  items-center justify-center  gap-14  xl:flex-row xl:items-start'>
        <div className='  flex flex-col gap-12 *:text-center xmd:text-start *:lg:text-left xl:sticky xl:top-[20%] '>
          <CommonTitle title={data?.title} />
          <CommonParargraph text={data?.description} />
          <CommonButton
            target='_blank'
            href='https://calendly.com/aitc-schedule/30min'
            text='Book a free consultation'
            className='mx-auto xmd:mx-0'
          />
        </div>
        <div className=' sticky top-10 flex flex-col gap-8 overflow-hidden px-4  xl:max-w-[700px]'>
          {data?.processItems?.map((item, index) => (
            <div key={item?.description} className=' flex flex-col items-start gap-4 rounded-2xl bg-white p-6'>
              <div className='flex flex-col items-start gap-4 xmd:flex-row xmd:items-center'>
                <p className='whitespace-nowrap rounded bg-primary p-1 text-lg font-medium leading-[150%] tracking-[0.36px] text-white'>
                  Step {index + 1}
                </p>
                <CommonHeader title={item?.title} className='text-secondary' />
              </div>
              <Image
                src={item?.image}
                alt='spotlight'
                width={500}
                height={500}
                className='max-h-[250px] w-full rounded-2xl object-cover'
              />
              <CommonParargraph text={item?.description} className='!text-base' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QAProcess;
