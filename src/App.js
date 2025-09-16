import React from 'react';
import './App.css';

//Import components
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import AreasOfFocus from './components/AreasOfFocus';
import FounderCommitment from './components/FounderCommitment';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhatWeDo />
      <AreasOfFocus />
      <FounderCommitment />
      <Footer />
    </div>
  );
};

export default App;