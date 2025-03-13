
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary glow-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mb-8 rounded glow"></div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Have a project in mind? We'd love to hear from you. 
            Reach out to us for consultations, quotes, or any inquiries.
          </p>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="gradient-border glassmorphism rounded-lg p-6 fade-in-up">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href="mailto:info@linx.global" className="text-foreground hover:text-primary transition-colors">
                    info@linx.global
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <div className="space-y-1">
                    <a href="tel:+923044481444" className="block text-foreground hover:text-primary transition-colors">
                      +92 304 4481444
                    </a>
                    <a href="tel:+923214975007" className="block text-foreground hover:text-primary transition-colors">
                      +92 321 4975007
                    </a>
                    <a href="tel:+923027916572" className="block text-foreground hover:text-primary transition-colors">
                      +92 302 7916572
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Address</p>
                  <address className="not-italic text-foreground">
                    Plaza CCA-73 Phase 5 DHA,<br />
                    Lahore, Pakistan
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          <div className="gradient-border glassmorphism rounded-lg p-6 fade-in-up">
            <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-foreground">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
