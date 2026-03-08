import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function NightSky() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 5,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-100 transition-opacity duration-1000">
      {/* Moon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-[10%] right-[15%] w-24 h-24 dark:opacity-100 opacity-0 transition-opacity duration-1000"
      >
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-300 shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
          {/* Moon Craters */}
          <div className="absolute top-[20%] left-[20%] w-4 h-4 rounded-full bg-slate-400/20 blur-[1px]" />
          <div className="absolute top-[50%] left-[60%] w-6 h-6 rounded-full bg-slate-400/20 blur-[1px]" />
          <div className="absolute top-[70%] left-[30%] w-3 h-3 rounded-full bg-slate-400/20 blur-[1px]" />
          
          {/* Moon Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
        </div>

        {/* Outer Glow */}
        <div className="absolute -inset-4 rounded-full bg-white/5 blur-xl" />
      </motion.div>

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.2 }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <ShootingStar />
      <ShootingStar delay={5} />
      <ShootingStar delay={12} />

      {/* Mist/Clouds */}
      <motion.div
        animate={{ 
          x: ["-100%", "100%"],
          opacity: [0, 0.1, 0]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-[200%] h-[40%] bg-gradient-to-t from-blue-900/20 to-transparent blur-3xl"
      />
    </div>
  );
}

function ShootingStar({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ x: "-10%", y: "20%", opacity: 0, scale: 0 }}
      animate={{ 
        x: ["0%", "120%"],
        y: ["20%", "80%"],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 15 + Math.random() * 10,
        delay: delay,
        ease: "easeOut"
      }}
      className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[25deg] blur-[1px]"
    />
  );
}
