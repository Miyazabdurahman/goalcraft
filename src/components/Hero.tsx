import { useState } from "react";
import { MapPin, Clock, Users, Sparkles, Tent, TreePine, Calendar, ChevronDown, Check } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [openCamp, setOpenCamp] = useState<'explorer' | 'escape' | null>(null);
  const explorerFeatures = [
  'Rain Games',
  'Pottery & Clay Making',
  'Group Activities',
  'Nature Exploration',
  'Creative Workshops',
  'Team Challenges',
  'Fun & Surprises',
];

const escapeFeatures = [
  'Rain Adventure Games',
  'Fishing',
  'Boating',
  'Pottery & Clay Making',
  'Traditional Mud Bath',
  'Nature Trails',
  'Team Building Activities',
  'Campfire*',
];


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
<div className="relative order-2 flex flex-col bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-sky-100 overflow-hidden">

{/* BIG COMING SOON OVERLAY */}
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
  <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px]" />

  <div className="relative -rotate-12 w-[92%] sm:w-auto flex justify-center">
    <div className="w-full sm:w-auto px-4 sm:px-10 py-3 sm:py-5 rounded-2xl bg-[#8B1E1E] shadow-2xl border-4 border-white">
      <h2 className="text-center whitespace-nowrap text-xl sm:text-4xl font-black uppercase tracking-wide sm:tracking-[0.2em] text-white">
        COMING SOON
      </h2>
    </div>
  </div>
</div>

  {/* Header */}
  <div className="px-6 py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white">
    <div className="text-xs font-semibold tracking-wide uppercase opacity-90">
      Camp 02
    </div>

    <div className="text-xl sm:text-2xl font-bold">
      Rain Explorer
    </div>

    <div className="text-sm opacity-90">
      One-Day Monsoon Adventure
    </div>
  </div>

  {/* Body */}
  <div className="px-6 py-5 space-y-3 flex-1">

    <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
      <Calendar className="text-sky-600 shrink-0" size={18} />
      <span>09 August 2026 (Sunday)</span>
    </div>

    <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
      <Users className="text-sky-600 shrink-0" size={18} />
      <span>Grades 1–4 (Boys & Girls)</span>
    </div>

    <div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
      <MapPin className="text-sky-600 shrink-0 mt-0.5" size={18} />
      <span>
        Noor Lake, Tirur <span className="text-gray-400">or</span> Royad Farm House,
        Omassery
      </span>
    </div>

    <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
      <Clock className="text-sky-600 shrink-0" size={18} />
      <span>9:30 AM – 4:30 PM</span>
    </div>

  </div>

  {/* Footer */}
  <div className="px-6 py-3 border-t border-sky-100 bg-sky-50/50 text-xs sm:text-sm font-medium text-sky-700">
    Only <span className="font-bold">50 seats</span> available
  </div>

</div>


            {/* Camp 02 */}
            <div className="flex flex-col bg-white/85 backdrop-blur-sm rounded-3xl shadow-lg border border-indigo-100 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <div className="text-xs font-semibold tracking-wide uppercase opacity-90">Camp 01 • Premium</div>
                <div className="text-xl sm:text-2xl font-bold">Rain Escape</div>
                <div className="text-sm opacity-90">Residential Monsoon Camp</div>
              </div>

              <div className="px-6 py-5 space-y-3 flex-1">
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                <Calendar className="text-indigo-600 shrink-0" size={18} />
                 <span>2026 August 22, 23</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Tent className="text-indigo-600 shrink-0" size={18} />
                  <span>1 Night • 2 Days</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
<div className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
  <MapPin className="text-indigo-600 shrink-0 mt-0.5" size={18} />

  <div className="leading-tight">
    <p>Era Nature, Perinthalmanna</p>

    <a
      href="https://maps.app.goo.gl/3yHHrGB7mGjTzQia6"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
    >
      View on Google Maps →
    </a>
  </div>
</div>
</div>
                <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <TreePine className="text-indigo-600 shrink-0" size={18} />
                  <span>Nature trails, campfire & more</span>
                </div>
                 <button
                onClick={() => setOpenCamp(openCamp === 'escape' ? null : 'escape')}
className="mt-6 inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-800 transition"              >
                {openCamp === 'escape' ? 'Hide Details' : 'View Details'}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${openCamp === 'escape' ? 'rotate-180' : ''}`}
                />
              </button>
                

              <div
  className={`grid transition-all duration-300 ease-out ${
    openCamp === 'escape'
      ? 'grid-rows-[1fr] opacity-100 mt-6'
      : 'grid-rows-[0fr] opacity-0'
  }`}
>
  <div className="overflow-hidden">
    <ul className="space-y-2 mb-4">
      {escapeFeatures.map((feature) => (
        <li
          key={feature}
          className="flex items-center gap-2 text-gray-700 text-sm"
        >
          <Check
            size={16}
            className="text-indigo-600 shrink-0"
          />
          {feature}
        </li>
      ))}
    </ul>

    <p className="italic text-gray-500 text-sm">
      "Not just a camp… a monsoon childhood brought back to life."
    

  
    </p>
  </div>
</div>
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
