import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../lib/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-white/10 dark:hover:bg-black/20 transition-colors relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          y: theme === "light" ? 0 : 40,
          rotate: theme === "light" ? 0 : 90,
          opacity: theme === "light" ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Sun className="w-5 h-5 text-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          y: theme === "dark" ? 0 : -40,
          rotate: theme === "dark" ? 0 : -90,
          opacity: theme === "dark" ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-blue-100 fill-blue-100/20" />
      </motion.div>
    </motion.button>
  );
}
