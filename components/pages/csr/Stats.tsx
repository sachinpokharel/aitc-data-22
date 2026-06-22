import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const sustainabilityStats = [
  {
    percentage: '80%',
    description: 'Reduction in plastic usage in the office space',
    icon: '/images/stats/sta-1.svg',
  },
  {
    percentage: '+150',
    description: 'Plants added to the office space',
    icon: '/images/stats/sta-2.svg',
  },
  {
    percentage: '100%',
    description: 'e-Waste recycled annually',
    icon: '/images/stats/sta-3.svg',
  },
];

const Stats = () => {
  return (
    <section
      className='relative  overflow-hidden bg-[url("/images/cta_bg.svg")] lg:h-[628px]'
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background Pattern */}
      <div className='main-common-padding relative mx-auto flex max-w-[1550px] flex-col items-center justify-between gap-[40px]  py-14  md:py-20 lg:flex-row xl:py-24 '>
        <div className='relative flex flex-col  gap-6 lg:w-[727px] '>
          <CommonAnimation className='flex flex-col items-center gap-6 lg:items-start '>
            {/* Header Section */}
            <CommonChip text='SUSTAINABILITY' className='bg-[#554783] text-white' />
            <CommonTitleV2 main='We' secondary='Respect the Planet' invert className='text-center lg:text-left' />
            <CommonParargraph
              text="At AITC, sustainability isn't a side mission — it's built into everything we do. From green office practices to energy-smart systems, we're reducing waste, cutting carbon, and building with care."
              className='max-w-[900px] text-center text-lg text-lightShad2 lg:text-left'
            />
            <p className='text-center text-xl font-semibold text-primary lg:text-left'>
              Because progress should never come at the planet&apos;s expense.
            </p>
          </CommonAnimation>

          {/* Stats Grid */}
          <div className='z-20 grid grid-cols-2 place-content-center justify-items-center gap-8 xmd:grid-cols-3'>
            {/* <Fade direction='up' triggerOnce cascade delay={0.2}> */}
            {sustainabilityStats.map((stat, index) => (
              <Fade
                direction='up'
                triggerOnce
                cascade
                delay={0.2}
                key={index}
                className={`flex  max-w-[162px] items-center justify-center md:max-w-[220px] lg:max-w-full  ${index === 2 ? 'col-span-2  justify-self-center xmd:col-span-1' : ''}`}
              >
                <div>
                  <div className='group flex  flex-col  items-start justify-center gap-4 rounded-xl bg-[#554783] p-4 max-lg:min-h-[156px] lg:h-[132px] '>
                    <div className='flex items-center justify-center gap-2'>
                      <div className='relative flex size-[36px]'>
                        <Image src={stat.icon} alt={stat.description} fill className='object-contain' />
                      </div>
                      <h3 className='text-lg font-bold text-white'>{stat.percentage}</h3>
                    </div>
                    <p className='text-base text-white'>{stat.description}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <div className='relative h-[355px] w-[327px] '>
          <Image src='/images/globe-plant.png' alt='Globe Pattern' fill className='object-contain' />
        </div>
      </div>
    </section>
  );
};

export default Stats;
