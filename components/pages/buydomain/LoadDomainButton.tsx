'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { defaultLimit } from './DomainList';

interface DomainListActionsProps {
  currentLimit: number;
  hasMoreDomains: boolean;
  canShowLess: boolean;
  searchQuery: string;
}

export default function DomainListActions({
  currentLimit,
  hasMoreDomains,
  canShowLess,
  searchQuery,
}: Readonly<DomainListActionsProps>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const limitStep = defaultLimit;

  const handleLimitChange = (newLimit: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchQuery) {
      params.set('q', searchQuery);
    }

    params.set('limit', newLimit.toString());

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className='flex gap-4'>
      {canShowLess && (
        <button
          onClick={() => handleLimitChange(currentLimit - limitStep)}
          className='w-fit whitespace-nowrap rounded border-2 border-primary bg-transparent px-4 py-[0.78125rem] text-lg leading-[1.6875rem] text-darkShade1 backdrop-blur-[7px] hover:shadow-[5px_4px_9px_0px_rgba(255,117,0,0.2)]'
        >
          Show Less -
        </button>
      )}
      {hasMoreDomains && (
        <button
          onClick={() => handleLimitChange(currentLimit + limitStep)}
          className='w-fit whitespace-nowrap rounded bg-primary px-4 py-[0.78125rem] text-lg leading-[1.6875rem] text-white backdrop-blur-[7px] hover:shadow-[5px_4px_9px_0px_rgba(255,117,0,0.2)]'
        >
          Load More +
        </button>
      )}
    </div>
  );
}
