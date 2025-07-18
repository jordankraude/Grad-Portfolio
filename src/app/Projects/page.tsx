'use client';

import React from 'react';
import Link from 'next/link';


const Projects: React.FC = () => {
  return (
    <div className="w-full min-h-[78vh] flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4 md:px-0 absolute top-1/4">
        <Link href="/Projects/Design" passHref>
          <div className="hover-slide bg-[#B5D99C] text-black flex items-center justify-center p-10 text-2xl font-semibold cursor-pointer">
            <div className="content">Designs/Visuals</div>
          </div>
        </Link>
        <Link href="/Projects/Software" passHref>
          <div className="hover-slide bg-[#B5D99C] text-black flex items-center justify-center p-10 text-2xl font-semibold cursor-pointer">
            <div className="content">Software</div>
          </div>
        </Link>
        <Link href="/Projects/Web" passHref>
          <div className="hover-slide bg-[#B5D99C] text-black flex items-center justify-center p-10 text-2xl font-semibold cursor-pointer">
            <div className="content">Websites</div>
          </div>
        </Link>
        <Link href="/Projects/Other" passHref>
          <div className="hover-slide bg-[#B5D99C] text-black flex items-center justify-center p-10 text-2xl font-semibold cursor-pointer">
            <div className="content">Ongoing/Other</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
