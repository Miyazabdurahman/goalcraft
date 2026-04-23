import { useEffect, useState } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-05-03T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
  <section id="countdown" className="py-12 sm:py-8">
    <div className="max-w-5xl mx-auto px-4 text-center">
      
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
        Event Starts In
      </h2>

      <div className="grid grid-cols-4 gap-3 sm:gap-6 rounded-lg">
        {timeBlocks.map((block, index) => (
          <div
            key={index}
            className=" bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-lg py-4 sm:py-6"
          >
            <div className="text-2xl sm:text-4xl font-bold">
              {block.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm opacity-90">
              {block.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);
}
