import IntroPopup from './components/IntroPopup';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventStats from './components/EventStats';
import Countdown from './components/Countdown';
import About from './components/About';
import Speakers from './components/Speakers';
import WhyAttend from './components/WhyAttend';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">

      <Navbar />
      <Hero />
      <Pricing />
      <Countdown />
      <About />
      <Speakers />
      <WhyAttend />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;