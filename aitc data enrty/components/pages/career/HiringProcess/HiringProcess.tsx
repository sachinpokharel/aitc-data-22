import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { type HiringProcessProps } from '@/types/career/career';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

import HiringProcessCard from './HiringProcessCard';

const HiringProcess = async () => {
  const data = await fetchData<HiringProcessProps>('/career/our-hiring-process-section');

  return (
    <CommonAnimation>
      <div className='common-padding relative z-[-1] flex  h-[508px] w-full items-start justify-center bg-secondary  py-24 '>
        <TitleParaWrapper>
          <TitleChipWrapper>
            <CommonChip text={data?.sectionTitle} />
            <CommonTitle title={data?.mainTitle} className='text-center text-white' delay={delays.medium} />
          </TitleChipWrapper>
          <CommonParargraph
            text={data?.description}
            className='text-center text-white xmd:max-w-6xl'
            delay={delays.long}
          />
        </TitleParaWrapper>
      </div>
      <div className='z-10 mx-auto mb-10 mt-[-40%] flex w-[90%] max-w-screen-xl flex-col items-center gap-10 rounded-2xl bg-lightShad2 px-10 pb-8 pt-20 max-xmd:px-4 sm:mt-[-30%] xmd:mt-[-20%] xmd:w-4/5 xmd:gap-[3.25rem]  lg:mt-[-15%] xl:mt-[-12%] 2xl:mt-[-12%] 3xl:mt-[-9%]'>
        <div className='cardwrapeer grid w-full grid-cols-1 gap-8 gap-y-14 xmd:grid-cols-2 xl:grid-cols-3'>
          {data?.hiringProcessLists
            ?.filter((a, b) => parseInt(a?.index) - b)
            ?.map((item, itemIndex) => (
              <HiringProcessCard
                key={item?.id}
                title={item?.title}
                description={item?.description}
                icon={item?.image}
                index={itemIndex}
              />
            ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default HiringProcess;
