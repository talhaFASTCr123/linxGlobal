
import { Building, Home, Sofa, HardHat, Award, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ServicesSection = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: <Building size={28} />,
      title: "Construction",
      description: "Expert construction services for commercial and residential projects, built with precision and quality craftsmanship.",
      items: ["Residential", "Commercial", "Industrial", "Corporate", "Institutional"]
    },
    {
      icon: <Home size={28} />,
      title: "Architecture",
      description: "Innovative architectural designs that blend form and function, creating spaces that inspire and endure.",
      items: ["Commercial", "Residential", "Landscape", "Town Planning"]
    },
    {
      icon: <Sofa size={28} />,
      title: "Furniture",
      description: "Custom furniture solutions that combine aesthetics with durability, tailored to your specific needs and preferences.",
      items: ["Residential", "Corporate"]
    }
  ];

  const affiliations = [
    "Pakistan Engineering Council",
    "Punjab Local Government",
    "CNW Registered",
    "DHA & Other Local Bodies"
  ];

  const learningHubs = [
    "UOL",
    "UCP",
    "UET",
    "UMT"
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: `${label} has been copied to your clipboard.`,
        });
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary glow-text">Services</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-8 rounded glow"></div>
          <p className="text-muted-foreground max-w-3xl text-lg">
            We offer comprehensive turnkey solutions across construction, architecture, 
            and furniture design to meet all your needs under one roof with high-quality service & unique designs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="gradient-border glassmorphism rounded-lg overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(46,213,115,0.3)] fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliations Section */}
        <div className="mb-10">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <Award size={28} className="text-primary mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Affiliations & <span className="text-primary glow-text">Certifications</span>
              </h2>
            </div>
            <div className="h-1 w-16 bg-primary mb-6 rounded glow"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {affiliations.map((affiliation, index) => (
              <div 
                key={index}
                className="text-white font-bold text-lg hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={() => copyToClipboard(affiliation, "Affiliation name")}
              >
                {affiliation}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Hubs Section */}
        <div className="mb-16">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Learning <span className="text-primary glow-text">Hubs</span>
            </h2>
            <div className="h-1 w-16 bg-primary mb-6 rounded glow"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {learningHubs.map((hub, index) => (
              <div 
                key={index}
                className="text-white font-bold text-lg hover:text-primary transition-colors duration-300 cursor-pointer"
                onClick={() => copyToClipboard(hub, "Learning hub name")}
              >
                {hub}
              </div>
            ))}
          </div>
        </div>

        {/* Safety Commitment Section */}
        <div className="gradient-border glassmorphism rounded-lg p-6 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(46,213,115,0.3)]">
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 md:mb-0 md:mr-4">
              <HardHat size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              Our <span className="text-primary glow-text">Safety Commitment</span>
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-4">
            We prioritize employee care through strict adherence to OSHA guidelines, comprehensive safety training,
            and enforcement of Personal Protective Equipment (PPE) standards on all our sites.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center">
              <Shield size={20} className="text-primary mr-2" />
              <span className="text-sm">OSHA Guidelines</span>
            </div>
            <div className="flex items-center">
              <Shield size={20} className="text-primary mr-2" />
              <span className="text-sm">Safety Training</span>
            </div>
            <div className="flex items-center">
              <Shield size={20} className="text-primary mr-2" />
              <span className="text-sm">PPE Enforcement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
