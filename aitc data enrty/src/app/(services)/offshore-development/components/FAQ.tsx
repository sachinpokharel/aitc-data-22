'use client';

import { delays } from '@/utils/animation-config';
import { useState } from 'react';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';
import FAQAccordion from '@/components/pages/Home/FAQSection/FAQAccordion';

const faqData = [
  {
    id: 1,
    question: 'How do you handle time zone differences with the USA?',
    answer:
      'We offer flexible schedules with dedicated overlap hours (EST/CST/PST). We also use structured async updates to avoid delays.',
  },
  {
    id: 2,
    question: 'How do you ensure quality?',
    answer:
      'We follow ISO-aligned processes, enforce code reviews, testing standards, CI/CD pipelines, and QA automation for stable releases.',
  },
  {
    id: 3,
    question: 'Who owns the source code and IP?',
    answer:
      'You do. All work is delivered to your repos, and contracts include full IP assignment and confidentiality.',
  },
  {
    id: 4,
    question: 'Can I start with one developer and scale later?',
    answer: 'Yes. Many USA clients start small and scale once the team proves delivery.',
  },
  {
    id: 5,
    question: 'What if a team member leaves?',
    answer:
      'We maintain a replacement process and can backfill quickly while maintaining documentation and continuity.',
  },
  {
    id: 6,
    question: 'How fast can you start?',
    answer: 'Typically 7–14 days depending on role requirements and screening needs.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <CommonAnimation className='faq-component-main flex min-h-[860px] flex-col xl:flex-row'>
      <div className='faq-header relative'>
        <div
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: ' center',
          }}
          className='-z-10 flex  min-h-[700px] w-full flex-col items-center justify-center gap-4 bg-[url("/svg/FAQMobile.svg")] max-sm:min-h-[500px]  md:bg-[url("/svg/FAQTablet.svg")] lg:h-[500px]  xl:size-[600px] xl:bg-[url("/svg/FAQWeb.svg")]'
        >
          <div className='flex w-3/4 flex-row items-center justify-center  xl:items-start xl:justify-start'>
            <Image
              src='/deletable/questionmark.png'
              alt='FAQ'
              width={103}
              height={131}
              className='size-14 object-contain sm:size-28'
            />
          </div>

          <div className='flex w-3/4 flex-col items-center gap-8 max-xmd:w-4/5  xl:items-start'>
            <CommonTitle title='FAQs' className='text-center xl:text-left' delay={delays.medium} />
            <p className='text-center text-base text-gray-700 xl:text-left'>
              Frequently asked questions about our offshore development services
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col gap-[18px] px-6 py-14 lg:px-16 lg:py-20 xl:px-[80px] xl:py-[150px]'>
        {faqData.map((item, index) => (
          <FAQAccordion
            key={item.id}
            question={item.question}
            answer={item.answer}
            open={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </CommonAnimation>
  );
};

export default FAQ;
