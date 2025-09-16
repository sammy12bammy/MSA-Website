import React from 'react';

/**
 * Hero Component
 * 
 * The main landing section that serves as the first impression for visitors.
 * Features a compelling headline, subtitle, and two call-to-action buttons
 * with smooth scrolling navigation to other sections of the page.
 */
const Hero = () => {
  
  /**
   * Smooth scroll navigation function
   * @param {string} sectionId - The ID of the target section to scroll to
   * 
   * Uses the native scrollIntoView API with smooth behavior to create
   * a polished user experience when navigating between page sections.
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Main hero section - typically the first thing users see
    <section className="hero">
      {/* Container for consistent page width and centering */}
      <div className="container">
        
        {/* Hero content wrapper for layout control */}
        <div className="hero-content">
          
          {/* Primary headline - the main value proposition */}
          <h1>Building and backing ventures with cultural and market staying power.</h1>
          
          {/* Supporting subtitle that provides additional context */}
          <p className="subtitle">
            A privately held holding company investing in and incubating businesses for long term growth.
          </p>
          
          {/* Call-to-action button group */}
          <div className="hero-cta">
            
            {/* Primary CTA - likely the main conversion goal */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary"
            >
              Share a venture
            </button>
            
            {/* Secondary CTA - for users who want to learn more first */}
            <button
              onClick={() => scrollToSection('focus')}
              className="btn btn-secondary"
            >
              See our focus
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;