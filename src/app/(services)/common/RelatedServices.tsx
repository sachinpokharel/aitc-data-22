import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import Link from 'next/link';
import { type RelatedServicesDTO } from '@/types/service/seo/SEODTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const RelatedServices = async ({ url }: { url: string }) => {
  const data = await fetchData<RelatedServicesDTO>(url);

  return (
    <CommonAnimation className='common-padding common-section max-w-[1400px] overflow-hidden'>
      <CommonTitle title={data?.mainTitle} className='text-center' delay={delays.medium} />
      <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
      <div className={cn(`grid w-full grid-cols-1  place-items-center gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-6  `)}>
        {data?.serviceShowcases?.map((item, index) => (
          <Slide
            style={{ background: 'linear-gradient(180deg, #EDEDFF 0%, #FFF 100%)' }}
            direction='up'
            key={item?.id}
            triggerOnce
            delay={delays.extralong}
            fraction={0.2}
            className={cn(
              'mx-auto flex h-[132px] w-full  flex-col items-center justify-center gap-4 rounded-2xl border border-white p-6 transition-all duration-300 hover:border-primary  lg:col-span-2  xl:max-w-[400px]',
              // for 2 items
              data?.serviceShowcases?.length % 2 !== 0 && data?.serviceShowcases?.length > 3
                ? `1 md:last:col-span-full md:last:place-self-center`
                : '',
              // for 5 items second last index
              data?.serviceShowcases?.length % 3 === 2 && index + 1 === data?.serviceShowcases?.length - 1
                ? `2   lg:col-span-3 lg:mr-0`
                : '',
              // for 5 items last index
              data?.serviceShowcases?.length % 3 === 2 && index + 1 === data?.serviceShowcases?.length
                ? `3 lg:!justify-self-start lg:last:col-span-2 `
                : '',
              // for 4 items last index
              data?.serviceShowcases?.length % 3 === 1 && index + 1 === data?.serviceShowcases?.length
                ? `3 lg:last:col-span-full `
                : ''
            )}
          >
            <Link
              // href={`/services/${item?.clientSlug}
              href={`/${item?.clientSlug}
            `}
            >
              <p className='text-lg font-black text-mainBlack'>{item?.title}</p>
            </Link>
          </Slide>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default RelatedServices;
