import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import InsightCard from './InsightCard';

interface IndustryTag {
  name: string;
  createdAt: string;
}

interface Insight {
  id: number;
  title: string;
  slug: string;
  updatedAt: string;
  description: string | null;
  coverImage: string;
  industryTag: IndustryTag;
  insightTags: {
    name: string;
  }[];
}

interface InsightData {
  id: string;
  mainTitle: string;
  description: string;
  insights: Insight[];
}

const InsightSection = async ({ url }: { url: string }) => {
  const insightData = await fetchData<InsightData>(url);

  return (
    <CommonAnimation className='common-padding common-section flex min-h-screen max-w-[1350px] flex-col items-center  justify-center lg:max-w-[1600px]'>
      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <CommonTitle title={insightData?.mainTitle} delay={delays.short} />
        <CommonParargraph text={insightData?.description} delay={delays.medium} className='text-center lg:w-4/5' />
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        {insightData?.insights?.map((item, index) => (
          <InsightCard
            key={item?.id}
            category={item?.industryTag?.name}
            date={item?.updatedAt}
            image={item?.coverImage}
            tags={item?.insightTags}
            title={item?.title}
            slug={item?.slug}
            index={index}
          />
        ))}
      </div>
      <CommonButton text='Read more insights' href='/insights' />
    </CommonAnimation>
  );
};

export default InsightSection;
