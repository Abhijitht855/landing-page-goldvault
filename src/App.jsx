
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Vision from './components/Vision';
import Problems from './components/Problems';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Vision />
      <Problems />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
