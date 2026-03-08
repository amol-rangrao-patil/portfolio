import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Phone, Send, ExternalLink, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Get In" 
          highlight="Touch" 
          subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-morphism p-6 sm:p-12 md:p-16 space-y-8 sm:space-y-12 rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-tight">Let's Work Together</h3>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                If you have a project that needs some data magic, I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <motion.a 
                href="mailto:amolemail10@gmail.com"
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass border border-white/10 hover:border-primary/50 transition-all group text-center"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/10">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
                <p className="font-bold text-sm sm:text-base break-all">amolemail10@gmail.com</p>
              </motion.a>

              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass border border-white/10 text-center"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 shadow-lg shadow-primary/10">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Location</p>
                <p className="font-bold text-sm sm:text-base">Kolhapur, India</p>
              </motion.div>

              <motion.a 
                href="https://linkedin.com/in/amol-rangrao-patil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass border border-white/10 hover:border-primary/50 transition-all group text-center sm:col-span-2 md:col-span-1"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/10">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">LinkedIn</p>
                <p className="font-bold text-sm sm:text-base">Connect with me</p>
              </motion.a>
            </div>

            <div className="pt-8 sm:pt-12 border-t border-white/10 text-center">
              <motion.a
                href="https://linkedin.com/in/amol-rangrao-patil"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all text-base uppercase tracking-widest"
              >
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

