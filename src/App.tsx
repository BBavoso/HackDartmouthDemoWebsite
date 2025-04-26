import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Installation from './components/Installation';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "What's This Code? - Chrome Extension for Developers";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Installation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
