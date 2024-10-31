import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import MemoryLane from './components/sections/MemoryLane';
import Timeline from './components/sections/Timeline';
import Registration from './components/sections/Registration';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contacts';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div
      data-layername="landingPage"
      className="flex overflow-hidden flex-col bg-neutral-950"
    >
      <Header />
      <main>
        <Hero />
        <About />
        <MemoryLane />
        <Timeline />
        <Registration />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;