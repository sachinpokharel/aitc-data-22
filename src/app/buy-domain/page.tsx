import { generateMetadata } from '@/utils/getSeoData';
import BuyHero from '@/components/pages/buydomain/BuyHero';
import DomainCollections from '@/components/pages/buydomain/DomainCollections';
import DomainGridInfo from '@/components/pages/buydomain/DomainGridInfo';
import ScrollSection from '@/components/pages/buydomain/ScollSection';

interface PageProps {
  searchParams: {
    q?: string;
    limit?: string;
  };
}

export const metadata = generateMetadata('/buy-domain/seo', 'buy-domain');

const BuyDomainPage = ({ searchParams }: PageProps) => {
  const limit = Number(searchParams.limit) || 3;
  const queryParams = new URLSearchParams();

  if (searchParams.q) {
    queryParams.set('q', searchParams.q);
  }

  queryParams.set('limit', limit.toString());

  return (
    <>
      <ScrollSection />
      <BuyHero />
      <DomainCollections searchParams={searchParams} />
      <DomainGridInfo />
    </>
  );
};

export default BuyDomainPage;
