import { useState, useEffect } from "react";

// Import Icons from react icons
import { IoIosFlash } from "react-icons/io";
import { FaGift } from "react-icons/fa6";
import { IoIosAlarm } from "react-icons/io";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
            animation: "move 10s linear infinite",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold relative z-10">
        <div className="flex items-center gap-2 animate-pulse">
          <span className="text-2xl">
            <IoIosFlash size="30px" color="yellow" />
          </span>
          <span>Limited Time Offer</span>
        </div>
        <div className="hidden sm:block">|</div>
        <div className="flex items-center gap-2">
          <span>
            <FaGift size="24px" color="wine" />
          </span>
          <span>Get 20% OFF on your first project</span>
        </div>
        <div className="hidden sm:block">|</div>
        <div className="flex items-center gap-3">
          <span>
            <IoIosAlarm size="30px" />
          </span>
          <span>Ends in:</span>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-lg">
            <span className="font-mono text-lg">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="font-mono text-lg">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span>:</span>
            <span className="font-mono text-lg">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
