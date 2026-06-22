import { IoLogoLinkedin } from 'react-icons/io';
import Image from 'next/image';

const Card = ({
  name,
  designation,
  link,
  profile,
}: {
  name: string;
  designation: string;
  link: string;
  profile: string;
}) => {
  return (
    <div
      className='hover-scale-shadow-animation w-full
    rounded-2xl bg-lightShad2  '
    >
      <div className='profilepic relative h-[357px] w-full'>
        <Image
          src={profile}
          alt={name}
          fill
          sizes='33vw'
          className='rounded-t-2xl object-cover object-top'
          placeholder='blur'
          blurDataURL={profile}
        />
      </div>

      <div className='flex w-full flex-col gap-2 px-6 py-4'>
        <div className='flex flex-row justify-between gap-4 '>
          <h4 className='text-lg font-black text-mainBlack'>{name}</h4>
          <a href={link} rel='noreferrer' target='_blank'>
            <IoLogoLinkedin size={24} fill='#0077B5' />
          </a>
        </div>
        <p className='text-grey'> {designation}</p>
      </div>
    </div>
  );
};

export default Card;
