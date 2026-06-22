import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceProcessSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const SEOProcess = async ({ url }: { url?: string }) => {
  const data = await fetchData<CommonSubServiceProcessSection>(url as string);

  return (
    <CommonAnimation className='main-common-padding  mx-auto flex max-w-[1354px]'>
      <div className=' flex w-full flex-col items-center justify-center gap-10  xl:flex-row xl:items-start'>
        <div className='top-1/4 flex flex-col  gap-12 xl:sticky '>
          <Image
            src={data?.image as string}
            width={600}
            height={600}
            alt='seo image'
            className='rounded-lg object-contain xl:max-h-[300px] xl:max-w-[485px]'
          />
          <CommonTitle title={data?.title} className='max-w-md text-center xl:text-left' />
        </div>

        <div className=' flex w-full flex-col gap-8 xmd:px-4  xl:max-w-[500px]'>
          {data?.processItems?.map((item, index) => (
            <div
              style={{
                backgroundColor: index % 2 === 0 ? '#fff6ef' : '#f8f8ff',
              }}
              key={item?.id}
              className=' flex flex-col  items-start gap-4 rounded-2xl p-6'
            >
              <div className='flex flex-row items-center gap-4'>
                <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                <p className='text-[22px] font-black'>{item?.title}</p>
              </div>
              <CommonParargraph text={item?.description} className='!text-base' />
              {item?.points && (
                <div className='flex flex-col gap-4 font-semibold capitalize leading-[150%] tracking-[0.32px] text-secondary'>
                  {item?.points?.map((point) => <p key={point}>{point}</p>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default SEOProcess;
