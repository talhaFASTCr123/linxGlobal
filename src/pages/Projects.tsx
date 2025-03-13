
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "Commercial Construction",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      description: "A state-of-the-art office complex featuring sustainable materials and energy-efficient design."
    },
    {
      id: 2,
      title: "Eco-Friendly Residential Community",
      category: "Residential Architecture",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop",
      description: "Sustainable residential community with solar integration and green spaces."
    },
    {
      id: 3,
      title: "Luxury Hotel Furniture",
      category: "Custom Furniture",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=600&auto=format&fit=crop",
      description: "Bespoke furniture pieces designed for a five-star hotel, combining comfort and elegance."
    },
    {
      id: 4,
      title: "Corporate Solar Installation",
      category: "Solar Energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
      description: "Large-scale solar panel installation for a corporate campus, reducing carbon footprint."
    },
    {
      id: 5,
      title: "Urban Retail Center",
      category: "Commercial Architecture",
      image: "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?q=80&w=600&auto=format&fit=crop",
      description: "Modern retail center designed to maximize visitor experience and energy efficiency."
    },
    {
      id: 6,
      title: "Minimalist Home Design",
      category: "Residential Architecture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      description: "Contemporary home design focused on clean lines and functional spaces."
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
              Explore our portfolio of completed projects spanning construction, architecture, 
              furniture design, and solar energy installations.
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
                className="gradient-border glassmorphism rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] fade-in-up"
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View Details
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-primary glow-text">Project</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today to discuss your ideas and how we can bring them to life.
              Our team is ready to deliver exceptional results for your next venture.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
