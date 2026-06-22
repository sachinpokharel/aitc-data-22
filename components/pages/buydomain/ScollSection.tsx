'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const ScrollSection = () => {
  const hash = useSearchParams().get('scroll');

  useEffect(() => {
    if (hash === 'search-domains') {
      const element = document.getElementById('search-domains');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollSection;
