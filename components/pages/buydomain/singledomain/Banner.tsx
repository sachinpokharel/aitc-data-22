import { delays } from '@/utils/animation-config';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

const Banner = ({ domainName }: { domainName: string }) => {
  const data = {
    chipTitle: 'BUY DOMAIN',
    description: 'Invest in a valuable, unforgettable domain name and make yourself stand out from the crowd.',
  };

  return (
    <div className='relative flex  flex-col items-center justify-center gap-4 px-6 py-32 max-xmd:py-20'>
      <div className='absolute inset-0 bg-[url("/images/single-domain-banner-bg.svg")] bg-cover bg-center bg-no-repeat' />
      <div className='relative  flex flex-col items-center justify-center gap-4 text-center text-white max-sm:gap-5'>
        <CommonChip text={data?.chipTitle} />
        <CommonTitleH1 title={`Buy ${domainName}`} className='font-semibold text-white' delay={delays.medium} />
        <CommonParargraph text={data?.description} className='text-white' delay={delays.long} />
      </div>
    </div>
  );
};

export default Banner;
