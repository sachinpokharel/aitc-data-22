import getImage from '@/utils/dynamicImageBlur';
import Image from 'next/image';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

const HiringProcessCard = async ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  const bgImage = await getImage(icon);

  return (
    <CommonAnimation
      delay={(index + 1) / 90}
      className='card relative flex w-full flex-col items-center gap-6 rounded-2xl bg-[#FFFFFF] px-6 py-12'
    >
      <div className=' -mt-20 flex  items-center  rounded-full bg-lightShade1'>
        <div className=' relative size-[55px] rounded-full  '>
          <Image src={icon} alt={title} fill className='rounded-full object-cover' blurDataURL={bgImage?.src} />
        </div>
        <span className='py-4 pl-4 pr-6 text-xl font-medium text-primary'>{index + 1}</span>
      </div>

      <CommonHeader className='text-center' title={title} />
      <CommonParargraph text={description} className='text-center text-base' />
    </CommonAnimation>
  );
};

export default HiringProcessCard;
