import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import Link from 'next/link';
import type { PartnersSection } from '@/types/Home/collaborative-partners';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import MarqueeComponent from './MarqueeComponent';

export const CollaborativePartners = async ({ url }: { url: string }) => {
  const data = await fetchData<PartnersSection>(url);

  return (
    <CommonAnimation className='collaborative-partners-main common-section common-padding flex w-screen max-w-[1350px] flex-col items-center overflow-hidden bg-white'>
      <div className='flex flex-col items-center gap-8'>
        <CommonTitle title={data?.title} className='text-center' delay={delays.medium} />
        <CommonParargraph text={data?.description} className='text-center' delay={delays.long} />
      </div>
      <CommonAnimation className='scrollbar-wrapper relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased'>
        <MarqueeComponent pauseOnHover className={cn(`[--duration:30s`)}>
          <ul className='flex w-max min-w-full flex-nowrap items-center justify-center gap-8 overflow-hidden py-4 lg:gap-16'>
            {data?.partner?.map((item, idx) => (
              <li
                className='flex flex-row gap-16'
                style={{
                  background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                }}
                key={idx + 1}
              >
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href={item?.socialMediaLink ? item?.socialMediaLink : '#'}
                  className={item?.socialMediaLink ? '' : 'pointer-events-none'}
                >
                  <Image
                    src={item?.companyLogoUrl}
                    alt={'logo'}
                    width={100}
                    height={100}
                    className='max-h-[75px] object-contain'
                  />
                </Link>
              </li>
            ))}
          </ul>
        </MarqueeComponent>
      </CommonAnimation>
    </CommonAnimation>
  );
};
