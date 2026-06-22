import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

type Quote = {
  quote: string;
  id: number;
};

const ServiceDescription = async () => {
  const data = await fetchData<Quote>('/services/quote');

  return (
    <CommonAnimation className='common-section common-padding 2xxl:w-2/3'>
      <CommonParargraph className='text-pretty text-center lg:text-[22px] lg:leading-[33px]' text={`${data?.quote}`} />
      {/* <TextAnimate
        by='word'
        className='text-pretty text-center font-medium text-mainBlack xmd:text-lg lg:text-[22px] lg:leading-[33px]'
      >{`${data?.quote}`}</TextAnimate> */}
      <CommonButton href='/aboutus' text='Learn More' className='mx-auto ' />
    </CommonAnimation>
  );
};

export default ServiceDescription;
