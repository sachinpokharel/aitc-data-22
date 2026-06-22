import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';

const CeoMessage = ({ message, image, name }: { message: string; image: string; name: string }) => {
  return (
    <div className='flex w-full flex-col items-center justify-center lg:flex-row'>
      <div className='relative h-[168px] w-[134px] max-w-[460px] self-center xss:h-[236px] xss:w-[172px] xmd:h-[420px] xmd:w-[333px] lg:w-[460px]'>
        <Image
          src={image}
          alt='ceo'
          fill
          sizes='33vw'
          className='rounded-2xl object-cover'
          placeholder='blur'
          blurDataURL={image}
          draggable='false'
        />
        {/* Side Bars */}
        <div className='siebar-left absolute -left-5  top-[38px] z-10  h-[40px] w-[14px]  rounded  bg-primary  max-xmd:-left-2 max-xmd:top-[22px]  xsm:h-[56px] xsm:w-[20px]  xmd:h-[100px]  xmd:w-[35px]' />
        <div className='siebar-right absolute -right-2 bottom-9 z-10  h-[40px] w-[14px] rounded  bg-primary max-xmd:bottom-4 xsm:h-[56px] xsm:w-[20px] xmd:h-[100px] xmd:w-[35px] ' />
      </div>

      <div
        className='-mt-16 flex w-full max-w-[900px] grow flex-col gap-8 rounded-2xl bg-white p-6 lg:-ml-4 lg:mt-0 lg:pl-20 '
        style={{ boxShadow: '0px 0px 14px 0px #EDEDFF' }}
      >
        <div className='flex flex-col gap-2'>
          <span>
            <FaQuoteLeft className='text-5xl text-primary' />
          </span>

          <CommonParargraph text={message} className='text-base' />
        </div>

        <div className='designation flex flex-col gap-2'>
          <p className='text-lg font-black capitalize'>{name}</p>
          <span className='text-lg text-primary'>Chief Executive Officer, AITC International</span>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
