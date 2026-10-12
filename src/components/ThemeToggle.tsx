import { BarChart3, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../lib/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const labels = {
    light: "Light theme",
    dark: "Dark theme",
    tech: "Tech data theme",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-white/10 dark:hover:bg-black/20 transition-colors relative overflow-hidden"
      aria-label={`Switch theme. Current: ${labels[theme]}`}
      title={`${labels[theme]} - click to change`}
    >
      <motion.div
        initial={false}
        animate={{ 
          y: theme === "light" ? 0 : -40,
          rotate: theme === "light" ? 0 : -90,
          opacity: theme === "light" ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Sun className="w-5 h-5 text-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          y: theme === "dark" ? 0 : 40,
          rotate: theme === "dark" ? 0 : 90,
          opacity: theme === "dark" ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-cyan-100 fill-cyan-100/20" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: theme === "tech" ? 0 : 40,
          rotate: theme === "tech" ? 0 : 90,
          opacity: theme === "tech" ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <BarChart3 className="w-5 h-5 text-teal-300" />
      </motion.div>
    </motion.button>
  );
}
