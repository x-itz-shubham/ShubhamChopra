import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Terminal,
  Shield,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-terminal-border bg-terminal-bg/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold text-primary font-orbitron mb-4">
                CONTACT.INFO
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-terminal-text">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>choprashubham1309@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-terminal-text">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+91-8264554928</span>
                </div>
                <div className="flex items-center gap-2 text-terminal-text">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Gurugram, Haryana, India</span>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div>
              <h3 className="text-lg font-bold text-secondary font-orbitron mb-4">
                NETWORK.LINKS
              </h3>
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-terminal-text hover:text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://www.linkedin.com/in/shubham-chopra-577b28216/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-terminal-text hover:text-secondary hover:bg-secondary/10"
                  onClick={() => window.open('https://github.com/x-itz-shubham', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Repository
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-terminal-text hover:text-accent hover:bg-accent/10"
                  onClick={() => window.open('https://tryhackme.com/p/XDFCypher', '_blank')}
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  TryHackMe Profile
                </Button>
              </div>
            </div>

            {/* Status & Info */}
            <div>
              <h3 className="text-lg font-bold text-accent font-orbitron mb-4">
                STATUS.LOG
              </h3>
              <div className="space-y-3">
                <Badge className="bg-gradient-matrix text-primary-foreground font-mono">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  AVAILABLE FOR OPPORTUNITIES
                </Badge>
                <Badge className="bg-gradient-cyber text-secondary-foreground font-mono">
                  <Shield className="w-3 h-3 mr-1" />
                  SECURITY PROFESSIONAL
                </Badge>
                <div className="text-xs text-muted-foreground font-mono">
                  Last updated: {currentYear}
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Command Line */}
          <div className="terminal-window mb-6">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground ml-4">
                footer_message.sh
              </div>
            </div>
            
            <div className="p-4 font-mono text-sm">
              <div className="text-primary mb-2">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">echo "Thank you for visiting my portfolio"</span>
              </div>
              <div className="text-terminal-text mb-2">
                Thank you for visiting my portfolio
              </div>
              <div className="text-primary">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">cat motivation.txt</span>
              </div>
              <div className="text-terminal-text italic">
                "Securing digital landscapes, one vulnerability at a time. 
                Let's build a safer cyber world together."
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-terminal-border pt-6">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono">
              <span>© {currentYear} Shubham Chopra</span>
              <span>•</span>
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Terminal className="w-4 h-4 text-primary" />
              <span>•</span>
              <span>Cybersecurity Professional</span>
            </div>
            <div className="text-xs text-muted-foreground font-mono mt-2">
              Designed for security, optimized for performance
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;