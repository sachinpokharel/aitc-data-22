import { fetchData } from '@/utils/getData';
import { generateMetadata } from '@/utils/getSeoData';
import { type Statistics } from '@/types/Home/collaborative-partners';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonBanner from '@/components/common/CommonBanner/CommonBanner';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import AitcIntro from '@/components/pages/aboutus/AitcIntro/AitcIntro';
import Corevalues from '@/components/pages/aboutus/CoreValues/Corevalues';
import HowWedoit from '@/components/pages/aboutus/HowWeDoIt/HowWedoit';
import LifeAtAitc from '@/components/pages/aboutus/LifeAtAitc/LifeAtAitc';
import MessageFromCeo from '@/components/pages/aboutus/MessageFromCeo/MessageFromCeo';
import OurCulture from '@/components/pages/aboutus/OurCulture/OurCulture';
import OurMission from '@/components/pages/aboutus/OurMission/OurMission';
import OurStory from '@/components/pages/aboutus/OurStory/OurStory';
import TechSuite from '@/components/pages/aboutus/TechSuite/TechSuite';
import WhoWeAre from '@/components/pages/aboutus/whoweare/WhoWeAre';
import WhyChooseAitc from '@/components/pages/aboutus/WhyChooseAitc/WhyChooseAitc';
import { CollaborativePartners } from '@/components/pages/Home/CollaborativePartners/CollaborativePartners';
import CompanyStatistics from '@/components/pages/Home/CompanyStatistics/CompanyStatistics';

export const metadata = generateMetadata('/about-us/seo', 'aboutus');

const AboutUs = async () => {
  const statisticsData = await fetchData<Statistics>('/achivement');
  return (
    <main>
      <ErrorBoundaryWrapper>
        <CommonAnimation>
          <CommonBanner url='/about-us/hero-section' />
        </CommonAnimation>
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <AitcIntro />
        <OurCulture />
        <OurStory />
        <OurMission />
        <WhyChooseAitc />
        <HowWedoit />
        <Corevalues />
        <MessageFromCeo />
        <WhoWeAre />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <TechSuite />
      </ErrorBoundaryWrapper>
      <CollaborativePartners url='/home/partnership-section' />
      <ErrorBoundaryWrapper>
        <CompanyStatistics data={statisticsData} />
      </ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper>
        <LifeAtAitc />
      </ErrorBoundaryWrapper>
    </main>
  );
};

export default AboutUs;
