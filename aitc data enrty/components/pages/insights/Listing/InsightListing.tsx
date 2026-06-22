import moment from 'moment';
import { type Insight, type PaginationType } from '@/types/insights/insights';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import Pagination from '@/components/common/Pagination';

import InsightCard from '../../Home/InsightSection/InsightCard';

const InsightListing = ({ insights, pagination }: { insights: Insight[]; pagination: PaginationType }) => {
  return (
    <CommonAnimation className='common-section common-padding flex max-w-[1500px] flex-col items-center justify-center gap-14'>
      {insights?.length === 0 ? (
        <div>
          <p className='text-center text-lg text-gray-500'>
            Apologies, but we could not find any information related to this category.
          </p>
        </div>
      ) : (
        <div className='flex flex-wrap justify-center gap-8'>
          {insights.map((item, index) => (
            <InsightCard
              key={index}
              category={item?.industryTag?.name}
              date={moment(item?.updatedAt).format('DD MMM YYYY')}
              image={item?.coverImage}
              tags={item?.insightTags as { name?: string }[]}
              title={item?.title}
              slug={item?.slug}
              index={index}
            />
          ))}
        </div>
      )}
      {(pagination?.total?.page as number) > 1 && (
        <Pagination totalPages={pagination?.total?.page as number} pageName={'/insights'} />
      )}
    </CommonAnimation>
  );
};

export default InsightListing;
