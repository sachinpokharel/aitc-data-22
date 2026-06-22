import { fetchData } from '@/utils/getData';
import Image from 'next/image';
import { type FAQSection } from '@/types/Home/faqsection';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

import FAQMain from './FAQMain';

const FAQ = async ({ url }: { url?: string }) => {
  const data = await fetchData<FAQSection>(url as string);

  return (
    <>
      {data?.items?.length > 0 && (
        <CommonAnimation className='faq-component-main flex min-h-[860px] flex-col xl:flex-row'>
          <div className='faq-header relative'>
            <div
              style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: ' center',
              }}
              className='-z-10 flex  min-h-[700px] w-full flex-col items-center justify-center gap-4 bg-[url("/svg/FAQMobile.svg")] max-sm:min-h-[500px]  md:bg-[url("/svg/FAQTablet.svg")] lg:h-[500px]  xl:size-[600px] xl:bg-[url("/svg/FAQWeb.svg")]'
            >
              <div className='flex w-3/4 flex-row items-center justify-center  xl:items-start xl:justify-start'>
                <Image
                  src='/deletable/questionmark.png'
                  alt='FAQ'
                  width={103}
                  height={131}
                  className='size-14 object-contain sm:size-28'
                />
              </div>

              <div className='flex w-3/4 flex-col items-center gap-8 max-xmd:w-4/5  xl:items-start'>
                <CommonTitle title={data?.title} className='text-center xl:text-left' />
                <CommonParargraph text={data?.description} className='text-center xl:text-left' />
                <CommonButton
                  text='Get a free quote'
                  target='_blank'
                  href='https://calendly.com/aitc-schedule/30min'
                  className='mx-auto xl:mx-0'
                />
              </div>
            </div>
          </div>
          <FAQMain data={data} />
        </CommonAnimation>
      )}
    </>
  );
};

export default FAQ;
