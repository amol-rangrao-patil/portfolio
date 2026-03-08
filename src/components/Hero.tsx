import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-4 sm:px-6"
    >
      {/* Animated Glass Morphism Cards */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Main Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group"
            >
              {/* Blurred Background for Glass Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-indigo-500/50 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Glass Card Content */}
              <div className="relative bg-background/40 backdrop-blur-2xl border-2 border-white/30 rounded-3xl p-8 sm:p-12 shadow-2xl hover:border-white/50 transition-all duration-500">
                {/* Animated top area */}
                <div className="space-y-6">
                  {/* Welcome Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="space-y-3"
                  >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter leading-none">
                      <motion.span
                        animate={{ 
                          backgroundPosition: ["0% 50%", "100% 50%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent bg-300% inline-block"
                      >
                        Amol Patil
                      </motion.span>
                    </h1>
                  </motion.div>

                  {/* Animated Subtitle */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="space-y-3"
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      Aspiring Data Analyst & AI Enthusiast
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                      Transforming <span className="text-primary font-semibold">raw data</span> into <span className="text-primary font-semibold">actionable insights</span> and building <span className="text-primary font-semibold">intelligent AI solutions</span>
                    </p>
                  </motion.div>

                  {/* Floating Glass Elements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-wrap items-center gap-3 pt-4"
                  >
                    {[
                      { stat: "1+", label: "Years Experience" },
                      { stat: "Kolhapur", label: "Based In India" },
                      { stat: "AI", label: "Top Rated" }
                    ].map((item, idx) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="px-4 py-2 glass-morphism border border-white/20 rounded-xl hover:border-white/50 transition-all hover:shadow-lg text-sm"
                      >
                        <p className="font-bold text-primary">{item.stat}</p>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-full lg:max-w-md">
              {/* Animated Background Glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-purple-500/40 to-indigo-500/40 rounded-full blur-3xl"
              />

              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-border opacity-50"
              />

              {/* Image Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/30 glass shadow-2xl">
                <motion.img
                  src="/images/Photo.jpeg"
                  alt="Amol Patil"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>


            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 glass-morphism border border-white/20 rounded-full hover:border-white/50 hover:shadow-lg transition-all"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
