import Image from 'next/image';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Description = ({
  image,
  title,
  chipText,
  description,
}: {
  image: string;
  title: string;
  description: string;
  chipText: string;
}) => {
  return (
    <div className='mx-auto flex size-full max-w-[1200px] flex-col items-center justify-center xl:flex-row'>
      <div className='description z-10 flex w-[94%] flex-col gap-8 rounded-3xl bg-secondary p-6 lg:max-w-[767px] xl:w-1/2'>
        <div className='flex flex-col gap-2'>
          <CommonChip text={chipText} className='bg-lightShade1' />
          <CommonTitle title={title} className='text-white' />
        </div>
        <CommonParargraph text={description} className='text-white' />
      </div>
      <div className='relative -mt-8 h-[212px] w-full rounded-2xl sm:h-[252px] xmd:-mt-12 xmd:h-[425px] lg:h-[357px]  xl:-ml-40 xl:mt-0 xl:w-1/2 '>
        <Image src={image} fill sizes='calc(100vw-2rem)' alt='image' className='rounded-2xl object-cover' />
      </div>
    </div>
  );
};

export default Description;
