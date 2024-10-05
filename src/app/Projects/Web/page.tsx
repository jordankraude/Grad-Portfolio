'use client';

import ProjectSection from '../../../components/ProjectSection'; // Adjust the import path if necessary

interface Project {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
}

const Web: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'First Webpage',
      description: 'My beginnings into Web Development',
      link: 'https://jordankraude.github.io/Personal-Projects/webpage/index.html',
      githubLink: 'https://github.com/jordankraude/Personal-Projects/tree/master/webpage',
    },
    {
      title: 'First Portfolio Site',
      description: 'My first portfolio site made with svelte and vite. You can also view my progression through school projects here',
      link: 'https://main--genuine-sherbet-ba1f4d.netlify.app/index.html',
      githubLink: 'https://github.com/jordankraude/portfolio/tree/main/portfolio-project',
    },
    {
      title: 'Portfolio API',
      description: 'The backend for my portfolio site that I used to update my database to hold projects, game files, and more',
      link: 'https://portfolioapi-gsh3.onrender.com/api-docs/',
      githubLink: 'https://github.com/jordankraude/portfolioBackend',
    },
    {
      title: 'Library Serve Team API',
      description: 'API project to handle books for a library',
      link: 'https://libraryserve.onrender.com/',
    },
    {
      title: 'My Personal Arcade',
      description: 'Arcade Game Page created to overcome the loss of flash extension through the use of Ruffle (also found in my portfolio site) ',
      link: 'https://main--genuine-sherbet-ba1f4d.netlify.app/gamepage/index.html?category=game',
      githubLink: 'https://github.com/jordankraude/portfolio/tree/main/portfolio-project',
    },
    {
      title: 'Page for the In-Laws',
      description: 'Who could say no to the in-laws',
      link: 'https://jordankraude.github.io/RymanBrothers-Webpage/',
      githubLink: 'https://github.com/jordankraude/RymanBrothers-Webpage',
    },
    {
      title: 'PLuMS',
      description: 'A personal learning management system (notes manager)',
      link: 'https://plums-two.vercel.app/',
      githubLink: 'https://github.com/jordankraude/PLUMS',
    },
    {
      title: 'Whats Cooking',
      description: 'Web app to help find recipes and generate meal ideas as well as serve as a recipe book',
      link: 'https://whats-cooking-5ewg8y6ac-jordan-kraudes-projects.vercel.app/',
      githubLink: 'https://github.com/jordankraude/WhatsCookingApp',
    },
    {
      title: 'Inventory Management Web App',
      description: 'A web app to symbolize a basic inventory management program written in C# to learn .NET and Razor Pages',
      link: '',
      githubLink: 'https://github.com/jordankraude/WebInvManagement',
    },
    {
      title: 'Nit Pic',
      description: 'Photo finding and downloading web app without the hassle of having to pay or join a site. Just find and download',
      link: 'https://nit-pic-jordankraude-jordan-kraudes-projects.vercel.app/',
      githubLink: 'https://github.com/jordankraude/InteractiveArtGallery.git',
    },
    {
      title: 'Senior Project',
      description: 'My abilities as a senior (almost grad, if you need someone for an internship, I am your guy)',
      link: 'https://webdev-frontend-lt6r.vercel.app/',
      githubLink: 'https://github.com/jordankraude/webdev-frontend'
    },
    {
      title: 'Kachinga',
      description: 'A start to try and venture on my own and fill holes in my experience, especially towards ecommerce. Help me get some groceries :)',
      link: 'https://kachinga.vercel.app/',
      githubLink: 'https://github.com/jordankraude/GiveMeTheMoneyPage'
    },
    {
      title: 'ColorSphere',
      description: 'A color palette generator that I use to find design color schemes.',
      link: 'https://color-sphere.vercel.app/',
      githubLink: 'https://github.com/jordankraude/ColorSphere'
    }
  ];

  return (
    <div className="w-full">
      {projects.map((project, index) => (
        <ProjectSection key={project.title} project={project} alignLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Web;
