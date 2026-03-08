import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const ACHIEVEMENTS = [
  {
    title: "Google Student Ambassador for Gemini",
    category: "Leadership",
    image: "/images/amolemail10gmail.comamolemail10gmail.com_page-0001.JPG"
  },
  {
    title: "Cognifyz Technology Data Analysis Intern",
    category: "Internship",
    image: "/images/Cognifyz Technology_page-0001.JPG"
  },
  {
    title: "TCS ION Career Edge Certification",
    category: "Certification",
    image: "/images/tcsnqt.JPEG"
  },
  {
    title: "3RI technologies 10 Days Workshop on Data Science",
    category: "Workshop",
    image: "/images/data science workshop_page-0001.JPG"
  },
  {
    title: "Tech Hub - Nexitrove Quiz Battle",
    category: "Certification",
    image: "images/Tech- Hub_page-0001.JPG"
  },
  {
    title: "Forge- Accenture",
    category: "Internship",
    image: "/images/Forage certificate_page-0001.JPG"
  },
  {
    title: "Yash 2K25",
    category: "Volunteer",
    image: "/images/yash2k25.JPEG"
  },
  {
    title: "Inlighn tech",
    category: "Internship",
    image: "images/Experience Letter Inlighn Tech Intership_page-0001.JPG"
  },
  {
    title: "Solution Challenge Organized by GDG",
    category: "Certification",
    image: "/images/Solution Challenge Google.JPEG"
  },
  {
    title: "Google Student Ambassador for Gemini Onboarding",
    category: "Onboarding",
    image: "images/GSA Onboarding.JPEG"
  },
  {
    title: "Googe Student Ambassador Welcome Kit",
    category: "Welcome Kit",
    image: "/images/Onboarding Kit.JPEG"
  },
  {
    title: "Scan & Win Sprint Organized by GSA",
    category: "Winner",
    image: "/images/Winner Of the scan & win Spirit.JPEG"
  },
  {
    title: "Devfest Goa 2025",
    category: "Certification",
    image: "images/Devfest Goa 2k25.JPEG"
  },
  {
    title: "Gemini Certified Educator ",
    category: "Certification",
    image: "/images/Google Gemini_page-0001.JPG"
  },
  {
    title: "GSA Rewards",
    category: "Milestone",
    image: "images/Google swags.JPEG"
  },
  {
    title: "Mood Indigo IIT Bombay ",
    category: "Vendor",
    image: "/images/Mood indigo IIt Bombay.JPEG"
  },
  {
    title: "GSA Promotion",
    category: "Achievment",
    image: "images/Promotion GSA 2.0.JPEG"
  },
  {
    title: "Best Event Organizer",
    category: "Appreciation",
    image: "/images/Best Event Organizer.JPEG"
  },
  {
    title: "India Tech summit Successfully Completed as GSA Lead Organizer",
    category: "Achievment",
    image: "/images/Gsa Lead Organizer.JPEG"
  },
  {
    title: "Dipex Idea Presentation",
    category: "Appreciation",
    image: "/images/Dipex.JPEG"
  },
  {
    title: "Selection In all india Top 250 ambassadors",
    category: "Milestone",
    image: "images/Top 250.JPEG"
  },
  {
    title: "Best GSA Leader ",
    category: "Appreciation",
    image: "/images/Letter of Appreciation_page-0001.JPG"
  },
  {
    title: "Cognifyz Tecnologies Data Analysis Intern",
    category: "Intership",
    image: "/images/Cognifyz Technology_page-0001.JPG"
  }




];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="My" 
          highlight="Achievements" 
          subtitle="Certifications, awards, and milestones in my professional journey."
        />

        <div className="relative group">
          <div className="flex overflow-hidden gap-6 sm:gap-10 py-10 mask-fade-edges">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 sm:gap-10 shrink-0"
            >
              {ACHIEVEMENTS.map((achievement, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-[280px] sm:w-[400px] md:w-[500px] aspect-video glass-morphism overflow-hidden relative group/item rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl"
                >
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/item:opacity-90 transition-opacity p-6 sm:p-10 flex flex-col justify-end">
                    <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2">{achievement.category}</p>
                    <h4 className="text-white font-display font-bold text-lg sm:text-2xl leading-tight">{achievement.title}</h4>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {ACHIEVEMENTS.map((achievement, i) => (
                <motion.div 
                  key={`dup-${i}`} 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-[280px] sm:w-[400px] md:w-[500px] aspect-video glass-morphism overflow-hidden relative group/item rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl"
                >
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover/item:opacity-90 transition-opacity p-6 sm:p-10 flex flex-col justify-end">
                    <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2">{achievement.category}</p>
                    <h4 className="text-white font-display font-bold text-lg sm:text-2xl leading-tight">{achievement.title}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
