import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const serviceItems = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'From corporate websites to complex enterprise applications. Expertise in responsive design and modern frameworks (React, Angular, Vue.js, Node.js, Python).',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description:
      'Native iOS/Android, cross-platform (React Native, Flutter), and Progressive Web Apps. Focus on performance, user experience, and app store optimization.',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Software Development',
    description:
      'Custom solutions for healthcare, finance, manufacturing, and logistics. Specialization in system integration, regulatory compliance, and scalability.',
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Custom solutions for healthcare, finance, manufacturing, and logistics. Specialization in system integration, regulatory compliance, and scalability.',
  },
  {
    id: 'cloud',
    title: 'Cloud Computing & DevOps',
    description: 'Cloud migration, infrastructure optimization, and robust deployment pipelines.',
  },
];

const Portfolio = () => {
  return (
    <section className='main-common-padding relative mx-auto max-w-[1500px] py-14 md:py-20 xl:py-24'>
      <div className='flex flex-col gap-10 lg:flex-row lg:gap-16'>
        {/* Left Column */}
        <div className='flex flex-col gap-6 lg:w-2/5'>
          <CommonAnimation delay={0.2} className='flex flex-col gap-8'>
            <CommonTitleV2 main='Our Comprehensive' secondary='Service Portfolio' />
            <CommonParargraph
              text='AITC International offers a full spectrum of digital services, covering the entire software development lifecycle. We tailor our approach to your specific needs:'
              className='text-base font-normal text-[#475467] lg:text-lg'
            />
          </CommonAnimation>

          <div className='relative mt-4 size-[354px]'>
            <Image
              src='/images/observe.gif'
              alt='Service Portfolio'
              fill
              className='object-contain'
              style={{ transform: 'scaleX(-1)' }}
            />
          </div>
        </div>

        {/* Right Column - Grid Layout */}
        <div className='lg:w-3/5'>
          <div className='grid gap-9'>
            {serviceItems.map((item) => (
              <Slide direction='right' delay={0.2} key={item.id} triggerOnce>
                <div className={`group relative h-[112px] rounded-2xl bg-[#3D2D720F] px-4 pb-4 pt-[42px]`}>
                  <div className='absolute -top-4 left-0 rounded-t-full rounded-br-full bg-primary px-4 py-[6.5px]'>
                    <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                  </div>
                  <div className='flex items-start'>
                    <p className=' text-lg text-mainBlack'>{item.description}</p>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
