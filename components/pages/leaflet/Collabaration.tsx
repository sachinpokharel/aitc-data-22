import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const processSteps = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Comprehensive consultation to understand your business objectives and technical requirements.',
    icon: '/images/collab-1.png',
    height: 'h-[150px]',
    width: 'w-[150px]',
  },
  {
    id: 'planning',
    title: 'Planning',
    description: 'Detailed project documentation, including specifications, user stories, and timelines.',
    icon: '/images/collab-2.png',
    height: 'h-[150px]',
    width: 'w-[208.85px]',
  },
  {
    id: 'agile',
    title: 'Agile Development',
    description: 'Regular sprints, daily standups, and frequent client communication for continuous progress.',
    icon: '/images/collab-3.png',
    height: 'h-[150px]',
    width: 'w-[190px]',
  },
  {
    id: 'qa',
    title: 'Integrated QA',
    description: 'Quality assurance throughout development, reducing late-stage issues.',
    icon: '/images/collab-4.png',
    height: 'h-[150px]',
    width: 'w-[236.54px]',
  },
];

const Collabaration = () => {
  return (
    <section className='main-common-padding relative mx-auto mb-28 max-w-[1500px] pt-14 md:py-20 xl:py-24'>
      <div className='flex  flex-col gap-10 lg:flex-row lg:gap-[52px]'>
        {/* Left Column */}
        <div className='flex flex-[0.7]  flex-col gap-6 '>
          <CommonAnimation delay={0.2} className='flex flex-col gap-8'>
            <CommonTitleV2 main='Our Development Process' secondary='Transparency and Collaboration' />
            <CommonParargraph
              text='Our process maximizes transparency and encourages feedback'
              className='text-base font-normal text-mainBlack lg:text-lg'
            />
          </CommonAnimation>
          <div className='relative mt-4 size-[233px]'>
            <Image src='/images/collabaration.png' alt='Development Process' fill className='object-contain' />
          </div>
        </div>

        {/* Right Column - Grid Layout */}
        <div className='grid flex-1 grid-cols-2 gap-[40px]'>
          {processSteps.map((step, index) => (
            <Fade direction='up' key={step.id} triggerOnce className={`group relative h-[353px] w-[321px]`}>
              <div
                className={` rounded-2xl border border-[#E8E8FF] bg-[#3D2D720A] p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-lg ${index === 0 || index === 2 ? 'absolute left-0 top-14 mt-[60px]' : ''}`}
              >
                <div className='flex flex-col gap-10'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                      <div className='h-6 w-1.5  bg-primary'></div>
                      <h3 className='text-lg font-bold text-mainBlack'>{step.title}</h3>
                    </div>
                    <p className='text-base text-mainBlack'>{step.description}</p>
                  </div>

                  <div className={`mx-auto flex ${step.height} ${step.width}`}>
                    <Image
                      src={step.icon}
                      alt={step.title}
                      height={150}
                      width={236}
                      className='w-full object-contain'
                    />
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collabaration;
