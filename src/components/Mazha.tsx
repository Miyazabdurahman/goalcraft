{/* import { Link } from 'react-router-dom';
import { CloudRain, Droplets, Calendar, MapPin, ClipboardList, ArrowRight } from 'lucide-react';
import { mazhaProgramme, mazhaRegistrationUrl } from '../data/programmes';

// "Current Programme" section — Mazha (മഴ).
//
// Design intent: keep the site's existing blue/indigo/purple theme and card
// language, and layer in *subtle* rain-inspired touches (soft cloud blur
// shapes, a water-drop icon, light glassmorphism info chips) rather than a
// full re-theme. Update `src/data/programmes.ts` -> `mazhaProgramme` to fill
// in the real title, description, date, venue, banner image and
// registration link once they're finalised.
export default function Mazha() {
  const programme = mazhaProgramme;

  return (
    <section id="mazha" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl ring-1 ring-white/10">
          {/* Soft "cloud" blur shapes — subtle, static, no heavy animation */} {/*
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-sky-300/10 rounded-full blur-2xl pointer-events-none" />

          {/* Faint water-drop accents */} {/*
          <Droplets className="absolute top-6 left-6 text-white/15 pointer-events-none" size={40} />
          <Droplets className="absolute bottom-8 right-10 text-white/10 pointer-events-none" size={56} />

          <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs sm:text-sm font-semibold uppercase tracking-wide mb-6">
                <CloudRain size={16} />
                Current Programme
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold mb-3">{programme.name}</h2>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/90 leading-relaxed mb-8">
                {programme.description}
              </p>
            </div>

            {/* Banner / hero image, softly framed like a raindrop-cast window */} {/*
            <div className="mb-8 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-white/5 backdrop-blur-sm max-w-3xl mx-auto">
              <div className="aspect-video">
                <img
                  src={programme.coverImage}
                  alt={programme.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                <Calendar size={20} className="shrink-0" />
                <span className="text-sm sm:text-base">{programme.date}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                <MapPin size={20} className="shrink-0" />
                <span className="text-sm sm:text-base">{programme.venue}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={mazhaRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-700 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ClipboardList size={18} />
                Registration Details Coming Soon
              </a>

              <Link
                to={`/programmes/${programme.slug}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                View Full Details
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
*/}