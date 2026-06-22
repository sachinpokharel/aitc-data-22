import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const CommonWhyCMS = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);
  return (
    <CommonAnimation className='main-common-padding flex max-w-[1350px] flex-col justify-center gap-10 md:flex-row md:gap-20'>
      <div className='flex flex-col gap-12 md:w-2/3'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title as string} delay={delays.medium} />
          <CommonParargraph text={data?.description as string} delay={delays.long} />
        </div>
        <CommonButton text='Get a free quote' href='/contact-us' />
      </div>
      <div className='flex flex-col gap-6 md:w-1/3'>
        {data?.keyPoints?.map((item) => (
          <div key={item?.id} className='flex flex-row items-center gap-4'>
            <Arrow />
            <CommonParargraph text={item?.title as string} />
          </div>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default CommonWhyCMS;
