import { previousProgrammes } from '../data/programmes';
import GalleryGrid from './GalleryGrid';

// Flatten every photo from every past programme into one teaser gallery.
// Full-resolution, single-programme galleries live on each programme's own
// detail page (/programmes/:slug).
const galleryPhotos = previousProgrammes.flatMap((programme) =>
  programme.photos.map((src) => ({ src, alt: programme.name }))
);

export default function PhotoGallery() {
  return (
    <section id="photo-gallery" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Snapshots of laughter, learning and adventure from our previous programmes.
          </p>
        </div>

        <GalleryGrid photos={galleryPhotos} />
      </div>
    </section>
  );
}
