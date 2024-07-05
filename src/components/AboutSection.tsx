'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import Line from './Line';

const AboutSection: React.FC<{ children: React.ReactNode; background: string; side: 'left' | 'right' }> = ({ children, background, side }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className={`relative h-screen flex flex-col items-center justify-center overflow-hidden w-full transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: background }}
    >
      {children}
      {/* Render the Line component independently for each section */}
      <Line side={side} />
    </section>
  );
};

export default AboutSection;
