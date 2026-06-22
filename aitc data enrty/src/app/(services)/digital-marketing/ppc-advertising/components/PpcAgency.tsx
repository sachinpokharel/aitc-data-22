import { fetchData } from '@/utils/getData';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const PpcAgency = async () => {
  const data = await fetchData<CommonSubServiceSection>('/services/sub-service/ppc-advertising/section-three');

  return (
    <CommonAnimation className='main-common-padding mx-auto flex max-w-[1300px] flex-col gap-16 sm:flex-row'>
      <div className='flex flex-col gap-10 sm:max-w-[550px]  lg:gap-[3.25rem]'>
        <div className='flex flex-col gap-8 '>
          <CommonTitle title={data?.title as string} className='max-w-lg' />
          {/* <CommonParargraph text={data?.description as string} /> */}
        </div>

        <CommonButton href='/contact-us' text='Contact us' />
      </div>
      <div className=' flex  flex-col gap-6 sm:max-w-[550px] '>
        {data?.keyPoints?.map((item) => (
          <div className='flex flex-row items-center gap-2' key={item?.id}>
            <Arrow />
            <CommonParargraph text={item?.title as string} />
          </div>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default PpcAgency;
