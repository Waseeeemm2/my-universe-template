
import React, { useRef, useEffect } from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import Stars from '@/components/Stars';
import Universe from '@/components/Universe';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const universeVisible = useRef<boolean>(true);

  const scrollToSection = (sectionId: string) => {
    universeVisible.current = false;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    universeVisible.current = true;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const universeElement = document.getElementById('universe-container');
      
      if (universeElement) {
        // Fade out universe when scrolling down
        if (scrollPosition > 100) {
          universeElement.style.opacity = '0';
          universeElement.style.pointerEvents = 'none';
        } else {
          universeElement.style.opacity = '1';
          universeElement.style.pointerEvents = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen">
      <ThemeSwitcher />
      <Stars />
      
      {/* Fixed back to top button */}
      <Button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-4 z-50 rounded-full bg-white/20 dark:bg-gray-800/40 backdrop-blur-md hover:bg-white/30 dark:hover:bg-gray-800/60"
        size="icon"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
      
      {/* Universe View */}
      <div 
        id="universe-container"
        className="fixed inset-0 z-10 transition-opacity duration-500 flex items-center justify-center"
      >
        <h1 className="absolute top-8 text-4xl font-bold text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          My Universe
        </h1>
        <Universe onNavigate={scrollToSection} />
      </div>
      
      {/* Scrollable Content */}
      <div className="relative z-20 pt-screen">
        <div className="min-h-screen"></div> {/* Spacer for universe view */}
        
        <Section id="about" title="About Me">
          <div className="space-y-4">
            <p>Welcome to my cosmic corner of the web! I'm a passionate creator who loves to build amazing things.</p>
            <p>This is where you can share your story, background, interests, and what makes you unique. Think of this section as the introduction to your personal universe.</p>
            <p>Each section of this site represents a different aspect of who you are and what you do, floating like planets in your personal galaxy.</p>
          </div>
        </Section>
        
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project Alpha</h3>
              <p>A revolutionary application that does amazing things.</p>
            </div>
            <div className="bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project Beta</h3>
              <p>An innovative solution to everyday problems.</p>
            </div>
            <div className="bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project Gamma</h3>
              <p>A creative endeavor pushing the boundaries.</p>
            </div>
            <div className="bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Project Delta</h3>
              <p>A collaborative effort with impressive results.</p>
            </div>
          </div>
        </Section>
        
        <Section id="skills" title="Skills">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">HTML/CSS</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">React</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">Python</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">UI/UX Design</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">Communication</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">Problem Solving</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">Teamwork</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">Leadership</span>
                <span className="px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full">Creativity</span>
              </div>
            </div>
          </div>
        </Section>
        
        <Section id="contact" title="Contact">
          <div className="space-y-4">
            <p>Ready to connect? Reach out through any of these cosmic channels:</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600">
                <span>Email</span>
              </Button>
              <Button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600">
                <span>LinkedIn</span>
              </Button>
              <Button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900">
                <span>GitHub</span>
              </Button>
            </div>
          </div>
        </Section>
        
        {/* Call to Action */}
        <div className="py-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Fork this template and build your own universe!</h2>
            <p className="mb-6">This template is open-source and ready for you to customize and make your own.</p>
            <Button className="bg-primary hover:bg-primary/80">
              <span>Get Started</span>
            </Button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="py-8 text-center text-sm opacity-70">
          <p>© 2025 My Universe Template | Created with ❤️ by You</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
