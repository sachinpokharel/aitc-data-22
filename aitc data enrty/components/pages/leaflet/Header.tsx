'use client';

import { cn } from '@/utils/cn';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';
import { Marquee } from '@/components/common/Marquee';

const chipItems = [
  { id: 'trend', text: 'Trend Analysis', bgColor: 'bg-[#D7CAFF]' },
  { id: 'manual', text: 'Manual Processes', bgColor: 'bg-[#FFF2E8]' },
  { id: 'vendor', text: 'Expensive vendor lock-ins', bgColor: 'bg-[#CAE9FF]' },
  { id: 'insights', text: 'Aggregated Insights', bgColor: 'bg-[#D7CAFF]' },
] as const;

const Header = () => {
  return (
    <section className='pb-24'>
      <div className='main-common-padding '>
        <div className='mx-auto flex h-[103px] w-[82px] flex-col items-center justify-center'>
          <Image src='/icons/logo.png' alt='AITC International' height={103} width={82} className='object-contain' />
        </div>
        <CommonTitleV2
          main='AITC International'
          secondary='Your Global Partner for Digital Excellence'
          className='mx-auto mb-8 max-w-5xl text-center leading-[4.5rem_!important] xmd:text-3xl 3xl:text-[78px]'
        />
        <div className='mt-4 flex flex-col gap-2'>
          <CommonParargraph
            className='mx-auto text-center font-medium lg:max-w-[900px] lg:text-lg'
            text='AITC helps growing teams fix what slows them down '
          />
          <div className='mt-4 flex w-full items-center justify-center gap-2 *:text-lg *:capitalize *:text-white'>
            <CommonChip text='Disconnected Systems' className='  rounded-full bg-mainBlack px-4 ' />
            <CommonChip text='Manual Processes' className='  rounded-full bg-primary px-4' />

            <CommonChip text='Scattered Data' className=' rounded-full bg-mainBlack px-4' />

            <CommonChip
              text='Expensive vendor lock-ins'
              className='rounded-full bg-[#0095FF]
        px-4'
            />
          </div>
        </div>
      </div>
      <div className='relative mt-12 h-[59px] w-full -rotate-2 overflow-hidden bg-[#E2DBFA]'>
        <Marquee className='absolute inset-0' repeat={4}>
          <div className='flex items-center'>
            {chipItems.map((item) => (
              <div key={item.id} className='flex items-center'>
                <CommonChip
                  text={item.text}
                  className={cn('rounded-full border border-white px-4 py-1 capitalize', item.bgColor)}
                />
                <div className='mx-4'>
                  <FaStar className='text-white' size={24} />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Header;
