import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2026-08-09T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
        setHasStarted(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setHasStarted(true);
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative overflow-hidden py-14 sm:py-12 ">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
     {/* <div className="absolute -top-16 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-16 right-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div> */}

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

       

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">
          {hasStarted ? "The Adventure Has Begun!" : "Event Starts In"}
        </h2>

        {hasStarted ? (
          <div className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-800 text-white font-semibold text-lg shadow-xl">
            🌧️ See you there!
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-800 text-white rounded-2xl py-5 sm:py-8 shadow-lg shadow-indigo-900/10 border border-white/10 overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div
                  className={`text-3xl sm:text-5xl font-extrabold tabular-nums ${
                    block.label === 'Seconds' ? 'animate-pulse' : ''
                  }`}
                >
                  {block.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide opacity-80 mt-1">
                  {block.label}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}