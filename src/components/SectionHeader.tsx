import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, highlight, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`mb-16 ${centered ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight mb-4 text-reveal overflow-hidden">
        <motion.span
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="block"
        >
          {title} {highlight && <span className="text-primary italic">{highlight}</span>}
        </motion.span>
      </h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-muted-foreground text-base sm:text-lg max-w-2xl ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`h-1 w-20 bg-primary mt-6 rounded-full origin-left ${centered ? "mx-auto origin-center" : ""}`} 
      />
    </motion.div>
  );
}
