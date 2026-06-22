import { fetchData } from '@/utils/getData';
import { isImgUrl } from '@/utils/isImgUrl';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import type { CommonSubServiceMultipleSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const SocialMediaServices = async ({ url, serviceTitle }: { url: string; serviceTitle: string }) => {
  const data = await fetchData<CommonSubServiceMultipleSection[]>(url);

  return (
    <CommonAnimation className='design-services common-padding   bg-lightShad2'>
      <div className='common-section max-w-[1350px] overflow-hidden'>
        <CommonTitle title={serviceTitle} className='text-center' />

        {data?.map((item, index) => (
          <Slide
            direction={index % 2 === 0 ? 'left' : 'right'}
            triggerOnce
            key={index}
            className=' rounded-2xl bg-white  lg:odd:ml-36  lg:even:mr-36'
          >
            <div className='flex flex-col gap-6 rounded-2xl  bg-white p-6'>
              <p className='text-left text-lg font-black leading-[150%] tracking-[0.36px] text-secondary'>
                {item?.title}
              </p>
              <div
                className={`flex flex-col gap-6 rounded-2xl bg-white ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className='flex flex-row md:w-1/2'>
                  {isImgUrl(item?.image) ? (
                    <Image
                      src={item?.image}
                      alt='spotlight'
                      width={500}
                      height={545}
                      className='max-h-[545px] w-full rounded-2xl object-cover'
                    />
                  ) : (
                    <video
                      src={item?.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='max-h-[545px] w-full rounded-2xl object-cover'
                    >
                      <track src='/video.vtt' kind='captions' />
                    </video>
                  )}
                </div>
                <div className='flex flex-col gap-4 md:w-1/2'>
                  <CommonParargraph text={item?.description} />
                  <div className='flex flex-col gap-4'>
                    {item?.points?.map((point) => (
                      <div key={point} className='flex flex-row items-center gap-4'>
                        <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                        <CommonParargraph key={point} text={point} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default SocialMediaServices;
