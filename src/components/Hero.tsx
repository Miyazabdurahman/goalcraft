import { MapPin, Clock, Users, Sparkles, Tent, TreePine } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const registerLink =
    'https://docs.google.com/forms/d/e/1FAIpQLScbH7G_lcFmmPRVUI4lPYEX4UExkSX788heTPX6LAdFV5an0A/viewform';

  return (
    <section
      id="hero"
      className="relative pt-0 min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden "
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <div className="space-y-2 sm:space-y-8 animate-fade-in-up">

          {/* Title */}
          <div className="flex justify-center">
            <img
              src="/logo4.png"
              alt="Knowify Mazha Camp logo"
              className="h-72 sm:h-96 lg:h-[30rem] w-auto"
            />
          </div>
          <br />

          <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-gray-700 max-w-4xl mx-auto px-2">
            Play in the Rain • Learn from Nature <br />• Create Memories Forever
          </p>

         

          {/* Camp Cards */}
          <h2 className="pt-8 sm:pt-10 text-xl sm:text-2xl font-bold text-gray-900">
            Two Ways to Experience the Monsoon
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 pt-2 text-left max-w-5xl mx-auto">

            {/* Camp 01 */}
            <div className="flex flex-col bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-sky-100 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white">
                <div className="text-xs font-semibold tracking-wide uppercase opacity-90">Camp 01</div>
                <div className="text-xl sm:text-2xl font-bold">Rain Explorer</div>
                <div className="text-sm opacity-90">One-Day Monsoon Adventure</div>
              </div>

              <div className="px-6 py-5 space-y-3 flex-1">
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Users className="text-sky-600 shrink-0" size={18} />
                  <span>Grades 1–4 (Boys & Girls)</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                  <MapPin className="text-sky-600 shrink-0 mt-0.5" size={18} />
                  <span>Noor Lake, Tirur <span className="text-gray-400">or</span> Royad Farm House, Omassery</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Clock className="text-sky-600 shrink-0" size={18} />
                  <span>9:30 AM – 4:30 PM</span>
                </div>

               {/* <div className="pt-2 flex flex-wrap gap-2">
                  {['Rain Games', 'Pottery & Clay Making', 'Group Activities', 'Nature Exploration', 'Creative Workshops', 'Team Challenges'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div> 

              <div className="px-6 py-3 border-t border-sky-100 bg-sky-50/50 text-xs sm:text-sm font-medium text-sky-700">
                Only 50 seats available
              </div>
            </div>

            {/* Camp 02 */}
            <div className="flex flex-col bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-indigo-100 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <div className="text-xs font-semibold tracking-wide uppercase opacity-90">Camp 02 • Premium</div>
                <div className="text-xl sm:text-2xl font-bold">Rain Escape</div>
                <div className="text-sm opacity-90">Residential Monsoon Camp</div>
              </div>

              <div className="px-6 py-5 space-y-3 flex-1">
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Tent className="text-indigo-600 shrink-0" size={18} />
                  <span>1 Night • 2 Days</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                  <MapPin className="text-indigo-600 shrink-0 mt-0.5" size={18} />
                  <span>Royad Farm House, Omassery <span className="text-gray-400">or</span> Era Nature, Perinthalmanna</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <TreePine className="text-indigo-600 shrink-0" size={18} />
                  <span>Nature trails, campfire & more</span>
                </div>

                {/*<div className="pt-2 flex flex-wrap gap-2">
                  {['Rain Adventure Games', 'Fishing', 'Boating', 'Pottery & Clay Making', 'Traditional Mud Bath', 'Nature Trails', 'Team Building', 'Campfire*'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div> 
                <div className="text-xs text-gray-400">*Campfire subject to weather</div> */}
              </div>

              <div className="px-6 py-3 border-t border-indigo-100 bg-indigo-50/50 text-xs sm:text-sm font-medium text-indigo-700">
                Limited to 35 participants
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-8 sm:pt-10">
            <button
  onClick={() => scrollToSection('pricing')}
  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
>
  Register Now
</button>

            <button
              onClick={() => scrollToSection('previous-programmes')}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
            >
              Previous Programmes
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}