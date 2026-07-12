import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, CloudRain } from 'lucide-react';
import { getProgrammeBySlug, mazhaProgramme } from '../data/programmes';
import GalleryGrid from '../components/GalleryGrid';
import VideoGrid from '../components/VideoGrid';
import TestimonialGrid from '../components/TestimonialGrid';

// Full detail page for a single programme, reached from:
//  - the "Current Programme" (Mazha) section -> /programmes/mazha
//  - a "Previous Programmes" card -> /programmes/:slug
//
// Shows ONLY that programme's own cover image, description, photos, videos
// and testimonials — nothing from any other programme.
export default function ProgrammeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const programme = getProgrammeBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  if (!programme) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-4 pt-24">
        <div className="text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Programme not found
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn't find a programme at this address. It may have been renamed or removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const isMazha = programme.id === mazhaProgramme.id;

  return (
    <article className="pt-24 pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Cover image / banner */}
        <div
          className={`rounded-3xl overflow-hidden shadow-xl mb-8 relative ${
            isMazha ? 'ring-1 ring-blue-200' : ''
          }`}
        >
          <div
  className={`rounded-3xl overflow-hidden shadow-xl mb-8 relative ${
    isMazha ? 'ring-1 ring-blue-200' : ''
  }`}
>
  <div className="h-64 sm:h-80 flex items-center justify-center bg-gray-50 p-6">
    <img
      src={programme.coverImage}
      alt={programme.name}
      className="max-h-full max-w-full object-contain"
    />
  </div>

  {isMazha && (
    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
  )}
</div>
          {isMazha && (
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent pointer-events-none" />
          )}
        </div>

        {/* Title + highlighted badge for the current programme */}
        <div className="mb-8">
          {isMazha && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-semibold uppercase tracking-wide mb-4">
              <CloudRain size={16} />
              Current Programme
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            {programme.name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <Calendar size={18} className="text-emerald-700" />
              {programme.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-emerald-700" />
              {programme.venue}
            </span>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
            {programme.fullDescription ?? programme.description}
          </p>
        </div>

        {/* Photo Gallery — this programme's photos only */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
          <GalleryGrid
            photos={programme.photos.map((src) => ({ src, alt: programme.name }))}
            emptyMessage={
              isMazha
                ? 'Photos will be added here once the programme takes place.'
                : 'Photos for this programme will be added here soon.'
            }
          />
        </section>

        {/* Video Gallery — this programme's videos only */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Video Gallery</h2>
          <VideoGrid
            videos={programme.videos}
            emptyMessage={
              isMazha
                ? 'Videos will be added here once the programme takes place.'
                : 'Videos for this programme will be added here soon.'
            }
          />
        </section>

        {/* Testimonials — this programme's own testimonials only */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Testimonials</h2>
          <TestimonialGrid
            testimonials={programme.testimonials}
            emptyMessage={
              isMazha
                ? 'Testimonials will be added here after the programme.'
                : 'Testimonials for this programme will be added here soon.'
            }
          />
        </section>

        {/* Back button (bottom, for convenience after scrolling through the page) */}
        <div className="mt-14 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </article>
  );
}
