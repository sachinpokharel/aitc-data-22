import { delays } from '@/utils/animation-config';
import getImage from '@/utils/dynamicImageBlur';
import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type CommonResponse } from '@/types/aboutus/banner';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonChip from '@/components/common/CommonChips/CommonChip';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const OurCulture = async () => {
  const { title, description, bgImage, sectionTitle } = await fetchData<CommonResponse>(
    '/about-us/our-culture-section'
  );
  const image = await getImage(bgImage);

  return (
    <CommonAnimation className='ourculture bg-lightShad2 '>
      <div className='common-padding mx-auto flex max-w-[1092px] flex-col items-center justify-end gap-10 pt-[3.75rem] xmd:pt-20 xl:pt-[6.25rem]'>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex flex-col items-center gap-2'>
            <CommonChip text={sectionTitle} />
            <CommonTitle title={title} className='text-center' delay={delays.long} />
          </div>

          <CommonParargraph text={description} className='text-center' delay={delays.longer} />
        </div>

        <CommonButton text='Join our team' href='/career' />
        <figure className='relative w-full'>
          <Image
            src={bgImage}
            alt={title}
            width={image?.width}
            height={image?.height}
            sizes='calc(100vw - 2rem)'
            placeholder='blur'
            blurDataURL={image?.src}
          />
        </figure>
      </div>
    </CommonAnimation>
  );
};

export default OurCulture;
