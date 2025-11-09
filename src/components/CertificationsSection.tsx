import CertificationCard from '@/components/CertificationCard';
import cehLogo from '@/assets/ceh-logo.png';
import ccLogo from '@/assets/cc-logo.png';
import capLogo from '@/assets/cap-logo.png';
import tcmLogo from '@/assets/tcm-logo.png';
import nptelLogo from '@/assets/nptel-logo.png';

interface Certification {
  name: string;
  issuer: string;
  code: string;
  description: string;
  year: string;
  status: 'Active' | 'Completed';
  logo?: string;
  link: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      name: "Practical Junior Penetration Tester (PJPT)",
      issuer: "TCM Security",
      code: "PJPT",
      description: "Comprehensive hands-on penetration testing certification covering real-world attack scenarios and practical exploitation techniques.",
      year: "2025",
      status: "Active",
      logo: tcmLogo,
      link: "https://api.accredible.com/v1/auth/invite?code=565a0c9240d772a1367e&credential_id=87e0c8b0-866b-4397-bfe5-2c6d2eac8f1f&url=https%3A%2F%2Fcertified.tcm-sec.com%2F87e0c8b0-866b-4397-bfe5-2c6d2eac8f1f%3Fkey%3Ddc562a544138aa213e5c6948c2f4e28f5994eb631014e17386752a73d7d6c801&ident=a5239b06-a11a-4b36-8904-a79618091efb"
    },
    {
      name: "Certified Ethical Hacker (CEH) v12",
      issuer: "EC-Council",
      code: "CEH",
      description: "Industry-leading ethical hacking certification covering penetration testing, vulnerability assessment, and security audit techniques.",
      year: "2024",
      status: "Active",
      logo: cehLogo,
      link: "https://drive.google.com/file/d/1uEPdivv0AaRnedLF7H5mAy_sYkiJf-iN/view"
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC²",
      code: "ISC²-CC",
      description: "Foundation-level certification in cybersecurity principles, covering security concepts, risk management, and security controls.",
      year: "2024",
      status: "Active",
      logo: ccLogo,
      link: "https://www.credly.com/earner/earned/badge/d1a34a93-f3b9-45f1-bee9-43f0f7375f92"
    },
    {
      name: "Certified AppSec Practitioner (CAP)",
      issuer: "The SecOps Group",
      code: "CAP",
      description: "Specialized certification in application security, focusing on secure coding practices and web application testing.",
      year: "2023",
      status: "Active",
      logo: capLogo,
      link: "https://drive.google.com/file/d/11EA3UJw-ewPtDzbnhtNm0XPA8C__CrOu/view"
    },
    {
      name: "Practical Web Security Testing",
      issuer: "TCM Security",
      code: "PWST",
      description: "Hands-on certification in web application penetration testing with practical real-world scenarios.",
      year: "2023",
      status: "Completed",
      logo: tcmLogo,
      link: "https://drive.google.com/file/d/16IeeKXemHYH6M71Po4imG4LZdauOEsj1/view"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "NPTEL",
      code: "NPTEL-CS",
      description: "Academic certification covering fundamental cybersecurity concepts and emerging security threats.",
      year: "2022",
      status: "Completed",
      logo: nptelLogo,
      link: "https://drive.google.com/file/d/1hp7W393TT6xcyNjDe90x9dVmQQm7TlWM/view"
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
                logo={cert.logo}
                link={cert.link}
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