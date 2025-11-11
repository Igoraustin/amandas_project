import React, { ReactNode } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'fade';
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollReveal({ 
    threshold, 
    delay,
    triggerOnce: true 
  });

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fadeLeft':
        return `${baseClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`;
      case 'fadeRight':
        return `${baseClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`;
      case 'scale':
        return `${baseClass} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      case 'fade':
        return `${baseClass} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      default: // fadeUp
        return `${baseClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;