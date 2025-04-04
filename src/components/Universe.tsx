
import React, { useState, useRef } from 'react';
import Planet from './Planet';

interface UniverseProps {
  onNavigate: (sectionId: string) => void;
}

export default function Universe({ onNavigate }: UniverseProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const universeRef = useRef<HTMLDivElement>(null);

  const handlePlanetClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate(sectionId);
  };

  return (
    <div ref={universeRef} className="relative min-h-screen w-full flex items-center justify-center">
      {/* Sun (center) */}
      <div className="absolute w-24 h-24 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500 rounded-full animate-pulse z-10">
        <div className="absolute inset-0 rounded-full bg-yellow-300 blur-md opacity-60"></div>
        <div className="absolute inset-0 rounded-full bg-white opacity-30"></div>
      </div>
      
      {/* Orbit paths */}
      <div className="orbit-path w-72 h-72"></div>
      <div className="orbit-path w-96 h-96"></div>
      <div className="orbit-path w-[30rem] h-[30rem]"></div>
      <div className="orbit-path w-[40rem] h-[40rem]"></div>
      
      {/* About Planet */}
      <Planet
        id="about"
        name="About"
        color="bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-400 dark:to-blue-600"
        size="w-16 h-16"
        onClick={() => handlePlanetClick('about')}
        orbitDistance="9rem"
        orbitDuration="30s"
      />
      
      {/* Projects Planet */}
      <Planet
        id="projects"
        name="Projects"
        color="bg-gradient-to-br from-green-300 to-green-500 dark:from-green-400 dark:to-green-600"
        size="w-20 h-20"
        onClick={() => handlePlanetClick('projects')}
        orbitDistance="15rem"
        orbitDuration="40s"
        className="animate-orbit"
      />
      
      {/* Skills Planet */}
      <Planet
        id="skills"
        name="Skills"
        color="bg-gradient-to-br from-red-300 to-red-500 dark:from-red-400 dark:to-red-600"
        size="w-14 h-14"
        onClick={() => handlePlanetClick('skills')}
        orbitDistance="20rem"
        orbitDuration="50s"
        className="animate-orbit"
      />
      
      {/* Contact Planet */}
      <Planet
        id="contact"
        name="Contact"
        color="bg-gradient-to-br from-purple-300 to-purple-500 dark:from-purple-400 dark:to-purple-600"
        size="w-16 h-16"
        onClick={() => handlePlanetClick('contact')}
        orbitDistance="25rem"
        orbitDuration="60s"
        className="animate-orbit"
      />
    </div>
  );
}
