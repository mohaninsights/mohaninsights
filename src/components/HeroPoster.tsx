import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
// @ts-ignore
import mohanPortrait from "../assets/images/mohan_portrait_1782472920337_1782473530886.jpg";

interface HeroPosterProps {
  onBtnClick: (sectionId: string) => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

const letterVariants = {
  hidden: { 
    y: "110%", 
    opacity: 0, 
    rotate: 3, 
    scale: 0.85 
  },
  visible: {
    y: "0%",
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1], // Custom premium ease-out exponential curve
    },
  },
};

export default function HeroPoster({ onBtnClick }: HeroPosterProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#030712] flex flex-col justify-between items-center pt-24 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Premium subtle background glow matching existing style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-y-0 left-10 w-[1px] bg-white/[0.01] pointer-events-none" />
      <div className="absolute inset-y-0 right-10 w-[1px] bg-white/[0.01] pointer-events-none" />

      {/* TOP HEADER STATUS */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full text-center z-10 flex flex-col items-center gap-1.5"
      >
        <div className="flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase font-bold">
            Live Portfolio Hub
          </span>
        </div>
        
        <h2 className="font-druk font-black tracking-[0.06em] sm:tracking-[0.1em] text-white text-xl sm:text-2xl md:text-3xl lg:text-4.5xl uppercase leading-tight select-none">
          SEO &amp; SMO EXECUTIVE
        </h2>
      </motion.div>

      {/* CENTER OVERLAPPING PORTFOLIO CONTAINER */}
      <div className="relative w-full flex-1 flex items-end justify-center py-4 z-10 min-h-[65vh] sm:min-h-[75vh] md:min-h-[82vh]">
        
        {/* Giant "PORTFOLIO" Background Typography - Moved to Bottom, Styled Bold & Extra Tall */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-x-0 bottom-2 sm:bottom-4 md:bottom-6 flex items-end justify-center select-none z-20 pointer-events-none px-2"
        >
          <h1 className="font-druk font-black text-[16vw] sm:text-[12.5vw] md:text-[14vw] lg:text-[15vw] xl:text-[16vw] tracking-[-0.04em] sm:tracking-[-0.06em] leading-[0.75] text-white uppercase text-center select-none whitespace-nowrap drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] scale-y-[1.4] origin-bottom flex items-center justify-center overflow-hidden py-4 gap-[0.01em]">
            {"PORTFOLIO".split("").map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Overlapping Grayscale Portrait Image - Perfectly Styled as PNG Cutout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative flex items-end justify-center z-10 pointer-events-none mt-4 w-full h-full"
        >
          <div className="relative h-[60vh] sm:h-[70vh] md:h-[78vh] max-h-[680px] aspect-[4/5] pointer-events-auto group">
            
            {/* Opaque high-contrast studio portrait with custom contrast to black out dark background */}
            <img
              src={mohanPortrait}
              alt="Mohan Kumar Portrait"
              className="w-full h-full object-cover object-top grayscale contrast-[1.45] brightness-[1.02] transition-all duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Seamless linear gradient bottom fade to blend smoothly into background */}
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent pointer-events-none z-20" />

            {/* Side-border linear gradients to dissolve raw image box edges completely */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030712] via-[#030712]/50 to-transparent pointer-events-none z-20" />
            
            {/* Top delicate edge feathering */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030712]/30 to-transparent pointer-events-none z-20" />

          </div>
        </motion.div>

      </div>

      {/* BOTTOM ACTION & INFORMATION BAR */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 z-20 pt-4 border-t border-white/[0.04] mt-4">
        
        {/* Bottom Left: Availability Indicator & Services quicklink */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center sm:items-start gap-1"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              Open to New Projects
            </span>
          </div>
          <span className="font-sans text-[11px] text-[var(--text-muted)] font-semibold tracking-wide">
            SEO &amp; SMO optimization strategist
          </span>
        </motion.div>

        {/* Center: Explore Down Arrow Badge */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => onBtnClick("about")}
          className="hidden md:flex flex-col items-center gap-1.5 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold">
            Explore Portfolio
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center">
            <div className="w-1 h-2 rounded-full bg-brand-cyan" />
          </div>
        </motion.div>

        {/* Bottom Right: Pill Outline Button (Mohan Kumar) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => onBtnClick("contact")}
            className="group relative flex items-center gap-2 px-10 py-4 rounded-full border-2 border-white/80 text-white font-sans font-bold uppercase tracking-[0.12em] text-xs sm:text-sm hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
          >
            MOHAN KUMAR
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
