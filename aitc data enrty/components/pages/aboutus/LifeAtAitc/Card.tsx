/* eslint-disable @next/next/no-img-element */
const Card = ({ url, id }: { url: string; id: number }) => {
  return (
    <li className='flex max-w-[628px] flex-row gap-6 rounded-2xl' key={id}>
      <figure className='relative rounded-2xl  '>
        <img
          src={url}
          alt={id?.toString()}
          width={390}
          height={400}
          className='size-full max-h-[190px] rounded-2xl object-cover max-lg:max-w-[390px] lg:max-h-[375px]'
        />
      </figure>
    </li>
  );
};

export default Card;
