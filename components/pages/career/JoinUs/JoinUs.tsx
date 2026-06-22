import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

import ImagesList from './ImagesList';
import JoinReasonList from './JoinReasonList';

interface JoinUsProps {
  sectionTitle: string;
  mainTitle: string;
  description: string;
  keyPoints: string[];
  images: {
    id: number;
    url: string;
  }[];
}

const JoinUs = async () => {
  const data = await fetchData<JoinUsProps>('/career/why-join-us-section');

  return (
    <CommonAnimation className='bg-lightShad2'>
      {/* title and description */}
      <div className='common-padding common-section   max-w-[1500px]'>
        <div className=' flex flex-col items-center justify-between gap-[3.25rem] xl:flex-row 2xl:gap-[7.375rem]  '>
          <TitleParaWrapper className='w-[90%]'>
            <TitleChipWrapper className=' xl:items-start'>
              <CommonChip text={data?.sectionTitle} />
              <CommonTitle title={data?.mainTitle} className='text-center xl:text-start' delay={delays.medium} />
            </TitleChipWrapper>
            <CommonParargraph text={data?.description} className='text-center xl:text-left' delay={delays.long} />
          </TitleParaWrapper>
          <JoinReasonList keyPoints={data?.keyPoints} />
        </div>
        {/* images section */}
        <ImagesList images={data?.images} />
      </div>
    </CommonAnimation>
  );
};

export default JoinUs;
