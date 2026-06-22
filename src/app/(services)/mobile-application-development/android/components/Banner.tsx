import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';

import BannerBackground from '../../../common/BannerBackground';
import ServiceCommonBanner from '../../../common/ServiceCommonBanner';

export interface BannerDTO {
  id: number;
  title: string;
  description: string;
  image: Image[];
}

export interface Image {
  id: number;
  url: string;
}

const MobileAppBanner = async ({ url, btnText }: { url: string; btnText: string }) => {
  const data = await fetchData<BannerDTO>(url);

  return (
    <CommonAnimation>
      <BannerBackground image={data?.image[0]?.url}>
        <div className='main-common-padding flex  flex-col items-center  justify-between  gap-10 lg:h-[628px] lg:flex-row '>
          <ServiceCommonBanner
            title={data?.title}
            description={data?.description}
            chip='Mobile Application Development'
            primarybuttonLink='/contact-us'
            primarybuttonText={btnText}
            className='w-full lg:w-1/2'
          />

          <div className=' z-10 flex items-center justify-center'>
            <div className=' max-h-[418px] max-w-[384px]'>
              <Image
                src={data?.image[1]?.url}
                draggable={false}
                alt='banner image'
                width={384}
                height={418}
                sizes='50vw'
                className='aspect-[384/418] rounded-2xl object-cover sm:h-[418px] sm:w-[384px]'
              />
            </div>
          </div>
        </div>
      </BannerBackground>
    </CommonAnimation>
  );
};

export default MobileAppBanner;
