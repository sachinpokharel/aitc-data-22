import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

type DigitalMarketingProps = {
  title: string;
  image: string;
  description: string;
};

const DigitalMarketing = async ({ url }: { url: string }) => {
  const data = await fetchData<DigitalMarketingProps>(url);
  return (
    <CommonAnimation className='main-common-padding flex max-w-[1350px] flex-col items-center gap-10 xsm:gap-[3.25rem] '>
      <CommonTitle title={data?.title} className='text-center' />
      <div>
        <Image src={data?.image} width={628} height={366} alt='digital' />
      </div>
      <CommonParargraph text={data?.description} className='max-w-[850px] text-center' />
      <CommonButton text='Get a free quote' href='/contact-us' className='mx-auto' />
    </CommonAnimation>
  );
};

export default DigitalMarketing;
