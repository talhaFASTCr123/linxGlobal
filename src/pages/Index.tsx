
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
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

    // Make sure the scroll-to-top button works correctly
    const handleScroll = () => {
      const scrollToTopButton = document.querySelector('.scroll-to-top-button');
      if (scrollToTopButton) {
        if (window.scrollY > 300) {
          scrollToTopButton.classList.add('opacity-100');
          scrollToTopButton.classList.remove('opacity-0');
        } else {
          scrollToTopButton.classList.add('opacity-0');
          scrollToTopButton.classList.remove('opacity-100');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
};

export default Index;
