import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

import Description from './Description';

type GuidanceProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const ExpertGuidance = async () => {
  const data = await fetchData<GuidanceProps>('/insight/cta-section');

  return (
    <CommonAnimation className='aitc-intro main-common-padding flex flex-col items-center justify-center gap-10 bg-secondary lg:gap-[3.25rem]'>
      <CommonAnimation className='max-w-[1000px]'>
        <CommonTitle title={data?.title} className='text-center text-white' />
      </CommonAnimation>

      <CommonAnimation className='flex max-w-[1000px] flex-col gap-14'>
        <Description text={data?.description} image={data?.image} />
      </CommonAnimation>
    </CommonAnimation>
  );
};

export default ExpertGuidance;
