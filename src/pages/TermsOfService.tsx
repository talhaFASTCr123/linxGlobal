
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              Terms of <span className="text-primary glow-text">Service</span>
            </h1>
            
            <div className="space-y-6 text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">1. Introduction</h2>
                <p>
                  Welcome to Linx Global. These Terms of Service govern your use of our website and services. 
                  By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part 
                  of the terms, you may not access the website.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">2. Use of Our Services</h2>
                <p>
                  Our website provides information about our construction, architecture, and furniture services. You agree to use 
                  our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit 
                  anyone else's use and enjoyment of the website.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">3. Intellectual Property</h2>
                <p>
                  The content on our website, including but not limited to text, graphics, logos, icons, images, audio clips, 
                  digital downloads, and software, is the property of Linx Global or its content suppliers and is protected 
                  by international copyright laws. The compilation of all content on this site is the exclusive property of 
                  Linx Global and is protected by international copyright laws.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">4. Accuracy and Completeness of Information</h2>
                <p>
                  We are not responsible if information made available on this site is not accurate, complete, or current. 
                  The material on this site is provided for general information only and should not be relied upon or used 
                  as the sole basis for making decisions without consulting primary, more accurate, more complete, or more 
                  timely sources of information. Any reliance on the material on this site is at your own risk.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">5. Links to Third-Party Sites</h2>
                <p>
                  Our website may contain links to third-party websites or services that are not owned or controlled by 
                  Linx Global. We have no control over and assume no responsibility for the content, privacy policies, or 
                  practices of any third-party websites or services. You acknowledge and agree that Linx Global shall not 
                  be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused 
                  by or in connection with the use of or reliance on any such content, goods, or services available on or 
                  through any such websites or services.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">6. Limitation of Liability</h2>
                <p>
                  In no event shall Linx Global, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your 
                  access to or use of or inability to access or use the service; (ii) any conduct or content of any third 
                  party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use, or 
                  alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), 
                  or any other legal theory, whether or not we have been informed of the possibility of such damage.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">7. Changes to Terms of Service</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                  is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What 
                  constitutes a material change will be determined at our sole discretion.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">8. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its 
                  conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be 
                  considered a waiver of those rights.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">9. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <ul className="list-none pl-0 space-y-1">
                  <li>Email: info@linx.global</li>
                  <li>Address: Plaza CCA-73 Phase 5 DHA, Lahore, Pakistan</li>
                  <li>Phone: +92 304 4481444</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TermsOfService;
