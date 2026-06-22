import { cn } from '@/utils/cn';
import { type ProcessItem } from '@/types/service/developmentProcess/developmentProcessDTO';
import CommonParargraph from '@/components/common/CommonParargraph';

const DesktopDevelopmentProcess = ({ data }: { data: ProcessItem[] }) => {
  return (
    <div
      className='hidden grid-cols-4 lg:grid'
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('/svg/developmentprocess.svg')`,
      }}
    >
      {data?.map((item, index) => {
        return (
          <>
            {index % 2 == 0 ? (
              <>
                <div className='-mt-3 mr-3 flex flex-col gap-3 '>
                  <h3
                    style={{
                      background: `linear-gradient(90deg, rgba(255, 117, 0, 0) 0%, rgba(255, 117, 0, 0.08) 100%)`,
                    }}
                    className={'flex flex-row gap-3   rounded text-end text-lg font-black text-primary '}
                  >
                    {item?.title}{' '}
                    <span className={'text-[2.5rem] text-primary'}>{String(index + 1).padStart(2, '0')}</span>
                  </h3>
                  <CommonParargraph text={item?.description} className='text-end ' />
                </div>
                <div
                  className={cn(
                    'relative size-full  border-dashed border-[#C8BEE8]',
                    data?.length - 1 == index ? 'border-t-2' : 'border-r-2 border-t-2 '
                  )}
                >
                  <div className='absolute -right-4 -top-4 flex size-8 items-center justify-center rounded-full bg-white'>
                    <span className='z-10 size-4 rounded-full bg-primary' />
                  </div>
                </div>
                <div className='col-span-2' />
                <div className='col-span-2' />
              </>
            ) : (
              <>
                <div
                  className={cn(
                    'relative size-full  border-dashed border-[#C8BEE8]',
                    data?.length - 1 == index ? 'border-t-2' : 'border-l-2 border-t-2 '
                  )}
                >
                  {' '}
                  <div className='absolute -left-4 -top-4 flex size-8 items-center justify-center rounded-full bg-white'>
                    <span className='size-4 rounded-full bg-secondary' />
                  </div>
                </div>
                <div className='-mt-3 ml-3 flex flex-col gap-3'>
                  <h3
                    style={{
                      background: `linear-gradient(90deg, rgba(91, 95, 170, 0.08) 0%, rgba(72, 75, 160, 0) 100%)`,
                    }}
                    className={'flex flex-row  gap-3 whitespace-nowrap rounded  text-lg font-black text-secondary '}
                  >
                    <span className={'text-[2.5rem] text-secondary'}>{String(index + 1).padStart(2, '0')}</span>{' '}
                    {item?.title}
                  </h3>
                  <CommonParargraph text={item?.description} />
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default DesktopDevelopmentProcess;
