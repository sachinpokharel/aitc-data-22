'use client';

import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

type Word = {
  name: string;
  icon: string;
  color: string;
};

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: Word[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentWord = words[currentIndex];

  const nextWord = useCallback(() => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(nextWord, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, nextWord]);

  // Smooth sliding animation container
  const containerVariants = {
    initial: {
      y: '100%',
    },
    animate: {
      y: '0%',
      transition: {
        duration: 0.5, // Slightly longer duration for a smoother effect
        ease: [0.4, 0, 0.2, 1], // Custom easing for smoother motion
      },
    },
    exit: {
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className='relative h-[70px] overflow-hidden' style={{ perspective: '1000px' }}>
      <AnimatePresence mode='wait' onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={currentWord.name}
          variants={containerVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          className={cn(
            'relative z-10 inline-flex items-center rounded-2xl px-4 py-2 text-white',
            'transform-gpu',
            className
          )}
          style={{
            backgroundColor: currentWord.color,
            transformStyle: 'preserve-3d',
            transition: 'width 0.5s ease', // Smooth width transition
          }}
        >
          <div className='flex items-center gap-3'>
            <div>
              <Image
                src={currentWord.icon}
                alt={currentWord.name}
                width={48}
                height={48}
                className='object-contain'
                loading='eager'
              />
            </div>
            <div className='flex flex-wrap gap-x-2'>
              {currentWord.name.split(' ').map((word, wordIndex) => (
                <div key={word + wordIndex} className='flex'>
                  {word.split('').map((letter, letterIndex) => (
                    <span key={letterIndex} className='inline-block'>
                      {letter}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
