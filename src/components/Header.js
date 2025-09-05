import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  //nav-bar with logo and links to sections of the page (sticks to top on scroll)
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        {/* Logo on the left*/}
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
        {/* Links on the right */}
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('what-we-do')}>What We Do</button></li>
          <li><button onClick={() => scrollToSection('focus')}>Focus Areas</button></li>
          <li><button onClick={() => scrollToSection('approach')}>Approach</button></li>
          {/**Have it go to footer for contact infomartion */}
          <li><button onClick={() => scrollToSection('footer')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;