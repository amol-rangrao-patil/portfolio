import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTheme } from "../lib/ThemeContext";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Cloud {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function DayNightBackground() {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);
  const [clouds, setClouds] = useState<Cloud[]>([]);

  useEffect(() => {
    // Generate stars for night mode
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 60,
          size: Math.random() * 2.5 + 0.5,
          duration: Math.random() * 4 + 2,
          delay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    // Generate clouds for day mode
    const generateClouds = () => {
      const newClouds: Cloud[] = [];
      for (let i = 0; i < 8; i++) {
        newClouds.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 40 + 10,
          size: Math.random() * 150 + 100,
          duration: Math.random() * 40 + 30,
          delay: Math.random() * 10,
        });
      }
      setClouds(newClouds);
    };

    generateStars();
    generateClouds();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {theme === "dark" ? (
        // NIGHT MODE
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Night Sky Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950" />

          {/* Stars */}
          {stars.map((star) => (
            <motion.div
              key={`star-${star.id}`}
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          ))}

          {/* Moon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-[15%] right-[12%] w-32 h-32"
          >
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-50 to-slate-300 shadow-[0_0_80px_rgba(255,255,255,0.3)]">
              {/* Moon Craters */}
              <div className="absolute top-[25%] left-[25%] w-5 h-5 rounded-full bg-slate-400/30 blur-[2px]" />
              <div className="absolute top-[55%] left-[65%] w-8 h-8 rounded-full bg-slate-400/30 blur-[2px]" />
              <div className="absolute top-[75%] left-[35%] w-4 h-4 rounded-full bg-slate-400/30 blur-[2px]" />
              <div className="absolute -inset-6 rounded-full bg-white/8 blur-2xl" />
            </div>
          </motion.div>

          {/* Shooting Stars */}
          {[0, 5, 12].map((delay) => (
            <motion.div
              key={`shooting-${delay}`}
              initial={{ x: "-10%", y: "20%", opacity: 0, scale: 0 }}
              animate={{
                x: ["0%", "130%"],
                y: ["20%", "70%"],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 18 + Math.random() * 12,
                delay: delay,
                ease: "easeOut",
              }}
              className="absolute w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent rotate-[25deg] blur-[1px]"
            />
          ))}

          {/* Nebula effects */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]"
          />

          {/* Atmospheric glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
        </motion.div>
      ) : (
        // DAY MODE
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Day Sky Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />

          {/* Sun */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-[12%] right-[15%] w-40 h-40"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 60px rgba(251, 191, 36, 0.4)",
                  "0 0 80px rgba(251, 191, 36, 0.6)",
                  "0 0 60px rgba(251, 191, 36, 0.4)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-400"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-yellow-100/50 to-white/30" />
            </motion.div>
          </motion.div>

          {/* Clouds - Animated */}
          {clouds.map((cloud) => (
            <motion.div
              key={`cloud-${cloud.id}`}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{
                x: ["0%", "120%"],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: cloud.duration,
                repeat: Infinity,
                delay: cloud.delay,
                ease: "linear",
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                left: `${cloud.x}%`,
                top: `${cloud.y}%`,
                width: `${cloud.size}px`,
                height: `${cloud.size / 2.5}px`,
                background: "rgba(255, 255, 255, 0.6)",
              }}
            />
          ))}

          {/* Additional light clouds */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`light-cloud-${i}`}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{
                x: ["-100%", "120%"],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 50 + i * 10,
                repeat: Infinity,
                delay: i * 5,
                ease: "linear",
              }}
              className="absolute rounded-full blur-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${30 + Math.random() * 30}%`,
                width: `${120 + Math.random() * 80}px`,
                height: `${40 + Math.random() * 30}px`,
                background: "rgba(255, 255, 255, 0.4)",
              }}
            />
          ))}

          {/* Light rays */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-yellow-200/30 to-transparent"
          />

          {/* Horizon glow */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sky-200/50 via-transparent to-transparent" />
        </motion.div>
      )}
    </div>
  );
}
