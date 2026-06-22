import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { type SolutionsDTO } from '@/types/ourwork/specificpage/SolutionsDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const Solutions = async ({ id }: { id: string }) => {
  const data = await fetchData<SolutionsDTO>(`/our-work/product/section/six/${id}`);
  return (
    <div className={cn(`common-padding common-section flex flex-col gap-12 bg-white`)}>
      <CommonTitle title={data?.title} />
      <div className='flex flex-wrap place-content-center items-center gap-y-10 overflow-hidden  max-xl:gap-8 2xxl:w-3/4'>
        {data?.keyPoint?.map((item, index) => (
          <Fade
            key={item?.id}
            direction='up'
            cascade
            damping={0.3}
            delay={index * 100}
            triggerOnce
            className={`hover-scale-shadow-animation mx-auto flex min-h-[250px] w-full flex-col  gap-6 rounded-lg bg-lightShad2 p-6 max-2xl:min-h-[270px] xmd:w-[370px] lg:w-[430px] xl:w-[48%]`}
          >
            <div>
              <div className='flex flex-row items-center gap-4'>
                <Image
                  src={`/icons/arrow.png`}
                  alt='features'
                  width={100}
                  height={100}
                  className='h-6 w-3 object-contain'
                />
                <CommonHeader title={item?.title} />
              </div>
              <CommonParargraph text={item?.description} />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
