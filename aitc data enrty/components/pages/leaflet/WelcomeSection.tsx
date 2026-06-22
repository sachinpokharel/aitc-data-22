import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const WelcomeSection = () => {
  return (
    <section className='main-common-padding relative mx-auto max-w-[1500px] py-14 md:py-20 xl:py-24'>
      <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
        <CommonAnimation delay={0.2} className='flex max-w-[500px] flex-col gap-6'>
          <CommonTitleV2 main='Welcome To The Future of ' secondary='Software Development' />
          <CommonParargraph
            text='AITC International delivers world-class digital solutions with unmatched affordability from Nepal. We empower US businesses with the tools, technologies, and talent for success. Partner with us to gain a dedicated team committed to your success, crafting digital experiences that drive results and deliver measurable business value.'
            className='max-w-[600px] text-balance text-base font-normal text-[#475467] lg:text-lg'
          />
        </CommonAnimation>
        <div className='relative h-[400px] w-full rounded-2xl lg:size-[419px]'>
          <Image src='/images/gather.png' alt='AITC Team Gathering' fill className='object-cover' priority />
          <Slide direction='up'>
            <p className='absolute -left-52 -top-12  z-10  max-w-[445px] -rotate-6  rounded-3xl border-[5px] border-white bg-[#42307D] px-6 py-3 text-xl font-medium uppercase text-white'>
              WE DON&apos;T JUST BUILD SOFTWARES, WE BUILD CONFIDENCE IN EVERY CLICK, EVERY TASK & EVERY RESULT.
            </p>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
