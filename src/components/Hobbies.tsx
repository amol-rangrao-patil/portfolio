import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { SectionHeader } from "./SectionHeader";

export function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Interests &" 
          highlight="Hobbies" 
          subtitle="What I do when I'm not coding or analyzing data."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Playing Hockey", icon: "🏑", color: "from-blue-500/20" },
            { name: "Listening Podcasts", icon: "🎙️", color: "from-purple-500/20" },
            { name: "Read Tech Books", icon: "📚", color: "from-emerald-500/20" },
            { name: "Exploring AI", icon: "🤖", color: "from-orange-500/20" },
          ].map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className={cn(
                "p-6 sm:p-10 glass-morphism flex flex-col items-center gap-4 sm:gap-8 text-center bg-gradient-to-br to-transparent shadow-xl border border-white/10 hover:border-primary/30 transition-all duration-500 rounded-[2rem] sm:rounded-[3rem]",
                hobby.color
              )}
            >
              <span className="text-4xl sm:text-6xl group-hover:scale-125 transition-transform duration-500">{hobby.icon}</span>
              <span className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/80">{hobby.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
