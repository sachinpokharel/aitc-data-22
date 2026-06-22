import getImage from '@/utils/dynamicImageBlur';
import Image from 'next/image';
import CommonParargraph from '@/components/common/CommonParargraph';

const Card = async ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  const bgImage = await getImage(icon);
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(180deg, #F2F2FF 0.06%, rgba(255, 255, 255, 0.00) 179.25%)',
      }}
      className='card hover-scale-shadow-animation flex w-full flex-col items-center gap-6 rounded-2xl  p-6'
    >
      <div className='hover-scale-animation relative size-16'>
        <Image src={icon} placeholder='blur' blurDataURL={bgImage?.src} fill sizes='33vw' alt={title} />
      </div>
      <h4 className='text-center text-lg font-black text-mainBlack'>{title}</h4>
      <CommonParargraph text={description} className='text-center text-base' />
    </div>
  );
};

export default Card;
