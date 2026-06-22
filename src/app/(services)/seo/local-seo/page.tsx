import { generateMetadata } from '@/utils/getSeoData';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import EcommerceFeatures from '../../common/EcommerceFeatures';
import PageDetail from '../../common/PageDetail';
import ServicesCTA from '../../common/ServicesCTA';
import Introduction from './components/Introduction';
import SEOBanner from './components/SEOBanner';
import Services from './components/Services';

export const metadata = generateMetadata('/services/sub-service/local-seo/seo', 'seo/local-seo');

const Page = () => {
  return (
    <div>
      <SEOBanner url='/services/sub-service/local-seo/hero-section' />
      <Introduction url='/services/sub-service/local-seo/section-one' buttonText='Get free consultation' />
      <Services url='/services/sub-service/local-seo/section-two' />
      <EcommerceFeatures url='/services/sub-service/local-seo/section-three' />
      <ServicesCTA url='/services/sub-service/local-seo/cta' />
      <PageDetail
        url={'/services/sub-service/local-seo/section-four'}
        href={'/'}
        linkTitle={'Book a appointment now '}
      />
      <FAQ url='/faq/sub-service/local-seo' />
    </div>
  );
};

export default Page;
