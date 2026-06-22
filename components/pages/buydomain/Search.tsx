'use client';

import { useRouter } from 'nextjs-toploader/app';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchQuery.trim()) {
        params.set('q', searchQuery);
      } else {
        params.delete('q');
      }

      router.push(`?${params.toString()}`, {
        scroll: false,
      });
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery, searchParams, router]);

  return (
    <form className='mx-auto mb-8 w-full max-w-2xl max-xmd:max-w-[340px]' onSubmit={(e) => e.preventDefault()}>
      <div className='relative'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search for a domain name'
          className='w-full rounded-lg border-2 border-lightShad2 px-4 py-3 pl-12 placeholder:text-base focus:outline-none focus:ring-2 focus:ring-primary'
        />
        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={24} />
      </div>
    </form>
  );
}
