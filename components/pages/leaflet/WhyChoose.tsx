import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const advantages = [
  {
    id: 'unmatched-value',
    title: 'Unmatched Value',
    description: 'Cost savings combined with high-quality, expert services.',
  },
  {
    id: 'global-synergy',
    title: 'Global-Local Synergy',
    description: 'Seamless collaboration with our English-proficient Nepal based team.',
  },
  {
    id: 'comprehensive-expertise',
    title: 'Comprehensive Expertise',
    description: 'Handling projects of any size and complexity.',
  },
  {
    id: 'flexible-engagement',
    title: 'Flexible Engagement',
    description: 'Tailored models (fixed-price, T&M, dedicated team) to suit your needs.',
  },
  {
    id: 'long-term',
    title: 'Long-Term Partnership',
    description: 'Ongoing support, maintenance, and optimization for sustained value.',
  },
];

const WhyChoose = () => {
  return (
    <section className='main-common-padding relative mx-auto flex h-full max-w-[1500px] flex-col items-center justify-center gap-[52px] py-14 md:py-20 xl:py-24'>
      <CommonAnimation delay={0.2} className=' max-w-3xl'>
        <CommonTitleV2 main='Why Choose AITC' secondary='Your Strategic Advantage' className='text-center' />
      </CommonAnimation>
      <div className='flex  items-start justify-center gap-16 lg:flex-row lg:gap-[52px]'>
        {/* Left Column */}
        <div className='flex flex-col gap-6'>
          <div className='relative h-[545px] w-[420px]'>
            <Image src='/images/why-choose.jpg' alt='Why Choose AITC' fill className='rounded-3xl object-cover' />
          </div>
        </div>

        {/* Right Column - Advantages Grid */}
        <div className='relative grid h-[545px] grid-cols-1 place-content-between gap-16 md:grid-cols-2'>
          <div className='absolute left-1/2 top-0  space-y-2'>
            <div className=' size-[160px] bg-[#845EFF66] blur-[100px]'></div>
            <div className=' absolute right-5 h-[170px] w-[230px] bg-[#FF750066] blur-[100px]'></div>
          </div>
          {advantages.map((advantage, index) => (
            <Fade direction='up' key={advantage.id} triggerOnce className={`relative z-40 h-[142px] w-[330px]`}>
              <div
                className={`group relative flex ${index === 2 && 'ml-8'}  flex-col gap-4 ${index === 1 && 'mt-24'} ${index === 3 && 'mt-32'} `}
              >
                <div className='w-fit rounded-full bg-primary px-4 py-2'>
                  <h3 className='text-base font-medium text-white'>{advantage.title}</h3>
                </div>
                <div
                  className={`h-[86px] w-[330px] rounded-xl border border-[#E8E8FF] bg-[#3D2D720F] p-4 transition-all duration-300 hover:shadow-lg `}
                >
                  <p className='font-lato text-base font-medium text-mainBlack'>{advantage.description}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
