import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TranslateYAnimation from '@/components/common/animation/TranslateYAnimation';

import ServiceCommonBanner from '../../common/ServiceCommonBanner';
import { type BannerDTO } from '../../mobile-application-development/components/Banner';

const Banner = async () => {
  const data = await fetchData<BannerDTO>(`/services/web-development/hero-section`);

  return (
    <CommonAnimation className='main-common-padding flex justify-center  overflow-hidden bg-lightShad2 !pb-0'>
      <div className='flex max-w-[984px] flex-col items-center justify-center gap-10 overflow-hidden xmd:gap-16'>
        <ServiceCommonBanner
          isColumn
          title={data?.title}
          description={data?.description}
          chip='Web development service'
          primarybuttonLink='/contact-us'
          primarybuttonText='Contact Us'
          secondarybuttonLink='/ourwork'
          secondarybuttonText='Check our portfolio'
          isSecondaryButton
        />
        <div className='flex h-[180px] w-[984px] flex-row  justify-center gap-2 xmd:h-[250px] xmd:gap-8'>
          {data?.image?.map((item, index) => (
            <TranslateYAnimation
              key={index + 1}
              delay={index * 0.5}
              translateY={index % 2 === 0 ? '30px' : '40px'}
              className={`${index % 2 === 0 ? 'self-end' : 'self-start'}  h-[81px] w-[120px] xmd:h-[158px] xmd:w-[231px]`}
            >
              <Image
                src={item?.url}
                width={231}
                height={158}
                alt={item?.id?.toString()}
                draggable={false}
                className={cn('object-contain', index % 2 === 0 ? 'rounded-t-lg' : 'rounded-lg')}
              />
            </TranslateYAnimation>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Banner;
