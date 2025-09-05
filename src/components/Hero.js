import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Building and backing ventures with cultural and market staying power.</h1>
          <p className="subtitle">
            A privately held holding company investing in and incubating businesses for long term growth.
          </p>
          <div className="hero-cta">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn btn-primary"
            >
              Share a venture
            </button>
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