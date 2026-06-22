import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const EcommerceService = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='common-padding bg-lightShad2'>
      <div className='common-section max-w-[1350px] overflow-hidden'>
        <CommonTitle title={data?.title as string} className='text-center' />
        {data?.keyPoints?.map((item, index) => (
          <Slide
            key={item?.id}
            duration={1500}
            direction='up'
            triggerOnce
            damping={0.8}
            className={cn(
              index % 2 === 0 ? 'bg-[#ffeddd] lg:mr-64' : 'bg-white lg:ml-64',
              'flex flex-col gap-4 self-stretch rounded-2xl p-6'
            )}
          >
            <div>
              <CommonHeader title={item?.title as string} className='text-secondary' />
              <CommonParargraph text={item?.description as string} />
            </div>
          </Slide>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default EcommerceService;
