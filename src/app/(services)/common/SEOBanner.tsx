import { bannerDelays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { type CommonSubServiceHeroSection } from '@/types/index';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

/**
 * Renders an SEO banner component with a title, subtitle, optional description,
 * and a button. It displays an image in a wrapper and arranges content in a
 * flexible layout suitable for various screen sizes. Reference: SEO Page
 *
 * @param {Object} props - The properties for the SEO banner.
 * @param {string} props.subtitle - The subtitle text for the banner.
 * @param {string} props.title - The main title text for the banner.
 * @param {string} [props.description] - An optional description text for the banner.
 * @param {string} props.image - The image URL for the banner background.
 * @param {string} props.buttonText - The text displayed on the banner button.
 * @param {string} props.url - The URL for the banner button.
 */
const SEOBanner = async ({
  subtitle,
  buttonText,
  url,
  buttonUrl,
}: {
  subtitle: string;
  buttonText: string;
  url: string;
  buttonUrl?: string;
}) => {
  const data = await fetchData<CommonSubServiceHeroSection>(url);
  return (
    <BannerWrapper image={data?.bgImage} className='bg-lightShad2'>
      <div
        className={cn(
          'flex max-w-[616px] flex-col items-center justify-center gap-10 xmd:gap-12 xl:max-w-[547px] xl:items-start',
          data?.description && 'gap-8'
        )}
      >
        <div className='flex flex-col items-center gap-2 xl:items-start'>
          <p className='text-center text-lg font-black  leading-[150%] tracking-[0.36px] text-primary xl:text-left'>
            {subtitle?.charAt(0).toUpperCase() + subtitle?.slice(1)}
          </p>
          <CommonTitleH1
            title={data?.title as string}
            className='text-center  xl:text-left'
            delay={bannerDelays.title}
          />
        </div>
        <div className='flex flex-col items-center gap-6 xl:items-start'>
          {data?.description && (
            <CommonParargraph
              text={data?.description}
              className='text-center lg:text-start'
              delay={bannerDelays.description}
            />
          )}
          <CommonButton href={buttonUrl ?? '/contact-us'} text={buttonText} />
        </div>
      </div>
    </BannerWrapper>
  );
};

export default SEOBanner;
