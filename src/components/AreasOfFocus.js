import React, { useState, useEffect } from 'react';

const FocusItem = ({ title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`focus-item ${isVisible ? 'visible' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const AreasOfFocus = () => {
  return (
    <section id="focus">
      <div className="container">
        <div className="section-header">
          <h2>Areas of Focus</h2>
        </div>
        <div className="focus-grid">
          <FocusItem
            title="Entertainment Investments"
            description="Supporting projects and companies shaping the future of content and distribution. We look for opportunities at the intersection of technology, culture, and storytelling."
            delay={100}
          />
          <FocusItem
            title="Venture Development"
            description="Operating ventures in-house with product and distribution advantage. Our integrated model allows for rapid iteration and market-responsive development."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;