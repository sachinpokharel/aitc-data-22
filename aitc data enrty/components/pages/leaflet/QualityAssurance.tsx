import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const qualityItems = [
  {
    id: 'testing',
    title: 'Rigorous Testing',
    description:
      'Combination of automated and manual testing (unit, integration, system, UAT) to identify and resolve issues early.',
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Evaluation under various loads. Identifying bottlenecks for fast, responsive applications.',
  },
  {
    id: 'security',
    title: 'Robust Security',
    description:
      'Vulnerability assessments, penetration testing, and code reviews. Adherence to industry best practices and compliance.',
  },
  {
    id: 'management',
    title: 'Transparent Project Management',
    description:
      'Agile methodologies, regular updates, and open communication ensure projects are on time and within budget.',
  },
];

const QualityAssurance = () => {
  return (
    <section className='main-common-padding relative mx-auto flex max-w-[1500px] flex-col gap-14 py-14 md:py-20 xl:py-24'>
      <CommonAnimation delay={0.2} className='mx-auto flex flex-col gap-8'>
        <CommonTitleV2
          main='Quality Assurance Our Commitment to'
          secondary='Excellence'
          className='max-w-3xl text-center'
        />
      </CommonAnimation>
      <div className='flex  justify-between gap-10 lg:flex-row lg:gap-16'>
        <div className='lg:w-[615px]'>
          <div className='grid gap-9'>
            {qualityItems.map((item) => (
              <Slide direction='right' delay={0.2} key={item.id} triggerOnce>
                <div className='group relative h-[112px] rounded-2xl bg-[#3D2D720F] px-4 pb-4 pt-[42px]'>
                  <div className='absolute -top-4 left-0 rounded-t-full rounded-br-full bg-[#FF6B00] px-4 py-[6.5px]'>
                    <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                  </div>
                  <div className='flex items-start'>
                    <p className='text-lg text-mainBlack'>{item.description}</p>
                  </div>
                </div>
              </Slide>
            ))}
          </div>
        </div>

        <div className='relative h-[400px] w-full rounded-2xl lg:size-[475px]'>
          <Image src='/images/quality.gif' alt='AITC Team Gathering' fill className='object-cover' priority />
          <Slide direction='up'>
            <p className='absolute -left-52 -top-12  z-10  max-w-[438px] rotate-2  rounded-3xl  bg-[#42307D] px-6 py-3 text-xl font-medium uppercase text-white'>
              quality is our fundamental at AITC, OUR COMPREHENSIVE QA PROCESSES ENSURE FUNCTIONALITY, PERFORMANCE
              AND,RELIABILITY
            </p>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
