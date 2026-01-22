import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
