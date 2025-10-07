import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const sections = [
    { path: '/', label: '~/home' },
    { path: '/about', label: '~/about' },
    { path: '/experience', label: '~/experience' },
    { path: '/skills', label: '~/skills' },
    { path: '/projects', label: '~/projects' },
    { path: '/certifications', label: '~/certs' },
    { path: '/education', label: '~/education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <Link key={section.path} to={section.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-mono text-sm transition-all duration-300 ${
                    location.pathname === section.path
                      ? 'text-primary bg-primary/10 glow-matrix'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {section.label}
                </Button>
              </Link>
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
          <span className="text-accent">▲</span> {location.pathname.replace('/', '').toUpperCase() || 'HOME'}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;