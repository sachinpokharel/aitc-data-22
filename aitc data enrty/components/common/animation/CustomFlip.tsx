'use client';

import { keyframes } from '@emotion/react';
import { Reveal, type RevealProps } from 'react-awesome-reveal';

const customFlip = keyframes`
  from {
    opacity: 0;
    transform: perspective(8000px) rotateX(120deg);
    transform-origin: center;
  }
  
  to {
    opacity: 1;
    transform: perspective(8000px) rotateX(0deg);
    transform-origin: center;
  }
`;

const customLeftToRightFlip = keyframes`
  from {
    opacity: 0;
    transform: perspective(1000px) rotateY(90deg);
    transform-origin: center;
  }
  to {
    opacity: 1;
    transform: perspective(1000px) rotateY(0deg);
    transform-origin: center;
  } 
`;

interface CustomFlipProps extends RevealProps {
  children: React.ReactNode;
}

const CustomFlip: React.FC<CustomFlipProps> = ({ children, ...props }) => {
  return (
    <Reveal keyframes={customFlip} triggerOnce duration={900} cascade damping={0.2} fraction={0.5} {...props}>
      {children}
    </Reveal>
  );
};

const CustomLeftToRightFlip: React.FC<CustomFlipProps> = ({ children, ...props }) => {
  return (
    <Reveal keyframes={customLeftToRightFlip} triggerOnce duration={900} cascade damping={0.2} {...props}>
      {children}
    </Reveal>
  );
};

export { CustomFlip, CustomLeftToRightFlip };
