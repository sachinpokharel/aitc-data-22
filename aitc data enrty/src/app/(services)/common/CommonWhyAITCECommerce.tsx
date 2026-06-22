import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import { type CommonWhyAITCECommerceDTO } from '@/types/common/CommonWhyAITCECommerceDTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const CommonWhyAITCECommerce = async ({ url, className }: { url: string; className?: string }) => {
  const data = await fetchData<CommonWhyAITCECommerceDTO>(url);

  return (
    <CommonAnimation className={className}>
      <div className='common-section common-padding max-w-[1350px]'>
        <div className='flex flex-col gap-8'>
          <CommonTitle
            title={data?.mainTitle ? data?.mainTitle : (data?.title as string)}
            className='text-center'
            delay={delays.medium}
          />
          {data?.description && (
            <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
          )}
        </div>

        <div className='grid w-full grid-cols-1 place-items-center gap-8 overflow-hidden  md:grid-cols-2 '>
          {data?.processItems?.map((item, index) => (
            <Slide
              key={item?.id}
              cascade={true}
              duration={900}
              direction={index % 2 === 0 ? 'left' : 'right'}
              triggerOnce
              className={cn(
                'hover-scale-shadow-animation   min-h-[203px] w-full max-w-[570px] rounded-2xl p-6 ',
                className ? 'bg-white' : '[background:linear-gradient(180deg,#F8F8FF_38.89%,#FFF_107.4%)]',
                (index + 1) % 2 !== 0 ? `md:last:col-span-2 md:last:place-self-center` : ''
              )}
            >
              <div className='flex flex-col gap-4  self-stretch '>
                <div className='flex flex-row items-center gap-4'>
                  <Arrow />
                  <CommonHeader title={item?.title} />
                </div>
                <CommonParargraph text={item?.description} />
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default CommonWhyAITCECommerce;
