import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

interface CTADTO {
  id: string;
  mainTitle: string;
  description: string;
  buttonText?: string;
}

const ServicesCTA = async ({ url, buttonText }: { url: string; buttonText?: string }) => {
  const data = await fetchData<CTADTO>(url);

  return (
    <div
      style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className='main-common-padding common-section  flex flex-col gap-14 bg-[url("/images/cta_bg.svg")] text-white'
    >
      <div className='flex max-w-[1000px]  flex-col gap-8'>
        <CommonTitle title={data?.mainTitle} className='text-center text-white' delay={delays.medium} />
        <CommonParargraph text={data?.description} className='text-center text-white' delay={delays.long} />
      </div>
      <CommonAnimation>
        <CommonButton
          target='_blank'
          href='https://calendly.com/aitc-schedule/30min'
          text={buttonText ?? 'Book a free consultation'}
        />
      </CommonAnimation>
    </div>
  );
};

export default ServicesCTA;
