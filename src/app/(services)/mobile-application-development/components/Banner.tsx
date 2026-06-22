import { fetchData } from '@/utils/getData';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

import ServiceCommonBanner from '../../common/ServiceCommonBanner';

export interface BannerDTO {
  id: number;
  title: string;
  description: string;
  image: Image[];
}

export interface Image {
  id: number;
  url: string;
}

const Banner = async ({
  primarybuttonLink,
  primaryButtonText,
  secondarybuttonLink,
  secondarybuttonText,
}: {
  primarybuttonLink: string;
  primaryButtonText: string;
  secondarybuttonLink: string;
  secondarybuttonText: string;
}) => {
  const data = await fetchData<BannerDTO>('/services/app-development/hero-section');
  return (
    <CommonAnimation className='common-padding flex  flex-col items-center justify-center gap-10 overflow-hidden  bg-lightShad2 pt-[3.75rem] sm:pt-20'>
      <div className='max-w-[984px]'>
        <ServiceCommonBanner
          isColumn
          isSecondaryButton
          title={data?.title}
          description={data?.description}
          chip='Mobile Application Development'
          primarybuttonLink={primarybuttonLink}
          primarybuttonText={primaryButtonText}
          secondarybuttonLink={secondarybuttonLink}
          secondarybuttonText={secondarybuttonText}
        />
      </div>

      <div className='images pointer-events-none flex w-[1800px]  flex-row justify-center gap-4 max-xmd:h-[100px]  xmd:place-items-end '>
        <div className='flex flex-col items-center gap-4 self-end'>
          <Fade direction='up' triggerOnce>
            <div className='relative h-[99px] w-[236px]'>
              <Image
                src={data?.image[0].url}
                fill
                alt={data?.image[0].id?.toString()}
                draggable={false}
                className='rounded-2xl'
              />
            </div>
          </Fade>
          <Fade direction='up' triggerOnce delay={200}>
            <div className='relative h-[145px] w-[236px]'>
              <Image
                src={data?.image[1].url}
                fill
                alt={data?.image[1].id?.toString()}
                draggable={false}
                className='rounded-t-2xl'
              />
            </div>
          </Fade>
        </div>
        <Fade direction='up' triggerOnce delay={300}>
          <div className='relative h-[167px] w-[190px]'>
            <Image
              src={data?.image[2].url}
              fill
              alt={data?.image[2].id?.toString()}
              draggable={false}
              className='rounded-t-2xl'
            />
          </div>
        </Fade>
        <Fade direction='up' triggerOnce delay={400}>
          <div className='xss: relative h-[97px] w-[128px]  xmd:h-[180px] xmd:w-[235px]'>
            <Image
              src={data?.image[3].url}
              fill
              alt={data?.image[3].id?.toString()}
              draggable={false}
              className='rounded-t-2xl'
            />
          </div>
        </Fade>
        <Fade direction='up' triggerOnce delay={500}>
          <div className='relative h-[109px] w-[129px] xmd:h-[202px] xmd:w-[235px]'>
            <Image
              src={data?.image[4].url}
              fill
              alt={data?.image[4].id?.toString()}
              draggable={false}
              className='rounded-t-2xl'
            />
          </div>
        </Fade>
        <div className='flex flex-col items-center gap-4'>
          <Fade direction='up' triggerOnce delay={400}>
            <div className='relative h-[70px] w-[99px] xmd:h-[129px] xmd:w-[180px]'>
              <Image
                src={data?.image[5].url}
                fill
                alt={data?.image[5].id?.toString()}
                draggable={false}
                className='rounded-2xl'
              />
            </div>
          </Fade>
          <Fade direction='up' triggerOnce delay={300}>
            <div className='relative h-[55px] w-[99px] xmd:h-[101px] xmd:w-[180px]'>
              <Image
                src={data?.image[6].url}
                fill
                alt={data?.image[6].id?.toString()}
                draggable={false}
                className='rounded-t-2xl'
              />
            </div>
          </Fade>
        </div>
        <Fade direction='up' triggerOnce delay={100}>
          <div className='relative h-[180px] w-[236px]'>
            <Image
              src={data?.image[7].url}
              fill
              alt={data?.image[7].id?.toString()}
              draggable={false}
              className='rounded-t-2xl'
            />
          </div>
        </Fade>
        <Fade direction='up' triggerOnce>
          <div className='relative h-[205px] w-[236px]'>
            <Image
              src={data?.image[8].url}
              fill
              alt={data?.image[8].id?.toString()}
              draggable={false}
              className='rounded-t-2xl'
            />
          </div>
        </Fade>
      </div>
    </CommonAnimation>
  );
};

export default Banner;
