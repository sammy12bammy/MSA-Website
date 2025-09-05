/**
 * ServiceCard Component
 * 
 * A reusable card component used throughout the Morrison Street Advisors website
 * for displaying services, capabilities, and key information with elegant animations.
 * 
 * Features:
 * - Staggered entrance animations with customizable delays
 * - Hover effects with blue accent bar and elevation
 * - Responsive design that works across all screen sizes
 * - Semantic HTML structure for accessibility
 * 
 * Used in:
 * - WhatWeDo section (Strategic Investment, Venture Incubation, Technical Execution)
 * 
 * @param {string} title - The main heading for the card
 * @param {string} description - The body text explaining the service/capability
 * @param {number} delay - Animation delay in milliseconds for staggered entrance effects (default: 0)
 * @param {string} className - Additional CSS classes for customization (default: '')
 * 
 * @example
 * <ServiceCard
 *   title="Strategic Investment"
 *   description="Selective capital with active support..."
 *   delay={100}
 *   className="custom-style"
 * />
 */

import React, { useState, useEffect } from 'react';

const ServiceCard = ({ title, description, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  // Trigger entrance animation after specified delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`service-card ${isVisible ? 'visible' : ''} ${className}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;