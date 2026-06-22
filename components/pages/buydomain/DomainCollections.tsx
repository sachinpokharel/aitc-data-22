import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import TitleParaWrapper from '@/components/common/Wrapper/TitleParaWrapper';

import DomainList from './DomainList';

interface DomainCollectionsProps {
  searchParams: {
    q?: string;
    limit?: string;
  };
}

const DomainCollections = async ({ searchParams }: DomainCollectionsProps) => {
  const collectionData = await fetchData<{ title: string; description: string }>('/buy-domain/domain/hero');

  return (
    <CommonAnimation>
      <section id='search-domains' className=' common-padding common-section max-w-[1350px]'>
        <TitleParaWrapper className=' *:text-center'>
          <CommonTitle title={collectionData.title} delay={delays.medium} />
          <CommonParargraph text={collectionData.description} delay={delays.long} />
        </TitleParaWrapper>
        <DomainList searchParams={searchParams} />
      </section>
    </CommonAnimation>
  );
};

export default DomainCollections;
