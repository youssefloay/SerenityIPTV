import React from 'react';
import { Helmet } from 'react-helmet';
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
    <>
      {/* Add Google Analytics scripts with Helmet */}
      <Helmet>
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QJWFPR4W3D"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QJWFPR4W3D');
          `}
        </script>
      </Helmet>
      
      {/* App components */}
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
    </>
  );
}

export default App;
