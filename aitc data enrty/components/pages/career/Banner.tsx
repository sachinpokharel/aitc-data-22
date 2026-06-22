import { bannerDelays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

interface BannerProps {
  bgImage: string;
  description: string;
  title: string;
}

const Banner = async () => {
  const data = await fetchData<BannerProps>('/career/hero-section');

  return (
    <CommonAnimation>
      <BannerWrapper image={data?.bgImage}>
        <div
          className={cn(
            'flex max-w-[616px] flex-col items-center justify-center gap-10 xmd:gap-12 xl:max-w-[547px] xl:items-start',
            data?.description && 'gap-8'
          )}
        >
          <CommonTitleH1
            title={data?.title}
            className='text-center capitalize xl:text-left'
            delay={bannerDelays.title}
          />
          <div className='flex flex-col items-center gap-6 xl:items-start'>
            {data?.description && (
              <CommonParargraph
                text={data?.description}
                className='text-center lg:text-start'
                delay={bannerDelays.description}
              />
            )}{' '}
            <div className='flex flex-row gap-4 '>
              <span className='inline-block text-lg font-medium text-primary'>.Innvoate</span>
              <span className='inline-block text-lg font-medium text-secondary'>.Inspire</span>
              <span className='inline-block text-lg font-medium text-mainBlack'>.Achieve</span>
            </div>
            {/* <CommonButton href='/career?tab=job-openings' text='View job openings' /> */}
            <CommonButton
              target='_blank'
              href='https://career.mercury360.com/aitc-international-1acee98c'
              text='View job openings'
            />
          </div>
        </div>
      </BannerWrapper>
    </CommonAnimation>
  );
};

export default Banner;
