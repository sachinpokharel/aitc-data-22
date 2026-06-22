import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';
import MarqueeComponent from '@/components/pages/Home/CollaborativePartners/MarqueeComponent';

const dummyPartners = [
  {
    id: 1,
    name: 'TechCorp',
    companyLogoUrl: '/offshore/item1.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 2,
    name: 'InnovateLabs',
    companyLogoUrl: '/offshore/item2.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 3,
    name: 'DigitalSolutions',
    companyLogoUrl: '/offshore/item3.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 4,
    name: 'CloudSystems',
    companyLogoUrl: '/offshore/item4.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 5,
    name: 'DataWorks',
    companyLogoUrl: '/offshore/item5.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 6,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item6.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 7,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item7.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 8,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item8.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 9,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item9.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 10,
    name: 'TechCorp',
    companyLogoUrl: '/offshore/item1.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 11,
    name: 'InnovateLabs',
    companyLogoUrl: '/offshore/item2.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 12,
    name: 'DigitalSolutions',
    companyLogoUrl: '/offshore/item3.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 13,
    name: 'CloudSystems',
    companyLogoUrl: '/offshore/item4.png',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 14,
    name: 'DataWorks',
    companyLogoUrl: '/offshore/item5.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 15,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item6.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 16,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item7.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 17,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item8.webp',
    socialMediaLink: 'https://www.example.com',
  },
  {
    id: 18,
    name: 'AppDev Inc',
    companyLogoUrl: '/offshore/item9.webp',
    socialMediaLink: 'https://www.example.com',
  },
];

const Partners = () => {
  return (
    <CommonAnimation className='collaborative-partners-main common-section common-padding flex w-screen max-w-[1350px] flex-col items-center overflow-hidden bg-white'>
      <div className='flex flex-col items-center gap-8'>
        <CommonTitle
          title='Trusted by product teams in FinTech, SaaS, eCommerce, Healthcare, Logistics'
          className='text-center'
          delay={delays.medium}
        />
      </div>
      <CommonAnimation className='scrollbar-wrapper relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased'>
        <MarqueeComponent pauseOnHover className={cn(`[--duration:30s`)}>
          <ul className='flex w-max min-w-full flex-nowrap items-center justify-center gap-8 overflow-hidden py-4 lg:gap-16'>
            {dummyPartners.map((item, idx) => (
              <li
                className='flex flex-row gap-16'
                style={{
                  background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                }}
                key={idx + 1}
              >
                <div
                  // target='_blank'
                  // rel='noopener noreferrer'
                  // href={item.socialMediaLink ? item.socialMediaLink : '#'}
                  className={item.socialMediaLink ? '' : 'pointer-events-none'}
                >
                  <Image
                    src={item.companyLogoUrl}
                    alt={item.name || 'logo'}
                    width={100}
                    height={100}
                    className='max-h-[75px] object-contain'
                  />
                </div>
              </li>
            ))}
          </ul>
        </MarqueeComponent>
      </CommonAnimation>
    </CommonAnimation>
  );
};

export default Partners;
