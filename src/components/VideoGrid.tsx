import { PlayCircle, VideoOff } from 'lucide-react';
import { ProgrammeVideo } from '../data/programmes';

interface VideoGridProps {
  videos: ProgrammeVideo[];
  subtitles?: string[]; // optional per-video subtitle (e.g. programme name), matched by index
  emptyMessage?: string;
}

function getYouTubeEmbedUrl(idOrUrl: string) {
  // Accepts either a raw video ID or a full YouTube URL.
  const idMatch = idOrUrl.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
  const id = idMatch ? idMatch[1] : idOrUrl;
  return `https://www.youtube.com/embed/${id}`;
}

// Responsive video grid with YouTube, local <video>, and external-link
// support. Reused by the homepage "Videos" teaser (all programmes combined)
// and by each individual programme detail page (that programme's videos only).
export default function VideoGrid({ videos, subtitles, emptyMessage }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-white/60 py-12 text-center">
        <VideoOff className="text-gray-400" size={28} />
        <p className="text-sm sm:text-base text-gray-500 max-w-sm px-4">
          {emptyMessage ?? 'Videos will be added here soon.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {videos.map((video, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          {video.type === 'youtube' ? (
            <div className="aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(video.url)}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : video.type === 'local' ? (
            <div className="aspect-video bg-black">
              <video src={video.url} controls className="w-full h-full object-contain" />
            </div>
          ) : (
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-video flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white"
            >
              <PlayCircle size={44} />
              <span className="text-sm font-medium">Watch Video</span>
            </a>
          )}

          <div className="p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{video.title}</h3>
            {subtitles?.[index] && (
              <p className="text-sm text-gray-500 mt-1">{subtitles[index]}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
