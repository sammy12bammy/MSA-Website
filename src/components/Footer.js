import React from 'react';

const FooterSection = ({ title, children }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    {children}
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <section id="footer">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <FooterSection title="Morrison Street Advisors">
              <p>
                A privately held holding company building ventures with cultural and market staying power.
              </p>
            </FooterSection>
            {/* Contact Info */}
            <FooterSection title="Contact">
              <p>contact email</p>
              <p>Houston, Texas?</p>
              <p>phone number</p>
            </FooterSection>
            {/* Connect Info */}
            <FooterSection title="Connect">
              <a href="https://linkedin.com/company/morrison-street-advisors" aria-label="LinkedIn">LinkedIn</a><br />
              <a href="/about" aria-label="About Us">About Us</a><br />
              <a href="/careers" aria-label="Careers">Careers</a><br />
              <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
            </FooterSection>
            {/* Service Info - scrolls to other sections of page */}
            <FooterSection title="Services">
              <a href="#what-we-do" aria-label="Strategic Investment">Strategic Investment</a><br />
              <a href="#what-we-do" aria-label="Venture Incubation">Venture Incubation</a><br />
              <a href="#what-we-do" aria-label="Technical Execution">Technical Execution</a><br />
              <a href="https://msaservices.com" aria-label="MSA Services">MSA Services</a>
            </FooterSection>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Morrison Street Advisors. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;