import { fetchData } from '@/utils/getData';

import { CustomCalendy } from '../Calendy/CustomCalendy';
import { Consult } from './Consult';

export type HeaderProps = {
  email: string;
  contact: string;
  location: 'USA' | 'UAE' | 'Nepal';
};

const InfoHeader = async () => {
  const data = await fetchData<HeaderProps[]>('/connectus/header-contact');

  return (
    <nav className='info-header flex flex-row justify-between gap-2 px-6 py-4 max-sm:py-2.5  xmd:px-12 xl:px-[6.25rem] 3xl:px-[9.375rem]'>
      {/* <ul className='email-phone flex flex-row items-center justify-between xmd:gap-8'>
        {data[0]?.email && (
          <li className='hidden md:block'>
            <a href={`mailto:${data[0]?.email}`} className='flex items-center justify-center gap-2'>
              <span>
                <MdEmail fill='#FF7500' size={24} />
              </span>
              <span>{data[0]?.email}</span>
            </a>
          </li>
        )}

        {data[0]?.contact && (
          <li>
            <a href={`tel:${data[0]?.contact}`} className='flex items-center gap-2 text-sm xmd:text-base'>
              <span>
                <MdPhone fill='#FF7500' className='text-xl xmd:text-2xl' />
              </span>
              {data[0]?.contact}
            </a>
          </li>
        )}
      </ul> */}
      {data && <Consult data={data} />}
      {/* <Link
        target='_blank'
        href='https://calendly.com/aitc-schedule/30min'
        className='bookconsultation text-sm text-primary xmd:text-base xmd:font-medium'
      >
        Book a free consultation!!!
      </Link> */}
      <CustomCalendy />
    </nav>
  );
};

export default InfoHeader;
