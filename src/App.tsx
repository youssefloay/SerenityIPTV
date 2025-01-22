import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChannelCategories from './components/ChannelCategories';
import PremiumChannels from './components/PremiumChannels';
import Packages from './components/Packages';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PremiumChannels />
      <Packages />
      <ChannelCategories />
      <Features />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;