import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "5+ Vulnerabilities Discovered",
      description: "Identified critical security flaws in production systems",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "25% Incident Reduction",
      description: "Optimized EDR/XDR solutions across 5,000+ devices",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "40% Awareness Improvement",
      description: "Reduced employee phishing susceptibility through campaigns",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-primary mb-2">
              <span className="text-secondary">user@security:</span>
              <span className="text-muted-foreground">~$ </span>
              <span className="text-primary">cat about_me.md</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-matrix font-orbitron mb-4">
              ABOUT.ME
            </h2>
            <div className="w-24 h-1 bg-gradient-matrix mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <div className="terminal-dot terminal-dot-red"></div>
                  <div className="terminal-dot terminal-dot-yellow"></div>
                  <div className="terminal-dot terminal-dot-green"></div>
                </div>
                <div className="text-xs font-mono text-muted-foreground ml-4">
                  summary.txt
                </div>
              </div>
              
              <div className="p-6 space-y-4 font-mono text-sm">
                <div className="text-primary">
                  <span className="text-accent">#</span> Summary
                </div>
                
                <p className="text-terminal-text leading-relaxed">
                  Information Security Analyst specializing in <span className="text-primary">VAPT</span>, 
                  <span className="text-secondary"> secure coding</span>, and 
                  <span className="text-accent"> web application security</span>. 
                  Skilled in identifying, analyzing, and mitigating vulnerabilities across 
                  applications and infrastructure.
                </p>
                
                <p className="text-terminal-text leading-relaxed">
                  Experienced in manual and automated testing, revalidating fixes, and providing 
                  actionable insights. Strong foundation in <span className="text-primary">defensive security</span>, 
                  including SOC operations and risk management.
                </p>
                
                <div className="text-primary mt-4">
                  <span className="text-accent">#</span> Core Focus Areas
                </div>
                
                <ul className="text-terminal-text space-y-1">
                  <li><span className="text-primary">→</span> Vulnerability Assessment & Penetration Testing</li>
                  <li><span className="text-secondary">→</span> Security Operations Center (SOC) Management</li>
                  <li><span className="text-accent">→</span> Application Security & Secure Coding</li>
                  <li><span className="text-primary">→</span> Risk Management & Compliance</li>
                  <li><span className="text-secondary">→</span> Threat Intelligence & Incident Response</li>
                </ul>
                
                <div className="text-primary mt-4">
                  <span className="text-accent">#</span> Philosophy
                </div>
                
                <p className="text-terminal-text leading-relaxed italic">
                  "Passionate about enhancing security posture through proactive assessments 
                  and continuous improvement. Security is not just a job, it's a responsibility 
                  to protect digital assets and user privacy."
                </p>
              </div>
            </div>

            {/* Achievements Cards */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gradient-cyber font-orbitron mb-2">
                  KEY ACHIEVEMENTS
                </h3>
                <div className="w-16 h-1 bg-gradient-cyber mx-auto"></div>
              </div>
              
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 border-card-border p-6 glow-matrix hover:glow-cyber transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted/20 ${achievement.color} group-hover:animate-glow-pulse`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-primary group-hover:text-secondary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Status Badge */}
              <div className="text-center">
                <Badge className="bg-gradient-matrix text-primary-foreground font-mono animate-glow-pulse">
                  STATUS: ACTIVELY SECURING SYSTEMS
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;