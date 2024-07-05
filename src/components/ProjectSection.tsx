'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

const ProjectSection: React.FC<{ project: Project; alignLeft: boolean }> = ({ project, alignLeft }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    // Add any additional animations or effects when the project comes into view
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`w-full h-screen flex items-center justify-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: 'inherit' }} // Ensures the background color matches the parent
    >
      <div className="w-full max-w-7xl mx-auto p-10 flex flex-col">
        <div className={`flex flex-col ${alignLeft ? 'items-start' : 'items-end'} w-full mb-10`}>
          <h3 className="text-5xl font-bold mb-4">{project.title}</h3>
          <hr className="border-2 border-[#B5D99C] w-2/3 transition-colors duration-500" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-lg mb-6">{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#B5D99C] hover:text-white transition-colors mb-4 block">Link to Site</a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#B5D99C] hover:text-white transition-colors">View Code on Github</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
