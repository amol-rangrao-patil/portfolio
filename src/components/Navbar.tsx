import { motion, useScroll, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    
    const handleScroll = () => {
      updateScrolled();
      
      const sections = ["home", ...NAV_ITEMS.map(item => item.href.replace("#", ""))];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    updateScrolled();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6",
        isScrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
      )}
    >
      <motion.div
        layout
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-[2rem] transition-all duration-700",
          isScrolled 
            ? "glass-morphism border border-white/20 shadow-2xl shadow-black/30 backdrop-blur-xl" 
            : "bg-transparent border border-transparent hover:border-white/10 hover:glass-morphism hover:shadow-xl transition-all duration-300"
        )}
      >
        {/* Logo - Circular Image Button */}
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-3 shrink-0 group focus:outline-none"
          aria-label="Home"
        >
          {/* Animated Background Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-1 rounded-full bg-primary/30 blur-lg"
          />

          {/* Circular Image */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary transition-all shadow-lg shadow-primary/30"
          >
            <img
              src="images/Navbar Photo.JPEG"
              alt="Amol Patil"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Text Label */}
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent italic font-black text-xs sm:text-sm md:text-base tracking-tight group-hover:from-primary group-hover:via-indigo-500 group-hover:to-purple-500 transition-all duration-300"
          >
          AMOL PATIL
          </motion.span>
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                onClick={(e) => {
                  if (item.href === "#home") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={cn(
                  "px-3 lg:px-4 py-2 text-sm lg:text-base font-bold transition-all relative group rounded-lg",
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute inset-0 -z-10 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 -z-10 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg" />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          
          <div className="pl-2 lg:pl-4 ml-2 lg:ml-4 border-l border-white/10">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3 sm:gap-4">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-2.5 text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all border border-transparent hover:border-primary/30"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.4 }}
              className="absolute right-0 top-24 bottom-0 w-[85%] max-w-sm bg-background/95 border-l border-white/20 flex flex-col shadow-2xl backdrop-blur-2xl rounded-l-3xl z-[56] md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 overflow-y-auto p-6 pb-32 custom-scrollbar scroll-smooth">
                <div className="flex flex-col gap-3">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                      <motion.a
                        key={item.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        href={item.href}
                        onClick={(e) => {
                          setIsOpen(false);
                          if (item.href === "#home") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "flex items-center justify-between px-6 py-4 text-lg font-bold rounded-2xl transition-all border-2",
                          isActive 
                            ? "text-primary bg-primary/10 border-primary/30 shadow-lg shadow-primary/20" 
                            : "text-foreground border-transparent hover:text-primary hover:bg-white/5 hover:border-primary/20"
                        )}
                      >
                        <span className="flex items-center gap-4">
                          {item.name}
                        </span>
                        <motion.div
                          animate={{ x: isActive ? 5 : 0, rotate: isActive ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronRight className={cn(
                            "w-5 h-5 transition-colors", 
                            isActive ? "text-primary" : "text-muted-foreground/50"
                          )} />
                        </motion.div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
