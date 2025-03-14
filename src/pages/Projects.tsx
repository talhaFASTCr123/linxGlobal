
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';

const Projects = () => {
  // Project data with the provided information
  const projects = [
    {
      id: 1,
      title: "Fatima Jinnah Institute of Dental Sciences",
      category: "Government",
      image: "lovable-uploads/fatimah_institute.png",
      description: "Architecture & Consultancy including layouts, equipment installation, and commissioning.",
      scope: "Architecture & Consultancy (Layouts, Equipment Installation, Commissioning)",
      cost: "350 Million"
    },
    {
      id: 2,
      title: "Premium Flour Mill & Moon Flour Mill",
      category: "Industrial",
      image: "lovable-uploads/premium_floor_mill.png",
      description: "Comprehensive solution encompassing consultancy, architectural design, structural engineering, commissioning, and execution.",
      scope: "Consultancy, Architectural, Structural, Commissioning, Execution",
      cost: "150 Million"
    },
    {
      id: 3,
      title: "Qaswa Flour Mill",
      category: "Industrial",
      image: "/lovable-uploads/qaswa_flour_mill.png",
      description: "Complete turn-key solution from initial consultancy through execution and commissioning phases.",
      scope: "Turn-key Solution (Consultancy, Execution, Commissioning)",
      cost: "200 Million"
    },
    {
      id: 4,
      title: "New City Mankera",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop",
      description: "Residential development with focus on construction quality and structural integrity.",
      scope: "Construction & Structural Execution",
      cost: "10.5 Million"
    },
    {
      id: 5,
      title: "Pharmaceutical Warehouse Office, Gujranwala",
      category: "Commercial",
      image: "lovable-uploads/warehouse_office.png",
      description: "Interior and infrastructure development including flooring, electrical, plumbing, and finishing works.",
      scope: "Flooring, Electrical, Plumbing, Finishing Works",
      cost: "10 Million"
    }
  ];

  useEffect(() => {
    // Initialize scroll reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('.fade-in-up').forEach(element => {
      element.classList.remove('fade-in-up');
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary glow-text">Projects</span>
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded glow"></div>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our portfolio of completed projects spanning government, industrial, 
              residential, and commercial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card gradient-border glassmorphism rounded-lg overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(46,213,115,0.3)] fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 card-content">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-xs font-medium text-primary mr-2">Scope:</span>
                      <span className="text-xs text-muted-foreground">{project.scope}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-xs font-medium text-primary mr-2">Project Cost:</span>
                      <span className="text-xs text-muted-foreground">{project.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Projects;
