import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const ITConsultingService = async ({ url }: { url: string }) => {
  const data = await fetchData<CommonSubServiceSection>(url);

  return (
    <CommonAnimation className='common-padding  bg-lightShad2 xl:bg-[#FFFFFF]'>
      <div className='common-section max-w-[1350px]'>
        <CommonTitle title={data?.title as string} className='text-center' />
        {data?.keyPoints?.map((item, index) => (
          <CommonAnimation
            delay={(index + 1) * 0.4}
            key={item?.id}
            className={cn(
              index % 2 === 0 ? 'lg:mr-64' : 'lg:ml-64',
              'flex w-fit flex-col gap-6 self-stretch rounded-2xl bg-[#FFFFFF] p-6 md:flex-row xl:bg-lightShad2'
            )}
          >
            <div className='flex flex-col gap-4'>
              <CommonHeader title={item?.title as string} className='text-secondary' />
              <CommonParargraph text={item?.description as string} />
            </div>
            <Image
              src={item?.image as string}
              width={500}
              height={500}
              className='h-[217px] w-[326px] rounded-2xl'
              alt={item?.title as string}
            />
          </CommonAnimation>
        ))}

        <CommonButton href='/contact-us' text='Get a free consultation' />
      </div>
    </CommonAnimation>
  );
};

export default ITConsultingService;
