import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">

          {/* Menu Left */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button onClick={() => scrollToSection('hero')}>
              <img 
                src="/logo.png" 
                alt="Knowify Summer Camp logo" 
                className="h-9 sm:h-10"
              />
            </button>
          </div>

          {/* Register Button Desktop */}
          <div className="hidden md:block ml-auto">
            <a
              href="https://forms.gle/XcMaQU3aqxwMuBCt5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Register Now
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-5 py-4 space-y-4">

            <button onClick={() => scrollToSection('hero')} className="block w-full text-left font-medium">
              Home
            </button>

             {/* <button onClick={() => scrollToSection('stats')} className="block w-full text-left font-medium">
              Event Details
            </button> */}

            <button onClick={() => scrollToSection('countdown')} className="block w-full text-left font-medium">
              Countdown
            </button>

            <button onClick={() => scrollToSection('about')} className="block w-full text-left font-medium">
              About
            </button>

            <button onClick={() => scrollToSection('speakers')} className="block w-full text-left font-medium">
              Speakers
            </button>

            <button onClick={() => scrollToSection('why')} className="block w-full text-left font-medium">
              Why Attend
            </button>

            <button onClick={() => scrollToSection('partners')} className="block w-full text-left font-medium">
              Gallery
            </button>

            <button onClick={() => scrollToSection('footer')} className="block w-full text-left font-medium">
              Contact
            </button>

            <a
              href="https://forms.gle/XcMaQU3aqxwMuBCt5"
              target="_blank"
              className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full"
            >
              Register Now
            </a>

          </div>
        </div>
      )}

    </nav>
  );
}