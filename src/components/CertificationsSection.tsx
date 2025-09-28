import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Lock, 
  Code, 
  Globe, 
  CheckCircle,
  Star,
  Trophy
} from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  code: string;
  description: string;
  skills: string[];
  icon: React.ElementType;
  color: string;
  priority: 'high' | 'medium' | 'standard';
  year: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      name: "Certified Ethical Hacker (CEH) v12",
      issuer: "EC-Council",
      code: "CEH",
      description: "Industry-leading ethical hacking certification covering penetration testing, vulnerability assessment, and security audit techniques.",
      skills: ["Penetration Testing", "Ethical Hacking", "Vulnerability Assessment", "Security Auditing", "Malware Analysis"],
      icon: Shield,
      color: "primary",
      priority: "high",
      year: "2024"
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC²",
      code: "ISC²-CC",
      description: "Foundation-level certification in cybersecurity principles, covering security concepts, risk management, and security controls.",
      skills: ["Security Principles", "Risk Management", "Access Controls", "Network Security", "Incident Response"],
      icon: Lock,
      color: "secondary",
      priority: "high",
      year: "2024"
    },
    {
      name: "Certified AppSec Practitioner (CAP)",
      issuer: "The SecOps Group",
      code: "CAP",
      description: "Specialized certification in application security, focusing on secure coding practices and web application testing.",
      skills: ["Application Security", "Secure Coding", "OWASP", "Code Review", "Web Security"],
      icon: Code,
      color: "accent",
      priority: "medium",
      year: "2023"
    },
    {
      name: "Practical Web Security Testing",
      issuer: "TCM Security",
      code: "PWST",
      description: "Hands-on certification in web application penetration testing with practical real-world scenarios.",
      skills: ["Web App Testing", "Burp Suite", "Manual Testing", "OWASP Top 10", "Security Assessment"],
      icon: Globe,
      color: "primary",
      priority: "medium",
      year: "2023"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "NPTEL",
      code: "NPTEL-CS",
      description: "Academic certification covering fundamental cybersecurity concepts and emerging security threats.",
      skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Security Policies", "Cryptography", "Network Security"],
      icon: Award,
      color: "secondary",
      priority: "standard",
      year: "2022"
    }
  ];

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <Star className="w-4 h-4 text-yellow-400" />;
      case 'medium': return <Trophy className="w-4 h-4 text-orange-400" />;
      default: return <CheckCircle className="w-4 h-4 text-green-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-yellow-400/50 shadow-yellow-400/20';
      case 'medium': return 'border-orange-400/50 shadow-orange-400/20';
      default: return 'border-green-400/50 shadow-green-400/20';
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="font-mono text-primary mb-2">
              <span className="text-secondary">user@security:</span>
              <span className="text-muted-foreground">~$ </span>
              <span className="text-primary">openssl verify -CAfile trusted_cas.pem certifications/*.pem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-matrix font-orbitron mb-4">
              CERTIFICATIONS.PEM
            </h2>
            <div className="w-24 h-1 bg-gradient-matrix mx-auto"></div>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={`bg-card/50 border-card-border p-6 glow-matrix hover:glow-cyber transition-all duration-500 group relative overflow-hidden ${getPriorityColor(cert.priority)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Priority Indicator */}
                <div className="absolute top-3 right-3">
                  {getPriorityIcon(cert.priority)}
                </div>

                {/* Certification Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-${cert.color}/20 group-hover:animate-glow-pulse`}>
                    <cert.icon className={`w-6 h-6 text-${cert.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-muted-foreground mb-1">
                      {cert.year} • {cert.issuer}
                    </div>
                    <h3 className="font-bold text-lg text-primary group-hover:text-secondary transition-colors leading-tight">
                      {cert.name}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className={`mt-2 border-${cert.color}/30 text-${cert.color} font-mono text-xs`}
                    >
                      {cert.code}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-3">
                  <div className="text-accent font-mono text-xs">
                    <span className="text-accent"># </span>Key Skills Covered
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="text-xs font-mono border-terminal-border text-terminal-text hover:bg-primary/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Verification Status */}
                <div className="mt-4 pt-3 border-t border-card-border">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">VERIFIED</span>
                    <span className="text-muted-foreground">• Valid Certificate</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex items-center gap-2">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground ml-4">
                certification_summary.sh
              </div>
            </div>
            
            <div className="p-6 font-mono">
              <div className="text-primary mb-4">
                <span className="text-secondary">user@security:</span>
                <span className="text-muted-foreground">~$ </span>
                <span className="text-primary">./generate_cert_report.sh</span>
              </div>
              
              <div className="space-y-2 text-terminal-text text-sm">
                <div>
                  <span className="text-accent">Total Certifications:</span> {certifications.length}
                </div>
                <div>
                  <span className="text-accent">High Priority:</span> {certifications.filter(c => c.priority === 'high').length} 
                  <span className="text-muted-foreground"> (CEH, ISC² CC)</span>
                </div>
                <div>
                  <span className="text-accent">Specialization Areas:</span> Ethical Hacking, Application Security, Web Testing
                </div>
                <div>
                  <span className="text-accent">Certification Bodies:</span> EC-Council, ISC², SecOps Group, TCM Security, NPTEL
                </div>
                <div>
                  <span className="text-accent">Status:</span> 
                  <span className="text-green-400"> All Active & Verified</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted/10 border border-terminal-border rounded">
                <div className="text-primary font-mono text-sm mb-2">
                  <span className="text-accent"># </span>Continuous Learning Path
                </div>
                <div className="text-terminal-text text-sm">
                  Currently pursuing advanced certifications in penetration testing and security architecture. 
                  Maintaining up-to-date knowledge through regular training and hands-on practice.
                </div>
              </div>
            </div>
          </div>

          {/* Additional Achievements */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gradient-cyber font-orbitron text-center mb-6">
              ADDITIONAL ACHIEVEMENTS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-card/30 border-card-border p-4 glow-matrix">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-warning" />
                  <div>
                    <h4 className="font-bold text-primary">3rd Place</h4>
                    <p className="text-xs text-muted-foreground">Cybersecurity Bootcamp Competition</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-card/30 border-card-border p-4 glow-matrix">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-warning" />
                  <div>
                    <h4 className="font-bold text-primary">Gold Medalist</h4>
                    <p className="text-xs text-muted-foreground">MCA - 9.19 CGPA (GNA University)</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;