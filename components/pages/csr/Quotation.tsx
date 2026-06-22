import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';

const Quotation = () => {
  return (
    <section className='relative bg-secondary lg:py-16'>
      <div className='main-common-padding relative z-20 mx-auto flex max-w-[1500px] flex-col  items-center gap-16 px-6 min844:px-[85px] lg:flex-row'>
        <div className='relative h-[204px] w-[310px] rounded-2xl xss:w-[334px] xmd:h-[286px] xmd:w-[576px] min844:h-[363px] min844:w-full lg:flex lg:h-[196px] lg:w-[295px] lg:flex-[0.6] xl:h-[345px] xl:w-[520px] xl:flex-[0.9]'>
          <Image src={'/images/people.jpg'} alt='People' fill className='object-cover' />
          <div className='pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle,_#00000000_40%,_#3D2D72)]' />
        </div>
        <CommonAnimation className='relative mx-auto flex-[0.8]  flex-col items-center gap-8 pl-[62px] pt-[62px] '>
          {/* Quote Icon */}
          <div className='absolute left-0 top-0 h-[46px] w-[55px] '>
            <Image src='/icons/quote.png' alt='Quote' fill className='' />
          </div>

          {/* Main Quote */}
          <div className='flex flex-col items-start gap-4'>
            <CommonParargraph
              text="We believe every company has a role to play in shaping a better world. That's why we commit not only to developing smart solutions, but also to uplifting the communities and environments around us. Whether it's through education, access to tech, or sustainability efforts."
              className='text-lg text-white lg:text-xl xl:text-[22px]'
            />

            {/* Highlighted Statement */}
            <p className='text-lg font-semibold text-primary lg:text-xl xl:text-[22px]'>
              Our goal is simple: build a future that includes everyone — not just the privileged.
            </p>
          </div>
        </CommonAnimation>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-10 size-full bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Quotation;
