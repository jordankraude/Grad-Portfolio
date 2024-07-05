'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import AboutSection from '../../components/AboutSection';

const logos = [
  "Icons/adobe-illustrator.svg",
  "Icons/adobe-indesign.svg",
  "Icons/adobe-photoshop.svg",
  "Icons/alternate-css3-logo.svg",
  "Icons/bootstrap.svg",
  "Icons/c.svg",
  "Icons/dot-net.svg",
  "Icons/github.svg",
  "Icons/html-5-logo.svg",
  "Icons/javascript-js-square.svg",
  "Icons/jira.svg",
  "Icons/logo-python.svg",
  "Icons/nextjs.svg",
  "Icons/node-js-js.svg",
  "Icons/prisma.svg",
  "Icons/sdk-react-native.svg",
  "Icons/svelte.svg",
  "Icons/swagger.svg",
  "Icons/tailwind.svg",
  "Icons/trello.svg",
  "Icons/wordpress.svg",
  // Add more logos as needed
];

const AboutMe: React.FC = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  let forward = true

  useEffect(() => {
    const logoContainer = logoContainerRef.current;

    if (logoContainer && forward) {
      const previousPositions: { left: number; top: number }[] = [];

      const isPositionValid = (left: number, top: number) => {
        const restrictedZone = {
          xMin: 40,
          xMax: 60,
          yMin: 30,
          yMax: 70
        };

        if (left >= restrictedZone.xMin && left <= restrictedZone.xMax &&
            top >= restrictedZone.yMin && top <= restrictedZone.yMax) {
          return false;
        }

        for (let i = previousPositions.length - 1; i >= Math.max(previousPositions.length - 2, 0); i--) {
          const { left: prevLeft, top: prevTop } = previousPositions[i];
          const distance = Math.sqrt(Math.pow(left - prevLeft, 2) + Math.pow(top - prevTop, 2));
          if (distance < 40) {
            return false;
          }
        }
        return true;
      };

      logos.forEach((logo, index) => {
        let left, top;
        do {
          left = Math.floor(Math.random() * 80) + 10;
          top = Math.floor(Math.random() * 80) + 10;
        } while (!isPositionValid(left, top));

        const logoDiv = document.createElement("div");
        logoDiv.className = "logo"; // Apply the animation class
        logoDiv.style.position = "absolute";
        logoDiv.style.left = `${left}%`;
        logoDiv.style.top = `${top}%`;
        logoDiv.style.animationDelay = `${index * 0.5}s`;
        logoDiv.style.height = '40px';
        logoDiv.style.width = '40px';

        const img = document.createElement("img");
        img.src = logo; // Ensure path is correct
        img.alt = `Logo ${index}`;
        img.style.width = "40px"; // Adjust size as needed
        img.style.height = "auto";

        logoDiv.appendChild(img);
        logoContainer.appendChild(logoDiv);

        previousPositions.push({ left, top });
        forward = false
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black relative">
      <AboutSection background="linear-gradient(to right, #B5D99C, gray)" side="left">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4">
            <h1 className="text-5xl font-bold z-30">Hi I&apos;m Jordan!</h1>
            <div className="relative w-32 h-32">
            <Image
              src="/Personal-Photo.jpg"
              alt="Jordan"
              fill // Use fill to make the image cover the container
              className="rounded-full object-cover" // Ensures image is circular and covers the container
            />
            </div>
          </div>
          <p className="mt-4 text-xl">Welcome to my world of coding and design!</p>
        </div>
        <div
          className="logo-container absolute top-1/2 h-screen w-screen z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ref={logoContainerRef}
        ></div>
      </AboutSection>

      {/* Other AboutSection components */}
      <AboutSection background="#F3F4F6" side="right">
        <div className="max-w-4xl mx-auto text-center p-4">
          <h2 className="text-4xl font-bold">A Little About Me</h2>
          <p className="mt-4 text-lg">
            I am a happily married man to my wonderful wife Abby. I am a coding enthusiast who enjoys all other aspects of technology including movies, video games, and TV shows. Outside of technology you can find me playing basketball, volleyball, or tennis, reading, bowling, or spending time with my wife!
          </p>
        </div>
      </AboutSection>

      <AboutSection background="white" side="left">
        <div className="max-w-4xl mx-auto text-center p-4">
          <h2 className="text-4xl font-bold">My Journey</h2>
          <p className="mt-4 text-lg">
            I&apos;ve been coding for over 5 years, constantly learning and evolving with the latest technologies. I started as a computer science major and then moved my way into web development after my first web design class. My passion for coding is matched only by my dedication to creating clean, efficient, and user-friendly designs.
          </p>
        </div>
      </AboutSection>

      <AboutSection background="#F3F4F6" side="right">
        <div className="max-w-4xl mx-auto text-center p-4">
          <h2 className="text-4xl font-bold">My Approach</h2>
          <p className="mt-4 text-lg">
            My approach to coding and design is driven by a desire to create seamless and engaging user experiences. I believe in the power of collaboration and constantly seek to improve my skills through continuous learning and feedback. You&apos;ll never find me saying I am an expert at anything. My sole goal is to learn and improve. I&apos;ll let others give their opinions about my work for me.
          </p>
        </div>
      </AboutSection>

      <AboutSection background="white" side="left">
        <div className="max-w-4xl mx-auto text-center p-4">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-lg">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me through my <a href="/contact" className="text-[#B5D99C] underline">Contact</a> page.
          </p>
        </div>
      </AboutSection>
    </div>
  );
};

export default AboutMe;
