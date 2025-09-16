# Morrison Street Advisors - Company Website

A responsive React website for Morrison Street Advisors, a privately held holding company building ventures with cultural and market staying power.

## Overview

This single-page application features smooth scrolling navigation, animated content sections, and a modern responsive design. The site showcases the company's three core service offerings and two primary focus areas.

## Technology Stack

- React with functional components and hooks
- Modern JavaScript (ES6+)
- CSS3 with responsive design
- HTML5 semantic markup

## Key Features

- Responsive design across all device sizes
- Sticky navigation with scroll-based styling
- Staggered entrance animations
- Smooth scroll navigation between sections
- Professional service and focus area presentations

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with scroll detection
│   ├── Hero.js            # Landing section with CTAs
│   ├── WhatWeDo.js        # Services overview
│   ├── ServiceCard.js     # Reusable service component
│   ├── AreasOfFocus.js    # Company focus areas
│   └── Footer.js          # Contact and company information
└── App.js                 # Main application
```

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open http://localhost:3000 to view it in your browser.
5. Build for production: `npm run build`

## Components

**Header**: Implements scroll-responsive navigation with smooth scrolling to page sections.

**Hero**: Primary landing section featuring company value proposition and call-to-action buttons.

**WhatWeDo**: Displays three service offerings with staggered animations:
- Strategic Investment
- Venture Incubation  
- Technical Execution

**AreasOfFocus**: Showcases two primary focus areas:
- Entertainment Investments
- Venture Development

**Footer**: Contains company information, contact details, and navigation links.

## Configuration

Before deployment, update:
- Contact information in Footer component
- Logo file at `public/MSA-Logo-Cropped.png`
- External links (LinkedIn, MSA Services)

## Deployment

The application builds to static files suitable for any hosting platform including Netlify, Vercel, or AWS S3/CloudFront.