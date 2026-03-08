import { motion } from "motion/react";
import { EXPERIENCES } from "../constants";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Professional" 
          highlight="Journey" 
          subtitle="A timeline of my professional experience and contributions in the field of data and AI."
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="space-y-12 md:space-y-24"
          >
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
                  }
                }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

                {/* Content */}
                <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className={`p-6 sm:p-10 rounded-[2rem] glass-morphism border border-white/10 hover:border-primary/30 transition-all duration-500 group ${
                      i % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div className={`flex items-center gap-4 mb-6 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className={i % 2 === 0 ? "text-left" : "md:text-right text-left"}>
                        <h3 className="text-xl sm:text-2xl font-display font-bold mb-1 tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-bold text-sm uppercase tracking-widest">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 ${
                      i % 2 === 0 ? "md:justify-start" : "md:justify-end justify-start"
                    }`}>
                      <Calendar className="w-4 h-4 text-primary/50" />
                      {exp.period}
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, j) => (
                        <li key={j} className={`flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed ${
                          i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse flex-row"
                        }`}>
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
