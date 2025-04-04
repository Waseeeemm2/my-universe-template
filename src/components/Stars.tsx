
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  animation: string;
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight * 2; // Extra height for scrolling
      const starCount = Math.floor((windowWidth * windowHeight) / 10000); // Adjust density
      
      const newStars: Star[] = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // percentage of viewport width
          y: Math.random() * 100, // percentage of viewport height
          size: Math.random() * 2 + 1, // size between 1-3px
          animation: Math.random() > 0.5 ? 'animate-twinkle' : 'animate-twinkle-delayed'
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars when window is resized
    window.addEventListener('resize', generateStars);
    
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 hidden dark:block pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className={`star ${star.animation}`}
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
}
