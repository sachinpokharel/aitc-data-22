'use client';

import { delays } from '@/utils/animation-config';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const pricingTiers = [
  {
    role: 'Mid-level Engineer',
    price: '$25–$40/hr',
  },
  {
    role: 'Senior Engineer',
    price: '$40–$65/hr',
  },
  {
    role: 'QA Automation',
    price: '$25–$50/hr',
  },
  {
    role: 'Dedicated Team (3–5 roles)',
    price: '$8,000–$25,000/mo',
  },
];

const Pricing = () => {
  return (
    <CommonAnimation className='common-padding common-section'>
      <div className='flex flex-col items-center gap-12'>
        <CommonTitle title='Typical Pricing for USA Clients' className='text-center' delay={delays.medium} />
        <div className='w-full max-w-[1250px]'>
          <CommonParargraph
            text='We offer flexible pricing based on seniority, tech stack, and overlap hours with your US timezone. All engagements include sprint delivery, code reviews, QA process, and ISO-aligned quality controls.'
            className='mb-8 text-center'
          />
          <div className='mb-6'>
            <CommonHeader title='Hourly & Monthly Rates' className='mb-6 text-center text-xl font-bold' />
            <div className='overflow-hidden rounded-lg border-2 border-gray-200 bg-white'>
              <div className='divide-y divide-gray-200'>
                {pricingTiers.map((tier, index) => (
                  <CommonAnimation
                    key={index}
                    delay={index * 0.1}
                    className='flex flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between'
                  >
                    <CommonHeader title={tier.role} className='text-base font-semibold' />
                    <p className='text-lg font-semibold text-primary md:text-xl'>{tier.price}</p>
                  </CommonAnimation>
                ))}
              </div>
            </div>
          </div>
          <div className='mb-8 rounded-lg bg-lightShad2 p-6'>
            <p className='mb-2 text-sm font-semibold text-mainBlack'>
              Minimum engagement: 1 developer for 1 month or projects starting at $5,000.
            </p>
            <p className='text-sm italic text-gray-600'>
              Final pricing depends on scope, timelines, and required skill sets.
            </p>
          </div>
          <div className='flex justify-center'>
            <CommonButton href='/contact-us?form=service_enquiry' text='Get a Custom Quote' />
          </div>
        </div>
      </div>
    </CommonAnimation>
  );
};

export default Pricing;
