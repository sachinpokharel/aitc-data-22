import { cn } from '@/utils/cn';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import TranslateXAnimation from '@/components/common/animation/TranslateXAnimation';
import TranslateYAnimation from '@/components/common/animation/TranslateYAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonTitleV2 } from '@/components/common/CommonTitle';

const Compliance = () => {
  return (
    <CommonAnimation className={cn('main-common-padding overflow-x-hidden bg-lightShad2')}>
      <div className='mx-auto flex max-w-[1354px] flex-col items-center justify-center gap-10 xl:flex-row xl:items-start xl:gap-[84px]'>
        <div className='flex flex-col items-center gap-[52px] overflow-hidden  lg:max-w-[510px] lg:items-start'>
          <CommonTitleV2
            main='Our Commitment to'
            secondary='Security & Compliance'
            className='text-center xl:text-left'
          />
          <TranslateYAnimation
            translateY='80px'
            className='relative h-[200px] w-[300px] xss:h-[280px] xss:w-[390px] sm:h-[363px] sm:w-[509px] xl:w-[400px] 2xl:w-[509px]'
          >
            <Image src={'/images/compliance.png'} alt='why-seo' fill className='rounded-lg object-contain ' />
          </TranslateYAnimation>
        </div>
        <div className='flex flex-col gap-8 xl:max-w-[580px]'>
          <div className='flex flex-col gap-8'>
            {
              <CommonParargraph
                text={
                  'At AITC International, security and regulatory compliance are integral to every solution we develop. As an ISO 9001:2015 certified company based in Nepal, we deliver cost-effective solutions with the highest security standards. '
                }
              />
            }

            {data?.map((item, index) => (
              <TranslateXAnimation key={index} translateX='50px' delay={index * 0.2}>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-4'>
                    <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                    <p className='text-lg font-black leading-[150%] tracking-[0.36px]'>{item?.title}</p>
                  </div>
                  <CommonParargraph text={item?.description} />
                  {/* Check if bullets exist and render them */}
                  {item?.bullets && (
                    <ul className='list-disc pl-8 md:pl-14'>
                      {item.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className='mb-2 marker:text-2xl marker:text-primary'>
                          <span className='mr-1 font-extrabold text-secondary'>{bullet.label}</span> {bullet.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </TranslateXAnimation>
            ))}
          </div>

          <div className='flex items-center justify-center xl:items-start xl:justify-start'>
            <CommonButton
              target='_blank'
              href='https://calendly.com/aitc-schedule/30min'
              text='Book a free consultation'
            />
          </div>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Compliance;

const data = [
  {
    title: 'End-to-end Security',
    description:
      'We apply strong security practices, including threat modeling, encrypted data storage, secure code reviews, and strict access controls to protect your systems against potential risks.',
  },
  {
    title: 'Regulatory Compliance Expertise',
    description:
      'Our team is experienced in developing solutions that adhere to international regulations and standards, including:',
    bullets: [
      {
        label: 'GDPR',
        text: 'For data privacy and user rights',
      },
      {
        label: 'CCPA',
        text: 'For consumer data protection and privacy rights (California)',
      },
      {
        label: 'WCAG',
        text: 'Web accessibility for people with disabilities',
      },
      {
        label: 'ISO 9001:2015',
        text: 'For quality management systems',
      },
    ],
  },
  {
    title: 'Proactive Monitoring & Testing',
    description:
      'We perform continuous monitoring, regular security audits, and penetration testing to identify and address vulnerabilities before they can affect your business.',
  },
];
