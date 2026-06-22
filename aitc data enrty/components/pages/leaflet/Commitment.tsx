import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const securityFeatures = [
  {
    id: 'robust',
    title: 'Robust Security Measures',
    description: 'Threat modeling, secure code reviews, strict access controls, and encrypted storage.',
  },
  {
    id: 'continuous',
    title: 'Continuous Monitoring',
    description: 'Experience with HIPAA, SOX, and GDPR for regulated industries.',
  },
  {
    id: 'compliance',
    title: 'Compliance Expertise',
    description: 'Regular security audits.',
  },
];

const Commitment = () => {
  return (
    <section className='main-common-padding  relative mx-auto flex max-w-[1500px] flex-col gap-[52px] py-14 md:py-20 xl:py-24'>
      {/* Top Section - Title and Description */}
      <div className='flex flex-col items-center gap-6 text-center'>
        <CommonTitle title='Our Commitment to Security & Compliance' />
        <CommonParargraph
          text="Nepal is a leading destination for software development outsourcing. AITC International leverages the country's unique advantages:"
          className='max-w-4xl text-base font-normal text-mainBlack lg:text-lg'
        />
      </div>

      {/* Middle Section - Image and Features */}
      <div className='common-padding flex flex-col justify-center gap-36 xmd:items-start xmd:py-0 lg:flex-row '>
        {/* Left - Image */}
        <div className='relative flex size-[330px] rounded-3xl bg-[#3D2D720A]'>
          <Image src='/images/security.gif' alt='Security Shield' fill className='object-contain' />
        </div>

        {/* Right - Features */}
        <div className='flex  flex-col items-start justify-center gap-[60px]'>
          {securityFeatures?.map((feature) => (
            <Fade direction='up' key={feature?.id} triggerOnce className='group h-[140px] w-[327px]'>
              <div
                className={`relative rounded-xl border border-[#E8E8FF] bg-[#F9F9FF] px-4 pb-4 pt-[43px] transition-all duration-300 hover:shadow-lg `}
              >
                <p className='text-center text-lg text-mainBlack'>{feature?.description}</p>

                <div
                  className='absolute -top-4 left-1/2  -translate-x-1/2
                  rounded-full bg-primary px-4 py-[6.5px]'
                >
                  <h3 className='w-fit text-center text-lg font-medium text-white'>{feature?.title}</h3>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
