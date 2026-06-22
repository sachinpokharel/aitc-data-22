import { MdInsertLink } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { type HeroData } from '@/types/ourwork/specificpageDTO';
import CommonParargraph from '@/components/common/CommonParargraph';

const Introduction = ({ data }: { data: HeroData }) => {
  return (
    <div className='specific-work-intro common-section common-padding flex flex-col gap-8'>
      <CommonParargraph text={data?.description} className='text-left' />
      <Image
        src={data?.bgImage}
        alt={data?.title}
        width={1920}
        height={1080}
        className='max-h-[43.75rem] w-full rounded-2xl object-cover'
      />
      <div className='flex w-full flex-wrap items-center gap-8'>
        <div className='flex flex-wrap items-center gap-4'>
          <p className='text-lg font-black leading-[150%] tracking-[0.36px] text-mainBlack '>Service type</p>
          {data?.productTags?.map((item) => (
            <p key={item?.id} className='rounded-lg bg-lightShad2 p-2 capitalize text-mainBlack'>
              {item?.name}
            </p>
          ))}
        </div>
        <div className='flex flex-wrap items-center gap-6'>
          {data?.uploadLink?.mobileAppLink && (
            <Link href={data?.uploadLink?.mobileAppLink} className='flex flex-row items-center gap-2'>
              <MdInsertLink />
              <p className='text-lg text-primary'>Android app</p>
            </Link>
          )}
          {data?.uploadLink?.iosAppLink && (
            <Link href={data?.uploadLink?.iosAppLink} className='flex flex-row items-center gap-2'>
              <MdInsertLink />
              <p className='text-lg text-primary'>iOS app</p>
            </Link>
          )}

          {data?.uploadLink?.desktopAppLink && (
            <Link href={data?.uploadLink?.desktopAppLink} className='flex flex-row items-center gap-2'>
              <MdInsertLink />
              <p className='text-lg text-primary'>Web App</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
