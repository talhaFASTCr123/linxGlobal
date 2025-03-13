
import { Building, Home, Sofa, Sun } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building size={28} />,
      title: "Construction",
      description: "Expert construction services for commercial and residential projects, built with precision and quality craftsmanship.",
      items: ["Commercial Buildings", "Residential Complexes", "Industrial Facilities", "Renovation Projects"]
    },
    {
      icon: <Home size={28} />,
      title: "Architecture",
      description: "Innovative architectural designs that blend form and function, creating spaces that inspire and endure.",
      items: ["Concept Development", "Detailed Planning", "3D Visualization", "Sustainable Design"]
    },
    {
      icon: <Sofa size={28} />,
      title: "Furniture",
      description: "Custom furniture solutions that combine aesthetics with durability, tailored to your specific needs and preferences.",
      items: ["Custom Furniture", "Office Interiors", "Home Collections", "Commercial Spaces"]
    },
    {
      icon: <Sun size={28} />,
      title: "Solar Energy",
      description: "Renewable energy solutions that reduce your environmental footprint while providing sustainable power for your needs.",
      items: ["Solar Panels", "Energy Audits", "System Design", "Installation & Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary glow-text">Services</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-8 rounded glow"></div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            We offer comprehensive solutions across construction, architecture, furniture design,
            and renewable energy to meet all your needs under one roof.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="gradient-border glassmorphism rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] fade-in-up"
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
      </div>
    </section>
  );
};

export default ServicesSection;
