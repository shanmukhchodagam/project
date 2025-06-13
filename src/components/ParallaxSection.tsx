import React, { ReactNode } from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
  rotate?: boolean;
  scale?: boolean;
  intensity?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = 0,
  rotate = false,
  scale = false,
  intensity = 1
}) => {
  const scrollY = useParallax();
  const transform = `
    translateY(${(scrollY - offset) * speed * intensity}px)
    ${rotate ? `rotate(${(scrollY - offset) * 0.1 * intensity}deg)` : ''}
    ${scale ? `scale(${1 + (scrollY - offset) * 0.0002 * intensity})` : ''}
  `;

  return (
    <div 
      className={`${className} transition-all duration-300 ease-out`}
      style={{ 
        transform,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;