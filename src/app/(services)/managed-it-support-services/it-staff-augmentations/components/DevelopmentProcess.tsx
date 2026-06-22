import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { type DevelopmentProcessDTO } from '@/types/service/developmentProcess/developmentProcessDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import DesktopDevelopmentProcess from './DesktopDevelopmentProcess';

const DevelopmentProcess = async ({ url }: { url: string }) => {
  const data = await fetchData<DevelopmentProcessDTO>(url);

  return (
    <div className='development-process bg-lightShad2'>
      <div className='main-common-padding flex max-w-screen-midlg flex-col items-center justify-center gap-10 lg:gap-[3.25rem] '>
        <div className='flex flex-col items-center gap-8'>
          <CommonTitle title={data?.title} className='text-center' />
          <CommonParargraph text={data?.description} className='text-center' />
        </div>
        <DesktopDevelopmentProcess data={data?.processItems} />

        <div className='align-center grid grid-cols-1 place-content-center gap-x-10 gap-y-6 xmd:grid-cols-2  lg:hidden'>
          {data?.processItems?.map((item, index) => {
            return (
              <div className='flex flex-col gap-3' key={item?.id}>
                <h3 className={'flex items-start justify-start gap-3 text-lg font-black  text-mainBlack  '}>
                  <span className={cn(' text-[2.5rem] ', index % 2 === 0 ? 'text-primary' : 'text-secondary')}>
                    {String(index + 1).padStart(2, '0')}
                  </span>{' '}
                  {item?.title}
                </h3>
                <CommonParargraph text={item?.description} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
