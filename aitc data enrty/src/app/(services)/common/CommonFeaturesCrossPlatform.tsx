import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceMultipleSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TranslateXAnimation from '@/components/common/animation/TranslateXAnimation';
import TranslateYAnimation from '@/components/common/animation/TranslateYAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const CommonFeaturesCrossPlatform = async ({ className, url }: { className?: string; url?: string }) => {
  const data = await fetchData<CommonSubServiceMultipleSection[]>(url as string);

  return (
    <CommonAnimation className={cn(className)}>
      <div className='common-section common-padding max-w-[1350px] overflow-hidden '>
        <div className='flex w-full flex-col items-center gap-[3.25rem]  2xl:gap-[6.25rem]'>
          {data?.map((item, index) => (
            <div
              key={item?.id}
              className='flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:odd:flex-row-reverse'
            >
              <TranslateXAnimation translateX={index % 2 === 0 ? '60px' : '-60px'}>
                <Image
                  src={item?.image}
                  alt='spotlight'
                  width={545}
                  height={500}
                  className='max-h-[500px] min-h-[480px] w-full rounded-2xl object-contain lg:aspect-[2/1]'
                />
              </TranslateXAnimation>

              <div className='flex flex-col gap-14 lg:max-w-[615px]'>
                <div className='flex flex-col gap-8'>
                  <TranslateYAnimation>
                    <CommonTitle title={item?.title} className='text-center lg:text-left' />
                  </TranslateYAnimation>
                  <div className='flex flex-col gap-6'>
                    {item?.description ? (
                      <TranslateYAnimation translateY={'30px'}>
                        <CommonParargraph text={item?.description} className='text-left ' />
                      </TranslateYAnimation>
                    ) : null}
                    {item?.points && (
                      <>
                        {item?.points?.map((item) => (
                          <div key={item} className='flex flex-row  items-center gap-4'>
                            <Image src='/icons/arrow.png' alt='arrow' width={20} height={20} className='h-6 w-4' />
                            <CommonParargraph text={item} />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className='flex justify-center lg:justify-start'>
                  <CommonButton title='Contact us' href='/contact-us' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default CommonFeaturesCrossPlatform;
