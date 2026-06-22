import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type DesingServiceDTO } from '@/types/service/seo/SEODTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const DesignServices = async ({ url }: { url: string }) => {
  const data = await fetchData<DesingServiceDTO>(url);

  return (
    <CommonAnimation className='design-services common-padding bg-lightShad2'>
      <div className='common-section max-w-[1350px]'>
        <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
        {data?.keyPoints?.map((item, index) => (
          <div
            key={index}
            className='flex max-w-[984px] flex-col gap-6 rounded-2xl bg-white p-6 lg:odd:ml-64  lg:even:mr-64 '
          >
            <CommonHeader
              title={item?.title}
              className='text-center text-lg font-black leading-[150%] tracking-[0.36px] text-secondary md:text-left'
            />
            <div
              className={`flex flex-col gap-6 rounded-2xl bg-white ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className='flex flex-row md:w-1/2'>
                <Image
                  src={item?.image}
                  alt='spotlight'
                  width={500}
                  height={545}
                  className='max-h-[545px] w-full rounded-2xl object-cover'
                />
              </div>
              <div className='flex flex-col gap-4 md:w-1/2'>
                <CommonParargraph text={item?.description} />
                {item?.bulletPoints?.map((bulletPoint) => (
                  <div key={bulletPoint?.id} className='flex flex-col gap-2 rounded-lg bg-lightShad2 p-4'>
                    <CommonHeader
                      title={bulletPoint?.title}
                      className=' text-lg font-black leading-[150%] tracking-[0.36px] text-mainBlack'
                    />
                    <CommonParargraph text={bulletPoint?.description || ''} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default DesignServices;
