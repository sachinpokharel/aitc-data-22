import { fetchData } from '@/utils/getData';
import Link from 'next/link';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonTitle from '@/components/common/CommonTitle';
import LongArrow from '@/components/common/icon/LongArrow';

interface CTAProps {
  mainTitle: string;
}

const CTA = async ({
  isSingleButton,
  url,
  buttonText,
}: {
  isSingleButton?: boolean;
  url: string;
  buttonText?: string;
}) => {
  const data = await fetchData<CTAProps>(url);
  return (
    <CommonAnimation className='main-common-padding flex flex-col items-center  gap-8 bg-lightShad2'>
      <CommonTitle title={data?.mainTitle} className='max-w-[1000px]  text-center' />
      <hr className='h-[2px] w-full bg-[#ECECFF] xmd:w-1/4' />
      <div className='flex flex-col items-center gap-8 md:flex-row'>
        <Link
          href='/contact-us?form=service_enquiry'
          className='flex flex-row items-center gap-2 text-lg font-black text-primary'
        >
          <p>{buttonText ?? 'Get in touch'}</p>
          <LongArrow />
        </Link>
        {!isSingleButton && (
          <Link
            href='?form=book_a_consultation'
            className='flex  flex-row items-center gap-2 text-lg font-black text-primary'
          >
            <p>Book free consultation</p>
            <LongArrow />
          </Link>
        )}
      </div>
    </CommonAnimation>
  );
};

export default CTA;
