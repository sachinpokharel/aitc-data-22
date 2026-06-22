'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type SubService } from '@/types/service';

const shapecss = [
  {
    index: 0,
    css: 'absolute -right-[16%] -z-10 top-[5%] h-[250px] w-[171px] rotate-[-155deg] rounded-2xl transition-all duration-700   group-hover:right-[-38%] group-hover:top-[-5%] group-hover:rotate-[-174deg] ',
  },
  {
    index: 1,
    css: 'absolute size-[177px] -z-10 rounded-full transform translate-x-[80%] translate-y-[80%] transition-transform duration-[1200ms] group-hover:translate-x-[-80%] group-hover:translate-y-[-80%]',
  },
  {
    index: 2,
    css: 'absolute size-[177px] -z-10 rounded-[35px] bottom-[-17%] left-1/3 rotate-[-16deg] transition-all duration-700 group-hover:bottom-[-40%]  group-hover:rotate-[-40deg] -translate-x-1/3 ',
  },
  {
    index: 3,
    css: ` absolute right-[7%] -z-10 top-[-6%] h-[250px] w-[171px] rotate-[-130deg] rounded-2xl transition-all duration-700  group-hover:right-[-38%] group-hover:top-[-8%] group-hover:rotate-[-200deg] `,
  },
];

const Card = ({ index, item }: { index: number; item: SubService }) => {
  const absolutepositon = shapecss?.find((item) => index % 4 === item?.index);

  const pathname = usePathname();

  return (
    <div
      className={cn(
        'group relative z-20  flex h-[371px] w-[329px] flex-col items-center justify-center  overflow-hidden rounded-2xl bg-[#FF8F30] p-6',
        index % 2 == 0 ? 'bg-[#FF8F30] ' : 'bg-[#4D3B8B]'
      )}
    >
      <div>
        <Shape color={`${index % 2 == 0 ? 'bg-[#FF9F4E] ' : 'bg-[#574597]'} ${absolutepositon?.css}`} />
        {index % 4 == 3 && <Shape2 color={index % 2 == 0 ? 'bg-[#FF9F4E] ' : 'bg-[#574597]'} />}
        <h2
          className={
            'text-[1.375rem] font-black text-white opacity-100 transition-opacity duration-700 group-hover:opacity-0'
          }
        >
          {item?.title}
        </h2>
        <div className=' absolute inset-0 z-20 flex flex-col gap-6 p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100'>
          <p className='z-20 w-full text-white '>
            {item?.description?.charAt(0).toUpperCase() + item?.description?.slice(1)}
          </p>
          <Link
            href={`${pathname}/${item?.slug ? item?.slug : '?form=book_a_consultation'}`}
            className=' z-20 w-fit text-start text-lg font-black text-white '
          >
            {item?.slug ? `Learn more` : 'Book a consultation'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

const Shape = ({ color }: { color: string }) => {
  return <span className={color} />;
};

const Shape2 = ({ color }: { color: string }) => {
  return (
    <span
      className={cn(
        `absolute right-[-1%] top-[28%] -z-10 h-[250px] w-[171px] rotate-[-130deg] rounded-2xl bg-[#FF9F4E] transition-all duration-700 group-hover:right-[35%] group-hover:top-[60%]  group-hover:rotate-[-75deg] 
          `,
        color
      )}
    />
  );
};
