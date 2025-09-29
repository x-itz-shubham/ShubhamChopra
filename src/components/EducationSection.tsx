import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen,
  Star,
  FileText,
  Users
} from 'lucide-react';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  achievement?: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
  color: string;
}

interface Publication {
  title: string;
  authors: string;
  year: string;
  venue: string;
  type: string;
  description: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: "Master of Computer Applications",
      field: "Computer Science & Applications",
      institution: "GNA University",
      location: "Phagwara, Punjab",
      period: "Aug 2021 - Jul 2023",
      grade: "9.19 CGPA",
      achievement: "Gold Medalist",
      description: "Advanced studies in computer applications with specialization in cybersecurity, software development, and information systems.",
      highlights: [
        "Achieved highest CGPA in the program",
        "Specialized in Information Security and Cybersecurity",
        "Completed advanced projects in OSINT and security research",
        "Published research papers on cybersecurity topics",
        "Participated in various technical competitions and workshops"
      ],
      icon: GraduationCap,
      color: "primary"
    },
    {
      degree: "Bachelor in Computer Applications",
      field: "Computer Applications",
      institution: "Arya College",
      location: "Ludhiana, Punjab",
      period: "Aug 2018 - Jul 2021",
      grade: "83.48%",
      description: "Comprehensive undergraduate program covering programming, database management, web development, and computer networks.",
      highlights: [
        "Strong foundation in programming languages (Python, Java, C++)",
        "Database design and management expertise",
        "Web development and application design",
        "Computer networks and system administration",
        "Final year project on information security"
      ],
      icon: BookOpen,
      color: "secondary"
    }
  ];

  const publications: Publication[] = [
    {
      title: "A Review of Phishing Attack",
      authors: "Shubham Chopra, Sukhpreet Kaur",
      year: "2022",
      venue: "Academic Research Publication",
      type: "Research Paper",
      description: "Comprehensive analysis of phishing attack methodologies, detection techniques, and prevention strategies."
    },
    {
      title: "Cyber-Attacks Identification and Measures for Prevention",
      authors: "Chopra, S., Marwaha, H., & Sharma, A.",
      year: "2022",
      venue: "International Conference on Cybersecurity and Cybercrime",
      type: "Conference Paper",
      description: "Research on emerging cyber-attack patterns and development of effective prevention measures for organizational security."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-primary mb-2">
              <span className="text-secondary">user@security:</span>
              <span className="text-muted-foreground">~$ </span>
              <span className="text-primary">cat academic_credentials.json | jq '.'</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-matrix font-orbitron mb-4">
              EDUCATION.JSON
            </h2>
            <div className="w-24 h-1 bg-gradient-matrix mx-auto"></div>
          </div>

          {/* Education Timeline */}
          <div className="relative mb-12">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-2 border-background animate-glow-pulse hidden md:block"></div>
                  
                  <Card className="ml-0 md:ml-16 bg-card/50 border-card-border glow-matrix hover:glow-cyber transition-all duration-500 group">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-${edu.color}/20 group-hover:animate-glow-pulse`}>
                          <edu.icon className={`w-6 h-6 text-${edu.color}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-primary font-orbitron group-hover:text-secondary transition-colors">
                              {edu.degree}
                            </h3>
                            {edu.achievement && (
                              <Badge className="bg-gradient-matrix text-primary-foreground font-mono animate-glow-pulse">
                                <Star className="w-3 h-3 mr-1" />
                                {edu.achievement}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="text-lg font-semibold text-secondary mb-2">
                            {edu.field}
                          </div>
                          
                          <div className="text-lg font-medium text-accent mb-3">
                            {edu.institution}
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {edu.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              {edu.grade}
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-4">
                            {edu.description}
                          </p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="terminal-window">
                        <div className="terminal-header">
                          <div className="flex items-center gap-2">
                            <div className="terminal-dot terminal-dot-red"></div>
                            <div className="terminal-dot terminal-dot-yellow"></div>
                            <div className="terminal-dot terminal-dot-green"></div>
                          </div>
                          <div className="text-xs font-mono text-muted-foreground ml-4">
                            academic_highlights.txt
                          </div>
                        </div>
                        
                        <div className="p-4 space-y-2">
                          <div className="text-primary font-mono text-sm mb-3">
                            <span className="text-accent"># </span>Key Highlights
                          </div>
                          {edu.highlights.map((highlight, idx) => (
                            <div key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                              <span className="text-primary flex-shrink-0">→</span>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient-cyber font-orbitron text-center mb-8">
              RESEARCH PUBLICATIONS
            </h3>
            
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 border-card-border p-6 glow-matrix hover:glow-cyber transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/20 group-hover:animate-glow-pulse">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                          {pub.title}
                        </h4>
                        <Badge variant="outline" className="border-accent/30 text-accent font-mono text-xs">
                          {pub.type}
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium">Authors:</span> {pub.authors}
                      </div>
                      
                      <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                        <span><strong>Year:</strong> {pub.year}</span>
                        <span><strong>Venue:</strong> {pub.venue}</span>
                      </div>
                      
                      <p className="text-terminal-text text-sm">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;