/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { defaultTransition, slideUpAnimation } from '@/utils/animation-config';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '../../utils/cn';

interface CommonTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
  delay?: number;
}

const CommonTitle = ({ className, title, delay }: CommonTitleProps) => {
  const Component = delay !== undefined ? motion.h2 : 'h2';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Component
      ref={ref}
      {...(delay !== undefined
        ? {
            initial: slideUpAnimation.initial,
            animate: isInView ? slideUpAnimation.whileInView : slideUpAnimation.initial,
            transition: { ...defaultTransition, delay },
          }
        : {})}
      className={cn(
        'titlelineheight text-[2rem] font-black leading-[2.5rem_!important] text-mainBlack  xmd:text-[2.5rem]  lg:text-5xl lg:leading-[3.78rem_!important]  ',
        className
      )}
    >
      {title?.charAt(0)?.toUpperCase() + title?.slice(1)}
    </Component>
  );
};

export default CommonTitle;

export const CommonHeader = ({ className, title, delay }: CommonTitleProps) => {
  const Component = delay !== undefined ? motion.h3 : 'h3';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Component
      ref={ref}
      {...(delay !== undefined
        ? {
            initial: slideUpAnimation.initial,
            animate: isInView ? slideUpAnimation.whileInView : slideUpAnimation.initial,
            transition: { ...defaultTransition, delay },
          }
        : {})}
      className={cn('text-lg font-bold text-mainBlack', className)}
    >
      {title?.charAt(0).toUpperCase() + title?.slice(1)}
    </Component>
  );
};

export const CommonTitleH1 = ({ className, title, delay }: CommonTitleProps) => {
  const Component = delay !== undefined ? motion.h1 : 'h1';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Component
      ref={ref}
      {...(delay !== undefined
        ? {
            initial: slideUpAnimation.initial,
            animate: isInView ? slideUpAnimation.whileInView : slideUpAnimation.initial,
            transition: { ...defaultTransition, delay },
          }
        : {})}
      className={cn(
        'titlelineheight text-[2rem] font-black leading-[2.5rem_!important] text-mainBlack  xmd:text-[2.5rem]  lg:text-5xl lg:leading-[3.78rem_!important]  ',
        className
      )}
    >
      {title?.charAt(0)?.toUpperCase() + title?.slice(1)}
    </Component>
  );
};

interface CommonTitleV2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  main: string;
  secondary: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  invert?: boolean;
  third?: string;
}

export const CommonTitleV2 = ({ main, secondary, className, delay, invert, third }: CommonTitleV2Props) => {
  const Component = delay !== undefined ? motion.h1 : 'h1';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Component
      ref={ref}
      {...(delay !== undefined
        ? {
            initial: slideUpAnimation.initial,
            animate: isInView ? slideUpAnimation.whileInView : slideUpAnimation.initial,
            transition: { ...defaultTransition, delay },
          }
        : {})}
      className={cn(
        'titlelineheight text-[2rem] font-black xmd:text-[2.5rem] lg:text-5xl lg:leading-[3.5rem_!important] ',
        className
      )}
    >
      <span className={`${invert ? 'text-white' : 'text-mainBlack '}`}>{main}</span>{' '}
      <span className='text-[#ff8200]'>{secondary}</span>
      {third && <span className={`${invert ? 'text-white' : 'text-mainBlack '}`}>{third}</span>}
    </Component>
  );
};
