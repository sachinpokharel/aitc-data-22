import { generateMetadata } from '@/utils/getSeoData';
import FAQ from '@/components/pages/Home/FAQSection/FAQ';

import PageDetail from '../../common/PageDetail';
import ServicesCTA from '../../common/ServicesCTA';
import SEOBanner from '../../seo/local-seo/components/SEOBanner';
import Benefits from './components/Benefits';
import SocialMediaServices from './components/SocialMediaServices';

export const metadata = generateMetadata(
  '/services/sub-service/social-media-marketing/seo',
  'digital-marketing/social-media-marketing'
);
const Page = () => {
  return (
    <main>
      <SEOBanner url='/services/sub-service/social-media-marketing/hero-section' chip='Social Media Marketing ' />
      <PageDetail
        url={'/services/sub-service/social-media-marketing/section-one'}
        href={'/'}
        linkTitle={'Learn More'}
      />
      <SocialMediaServices
        url='/services/sub-service/social-media-marketing/section-multiple'
        serviceTitle='Social Media Services We Offer '
      />
      <ServicesCTA url='/services/sub-service/social-media-marketing/cta' />
      <Benefits />
      <FAQ url='/faq/sub-service/social-media-marketing' />
    </main>
  );
};

export default Page;
