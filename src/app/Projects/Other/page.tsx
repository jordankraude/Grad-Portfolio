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
      title: 'Shift Scheduler',
      description: 'Would allow a management team to create new employees, create shifts that need to be worked in different locations, and schedule their employees into their shifts. (Will disable the authorization needed to access application shortly)',
      link: 'https://osso-scheduler-eight.vercel.app/',
      githubLink: ''
      },
      {
      title: 'Web Scraper',
      description: 'Wanted to make a project to see what a web scraper could do just like the bots that scrape websites for SEO purposes.',
      link: '',
      githubLink: 'https://github.com/jordankraude/Web-Scrapper'
      },
            {
      title: 'Checkers',
      description: 'Failed attempt in the moment to make a checkers game in C++ to broaden my knowledge that I need to go back and finish',
      link: '',
      githubLink: 'https://github.com/jordankraude/Checkers'
      },
      
    ]
  return (
    <div className="w-full min-h-screen h-auto p-40 bg-white text-black">
      <section className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl font-bold -mb-20 -mt-20'>Ongoing Projects</h2>
        <div className="w-full">
          {projects.map((project, index) => (
            <ProjectSection key={project.title} project={project} alignLeft={index % 2 === 0} />
          ))}
        </div>
      </section>
      <section className="h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
        <div className="w-full max-w-7xl mx-auto text-center p-4">
          <h2 className="text-4xl font-bold mb-12">Other Projects</h2>
          <div className="w-full">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLKf4Cr3485GyRFN9rvHHeC3LAcrOSTh-Ykx599m70WB97jnkot5UASkKKgkFDpZU3H4VtsvdcO3A3/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="auto"
              className="rounded-lg"
              title="Embedded Google Sheet"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjects;
