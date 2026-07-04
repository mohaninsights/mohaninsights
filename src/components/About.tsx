import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, MapPin, Globe, Calendar, ArrowRight, Zap, Award, Search, Percent, GraduationCap, BookOpen, User, Linkedin, Github, Briefcase } from "lucide-react";

interface AboutProps {
  onBtnClick: (sectionId: string) => void;
}

export default function About({ onBtnClick }: AboutProps) {
  const [activeTab, setActiveTab] = useState<"bio" | "education">("bio");

  // Professional profile links for "Connect With Me"
  const socialProfiles = [
    {
      name: "LinkedIn",
      platform: "Professional Network",
      icon: Linkedin,
      url: "https://www.linkedin.com",
      accentClass: "hover:border-[#0077b5]/50 hover:bg-[#0077b5]/5 hover:shadow-[0_0_30px_rgba(0,119,181,0.15)]",
      iconContainerClass: "bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5]"
    },
    {
      name: "GitHub",
      platform: "Open Source",
      icon: Github,
      url: "https://github.com",
      accentClass: "hover:border-white/40 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
      iconContainerClass: "bg-white/10 border border-white/20 text-white"
    },
    {
      name: "Upwork",
      platform: "Freelance Services",
      icon: Briefcase,
      url: "https://www.upwork.com",
      accentClass: "hover:border-[#14a800]/50 hover:bg-[#14a800]/5 hover:shadow-[0_0_30px_rgba(20,168,0,0.15)]",
      iconContainerClass: "bg-[#14a800]/10 border border-[#14a800]/20 text-[#14a800]"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background glowing shapes */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14 overflow-hidden py-4">
          <h2 className="font-sans font-black text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[7vw] tracking-[-0.05em] leading-[0.8] text-[#ebebeb] uppercase select-none whitespace-nowrap drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-y-[1.35] origin-center inline-block">
            ABOUT US
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Bio Description & Details */}
          <div className="flex flex-col justify-center">
            
            {/* Interactive Section Tabs */}
            <div className="flex items-center gap-2 mb-8 p-1 bg-white/[0.02] border border-[var(--glass-border)] rounded-full w-full max-w-md self-center">
              <button
                onClick={() => setActiveTab("bio")}
                className={`flex-1 py-2.5 px-5 rounded-full font-display text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "bio"
                    ? "bg-brand-cyan text-black shadow-[0_0_20px_rgba(0,242,254,0.3)] font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/[0.02]"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                Profile Biography
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex-1 py-2.5 px-5 rounded-full font-display text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "education"
                    ? "bg-brand-purple text-white shadow-[0_0_20px_rgba(189,115,255,0.3)] font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/[0.02]"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Education &amp; Academic
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "bio" ? (
                <motion.div
                  key="bio-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center mb-6 bg-gradient-to-r from-white via-white to-brand-cyan bg-clip-text text-transparent">
                    Hi, I'm Mohan.
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-[var(--text-sub)] leading-relaxed text-center max-w-xl mx-auto">
                    I'm an SEO &amp; SMO Executive with a passion for improving website rankings and helping businesses grow through effective SEO and social media strategies.
                  </p>

                  {/* Connect With Me Section */}
                  <div className="mt-12 max-w-2xl mx-auto text-center border-t border-[var(--glass-border)] pt-8">
                    <h4 className="font-display font-bold text-sm text-[var(--text-muted)] mb-6 uppercase tracking-widest">
                      Connect With Me
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {socialProfiles.map((profile, idx) => {
                        const IconComponent = profile.icon;
                        return (
                          <motion.a
                            key={idx}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-white/[0.02] border border-[var(--glass-border)] transition-all duration-300 cursor-pointer ${profile.accentClass}`}
                          >
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-3 ${profile.iconContainerClass}`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="font-display text-xs sm:text-sm font-bold text-white tracking-wide">
                              {profile.name}
                            </span>
                            <span className="font-mono text-[9px] text-gray-500 mt-0.5 uppercase tracking-wider">
                              {profile.platform}
                            </span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="edu-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-2xl mx-auto w-full text-center"
                >
                  <h3 className="font-display font-bold text-xl text-[var(--text-main)] tracking-tight">
                    Academic Background &amp; Credentials
                  </h3>
                  <p className="font-sans text-xs text-[var(--text-muted)] mt-1.5 mb-6 leading-relaxed max-w-lg mx-auto">
                    Formal qualifications validating technical analysis, digital marketing, and systematic research methods.
                  </p>

                  <div className="space-y-4 text-left">
                    {[
                      {
                        level: "1 Year Diploma",
                        degree: "Diploma in Digital Marketing",
                        institution: "Indian Institution of Computer Science",
                        period: "Completed 2024",
                        icon: Award,
                        accent: "brand-cyan"
                      },
                      {
                        level: "Undergraduate",
                        degree: "Bachelor of Arts (BA)",
                        institution: "Delhi University / Accredited Institution",
                        period: "Graduated 2025",
                        icon: GraduationCap,
                        accent: "brand-purple"
                      },
                      {
                        level: "Senior High School",
                        degree: "Senior Secondary High School",
                        institution: "Central Board of Secondary Education (CBSE)",
                        period: "Completed 2022",
                        icon: BookOpen,
                        accent: "brand-cyan"
                      }
                    ].map((edu, idx) => {
                      const IconComp = edu.icon;
                      const isCyan = edu.accent === "brand-cyan";
                      return (
                        <div 
                          key={idx}
                          className="glass-panel border border-[var(--glass-border)] hover:border-brand-cyan/20 bg-[var(--bg-card)] rounded-xl p-4 flex items-start gap-4 transition-all duration-300 group/edu"
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/edu:scale-105 ${
                            isCyan 
                              ? "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shadow-[0_0_10px_rgba(0,242,254,0.15)]" 
                              : "bg-brand-purple/10 border border-brand-purple/20 text-brand-purple shadow-[0_0_10px_rgba(189,115,255,0.15)]"
                          }`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <span className={`font-mono text-[9px] uppercase tracking-wider font-bold ${
                                isCyan ? "text-brand-cyan" : "text-brand-purple"
                              }`}>
                                {edu.level}
                              </span>
                              <span className="font-mono text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-brand-purple" />
                                {edu.period}
                              </span>
                            </div>
                            <h4 className="font-display font-bold text-sm text-[var(--text-main)] mt-1 tracking-wide">
                              {edu.degree}
                            </h4>
                            <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5 font-medium">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => onBtnClick("contact")}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-display text-xs tracking-wider font-semibold text-[var(--bg-main)] bg-[var(--text-main)] hover:bg-brand-cyan hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onBtnClick("experience")}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-display text-xs tracking-wider font-semibold text-[var(--text-main)] glass-panel hover:bg-white/[0.05] hover:scale-105 transition-all duration-300 border border-white/10 cursor-pointer"
              >
                My Experience
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
