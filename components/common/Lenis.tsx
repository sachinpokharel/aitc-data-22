'use client';

import Lenis from 'lenis';
import { useLayoutEffect, useRef } from 'react';

export default function LenisLayout({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // Initialize Lenis instance
    const lenis = new Lenis({
      duration: 0.05, // Control how smooth the scroll feels
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time); // Update Lenis
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
