
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, ArrowUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Linx<span className="text-primary">Global</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Building a sustainable future through innovative construction, 
              architecture, and furniture solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/linxglobalconstructions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard("https://www.facebook.com/linxglobalconstructions/", "Facebook URL");
                  window.open("https://www.facebook.com/linxglobalconstructions/", "_blank");
                }}
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:info@linx.global" 
                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard("info@linx.global", "Email address");
                  window.location.href = "mailto:info@linx.global";
                }}
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://www.instagram.com/linx.global?igsh=NGI3YzB5ZGRmeTFp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard("https://www.instagram.com/linx.global?igsh=NGI3YzB5ZGRmeTFp", "Instagram URL");
                  window.open("https://www.instagram.com/linx.global?igsh=NGI3YzB5ZGRmeTFp", "_blank");
                }}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Construction</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Architecture</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Furniture</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => copyToClipboard("Plaza CCA-73 Phase 5 DHA, Lahore, Pakistan", "Address")}
              >
                Plaza CCA-73 Phase 5 DHA,
              </p>
              <p 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => copyToClipboard("Plaza CCA-73 Phase 5 DHA, Lahore, Pakistan", "Address")}
              >
                Lahore, Pakistan
              </p>
              <p 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => copyToClipboard("info@linx.global", "Email address")}
              >
                Email: info@linx.global
              </p>
              <div>
                <p>Phone:</p>
                <p 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => copyToClipboard("+92 304 4481444", "Phone number")}
                >
                  +92 304 4481444
                </p>
                <p 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => copyToClipboard("+92 321 4975007", "Phone number")}
                >
                  +92 321 4975007
                </p>
                <p 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => copyToClipboard("+92 302 7916572", "Phone number")}
                >
                  +92 302 7916572
                </p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Linx Global. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors fixed bottom-6 right-6 z-50"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
