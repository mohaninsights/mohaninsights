import { motion } from "motion/react";
import { Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logoType: "acharya" | "hanish" | "thinkbizz";
  glowClass: string;
  logoGlow: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Acharya Ganesh",
      role: "SEO Executive",
      period: "August 2025 to Present",
      logoType: "acharya",
      glowClass: "hover:shadow-[0_0_50px_rgba(52,211,153,0.12)] hover:border-emerald-500/20",
      logoGlow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]"
    },
    {
      company: "Hanish Bagga",
      role: "SEO Executive",
      period: "August 2025 to Present",
      logoType: "hanish",
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
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-3">
            Career Timeline
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight uppercase">
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
                  {exp.logoType === "acharya" && (
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="46" stroke="#78350F" strokeWidth="1.2" strokeDasharray="3 2"/>
                      <circle cx="50" cy="50" r="41" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5"/>
                      <circle cx="50" cy="50" r="32" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 1"/>
                      <path d="M50 30C52.2 30 53.5 31.8 53.5 34C53.5 36.2 51.8 38 50 38C48.2 38 46.5 36.2 46.5 34C46.5 31.8 47.8 30 50 30Z" fill="#B45309"/>
                      <path d="M39 64C39 56.5 43.5 51 50 51C56.5 51 61 56.5 61 64H39Z" fill="#D97706"/>
                      <path d="M43 54.5C45 51.5 47.5 49 50 49C52.5 49 55 51.5 57 54.5" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M25 68C35 71 65 71 75 68" stroke="#78350F" strokeWidth="1.8" strokeLinecap="round"/>
                      <text x="50" y="78" textAnchor="middle" fill="#78350F" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">Acharya Ganesh</text>
                      <text x="50" y="85" textAnchor="middle" fill="#B45309" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">जो सही राह दिखाए</text>
                    </svg>
                  )}

                  {exp.logoType === "hanish" && (
                    <div className="flex flex-col items-center justify-center w-full h-full text-center">
                      <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none">HB</span>
                      <span className="text-[7.5px] font-black text-gray-800 tracking-widest uppercase mt-1">Hanish</span>
                      <span className="text-[7.5px] font-black text-gray-500 tracking-widest uppercase leading-none">Bagga</span>
                    </div>
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
