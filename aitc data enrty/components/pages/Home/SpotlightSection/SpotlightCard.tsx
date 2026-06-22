import Image from 'next/image';
import Link from 'next/link';
import { type ProductTag } from '@/types/ourwork/main';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import LongArrow from '@/components/common/icon/LongArrow';

const SpotlightCard = ({
  title,
  image,
  tags,
  link,
  index,
  hasCaseStudy,
}: {
  title: string;
  image: string;
  tags: ProductTag[];
  link: string;
  index: number;
  hasCaseStudy?: boolean;
}) => {
  return (
    <CommonAnimation delay={(index + 1) / 3}>
      {hasCaseStudy ? (
        <Link
          href={link}
          className='hover-scale-shadow-animation group flex w-full flex-col gap-8 rounded-2xl bg-lightShad2 md:max-w-[380px] '
        >
          <Image
            src={image}
            alt='spotlight'
            width={500}
            height={500}
            className='h-[250px] rounded-t-2xl object-cover'
          />
          <div className='flex flex-col gap-6 px-6 pb-6'>
            <div className='flex flex-row items-center gap-2'>
              <p className='text-lg font-bold text-mainBlack'>{title}</p>
              <span className='hover-arrow-slide'>
                <LongArrow />
              </span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <p key={tag?.name}>
                  {tag?.name}
                  {index < tags.length - 1 && ','}
                </p>
              ))}
            </div>
          </div>
        </Link>
      ) : (
        <div
          // href={link}
          className='hover-scale-shadow-animation group flex w-full flex-col gap-8 rounded-2xl bg-lightShad2 md:max-w-[380px] '
        >
          <Image
            src={image}
            alt='spotlight'
            width={500}
            height={500}
            className='h-[250px] rounded-t-2xl object-cover'
          />
          <div className='flex flex-col gap-6 px-6 pb-6'>
            <div className='flex flex-row items-center gap-2'>
              <p className='text-lg font-bold text-mainBlack'>{title}</p>
              {/* <span className='hover-arrow-slide'>
                <LongArrow />
              </span> */}
            </div>
            <div className='flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <p key={tag?.name}>
                  {tag?.name}
                  {index < tags.length - 1 && ','}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </CommonAnimation>
  );
};

export default SpotlightCard;
