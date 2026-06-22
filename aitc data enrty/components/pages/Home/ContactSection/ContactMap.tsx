import { delays } from '@/utils/animation-config';
import { cn } from '@/utils/cn';
import { fetchData } from '@/utils/getData';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';
import { type ContactProps } from '@/components/common/layout/Footer';

const ContactMap = async () => {
  const data = await fetchData<ContactProps[]>('/connectus/contact-details');

  return (
    <div className='common-main-padding flex max-w-[1350px] flex-col items-center justify-center gap-10 lg:gap-[3.25rem]'>
      <CommonTitle
        className='text-center'
        title="Connect with us and let's build something together"
        delay={delays.medium}
      />

      <div className='flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-white p-6 '>
        <div className='locations flex w-full flex-col items-start justify-center gap-8 sm:flex-row sm:flex-wrap'>
          {data?.map((item) => (
            <div
              key={item?.id}
              className={cn(
                'location flex w-full flex-col items-center gap-4 rounded-lg bg-lightShad2 px-4 py-3  xmd:max-w-[233px]'
              )}
            >
              <Image
                src={
                  item?.location?.toLowerCase()?.trim() === 'nepal'
                    ? '/icons/nepal.png'
                    : item?.location?.toLowerCase()?.trim() === 'uae'
                      ? '/icons/uae.png'
                      : '/icons/usa.png'
                }
                alt='location'
                width={100}
                height={100}
                className='size-10 rounded-lg object-contain'
              />
              <Link
                href={item?.link || '#'}
                className='text-center text-grey xmd:mt-6 '
                target='_blank'
                rel='noreferrer'
              >
                {`${item?.address}, ${item?.area}, ${item?.location}`}
              </Link>
              <Link target='_blank' href={item?.link || '#'} className='flex flex-row items-center gap-2 text-primary'>
                <CommonParargraph text='View on map' className='font-bold text-primary' />
                <FaArrowRight size={20} className='transition-all duration-300 group-hover:translate-x-2' />
              </Link>
            </div>
          ))}
        </div>

        <div>
          <Image
            className='w-full '
            src='/images/map1.png'
            quality={100}
            draggable={false}
            alt='map'
            width={1024}
            height={500}
          />
        </div>
      </div>

      <CommonParargraph
        className='text-center '
        text="We'd love to hear from you! Whether you have questions, need support, or want to discuss a new project, our team is ready to assist. Fill out the form below, and we’ll get back to you as soon as possible."
      />
    </div>
  );
};

export default ContactMap;
