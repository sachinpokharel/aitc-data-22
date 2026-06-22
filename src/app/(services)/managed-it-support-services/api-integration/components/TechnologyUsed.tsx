import { fetchData } from '@/utils/getData';
import { Fade } from 'react-awesome-reveal';
import { type CommonSubServiceSection } from '@/types/index';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';
import Arrow from '@/components/common/icon/Arrow';

const TechnologyUsed = async ({ url }: { url?: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url as string);

  return (
    <div className='bg-lightShad2'>
      <div className='common-section common-padding max-w-[1350px]'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title as string} className='text-center' />
          <CommonParargraph text={data?.description as string} className='text-center' />
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {data?.keyPoints?.map((item, index) => (
            <Fade
              direction='up'
              duration={800}
              triggerOnce
              delay={index * 300}
              key={item?.id}
              className='hover-scale-shadow-animation flex w-full max-w-[432px] flex-col items-start gap-4 self-stretch rounded-2xl bg-gradient-to-b from-[#FFF] to-[#F8F8FF] p-6 xl:max-w-[500px]'
            >
              <div>
                <div className='flex flex-row items-center gap-4'>
                  <Arrow />
                  <CommonHeader title={item?.title as string} />
                </div>

                <CommonParargraph text={item?.description as string} />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyUsed;
