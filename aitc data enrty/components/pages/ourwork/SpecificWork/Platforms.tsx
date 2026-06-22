import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { FaApple, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { type PlatformDTO } from '@/types/ourwork/specificpage/PlatformDTO';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Platforms = async ({ id }: { id: string }) => {
  const data = await fetchData<PlatformDTO>(`/our-work/product/section/ten/${id}`);

  return (
    <div
      id='platforms'
      className='common-padding mx-auto flex max-w-[1350px] flex-col items-center justify-center gap-14 py-16 sm:py-20 lg:flex-row xl:py-24'
    >
      <Image
        src={data?.bgImage}
        alt='platforms'
        width={445}
        height={570}
        className='h-[570px] w-[445px] rounded-3xl object-cover'
      />
      <div className='flex flex-col gap-14'>
        <div className='flex flex-col gap-8'>
          <CommonTitle title={data?.title} className='text-center lg:text-left' delay={delays.medium} />
          <CommonParargraph text={data?.description} className='text-center lg:text-left' delay={delays.long} />
        </div>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row lg:justify-start'>
          {data?.uploadLink?.playStoreLink && (
            <Link
              href={data?.uploadLink?.playStoreLink}
              className='flex w-fit flex-row items-center gap-2 rounded-md bg-mainBlack px-4 py-3 text-white'
            >
              <Image src='/icons/playstore.svg' alt='playstore' width={30} height={30} />
              <div className='flex flex-col'>
                <p className='text-xs  font-medium leading-[150%] tracking-[0.24px] text-white'>Download on</p>
                <p className='whitespace-nowrap  text-lg font-medium leading-[150%] tracking-[0.36px] text-white'>
                  Play Store
                </p>
              </div>
            </Link>
          )}

          {data?.uploadLink?.iosLink && (
            <Link
              href={data?.uploadLink?.iosLink}
              className='flex w-fit flex-row items-center gap-2 rounded-md bg-mainBlack px-4 py-3 text-white'
            >
              <FaApple className='text-3xl text-white' />
              <div className='flex flex-col'>
                <p className='text-xs  font-medium leading-[150%] tracking-[0.24px] text-white'>Download on</p>
                <p className='whitespace-nowrap  text-lg font-medium leading-[150%] tracking-[0.36px] text-white'>
                  App Store
                </p>
              </div>
            </Link>
          )}

          {data?.uploadLink?.webAppLink && (
            <Link
              href={data?.uploadLink?.webAppLink}
              className='flex w-fit flex-row items-center gap-2 rounded-md bg-mainBlack px-4 py-3 text-white'
            >
              <FaGlobe className='text-3xl text-white' />
              <div className='flex flex-col'>
                <p className='text-xs font-medium leading-[150%] tracking-[0.24px] text-white'>Explore on</p>
                <p className='whitespace-nowrap  text-lg font-medium leading-[150%] tracking-[0.36px] text-white'>
                  Web
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Platforms;
