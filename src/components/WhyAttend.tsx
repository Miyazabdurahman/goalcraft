import { CloudRain, Sailboat, Rainbow, Heart } from "lucide-react";

export default function WhyAttend() {
  const reasons = [
    {
      icon: CloudRain,
      title: "Feel the Magic of Rain",
      description:
        "Rain has a way of slowing the world down and waking our senses. Children experience the joy of dancing in the drizzle, listening to raindrops, and discovering the beauty hidden in every rainy day — becoming part of nature, not just watching it.",
    },
    {
      icon: Sailboat,
      title: "Relive the Joy of Childhood",
      description:
        "Paper boats, muddy footprints, puddle jumping, laughter echoing through the rain — RAIN recreates the simple pleasures many parents grew up with, giving today's children an adventurous, authentic, and wonderfully unplugged childhood.",
    },
    {
      icon: Rainbow,
      title: "Grow Through Play & Discovery",
      description:
        "The greatest learning often happens outside the classroom. Through STEM experiments, storytelling, team games, gardening, and hands-on challenges, children build confidence, creativity, and curiosity — all while having the time of their lives.",
    },
    {
      icon: Heart,
      title: "Create Memories That Last Forever",
      description:
        "The camp lasts only a few days, but the friendships, laughter, and discoveries stay for years. Every raindrop becomes a story, every smile a memory — because the best childhood memories are rarely bought, they're lived.",
    },
  ];

  return (
    <section id="why" className="relative overflow-hidden py-16 sm:py-20">
     
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
      
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Attend
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This monsoon, don't just let your child watch the rain from the window —
            let them step outside and discover the joy waiting in every drop.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-5 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-800 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}