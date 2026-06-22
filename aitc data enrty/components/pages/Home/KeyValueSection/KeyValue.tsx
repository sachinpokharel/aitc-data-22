import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import { type ValuesSection } from '@/types/Home/keyvalue';
import CardMagnetAnimation from '@/components/common/animation/CardMagnetAnimation';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

const KeyValue = async () => {
  const data = await fetchData<ValuesSection>('/home/our-key-value-section');

  return (
    <CommonAnimation className='common-section common-padding flex flex-col items-center justify-center gap-14 bg-lightShad2 py-[60px] xl:py-24'>
      <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
      <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3 2xxl:w-4/5'>
        {data?.keyValue?.map((item) => (
          <Zoom cascade={false} fraction={0.4} triggerOnce key={item.id}>
            <CardMagnetAnimation className='hover-scale-shadow-animation flex min-h-[450px] flex-col gap-6 rounded-2xl bg-white p-4 2xxl:min-w-[334px]'>
              <div className='hover-scale-animation flex h-[200px] items-center justify-center'>
                <Image
                  src={item?.imageUrl}
                  alt='keyvalue'
                  width={100}
                  height={100}
                  className='size-32 object-contain'
                />
              </div>
              <p className='text-center text-lg font-black text-mainBlack'>{item?.name}</p>
              <p className='text-center text-mainBlack'>{item.description}</p>
            </CardMagnetAnimation>
          </Zoom>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default KeyValue;
