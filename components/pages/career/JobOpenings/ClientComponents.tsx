'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const ClientComponents = ({ children }: { children: React.ReactNode }) => {
  const params = useSearchParams().get('tab') ?? '';
  useEffect(() => {
    if (params) {
      const element = document.getElementById(params);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [params]);
  return (
    <div id='job-openings' className='common-padding common-section max-w-[1350px]'>
      {children}
    </div>
  );
};

export default ClientComponents;
