import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { type SubServicesListDTO } from '@/types/service';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import SubServicePoint from './SubServicePoint';

const Services = async ({ url, isHeaderColor }: { url: string; isHeaderColor?: boolean }) => {
  const subServicesList = await fetchData<SubServicesListDTO>(`/services/sub-service/${url}`);

  return (
    <CommonAnimation className={cn('service', isHeaderColor ? 'bg-lightShad2' : 'bg-white')}>
      <div className='main-common-padding flex max-w-screen-midlg flex-col justify-center gap-10  xmd:gap-[3.25rem] lg:flex-row'>
        <div className='flex w-full flex-col gap-8 lg:w-1/2'>
          <CommonTitle title={subServicesList?.title} delay={delays.medium} />
          <CommonParargraph text={subServicesList?.description} delay={delays.long} />
        </div>
        <div className='flex w-full flex-col gap-8 lg:w-1/2'>
          {subServicesList?.subServices?.map((item, index) => (
            <SubServicePoint
              key={item?.id}
              className={index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}
              title={item?.title}
              slug={item?.slug}
              index={index}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Services;
