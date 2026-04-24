import { Calendar, MapPin, Building2 } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="hero" className="relative pt-12 min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="absolute top-20 right-10 w-52 h-52 sm:w-72 sm:h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 pointer-events-none "></div>
      <div className="absolute top-40 left-10 w-52 h-52 sm:w-72 sm:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div className="absolute bottom-20 left-1/2 w-52 h-52 sm:w-72 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 "></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <div className="space-y-2 sm:space-y-8 animate-fade-in-up">

          {/* Wisdom Students Logo 
          <div className="flex justify-center">
            <img 
              src="/Wisdom_Students_logo.png"
              alt="Wisdom Students"
              className="h-12 sm:h-10 opacity-90"
            />
          </div>
            */}
          {/* Title */}
          <div className='flex justify-center'>
            <img 
              src="/logo1.png" 
              alt="Knowify Summer Camp logo" 
              className="h-40 sm:h-44 lg:h-40"
            />
          </div>
          <br />
          {/* Subtitle */}
          <p className="text-base sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
            Give them the childhood
            <br />we were lucky to live
          </p>

          {/* Event Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 text-left">
            
            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <Calendar className="text-emerald-800" size={22} />
              <div>
                <div className="text-xs sm:text-sm text-gray-500">Date</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  May 3, 2026
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <MapPin className="text-emerald-800" size={22} />
              <div>
                <div className="text-xs sm:text-sm text-gray-500">Location</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  KOORIYAD
                </div>
              </div>
            </div>

            <a
              href='https://maps.app.goo.gl/XNA7snBMaVRp2tKD9'
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <Building2 className="text-emerald-800" size={22} />
              <div>
                <div className="text-xs sm:text-sm text-gray-500">Venue (Click here for Location)</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  Breeze Gardern
                </div>
              </div>
            </a>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
            
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLScbH7G_lcFmmPRVUI4lPYEX4UExkSX788heTPX6LAdFV5an0A/viewform'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
            >
              Register Now
            </a>

            <button
            onClick={() => scrollToSection('partners')}
               className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
              >
             Gallery
           </button>
          </div>

        </div>
      </div>
    </section>
  );
}