import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type CommonSubServiceProcessSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

import ProcessTimeline from './ProcessTimeline';

const DesignProcess = async ({ url }: { url?: string }) => {
  const data = await fetchData<CommonSubServiceProcessSection>(url as string);

  return (
    <CommonAnimation className='common-section common-padding max-w-[1350px]'>
      <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
      <ProcessTimeline data={data?.processItems} />
    </CommonAnimation>
  );
};

export default DesignProcess;
