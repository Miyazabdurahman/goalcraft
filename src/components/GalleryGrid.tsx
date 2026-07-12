import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';

export interface GalleryPhoto {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  photos: GalleryPhoto[];
  emptyMessage?: string;
}

// Responsive photo grid with a full-screen lightbox (prev/next + close).
// Reused by the homepage "Photo Gallery" teaser (all programmes combined)
// and by each individual programme detail page (that programme's photos only).
export default function GalleryGrid({ photos, emptyMessage }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % photos.length);
  };

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-white/60 py-12 text-center">
        <ImageOff className="text-gray-400" size={28} />
        <p className="text-sm sm:text-base text-gray-500 max-w-sm px-4">
          {emptyMessage ?? 'Photos will be added here soon.'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            onClick={() => setActiveIndex(index)}
            className="group aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/90 hover:text-white p-2"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 rounded-full p-2 sm:p-3"
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          />

          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 rounded-full p-2 sm:p-3"
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
