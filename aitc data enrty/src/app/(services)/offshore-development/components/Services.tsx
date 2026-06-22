'use client';

import { delays } from '@/utils/animation-config';
import { Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';
import CardMagnetAnimation from '@/components/common/animation/CardMagnetAnimation';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';

const services = [
  {
    id: 1,
    name: 'Custom Software Development',
    title: 'Custom Software Development',
    description: 'Full-stack development for web apps, internal tools, APIs, and enterprise platforms.',
    imageUrl: '/offshore/software.webp',
    link: '/software-development',
  },
  {
    id: 2,
    name: 'Mobile App Development',
    title: 'Mobile App Development',
    description: 'iOS, Android, React Native, Flutter—designed for performance and scalable growth.',
    imageUrl: '/offshore/app.webp',
    link: '/mobile-application-development',
  },
  {
    id: 3,
    name: 'Web App Development',
    title: 'Web App Development',
    description: 'Custom web apps, SaaS platforms, enterprise solutions, and digital experiences.',
    imageUrl: '/offshore/web.webp',
    link: '/web-design',
  },
  {
    id: 4,
    name: 'QA & Test Automation',
    title: 'QA & Test Automation',
    description: 'Manual + automation frameworks for stable releases and reduced production issues.',
    imageUrl: '/icons/qa.png',
    link: '/managed-it-support-services/qa-and-testing',
  },
  {
    id: 5,
    name: 'Cloud & DevOps',
    title: 'Cloud & DevOps',
    description: 'CI/CD pipelines, AWS/Azure/GCP setup, monitoring, performance, security hardening.',
    imageUrl: '/icons/devops.png',
    link: '/managed-it-support-services/devops',
  },
  {
    id: 6,
    name: 'Maintenance & Support',
    title: 'Maintenance & Support',
    description: 'Long-term support, upgrades, bug fixes, feature enhancements, modernization.',
    imageUrl: '/offshore/support.webp',
    link: '/software-development/software-support-and-maintenance',
  },
];

const Services = () => {
  return (
    <CommonAnimation className='common-section common-padding flex flex-col items-center justify-center gap-14 bg-lightShad2 py-[60px] xl:py-24'>
      <CommonTitle
        title='Offshore Development Services for Web, Mobile & Cloud'
        className='text-center'
        delay={delays.medium}
      />
      <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3 2xxl:w-4/5'>
        {services.map((item) => (
          <Link href={item?.link} target='_blank' rel='noopener noreferrer' key={item.id}>
            <Zoom cascade={false} fraction={0.4} triggerOnce key={item.id}>
              <CardMagnetAnimation className='hover-scale-shadow-animation flex min-h-[450px] flex-col gap-6 rounded-2xl bg-white p-4 2xxl:min-w-[334px]'>
                <div className='hover-scale-animation flex h-[200px] items-center justify-center'>
                  <Image
                    src={item?.imageUrl}
                    alt='keyvalue'
                    width={250}
                    height={250}
                    className='size-32 object-contain'
                  />
                </div>
                <p className='text-center text-lg font-black text-mainBlack'>{item?.name}</p>
                <p className='text-center text-mainBlack'>{item.description}</p>
              </CardMagnetAnimation>
            </Zoom>
          </Link>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default Services;
