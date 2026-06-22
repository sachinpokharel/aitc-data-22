'use client';

import { useState } from 'react';

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  subheading?: string;
}

export default function FAQSection({ faqs, heading = 'Frequently Asked Questions', subheading }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className='common-padding bg-white py-12 md:py-16'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-secondary md:text-3xl'>{heading}</h2>
          {subheading && <p className='mt-2 text-lg text-grey'>{subheading}</p>}
        </div>

        <div className='divide-y divide-lightShade1 overflow-hidden rounded-2xl border border-lightShade1'>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={isOpen ? 'bg-lightShad2' : 'bg-white'}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className='flex w-full items-start justify-between px-6 py-5 text-left'
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold leading-snug transition-colors ${
                      isOpen ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen ? 'border-primary bg-primary text-white' : 'border-lightShade1 bg-white text-grey'
                    }`}
                  >
                    <svg
                      className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className='overflow-hidden'>
                    <div className='border-t border-lightShade1 px-6 pb-6 pt-4'>
                      <p className='text-base leading-relaxed text-grey'>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
