'use client';

import { cn } from '@/utils/cn';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    name: string;
    companyLogoUrl: string;
    socialMediaLink: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'fast' | 'normal';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
          scrollerRef.current.appendChild(duplicatedItem);
          scrollerRef.current.appendChild(duplicatedItem);
          scrollerRef.current.appendChild(duplicatedItem);
          scrollerRef.current.appendChild(duplicatedItem);
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '15s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '30s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden py-[20px]  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full flex-nowrap gap-16 overflow-hidden py-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items?.map((item, idx) => (
          <li
            className='flex  flex-row gap-6'
            style={{
              background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={idx + 1}
          >
            <Link target='_blank' href={item?.socialMediaLink} className=' '>
              <Image
                src={item?.companyLogoUrl}
                alt={'logo'}
                width={100}
                height={100}
                className='max-h-[75px] object-contain'
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
