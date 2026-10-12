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
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-1000">
      {theme === "tech" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden bg-[#effcf9]"
        >
          {/* Data grid */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(13, 148, 136, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.12) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.2),transparent_55%)]" />
          <motion.div
            animate={{ y: ["-10%", "110%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-28 bg-gradient-to-b from-transparent via-teal-400/15 to-transparent blur-xl"
          />
          {[0, 1, 2, 3, 4, 5].map((node) => (
            <motion.div
              key={`data-node-${node}`}
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.25, 1] }}
              transition={{ duration: 3 + node * 0.4, repeat: Infinity, delay: node * 0.7 }}
              className="absolute h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_18px_rgba(245,158,11,0.55)]"
              style={{
                left: `${14 + node * 15}%`,
                top: `${20 + (node % 3) * 24}%`,
              }}
            />
          ))}
          {/* Data visualization accents */}
          <div className="absolute bottom-[12%] left-[7%] hidden h-32 w-56 items-end gap-2 rounded-2xl border border-teal-700/15 bg-white/70 p-5 opacity-80 shadow-lg shadow-teal-900/5 sm:flex">
            {[38, 62, 48, 76, 58, 88, 70].map((height, index) => (
              <motion.div
                key={`bar-${index}`}
                initial={{ scaleY: 0.35 }}
                animate={{ scaleY: [0.55, 1, 0.7, 0.9] }}
                transition={{ duration: 5 + index * 0.35, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                className="w-full origin-bottom rounded-t-sm bg-gradient-to-t from-teal-600/45 to-cyan-400/80"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="absolute right-[8%] top-[24%] hidden w-48 space-y-3 rounded-2xl border border-cyan-700/10 bg-white/70 p-4 opacity-75 shadow-lg shadow-teal-900/5 md:block">
            <div className="h-1.5 w-16 rounded-full bg-amber-500/90" />
            <div className="h-1.5 w-full rounded-full bg-slate-900/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-teal-700/25" />
            <motion.div
              animate={{ x: [0, 112, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-8 rounded-full bg-amber-500 shadow-[0_0_16px_rgba(245,158,11,0.55)]"
            />
          </div>
          <div className="absolute right-[7%] bottom-[14%] hidden w-64 rounded-2xl border border-teal-700/15 bg-white/75 p-4 opacity-75 shadow-xl shadow-teal-900/10 lg:block">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              </div>
              <div className="h-1.5 w-10 rounded-full bg-slate-900/10" />
            </div>
            <div className="mb-4 grid grid-cols-3 gap-2">
              {["w-3/4", "w-1/2", "w-2/3"].map((width, index) => (
                <div key={`kpi-${index}`} className="rounded-lg bg-teal-50 p-2">
                  <div className={`mb-2 h-1.5 ${width} rounded-full bg-teal-700/25`} />
                  <div className="h-2 w-full rounded-full bg-slate-900/10" />
                </div>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1.5 border-b border-teal-700/10 px-1">
              {[28, 42, 36, 64, 52, 78, 68, 90, 74].map((height, index) => (
                <motion.div
                  key={`trend-${index}`}
                  animate={{ height: [`${height - 12}%`, `${height}%`, `${height - 6}%`] }}
                  transition={{ duration: 6, repeat: Infinity, delay: index * 0.15, ease: "easeInOut" }}
                  className="w-full rounded-t bg-gradient-to-t from-cyan-500/30 to-teal-500/70"
                />
              ))}
            </div>
          </div>
          <motion.div
            animate={{ scaleX: [0.85, 1, 0.9] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[28%] top-[63%] hidden h-px w-2/5 origin-left rotate-[-12deg] bg-gradient-to-r from-transparent via-amber-500/70 to-transparent md:block"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#effcf9] via-transparent to-transparent" />
        </motion.div>
      ) : theme === "dark" ? (
        // NIGHT MODE
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Night Sky Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#073b3a] via-[#071716] to-[#020807]" />

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
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-600/20 rounded-full blur-[120px]"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]"
          />

          {/* Atmospheric glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020807] via-transparent to-transparent opacity-80" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8f7f3] via-[#f8fafc] to-[#fff8eb]" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(13, 148, 136, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.045) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

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
                background: "rgba(255, 255, 255, 0.2)",
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
                background: "rgba(255, 255, 255, 0.12)",
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
              className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-200/20 to-transparent"
          />

          {/* Horizon glow */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-teal-200/20 via-transparent to-transparent" />
        </motion.div>
      )}
    </div>
  );
}
