import { bannerDelays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type OurWorkHeroSection } from '@/types/ourwork/main';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

const Banner = async () => {
  const data = await fetchData<OurWorkHeroSection>('/our-work/hero-section');

  return (
    <CommonAnimation className='relative flex min-h-[50dvh] flex-col items-center justify-center gap-8 px-6'>
      <div
        className={`absolute inset-0 size-full bg-[#f8f8ff] opacity-20`}
        style={{
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='relative z-10 flex flex-col items-center justify-center gap-8 text-center text-white'>
        <CommonTitleH1 title={data?.title} className='md:max-w-xl' delay={bannerDelays.title} />
        <CommonButton href='/contact-us' text='Contact Us' className='w-fit' />
      </div>
    </CommonAnimation>
  );
};

export default Banner;
