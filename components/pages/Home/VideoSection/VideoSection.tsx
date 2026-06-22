import { fetchData } from '@/utils/getData';
import type { VideoSectionProps } from '@/types/Home/videsection';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

import { FlipWords } from './FlipWords';

const words = [
  {
    name: 'Coding',
    icon: '/images/code.png',
    color: '#484BA0',
  },
  {
    name: 'Crafting',
    icon: '/images/crafting.png',
    color: '#8B50D7',
  },
  {
    name: 'Designing',
    icon: '/images/design.png',
    color: '#3F66F0',
  },
  {
    name: 'Engineering',
    icon: '/images/engineering.png',
    color: '#FF7500',
  },
];

const VideoSection = async () => {
  const data = await fetchData<VideoSectionProps>('/home/video-section');
  return (
    <CommonAnimation
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#FFFFFF',
      }}
      className="video-section-main overflow-x-hidden !bg-[#f8f8ff] max-sm:w-screen md:bg-[url('/svg/videosection.svg')]  "
    >
      <div className='common-section common-padding mx-auto max-w-[1400px]'>
        <CommonAnimation className='video-section-description flex flex-col gap-8' delay={0.6}>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex grow-0 flex-col items-center justify-center text-center text-[2rem] font-black text-mainBlack  xmd:text-[2.5rem] md:flex-row md:gap-2 lg:text-5xl'>
              <p>A Company</p>
              <FlipWords words={words} />
              <p>Success</p>
            </div>
            <CommonParargraph text={data?.description} className='text-center' />
          </div>
        </CommonAnimation>
        <CommonAnimation className='video-container-main flex size-full justify-center' delay={0.8}>
          <video
            src={data?.videoUrl}
            poster='/icons/Logo.png'
            autoPlay
            muted
            playsInline
            loop
            className='aspect-video w-full max-w-[1400px] rounded-2xl border-primary object-cover xmd:rounded-[28px]'
          >
            <track src='/video.vtt' kind='captions' />
          </video>
        </CommonAnimation>
        <CommonButton
          href='/contact-us'
          text='Explore more'
          variant='secondary'
          className='link-button bg-lightShad2'
          delay={0.2}
        />
      </div>
    </CommonAnimation>
  );
};

export default VideoSection;
