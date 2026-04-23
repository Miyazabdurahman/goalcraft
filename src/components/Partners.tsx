import { useEffect, useRef, useState } from "react";

export default function Partners() {
  const partners = [
    { name: "1", logo: "/partners/pic1.jpg" },
    { name: "2", logo: "/partners/pic2.jpg" },
    { name: "3", logo: "/partners/pic3.jpg" },
    { name: "4", logo: "/partners/pic4.jpg" },
    { name: "5", logo: "/partners/pic5.jpg" },
    { name: "6", logo: "/partners/pic6.jpg" },
    { name: "7", logo: "/partners/pic7.jpg" },
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // 🔁 Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % partners.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? partners.length - 1 : prev - 1
    );
  };

  return (
    <section id="partners" className="py-20">

      {/* TEXT */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-5xl text-gray-900 font-bold mb-4">
          Gallery
        </h2>
     <p className="text-l sm:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed ">
          Step into a world of laughter, muddy feet, open skies, and endless imagination. Our gallery captures the timeless charm of Kerala’s 90s childhood — where joy was found in nature, friendship, and simple games.

From dusty playgrounds to tree-climbing adventures, every moment reflects innocence, creativity, and togetherness.

Relive an era where every game built friendships, every fall taught courage, and every sunset left a story behind.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative flex justify-center">

        <div className="w-[90vw] max-w-[500px] overflow-hidden rounded-2xl">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="min-w-full flex justify-center">
                <img
                  src={partner.logo}
                  alt=""
                  className="w-full h-[500px] sm:h-[600px] md:h-[700px] object-contain bg-black-1 rounded-2xl"
                />
              </div>
            ))}
          </div>

        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full hover:scale-105 transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full hover:scale-105 transition"
        >
          →
        </button>

      </div>

      {/* DOTS 
      <div className="flex justify-center gap-2 mt-6">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              current === index
                ? "bg-black scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
*/}
    </section>
  );
}