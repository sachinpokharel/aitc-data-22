import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { IoMdTime } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineStairs } from 'react-icons/md';
import { TbCurrencyRupeeNepalese } from 'react-icons/tb';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import BannerWrapper from '@/components/common/CommonBanner/BannerWrapper';
import { CommonTitleH1 } from '@/components/common/CommonTitle';

interface CareerData {
  coverImage: string;
  jobTitle: string;
  positionLevel: string;
  jobType: string;
  location: string;
  salary: string;
}

const IndividualCareerBanner = async ({ url }: { url: string }) => {
  const data = await fetchData<CareerData>(url);

  return (
    <CommonAnimation>
      <BannerWrapper image={data?.coverImage} className='bg-lightShad2'>
        <div
          className={cn(
            'mx-auto flex max-w-[616px] flex-col items-center justify-center gap-6 xl:max-w-[650px] xl:items-start'
          )}
        >
          <CommonTitleH1 title={data?.jobTitle} className='text-center capitalize xl:text-left' delay={delays.medium} />
          <div className='flex flex-wrap items-center justify-center gap-4 '>
            <div className='flex flex-row items-center gap-2'>
              <MdOutlineStairs className='text-xl' />
              <p className='text-lg capitalize text-primary'>{data?.positionLevel}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <IoMdTime className='text-xl' />
              <p className='text-lg capitalize text-primary'>{data?.jobType}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <IoLocationOutline className='text-xl' />
              <p className='text-lg capitalize text-primary'>{data?.location}</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <TbCurrencyRupeeNepalese className='text-xl' />
              <p className='text-lg text-primary'>{data?.salary}</p>
            </div>
          </div>
        </div>
      </BannerWrapper>
    </CommonAnimation>
  );
};

export default IndividualCareerBanner;
