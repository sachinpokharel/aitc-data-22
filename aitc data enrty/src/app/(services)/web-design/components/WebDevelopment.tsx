import { fetchData } from '@/utils/getData';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

import { MiddleImage } from '../../software-development/components/MainImage';

const WebDevelopment = async () => {
  const data = await fetchData<CommonSubServiceSection>('/services/web-development/section-two');
  return (
    <CommonAnimation className='benefits-web-development relative overflow-hidden bg-lightShad2'>
      {/* background circle images */}
      <div className='absolute -left-24 -top-24 z-[1] hidden h-[487px] w-[554px] rounded-full  bg-[#F4F4FF] 2xl:block' />
      <div className='absolute bottom-1/2 z-[1] size-[140px] rotate-[15deg] rounded-full bg-gradient-to-b from-lightShad2  to-[#FFEAD9] sm:bottom-64 lg:bottom-12 lg:left-12 2xl:left-[450px]' />
      <div className='absolute top-28 z-[4] hidden  size-[175px] rotate-[75deg] rounded-full bg-gradient-to-b  from-[#C9CBFE] to-lightShad2 lg:right-12 lg:block 2xl:right-[400px]' />
      <div className='absolute bottom-0 z-[1] h-[740px] w-full translate-y-1/2 rounded-full bg-[#F4F4FF] lg:-right-72 lg:w-[740px] lg:translate-y-0 2xl:-right-44' />

      {/* main content */}
      <div className='main-common-padding relative z-[5] flex max-w-[1100px] flex-col items-center gap-10 lg:gap-[3.25rem]'>
        <CommonTitle title={data?.title as string} className='text-center' />
        <div className='grid max-w-[1080px] grid-cols-1 place-items-center gap-8 xmd:grid-cols-2 lg:grid-cols-3'>
          <MiddleImage index={Math.ceil((data?.keyPoints?.length as number) / 2)} image={data?.image as string} />
          {data?.keyPoints?.map((item, index) => (
            <CommonAnimation
              key={item?.id}
              delay={(index + 1) / 4}
              className='reason-item flex w-full flex-row items-center rounded-lg bg-white p-4  xmd:w-fit md:min-w-[300px] md:max-w-[317px] '
            >
              <p
                className='rounded-lg bg-primary p-[11px]'
                style={{
                  boxShadow: ' 3px 0px 4px 0px rgba(255, 117, 0, 0.22)',
                }}
              >
                <span className='rounded bg-white px-[0.4375rem] py-[0.3125rem] text-base'>
                  {String(index + 1)?.padStart(2, '0')}
                </span>
              </p>

              <p className='px-4'>{(item?.title?.charAt(0).toUpperCase() as string) + item?.title?.slice(1)}</p>
            </CommonAnimation>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default WebDevelopment;
