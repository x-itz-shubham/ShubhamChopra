import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Shield, 
  Search, 
  Users, 
  TrendingDown,
  AlertTriangle,
  Lock
} from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'current' | 'previous';
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  icon: React.ElementType;
}

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  const experiences: Experience[] = [
    {
      title: "Information Security Analyst",
      company: "Fortis Healthcare",
      location: "Gurgaon, India",
      period: "Jul 2024 - Present",
      type: "current",
      icon: Shield,
      responsibilities: [
        "Conduct comprehensive web application security assessments using Burp Suite and Nessus",
        "Develop and implement secure coding guidelines to fortify applications against OWASP Top 10",
        "Manage vulnerability assessments across 300+ servers, network devices, and Active Directory",
        "Configure and maintain SPF, DMARC, DKIM policies for email authentication",
        "Oversee EDR/XDR solutions optimization across 5,000+ devices"
      ],
      achievements: [
        "Reduced security incidents by 25% through EDR/XDR optimization",
        "Enhanced threat visibility across enterprise infrastructure",
        "Implemented attack surface reduction strategies",
        "Converted public-facing applications to private access",
        "Enforced strict access controls preventing reconnaissance exposure"
      ],
      technologies: ["Burp Suite", "Nessus", "EDR/XDR", "OWASP", "SPF/DMARC/DKIM", "Active Directory"]
    },
    {
      title: "Information Security Trainee",
      company: "Fortis Healthcare",
      location: "Gurgaon, India", 
      period: "Jul 2023 - Jul 2024",
      type: "previous",
      icon: Users,
      responsibilities: [
        "Directed SOC onboarding and integration processes",
        "Conducted organization-wide phishing awareness campaigns",
        "Developed monthly cybersecurity awareness advisories",
        "Assisted in drafting and maintaining security policies",
        "Assessed IT shadow applications for security risks"
      ],
      achievements: [
        "Reduced employee phishing susceptibility by 40%",
        "Successfully integrated SOC operations",
        "Improved Zscaler and Trend Micro XDR configurations",
        "Delivered comprehensive threat intelligence reports",
        "Enhanced security awareness across organization"
      ],
      technologies: ["Zscaler", "Trend Micro XDR", "SOC", "SIEM", "Threat Intelligence", "Policy Management"]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-primary mb-2">
              <span className="text-secondary">user@security:</span>
              <span className="text-muted-foreground">~$ </span>
              <span className="text-primary">git log --oneline experience/</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-matrix font-orbitron mb-4">
              EXPERIENCE.LOG
            </h2>
            <div className="w-24 h-1 bg-gradient-matrix mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-2 border-background animate-glow-pulse hidden md:block"></div>
                  
                  <Card className={`ml-0 md:ml-16 bg-card/50 border-card-border transition-all duration-500 ${
                    expandedCard === index ? 'glow-cyber' : 'glow-matrix hover:glow-cyber'
                  }`}>
                    {/* Card Header */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleCard(index)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-3 rounded-lg ${exp.type === 'current' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                            <exp.icon className={`w-6 h-6 ${exp.type === 'current' ? 'text-primary' : 'text-secondary'}`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold text-primary font-orbitron">
                                {exp.title}
                              </h3>
                              {exp.type === 'current' && (
                                <Badge className="bg-gradient-matrix text-primary-foreground font-mono text-xs animate-glow-pulse">
                                  ACTIVE
                                </Badge>
                              )}
                            </div>
                            
                            <div className="text-lg font-semibold text-secondary mb-2">
                              {exp.company}
                            </div>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-primary hover:text-secondary">
                          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                            expandedCard === index ? 'rotate-90' : ''
                          }`} />
                        </Button>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedCard === index && (
                      <div className="px-6 pb-6 border-t border-card-border animate-slide-up">
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          {/* Responsibilities */}
                          <div className="terminal-window">
                            <div className="terminal-header">
                              <div className="flex items-center gap-2">
                                <div className="terminal-dot terminal-dot-red"></div>
                                <div className="terminal-dot terminal-dot-yellow"></div>
                                <div className="terminal-dot terminal-dot-green"></div>
                              </div>
                              <div className="text-xs font-mono text-muted-foreground ml-4">
                                responsibilities.txt
                              </div>
                            </div>
                            
                            <div className="p-4 space-y-2">
                              <div className="text-primary font-mono text-sm mb-3">
                                <span className="text-accent">#</span> Key Responsibilities
                              </div>
                              {exp.responsibilities.map((resp, idx) => (
                                <div key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                                  <span className="text-primary flex-shrink-0">→</span>
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="terminal-window">
                            <div className="terminal-header">
                              <div className="flex items-center gap-2">
                                <div className="terminal-dot terminal-dot-red"></div>
                                <div className="terminal-dot terminal-dot-yellow"></div>
                                <div className="terminal-dot terminal-dot-green"></div>
                              </div>
                              <div className="text-xs font-mono text-muted-foreground ml-4">
                                achievements.txt
                              </div>
                            </div>
                            
                            <div className="p-4 space-y-2">
                              <div className="text-secondary font-mono text-sm mb-3">
                                <span className="text-accent">#</span> Key Achievements
                              </div>
                              {exp.achievements.map((achievement, idx) => (
                                <div key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                                  <span className="text-secondary flex-shrink-0">✓</span>
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mt-6">
                          <div className="text-accent font-mono text-sm mb-3">
                            <span className="text-accent">#</span> Technologies & Tools
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline"
                                className="border-primary/30 text-primary hover:bg-primary/10 font-mono text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div className="mt-12 text-center">
            <Card className="bg-card/30 border-card-border p-6 glow-matrix">
              <div className="font-mono text-sm text-primary mb-2">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">echo "Total experience: 1+ years in Information Security"</span>
              </div>
              <p className="text-muted-foreground">
                Specializing in enterprise security, vulnerability management, and security operations
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;