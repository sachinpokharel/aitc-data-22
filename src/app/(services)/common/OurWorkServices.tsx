import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import Link from 'next/link';
import { type OurWorkServiceDTO, type ProductTag } from '@/types/service/seo/SEODTO';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import LongArrow from '@/components/common/icon/LongArrow';

const OurWorkServices = async ({ url }: { url: string }) => {
  const data = await fetchData<OurWorkServiceDTO>(url);

  return (
    <>
      {data?.projectShowcases?.length > 0 && (
        <CommonAnimation className='common-padding common-section max-w-[1350px]'>
          <CommonTitle title={data?.title} className='text-center' />
          <CommonParargraph text={data?.description} className='text-center' />
          <div className='flex flex-row flex-wrap justify-center gap-8'>
            {data?.projectShowcases?.map((item) => (
              <Card
                key={item?.id}
                title={item?.title}
                image={item?.bgImage}
                tags={item?.productTags}
                link={`/ourwork/${item?.slug}`}
              />
            ))}
          </div>
          <CommonButton text='Explore More' href='/ourwork?tab=0' />
        </CommonAnimation>
      )}
    </>
  );
};

const Card = ({ title, image, tags, link }: { title: string; image: string; tags: ProductTag[]; link: string }) => {
  return (
    <Link
      href={link}
      className='hover-scale-shadow-animation group flex w-full flex-col gap-8 rounded-2xl bg-lightShad2 md:max-w-[350px]'
    >
      <Image src={image} alt='spotlight' width={500} height={500} className=' rounded-t-2xl object-contain' />
      <div className='flex flex-col gap-6 px-6 pb-6'>
        <div className='flex flex-row items-center gap-2'>
          <p className='text-lg font-bold text-mainBlack'>{title}</p>
          <span className='hover-arrow-slide'>
            <LongArrow />
          </span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag?.id}>
              {tag?.name}
              {index < tags.length - 1 && ','}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default OurWorkServices;
