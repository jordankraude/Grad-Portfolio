'use client';

import React from 'react';
import ProjectSection from '../../../components/ProjectSection';

interface Project {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

const OtherProjects: React.FC = () => {
    const projects: Project[] = [
      {
      title: 'Inventory Managment',
      description: 'Program written in C# to act as an inventory management system. Written to broaden C# knowledge and begin as a stepping stone for C# web inventory application.',
      link: '',
      githubLink: 'https://github.com/jordankraude/InvManagement'
      },
      {
      title: 'The Hanging Man',
      description: 'Classic hanging man game made to broaden my programming knowledge into C++',
      link: '',
      githubLink: 'https://github.com/jordankraude/TheHangingMan'
      },
      {
      title: 'Space Invaders',
      description: 'Simple retro remake of space invaders to practice rules of programming such as encapsulation, polymorphism, inheritance, and abstraction.',
      link: '',
      githubLink: 'https://github.com/jordankraude/SpaceInvaders'
      },
      
    ]
  return (
    <div className="w-full min-h-screen text-white">
      {projects.map((project, index) => (
        <ProjectSection key={project.title} project={project} alignLeft={index % 2 === 0} />
      ))}
    </div>
  );
};




export default OtherProjects;
