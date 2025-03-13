
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              Privacy <span className="text-primary glow-text">Policy</span>
            </h1>
            
            <div className="space-y-6 text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">1. Introduction</h2>
                <p>
                  Welcome to Linx Global's Privacy Policy. We respect your privacy and are committed to 
                  protecting your personal data. This Privacy Policy will inform you about how we look 
                  after your personal data when you visit our website and tell you about your privacy rights.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">2. Information We Collect</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identity Data: includes first name, last name, title</li>
                  <li>Contact Data: includes email address, telephone numbers, and physical address</li>
                  <li>Technical Data: includes internet protocol (IP) address, browser type and version, 
                  time zone setting and location, browser plug-in types and versions, operating system and platform</li>
                  <li>Usage Data: includes information about how you use our website</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">3. How We Use Your Information</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide you with information, products, or services you request from us</li>
                  <li>To perform the contract we are about to enter into or have entered into with you</li>
                  <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests</li>
                  <li>Where we need to comply with a legal or regulatory obligation</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">4. Data Security</h2>
                <p>
                  We have implemented appropriate security measures to prevent your personal data from being 
                  accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, 
                  we limit access to your personal data to those employees, agents, contractors, and other third parties 
                  who have a business need to know.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">5. Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as necessary to fulfill the purposes we 
                  collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">6. Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p>
                  If you wish to exercise any of these rights, please contact us at info@linx.global.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">7. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on 
                  our website when we make significant changes to this Privacy Policy.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground mt-8">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
