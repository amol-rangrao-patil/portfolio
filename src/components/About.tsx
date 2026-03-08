import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="About" 
          highlight="Me" 
          subtitle="A dedicated student and AI enthusiast bridging the gap between data and intelligent solutions."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Image Bento Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-morphism overflow-hidden aspect-square lg:aspect-auto relative group rounded-[2rem]"
          >
            <img
              src="/images/141930.JPEG"
              alt="Amol Patil"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-bold tracking-widest uppercase text-sm">Amol Patil</p>
            </div>
          </motion.div>

          {/* Content Bento Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-8 sm:p-12 glass-morphism flex flex-col justify-center relative overflow-hidden rounded-[2rem]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Sparkles className="w-32 h-32 text-primary" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 sm:mb-8 text-reveal">
              About <span className="text-primary italic">Me</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I am <span className="text-foreground font-bold">Amol Rangrao Patil</span>, a dedicated student currently pursuing a Diploma in Computer Science & Engineering. 
                My passion lies in the intersection of <span className="text-primary font-medium">data and artificial intelligence</span>. 
                As a <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Google Student Ambassador</span> for Gemini, I thrive on sharing the power of AI tools with my community.
              </p>
              <p>
                I specialize in Exploratory Data Analysis (EDA) and creating data-driven solutions. 
                I've applied these skills in real-world scenarios through internships at <span className="text-foreground font-medium">Inlighn Tech</span> and <span className="text-foreground font-medium">Cognifyz Technology</span>.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12"
            >
              {[
                { label: "Education", value: "Diploma", icon: "🎓" },
                { label: "Focus Area", value: "Data & AI", icon: "📈" },
                { label: "Expertise", value: "EDA & ML  ", icon: "✨" },
                { label: "Based In", value: "Pune, India", icon: "📍" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: { 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
                    }
                  }}
                  whileHover={{ y: -8 }}
                  className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] glass border border-white/10 flex flex-col items-center text-center group hover:border-primary/50 transition-all"
                >
                  <span className="text-xl sm:text-2xl mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-500">{stat.icon}</span>
                  <div className="text-sm sm:text-xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-[8px] sm:text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
