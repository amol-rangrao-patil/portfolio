import { motion } from "motion/react";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
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
              period: "2026 - Present",
              title: "B.Tech in Computer Science & Engineering (Data Science)",
              school: "D. Y. Patil College of Engineering and Technology",
              location: "Kolhapur, India",
              label: "Currently pursuing",
              icon: GraduationCap,
              featured: true
            },
            {
              period: "2023 - 2026",
              title: "Diploma in Computer Science & Engineering",
              school: "DKTE Society's Yashwantrao Chavan Polytechnic",
              location: "Ichalkaranji, India",
              icon: GraduationCap,
              featured: false
            },
            {
              period: "SSC",
              title: "Maharashtra State Board",
              school: "D. C. Narke Vidyaniketan (Public School) & Jr. College",
              location: "Kuditre, Kolhapur, India",
              score: "",
              icon: GraduationCap,
              featured: false
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
              whileHover={{ y: -8 }}
              className={`p-6 sm:p-8 glass-morphism relative group overflow-hidden rounded-3xl border transition-all duration-500 ${
                edu.featured
                  ? "md:col-span-2 border-primary/40 bg-primary/[0.08] shadow-[0_24px_70px_-30px_hsl(var(--primary)/0.65)]"
                  : "border-white/10 hover:border-primary/30"
              }`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25">
                  <edu.icon size={24} strokeWidth={1.8} />
                </div>
                {edu.featured && (
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Current
                  </span>
                )}
              </div>
              <div className="relative mt-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  <CalendarDays size={14} />
                  {edu.period}
                </div>
                <h3 className="mb-3 text-xl font-display font-bold leading-tight text-foreground sm:text-2xl">{edu.title}</h3>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{edu.school}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary/80 sm:text-sm">
                    <MapPin size={15} />
                    {edu.location}
                  </div>
                  {edu.label && <span className="text-xs text-muted-foreground">{edu.label}</span>}
                  {edu.score && (
                    <div className="rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                      {edu.score}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
