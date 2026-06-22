import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';

const Description = ({ text, image }: { text: string; image: string }) => {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-10 xl:flex-row  xl:items-start '>
      <CommonParargraph text={text} className='w-full text-center xl:w-1/2 xl:text-start' />
      <div className='xl:[351px] relative h-56 w-full xmd:h-[400px] md:h-[540px] lg:h-[324px] xl:w-1/2 '>
        <Image
          src={image}
          fill
          sizes='calc(100vw-2rem)'
          alt='kho'
          className='rounded-2xl object-cover '
          draggable='false'
        />
      </div>
    </div>
  );
};

export default Description;
