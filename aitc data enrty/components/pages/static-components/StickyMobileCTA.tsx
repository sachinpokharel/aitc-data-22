'use client';

import Link from 'next/link';

/**
 * StickyMobileCTA — fixed bottom bar on mobile for key conversion pages.
 * Shows "Call Now" + "Get Quote" buttons.
 * Renders only on mobile (hidden on lg+).
 */
const StickyMobileCTA = ({
  phoneNumber = '+977-9801234567',
  quoteLabel = 'Get Quote',
  quoteHref = '/request-a-quote',
  consultLabel,
  consultHref,
}: {
  phoneNumber?: string;
  quoteLabel?: string;
  quoteHref?: string;
  consultLabel?: string;
  consultHref?: string;
}) => {
  const handlePhoneClick = () => {};

  const handleQuoteClick = () => {};

  return (
    <div className='fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-lightShade1 bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden'>
      <a
        href='/book-a-free-consultation'
        onClick={handlePhoneClick}
        className='flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary px-4 py-3 text-sm font-bold text-primary transition-colors active:bg-primary/5'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
          <path
            fillRule='evenodd'
            d='M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75v-.75ZM6 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 10.5Zm0 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
          />
        </svg>
        Book a Meeting
      </a>

      {consultLabel && consultHref ? (
        <Link
          href={consultHref}
          onClick={handleQuoteClick}
          className='flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-colors active:bg-primary/90'
        >
          {consultLabel}
        </Link>
      ) : (
        <Link
          href={quoteHref}
          onClick={handleQuoteClick}
          className='flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-colors active:bg-primary/90'
        >
          {quoteLabel}
        </Link>
      )}
    </div>
  );
};

export default StickyMobileCTA;
