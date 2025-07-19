'use client';

import { useState, useEffect } from 'react';

const phrases = [
  'Web Developer',
  'UX Researcher',
  'Graphic Designer',
  'Full Stack Developer',
  'Professional Learner',
];

export default function Typewriter() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const nextText = isDeleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    const timeout = setTimeout(() => {
      setText(nextText);

      // If finished typing and not deleting, pause and then start deleting
      if (!isDeleting && nextText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // If done deleting, go to next phrase
      if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <p className="text-2xl mt-2 font-mono text-white">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}
