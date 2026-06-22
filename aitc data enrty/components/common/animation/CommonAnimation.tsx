'use client';

import { cn } from '@/utils/cn';
import { easeIn, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export const CommonAnimation = ({
  children,
  className,
  style,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay ? delay : 0.3, ease: easeIn }}
      className={cn('common-animation', className)}
    >
      {children}
    </motion.div>
  );
};
