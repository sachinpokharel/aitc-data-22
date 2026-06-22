'use client';

import { useEffect, useRef, useState } from 'react';

interface StickyHeaderProps {
  children: React.ReactNode;
}

const SCROLL_THRESHOLD = 200;
// Ignore tiny scroll movements (trackpad jitter) so the header doesn't blink.
const DELTA_THRESHOLD = 8;

const StickyHeader = ({ children }: StickyHeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // Transition is disabled on the frame the header first becomes sticky so it
  // hides instantly instead of flashing in at the top and animating away.
  const [enableTransition, setEnableTransition] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastScrollY = useRef(0);
  const isStickyRef = useRef(false);
  const ticking = useRef(false);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    const update = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (!isStickyRef.current) {
        // Activate sticky once scrolled past the threshold. This always happens
        // while scrolling down, so hide it immediately (no flash from the top).
        if (currentScrollY > SCROLL_THRESHOLD) {
          isStickyRef.current = true;
          setEnableTransition(false);
          setIsSticky(true);
          setIsVisible(false);
        }
      } else if (currentScrollY <= 0) {
        // Hand back to normal flow only at the very top, where the fixed and
        // in-flow positions coincide — otherwise the header briefly disappears
        // and reappears, looking like two headers.
        isStickyRef.current = false;
        setEnableTransition(false);
        setIsSticky(false);
        setIsVisible(true);
      } else if (Math.abs(delta) > DELTA_THRESHOLD) {
        setIsVisible(delta < 0);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  // Once sticky (and hidden), re-enable the transition on the next frame so the
  // subsequent show-on-scroll-up / hide-on-scroll-down still animates smoothly.
  useEffect(() => {
    if (isSticky && !enableTransition) {
      const id = window.requestAnimationFrame(() => setEnableTransition(true));
      return () => window.cancelAnimationFrame(id);
    }
  }, [isSticky, enableTransition]);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-navbar inset-x-0 top-0 z-50 w-full border-b-2 border-lightShade1 bg-white ${
          enableTransition ? 'transition-transform duration-300' : ''
        } ${
          isSticky ? 'fixed border-none shadow-md' : 'relative'
        } ${isSticky && !isVisible ? '-translate-y-full' : 'translate-y-0'}`}
      >
        {children}
      </header>
      {/* Only reserve space when the header is detached from flow (sticky). While
          in normal flow it occupies its own space, so the page below it (e.g. the
          hero) renders in its final position on first paint — no hydration shift. */}
      {isSticky && <div className='site-navbar-spacer' style={{ height: `${headerHeight}px` }} />}
    </>
  );
};

export default StickyHeader;
