import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type TechToolsDTO } from '@/types/service/seo/SEODTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

const TechnologyUsed = async ({ className, url }: { className?: string; url: string }) => {
  const data = await fetchData<TechToolsDTO>(url);

  return (
    <CommonAnimation className={cn(`common-padding common-section`, className)}>
      <CommonTitle className='text-center' title={data?.mainTitle} delay={delays.long} />
      <div className='hide-scrollbar flex w-full max-w-[1000px] flex-row items-center justify-center gap-16 overflow-x-auto p-4'>
        {data?.techToolShowcases?.map((item) => (
          <div key={item?.id} className='shrink-0'>
            <Image
              src={item?.icon}
              alt={item?.name}
              width={300}
              height={300}
              draggable={false}
              className='aspect-square size-[70px] rounded-2xl object-contain'
            />
          </div>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default TechnologyUsed;
