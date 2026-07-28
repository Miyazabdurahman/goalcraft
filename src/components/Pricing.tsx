import { useState } from 'react';
import {
  Check,
  Users,
  Clock,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

const registerLink =
  'https://docs.google.com/forms/d/e/1FAIpQLScbH7G_lcFmmPRVUI4lPYEX4UExkSX788heTPX6LAdFV5an0A/viewform';

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

export default function Pricing() {
  const [openCamp, setOpenCamp] = useState<'explorer' | 'escape' | null>(null);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-16 sm:py-24 px-4 text-center"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

     {/* <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 -right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-16 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div> */}

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-semibold mb-5">
             Registration Open
        </div>

        <h2 className="text-3xl md:text-5xl text-gray-900 font-extrabold mb-4 tracking-tight">
          Choose Your <span className="text-indigo-600">Monsoon</span> Experience
        </h2>

        

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">

            

            {/* Rain Escape */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-left">

              <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg rotate-6">
                PREMIUM
              </div>

             
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                1 NIGHT • 2 DAYS
              </span>

              <h3 className="text-3xl lg:text-5xl font-bold mt-4">
                Rain Escape
              </h3>

              <p className="text-blue-100 mt-4 leading-relaxed">
                An unforgettable residential monsoon experience packed with
                adventure, friendship, and nature.
              </p>

              <div className="flex items-baseline gap-2 mt-6">
                <span className="text-5xl font-extrabold">₹3,700</span>
                <span className="text-sm text-blue-200">/ child</span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
                <Users size={16} />
                <span className="font-semibold">Limited to 35 Participants</span>
              </div>

              <button
                onClick={() => setOpenCamp(openCamp === 'escape' ? null : 'escape')}
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-white hover:text-blue-100 transition"
              >
                {openCamp === 'escape' ? 'Hide Details' : 'View Details'}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${openCamp === 'escape' ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  openCamp === 'escape' ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 mb-4">
                    {escapeFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-blue-100 text-sm">
                        <Check size={16} className="text-white shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="italic text-blue-100 text-sm">
                    "Not just a camp… a monsoon childhood brought back to life."
                  </p>
                  <p className="text-blue-200 text-xs mt-2 font-semibold">
                    Limited Seats | Prior Registration Required
                  </p>
                </div>
              </div>

              <a
                href='https://forms.gle/Rhp51m6dWFCsQi2F9'
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full py-4 rounded-xl bg-white text-blue-700 font-bold text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Register Now →
              </a>
            </div>
            {/* Rain Explorer */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-left">

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                <Clock size={12} />
                ONE DAY CAMP
              </span>

              <h3 className="text-3xl lg:text-5xl font-bold mt-4 text-slate-800">
                Rain Explorer
              </h3>

              <p className="text-slate-600 mt-4 leading-relaxed">
                A fun-filled monsoon adventure where children explore nature,
                creativity, teamwork, and the joy of rain.
              </p>

              <div className="flex items-baseline gap-2 mt-6">
                <span className="text-5xl font-extrabold text-blue-600">₹799</span>
                <span className="text-sm text-slate-400">/ child</span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <Users size={16} className="text-blue-500" />
                <span className="font-semibold">Only 50 Seats Available</span>
              </div>

              <button
                onClick={() => setOpenCamp(openCamp === 'explorer' ? null : 'explorer')}
                className="mt-6 inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                {openCamp === 'explorer' ? 'Hide Details' : 'View Details'}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${openCamp === 'explorer' ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  openCamp === 'explorer' ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-700 font-semibold mb-3">Grades 1–4 (Boys & Girls)</p>
                  <ul className="space-y-2 mb-4">
                    {explorerFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                        <Check size={16} className="text-blue-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="italic text-slate-500 text-sm">
                    "A day your child will remember every time it rains."
                  </p>
                </div>
              </div>

              <a
           
                className="mt-8 block w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Coming soon...
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
