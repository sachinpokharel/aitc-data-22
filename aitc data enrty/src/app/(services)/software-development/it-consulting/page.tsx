import { generateMetadata } from '@/utils/getSeoData';
import ErrorBoundaryWrapper from '@/components/common/ErrorBoundary/ErrorBoundaryWrapper';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import CTA from '../../common/CTA';
import SEOProcess from '../../seo/components/SEOProcess/SEOProcess';
import SEOBanner from '../../seo/local-seo/components/SEOBanner';
import OurNeed from '../components/OurNeed';
import ITConsultingService from './components/ITConsultingService';

export const metadata = generateMetadata(
  '/services/sub-service/software-consulting/seo',
  'software-development/it-consulting'
);

const Page = () => {
  return (
    <main>
      <SEOBanner url='/services/sub-service/software-consulting/hero-section' chip='IT/Software consulting services' />

      <ITConsultingService url='/services/sub-service/software-consulting/section-one' />
      <CTA isSingleButton url='/services/sub-service/software-consulting/cta' buttonText='Talk to an expert' />
      <OurNeed url='/services/sub-service/software-consulting/section-two' />
      <SEOProcess url='/services/sub-service/software-consulting/process-section' />
      <ErrorBoundaryWrapper>
        <FAQ url='/faq/sub-service/software-consulting' />
      </ErrorBoundaryWrapper>
    </main>
  );
};

export default Page;
