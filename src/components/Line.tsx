'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Line: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`absolute bottom-0 h-6 bg-[#B5D99C] transition-transform duration-1000 ${inView ? 'transform translate-x-0' : `transform ${side === 'left' ? '-translate-x-full' : 'translate-x-full'}`}`}
      style={{
        width: '75%',
        left: side === 'left' ? '25%' : 'auto',
        right: side === 'right' ? '25%' : 'auto',
        transform: inView ? 'translateX(0)' : (side === 'left' ? 'translateX(-100%)' : 'translateX(100%)'),
      }}
    />
  );
};

export default Line;

