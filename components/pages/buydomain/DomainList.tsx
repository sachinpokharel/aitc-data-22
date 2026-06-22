import { fetchPaginationData } from '@/utils/getData';
import type { ApiResponse, DomainItem } from '@/types/buydomain';
import Pagination from '@/components/common/Pagination';

import { Search } from './Search';
import VisibleDomainsList from './VisibleDomainsList';

interface DomainListProps {
  searchParams: {
    q?: string;
    page?: string;
  };
}

export const defaultLimit = 10;

//  to fetch domains with search and limit
async function fetchDomainData(searchTerm?: string, page = 1) {
  const response = await fetchPaginationData<ApiResponse>(
    `/buy-domain/domain?page=${page}&limit=${defaultLimit}${searchTerm ? `&q=${searchTerm}` : ''}`
  );
  return response;
}

export default async function DomainList({ searchParams }: Readonly<DomainListProps>) {
  const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1;
  const searchTerm = searchParams.q ?? '';

  const response = await fetchDomainData(searchTerm, currentPage);
  const domains = response?.data || [];
  const totalPages = response?.pagination?.total?.page ?? 0;

  return (
    <div className='flex w-full flex-col items-center justify-center gap-10'>
      <Search />

      {domains.length === 0 ? (
        <NotFoundDomain searchTerm={searchTerm} />
      ) : (
        <>
          {/* Domain Grid */}
          <div className='domain-list  flex w-full flex-col flex-wrap justify-center gap-5'>
            {domains.map((domain: DomainItem) => (
              <VisibleDomainsList key={domain.id} domain={domain} />
            ))}
          </div>

          {totalPages > 1 && <Pagination totalPages={totalPages} pageName='/buy-domain' />}
        </>
      )}
    </div>
  );
}

const NotFoundDomain = ({ searchTerm }: { searchTerm: string }) => (
  <div className='flex flex-col items-center justify-center py-8'>
    <p className='text-base font-medium text-grey'>No domains found {searchTerm && `matching "${searchTerm}"`}</p>
  </div>
);
