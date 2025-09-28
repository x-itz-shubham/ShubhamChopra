import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Terminal, Code, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Information Security | VAPT | Security Engineer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Scan lines effect */}
      <div className="scan-lines absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Window */}
          <div className="terminal-window max-w-3xl mx-auto mb-8 animate-slide-up">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground ml-4">
                /home/shubham/portfolio.sh
              </div>
            </div>
            
            <div className="p-6 font-mono">
              <div className="text-primary mb-2">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">whoami</span>
              </div>
              
              <div className="mb-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="text-gradient-matrix font-orbitron">SHUBHAM</span>
                  <br />
                  <span className="text-gradient-cyber font-orbitron">CHOPRA</span>
                </h1>
              </div>
              
              <div className="text-primary mb-2">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">cat role.txt</span>
              </div>
              
              <div className="text-lg md:text-xl mb-6 h-8">
                <span className="text-terminal-text">{displayedText}</span>
                <span className="animate-terminal-cursor text-primary">_</span>
              </div>
              
              <div className="text-primary mb-4">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">ls -la specialties/</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
                <div className="bg-muted/20 p-4 rounded border border-terminal-border">
                  <Shield className="w-6 h-6 text-primary mb-2" />
                  <div className="text-sm text-primary font-semibold">VAPT</div>
                  <div className="text-xs text-muted-foreground">Vulnerability Assessment & Penetration Testing</div>
                </div>
                
                <div className="bg-muted/20 p-4 rounded border border-terminal-border">
                  <Terminal className="w-6 h-6 text-secondary mb-2" />
                  <div className="text-sm text-secondary font-semibold">SOC Operations</div>
                  <div className="text-xs text-muted-foreground">Security Operations Center Management</div>
                </div>
                
                <div className="bg-muted/20 p-4 rounded border border-terminal-border">
                  <Code className="w-6 h-6 text-accent mb-2" />
                  <div className="text-sm text-accent font-semibold">Secure Coding</div>
                  <div className="text-xs text-muted-foreground">Application Security & Code Review</div>
                </div>
              </div>
              
              <div className="text-primary">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">./explore_portfolio.sh</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={scrollToAbout}
              className="bg-gradient-matrix text-primary-foreground font-mono glow-matrix hover:scale-105 transition-all duration-300"
            >
              [Execute Portfolio]
            </Button>
            
            <Button 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary/10 font-mono glow-cyber"
            >
              [Download Resume]
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              className="w-6 h-6 text-primary mx-auto cursor-pointer hover:text-secondary transition-colors" 
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20 font-mono text-xs animate-float">
        // Ethical Hacking
      </div>
      <div className="absolute bottom-32 right-10 text-secondary/20 font-mono text-xs animate-float" style={{ animationDelay: '1s' }}>
        /* Security First */
      </div>
      <div className="absolute top-1/2 right-20 text-accent/20 font-mono text-xs animate-float" style={{ animationDelay: '2s' }}>
        {/* Secure by Design */}
      </div>
    </section>
  );
};

export default HeroSection;