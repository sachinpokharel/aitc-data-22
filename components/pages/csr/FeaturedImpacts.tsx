import { fetchData } from '@/utils/getData';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

type ContributionCategory = {
  id: string;
  title: string;
  createdAt: string;
};

type FeaturedImpact = {
  id: string;
  type: string;
  title: string;
  imageUrl: string;
  featured: boolean;
  description: string;
  createdAt: string;
  contributionCategory: ContributionCategory;
};

const FeaturedImpacts = async () => {
  const data = await fetchData<FeaturedImpact[]>('/social-responsibility/get-feature-contributions');

  return (
    <section className='main-common-padding relative mx-auto flex max-w-[1612px] flex-col gap-[52px] py-14 md:py-20 xl:py-24'>
      {/* Header Section */}
      <CommonAnimation delay={0.2} className='flex w-full flex-col items-center justify-center gap-4'>
        <CommonChip text='Featured Impacts' />
        <CommonTitleV2 main='Real Stories' secondary='Real Impact' className='text-center' />
        <CommonParargraph
          text="Real voices, real change. These stories reflect how our efforts have empowered individuals and communities - through education, healthcare, and hands-on support where it's needed most."
          className='w-full max-w-3xl text-balance text-center text-base text-mainBlack lg:text-lg'
        />
      </CommonAnimation>

      {/* Impact Stories */}
      <div className=' flex flex-col gap-[40px]'>
        {data?.map((impact) => (
          <Fade
            direction='up'
            key={impact?.id}
            triggerOnce
            className='max-h-[597px] rounded-2xl border border-[#E5E5FF] bg-[linear-gradient(to_bottom,_#FBFBFF_10%,__#C5B9EE_60%)] p-6  xl:min-h-[280px] xl:bg-[linear-gradient(to_right,_#FBFBFF_60%,__#C5B9EE_100%)]'
          >
            <div className='bg-linear group relative overflow-hidden rounded-lg xl:bg-[#FBFBFF]  '>
              <div className='flex size-full flex-col gap-8 lg:gap-12 xl:flex-row'>
                {/* Left Content */}
                <div className='flex w-full flex-1 flex-col   gap-6 xl:max-w-[711px]'>
                  <div className='flex items-center justify-center gap-2 xmd:justify-start'>
                    <Image
                      src={'/icons/arrow.png'}
                      alt='features'
                      width={100}
                      height={100}
                      className='h-6 w-4 object-contain '
                    />
                    <CommonParargraph text={impact?.title} className='break-words font-semibold text-primary' />
                  </div>

                  <hr className='h-px bg-[#D6D6FF] ' />

                  <p className='text-base text-mainBlack lg:text-lg'>{impact?.description}</p>
                </div>

                {/* Right Image */}
                <div className='relative flex h-[223px] w-full rounded-lg   xmd:h-[294px] min844:h-[345px] lg:h-[345px]  xl:h-[231px] xl:w-[521px] '>
                  <Image src={impact.imageUrl} alt={impact.title} fill className='rounded-lg object-cover' />
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border-2 border-[#FFFFFF] bg-primary px-2 py-1 text-base font-medium capitalize text-white xl:left-1/2 xl:top-4 xl:-translate-x-1/2 2xl:left-4 2xl:top-2'>
                    {impact.contributionCategory.title}
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default FeaturedImpacts;
