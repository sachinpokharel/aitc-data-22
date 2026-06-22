import { fetchData } from '@/utils/getData';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const SoftwareMaintenanceBenefits = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='main-common-padding flex max-w-[1500px] flex-col justify-center gap-10 xl:flex-row '>
      <div className='flex flex-col gap-12 max-xl:items-center xl:w-[408px] 2xxl:w-[620px]'>
        <CommonTitle title={data?.title as string} className='text-center xl:text-left' />
        <CommonButton text='Get a free quote' href='/contact-us' />
      </div>
      <div className='flex flex-wrap justify-center gap-8 '>
        {data?.keyPoints?.map((item) => (
          <div key={item?.id} className='flex w-full flex-col items-center gap-4 md:max-w-[294px] xl:w-[620px] '>
            <CommonHeader title={item?.title as string} className='w-full text-center lg:text-left' />
            <CommonParargraph text={item?.description as string} className='w-full text-center lg:text-left' />
          </div>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default SoftwareMaintenanceBenefits;
