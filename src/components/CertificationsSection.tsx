import CertificationCard from '@/components/CertificationCard';

interface Certification {
  name: string;
  issuer: string;
  code: string;
  description: string;
  year: string;
  status: 'Active' | 'Completed';
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      name: "Certified Ethical Hacker (CEH) v12",
      issuer: "EC-Council",
      code: "CEH",
      description: "Industry-leading ethical hacking certification covering penetration testing, vulnerability assessment, and security audit techniques.",
      year: "2024",
      status: "Active"
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC²",
      code: "ISC²-CC",
      description: "Foundation-level certification in cybersecurity principles, covering security concepts, risk management, and security controls.",
      year: "2024",
      status: "Active"
    },
    {
      name: "Certified AppSec Practitioner (CAP)",
      issuer: "The SecOps Group",
      code: "CAP",
      description: "Specialized certification in application security, focusing on secure coding practices and web application testing.",
      year: "2023",
      status: "Active"
    },
    {
      name: "Practical Web Security Testing",
      issuer: "TCM Security",
      code: "PWST",
      description: "Hands-on certification in web application penetration testing with practical real-world scenarios.",
      year: "2023",
      status: "Completed"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "NPTEL",
      code: "NPTEL-CS",
      description: "Academic certification covering fundamental cybersecurity concepts and emerging security threats.",
      year: "2022",
      status: "Completed"
    }
  ];


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
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                name={cert.name}
                issuer={cert.issuer}
                code={cert.code}
                description={cert.description}
                year={cert.year}
                status={cert.status}
                delay={index * 0.1}
              />
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;