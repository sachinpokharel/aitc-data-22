import { fetchData } from '@/utils/getData';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonTitle from '@/components/common/CommonTitle';
import Description from '@/components/pages/aboutus/OurStory/Description';

const ServiceOverview = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='ourstory common-padding mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem]'>
      <div className='flex flex-col items-center gap-2'>
        <CommonTitle title={data?.title as string} className='text-center' />
      </div>
      <Description text={data?.description as string} image={data?.image as string} />
      <CommonButton href='/ourwork' text='Explore our work' />
    </CommonAnimation>
  );
};

export default ServiceOverview;
