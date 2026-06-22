'use client';

import { delays } from '@/utils/animation-config';
import { IoLogoUsd, IoTimeSharp } from 'react-icons/io5';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle, { CommonHeader } from '@/components/common/CommonTitle';

const keyAdvantages = ['Easy to Work With', 'Fast Team Onboarding', 'Built for Long-Term Projects'];

const benefits = [
  {
    title: 'Flexible Time Zones',
    description: 'Work with dedicated overlap hours that fit your US schedule (EST / CST / PST).',
    iconColor: 'bg-[#FF7500]',
    icon: <IoTimeSharp className='size-6 text-white' />,
  },
  {
    title: 'Skilled & Experienced Talent',
    description: 'Senior engineers, architects, QA, and DevOps—screened for communication and delivery quality.',
    iconColor: 'bg-[#1E3A8A]',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' fill='none'>
        <path
          d='M11.6562 26.25V19.6038C10.3229 19.4929 9 19.3489 7.6875 19.1719C6.375 18.9948 5.0625 18.75 3.75 18.4375L4.21875 16.5625C5.98958 16.9792 7.77231 17.2761 9.56687 17.4531C11.3614 17.6302 13.1771 17.7188 15.0138 17.7188C16.8296 17.7188 18.6348 17.6302 20.4294 17.4531C22.2238 17.2761 24.0077 16.9792 25.7812 16.5625L26.25 18.4375C24.9375 18.75 23.627 18.9959 22.3184 19.1753C21.0101 19.3547 19.6852 19.4942 18.3438 19.5938V26.25H11.6562ZM15 15.8125C14.375 15.8125 13.8386 15.5886 13.3906 15.1406C12.9427 14.6927 12.7188 14.1516 12.7188 13.5172C12.7188 12.9016 12.9427 12.3698 13.3906 11.9219C13.8386 11.4739 14.3797 11.25 15.0141 11.25C15.6297 11.25 16.1614 11.4733 16.6094 11.92C17.0573 12.3669 17.2812 12.9039 17.2812 13.5312C17.2812 14.1562 17.0579 14.6927 16.6112 15.1406C16.1644 15.5886 15.6273 15.8125 15 15.8125ZM5.30937 12.1875C4.87396 12.1875 4.50521 12.0364 4.20312 11.7344C3.90104 11.4323 3.75 11.0636 3.75 10.6281C3.75 10.2094 3.90104 9.84375 4.20312 9.53125C4.50521 9.21875 4.87396 9.0625 5.30937 9.0625C5.72812 9.0625 6.09375 9.21875 6.40625 9.53125C6.71875 9.84375 6.875 10.2094 6.875 10.6281C6.875 11.0636 6.71875 11.4323 6.40625 11.7344C6.09375 12.0364 5.72812 12.1875 5.30937 12.1875ZM24.6844 12.1875C24.2489 12.1875 23.8802 12.0364 23.5781 11.7344C23.2761 11.4323 23.125 11.0636 23.125 10.6281C23.125 10.2094 23.2761 9.84375 23.5781 9.53125C23.8802 9.21875 24.2489 9.0625 24.6844 9.0625C25.1031 9.0625 25.4688 9.21875 25.7812 9.53125C26.0938 9.84375 26.25 10.2094 26.25 10.6281C26.25 11.0636 26.0938 11.4323 25.7812 11.7344C25.4688 12.0364 25.1031 12.1875 24.6844 12.1875ZM9.05937 7.5C8.62394 7.5 8.25519 7.34894 7.95312 7.04688C7.65106 6.74481 7.5 6.37606 7.5 5.94063C7.5 5.52188 7.65106 5.15625 7.95312 4.84375C8.25519 4.53125 8.62394 4.375 9.05937 4.375C9.47813 4.375 9.84375 4.53125 10.1562 4.84375C10.4688 5.15625 10.625 5.52188 10.625 5.94063C10.625 6.37606 10.4688 6.74481 10.1562 7.04688C9.84375 7.34894 9.47813 7.5 9.05937 7.5ZM20.9344 7.5C20.4989 7.5 20.1302 7.34894 19.8281 7.04688C19.5261 6.74481 19.375 6.37606 19.375 5.94063C19.375 5.52188 19.5261 5.15625 19.8281 4.84375C20.1302 4.53125 20.4989 4.375 20.9344 4.375C21.3531 4.375 21.7188 4.53125 22.0312 4.84375C22.3438 5.15625 22.5 5.52188 22.5 5.94063C22.5 6.37606 22.3438 6.74481 22.0312 7.04688C21.7188 7.34894 21.3531 7.5 20.9344 7.5ZM14.9969 5.625C14.5614 5.625 14.1927 5.47396 13.8906 5.17187C13.5886 4.86979 13.4375 4.50104 13.4375 4.06563C13.4375 3.64688 13.5886 3.28125 13.8906 2.96875C14.1927 2.65625 14.5614 2.5 14.9969 2.5C15.4156 2.5 15.7812 2.65625 16.0938 2.96875C16.4062 3.28125 16.5625 3.64688 16.5625 4.06563C16.5625 4.50104 16.4062 4.86979 16.0938 5.17187C15.7812 5.47396 15.4156 5.625 14.9969 5.625Z'
          fill='white'
        />
      </svg>
    ),
  },
  {
    title: 'Lower Cost, High Quality',
    description: 'Reduce engineering costs without compromising on standards, testing, or delivery reliability.',
    iconColor: 'bg-[#14B8A6]',
    icon: <IoLogoUsd className='size-6 text-white' />,
  },
  {
    title: 'ISO-Certified Delivery',
    description: 'Process maturity and quality controls aligned with ISO standards.',
    iconColor: 'bg-[#3B82F6]',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='28' height='27' viewBox='0 0 28 27' fill='none'>
        <path
          d='M9.5625 26.25L7.1875 22.1875L2.46875 21.2188L3 16.625L0 13.125L3 9.65625L2.46875 5.0625L7.1875 4.09375L9.5625 0L13.75 1.9375L17.9375 0L20.3438 4.09375L25.0312 5.0625L24.5 9.65625L27.5 13.125L24.5 16.625L25.0312 21.2188L20.3438 22.1875L17.9375 26.25L13.75 24.3125L9.5625 26.25ZM12.4062 17.2812L19.5 10.25L18.0938 8.96875L12.4062 14.5938L9.4375 11.5L8 12.9062L12.4062 17.2812Z'
          fill='white'
        />
      </svg>
    ),
  },
  {
    title: 'Transparent Sprint Delivery',
    description: 'Weekly demos, clear sprint reporting, and full visibility in Jira, GitHub, and Slack.',
    iconColor: 'bg-[#6B7280]',
    iconShape: 'rounded-lg',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='25' height='28' viewBox='0 0 25 28' fill='none'>
        <path
          d='M11.25 11.5312L2.90625 6.68749L1.875 7.27062V8.24999L11.25 13.6562L20.625 8.21874V7.28124L19.5625 6.68749L11.25 11.5312ZM10.3125 24.9375L0.9375 19.5312C0.640625 19.3556 0.410206 19.1242 0.24625 18.8372C0.0820813 18.5499 0 18.2396 0 17.9062V7.28124C0 6.94793 0.0820813 6.63762 0.24625 6.35031C0.410206 6.06324 0.640625 5.83187 0.9375 5.65624L10.3125 0.25C10.6111 0.0833312 10.9252 0 11.255 0C11.585 0 11.8958 0.0833312 12.1875 0.25L21.5625 5.65624C21.8594 5.83187 22.0899 6.06324 22.2541 6.35031C22.418 6.63762 22.5 6.94793 22.5 7.28124V14.6562C21.9792 14.3854 21.4283 14.1823 20.8475 14.0469C20.2669 13.9114 19.6719 13.8437 19.0625 13.8437C16.9375 13.8437 15.1042 14.6103 13.5625 16.1434C12.0208 17.6766 11.25 19.5275 11.25 21.6962C11.25 22.2946 11.3177 22.875 11.4531 23.4375C11.5886 24 11.7812 24.5312 12.0312 25.0312C11.7396 25.1562 11.4479 25.2136 11.1562 25.2031C10.8646 25.1927 10.5833 25.1042 10.3125 24.9375ZM19.0625 27.5937C17.4375 27.5937 16.0417 27.0167 14.875 25.8625C13.7083 24.7083 13.125 23.3125 13.125 21.675C13.125 20.0375 13.7083 18.6354 14.875 17.4687C16.0417 16.3021 17.4375 15.7187 19.0625 15.7187C20.6875 15.7187 22.0833 16.3007 23.25 17.4647C24.4167 18.6284 25 20.0361 25 21.6875C25 23.3214 24.4167 24.7144 23.25 25.8662C22.0833 27.0179 20.6875 27.5937 19.0625 27.5937ZM19.7188 21.5312V17.6562H18.4062V21.8994L21.5 24.75L22.3438 23.9062L19.7188 21.5312Z'
          fill='white'
        />
      </svg>
    ),
  },
];

const WhyChoose = () => {
  return (
    <CommonAnimation className='main-common-padding py-20'>
      <div className='mx-auto flex w-full max-w-[1300px] flex-col gap-12'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
          <div className='flex flex-1 flex-col gap-6 lg:max-w-[600px]'>
            <CommonTitle
              title='Why USA Companies Choose AITC International'
              className='text-left'
              delay={delays.medium}
            />
            <CommonParargraph
              text='AITC International is trusted by USA companies for its dependable processes, experienced teams, and commitment to quality. The focus is always on long-term partnerships and measurable results.'
              className='text-base leading-relaxed text-grey'
            />
            <div className='w-fit'>
              <CommonButton href='/why-us' text='Explore our services' variant='primary' delay={delays.medium + 0.1} />
            </div>
          </div>

          <div className='relative hidden flex-col gap-4 lg:flex lg:w-[400px] lg:shrink-0'>
            {keyAdvantages.map((advantage, index) => {
              const rotations = [2, -2, 2];
              return (
                <CommonAnimation
                  key={index}
                  delay={delays.medium + index * 0.1}
                  className={`absolute ${
                    index === 0 ? 'left-12 top-0' : index === 1 ? 'left-0 top-24' : 'left-6 top-48'
                  }`}
                >
                  <div
                    className='flex w-fit flex-row items-center gap-3 rounded-lg bg-[linear-gradient(12.43deg,#FFFFFF_-10.17%,#F1EDFF_103.38%)] p-2'
                    style={{ transform: `rotate(${rotations[index]}deg)` }}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0.00867666 14.23C-0.256347 6.64074 5.68115 0.273559 13.2704 0.00853526C20.8597 -0.256487 27.2269 5.681 27.4919 13.2703C27.7569 20.8595 21.8194 27.2268 14.2302 27.4918C6.64088 27.7568 0.273699 21.8193 0.00867666 14.23ZM8.54516 13.9319C8.12411 13.9466 7.7354 13.699 7.5603 13.3045C7.38519 12.91 7.45818 12.4463 7.74522 12.1297L12.7633 6.59406C13.1554 6.1617 13.8145 6.13868 14.2357 6.54264L19.6277 11.7148C19.9361 12.0106 20.0413 12.4681 19.8941 12.8738C19.747 13.2796 19.3765 13.5537 18.9554 13.5684L16.2488 13.6629L16.4669 19.9091C16.491 20.5991 15.9512 21.1779 15.2613 21.202L12.7628 21.2892C12.0729 21.3133 11.494 20.7736 11.4699 20.0836L11.2518 13.8374L8.54516 13.9319Z'
                        fill='#3D2D72'
                      />
                    </svg>
                    <span className='text-base font-semibold text-mainBlack'>{advantage}</span>
                  </div>
                </CommonAnimation>
              );
            })}
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {benefits.map((benefit, index) => (
            <CommonAnimation
              key={index}
              delay={delays.medium + index * 0.1}
              className='flex flex-col gap-4 rounded-2xl bg-lightShad2 p-6'
            >
              <div className='flex flex-row items-center gap-4'>
                <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${benefit.iconColor}`}>
                  {benefit.icon}
                </div>
                <CommonHeader title={benefit.title} className='text-lg font-bold text-mainBlack' />
              </div>
              <CommonParargraph text={benefit.description} className='text-base leading-relaxed text-grey' />
            </CommonAnimation>
          ))}
        </div>
      </div>
    </CommonAnimation>
  );
};

export default WhyChoose;
