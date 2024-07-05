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
            {['JavaScript', 'HTML & CSS', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'UI/UX Design', 'Git & GitHub', 'Jira & Trello', 'Python & C#'].map((skill, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-white rounded shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold">{skill}</h3>
                <p className="mt-2">Description for {skill}</p>
              </motion.div>
            ))}
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
