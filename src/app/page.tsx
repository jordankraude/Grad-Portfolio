'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Profile Section */}
      <section className="h-screen flex flex-col items-center justify-center moving-bg text-white">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold">Jordan Kraude</h1>
          <p className="text-2xl mt-2">Web Developer & Designer</p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen h-auto flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <div className="text-center">
          <h2 className="text-4xl font-bold p-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4">
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">JavaScript</h3>
              <p className="mt-2">Proficient in modern JavaScript, including ES6+ features and asynchronous programming.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">HTML & CSS</h3>
              <p className="mt-2">Skilled in creating semantic HTML and responsive CSS layouts.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">Next.js</h3>
              <p className="mt-2">Experienced in building server-rendered React applications with Next.js.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">Tailwind CSS</h3>
              <p className="mt-2">Adept at using Tailwind CSS for rapid UI development and design consistency.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">Bootstrap</h3>
              <p className="mt-2">Knowledgeable in leveraging Bootstrap for responsive and mobile-first designs.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">UI/UX Design</h3>
              <p className="mt-2">Strong understanding of user-centered design principles and best practices.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">Git & GitHub</h3>
              <p className="mt-2">Experienced in version control using Git and collaboration on GitHub.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">Jira & Trello</h3>
              <p className="mt-2">Proficient in using Jira and Trello for project management and team collaboration.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white rounded shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">Python & C#</h3>
              <p className="mt-2">Experience in programming with Python and C# for various applications.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="h-screen flex flex-col items-center justify-center moving-bg text-white">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="text-2xl mt-4">
            Over <span className="font-bold">5 years</span> of coding experience in web development.
          </p>
          <p className="mt-2 text-lg">
            Dedicated to building high-quality web applications and continuously learning new technologies.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
