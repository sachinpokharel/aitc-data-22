import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const EcommerceFeatures = async ({ url, className }: { url?: string; className?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url as string);
  return (
    <CommonAnimation className={`common-padding ${className}`}>
      <div className='common-section max-w-[1350px]'>
        <CommonTitle title={data?.title as string} className='text-center' delay={delays.long} />
        <CommonParargraph text={data?.description as string} className='text-center' delay={delays.longer} />
        <div className=' mx-auto flex flex-wrap items-center justify-center gap-8'>
          {data?.keyPoints?.map((item, index) => (
            <CommonAnimation
              delay={(index + 1) * 0.4}
              key={item?.id}
              className='group flex w-full items-center gap-4 self-stretch rounded-lg p-4 [background:linear-gradient(90deg,#F8F8FF_6%,#EDEDFF_100%)] md:max-w-[300px] xl:min-w-[300px]'
            >
              <Image
                src={'/icons/arrow.png'}
                alt='features'
                width={100}
                height={100}
                className='h-6 w-4 object-contain '
              />
              <CommonParargraph
                text={item?.title as string}
                className='transition-all duration-300 group-hover:translate-x-1'
              />
            </CommonAnimation>
          ))}
        </div>
        <div>
          <CommonButton href='/contact-us' text='Get a free quote' />
        </div>
      </div>
    </CommonAnimation>
  );
};

export default EcommerceFeatures;
