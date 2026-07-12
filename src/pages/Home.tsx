import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import About from '../components/About';
import WhyAttend from '../components/WhyAttend';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import Pricing from '../components/Pricing';
import Mazha from '../components/Mazha';
import PreviousProgrammes from '../components/PreviousProgrammes';
import PhotoGallery from '../components/PhotoGallery';
import VideoSection from '../components/VideoSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  // Supports the Navbar's in-page links (e.g. clicking "Mazha" while on a
  // programme detail page): once we're back on "/", scroll to the requested
  // section if one was requested via the URL hash.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      };
      // Give the page a tick to render before scrolling.
      const timer = setTimeout(scrollToHash, 50);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>  
      <Hero />
      <About />
    
      <Countdown />

      <Pricing />
      {/* <Partners /> */}
      <PreviousProgrammes />
      <WhyAttend />
      <CTA />
    </>
  );
}
