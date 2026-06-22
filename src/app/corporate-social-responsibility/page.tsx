/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchPaginationData } from '@/utils/getData';
import FeaturedImpacts from '@/components/pages/csr/FeaturedImpacts';
import Header from '@/components/pages/csr/Header';
import OtherContribution from '@/components/pages/csr/OtherContribution';
import Quotation from '@/components/pages/csr/Quotation';
import StandFor from '@/components/pages/csr/StandFor';
import Stats from '@/components/pages/csr/Stats';

const Page = async ({ searchParams }: { searchParams: { page: string } }) => {
  const currentPage = searchParams?.page || 1;
  const limit = 6;

  const contributions = await fetchPaginationData<{ data: any; pagination: any }>(
    `/social-responsibility/get-additional-contributions?page=${currentPage}&limit=${limit}`
  );

  const pagination = contributions?.pagination || {};

  return (
    <>
      <Header />
      <StandFor />
      <FeaturedImpacts />
      <Quotation />
      <OtherContribution pagination={pagination} contributions={contributions?.data} />
      <Stats />
    </>
  );
};

export default Page;
