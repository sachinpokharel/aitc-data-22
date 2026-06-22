import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleChipWrapper from '@/components/common/Wrapper/TitleChipWrapper';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

interface JoinOurTeamProps {
  sectionTitle: string;
  mainTitle: string;
  description: string;
}

const JoinOurTeam = async () => {
  const data = await fetchData<JoinOurTeamProps>('/career/join-our-team-section');

  return (
    <CommonAnimation className='common-padding common-top-bottom-padding  common-section max-w-[1134px]'>
      <TitleParaWrapper>
        <TitleChipWrapper>
          <CommonChip text={data?.sectionTitle} />
          <CommonTitle title={data?.mainTitle} className='text-center' delay={delays.medium} />
        </TitleChipWrapper>
        <CommonParargraph className='text-center' text={data?.description} delay={delays.long} />
      </TitleParaWrapper>
      <CommonButton text='Join us now' href='/career?tab=job-openings' delay={delays.longer} />
    </CommonAnimation>
  );
};

export default JoinOurTeam;
