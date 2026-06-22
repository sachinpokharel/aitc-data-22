import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { type BannerSection } from '@/types/service';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

const Banner = async () => {
  const data = await fetchData<BannerSection>('/services/hero-section');

  return (
    <CommonAnimation>
      <BannerWrapper image={data?.bgImage} className='bg-lightShad2'>
        <div
          className={cn(
            'flex max-w-[700px] flex-col items-center justify-center gap-10 xmd:gap-12 xl:max-w-[547px] xl:items-start'
          )}
        >
          <CommonTitleH1 title={data?.title} className='text-center capitalize xl:text-left' delay={delays.long} />
        </div>
      </BannerWrapper>
    </CommonAnimation>
  );
};

export default Banner;
