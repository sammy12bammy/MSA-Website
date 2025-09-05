import React from 'react';
import ServiceCard from './ServiceCard';

const WhatWeDo = () => {
  return (
    <section id="what-we-do">
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p className="subtitle">Three integrated approaches to building lasting value</p>
        </div>
        <div className="services-grid">
          <ServiceCard
            title="Strategic Investment"
            description="Selective capital with active support. We partner with founders who share our vision for building businesses that endure and evolve with cultural shifts."
            delay={100}
          />
          <ServiceCard
            title="Venture Incubation"
            description="Hands-on company building from idea to scale. Our integrated approach combines market insight with technical execution and cultural awareness."
            delay={200}
          />
          <ServiceCard
            title="Technical Execution"
            description="Product, design, and full stack engineering through MSA Services. We build with modern tools and methodologies to create scalable, user-centered solutions."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;