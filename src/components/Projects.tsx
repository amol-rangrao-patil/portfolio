import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
            <button 
              onClick={() => scroll("left")}
              className="p-4 rounded-full border border-foreground/10 hover:bg-foreground hover:text-background transition-all duration-300"
              title="Scroll projects left"
              aria-label="Scroll projects left"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              ease: [0.23, 1, 0.32, 1],
              type: "spring",
              stiffness: 100
            }}
            className="text-5xl md:text-7xl font-serif italic mb-6 tracking-tight"
          >
            My Works
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            Showcasing a selection of my most impactful data analysis and AI engineering projects.
          </motion.p>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <button 
              onClick={() => scroll("right")}
              className="p-4 rounded-full border border-foreground/10 hover:bg-foreground hover:text-background transition-all duration-300"
              title="Scroll projects right"
              aria-label="Scroll projects right"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Projects Carousel/Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: i * 0.1, 
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="min-w-[300px] md:min-w-[400px] aspect-[3/4] relative rounded-[3rem] overflow-hidden group snap-center cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-3xl font-display font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
