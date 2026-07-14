import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'countdown', label: 'Countdown' },
  { id: 'about', label: 'About' },
  { id: 'previous-programmes', label: 'Previous Programmes' },
  { id: 'why', label: 'Why Attend' },
  { id: 'footer', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // In-page section links only exist on the Home page. If we're on a
  // programme detail page (or anywhere else), navigate home first and let
  // Home's own effect scroll to the requested section once it has rendered.
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setIsScrolled(window.scrollY > 10);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b transition-all duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">

          {/* Menu Left */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Nav links (desktop) */}
        

          {/* Logo Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('hero')}
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="Knowify Summer Camp logo"
                className="h-9 sm:h-10"
              />
            </button>
          </div>

          {/* Nav links (desktop, right side) + Register */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            
<button
  onClick={() => scrollToSection('pricing')}
  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  Register Now
</button>
          </div> 

          {/* Register button (mobile, compact)
          <div className="md:hidden ml-auto">
            <a
              href="#pricing"
              className="px-4 py-2 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 text-white rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300"
            >
              Register
            </a>
          </div>  */}

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-3 py-2.5 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </button>
          ))}

          <button
  onClick={() => scrollToSection('pricing')}
  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  Register Now
</button>
        </div>
      </div>

    </nav>
  );
}