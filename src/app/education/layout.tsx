'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Create a component that uses useSearchParams inside Suspense
const ScrollToSection = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get('course');

  useEffect(() => {
    // If path is available, scroll to the element with matching ID
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        // Scroll the element into view
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [path]);

  return null;
};

const AcademyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <ScrollToSection />
      </Suspense>
      {children}
    </div>
  );
};

export default AcademyLayout;
