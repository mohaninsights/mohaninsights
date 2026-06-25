import { motion } from "motion/react";
import { ArrowDown, Award, CheckCircle2, TrendingUp, Search, BarChart3, Mail } from "lucide-react";
import ThreeGlobe from "./ThreeGlobe";

interface HeroProps {
  onBtnClick: (sectionId: string) => void;
}

export default function Hero({ onBtnClick }: HeroProps) {
  const stats = [
    { value: "500+", label: "Keywords Ranked", icon: TrendingUp, color: "text-brand-cyan" },
    { value: "150+", label: "Projects Done", icon: CheckCircle2, color: "text-brand-purple" },
    { value: "98%", label: "Client Satisfaction", icon: Award, color: "text-emerald-400" },
  ];

  const floatingTags = [
    { icon: Search, label: "On-Page SEO", x: "10%", y: "20%", delay: 0 },
    { icon: TrendingUp, label: "SERP Rankings", x: "85%", y: "15%", delay: 1.5 },
    { icon: BarChart3, label: "Analytics Diagnostic", x: "78%", y: "75%", delay: 0.8 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 overflow-hidden flex items-center grid-mesh"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Column 1: Info Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-10">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full glass-panel border border-white/5 mb-6 hover:border-brand-cyan/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase">
                Available for New Projects
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-brand-purple">Mohan Kumar</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-lg sm:text-xl font-medium text-brand-cyan tracking-wide mt-3 uppercase"
            >
              SEO & SMO Expert
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed"
            >
              Helping Businesses Increase Organic Traffic, Rankings &amp; Online Visibility Through Data-Driven SEO &amp; SMO Strategies.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <button
                onClick={() => onBtnClick("contact")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display text-sm tracking-wider font-semibold text-black bg-white hover:bg-brand-cyan hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] cursor-pointer"
              >
                Hire Me
              </button>
              
              <button
                onClick={() => onBtnClick("services")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display text-sm tracking-wider font-semibold text-white glass-panel hover:bg-white/[0.04] hover:scale-105 transition-all duration-300 border border-white/10 hover:border-brand-purple/40 cursor-pointer"
              >
                View Portfolio
              </button>
            </motion.div>

            {/* Key Metrics Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-14 pt-8 border-t border-white/[0.06] max-w-lg mx-auto lg:mx-0 w-full"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <p className="font-sans text-[11px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Column 2: Interactive 3D Globe Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Animated floating badges around Globe */}
            {floatingTags.map((tag, index) => {
              const TagIcon = tag.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -12, 0] 
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.4 + index * 0.2 },
                    scale: { duration: 0.8, delay: 0.4 + index * 0.2 },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: tag.delay
                    }
                  }}
                  className="absolute glass-panel border border-white/10 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                  style={{ top: tag.y, left: tag.x }}
                >
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center">
                    <TagIcon className="w-3.5 h-3.5 text-brand-cyan" />
                  </div>
                  <span className="font-display text-xs font-semibold text-white tracking-wide">
                    {tag.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Core 3D Interactive Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full relative h-[400px] sm:h-[450px] flex items-center justify-center"
            >
              {/* Outer Circular Aura Grid */}
              <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] border border-white/[0.02] rounded-full animate-[spin_100s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] border border-brand-purple/[0.04] rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />
              
              <ThreeGlobe />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Mouse Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
          Explore Insights
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/20 p-1 flex justify-center"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-brand-cyan" />
        </motion.div>
      </div>
    </section>
  );
}
