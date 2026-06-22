import { fetchData } from '@/utils/getData';
import { notFound } from 'next/navigation';
import DomainCollections from '@/components/pages/buydomain/DomainCollections';
import DomainGridInfo from '@/components/pages/buydomain/DomainGridInfo';
import Banner from '@/components/pages/buydomain/singledomain/Banner';
import DomainRequestForm from '@/components/pages/buydomain/singledomain/DomainRequestForm';

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    q?: string;
    limit?: string;
  };
}

const page = async ({ params, searchParams }: PageProps) => {
  const { slug } = params;

  const domains = await fetchData<{ id: string; name: string }>(`/buy-domain/domain/${slug}`);

  if (!domains) {
    notFound();
  }

  return (
    <>
      <Banner domainName={domains.name} />
      <DomainRequestForm domainId={domains.id} />
      <DomainCollections searchParams={searchParams} />
      <DomainGridInfo />
    </>
  );
};

export default page;
