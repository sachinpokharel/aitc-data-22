import { bannerDelays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { isImgUrl } from '@/utils/isImgUrl';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

import { type BannerDTO } from '../../mobile-application-development/android/components/Banner';

const ThreeImageBanner = async ({ url, type }: { url: string; type?: string }) => {
  const data = await fetchData<BannerDTO>(url);
  return (
    <CommonAnimation className='main-common-padding relative z-10  flex flex-col items-center justify-center bg-lightShad2  lg:h-[641px]'>
      <Image2 image={data?.image[0]?.url} />

      <div className='relative flex w-full max-w-[1340px] flex-col items-center justify-center  gap-10  '>
        <Image1 image={data?.image[1]?.url} />
        <Image3 image={data?.image[2]?.url} />
        <div className='flex w-full max-w-[85%] flex-col items-center justify-center  '>
          <p className='z-50 text-center text-lg font-black capitalize leading-[150%] tracking-[0.36px] text-primary xl:text-left'>
            {type ? 'AR/VR Development services' : 'Digital marketing services'}
          </p>

          <Fade
            direction='up'
            duration={800}
            damping={0.2}
            triggerOnce
            className={
              '  z-50 max-w-[955px] px-10 text-center text-2xl font-black leading-[2.5rem_!important]  text-mainBlack  xmd:text-[2.5rem] lg:text-5xl lg:leading-[3.78rem_!important] '
            }
          >
            <h1>{data?.title?.charAt(0)?.toUpperCase() + data?.title?.slice(1)}</h1>
          </Fade>
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <CommonParargraph
            text={data?.description}
            className='z-50 max-w-[955px] text-center'
            delay={bannerDelays.description}
          />
          <CommonButton href='/contact-us' text='Contact Us' className='w-fit' />
        </div>
      </div>
    </CommonAnimation>
  );
};

export default ThreeImageBanner;

const Image1 = ({ image }: { image: string }) => {
  return (
    <div className='absolute left-0 top-[70%] hidden items-center  justify-center xmd:flex lg:top-[10%]'>
      {isImgUrl(image) ? (
        <Image
          src={image}
          alt='digital marketing'
          width={193}
          height={169}
          className='h-[67px] w-[77px] rounded-2xl xmd:h-[109px] xmd:w-[125px] lg:h-[169px] lg:w-[193px] '
        />
      ) : (
        <video
          src={image}
          autoPlay
          muted
          playsInline
          loop
          className='w-[115px] rounded-2xl xmd:w-[150px] lg:w-[163px]'
        />
      )}
    </div>
  );
};
const Image2 = ({ image }: { image: string }) => {
  return (
    <div className='absolute bottom-0 left-[58%] hidden items-center justify-center xmd:flex'>
      {isImgUrl(image) ? (
        <Image
          src={image}
          alt='digital marketing'
          width={163}
          height={166}
          className='size-[115px] rounded-t-2xl xmd:size-[150px] lg:h-[166px] lg:w-[163px]'
        />
      ) : (
        <video
          src={image}
          autoPlay
          muted
          playsInline
          loop
          className='w-[115px] rounded-t-2xl xmd:w-[150px] lg:w-[163px]'
        >
          <track src='/video.vtt' kind='captions' />
        </video>
      )}
    </div>
  );
};
const Image3 = ({ image }: { image: string }) => {
  return (
    <div className='absolute right-0 top-[-20%] hidden items-center justify-center xmd:flex lg:right-[-5%] lg:top-[-45%] '>
      {isImgUrl(image) ? (
        <Image
          src={image}
          alt='digital marketing'
          width={193}
          height={169}
          className='h-[67px] w-[77px] rounded-2xl xmd:h-[109px] xmd:w-[125px] lg:h-[169px] lg:w-[193px] '
        />
      ) : (
        <video src={image} autoPlay muted playsInline loop className='w-[115px] rounded-2xl xmd:w-[150px] lg:w-[163px]'>
          <track src='/video.vtt' kind='captions' />
        </video>
      )}
    </div>
  );
};
