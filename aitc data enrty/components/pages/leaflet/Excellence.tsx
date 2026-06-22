import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TranslateXAnimation from '@/components/common/animation/TranslateXAnimation';
import TranslateYAnimation from '@/components/common/animation/TranslateYAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const Excellence = () => {
  return (
    <CommonAnimation className={'main-common-padding flex flex-col gap-14 overflow-x-hidden bg-white'}>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <CommonChip text='We serve quality' className='text-center' />
          <CommonTitleV2
            main='Quality Assurance'
            secondary='Our Commitment to Excellence'
            className='max-w-5xl text-center'
          />
        </div>

        <CommonParargraph
          textWithHtml={`At AITC International, quality is deeply integrated into every phase of our development lifecycle. As an <strong class='text-[#3D2D72]'>ISO 9001:2015 certified company</strong>, our robust QA practices ensure your software is secure, well-performing, and ready for real-world users.`}
          className='max-w-5xl text-center'
        />
      </div>
      <div className='mx-auto flex max-w-[1354px] flex-col items-center justify-center gap-[52px] lg:flex-row lg:items-start'>
        <TranslateYAnimation translateY='80px'>
          <Image src={'/images/puzzle.png'} alt='AITC Excellence' width={396} height={396} className=' rounded-lg' />
        </TranslateYAnimation>
        <div className='flex flex-col gap-10 lg:max-w-[580px]'>
          {qaProcessData?.map((item, index) => (
            <TranslateXAnimation key={index} translateX='50px' delay={index * 0.2}>
              <div key={index} className='flex flex-col gap-2'>
                <div className='flex flex-row gap-4'>
                  <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                  <p className='text-lg font-black leading-[150%] tracking-[0.36px]'>{item?.title}</p>
                </div>
                <CommonParargraph text={item?.description} />
              </div>
            </TranslateXAnimation>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Excellence;

const qaProcessData = [
  {
    id: 1,
    title: 'Comprehensive Testing',
    description:
      'We combine manual and automated testing including unit, integration, system, and user acceptance tests (UAT)—to catch issues early and maintain functional integrity throughout the project.',
  },
  {
    id: 2,
    title: 'Optimized Performance',
    description:
      'Software Applications are tested under varying loads to detect performance bottlenecks. We fine-tune speed and scalability to deliver smooth, consistent user experiences.',
  },
  {
    id: 3,
    title: 'Security-First Approach',
    description:
      'Our QA process includes in-depth vulnerability assessments, and code reviews. We follow industry best practices to meet strict security and compliance standards.',
  },
  {
    id: 4,
    title: 'Transparent Processes',
    description:
      'Integrated with agile workflows, our QA approach provides continuous feedback, regular updates, and clear communication keeping your project on track, within scope, and aligned with your expectations. ',
  },
];
