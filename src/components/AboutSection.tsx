
import { Building2, Lightbulb, Shield, Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary glow-text">About</span> Us
          </h2>
          <div className="h-1 w-20 bg-primary mb-8 rounded glow"></div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Linx Global provides turnkey solutions in construction, architecture, and furniture 
            with high-quality service and unique designs tailored to our clients' needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="gradient-border p-6 glassmorphism rounded-lg flex flex-col items-center text-center transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(46,213,115,0.3)] fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To revolutionize the construction and design industry through sustainable practices 
              and cutting-edge technology, creating spaces that inspire and endure.
            </p>
          </div>

          <div className="gradient-border p-6 glassmorphism rounded-lg flex flex-col items-center text-center transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(46,213,115,0.3)] fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver exceptional quality and innovative solutions that transform our clients' 
              visions into reality, while maintaining the highest standards of craftsmanship.
            </p>
          </div>

          <div className="gradient-border p-6 glassmorphism rounded-lg flex flex-col items-center text-center transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(46,213,115,0.3)] fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              Integrity, excellence, and innovation guide everything we do. We believe in 
              transparent communication, exceptional quality, and forward-thinking solutions.
            </p>
          </div>

          <div className="gradient-border p-6 glassmorphism rounded-lg flex flex-col items-center text-center transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(46,213,115,0.3)] fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-muted-foreground">
              Environmental responsibility is at our core. We integrate sustainable practices 
              and materials in all our projects, from green construction to innovative design solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
