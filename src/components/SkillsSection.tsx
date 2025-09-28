import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Search, 
  Code, 
  Network, 
  Eye, 
  Users,
  Terminal,
  Lock,
  AlertTriangle,
  Bug,
  Server,
  Mail
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ElementType;
  description: string;
  color: string;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('security');

  const skillCategories: SkillCategory[] = [
    {
      name: 'Security Testing',
      icon: Shield,
      color: 'text-primary',
      skills: [
        {
          name: 'Burp Suite',
          level: 90,
          category: 'security',
          icon: Bug,
          description: 'Advanced web application security testing',
          color: 'primary'
        },
        {
          name: 'Nessus',
          level: 85,
          category: 'security',
          icon: Search,
          description: 'Vulnerability scanning and assessment',
          color: 'primary'
        },
        {
          name: 'OWASP Top 10',
          level: 95,
          category: 'security',
          icon: AlertTriangle,
          description: 'Web application security vulnerabilities',
          color: 'primary'
        },
        {
          name: 'Metasploit',
          level: 75,
          category: 'security',
          icon: Terminal,
          description: 'Penetration testing framework',
          color: 'primary'
        },
        {
          name: 'ZAP',
          level: 80,
          category: 'security',
          icon: Shield,
          description: 'OWASP Zed Attack Proxy',
          color: 'primary'
        }
      ]
    },
    {
      name: 'Security Operations',
      icon: Eye,
      color: 'text-secondary',
      skills: [
        {
          name: 'SOC/SIEM',
          level: 85,
          category: 'operations',
          icon: Eye,
          description: 'Security Operations Center management',
          color: 'secondary'
        },
        {
          name: 'Trend Micro XDR',
          level: 80,
          category: 'operations',
          icon: Shield,
          description: 'Extended Detection and Response',
          color: 'secondary'
        },
        {
          name: 'Threat Intelligence',
          level: 75,
          category: 'operations',
          icon: AlertTriangle,
          description: 'Threat analysis and reporting',
          color: 'secondary'
        },
        {
          name: 'Incident Response',
          level: 80,
          category: 'operations',
          icon: Users,
          description: 'Security incident management',
          color: 'secondary'
        },
        {
          name: 'Zscaler',
          level: 70,
          category: 'operations',
          icon: Network,
          description: 'Cloud security platform',
          color: 'secondary'
        }
      ]
    },
    {
      name: 'Technical Skills',
      icon: Code,
      color: 'text-accent',
      skills: [
        {
          name: 'Python',
          level: 85,
          category: 'technical',
          icon: Code,
          description: 'Security automation and scripting',
          color: 'accent'
        },
        {
          name: 'Active Directory',
          level: 80,
          category: 'technical',
          icon: Server,
          description: 'Identity and access management',
          color: 'accent'
        },
        {
          name: 'Email Security',
          level: 90,
          category: 'technical',
          icon: Mail,
          description: 'SPF, DMARC, DKIM configuration',
          color: 'accent'
        },
        {
          name: 'Network Security',
          level: 75,
          category: 'technical',
          icon: Network,
          description: 'Network infrastructure security',
          color: 'accent'
        },
        {
          name: 'Checkpoint Harmony',
          level: 70,
          category: 'technical',
          icon: Lock,
          description: 'Endpoint security solution',
          color: 'accent'
        }
      ]
    }
  ];

  const categories = [
    { id: 'security', name: 'Security Testing', icon: Shield },
    { id: 'operations', name: 'SOC Operations', icon: Eye },
    { id: 'technical', name: 'Technical', icon: Code }
  ];

  const getCurrentSkills = () => {
    const category = skillCategories.find(cat => 
      cat.name.toLowerCase().includes(activeCategory) || 
      (activeCategory === 'security' && cat.name === 'Security Testing') ||
      (activeCategory === 'operations' && cat.name === 'Security Operations') ||
      (activeCategory === 'technical' && cat.name === 'Technical Skills')
    );
    return category?.skills || [];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-primary mb-2">
              <span className="text-secondary">user@security:</span>
              <span className="text-muted-foreground">~$ </span>
              <span className="text-primary">find ./skills -type f -name "*.sh" | head -20</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-matrix font-orbitron mb-4">
              SKILLS.DUMP
            </h2>
            <div className="w-24 h-1 bg-gradient-matrix mx-auto"></div>
          </div>

          {/* Category Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-terminal-bg border border-terminal-border rounded-lg p-1 flex gap-1">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`font-mono text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-primary/20 text-primary glow-matrix'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground ml-4">
                {activeCategory}_skills.json
              </div>
            </div>
            
            <div className="p-6">
              <div className="font-mono text-primary mb-4">
                <span className="text-accent">// </span>
                Loading {categories.find(c => c.id === activeCategory)?.name} Skills...
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {getCurrentSkills().map((skill, index) => (
                  <Card 
                    key={skill.name} 
                    className="bg-card/30 border-card-border p-4 glow-matrix hover:glow-cyber transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded bg-muted/20 group-hover:animate-glow-pulse`}>
                        <skill.icon className={`w-5 h-5 text-${skill.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                            {skill.name}
                          </h4>
                          <Badge 
                            variant="outline" 
                            className={`border-${skill.color}/30 text-${skill.color} font-mono text-xs`}
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3">
                          {skill.description}
                        </p>
                        
                        <div className="space-y-2">
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-muted/20"
                          />
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-muted-foreground">Proficiency</span>
                            <span className={`text-${skill.color}`}>
                              {skill.level >= 90 ? 'Expert' : 
                               skill.level >= 80 ? 'Advanced' :
                               skill.level >= 70 ? 'Intermediate' : 'Basic'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-8 p-4 bg-muted/10 border border-terminal-border rounded">
                <div className="font-mono text-sm">
                  <div className="text-primary mb-2">
                    <span className="text-secondary">user@security:</span>
                    <span className="text-muted-foreground">~$ </span>
                    <span className="text-primary">echo "Skills summary for {activeCategory}"</span>
                  </div>
                  <div className="text-terminal-text">
                    {activeCategory === 'security' && "Specialized in web application security testing, vulnerability assessment, and penetration testing using industry-standard tools."}
                    {activeCategory === 'operations' && "Experienced in security operations, threat detection, incident response, and managing enterprise security solutions."}
                    {activeCategory === 'technical' && "Strong technical foundation in security automation, infrastructure management, and email security protocols."}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-bold text-gradient-cyber font-orbitron mb-4">
              SOFT SKILLS
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Team Leadership',
                'Strategic Thinking', 
                'Problem Solving',
                'Risk Assessment',
                'Communication',
                'Continuous Learning'
              ].map((skill) => (
                <Badge 
                  key={skill}
                  className="bg-gradient-cyber text-accent-foreground font-mono animate-glow-pulse"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;