'use client';

import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

const CALENDLY_URL = 'https://calendly.com/aitc-schedule/30min';

export const CustomCalendy = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById('root'));
  }, []);

  if (!rootElement) {
    return (
      <span className='bookconsultation text-sm text-primary xmd:text-base xmd:font-medium'>
        Book a free consultation
      </span>
    );
  }

  return (
    <PopupButton
      url={CALENDLY_URL}
      className='bookconsultation text-sm text-primary xmd:text-base xmd:font-medium'
      rootElement={rootElement}
      text='Book a free consultation'
    />
  );
};
