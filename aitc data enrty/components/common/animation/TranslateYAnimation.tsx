'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TranslateYAnimation = ({
  children,
  className,
  translateY,
  delay,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  translateY?: string;
  delay?: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: translateY ?? '60px' }}
      animate={isInView ? { opacity: 1, translateY: '0px' } : {}}
      whileInView={{ opacity: 1, translateY: '0px' }}
      transition={{ duration: duration ?? 0.6, ease: 'easeIn', delay }}
      className={`common-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default TranslateYAnimation;
