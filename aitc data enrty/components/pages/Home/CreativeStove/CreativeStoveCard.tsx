import Image from 'next/image';
import Link from 'next/link';
import CommonParargraph from '@/components/common/CommonParargraph';
import { CommonHeader } from '@/components/common/CommonTitle';

const CreativeStoveCard = ({
  id,
  title,
  description,
  image,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Link
      href={`/ourwork/${id}`}
      className='flex  flex-col gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:border-primary'
    >
      <Image
        src={image}
        alt='spotlight'
        width={1000}
        height={1000}
        className='size-full h-[250px] rounded-2xl object-cover'
      />
      <div className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-lightShad2 p-4'>
        <CommonHeader title={title} className='text-center' />
        <CommonParargraph
          text={description.length > 65 ? `${description.slice(0, 55)}...` : description}
          className='text-center'
        />
        <p className='text-lg font-bold text-primary'>Read case study</p>
      </div>
    </Link>
  );
};

export default CreativeStoveCard;

export const OffshoreDevelopmentCard = ({
  // id,
  title,
  // description,
  image,
  // results,
}: {
  // id: string;
  title: string;
  // description: string;
  image: string;
  // results: string[];
}) => {
  return (
    <div
      // href={`/ourwork/${id}`}
      className='flex h-full flex-col gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:border-primary'
    >
      <Image
        src={image}
        alt='spotlight'
        width={1000}
        height={1000}
        className='size-full h-[250px] rounded-2xl object-cover'
      />
      <div className='flex flex-1 flex-col items-start justify-between gap-2 rounded-2xl bg-lightShad2 p-4'>
        <div className='flex w-full flex-col gap-4'>
          <CommonHeader title={title} className='text-left' />
          {/* <CommonParargraph
            text={description.length > 65 ? `${description.slice(0, 55)}...` : description}
            className='text-left'
          /> */}
          {/* <div className='relative mt-2 w-full rounded-lg bg-[#FFF4D1] p-3'>
            <div className='absolute -top-3 left-0 flex w-fit flex-row items-center gap-2 rounded-lg bg-[#484BA0] px-2 py-1 text-white'>
              <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M13.3333 6.66667C13.3333 10.3485 10.3485 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3485 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3485 0 13.3333 2.98477 13.3333 6.66667ZM9.35353 4.64645C9.5488 4.84171 9.5488 5.15829 9.35353 5.35353L6.0202 8.68687C5.82493 8.88213 5.5084 8.88213 5.31311 8.68687L3.97978 7.35353C3.78452 7.15827 3.78452 6.84173 3.97978 6.64647C4.17504 6.4512 4.49163 6.4512 4.68689 6.64647L5.66667 7.6262L7.15653 6.13633L8.64647 4.64645C8.84173 4.45119 9.15827 4.45119 9.35353 4.64645Z'
                  fill='#F3EFE0'
                />
              </svg>
              <p className='text-sm'>We Achieved</p>
            </div>
            <div className='mt-2 flex flex-col gap-2 text-sm text-mainBlack'>
              {results.map((result) => (
                <div className='flex flex-row items-center gap-2' key={result}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M13.3333 6.66667C13.3333 10.3485 10.3485 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3485 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3485 0 13.3333 2.98477 13.3333 6.66667ZM9.35353 4.64645C9.5488 4.84171 9.5488 5.15829 9.35353 5.35353L6.0202 8.68687C5.82493 8.88213 5.5084 8.88213 5.31311 8.68687L3.97978 7.35353C3.78452 7.15827 3.78452 6.84173 3.97978 6.64647C4.17504 6.4512 4.49163 6.4512 4.68689 6.64647L5.66667 7.6262L7.15653 6.13633L8.64647 4.64645C8.84173 4.45119 9.15827 4.45119 9.35353 4.64645Z'
                      fill='black'
                    />
                  </svg>
                  <p>{result}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
        {/* <p className='text-lg font-bold text-primary'>Read case study</p> */}
      </div>
    </div>
  );
};
