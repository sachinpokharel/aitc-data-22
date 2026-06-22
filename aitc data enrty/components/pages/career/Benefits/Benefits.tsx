import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

import Menu from './Menu';

export interface BenefitsProps {
  sectionTitle: string;
  mainTitle: string;
  description: string;
  benefits: Benefit[];
}

export interface Benefit {
  id: number;
  name: string;
  subBenefits: SubBenefit[];
}

export interface SubBenefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Benefits = async () => {
  const data = await fetchData<BenefitsProps>('/career/our-benefits-section');

  return (
    <CommonAnimation className='bg-lightShad2'>
      <div className='common-padding common-section max-w-screen-xl'>
        <TitleParaWrapper>
          <TitleChipWrapper>
            <CommonChip text={data?.sectionTitle} />
            <CommonTitle title={data?.mainTitle} className='text-center' delay={delays.medium} />
          </TitleChipWrapper>
          <CommonParargraph text={data?.description} delay={delays.long} />
        </TitleParaWrapper>

        <Menu benefits={data?.benefits} />
      </div>
    </CommonAnimation>
  );
};

export default Benefits;
