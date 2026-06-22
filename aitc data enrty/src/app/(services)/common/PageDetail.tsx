import { delays } from '@/utils/animation-config';
import { fetchData } from '@/utils/getData';
import { isImgUrl } from '@/utils/isImgUrl';
import Image from 'next/image';
import { type CommonSubServiceSection } from '@/types/index';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

interface IProps {
  href: string;
  linkTitle: string;
  url?: string;
}

const PageDetail = async ({ href, linkTitle, url }: IProps) => {
  const data = await fetchData<CommonSubServiceSection>(url as string);

  return (
    <CommonAnimation className='pageinfo main-common-padding flex max-w-[1350px] flex-col items-center gap-8'>
      <CommonTitle title={data?.title as string} className='text-center ' delay={delays.medium} />
      <div>
        {isImgUrl(data?.image as string) ? (
          <Image src={data?.image as string} alt='arrow' width={532} height={364} className='rounded-2xl' />
        ) : (
          <video
            src={data?.image as string}
            autoPlay
            muted
            playsInline
            loop
            className='aspect-video w-full max-w-[1150px] rounded-[28px] border-primary'
          >
            <track src='/video.vtt' kind='captions' />
          </video>
        )}
      </div>
      <CommonParargraph text={data?.description as string} className='max-w-[800px] text-center' delay={delays.long} />
      <CommonButton text={linkTitle} href={href} className='mx-auto' delay={delays.longer} />
    </CommonAnimation>
  );
};

export default PageDetail;
