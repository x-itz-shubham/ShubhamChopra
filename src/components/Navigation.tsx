import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: '~/home' },
    { id: 'about', label: '~/about' },
    { id: 'experience', label: '~/experience' },
    { id: 'skills', label: '~/skills' },
    { id: 'projects', label: '~/projects' },
    { id: 'certifications', label: '~/certs' },
    { id: 'education', label: '~/education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-terminal-bg/90 backdrop-blur-md border-b border-terminal-border' : ''
    }`} style={{ marginBottom: '120px' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
            <span className="font-orbitron font-bold text-xl text-primary">
              shubham@security:~$
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className={`font-mono text-sm transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-primary bg-primary/10 glow-matrix'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {section.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary"
          >
            <span className="font-mono">[menu]</span>
          </Button>
        </div>

        {/* Terminal Status Bar */}
        <div className="text-xs font-mono text-muted-foreground pb-2 border-b border-terminal-border/30">
          <span className="text-primary">●</span> ONLINE 
          <span className="mx-2">|</span>
          <span className="text-secondary">◆</span> SECURE CONNECTION
          <span className="mx-2">|</span>
          <span className="text-accent">▲</span> {activeSection.toUpperCase()}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;