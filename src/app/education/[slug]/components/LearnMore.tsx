import { truncateText } from '@/utils/truncate';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { type CourseInsightFeature } from '@/types/classroom/CourseDetail';
import { type InsightTag } from '@/types/insights/insights';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const LearnMore = ({ insights }: { insights: CourseInsightFeature }) => {
  return (
    <CommonAnimation className='common-padding common-section w-full max-w-[1400px]'>
      <CommonTitle title={insights?.mainTitle} className='text-center' />
      <CommonParargraph text={insights?.description} className='text-center' />
      <div className='flex w-full flex-wrap justify-center gap-8'>
        {insights?.insights?.map((item) => (
          <Card
            key={item?.id}
            title={item?.title}
            image={item?.coverImage}
            tags={item?.insightTags}
            category={item?.industryTag?.name}
            date={moment(item?.industryTag?.createdAt).format('MMM YYYY')}
            slug={item?.slug as string}
          />
        ))}
      </div>
    </CommonAnimation>
  );
};

export default LearnMore;

const Card = ({
  title,
  image,
  tags,
  category,
  date,
  slug,
}: {
  title: string;
  image: string;
  tags: InsightTag[];
  category: string;
  date: string;
  slug: number | string;
}) => {
  return (
    <Link
      href={`/insights/${slug}`}
      className='flex w-full flex-col gap-8 rounded-2xl border border-transparent bg-lightShad2 p-6 transition-all duration-300 hover:border-primary lg:max-h-[520px] lg:max-w-[300px] 2xl:max-w-[330px] '
    >
      <div className='relative'>
        <Image
          src='/icons/insight_icon.png'
          alt='spotlight'
          width={500}
          height={500}
          className='absolute  right-4 top-4 size-7'
        />
        <Image src={image} alt='spotlight' width={500} height={500} className='h-[250px] rounded-2xl object-cover' />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-wrap items-center gap-4'>
          {tags.map((tag) => (
            <p key={tag?.name} className='text-secondary'>
              {tag?.name}
            </p>
          ))}
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-primary'>{category}</p>
          <p className='text-mainBlack'>{date}</p>
        </div>
        <hr className='w-full border border-lightShade1' />
        <p className='text-lg font-bold text-mainBlack lg:h-[70px]'>{truncateText(title)}</p>
      </div>
    </Link>
  );
};
