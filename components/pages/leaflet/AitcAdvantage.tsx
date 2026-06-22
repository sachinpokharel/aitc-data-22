import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const advantageItems = [
  {
    id: 'cutting-edge',
    title: 'Cutting Edge Expertise',
    description:
      'Our developers master the latest technologies, from AI/ML to Cloud, delivering future-proof solutions',
    icon: '/images/advantage/a-1.png',
  },
  {
    id: 'cost-reduction',
    title: 'Significant Cost Reduction',
    description: 'Continuous work cycles mean faster project completion and quicker market entry.',
    icon: '/images/advantage/a-2.png',
  },
  {
    id: 'accelerated',
    title: 'Accelerated Development',
    description: 'Continuous work cycles mean faster project completion and quicker market entry.',
    icon: '/images/advantage/a-3.png',
  },
  {
    id: 'progress',
    title: 'Wake Up to Progress',
    description: 'Receive daily updates on completed features and resolved issues.',
    icon: '/images/advantage/a-4.png',
  },
  {
    id: 'collaboration',
    title: 'Seamless Collaboration',
    description:
      'Our team is available in your evenings for real-time discussions, ensuring clear communication and alignment.',
    icon: '/images/advantage/a-5.png',
  },
];

const AitcAdvantage = () => {
  return (
    <section className='main-common-padding relative mx-auto max-w-[1500px] py-14 md:py-20 xl:py-24'>
      <div className='flex flex-col gap-10 lg:flex-row lg:gap-16'>
        {/* Left Column */}
        <div className='flex flex-col gap-6 lg:w-[35%]'>
          <CommonTitleV2 main='The AITC Advantage' secondary='Why Nepal is Your Strategic Choice' />
          <CommonParargraph
            text="Nepal is a leading destination for software development outsourcing. AITC International leverages the country's unique advantages:"
            className='text-base font-normal text-[#475467] lg:text-lg'
          />
          <div className='relative mt-4 h-[181px] w-[213px]'>
            <Image src='/images/fast-paced.png' alt='Fast Paced Development' fill className='object-contain' />
          </div>
        </div>

        {/* Right Column - Grid Layout */}
        <div className='lg:w-[65%]'>
          <div className='grid gap-[70px] sm:grid-cols-2'>
            {advantageItems.map((item) => (
              <Fade direction='up' key={item.id} triggerOnce>
                <div className='group relative h-[200px] rounded-2xl bg-[#3D2D720A] p-2 transition-all duration-300 hover:bg-white hover:shadow-lg'>
                  <div className='absolute -left-6 -top-4 rounded-full bg-[#FF6B00] px-4 py-[6.5px] text-white'>
                    <h3 className='text-lg font-semibold '>{item.title}</h3>
                  </div>
                  <div className='flex items-center gap-6 px-4 pb-4 pt-[40px]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      height={80}
                      width={80}
                      className='flex size-[80px] flex-[0.3] object-contain'
                    />

                    <p className=' flex flex-[0.7] text-lg text-[#475467]'>{item.description}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AitcAdvantage;
