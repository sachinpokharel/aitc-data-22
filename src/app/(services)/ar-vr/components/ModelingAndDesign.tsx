import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const ModelingAndDesign = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='mx-auto overflow-x-hidden bg-lightShad2'>
      <div className='common-padding common-section max-w-[1350px]'>
        <div className=' flex flex-col items-center gap-14'>
          <div className='flex flex-col place-content-center items-start gap-14 md:flex-row md:items-start '>
            <div className='flex flex-col gap-14 md:w-2/5'>
              <div className='flex flex-col gap-6 '>
                <CommonTitle title={data?.title as string} className='text-center md:text-start' />
                <CommonParargraph text={data?.description as string} className='text-center md:text-start' />
              </div>
              <CommonButton href='/contact-us' text='Contact us' className='mx-auto md:mx-0' />
            </div>
            <div className='flex items-center '>
              <Image
                src={data?.image as string}
                alt='seo'
                width={500}
                height={600}
                className='rounded-2xl object-cover xl:max-h-[600px]'
              />
            </div>
          </div>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default ModelingAndDesign;
