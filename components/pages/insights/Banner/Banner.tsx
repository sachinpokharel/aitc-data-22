import { bannerDelays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { Suspense } from 'react';
import { type IndustryTags, type InsightHero } from '@/types/insights/insights';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

import CategoryList from './CategoryList';
import SearchInput from './SearchInput';

const Banner = ({ hero, industryTags }: { hero: InsightHero; industryTags: IndustryTags[] }) => {
  return (
    <CommonAnimation className='relative flex flex-col items-center justify-center'>
      <div
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${hero?.bgImage})`,
        }}
        className={cn(`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35`)}
      ></div>
      <div className=' common-section common-padding relative z-10 mx-auto flex w-full flex-col items-center justify-center gap-14'>
        <div className='flex flex-col items-center justify-center gap-8  2xxl:w-2/3'>
          <CommonTitleH1 title={hero?.title} className='text-center' delay={bannerDelays.title} />
          <CommonParargraph text={hero?.description} className='text-center' delay={bannerDelays.description} />
        </div>
        <div className='flex w-full flex-col items-start gap-8 lg:flex-row 2xxl:w-2/3'>
          <div className='flex  w-full flex-col items-start gap-2  lg:px-1 xl:max-w-[367px]'>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchInput />
            </Suspense>
          </div>
          <div className='hide-scrollbar flex flex-wrap  items-center justify-start gap-6 overflow-x-scroll max-sm:gap-5 lg:w-[867px] lg:justify-start lg:px-1 xl:w-screen'>
            {[{ id: 'all', name: 'All', slug: 'all' }, ...industryTags]?.map((item) => (
              <Suspense fallback={<div>Loading...</div>} key={item?.id}>
                <CategoryList id={item?.id as string} name={item?.name} slug={item?.slug} />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Banner;
