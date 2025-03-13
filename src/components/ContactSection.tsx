
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="gradient-border glassmorphism rounded-lg p-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="gradient-border glassmorphism rounded-lg p-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <a href="mailto:info@linxglobal.com" className="text-foreground hover:text-primary transition-colors">
                      info@linxglobal.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <address className="not-italic text-foreground">
                      123 Business Avenue<br />
                      Suite 456<br />
                      New York, NY 10001
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="gradient-border glassmorphism rounded-lg p-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
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
      </div>
    </section>
  );
};

export default ContactSection;
