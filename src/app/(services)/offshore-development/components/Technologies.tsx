'use client';

import { delays } from '@/utils/animation-config';
import { type Stack } from '@/types/aboutus/techsuite';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import Menu from '@/components/pages/aboutus/TechSuite/Menu';

// Dummy data
const sectionTitle = 'Technologies';
const mainTitle = 'Technologies We Work With';
const description =
  'We leverage cutting-edge technologies and frameworks to build scalable, high-performance solutions tailored to your business needs.';

const stacks: Stack[] = [
  {
    id: 1,
    name: 'Frontend',
    techstackId: 1,
    stackItems: [
      { id: 1, icon: '/icons/techstack/React.svg' },
      { id: 2, icon: '/icons/techstack/Next.js.svg' },
      { id: 3, icon: '/icons/techstack/Angular.svg' },
      { id: 4, icon: '/icons/techstack/Vue.js.svg' },
    ],
  },
  {
    id: 2,
    name: 'Backend',
    techstackId: 2,
    stackItems: [
      { id: 5, icon: '/icons/techstack/Node.js.svg' },
      { id: 6, icon: '/icons/techstack/Python.svg' },
      { id: 7, icon: '/icons/techstack/NET.svg' },
      { id: 9, icon: '/icons/techstack/Java.svg' },
      { id: 10, icon: '/icons/techstack/PHP.svg' },
    ],
  },
  {
    id: 3,
    name: 'Mobile',
    techstackId: 3,
    stackItems: [
      { id: 11, icon: '/icons/techstack/Flutter.svg' },
      { id: 12, icon: '/icons/techstack/React.svg' },
      { id: 13, icon: '/icons/techstack/ios.svg' },
      { id: 14, icon: '/icons/techstack/android.svg' },
    ],
  },
  {
    id: 4,
    name: 'Cloud',
    techstackId: 4,
    stackItems: [
      { id: 15, icon: '/icons/techstack/AWS.svg' },
      { id: 16, icon: '/icons/techstack/Azure.svg' },
      { id: 17, icon: '/icons/techstack/GCP.svg' },
    ],
  },
  {
    id: 5,
    name: 'Databases',
    techstackId: 5,
    stackItems: [
      { id: 18, icon: '/icons/techstack/MySQL.svg' },
      { id: 19, icon: '/icons/techstack/PostgresSQL.svg' },
      { id: 20, icon: '/icons/techstack/MongoDB.svg' },
      { id: 21, icon: '/icons/techstack/Redis.svg' },
    ],
  },
  {
    id: 6,
    name: 'DevOps',
    techstackId: 6,
    stackItems: [
      { id: 22, icon: '/icons/techstack/Docker.svg' },
      { id: 23, icon: '/icons/techstack/Kubernetes.svg' },
      { id: 24, icon: '/icons/techstack/Terraform.svg' },
    ],
  },
  {
    id: 7,
    name: 'QA',
    techstackId: 7,
    stackItems: [
      { id: 25, icon: '/icons/techstack/Cypress.svg' },
      { id: 26, icon: '/icons/techstack/Selenium.svg' },
      { id: 27, icon: '/icons/techstack/Postman.svg' },
      { id: 28, icon: '/icons/techstack/Playwrite.svg' },
    ],
  },
];

const Technologies = () => {
  return (
    <CommonAnimation className='tech-suite bg-lightShad2'>
      <div className='common-padding mx-auto flex max-w-screen-lg flex-col items-center gap-10 py-[3.75rem] xmd:gap-[3.25rem] xmd:py-20 xl:py-[6.25rem] '>
        <div className='flex flex-col gap-8 xmd:px-10'>
          <div className='flex flex-col items-center gap-2'>
            <CommonChip text={sectionTitle} />
            <CommonTitle title={mainTitle} className='text-center' delay={delays.medium} />
          </div>
          <CommonParargraph text={description} className='text-center' delay={delays.long} />
        </div>
        <Menu menu={stacks} />
      </div>
    </CommonAnimation>
  );
};

export default Technologies;
