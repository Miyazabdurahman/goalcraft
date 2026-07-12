import { previousProgrammes } from '../data/programmes';
import VideoGrid from './VideoGrid';

// Flatten every video from every past programme into one teaser grid.
// Full, single-programme video galleries live on each programme's own
// detail page (/programmes/:slug).
const videos = previousProgrammes.flatMap((programme) => programme.videos);
const subtitles = previousProgrammes.flatMap((programme) =>
  programme.videos.map(() => programme.name)
);

export default function VideoSection() {
  return (
    <section id="videos" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Videos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Relive the highlights from our previous programmes.
          </p>
        </div>

        <VideoGrid videos={videos} subtitles={subtitles} />
      </div>
    </section>
  );
}
