import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeRecycle from './components/WhatWeRecycle';
import WhyRecycle from './components/WhyRecycle';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 font-sans text-slate-700 antialiased">
      <Header />
      <main>
        <Hero />
        <WhatWeRecycle />
        <WhyRecycle />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
