import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CertificationCardProps {
  name: string;
  issuer: string;
  code: string;
  description: string;
  year: string;
  status: 'Active' | 'Completed';
  logo?: string;
  delay?: number;
}

const CertificationCard = ({ 
  name, 
  issuer, 
  code, 
  description, 
  year, 
  status,
  logo,
  delay = 0 
}: CertificationCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 animate-on-scroll"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front Side */}
        <Card className="absolute inset-0 w-full h-full bg-card/50 border-card-border backface-hidden overflow-hidden">
          {/* Logo Background */}
          {logo && (
            <div className="absolute inset-0 opacity-10">
              <img 
                src={logo} 
                alt={`${name} logo`}
                className="w-full h-full object-contain p-8"
              />
            </div>
          )}
          
          <div className="p-6 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center justify-between mb-3">
                {logo && (
                  <div className="w-10 h-10 bg-background/80 rounded-lg flex items-center justify-center p-1">
                    <img 
                      src={logo} 
                      alt={`${name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                {!logo && (
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                  </div>
                )}
                <Badge 
                  className={`text-xs font-mono ${
                    status === 'Active' 
                      ? 'bg-green-400/20 text-green-400 border-green-400/30' 
                      : 'bg-blue-400/20 text-blue-400 border-blue-400/30'
                  }`}
                >
                  {status}
                </Badge>
              </div>
              
              <h3 className="font-bold text-lg text-primary mb-2 font-orbitron leading-tight">
                {name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {issuer}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <Badge 
                variant="outline" 
                className="border-primary/30 text-primary font-mono text-xs"
              >
                {code}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">{year}</span>
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full bg-card/50 border-card-border backface-hidden rotate-y-180 overflow-hidden">
          {/* Logo Background */}
          {logo && (
            <div className="absolute inset-0 opacity-10">
              <img 
                src={logo} 
                alt={`${name} logo`}
                className="w-full h-full object-contain p-8"
              />
            </div>
          )}
          
          <div className="p-6 h-full flex flex-col justify-center relative z-10">
            <div className="text-center">
              {logo && (
                <div className="w-16 h-16 bg-background/80 rounded-lg flex items-center justify-center mx-auto mb-4 p-2">
                  <img 
                    src={logo} 
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {!logo && (
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-secondary rounded"></div>
                </div>
              )}
              
              <h4 className="font-bold text-secondary mb-3 font-orbitron">
                {code}
              </h4>
              
              <p className="text-sm text-terminal-text leading-relaxed">
                {description}
              </p>
              
              <div className="mt-4 pt-3 border-t border-card-border">
                <div className="flex items-center justify-center gap-2 text-xs font-mono">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CertificationCard;