'use client';

import { useRef, useState } from 'react';

interface CardMagnetAnimationProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  rotationIntensity?: number;
}

const CardMagnetAnimation = ({
  children,
  className = '',
  scale = 1.02,
  rotationIntensity = 10,
}: CardMagnetAnimationProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * rotationIntensity;
    const rotateX = -((y - centerY) / centerY) * rotationIntensity;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? scale : 1})`,
        transition: 'transform 0.2s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default CardMagnetAnimation;
