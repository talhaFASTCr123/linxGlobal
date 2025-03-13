
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/86392433-b8ac-473c-a04e-7bb77caafe40.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-3 py-1 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs font-medium">
              Construction & Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-white">Building the</span>
              <span className="block text-primary glow-text mt-1">future together</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Specializing in construction, architecture, furniture, and solar energy solutions 
              for a sustainable tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-6 py-3 text-foreground hover:bg-accent/10 font-medium text-sm transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative float h-[400px] w-[400px] rounded-full bg-primary/5 border border-primary/20 p-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <div className="h-full w-full rounded-full glassmorphism flex items-center justify-center">
                <div className="text-6xl font-bold text-primary glow-text">
                  LINX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default HeroSection;
