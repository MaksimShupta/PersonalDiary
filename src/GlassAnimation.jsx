import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import glassSrc from './assets/glass.svg';

export default function GlassFiller() {
  const [fillLevel, setFillLevel] = useState(5); // Start immediately at 5% (earlier start)

  useEffect(() => {
    const interval = setInterval(() => {
      setFillLevel((prev) => {
        if (prev >= 96) return 96; // Stops 2% earlier for better bottom margin
        return prev + 1;
      });
    }, 20); // Smooth & fast animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-40 h-80 overflow-hidden rounded-[8%]">
        {/* Liquid Background Inside Glass */}
        <svg className="absolute w-full h-full">
          <defs>
            <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6f7bf7" stopOpacity="1" />
              <stop offset="100%" stopColor="#9bf8f4" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Liquid fill inside glass */}
          <motion.rect
            x="0"
            y={`${98 - fillLevel}%`} // Adjusted for better bottom margin
            width="100%"
            height={`${fillLevel}%`}
            fill="url(#liquid-gradient)"
            animate={{
              height: `${fillLevel}%`,
              y: `${98 - fillLevel}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </svg>

        {/* Glass Outline on Top */}
        <img src={glassSrc} alt="Glass" className="absolute w-full h-full pointer-events-none" />
      </div>
    </div>
  );
}