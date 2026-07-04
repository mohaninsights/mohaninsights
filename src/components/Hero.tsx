import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, Search, Award, ShieldCheck } from "lucide-react";
import ThreeGlobe from "./ThreeGlobe";

interface HeroProps {
  onBtnClick: (sectionId: string) => void;
}

export default function Hero({ onBtnClick }: HeroProps) {
  const highlights = [
    { label: "On-Page & Off-Page Scaling", icon: TrendingUp },
    { label: "Technical Speed Diagnostics", icon: ShieldCheck },
    { label: "Organic Search Authority Boost", icon: Search },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#030712] flex items-center pt-24 pb-14 overflow-hidden select-none"
    >
      {/* Decorative large glows */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADINGS ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* SEO Specialized Services pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="self-center lg:self-start inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 shadow-[0_0_15px_rgba(0,242,254,0.05)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
              <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase font-bold">
                SEO &amp; SMO Specialized Services
              </span>
            </motion.div>

            {/* Giant Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]"
              >
                Accelerating <br />
                <span className="bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-purple bg-clip-text text-transparent">
                  Organic Rankings
                </span> <br />
                &amp; Social Authority
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-sm sm:text-base text-[var(--text-sub)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Hi, I'm <strong className="text-white font-bold">Mohan Kumar</strong>, a results-driven Performance Marketer and SEO Specialist. I specialize in auditing page speed bottlenecks, mapping high-impact search terms, and syndicating social engagement.
              </motion.p>
            </div>

            {/* Strategy Highlights List */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-1.5"
            >
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.01] border border-[var(--glass-border)]"
                  >
                    <IconComp className="w-4 h-4 text-brand-cyan" />
                    <span className="font-mono text-[10px] text-[var(--text-sub)] uppercase tracking-wider font-bold">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onBtnClick("audit")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-display font-bold uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:scale-[1.03] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Claim Free SEO Audit
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onBtnClick("case-study")}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[var(--glass-border)] bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-purple/40 text-white font-display font-bold uppercase tracking-wider text-xs transition-all duration-300 cursor-pointer"
              >
                View Case Study
              </button>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE 3D GLOBE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative min-h-[350px] sm:min-h-[450px]"
          >
            <ThreeGlobe />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
