import { LiaCommentDollarSolid } from 'react-icons/lia';
import Link from 'next/link';
import type { DomainItem } from '@/types/buydomain';

const VisibleDomainsList = ({ domain }: { domain: DomainItem }) => {
  return (
    <div
      key={domain?.id}
      className='flex w-full cursor-pointer items-center justify-between border-b border-lightShade1 bg-gradient-to-b from-[#FFFFFF] to-[#F8F8FF] p-3 max-xmd:gap-x-1.5'
    >
      <div className='flex items-center justify-center gap-3'>
        {/* Left Icon */}
        <svg
          aria-hidden='true'
          width='13'
          height='24'
          viewBox='0 0 13 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 8.20868C0 8.43081 0.0880234 8.64384 0.244706 8.8009L7.70291 16.2774C8.02919 16.6045 8.55818 16.6045 8.88446 16.2774L12.5602 12.5927C12.8864 12.2656 12.8864 11.7353 12.5602 11.4082L1.42625 0.246985C0.899927 -0.280628 0 0.0930499 0 0.839208V8.20868Z'
            fill='#484BA0'
          />
          <path
            d='M0 23.1608C0 23.907 0.899945 24.2806 1.42626 23.753L12.5586 12.5929C12.8849 12.2658 12.8849 11.7355 12.5586 11.4084L8.88339 7.7242C8.55713 7.39713 8.02814 7.39712 7.70187 7.72418L0.244725 15.1992C0.088031 15.3562 0 15.5693 0 15.7914V23.1608Z'
            fill='#FF7500'
          />
        </svg>
        <p className='truncate text-left text-base font-semibold max-xmd:text-sm max-[430px]:w-36'>{domain?.name}</p>
      </div>
      <Link
        href={`/buy-domain/${domain?.name}`}
        className='inline-flex w-fit items-center gap-2 whitespace-nowrap  rounded border-2 border-primary bg-transparent px-4  py-[0.78125rem] text-base leading-[1.6875rem] text-darkShade1 backdrop-blur-[7px] hover:shadow-[5px_4px_9px_0px_rgba(255,117,0,0.2)] max-xmd:text-sm'
      >
        <LiaCommentDollarSolid className='text-2xl max-xmd:text-base' />
        <span className='max-xmd:text-xs'>Make an offer</span>
      </Link>
    </div>
  );
};

export default VisibleDomainsList;
