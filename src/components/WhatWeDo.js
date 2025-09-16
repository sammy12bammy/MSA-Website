import React from 'react';
import ServiceCard from './ServiceCard';

/**
 * WhatWeDo Component
 * 
 * A section component that displays the company's three core service offerings
 * using a grid layout with animated service cards. Each service has a staggered
 * animation delay for a polished presentation effect.
 */
const WhatWeDo = () => {
  return (
    // Main section wrapper with semantic ID for navigation/linking
    <section id="what-we-do">
      {/* Container div for consistent page width and centering */}
      <div className="container">
        
        {/* Section header with title and subtitle */}
        <div className="section-header">
          <h2>What We Do</h2>
          <p className="subtitle">Three integrated approaches to building lasting value</p>
        </div>
        
        {/* Grid container for service cards */}
        <div className="services-grid">
          
          {/* Service Card 1: Strategic Investment */}
          <ServiceCard
            title="Strategic Investment"
            description="Selective capital with active support. We partner with founders who share our vision for building businesses that endure and evolve with cultural shifts."
            delay={100} // First card animates after 100ms
          />
          
          {/* Service Card 2: Venture Incubation */}
          <ServiceCard
            title="Venture Incubation"
            description="Hands-on company building from idea to scale. Our integrated approach combines market insight with technical execution and cultural awareness."
            delay={200} // Second card animates after 200ms
          />
          
          {/* Service Card 3: Technical Execution */}
          <ServiceCard
            title="Technical Execution"
            description="Product, design, and full stack engineering through MSA Services. We build with modern tools and methodologies to create scalable, user-centered solutions."
            delay={300} // Third card animates after 300ms
          />
          
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;