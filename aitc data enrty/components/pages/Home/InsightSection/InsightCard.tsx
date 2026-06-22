import { truncateText } from '@/utils/truncate';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

const InsightCard = ({
  title,
  image,
  tags,
  category,
  date,
  slug,
  index,
}: {
  title: string;
  image: string;
  tags: { name?: string }[];
  category: string;
  date: string;
  slug: string;
  index: number;
}) => {
  return (
    <CommonAnimation delay={(index + 1) / 12}>
      <Link
        href={`/insights/${slug}`}
        className='flex flex-col gap-8 rounded-2xl border border-transparent bg-lightShad2 p-6 transition-all duration-300 hover:border-primary md:max-w-[300px] lg:max-h-[500px] 2xl:max-w-[350px] '
      >
        <div className='relative'>
          <Image
            src='/icons/insight_icon.png'
            alt='spotlight'
            width={500}
            height={500}
            className='absolute right-4 top-4 size-11'
          />
          <Image
            src={image ?? '/icons/Logo.png'}
            alt={title}
            width={500}
            height={500}
            sizes='33vw'
            className='rounded-lg object-cover lg:h-[250px] xl:h-[150px] 2xl:h-[200px]'
          />
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-wrap items-center gap-4'>
            {tags?.map((tag) => (
              <p key={tag?.name} className='text-secondary'>
                {tag?.name}
              </p>
            ))}
          </div>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-primary'>{category}</p>
            <p className='text-mainBlack'>{moment(date).format('DD MMM YYYY')}</p>
          </div>
          <hr className='w-full border border-lightShade1' />
          <p className='text-lg font-bold text-mainBlack lg:h-[70px]'>{truncateText(title)}</p>
        </div>
      </Link>
    </CommonAnimation>
  );
};

export default InsightCard;
