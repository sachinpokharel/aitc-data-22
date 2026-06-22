import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import Link from 'next/link';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import LongArrow from '@/components/common/icon/LongArrow';

type PortalProps = {
  title: string;
  description: string;
  portal: {
    url: string;
    link: string;
    id: number;
    type: string;
  }[];
};

const Portal = async () => {
  const data = await fetchData<PortalProps>('/classroom/portal-section');

  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='main-common-padding mx-auto flex max-w-[1210px] flex-col gap-10 lg:gap-[3.25rem]'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
          <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-8 lg:flex-row'>
          {data?.portal?.map((item) => (
            <Link
              href={item?.link || '#'}
              key={item?.id}
              target='_blank'
              className='group w-full max-w-[482px] rounded-2xl bg-white hover:shadow-xl'
            >
              <Image
                src={item?.url}
                alt={item?.link}
                width={500}
                height={500}
                draggable={false}
                sizes='33vw'
                className='aspect-[482/388] w-full max-w-[482px] rounded-t-2xl object-cover'
              />
              <div className='flex flex-row items-center gap-2 rounded-b-2xl px-4 py-6'>
                <CommonParargraph text={`Log in as ${item?.type}`} className='text-lg font-black text-primary' />
                <span className='hover-arrow-slide'>
                  <LongArrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Portal;
