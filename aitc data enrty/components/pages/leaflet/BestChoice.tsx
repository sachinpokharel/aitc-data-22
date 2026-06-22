import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader, CommonTitleV2 } from '@/components/common/CommonTitle';

const BestChoice = () => {
  return (
    <div className='overflow-hidden bg-lightShad2'>
      <div className='common-section common-padding max-w-[1350px]'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <CommonChip text='We stand different' className='text-center' />
            <CommonTitleV2
              main='How AITC Can Be'
              secondary='Best Choice For Your Business'
              className='max-w-5xl text-center'
            />
          </div>
          <CommonParargraph
            text={
              'AITC International provides affordable software and IT solutions with uncompromised quality, making us a smarter alternative to providers in the U.S., Australia, and Europe. By leveraging Nepal’s highly skilled workforce, we deliver solutions that maximize value without compromise.'
            }
            className='max-w-4xl text-center'
          />
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {bestChoiceData?.map((item, index) => (
            <Fade
              direction='up'
              duration={800}
              triggerOnce
              delay={index * 300}
              key={item?.id}
              className='hover-scale-shadow-animation flex w-full flex-col  items-start gap-4 self-stretch rounded-2xl border border-[#E8E8FF] bg-white p-6 min844:max-w-[380px] xl:max-w-[520px] 2xxl:max-w-[500px]'
            >
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col items-start gap-4'>
                  <Image src={item?.image} alt={item?.title} width={64} height={64} />
                  <CommonHeader title={item?.title} />
                </div>

                <CommonParargraph text={item?.description} />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestChoice;

const bestChoiceData = [
  {
    id: 1,
    image: '/icons/best-3.svg',
    title: 'Cutting Edge Expertise',
    description:
      'Our developers specialize in the latest technologies, from enterprise software and cloud computing to DevOps and modern frameworks. By blending technical expertise with innovative practices, we deliver secure, scalable IT solutions that foster sustainable growth and accelerate digital transformation.',
  },
  {
    id: 2,
    image: '/icons/best-4.svg',
    title: 'Cost Reduction',
    description:
      'Our cost-efficient delivery model gives you access to world-class software and IT solutions at a fraction of the cost compared to the U.S., Australia, and Europe. By leveraging smart resource allocation and optimized workflows, we help you cut expenses without compromising on quality or performance',
  },
  {
    id: 3,
    image: '/icons/best-5.svg',
    title: 'Accelerated Development',
    description:
      'Our teams use Scrum, an Agile framework designed to help deliver projects efficiently through continuous, time-boxed cycles called sprints. Each sprint typically lasts 2 to 4 weeks and focuses on delivering a set of prioritized features or improvements.',
  },
  {
    id: 4,
    image: '/icons/best-1.svg',
    title: 'Progress Updates',
    description:
      "You'll receive regular updates covering completed tasks, new features, and fixed issues, giving you a clear and comprehensive view of your project’s status. This approach ensures full transparency throughout the entire process and keeps everyone aligned effortlessly.",
  },
  {
    id: 5,
    image: '/icons/best-2.svg',
    title: 'Seamless Collaboration',
    description:
      'We work on your schedule, providing real-time communication during agreed hours so you can set priorities, review progress, and make decisions quickly. This ensures smoother workflows, faster results, and a project that stays perfectly aligned with your goals.',
  },
];
