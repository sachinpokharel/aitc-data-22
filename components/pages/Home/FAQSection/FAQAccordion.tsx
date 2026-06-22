'use client';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonParargraph from '@/components/common/CommonParargraph';

const Accordion = ({
  question,
  answer,
  open,
  onClick,
  index = 0,
}: {
  question: string;
  answer: string;
  open: boolean;
  index?: number;
  onClick: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(open ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [open]);

  return (
    <CommonAnimation delay={(index + 1) / 5} className='flex w-full flex-col  rounded-lg bg-lightShad2'>
      <button onClick={onClick} className={`flex flex-row items-start justify-between gap-4 p-6 text-mainBlack`}>
        <CommonParargraph
          text={question}
          className={` text-left text-mainBlack hover:text-primary ${open ? 'text-primary' : ''}`}
        />

        <p className='py-2'>{open ? <FaChevronUp className='text-primary' /> : <FaChevronDown />}</p>
      </button>
      {open && <hr className='mx-auto w-[95%] border-primary' />}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-700 ease-in-out`}
        style={{ maxHeight: contentHeight }}
      >
        <p
          className='text-gray8 p-6 text-left text-mainBlack opacity-0 transition-opacity duration-700 ease-in-out'
          style={{ opacity: open ? 1 : 0 }}
        >
          {answer}
        </p>
      </div>
    </CommonAnimation>
  );
};

export default Accordion;
