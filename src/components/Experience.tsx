import { motion } from "motion/react";
import { Calendar } from "lucide-react";

// @ts-ignore
import acharyaGaneshLogo from "../assets/images/acharya_ganesh_logo_1783166489996.jpg";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logoType: "divine" | "thinkbizz";
  glowClass: string;
  logoGlow: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Divine Astro Vastu Science LLP",
      role: "SEO Executive",
      period: "August 2025 to August 2026",
      logoType: "divine",
      glowClass: "hover:shadow-[0_0_50px_rgba(245,158,11,0.12)] hover:border-amber-500/20",
      logoGlow: "shadow-[0_0_15px_rgba(245,158,11,0.3)]"
    },
    {
      company: "ThinkBizz Hightech",
      role: "SEO Intern",
      period: "December 2024 to June 2025",
      logoType: "thinkbizz",
      glowClass: "hover:shadow-[0_0_50px_rgba(139,92,246,0.12)] hover:border-purple-500/20",
      logoGlow: "shadow-[0_0_15px_rgba(139,92,246,0.3)]"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16 overflow-visible py-4 border-b border-white/[0.04] pb-6">
          <h2 className="font-druk font-black text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9.5vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-y-[1.5] origin-left inline-block">
            WORK EXPERIENCE
          </h2>
        </div>

        {/* Clean, beautifully centered experience timeline cards */}
        <div className="max-w-3xl mx-auto relative space-y-6 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`glass-panel border border-[var(--glass-border)] bg-[var(--bg-card)] rounded-2xl p-6 relative overflow-hidden group shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-500 ${exp.glowClass}`}
            >
              {/* Subtle overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-black/[0.08] pointer-events-none" />
              
              {/* Top accent highlight bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-purple to-transparent opacity-35 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 w-full">
                
                {/* Styled Logo Box */}
                <div className={`w-20 h-20 rounded-2xl bg-white p-1 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${exp.logoGlow} flex-shrink-0`}>
                  {exp.logoType === "divine" && (
                    <img 
                      src={acharyaGaneshLogo} 
                      alt="Acharya Ganesh Logo" 
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {exp.logoType === "thinkbizz" && (
                    <div className="flex flex-col items-center justify-center w-full h-full text-center p-1">
                      <div className="font-sans font-black text-sm text-gray-900 tracking-tight flex items-center justify-center gap-0.5">
                        <span>Think</span>
                        <span className="text-purple-600">Biz</span>
                      </div>
                      <div className="h-[1px] w-14 bg-gray-200 my-1" />
                      <span className="text-[6.5px] font-mono font-black text-amber-500 tracking-widest uppercase leading-none">HIGH TECH</span>
                    </div>
                  )}
                </div>

                {/* Company, Designation and Duration */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full text-center sm:text-left gap-3">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-main)] tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-3.5 mt-1 text-xs sm:text-sm">
                      <span className="text-brand-purple font-semibold font-mono tracking-wide uppercase text-[11px] bg-brand-purple/10 px-2 py-0.5 rounded-md border border-brand-purple/20 self-center sm:self-auto">
                        {exp.role}
                      </span>
                      <span className="hidden sm:inline text-white/20 select-none">•</span>
                      <span className="text-[var(--text-muted)] font-medium flex items-center gap-1.5 justify-center sm:justify-start">
                        <Calendar className="w-3.5 h-3.5 text-brand-cyan/70" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
