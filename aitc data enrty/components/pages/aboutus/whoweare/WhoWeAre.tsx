import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import { type MemberResponse } from '@/types/aboutus/member';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const WhoWeAre = async () => {
  const { sectionTitle, description, mainTitle, members } = await fetchData<MemberResponse>(
    '/about-us/aitc-members-section'
  );

  return (
    <CommonAnimation className='main-common-padding mx-auto flex    flex-col items-center gap-10  xmd:gap-[3.25rem]'>
      <div className='flex max-w-[1054px] flex-col  gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={mainTitle} delay={delays.medium} className='text-center' />
        </div>
        <CommonParargraph text={description} className='text-center' delay={delays.long} />
      </div>
      <div className=' grid w-full max-w-[1154px]  grid-cols-1 place-items-center items-start gap-10 sm:grid-cols-2  lg:grid-cols-6 '>
        {members?.map((item, index) => (
          <Slide
            key={item?.id}
            cascade={true}
            direction='up'
            triggerOnce
            duration={600}
            className={cn(
              ' w-full max-w-screen-xsm lg:col-span-2 ',
              members?.length % 2 !== 0 && 'max-lg:last:col-span-full',
              members?.length % 3 === 1 && 'lg:last:col-span-2 lg:last:col-start-3 lg:last:place-self-center',
              members?.length % 3 === 2 && index + 1 === members?.length - 1 && `lg:col-start-2`,
              members?.length % 3 === 2 && `lg:last:col-span-2`
            )}
          >
            <Card name={item?.name} profile={item?.image} designation={item?.designation} link={item?.link} />
          </Slide>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default WhoWeAre;
