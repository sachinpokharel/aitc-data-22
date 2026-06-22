import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const pillars = [
  {
    id: 'communities',
    title: 'Empowering Communities',
    icon: '/images/standfor/stand-1.svg',
  },
  {
    id: 'tech',
    title: 'Tech For Greener Tomorrow',
    icon: '/images/standfor/stand-2.svg',
  },
  {
    id: 'education',
    title: 'Education With Access',
    icon: '/images/standfor/stand-4.svg',
  },
  {
    id: 'ethical',
    title: 'Ethical and AI Inclusion',
    icon: '/images/standfor/stand-3.svg',
  },
];

const StandFor = () => {
  return (
    <section className=' overflow-hidden bg-lightShad2 xl:h-[442px]'>
      {/* Header Section */}
      <div className='main-common-padding relative mx-auto flex max-w-[1500px] flex-col items-start justify-center gap-[40px] py-[52px] md:gap-[52px] lg:p-[6.25rem] xl:py-24'>
        <div className='top-0 hidden overflow-hidden xmd:absolute  xmd:-right-44 xmd:block xmd:h-[219px] xmd:w-[544px] lg:-right-96 lg:h-[345px] lg:w-[850px] xl:-right-80'>
          <div className='to-[ #FAFAFF00] absolute inset-0 z-10 bg-gradient-to-r from-[#F9F9FF]'></div>
          <Image src='/images/origami.png' alt='origami' fill className=' object-cover' />
        </div>
        <CommonAnimation delay={0.2} className='relative z-40 flex w-full flex-col gap-4 '>
          <CommonTitle title='What We Stand For' className='text-center xmd:text-start' />
          <CommonParargraph
            text='Four pillars guide our commitment to creating positive social and environmental impact'
            className='mx-auto max-w-xs text-center text-base text-mainBlack xmd:mx-0 xmd:max-w-full xmd:text-left xmd:text-lg'
          />
        </CommonAnimation>

        {/* Pillars Grid */}
        <div className=' grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4'>
          <Fade direction='up' cascade delay={0.1} triggerOnce className='z-20'>
            {pillars?.map((pillar) => (
              <div key={pillar?.id}>
                <div className='group flex h-[86px] w-full items-center gap-4 rounded-2xl border border-lightShade1 bg-white px-6 py-4'>
                  <Image src={pillar?.icon} alt={pillar?.title} width={48} height={48} className='object-cover' />
                  <h3 className=' text-base font-medium text-mainBlack'>{pillar?.title}</h3>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default StandFor;
