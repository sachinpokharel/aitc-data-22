'use client';

import { delays } from '@/utils/animation-config';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const securityFeatures = [
  'ISO Certified quality processes',
  'NDA and IP protection (you fully own the code)',
  'Secure access controls for repos and environments',
  'Code reviews and documented engineering standards',
  'QA automation and release readiness checks',
  'Transparent delivery reporting (Jira + GitHub visibility)',
];

const data = {
  title: 'Security, Quality, and Ownership—Built In',
  image: '/offshore/security.png',
  description:
    'We prioritize security, quality, and transparency in every aspect of our offshore development process. Your intellectual property is protected, and you maintain full ownership of all code and deliverables.',
  points: securityFeatures,
};

const Security = () => {
  return (
    <div className='security'>
      <CommonAnimation className='common-padding common-section flex max-w-[1350px] flex-col items-center gap-14'>
        <CommonTitle title={data.title} delay={delays.long} />
        <div className='flex flex-col place-content-center items-start gap-14 md:flex-row md:items-start '>
          <div className='flex flex-col items-center gap-12 max-md:w-full max-md:justify-center'>
            <Image
              src={data.image}
              alt='security'
              width={450}
              height={500}
              className='size-full rounded-2xl object-cover max-md:max-w-[300px]'
            />
          </div>
          <div className='flex flex-col gap-14'>
            <div className='flex flex-col gap-4'>
              <CommonParargraph text={data.description} className=' text-start font-bold' delay={delays.longer} />
              {/* <CommonParargraph text={data.description} className='text-start' delay={delays.longer} /> */}
              {data.points.map((item) => (
                <Fade direction='up' key={item} delay={delays.extralong} cascade={true} fraction={0.7} duration={2000}>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                      <Image src='/icons/arrow.png' alt='check' width={20} height={20} className='h-6 w-4' />
                      <CommonParargraph text={item} />
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
            <CommonButton href='/contact-us' text='Book a free consultation' className='mx-auto xmd:mx-0' />
          </div>
        </div>
      </CommonAnimation>
    </div>
  );
};

export default Security;
