import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const Header = () => {
  return (
    <section className='common-padding relative mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-[116px] pb-[85px] pt-[52px] xmd:p-[100px] xl:flex-row xl:py-[135px]  3xl:px-[100px]'>
      {/* Top Section - Chip */}
      <CommonAnimation
        delay={0.2}
        className='flex flex-1 flex-col items-center justify-center gap-4 xl:items-start xl:justify-start'
      >
        <div className='flex w-fit items-center justify-center gap-2 rounded-full bg-lightShade1 px-4 py-2 '>
          <Image src='/images/hand-hold.svg' alt='Hand Hold' width={24} height={24} />
          <span className={'font-lato text-sm font-medium uppercase text-mainBlack xss:text-base'}>
            CORPORATE SOCIAL RESPONSIBILITY
          </span>
        </div>
        {/* Middle Section - Title and Description */}
        <div className='flex max-w-[730px] flex-col items-center justify-center gap-8 lg:items-start lg:justify-start'>
          <CommonTitleV2
            main='Tech That Cares'
            secondary='Innovation That Gives Back'
            className='max-w-xl text-center max-sm:max-w-sm lg:max-w-2xl xl:text-start'
          />
          <CommonParargraph
            text="At AITC, we believe technology should serve humanity. Our commitment goes beyond code - we're building bridges to education, sustainable futures, and inclusive communities worldwide."
            className='max-w-xl text-center text-base text-mainBlack max-xmd:text-balance lg:max-w-2xl lg:text-lg xl:text-start'
          />
        </div>
      </CommonAnimation>

      {/* Bottom Section - Additional Info */}
      <div className='relative h-[365px] w-[308px]  xmd:h-[595px] xmd:w-[502px] '>
        <Image
          src='/images/helping-group.jpg'
          alt='Eco Friendly'
          fill
          className=' z-10 rounded-bl-2xl rounded-br-[66px] rounded-tl-[66px]
rounded-tr-2xl object-cover '
        />

        <div
          className='
        absolute left-0 top-0 h-[365px] w-[308px] bg-[linear-gradient(147.58deg,rgba(255,170,72,0.168)_2.19%,rgba(59,0,255,0.24)_99.82%)] blur-[68px] xmd:h-[595px] xmd:w-[502px]'
        />
        {/* <Image src='/images/bg-gradient.png' alt='bg-gradient' width={800} height={800} /> */}

        {/* <div className='absolute inset-0 z-20 bg-gradient-to-r from-[#FF75001C] to-[#FFFFFF00] bg-blend-screen'></div> */}

        <div className='absolute  -right-4  -top-8 size-[80px]  rounded-full bg-[#8560FF45] xss:-right-8 xss:size-[100px] '></div>
        <div className='absolute -bottom-8 -left-2 size-[80px] rotate-[7.34deg]  rounded-2xl bg-[#FF8C2B4D] xss:-left-8 xss:size-[99.1912px]'></div>

        <Slide
          direction='down'
          triggerOnce
          className=' absolute -left-2 top-4 z-20 xss:-left-8 lg:-left-16'
          delay={0.5}
        >
          <div className='box-shadow-[8px_18px_34px_0px_rgba(61,45,114,0.11)] flex h-[69px] w-[185px] rotate-[4.97deg] items-center justify-center gap-2 rounded-lg border border-[#E3E3FF] bg-white px-4 py-[12px] shadow-xl *:rotate-0'>
            <div className='relative size-[28px]'>
              <Image src='/images/volunteer.svg' alt='Eco Friendly' fill className='object-contain' />
            </div>
            <div className='flex flex-col'>
              <span className='text-base font-bold'>A Helping Hand</span>
              <span className=' text-sm '>To Society</span>
            </div>
          </div>
        </Slide>

        <Slide
          direction='up'
          triggerOnce
          className='absolute -right-4 bottom-6 z-20 xss:-right-10 lg:-right-28 xl:-right-16 3xl:-right-28'
          delay={0.8}
        >
          <div className='box-shadow-[8px_18px_34px_0px_rgba(61,45,114,0.11)] flex h-[69px] w-[209px] rotate-[-3.75deg] items-center justify-center gap-2 rounded-lg border border-[#E3E3FF] bg-white px-4 py-[12px] shadow-xl *:rotate-0'>
            <div className='relative size-[28px]'>
              <Image src='/images/tree.svg' alt='Eco Friendly' fill className='object-contain' />
            </div>
            <div className='flex flex-col'>
              <span className='text-base font-bold'>Eco-Friendly Tech</span>
              <span className=' text-sm '>Sustainable Future</span>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Header;
