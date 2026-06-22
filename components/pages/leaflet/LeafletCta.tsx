import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const LeafletCTA = () => {
  return (
    <div
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className='common-padding common-section flex flex-col gap-14 bg-[url("/images/cta_bg.svg")] text-white'
    >
      <div className='flex flex-col gap-8 2xxl:w-2/3'>
        <CommonTitle
          title='Quality, Security & Compliance, All in One Trusted Partner'
          className='text-center text-white'
        />
        <CommonParargraph text='Connect with AITC International Today' className='text-center text-white' />
      </div>
      <CommonButton target='_blank' href='https://calendly.com/aitc-schedule/30min' text='Book a free consultation' />
    </div>
  );
};

export default LeafletCTA;
