import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TranslateXAnimation from '@/components/common/animation/TranslateXAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

export type BenefitsProps = {
  id: string;
  title: string;
  keyPoints: {
    id: string;
    title: string;
    description: string;
  }[];
};

const Benefits = async () => {
  const data = await fetchData<BenefitsProps>('/services/sub-service/social-media-marketing/section-three');
  return (
    <CommonAnimation className='common-padding bg-lightShad2'>
      <div className='common-section max-w-[1350px]'>
        <CommonTitle title={data?.title} className='text-center' />
        <div className='flex flex-col gap-8 overflow-hidden 2xl:w-[1200px]'>
          {data?.keyPoints?.map((item) => (
            <TranslateXAnimation key={item?.id} className='flex flex-col gap-2 rounded-2xl bg-white p-6'>
              <div className='flex flex-row items-center gap-4'>
                <Image src='/icons/arrow.png' width={12} height={24} alt='digital' className='h-6 w-3' />
                <CommonHeader title={item?.title} />
              </div>
              <CommonParargraph text={item?.description} />
            </TranslateXAnimation>
          ))}
        </div>
        <CommonButton text='Contact us now' href='/contact-us' className='mx-auto' />
      </div>
    </CommonAnimation>
  );
};

export default Benefits;
