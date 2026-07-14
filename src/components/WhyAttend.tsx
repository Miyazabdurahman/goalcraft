import { Leaf, Gamepad2, Lightbulb, Heart } from "lucide-react";

export default function WhyAttend() {
  const reasons = [
    {
      icon: Leaf,
      title: "Soil Connection & Nature Learning",
      description:
        "Reconnect with the earth through farming, gardening, mud activities, and hands-on experiences that teach respect for nature and sustainable living.",
    },
    {
      icon: Gamepad2,
      title: "Kerala’s 90s Childhood Experience",
      description:
        "Let children discover the joy of traditional games, outdoor fun, and screen-free adventures that once shaped unforgettable childhood memories.",
    },
    {
      icon: Lightbulb,
      title: "Creativity & Life Skills",
      description:
        "Build confidence, teamwork, communication, leadership, and problem-solving through engaging tasks, group activities, and practical challenges.",
    },
    {
      icon: Heart,
      title: "Mindful Growth & Happiness",
      description:
        "Encourage emotional well-being, discipline, gratitude, and positive habits through meaningful sessions that nurture both heart and mind.",
    },
  ];

  return (
    <section id="why" className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-b from-white via-indigo-50/30 to-white">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Attend
          </h2>
          <p className="text-xl text-gray-600">
            A journey of learning, joy, and<br />personal growth
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