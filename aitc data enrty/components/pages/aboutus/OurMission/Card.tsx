import Image from 'next/image';

const Card = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className='card flex w-full flex-col items-center gap-6 rounded-2xl bg-white p-4 '>
      <div className='relative flex max-h-[100px] w-full justify-center'>
        <Image src={icon} width={112} height={80} sizes='33vw' alt='icon' className='rounded-lg object-cover' />
      </div>
      <p className='text-lg font-extrabold text-mainBlack'>{title?.charAt(0).toUpperCase() + title?.slice(1)}</p>
    </div>
  );
};

export default Card;
