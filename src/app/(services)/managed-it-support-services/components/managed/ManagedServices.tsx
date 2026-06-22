import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type SubServicesListDTO } from '@/types/service';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import { CustomLeftToRightFlip } from '@/components/common/animation/CustomFlip';
import CommonTitle from '@/components/common/CommonTitle';

import Card from './Card';

const ManagedServices = async ({ url }: { url: string }) => {
  const subServicesList = await fetchData<SubServicesListDTO>(`/services/sub-service/${url}`);

  return (
    <CommonAnimation className='main-common-padding flex max-w-[1400px] flex-col gap-[3.25rem]'>
      <CommonTitle title={subServicesList?.title} className='text-center' delay={delays.medium} />
      <div className='flex flex-row flex-wrap justify-center gap-8'>
        <CustomLeftToRightFlip>
          {subServicesList?.subServices?.map((item, index) => <Card key={item?.id} item={item} index={index} />)}
        </CustomLeftToRightFlip>
      </div>
    </CommonAnimation>
  );
};

export default ManagedServices;
