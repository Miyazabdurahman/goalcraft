import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { previousProgrammes } from '../data/programmes';

// Clickable showcase of past programmes. Each card links to its own
// dedicated page at /programmes/:slug (see src/pages/ProgrammeDetail.tsx).
// Add a new past programme by editing `src/data/programmes.ts` — this
// component (and the Photo Gallery / Video Section teasers) will pick it up
// automatically.
export default function PreviousProgrammes() {
  return (
    <section id="previous-programmes" className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-white via-blue-50/40 to-white">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
       
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Previous Programmes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A look back at the moments, memories and milestones from our past camps and programmes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {previousProgrammes.map((programme) => (
            <Link
              key={programme.id}
              to={`/programmes/${programme.slug}`}
              className="group w-full sm:w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 flex items-center justify-center p-6 bg-gray-50 overflow-hidden">
                <img
                  src={programme.coverImage}
                  alt={programme.name}
                  className="max-h-40 w-auto object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {programme.name}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {programme.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {programme.venue}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {programme.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 group-hover:gap-2.5 group-hover:text-indigo-800 transition-all duration-300">
                  View Details
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}