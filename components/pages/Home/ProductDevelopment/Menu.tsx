'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import CommonParargraph from '@/components/common/CommonParargraph';

const Menu = ({ menulist }: { menulist: { id: number; title: string; slug: string; url: string; icon: string }[] }) => {
  const searchParams = useSearchParams();
  const selectedMenu = searchParams.get('devTab') ?? menulist?.[0]?.url;

  return (
    <ul className='menu hide-scrollbar flex max-w-[99%] flex-row justify-start gap-4 overflow-x-scroll border-b border-[#54458B] pb-4'>
      <AnimatePresence>
        {(menulist ?? []).map((menu) => (
          <li key={menu.id} className='relative w-fit'>
            <AnimatePresence>
              {selectedMenu == menu?.url && (
                <motion.span
                  className='absolute inset-0 block size-full rounded-2xl bg-lightSecondary'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, delay: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.6, delay: 0.4 },
                  }}
                />
              )}
            </AnimatePresence>
            <Link
              href={`?devTab=${menu?.url}`}
              scroll={false}
              className={cn('z-10 flex w-full flex-row items-center gap-4  rounded-lg  px-4 py-[0.4375rem]')}
            >
              <span className='relative size-9 rounded-full'>
                <Image
                  src={menu?.icon}
                  alt={menu?.title}
                  fill
                  draggable='false'
                  sizes='10vw'
                  className='rounded-full object-contain'
                />
              </span>
              <CommonParargraph text={menu?.title} className='z-20 whitespace-nowrap text-lg font-medium text-white' />
            </Link>
          </li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Menu;
