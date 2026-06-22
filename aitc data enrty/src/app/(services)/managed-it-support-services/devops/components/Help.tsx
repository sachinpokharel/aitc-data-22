import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Help = async () => {
  const data = await fetchData<CommonSubServiceSection>('/services/sub-service/devops/section-two');

  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='main-common-padding flex max-w-[1300px] flex-col items-center gap-10 xsm:gap-[3.25rem]  '>
        <div className='flex flex-col gap-8 xl:flex-row'>
          <div className=' flex max-w-[576px] flex-col gap-10 rounded-3xl bg-secondary p-6  '>
            <CommonTitle title={data?.title as string} className='text-center text-white' />
            <CommonParargraph text={data?.description as string} className='text-center text-white' />
          </div>
          <div>
            <Image
              src={data?.image as string}
              alt={data?.title as string}
              width={465}
              height={465}
              className='aspect-square'
            />
          </div>
        </div>
        <CommonButton href='/why-us' text='Explore our services' className='mx-auto' />
      </div>
    </CommonAnimation>
  );
};

export default Help;
