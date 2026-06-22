'use client';

import { cn } from '@/utils/cn';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

const CategoryList = ({ id, name, slug }: { id: string; name: string; slug: string }) => {
  const searchParams = useSearchParams();
  const currentSlug = searchParams.get('category') ?? '';
  const router = useRouter();

  const isActive = name === 'All' ? !currentSlug : currentSlug === slug;

  return (
    <button
      onClick={() => {
        const optional = new URLSearchParams(searchParams?.toString());
        if (name === 'All') {
          optional.delete('category');
        } else {
          optional.set('category', slug);
        }
        router.replace(`/insights${optional.toString() ? `?${optional.toString()}` : ''}`, {
          scroll: false,
        });
      }}
      className={cn(
        'w-fit rounded-md bg-white px-4 py-3 transition-all duration-300',
        isActive ? 'border border-primary text-mainBlack' : 'border border-transparent text-grey'
      )}
    >
      <p className='whitespace-nowrap text-base'>{name}</p>
    </button>
  );
};

export default CategoryList;
