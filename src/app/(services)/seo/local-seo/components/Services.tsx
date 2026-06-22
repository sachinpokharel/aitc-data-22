import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const Services = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);
  return (
    <CommonAnimation className='services bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1248px] flex-col  gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title={data?.title as string} className='text-center' />
        <div className='sercieslist flex w-full flex-row flex-wrap gap-8 overflow-hidden sm:gap-10 lg:gap-[3.25rem]'>
          {data?.keyPoints?.map((item, index) => (
            <Service
              key={item?.id}
              index={index}
              title={item?.title as string}
              description={item?.description as string}
              image={item?.image as string}
            />
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Services;

const Service = ({
  index,
  title,
  description,
  image,
}: {
  index: number;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Slide direction={'up'} triggerOnce duration={1500} damping={0.5}>
      <div
        className={cn(
          `flex flex-col gap-8 rounded-2xl bg-white p-6 xmd:flex-row lg:w-4/5`,
          index % 2 == 0 ? 'mr-auto' : 'ml-auto'
        )}
      >
        <div className='flex flex-col gap-4'>
          <CommonHeader title={title} className='text-secondary' />
          <CommonParargraph text={description} className='xmd:text-base' />
        </div>
        <div>
          <Image src={image} alt='kho' width={326} height={217} />
        </div>
      </div>
    </Slide>
  );
};
