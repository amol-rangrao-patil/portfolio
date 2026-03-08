import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="My" 
          highlight="Education" 
          subtitle="Academic foundation and achievements in Computer Science and Engineering."
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {[
            {
              period: "2023 - 2026",
              title: "Diploma in Computer Science & Engineering",
              school: "DKTE Society's Yashwantrao Chavan Polytechnic",
              location: "Ichalkaranji, India",
              icon: "🎓"
            },
            {
              period: "SSC",
              title: "Maharashtra State Board",
              school: "D. C. Narke Vidyaniketan (Public School) & Jr. College",
              location: "Kuditre, Kolhapur, India",
              score: "",
              icon: "🏫"
            }
          ].map((edu, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: i === 0 ? -50 : 50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
                }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-6 sm:p-10 glass-morphism relative group overflow-hidden rounded-[2rem] border border-white/10 hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute -right-4 -top-4 text-6xl sm:text-8xl opacity-10 group-hover:scale-110 transition-transform duration-700">
                {edu.icon}
              </div>
              <div className="text-primary font-bold mb-3 sm:mb-4 tracking-widest uppercase text-xs sm:text-sm">{edu.period}</div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4 text-foreground">{edu.title}</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">{edu.school}</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-xs sm:text-sm font-bold text-primary/80 uppercase tracking-wider">{edu.location}</div>
                {edu.score && (
                  <div className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                    {edu.score}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
