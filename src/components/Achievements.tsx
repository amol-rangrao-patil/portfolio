import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const ACHIEVEMENTS = [
  {
    title: "Google Student Ambassador for Gemini",
    category: "Leadership",
    image: "/images/amolemail10gmail.comamolemail10gmail.com_page-0001.jpg"
  },
  {
    title: "Cognifyz Technology Data Analysis Internship",
    category: "Internship",
    image: "/images/CognifyzTechnology_page-0001.jpg"
  },
  {
    title: "TCS ION Career Edge Certification",
    category: "Certification",
    image: "/images/tcsnqt.jpeg"
  },
  {
    title: "10-Day Data Science Workshop by 3RI Technologies",
    category: "Workshop",
    image: "/images/data science workshop_page-0001.jpg"
  },
  {
    title: "Tech Hub - Nexitrove Quiz Battle Participation",
    category: "Competition",
    image: "/images/Tech- Hub_page-0001.jpg"
  },
  {
    title: "Accenture Forage Virtual Experience",
    category: "Virtual Experience",
    image: "/images/Forage certificate_page-0001.jpg"
  },
  {
    title: "Yash 2K25 Event Volunteer",
    category: "Volunteering",
    image: "/images/yash2k25.jpeg"
  },
  {
    title: "Inlighn Tech Data Analysis Internship",
    category: "Internship",
    image: "/images/Experience Letter Inlighn Tech Intership_page-0001.jpg"
  },
  {
    title: "Google Solution Challenge Participation",
    category: "Competition",
    image: "/images/Solution Challenge Google.jpeg"
  },
  {
    title: "Google Student Ambassador for Gemini Onboarding",
    category: "Onboarding",
    image: "/images/GSA Onboarding.jpeg"
  },
  {
    title: "Google Student Ambassador Welcome Kit",
    category: "Milestone",
    image: "/images/Onboarding Kit.jpeg"
  },
  {
    title: "Scan & Win Sprint Winner",
    category: "Award",
    image: "/images/Winner Of the scan & win Spirit.jpeg"
  },
  {
    title: "DevFest Goa 2025 Participation",
    category: "Event",
    image: "/images/Devfest Goa 2k25.jpeg"
  },
  {
    title: "Gemini Certified Educator",
    category: "Certification",
    image: "/images/Google Gemini_page-0001.jpg"
  },
  {
    title: "Google Student Ambassador Rewards",
    category: "Milestone",
    image: "/images/Google swags.jpeg"
  },
  {
    title: "Mood Indigo, IIT Bombay - Vendor Participation",
    category: "Participation",
    image: "/images/Mood indigo IIt Bombay.jpeg"
  },
  {
    title: "Google Student Ambassador Promotion",
    category: "Milestone",
    image: "/images/Promotion GSA 2.0.jpeg"
  },
  {
    title: "Best Event Organizer",
    category: "Appreciation",
    image: "/images/Best Event Organizer.jpeg"
  },
  {
    title: "India Tech Summit - GSA Lead Organizer",
    category: "Leadership",
    image: "/images/Gsa Lead Organizer.jpeg"
  },
  {
    title: "Dipex Idea Presentation",
    category: "Appreciation",
    image: "/images/Dipex.jpeg"
  },
  {
    title: "Selected Among India's Top 250 Ambassadors",
    category: "Milestone",
    image: "/images/Top 250.jpeg"
  },
  {
    title: "Best GSA Leader Recognition",
    category: "Award",
    image: "/images/Letter of Appreciation_page-0001.jpg"
  },
  

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
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
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
                    className="w-full h-full object-contain bg-background/70 p-2 grayscale group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-105"
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
                    className="w-full h-full object-contain bg-background/70 p-2 grayscale group-hover/item:grayscale-0 transition-all duration-700 group-hover/item:scale-105"
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
