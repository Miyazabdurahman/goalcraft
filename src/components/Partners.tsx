export default function Partners() {
  const partners = [
    { name: 'Education First', logo: '/partners/1.jpg' },
    { name: 'Education First', logo: '/partners/2.jpg' },
    { name: 'Education First', logo: '/partners/3.jpg' },
    { name: 'Education First', logo: '/partners/pic1.jpg' },
    { name: 'Youth Development Institute', logo: '/partners/pic2.jpg' },
    { name: 'Leadership Academy', logo: '/partners/pic3.jpg' },
    { name: 'Values Foundation', logo: '/partners/pic4.jpg' },
    { name: 'Student Success Network', logo: '/partners/pic5.jpg' },
    { name: 'Character Education Center', logo: '/partners/pic6.jpg' },
    { name: 'Character Education Center', logo: '/partners/pic7.jpg' },
  ];

  return (
    <section id="partners" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto">
            Proudly fulfilled our mission of empowering students with strong moral values, leadership skills, and character development in the past couple of years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl hover:scale-[1.02] transition duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}