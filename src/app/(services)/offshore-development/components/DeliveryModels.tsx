'use client';

import { delays } from '@/utils/animation-config';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const models = [
  {
    title: 'Dedicated Team',
    subtitle: 'Dedicated Offshore Team (Monthly)',
    description: 'Best for ongoing development, scaling, and product roadmaps.',
    features: [
      'Dedicated developers + QA + PM (optional)',
      'Sprint-based delivery',
      'Your tools, your codebase, your roadmap',
      'Add/remove roles monthly',
    ],
    ctaText: 'Get Dedicated Team Pricing',
    ctaLink: '/contact-us?form=service_enquiry&service=dedicated_team',
  },
  {
    title: 'Project Delivery',
    subtitle: 'Project-Based Delivery (Fixed Price or Milestone)',
    description: 'Best when scope and timeline are clear (MVP builds, platform modules, redesigns).',
    features: [
      'Requirements workshop + delivery plan',
      'Dedicated project team',
      'Defined milestones + acceptance criteria',
      'Testing + documentation included',
    ],
    ctaText: 'Request a Project Estimate',
    ctaLink: '/contact-us?form=service_enquiry&service=project_delivery',
  },
  {
    title: 'Hybrid Model',
    subtitle: 'Hybrid Model (Team + Project Lead)',
    description: 'Best for startups or companies that want fast execution with strong guidance.',
    features: [
      'Project manager/product owner support',
      'Dedicated team execution',
      'Weekly roadmap planning + delivery',
    ],
    ctaText: 'Book a Free Consultation',
    ctaLink: '/contact-us?form=book_a_consultation&service=hybrid',
  },
];

const DeliveryModels = () => {
  return (
    <CommonAnimation className='main-common-padding max-w-[1450px] py-20'>
      <div className='flex flex-col items-center gap-12'>
        <CommonTitle title='Choose Your Delivery Model' className='text-center' delay={delays.medium} />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {models.map((model, index) => (
            <CommonAnimation
              key={index}
              delay={index * 0.1}
              className='flex flex-col gap-4 rounded-lg border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary hover:shadow-md'
            >
              <div>
                <CommonHeader title={model.title} />
                <p className='mt-1 text-sm font-semibold text-primary'>{model.subtitle}</p>
              </div>
              <CommonParargraph text={model.description} className='text-gray-700' />
              <ul className='flex flex-col gap-2'>
                {model.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center gap-2 text-sm text-gray-700'>
                    <span className='mt-1 text-primary'>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-auto pt-4'>
                <CommonButton href={model.ctaLink} text={model.ctaText} variant='primary' />
              </div>
            </CommonAnimation>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default DeliveryModels;
