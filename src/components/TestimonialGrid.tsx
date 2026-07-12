import { Quote, MessageSquareOff } from 'lucide-react';
import { Testimonial } from '../data/programmes';

interface TestimonialGridProps {
  testimonials: Testimonial[];
  emptyMessage?: string;
}

// Testimonial cards scoped to a single programme. Each programme page shows
// only its own testimonials — nothing global or shared across programmes.
export default function TestimonialGrid({ testimonials, emptyMessage }: TestimonialGridProps) {
  if (testimonials.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-white/60 py-12 text-center">
        <MessageSquareOff className="text-gray-400" size={28} />
        <p className="text-sm sm:text-base text-gray-500 max-w-sm px-4">
          {emptyMessage ?? 'Testimonials will be added here after the programme.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <Quote className="text-emerald-500 mb-4" size={28} />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            {testimonial.feedback}
          </p>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
}
