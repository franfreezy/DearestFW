import React, { useState } from 'react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works
} from './components';
import Competency from './components/competencies';

const MainView = ({ onDonateClick, isModalOpen, setIsModalOpen }) => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar onDonateClick={onDonateClick} />
      <Hero />
    </div>

    <About />
    <Experience />
    
    <Works />
    <Competency />

    <div className="relative z-0">
      <Contact
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleDonateClick = () => {
    // Open modal first
    setIsDonateModalOpen(true);
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainView
      onDonateClick={handleDonateClick}
      isModalOpen={isDonateModalOpen}
      setIsModalOpen={setIsDonateModalOpen}
    />
  );
};

export default App;
