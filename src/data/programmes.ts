// Central data file for the "Current Programme" (Mazha) section, "Previous
// Programmes", the Photo Gallery, the Video Section and Testimonials.
//
// Every programme (current or past) is a single object shaped like
// `Programme` below. Photos, videos and testimonials live INSIDE their own
// programme — nothing is shared or mixed between programmes.
//
// To add a new past programme: push a new object into `previousProgrammes`.
// The "Previous Programmes" cards, the individual programme detail page
// (/programmes/:slug), the homepage photo/video teaser sections, and the
// programme's own gallery will all pick it up automatically.

export interface ProgrammeVideo {
  // 'youtube'  -> url is a YouTube video ID or full embed/watch URL
  // 'link'     -> url is any external link (Instagram reel, Drive, etc.)
  // 'local'    -> url is a path to a video file placed in /public
  type: 'youtube' | 'link' | 'local';
  url: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  feedback: string;
}

export interface Programme {
  id: string;
  // Used in the URL: /programmes/:slug — keep lowercase, hyphenated, unique.
  slug: string;
  name: string;
  date: string;
  venue: string;
  // Short description — used on cards / the highlighted current-programme card.
  description: string;
  // Longer description — used on the full programme detail page. Falls back
  // to `description` if not provided.
  fullDescription?: string;
  coverImage: string;
  photos: string[];
  videos: ProgrammeVideo[];
  testimonials: Testimonial[];
}

/**
 * CURRENT PROGRAMME — MAZHA (മഴ)
 * ------------------------------------------------------------------
 * This is the programme currently being promoted on the site. Update the
 * fields below (and swap `coverImage` for the real Mazha poster/banner once
 * it's ready) — the "Current Programme" section and the /programmes/mazha
 * page both read from this single object.
 */
export const mazhaProgramme: Programme = {
  id: 'mazha',
  slug: 'mazha',
  name: 'Mazha (മഴ)',
  date: 'Date to be announced',
  venue: 'Venue to be announced',
  description:
    'A new Knowify programme is coming soon. Add a short description of Mazha here — what it is about, who it is for, and what makes it special.',
  fullDescription:
    'Mazha (മഴ, "Rain") is Knowify\'s newest programme. Replace this paragraph with the full write-up: the idea behind the programme, who it is for, what a typical day looks like, and why families should join.',
  // TODO: replace with the real Mazha poster / banner image once uploaded to /public
  coverImage: '/logo1.png',
  photos: [],
  videos: [],
  testimonials: [],
};

// TODO: replace with the real Mazha registration link once available.
export const mazhaRegistrationUrl = 'https://forms.gle/XcMaQU3aqxwMuBCt5';

/**
 * PREVIOUS PROGRAMMES
 * ------------------------------------------------------------------
 * The images below reuse existing photos already present in /public (from
 * the partners/gallery slider) purely so the sections are not empty.
 * Replace `coverImage`, `photos`, `videos` and `testimonials` with the real
 * content for each past programme whenever it's ready.
 */
export const previousProgrammes: Programme[] = [
  {
    id: 'programme-1',
    slug: 'knowify-summer-camp-2025',
    name: 'Knowify Summer Camp 2025',
    date: 'May 2025',
    venue: 'Breeze Garden, Kooriyad, Malappuram',
    description:
      'Our first summer camp brought together kids for a week of traditional games, farming activities, storytelling, and screen-free adventures — recreating the magic of a 90s Kerala childhood.',
    fullDescription:
      'Our first summer camp brought together kids for a week of traditional games, farming activities, storytelling, and screen-free adventures — recreating the magic of a 90s Kerala childhood. Campers rotated through soil and farming sessions, life-skill workshops, group games, and evening storytelling circles, building confidence, teamwork and creativity along the way.',
    coverImage: ' /logo1.png',
    photos: [
      '/partners/pic1.jpg',
      '/partners/pic2.jpg',
      '/partners/pic3.jpg',
      '/partners/pic4.jpg',
      '/partners/pic5.jpg',
      '/partners/pic6.jpg',
      '/partners/pic7.jpg',
      '/partners/1 (1).jpg',
      '/partners/1 (2).jpg',
      '/partners/1 (3).jpg',
      '/partners/1 (4).jpg',
      '/partners/1 (5).jpg',
      '/partners/1 (6).jpg',
      '/partners/1 (7).jpg',
      '/partners/1 (8).jpg',
      '/partners/1 (9).jpg',
      '/partners/1 (10).jpg',
      '/partners/1 (11).jpg',
      '/partners/1 (12).jpg',
      '/partners/1 (13).jpg',
      '/partners/1 (14).jpg',
      '/partners/1 (15).jpg',
      '/partners/1 (16).jpg',
      '/partners/1 (17).jpg',
      '/partners/1 (18).jpg',
      '/partners/1 (19).jpg',
      '/partners/1 (20).jpg',
      '/partners/1 (21).jpg',
      '/partners/1 (22).jpg',
      '/partners/1 (23).jpg',
      '/partners/1 (24).jpg',
      '/partners/1 (25).jpg',
      '/partners/1 (26).jpg',
      '/partners/1 (27).jpg',
      '/partners/1 (28).jpg',
      '/partners/1 (29).jpg',
      '/partners/1 (30).jpg',
      '/partners/1 (31).jpg',
      '/partners/1 (32).jpg',
    ],
    videos: [
      {
        type: 'local',
        // TODO: replace with the real video file path
        url: '/videos/mannum_manassum.mp4',
        title: 'Knowify Summer Camp 2026 — Highlights',
      },
      {
        type: 'local',
        // TODO: replace with the real video file path
        url: '/videos/knowify11.mp4',
        title: 'Knowify Summer Camp 2026 — Highlights',
      },
      {
        type: 'local',
        // TODO: replace with the real video file path
        url: '/videos/promo.mp4',
        title: 'Promo Video',
      },
      {
        type: 'local',
        // TODO: replace with the real video file path
        url: '/videos/after1.mp4',
        title: 'From Camp to Nature',
      },
      {
        type: 'local',
        // TODO: replace with the real video file path
        url: '/videos/after2.mp4',
        title: 'Summer camp Impact',
      }
    ],
    testimonials: [
      {
        id: 'testimonial-1',
        name: 'Parent of a Camper',
        feedback:
          'My child came back happier, more confident, and full of stories. Exactly the kind of screen-free experience we were looking for. ',
      },
      {
        id: 'testimonial-2',
        name: 'Parent of a Camper',
        feedback:
          'Wonderfully organised, caring mentors, and activities that actually brought back the joy of a real childhood.',
      },
    ],
  },
  
];

// Every programme on the site (current + previous), used for slug lookups.
export const allProgrammes: Programme[] = [mazhaProgramme, ...previousProgrammes];

export function getProgrammeBySlug(slug: string | undefined): Programme | undefined {
  if (!slug) return undefined;
  return allProgrammes.find((programme) => programme.slug === slug);
}
