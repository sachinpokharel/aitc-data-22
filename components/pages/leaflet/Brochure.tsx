import { Fade } from 'react-awesome-reveal';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const journeySteps = [
  {
    id: 'consultation',
    title: 'Free Consultation',
    description: 'Discuss your project, timeline, and budget.',
  },
  {
    id: 'proposal',
    title: 'Detailed Proposal',
    description: 'Comprehensive scope, timeline, deliverables, and pricing.',
  },
  {
    id: 'pilot',
    title: 'Pilot Project Option',
    description: 'Evaluate our capabilities with minimal risk.',
  },
  {
    id: 'manager',

    title: 'Dedicated Project Manager',
    description: 'Your primary point of contact for seamless coordination.',
  },
  {
    id: 'documentation',
    title: 'Comprehensive Documentation',
    description: 'Full understanding of your new system.',
  },
];

const Brochure = () => {
  return (
    <section className='relative h-[768px] w-full bg-[url("/images/handshake.jpg")] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-gradient-to-r from-[#3D2D72] via-[#3D2D72]/80 to-transparent'></div>
      <div className='main-common-padding relative mx-auto h-full max-w-screen-3xl py-14 md:py-20 xl:py-24'>
        {/* Left Column */}
        <div className='flex w-[764px] flex-[0.6] flex-col gap-[52px] rounded-2xl border border-[#FFFFFF29] bg-[#3D2D729E] p-6 shadow-lg'>
          <CommonAnimation delay={0.2} className='flex flex-col gap-6'>
            <CommonTitleV2 main='Getting Started' secondary='Your Journey to Digital Excellence' invert />
            <CommonParargraph
              text='Our onboarding process is transparent and efficient'
              className='text-base font-normal text-gray-200 lg:text-lg'
            />
          </CommonAnimation>

          {/* Journey Steps */}
          <div className='grid grid-cols-2 gap-8'>
            {journeySteps.map((step) => (
              <Fade direction='up' key={step.id} triggerOnce className='relative'>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-2'>
                    <div className='h-6 w-1.5  bg-primary'></div>
                    <h3 className='text-lg font-bold text-white'>{step.title}</h3>
                  </div>
                  <p className='text-base font-light text-white'>{step.description}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
