export default function Speakers() {
  const speakers = [
    {
      name: 'Abdul Rahman Ansari',
      image: '/abdurahman.png',
    },
       ];

  return (
    <section id="speakers" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Speakers
          </h2>
          <p className="text-xl text-gray-600">
           Guidance from Scholars and Mentors on Life, Values & Modern Challenges
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-3 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {speaker.name}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}