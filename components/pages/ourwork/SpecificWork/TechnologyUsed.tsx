import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type TechnologyUsedResponse } from '@/types/ourwork/specificpage/introductionDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const TechnologyUsed = async ({ id }: { id: string }) => {
  const data = await fetchData<TechnologyUsedResponse>(`/our-work/product/section/one/${id}`);

  return (
    <div className={cn(`common-section common-padding relative flex flex-col gap-14`, id && '-z-20 bg-lightShad2')}>
      <div className='absolute left-[36%] top-[62%] -z-10 -translate-x-full'>
        <Image src='/icons/ball_left.svg' alt='arrow' width={130} height={130} className='object-contain' />
      </div>
      <div className='absolute right-1/4 top-1/3 -z-10 translate-x-[-20%]'>
        <Image src='/icons/ball_right.svg' alt='arrow' width={200} height={200} className='object-contain' />
      </div>
      <CommonTitle title='Technology Used' />
      <div className={cn(`flex flex-col gap-6 rounded-2xl bg-lightShad2 p-6 xl:w-[610px]`, id && 'bg-white')}>
        <div className='flex flex-row items-start gap-6'>
          <CommonHeader title='Compatibility' className='min-w-[113px]' />
          <CommonParargraph text={data?.compatibility} />
        </div>
        <div className='flex flex-row items-start gap-6'>
          <CommonHeader title='Codebase' className='min-w-[113px]' />
          <div className='flex flex-wrap items-center gap-6'>
            {data?.codebaseMedia?.map((item, index) => (
              <Image
                src={item?.url}
                alt={item?.id}
                width={100}
                height={100}
                className='size-9 rounded-xl object-cover'
                key={index + 1}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-wrap items-start gap-6'>
          <CommonHeader title='Database' className='min-w-[113px]' />
          <div className='flex flex-wrap items-center gap-6'>
            {data?.databaseMedia?.map((item, index) => (
              <Image
                src={item?.url}
                alt={item?.id}
                width={100}
                height={100}
                className='size-9 rounded-xl object-cover'
                key={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyUsed;
