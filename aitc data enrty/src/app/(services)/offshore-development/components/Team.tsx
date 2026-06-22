'use client';

import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { Slide } from 'react-awesome-reveal';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import Card from '@/components/pages/aboutus/whoweare/Card';

const sectionTitle = 'Our Team';
const mainTitle = 'Meet Your Dedicated Offshore Development Team';
const description =
  'Our experienced team members bring years of expertise in their respective domains, ensuring high-quality delivery and seamless collaboration with your in-house teams.';

const teamMembers = [
  {
    id: '1',
    name: 'Tank Raj Joshi',
    designation: 'Project Manager',
    role: 'Technical Delivery Lead',
    experience: '10+ yrs',
    description: 'Architecture, sprint planning, code review, performance & scalability.',
    profile: '/images/people/tank.jpg',
    link: '#',
  },
  {
    id: '2',
    name: 'Darshan Bohara',
    designation: 'Frontend Developer',
    role: 'Senior Full-Stack Engineer',
    experience: '7+ yrs',
    description: 'React, Node.js, microservices, API design, production hardening.',
    profile: '/images/people/darshan.jfif',
    link: '#',
  },
  {
    id: '3',
    name: 'Sandesh Thapa',
    designation: 'Frontend Developer',
    role: 'Full Stack Developer',
    experience: '6+ yrs',
    description: 'Python, Django/FastAPI, PostgreSQL, Redis, cloud-native services.',
    profile: '/images/people/sandesh.jpg',
    link: '#',
  },
  {
    id: '4',
    name: 'Gaurav B.C',
    designation: 'Game Developer',
    role: 'Full Stack Developer',
    experience: '6+ yrs',
    description: 'Python, Django/FastAPI, PostgreSQL, Redis, cloud-native services.',
    profile: '/images/people/gaurav.jpg',
    link: '#',
  },
  {
    id: '5',
    name: 'Umesh Gainju',
    designation: 'Backend Developer',
    role: 'DevOps Engineer',
    experience: '8+ yrs',
    description: 'CI/CD, Docker/Kubernetes, AWS/Azure, monitoring, security.',
    profile: '/images/people/umesh.jfif',
    link: '#',
  },
  {
    id: '6',
    name: 'Bimesh Rajbanshi',
    designation: 'QA Engineer',
    role: 'QA Automation Engineer',
    experience: '6+ yrs',
    description: 'Cypress/Selenium, API automation, regression suite, test strategy.',
    profile: '/images/people/bimesh.png',
    link: '#',
  },
  {
    id: '7',
    name: 'Pawan Karki',
    designation: 'UI/UX Designer',
    role: 'Project Manager (Optional)',
    experience: '8+ yrs',
    description: 'US-style sprint cadence, stakeholder updates, delivery accountability.',
    profile: '/images/people/pawan.jpg',
    link: '#',
  },
];

const Team = () => {
  return (
    <CommonAnimation className='main-common-padding mx-auto flex    flex-col items-center gap-10  xmd:gap-[3.25rem]'>
      <div className='flex max-w-[1054px] flex-col  gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <CommonChip text={sectionTitle} />
          <CommonTitle title={mainTitle} delay={delays.medium} className='text-center' />
        </div>
        <CommonParargraph text={description} className='text-center' delay={delays.long} />
      </div>
      <div className=' grid w-full max-w-[1154px]  grid-cols-1 place-items-center items-start gap-10 sm:grid-cols-2  lg:grid-cols-6 '>
        {teamMembers.map((item, index) => (
          <Slide
            key={item.id}
            cascade={true}
            direction='up'
            triggerOnce
            duration={600}
            className={cn(
              ' w-full max-w-screen-xsm lg:col-span-2 ',
              teamMembers.length % 2 !== 0 && 'max-lg:last:col-span-full',
              teamMembers.length % 3 === 1 && 'lg:last:col-span-2 lg:last:col-start-3 lg:last:place-self-center',
              teamMembers.length % 3 === 2 && index + 1 === teamMembers.length - 1 && `lg:col-start-2`,
              teamMembers.length % 3 === 2 && `lg:last:col-span-2`
            )}
          >
            <Card name={item.name} profile={item.profile} designation={item.designation} link={item.link} />
          </Slide>
        ))}
      </div>
    </CommonAnimation>
  );
};

export default Team;
