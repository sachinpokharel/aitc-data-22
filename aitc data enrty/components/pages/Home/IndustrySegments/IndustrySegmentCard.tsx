import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';

const IndustrySegmentCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <Fade direction='up' triggerOnce fraction={0.3}>
      <div className='industry-segment-card hover-scale-shadow-animation  flex max-h-[360px] w-full flex-col gap-6 rounded-2xl bg-gradient-to-b from-[#F8F8FF] to-[#FFF] p-6 max-xl:max-h-[336px] lg:max-w-[334px] xl:max-w-[360px] 2xxl:max-w-[400px] '>
        <div className='flex flex-row items-center gap-4'>
          <Image src={icon} alt='spotlight' width={200} height={200} className='size-[72px] object-contain' />
          <CommonParargraph text={title} className='text-lg font-black text-mainBlack' />
        </div>
        <p className='text-base text-mainBlack'>{description}</p>
      </div>
    </Fade>
  );
};

export default IndustrySegmentCard;
