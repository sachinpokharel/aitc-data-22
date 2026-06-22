import Image from 'next/image';
import { type InsightTagIndividual } from '@/types/insights/insights';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

const Banner = ({
  title,
  coverImage,
  insightTags,
}: {
  title: string;
  coverImage: string;
  insightTags: InsightTagIndividual[];
}) => {
  return (
    <div className='main-common-padding flex w-full flex-col items-center justify-center gap-10 bg-lightShad2 '>
      <CommonAnimation className='flex w-full max-w-[1350px] flex-col items-start justify-start gap-2'>
        <div className='flex flex-row items-center gap-2'>
          {insightTags?.map((item) => (
            <p key={item?.name} className='text-primary'>
              {item?.name}
            </p>
          ))}
        </div>
        <CommonTitleH1 title={title} className='text-wrap text-start max-sm:text-center' />
      </CommonAnimation>
      <CommonAnimation
        delay={0.8}
        className='flex max-h-[800px] w-full max-w-[1350px] flex-col items-center justify-center gap-6'
      >
        <Image
          src={coverImage}
          alt='banner'
          width={1350}
          height={770}
          quality={100}
          draggable={false}
          sizes='100vw'
          className=' max-h-[800px] w-full rounded-2xl object-cover'
        />
      </CommonAnimation>
    </div>
  );
};

export default Banner;
