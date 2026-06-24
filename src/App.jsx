import React, { useEffect, useState, useRef } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutKovu from './components/AboutKovu';
import ImpactEcosystems from './components/ImpactEcosystems';
import ImpactNumbers from './components/ImpactNumbers';
import InclusiveTravel from './components/InclusiveTravel';
import RegenerativeWellness from './components/RegenerativeWellness';
import WhyItMatters from './components/WhyItMatters';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <AboutKovu />
        <ImpactEcosystems />
        <ImpactNumbers />
        <InclusiveTravel />
        <RegenerativeWellness />
        <WhyItMatters />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
