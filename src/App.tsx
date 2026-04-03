import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Simulation from './components/Simulation';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Hero />
      <Features />
      <Simulation />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;