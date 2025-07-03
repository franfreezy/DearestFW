import React from 'react';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import Competency from './components/competencies';

const MainView = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Competency />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <MainView />
  );
};



export default App;
