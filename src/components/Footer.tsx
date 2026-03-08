import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 glass mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold tracking-tighter bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
          >
            AMOL PATIL
          </motion.a>
          <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">

            Bridging data and AI for a smarter tomorrow.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/amol-rangrao-patil" },
              { icon: Linkedin, href: "https://linkedin.com/in/amol-rangrao-patil" },
              { icon: Twitter, href: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -4, scale: 1.1 }}
                className="p-3 rounded-full glass hover:bg-white/10 dark:hover:bg-black/20 transition-colors"
              >
                <social.icon className="w-5 h-5 text-foreground" />
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Amol Patil. Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Amol.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
            Quick Links
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {["About", "Projects", "Skills", "Achievements", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
