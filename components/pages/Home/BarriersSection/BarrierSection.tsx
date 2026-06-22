import { delays } from '@/utils/animation-config';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const BarrierSection = () => {
  return (
    <CommonAnimation>
      <div className='barriers-small flex flex-col items-center justify-center gap-10 bg-lightShad2 py-[60px] lg:py-24 xl:hidden'>
        <Image src='/images/barrier_small.png' alt='spotlight' width={2000} height={2000} className='size-full' />
        <CommonTitle title='Together, we break barriers' delay={delays.medium} className='text-center' />
        <div className='flex flex-col items-center justify-center gap-4 px-4 text-center lg:px-16'>
          <CommonParargraph
            className=' text-xl font-black text-mainBlack'
            text='We turn challenges into Cutting-edge solutions'
            delay={delays.long}
          />
          <CommonParargraph
            delay={delays.long}
            text='We understand that true excellence can only be achieved through the collective power of teamwork and the constant pursuit of innovation. These two pillars form the bedrock of our organizational culture, driving us to push boundaries and deliver solutions that redefine industry standards. These core values are not just buzzwords but the driving force behind our success, shaping our journey as we continue to redefine the boundaries of what is possible.'
          />
          <CommonButton text='Learn More' href='/aboutus' delay={delays.longer} />
        </div>
      </div>
      <div className='barriers-large common-padding bg-lightShad2'>
        <div className='mx-auto hidden  max-w-screen-xl flex-row justify-center gap-28  xl:flex'>
          <div className='flex h-[60dvh]'>
            <Image src='/images/barrier.png' alt='spotlight' width={2000} height={2000} className='size-full ' />
          </div>
          <div className='flex h-[60dvh] w-[680px] flex-col place-content-center gap-10 py-24 max-xmd:gap-4 '>
            <CommonTitle title='Together, we break barriers' delay={delays.medium} />
            <div>
              <CommonParargraph
                className='pb-2 text-xl font-black text-mainBlack'
                text='We turn challenges into Cutting-edge solutions'
                delay={delays.long}
              />
              <CommonParargraph
                delay={delays.long}
                text='We understand that true excellence can only be achieved through the collective power of teamwork and the constant pursuit of innovation. These two pillars form the bedrock of our organizational culture, driving us to push boundaries and deliver solutions that redefine industry standards. These core values are not just buzzwords but the driving force behind our success, shaping our journey as we continue to redefine the boundaries of what is possible.'
              />
            </div>

            <CommonButton delay={delays.longer} text='Learn More' href='/aboutus' />
          </div>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default BarrierSection;
