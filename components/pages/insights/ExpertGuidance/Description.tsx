import Image from 'next/image';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';

interface DescriptionProps {
  text: string;
  image: string;
}

const Description = ({ text, image }: DescriptionProps) => {
  return (
    <div className='description flex flex-col-reverse items-center gap-[3.25rem] lg:flex-row'>
      <div className='flex flex-col gap-14'>
        <CommonParargraph text={text} className=' text-center text-white lg:text-left' />
        <CommonButton href='/contact-us' text='Talk with our experts' className='mx-auto lg:mx-0' />
      </div>
      <Image src={image} alt={text} width={416} height={316} className='w-full rounded-2xl xsm:w-[477px]' />
    </div>
  );
};

export default Description;
