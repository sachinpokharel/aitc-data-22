import { type BannerDTO } from '@/src/app/(services)/mobile-application-development/components/Banner';
import getImage from '@/utils/dynamicImageBlur';
import { fetchData } from '@/utils/getData';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

import { TypewriterEffectSmoothV2 } from './TypewriterEffect';

const Hero = async () => {
  const data = await fetchData<BannerDTO>('/home/hero-section');

  const image = await getImage(data?.image[4]?.url);

  return (
    <div className='hero-section-main flex flex-col justify-between bg-lightShad2   max-xl:gap-4 xl:flex-row'>
      <CommonAnimation
        className='hero-section-description flex  w-full flex-col items-center justify-center gap-2   xl:w-1/2'
        style={{ willChange: 'transform, opacity' }}
      >
        <div className='flex h-auto w-full flex-col items-center justify-center gap-8 px-6 py-10 xmd:gap-12 xmd:px-16 xmd:py-8 lg:items-start xl:pl-[6.25rem]  xl:pr-6 3xl:pl-[9.375rem]  '>
          <div className='content-wrapper'>
            <div className='flex justify-center lg:inline-block'>
              <span className='rounded-full bg-secondary px-2 py-1 text-white'>An ISO 9001:2015 Certified Company</span>
            </div>
            <TypewriterEffectSmoothV2
              words={
                data?.title
                  ?.split(/\s+/)
                  .filter((word) => word.length > 0)
                  .map((text) => ({ text })) || []
              }
              cursorClassName='hidden'
              className='mt-1'
            />
          </div>
          <div className='flex flex-col gap-6'>
            <CommonParargraph text={data?.description} className='text-center lg:text-left' delay={0.6} />
            <div className='flex flex-row items-start justify-start gap-4 max-lg:items-center max-lg:justify-center'>
              <CommonButton href='/contact-us?form=general_enquiry' />
              <CommonButton href='/ourwork' text='Learn More' variant='secondary' className='w-fit' />
            </div>
          </div>
        </div>
      </CommonAnimation>

      <CommonAnimation className='w-full xl:w-3/5'>
        <span>
          <svg
            width='100%'
            height='853'
            viewBox='0 0 1090 853'
            className='size-full'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <clipPath id='mainimage'>
                <path d='M441.624 476.946L623.589 592.625L626.589 595.618L856.589 499.514L894.089 419.014L904.233 304.25C910.221 236.504 866.654 174.254 800.953 156.679L697.762 129.077C660.595 119.135 620.914 127.617 591.06 151.886L430.309 282.562C366.744 334.234 372.493 432.998 441.624 476.946Z' />
              </clipPath>
            </defs>
            <defs>
              <mask id='mask1'>
                <rect x='698' y='452' width='290.757' height='240.436' rx='16' fill='white' />
              </mask>

              <mask id='mask2'>
                <rect x='142' y='576' width='359' height='232.455' rx='16' fill='white' />
              </mask>
              <mask id='mask3'>
                <rect
                  x='95'
                  y='76'
                  width='205.918'
                  height='209.509'
                  rx='16'
                  fill='white'
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent, white 0%, white 70%, transparent)',
                  }}
                />
              </mask>
              <mask id='mask4'>
                <rect x='640' y='32' width='79' height='76' rx='12' fill='white' />
              </mask>
            </defs>

            <path
              d='M349.097 1.99532C-9.88632 208.312 -20.6889 654.632 12.0518 853H1090V0L349.097 1.99532Z'
              fill='white'
            />
            <path d='M1090 853L7 853L856 499.828L856.047 499.899L1090 0V853Z' fill='#FF7500' />
            {/* main image  */}
            <image
              href={image?.src}
              x='300'
              y='20'
              width='65%'
              height='70%'
              preserveAspectRatio='xMidYMid meet'
              clipPath='url(#mainimage)'
            />
            <path
              d='M441.624 476.946L623.589 592.625L626.589 595.618L856.589 499.514L894.089 419.014L904.233 304.25C910.221 236.504 866.654 174.254 800.953 156.679L697.762 129.077C660.595 119.135 620.914 127.617 591.06 151.886L430.309 282.562C366.744 334.234 372.493 432.998 441.624 476.946Z'
              fill='none'
            />
            <g>
              <rect x='698' y='452' width='290.757' height='240.436' rx='16' fill='url(#paint0_linear_5821_170818)' />
              <image
                href={data?.image[3]?.url}
                x='698'
                y='452'
                width='290.757'
                height='240.436'
                preserveAspectRatio='xMidYMid slice'
                mask='url(#mask1)'
              />
            </g>

            <g>
              <rect x='142' y='576' width='359' height='232.455' rx='16' fill='url(#image3)' />
              <image
                href={data?.image[2]?.url}
                x='142'
                y='576'
                width='359'
                height='232.455'
                preserveAspectRatio='xMidYMid slice'
                mask='url(#mask2)'
              />
            </g>

            <g>
              <rect x='95' y='76' width='205.918' height='209.509' rx='16' fill='url(#image2)' />
              <image
                href={data?.image[1]?.url}
                x='95'
                y='76'
                width='205.918'
                height='209.509'
                preserveAspectRatio='xMidYMid slice'
                mask='url(#mask3)'
                stroke='white'
                strokeWidth={0}
              />
            </g>

            <g>
              <rect x='640' y='32' width='79' height='76' rx='12' fill='url(#image1)' />
              <image
                href={data?.image[0]?.url}
                x='640'
                y='32'
                width='79'
                height='76'
                preserveAspectRatio='xMidYMid slice'
                mask='url(#mask4)'
              />
            </g>

            <g>
              <defs>
                <linearGradient id='gradient1' x1='2%' y1='100%' x2='98%' y2='0%'>
                  <stop offset='-10.17%' stop-color='#FFFFFF' />
                  <stop offset='103.38%' stop-color='#F1EDFF' />
                </linearGradient>
              </defs>

              <rect x='747' y='67.8379' width='252' height='45.2269' rx='8' fill='url(#gradient1)' />
              <path
                xmlns='http://www.w3.org/2000/svg'
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M753.25 78.6133C753.25 71.0194 759.406 64.8633 767 64.8633C774.594 64.8633 780.75 71.0194 780.75 78.6133C780.75 86.2072 774.594 92.3633 767 92.3633C759.406 92.3633 753.25 86.2072 753.25 78.6133ZM761.792 78.6133C761.37 78.6133 760.991 78.3523 760.829 77.9519C760.668 77.5515 760.757 77.0907 761.055 76.7843L766.263 71.4271C766.67 71.0087 767.33 71.0087 767.737 71.4271L772.945 76.7843C773.243 77.0907 773.332 77.5515 773.171 77.9519C773.01 78.3523 772.63 78.6133 772.208 78.6133H769.5V84.8633C769.5 85.5537 768.94 86.1133 768.25 86.1133H765.75C765.06 86.1133 764.5 85.5537 764.5 84.8633V78.6133H761.792Z'
                fill='#3D2D72'
                transform='translate(5,12)'
              />
              <text
                x='795'
                y='97'
                fill='#3C3C46'
                style={{ whiteSpace: 'pre', color: '#3C3C46' }}
                fontFamily='Lato'
                fontSize='16'
                fontWeight='bold'
              >
                50+ Tech. solutions delivered
              </text>
            </g>
          </svg>
        </span>
      </CommonAnimation>
    </div>
  );
};

export default Hero;
