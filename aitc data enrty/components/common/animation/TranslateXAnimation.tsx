'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TranslateXAnimation = ({
  children,
  className,
  translateX,
  delay,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: string;
  delay?: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: translateX ?? '80px' }}
      animate={isInView ? { opacity: 1, translateX: '0px' } : {}}
      whileInView={{ opacity: 1, translateX: '0px' }}
      transition={{ duration: duration ?? 0.6, ease: 'easeIn', delay }}
      className={`common-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default TranslateXAnimation;

export const TranslateLeftToRightAnimation = ({
  children,
  className,
  delay,
  duration,
  translateX,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  translateX?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: translateX ?? '-80px' }}
      animate={isInView ? { opacity: 1, translateX: '0px' } : {}}
      whileInView={{ opacity: 1, translateX: '0px' }}
      transition={{ duration: duration ?? 0.6, ease: 'easeIn', delay }}
      className={`common-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};
