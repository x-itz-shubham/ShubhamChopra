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
  link: string;
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
  link,
  delay = 0 
}: CertificationCardProps) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block animate-on-scroll group"
      style={{ animationDelay: `${delay}s` }}
    >
      <Card className="h-full bg-card/50 border-card-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:scale-105 cursor-pointer">
        <div className="p-6 h-full flex flex-col justify-between relative z-10">
          <div>
            <div className="flex items-center justify-between mb-3">
              {logo && (
                <div className="w-10 h-10 bg-background/80 rounded-lg flex items-center justify-center p-1 group-hover:bg-background transition-colors">
                  <img 
                    src={logo} 
                    alt={`${name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {!logo && (
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
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
            
            <h3 className="font-bold text-lg text-primary mb-2 font-orbitron leading-tight group-hover:text-primary/90 transition-colors">
              {name}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-3">
              {issuer}
            </p>

            <p className="text-xs text-terminal-text/80 leading-relaxed mb-3">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge 
              variant="outline" 
              className="border-primary/30 text-primary font-mono text-xs group-hover:border-primary/50 group-hover:text-primary/90 transition-colors"
            >
              {code}
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">{year}</span>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default CertificationCard;