import React from 'react';

/**
 * FooterSection Component
 * 
 * A reusable component for creating consistent footer sections with
 * a title and content. This pattern promotes DRY principles and
 * ensures uniform styling across all footer sections.
 * 
 * @param {string} title - The section heading text
 * @param {React.ReactNode} children - The content to display under the title
 */
const FooterSection = ({ title, children }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    {children}
  </div>
);

/**
 * Footer Component
 * 
 * The main site footer containing company information, contact details,
 * social/internal links, and service offerings. Features a responsive
 * grid layout with consistent sections and automatically updates the
 * copyright year. Also serves as a contact section target for navigation.
 */
const Footer = () => {
  // Dynamically generate current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Footer section with ID for smooth scroll navigation from header */}
      <section id="footer">
        {/* Container for consistent page width and centering */}
        <div className="container">
          
          {/* Main footer content grid */}
          <div className="footer-content">
            
            {/* Company Information Section */}
            <FooterSection title="Morrison Street Advisors">
              <p>
                A privately held holding company building ventures with cultural and market staying power.
              </p>
            </FooterSection>
            
            {/* Contact Information Section */}
            {/* Note: Contains placeholder contact info that needs to be updated */}
            <FooterSection title="Contact">
              <p>contact email</p>
              <p>Houston, Texas?</p>
              <p>phone number</p>
            </FooterSection>
            
            {/* External Links and Social Media Section */}
            <FooterSection title="Connect">
              {/* LinkedIn company page */}
              <a href="https://linkedin.com/company/morrison-street-advisors" aria-label="LinkedIn">LinkedIn</a><br />
              {/* Internal site pages */}
              <a href="/about" aria-label="About Us">About Us</a><br />
              <a href="/careers" aria-label="Careers">Careers</a><br />
              <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
            </FooterSection>
            
            {/* Services Section - Mix of internal anchors and external link */}
            <FooterSection title="Services">
              {/* Internal page anchors that scroll to What We Do section */}
              <a href="#what-we-do" aria-label="Strategic Investment">Strategic Investment</a><br />
              <a href="#what-we-do" aria-label="Venture Incubation">Venture Incubation</a><br />
              <a href="#what-we-do" aria-label="Technical Execution">Technical Execution</a><br />
              {/* External link to separate MSA Services website */}
              <a href="https://msaservices.com" aria-label="MSA Services">MSA Services</a>
            </FooterSection>
            
          </div>
          
          {/* Footer bottom section with copyright */}
          <div className="footer-bottom">
            <p>&copy; {currentYear} Morrison Street Advisors. All rights reserved.</p>
          </div>
          
        </div>
      </section>
    </footer>
  );
};

export default Footer;