import Image from 'next/image';

const Card = ({ title, icon, description }: { title: string; icon: string; description: string }) => {
  return (
    <div className=' hover-scale-shadow-animation card flex h-[302px] w-full flex-col gap-6 rounded-2xl bg-lightShad2 p-6 '>
      <div>
        <Image src={icon} alt='spotlight' width={64} height={64} />
      </div>
      <h4 className='text-lg font-black text-mainBlack'>{title}</h4>
      <p className='text-base text-mainBlack'>{description}</p>
    </div>
  );
};

export default Card;
