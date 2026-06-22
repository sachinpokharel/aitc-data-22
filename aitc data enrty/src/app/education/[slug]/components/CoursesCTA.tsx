import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

interface CTADTO {
  mainTitle: string;
  description: string;
}

const CoursesCTA = ({ data }: { data: CTADTO }) => {
  return (
    <CommonAnimation
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className='main-common-padding common-section  flex flex-col gap-14 bg-[url("/images/cta_bg.svg")] text-white'
    >
      <div className='flex max-w-[1000px]  flex-col gap-8'>
        <CommonTitle title={data?.mainTitle} className='text-center text-white' />
        <CommonParargraph text={data?.description} className='text-center text-white' />
      </div>
      <CommonButton target='_blank' href='https://calendly.com/aitc-schedule/30min' text='Book a free consultation' />
    </CommonAnimation>
  );
};

export default CoursesCTA;
