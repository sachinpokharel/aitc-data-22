'use client';

import { defaultTransition, slideUpAnimation } from '@/utils/animation-config';
import { motion, useInView } from 'framer-motion';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useRef } from 'react';

import { cn } from '../../utils/cn';

interface CommonParargraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  textWithHtml?: string;
  className?: string;
  delay?: number;
}

const CommonParargraph = ({ text, textWithHtml, className, delay }: CommonParargraphProps) => {
  const Component = delay !== undefined ? motion.p : 'p';
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
      className={cn('font-medium text-mainBlack xmd:text-lg', className)}
      {...(textWithHtml ? { dangerouslySetInnerHTML: { __html: textWithHtml } } : {})}
    >
      {text && !textWithHtml && text?.charAt(0).toUpperCase() + text?.slice(1)}
    </Component>
  );
};

export default CommonParargraph;

export const SocialMedia = () => {
  return (
    <div className='flex flex-row items-center gap-6'>
      <a href='https://www.facebook.com/aitcInternational' target='_blank'>
        <FaFacebook size={24} />
      </a>
      <a href='https://www.instagram.com/aitc_international' target='_blank'>
        <FaInstagramSquare size={24} />
      </a>
      <a href='https://www.linkedin.com/company/theaitc' target='_blank'>
        <FaLinkedin size={24} />
      </a>
      <a href='https://www.youtube.com/@aitc_international' target='_blank'>
        <FaYoutube size={24} />
      </a>
    </div>
  );
};
