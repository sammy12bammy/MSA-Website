import React, { useState, useEffect } from 'react';

/**
 * Header Component
 * 
 * A sticky navigation header that changes appearance when scrolled.
 * Features the company logo on the left and navigation links on the right,
 * with smooth scrolling to different page sections. The header remains
 * fixed at the top and applies a 'scrolled' class for styling changes
 * after the user scrolls down 100px.
 */
const Header = () => {
  // State to track if the user has scrolled past the threshold
  const [scrolled, setScrolled] = useState(false);

  /**
   * Effect hook to handle scroll events and update header appearance
   * 
   * Sets up a scroll event listener that triggers visual changes to the
   * header (like background opacity, shadow, etc.) once the user scrolls
   * more than 100px from the top. Cleans up the event listener on unmount.
   */
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state based on scroll position (100px threshold)
      setScrolled(window.scrollY > 100);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array - effect runs once on mount

  /**
   * Smooth scroll navigation function
   * @param {string} sectionId - The ID of the target section to scroll to
   * 
   * Provides smooth scrolling behavior to specific page sections when
   * navigation buttons are clicked, enhancing user experience over
   * default anchor jumping.
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // Header with conditional styling based on scroll state
    // The 'scrolled' class allows CSS to apply different styles when user scrolls
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        
        {/* Logo section - left side of navigation */}
        <div className="logo">
          <img
            src="/MSA-Logo-Cropped.png"
            alt="Morrison Street Advisors Logo"
            className="logo-image"
            width="40"
            height="40"
          />
          Morrison Street Advisors
        </div>
        
        {/* Navigation links - right side of navigation */}
        <ul className="nav-links">
          
          {/* Navigation item: What We Do section */}
          <li>
            <button onClick={() => scrollToSection('what-we-do')}>
              What We Do
            </button>
          </li>
          
          {/* Navigation item: Focus Areas section */}
          <li>
            <button onClick={() => scrollToSection('focus')}>
              Focus Areas
            </button>
          </li>
          
          {/* Navigation item: Approach section */}
          <li>
            <button onClick={() => scrollToSection('approach')}>
              Approach
            </button>
          </li>
          
          {/* Navigation item: Contact - scrolls to footer for contact information */}
          <li>
            <button onClick={() => scrollToSection('footer')}>
              Contact
            </button>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;