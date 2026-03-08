import { motion } from "motion/react";
import { SKILLS } from "../constants";
import * as Icons from "lucide-react";
import { cn } from "../lib/utils";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const categories = ["Programming Languages", "Database", "Data Visualization", "Version Control", "Generative AI", "Emerging Technologies"];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Technical" 
          highlight="Expertise" 
          subtitle="A comprehensive overview of my technical skills and the technologies I work with."
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
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" 
          role="list" 
          aria-labelledby="skills-title"
        >
          {categories.map((category, i) => (
            <motion.div
              key={category}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                }
              }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="p-6 sm:p-8 glass rounded-2xl sm:rounded-[2rem] border border-white/10 hover:border-primary transition-all duration-500 group relative overflow-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              role="listitem"
              tabIndex={0}
              aria-labelledby={`${category.toLowerCase().replace(/\s+/g, '-')}-title`}
            >
              {/* Glass Shine & Edge Highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h3 id={`${category.toLowerCase().replace(/\s+/g, '-')}-title`} className="text-lg sm:text-xl font-bold uppercase tracking-widest text-primary">
                    {category}
                  </h3>
                  <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true">
                    {category === "Programming Languages" && <Icons.Code2 className="w-5 h-5" />}
                    {category === "Database" && <Icons.Database className="w-5 h-5" />}
                    {category === "Data Visualization" && <Icons.BarChart3 className="w-5 h-5" />}
                    {category === "Version Control" && <Icons.GitBranch className="w-5 h-5" />}
                    {category === "Generative AI" && <Icons.Zap className="w-5 h-5" />}
                    {category === "Emerging Technologies" && <Icons.Brain className="w-5 h-5" />}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {SKILLS.filter((s) => s.category === category).map((skill, j) => {
                    const Icon = (Icons as any)[skill.icon] || Icons.Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl glass border border-white/5 text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                      >
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" aria-hidden="true" />
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01, y: -5 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-16 p-6 sm:p-8 glass rounded-2xl sm:rounded-[2rem] border border-white/10 hover:border-primary transition-all duration-500 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          role="region"
          aria-labelledby="soft-skills-title"
          tabIndex={0}
        >
          {/* Glass Shine & Edge Highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 id="soft-skills-title" className="text-center text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] mb-8 sm:mb-12">
              Soft Skills & Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { name: "Problem Solving  & Analytical Thinking", icon: Icons.Lightbulb },
                { name: "Communication & Presentation", icon: Icons.MessageSquare },
                { name: "Team Collaboration", icon: Icons.Users },
                { name: "Time Management &Adaptability", icon: Icons.Zap },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 sm:gap-4 text-center group focus-visible:outline-none"
                  role="listitem"
                  tabIndex={0}
                  aria-label={skill.name}
                >
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-focus-visible:border-primary transition-colors">
                    <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" aria-hidden="true" />
                  </div>
                  <span className="font-bold text-[10px] sm:text-sm uppercase tracking-widest">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
