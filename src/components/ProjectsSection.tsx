import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Eye, 
  Search, 
  Shield, 
  Terminal, 
  ExternalLink,
  Github,
  Play,
  Lock,
  Bug,
  Database
} from 'lucide-react';

interface Project {
  title: string;
  type: 'academic' | 'security' | 'research';
  description: string;
  details: string[];
  technologies: string[];
  features: string[];
  status: 'completed' | 'ongoing' | 'published';
  icon: React.ElementType;
  color: string;
}

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "OSINT & Backdoor Framework",
      type: "academic",
      description: "Comprehensive Python-based framework for information gathering and security research",
      details: [
        "Developed automated scripts for SIM information gathering and analysis",
        "Implemented IP tracking and geolocation services integration", 
        "Created social media reconnaissance tools with API integration",
        "Built subdomain enumeration module with DNS analysis",
        "Designed stealthy backdoor with encryption and persistence mechanisms"
      ],
      technologies: ["Python", "OSINT", "DNS", "Social Media APIs", "Encryption", "Network Security"],
      features: [
        "Multi-source information aggregation",
        "Automated reconnaissance workflows", 
        "Encrypted communication channels",
        "Steganographic data hiding",
        "Cross-platform compatibility"
      ],
      status: "completed",
      icon: Search,
      color: "primary"
    },
    {
      title: "Web Scraping & Analysis Suite",
      type: "academic", 
      description: "Information gathering toolkit with web scraping and keystroke analysis capabilities",
      details: [
        "Built IMDB web scraping module with data extraction and analysis",
        "Developed keystroke logger for behavioral analysis research",
        "Implemented data visualization for gathered information",
        "Created automated reporting system with statistical analysis",
        "Designed secure data storage with encryption protocols"
      ],
      technologies: ["Python", "BeautifulSoup", "Selenium", "Data Analytics", "Visualization", "SQLite"],
      features: [
        "Real-time data extraction",
        "Behavioral pattern analysis",
        "Automated report generation", 
        "Data visualization dashboards",
        "Secure data handling"
      ],
      status: "completed",
      icon: Database,
      color: "secondary"
    },
    {
      title: "Vulnerability Research Papers",
      type: "research",
      description: "Published research on phishing attacks and cyber threat prevention",
      details: [
        "Conducted comprehensive review of phishing attack methodologies",
        "Analyzed emerging cyber-attack patterns and identification techniques",
        "Developed prevention measures and security recommendations",
        "Presented findings at International Conference on Cybersecurity",
        "Contributed to cybersecurity knowledge base and community research"
      ],
      technologies: ["Research", "Analysis", "Documentation", "Cybersecurity", "Academic Writing"],
      features: [
        "Peer-reviewed publications",
        "Conference presentations",
        "Industry recommendations",
        "Security best practices",
        "Academic contributions"
      ],
      status: "published",
      icon: Shield,
      color: "accent"
    },
    {
      title: "Enterprise Security Assessment",
      type: "security",
      description: "Real-world vulnerability discovery and security enhancement project",
      details: [
        "Identified 5+ critical vulnerabilities in production systems",
        "Conducted comprehensive security assessments across multiple applications",
        "Performed sensitive information disclosure analysis",
        "Provided detailed remediation strategies and security recommendations",
        "Collaborated with development teams for secure coding implementation"
      ],
      technologies: ["VAPT", "Burp Suite", "Manual Testing", "Security Assessment", "Risk Analysis"],
      features: [
        "Critical vulnerability discovery",
        "Production system analysis",
        "Risk impact assessment",
        "Remediation strategies",
        "Security improvements"
      ],
      status: "ongoing",
      icon: Bug,
      color: "primary"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success/20 text-success';
      case 'ongoing': return 'bg-warning/20 text-warning';
      case 'published': return 'bg-primary/20 text-primary';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'ongoing': return '◐';
      case 'published': return '◆';
      default: return '○';
    }
  };

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-primary mb-2">
              <span className="text-secondary">user@security:</span>
              <span className="text-muted-foreground">~$ </span>
              <span className="text-primary">ls -la projects/ | grep -E '(academic|security|research)'</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-matrix font-orbitron mb-4">
              PROJECTS.DIR
            </h2>
            <div className="w-24 h-1 bg-gradient-matrix mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`bg-card/50 border-card-border transition-all duration-500 ${
                  expandedProject === index ? 'glow-cyber' : 'glow-matrix hover:glow-cyber'
                }`}
              >
                {/* Project Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleProject(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 rounded-lg bg-${project.color}/20`}>
                        <project.icon className={`w-6 h-6 text-${project.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-primary font-orbitron">
                            {project.title}
                          </h3>
                          <Badge className={`${getStatusColor(project.status)} font-mono text-xs`}>
                            {getStatusIcon(project.status)} {project.status.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="font-mono text-xs">
                            {project.type.toUpperCase()}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <Badge 
                              key={idx}
                              variant="outline"
                              className={`border-${project.color}/30 text-${project.color} font-mono text-xs`}
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="font-mono text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-primary hover:text-secondary">
                      <Play className={`w-5 h-5 transition-transform duration-300 ${
                        expandedProject === index ? 'rotate-90' : ''
                      }`} />
                    </Button>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === index && (
                  <div className="px-6 pb-6 border-t border-card-border animate-slide-up">
                    <div className="grid lg:grid-cols-2 gap-6 mt-6">
                      {/* Project Details */}
                      <div className="terminal-window">
                        <div className="terminal-header">
                          <div className="flex items-center gap-2">
                            <div className="terminal-dot terminal-dot-red"></div>
                            <div className="terminal-dot terminal-dot-yellow"></div>
                            <div className="terminal-dot terminal-dot-green"></div>
                          </div>
                          <div className="text-xs font-mono text-muted-foreground ml-4">
                            project_details.md
                          </div>
                        </div>
                        
                        <div className="p-4 space-y-3">
                          <div className="text-primary font-mono text-sm mb-3">
                            <span className="text-accent"># </span>Implementation Details
                          </div>
                          {project.details.map((detail, idx) => (
                            <div key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                              <span className="text-primary flex-shrink-0">→</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features & Technologies */}
                      <div className="space-y-4">
                        {/* Features */}
                        <div className="terminal-window">
                          <div className="terminal-header">
                            <div className="flex items-center gap-2">
                              <div className="terminal-dot terminal-dot-red"></div>
                              <div className="terminal-dot terminal-dot-yellow"></div>
                              <div className="terminal-dot terminal-dot-green"></div>
                            </div>
                            <div className="text-xs font-mono text-muted-foreground ml-4">
                              features.json
                            </div>
                          </div>
                          
                          <div className="p-4 space-y-2">
                            <div className="text-secondary font-mono text-sm mb-3">
                              <span className="text-accent"># </span>Key Features
                            </div>
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                                <span className="text-secondary flex-shrink-0">✓</span>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* All Technologies */}
                        <div className="bg-muted/10 border border-terminal-border rounded p-4">
                          <div className="text-accent font-mono text-sm mb-3">
                            <span className="text-accent"># </span>Technologies Used
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx}
                                variant="outline"
                                className={`border-${project.color}/30 text-${project.color} font-mono text-xs`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex gap-3">
                      {project.type === 'research' ? (
                        <Button 
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary/10 font-mono"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Publication
                        </Button>
                      ) : (
                        <>
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary/10 font-mono"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-secondary text-secondary hover:bg-secondary/10 font-mono"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* CTF & Labs Section */}
          <div className="mt-12">
            <Card className="bg-card/30 border-card-border p-6 glow-matrix">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gradient-cyber font-orbitron mb-4">
                  CONTINUOUS LEARNING
                </h3>
                <div className="font-mono text-sm text-primary mb-4">
                  <span className="text-secondary">user@security:</span>
                  <span className="text-muted-foreground">~$ </span>
                  <span className="text-primary">cat activities.log | grep -E '(CTF|TryHackMe|Labs)'</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/10 border border-terminal-border rounded p-4">
                    <Terminal className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-primary mb-1">CTF Challenges</h4>
                    <p className="text-xs text-muted-foreground">Regular participation in Capture The Flag competitions</p>
                  </div>
                  <div className="bg-muted/10 border border-terminal-border rounded p-4">
                    <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <h4 className="font-bold text-secondary mb-1">TryHackMe</h4>
                    <p className="text-xs text-muted-foreground">Active learning on cybersecurity platform</p>
                  </div>
                  <div className="bg-muted/10 border border-terminal-border rounded p-4">
                    <Code className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-bold text-accent mb-1">Security Labs</h4>
                    <p className="text-xs text-muted-foreground">Hands-on practice with security tools and techniques</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;