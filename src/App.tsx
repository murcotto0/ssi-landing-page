import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Simulation from './components/Simulation';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  // 🎨 背景色の変化（ダーク→ライト）
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#020617", "#0f172a", "#1e293b", "#334155"]
  );

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className="min-h-screen text-slate-100"
    >
      <Hero />
      <Features />
      <Simulation />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </motion.div>
  );
}

export default App;