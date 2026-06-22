'use client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });
  // const renderWords = () => {
  //   return (
  //     <div className='flex flex-row flex-wrap gap-2'>
  //       {words.map((char, index) => (
  //         <span
  //           key={`char-${index}`}
  //           className={cn(
  //             `titlelineheight text-2xl font-black leading-[2.5rem_!important] text-mainBlack xsm:text-[2rem]  xmd:text-[2.5rem] lg:text-5xl lg:leading-[3.78rem_!important]  `
  //             // word.className
  //           )}
  //         >
  //           {char}
  //         </span>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div className={cn(' flex space-x-1', className)}>
      <h1 className='flex flex-row flex-wrap justify-center gap-1 lg:justify-start'>
        {wordsArray.map((word, idx) => {
          return (
            <span key={`word-${idx}`} className='text-center lg:text-left'>
              {word.text.map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: (idx + 1) / 100,
                    delay: (idx + 1) * 0.9 + index * 0.1,
                    ease: 'easeInOut',
                  }}
                  key={`char-${index}`}
                  className={cn(
                    `titlelineheight text-2xl font-black leading-[2.5rem_!important] text-mainBlack  xsm:text-[2rem] xmd:text-[2.5rem] lg:text-5xl  lg:leading-[3.78rem_!important] `,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </span>
          );
        })}
      </h1>
      {/* cursor */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(' h-4 w-[4px]  rounded-sm bg-secondary sm:h-6 xl:h-12', cursorClassName)}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmoothV2 = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [reset, setReset] = useState(false);

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const totalChars = wordsArray.reduce((sum, word) => sum + word.text.length, 0);
  const totalDuration = totalChars * 0.1 + wordsArray.length * 0.9;

  // Loop animation smoothly
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setReset(true);
        // tiny delay to retrigger animation instantly
        setTimeout(() => setReset(false), 30);
      },
      (totalDuration + 1) * 1000
    );

    return () => clearTimeout(timer);
  }, [totalDuration, reset]);

  return (
    <div className={cn('flex space-x-1', className)}>
      <h1 className='flex flex-row flex-wrap justify-center gap-1 lg:justify-start'>
        {wordsArray.map((word, idx) => (
          <span key={`word-${idx}`} className='text-center lg:text-left'>
            {word.text.map((char, index) => (
              <motion.span
                key={`${idx}-${index}-${reset ? 'r' : 'n'}`} // dynamic key only for motion reset
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: (idx + 1) / 100,
                  delay: (idx + 1) * 0.9 + index * 0.1,
                  ease: 'easeInOut',
                }}
                className={cn(
                  `titlelineheight text-2xl font-black leading-[2.5rem_!important] text-mainBlack 
                   xsm:text-[2rem] xmd:text-[2.5rem] lg:text-5xl lg:leading-[3.78rem_!important]`,
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </h1>

      {/* Blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn('h-4 w-[4px] rounded-sm bg-secondary sm:h-6 xl:h-12', cursorClassName)}
      />
    </div>
  );
};
