import React, { useState, useEffect } from 'react';

/**
 * FocusItem Component
 * 
 * A reusable component that displays individual focus areas with
 * staggered entrance animations. Uses setTimeout to create delayed
 * visibility effects, allowing for smooth cascading animations
 * when multiple items are rendered together.
 * 
 * @param {string} title - The focus area heading
 * @param {string} description - Detailed description of the focus area
 * @param {number} delay - Animation delay in milliseconds (default: 0)
 */
const FocusItem = ({ title, description, delay = 0 }) => {
  // State to control visibility for animation trigger
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Effect hook for delayed visibility animation
   * 
   * Sets up a timer that triggers the visibility state change after
   * the specified delay. This allows CSS transitions to create smooth
   * entrance animations. Cleans up the timer on component unmount
   * to prevent memory leaks.
   */
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    
    // Cleanup function to clear timer if component unmounts before delay completes
    return () => clearTimeout(timer);
  }, [delay]); // Re-run if delay prop changes

  return (
    // Focus item with conditional CSS class for animation states
    <div className={`focus-item ${isVisible ? 'visible' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

/**
 * AreasOfFocus Component
 * 
 * Displays the company's two main focus areas in a grid layout
 * with staggered animations. This section helps visitors understand
 * the specific domains where the company invests and operates,
 * providing clarity on their strategic direction.
 */
const AreasOfFocus = () => {
  return (
    // Section with ID for smooth scroll navigation from other components
    <section id="focus">
      {/* Container for consistent page width and centering */}
      <div className="container">
        
        {/* Section header */}
        <div className="section-header">
          <h2>Areas of Focus</h2>
        </div>
        
        {/* Grid container for focus items */}
        <div className="focus-grid">
          
          {/* Focus Area 1: Entertainment Investments */}
          <FocusItem
            title="Entertainment Investments"
            description="Supporting projects and companies shaping the future of content and distribution. We look for opportunities at the intersection of technology, culture, and storytelling."
            delay={100} // First item animates after 100ms
          />
          
          {/* Focus Area 2: Venture Development */}
          <FocusItem
            title="Venture Development"
            description="Operating ventures in-house with product and distribution advantage. Our integrated model allows for rapid iteration and market-responsive development."
            delay={200} // Second item animates after 200ms
          />
          
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;