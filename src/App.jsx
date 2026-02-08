import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-apple-blue selection:text-white">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
