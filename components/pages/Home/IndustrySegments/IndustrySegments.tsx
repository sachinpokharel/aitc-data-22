import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import IndustrySegmentsSwiper from './IndustrySegmentsSwiper';

export interface Industry {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface IndustryData {
  title: string;
  description: string;
  industry: Industry[];
}

const IndustrySegments = async ({ title, description }: { title: string; description: string }) => {
  const data = await fetchData<IndustryData>('/home/industry-we-offer-section');

  return (
    <CommonAnimation className='industry-segments-main common-section common-padding flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-14 xl:py-24'>
      <div className='flex flex-col items-center justify-center gap-4 *:text-center'>
        <CommonTitle title={title} delay={delays.medium} />
        <CommonParargraph text={description} delay={delays.long} />
      </div>
      <IndustrySegmentsSwiper data={data?.industry} />
    </CommonAnimation>
  );
};

export default IndustrySegments;
