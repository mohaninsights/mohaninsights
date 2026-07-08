import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, FileText, ArrowUpRight } from "lucide-react";
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
  const [heroPhase, setHeroPhase] = useState<"intro" | "reveal" | "complete">("intro");

  useEffect(() => {
    // Stage 1: Display "HELLO, I'M MOHAN" mask text in center
    // Stage 2: Smooth mask reveal effect where text zooms out/in and fades to reveal the image
    const timer1 = setTimeout(() => {
      setHeroPhase("reveal");
    }, 1500);

    // Stage 3: Smooth transition completed to normal interactive Hero section
    const timer2 = setTimeout(() => {
      setHeroPhase("complete");
    }, 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

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
        animate={{
          opacity: heroPhase === "intro" ? 0 : 1,
          y: heroPhase === "intro" ? -20 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full text-center z-10 flex flex-col items-center gap-1.5"
      >
        <div className="flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase font-bold">
            Live Portfolio Hub
          </span>
        </div>
        
        {/* Visually hidden h1 for search crawler indexing & SXO best practice */}
        <h1 className="sr-only">Mohan SEO — Leading SEO &amp; SMO Expert Portfolio | Mohan Kumar</h1>

        <h2 className="font-bebas tracking-[0.08em] sm:tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple text-4xl sm:text-5xl md:text-6.5xl lg:text-7.5xl uppercase leading-none select-none drop-shadow-[0_4px_20px_rgba(0,242,254,0.15)] font-normal">
          SEO &amp; SMO EXECUTIVE
        </h2>
      </motion.div>

      {/* Premium Centered Mask Reveal Overlay */}
      {(heroPhase === "intro" || heroPhase === "reveal") && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#030712] pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.85, letterSpacing: "0.08em", filter: "blur(12px)" }}
            animate={
              heroPhase === "reveal"
                ? {
                    scale: 24,
                    opacity: 0,
                    filter: "blur(6px)",
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    letterSpacing: "-0.02em",
                    filter: "blur(0px)",
                  }
            }
            transition={{
              opacity: { duration: heroPhase === "reveal" ? 0.6 : 1.2, ease: "easeInOut" },
              scale: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
              letterSpacing: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              filter: { duration: 1.0 },
            }}
            className="font-druk font-black text-[8vw] sm:text-[7vw] md:text-[6vw] tracking-tighter text-transparent bg-clip-text bg-cover bg-center select-none uppercase text-center max-w-4xl px-6 scale-y-[1.3] leading-none"
            style={{
              backgroundImage: `url(${mohanPortrait})`,
              WebkitBackgroundClip: "text",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            HELLO, I'M MOHAN
          </motion.h1>
        </div>
      )}

      {/* MOBILE CENTER OVERLAPPING PORTFOLIO CONTAINER: PREMIUM MASK REVEAL */}
      <div className="flex md:hidden relative w-full flex-1 items-center justify-center py-4 z-10 min-h-[60vh] sm:min-h-[70vh] overflow-visible">
        
        {/* Left Flank of Text: "PORT" */}
        <motion.div
          animate={{
            x: heroPhase === "complete" ? "-30vw" : "0vw",
            opacity: heroPhase === "intro" ? 0 : (heroPhase === "complete" ? 0 : 1),
          }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 15,
          }}
          className="z-20 pointer-events-none"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="font-druk font-black text-[13vw] sm:text-[11vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] scale-y-[1.5] origin-right flex items-center"
            >
              {"PORT".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Center Breakthrough Anchor point: Renders Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-30">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: heroPhase === "intro" ? 0.9 : 1,
              opacity: heroPhase === "intro" ? 0 : 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative pointer-events-auto shrink-0"
          >
            <div className="relative h-[48vh] sm:h-[55vh] aspect-[4/5] border-[5px] border-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.18)] bg-black/40 group">
              
              <img
                src={mohanPortrait}
                alt="Mohan SEO — Mohan Kumar, Leading Professional SEO &amp; SMO Expert Portrait"
                className="w-full h-full object-cover object-top grayscale contrast-[1.45] brightness-[1.02] transition-all duration-700 group-hover:scale-[1.03]"
                loading="eager"
                // @ts-ignore
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />

              {/* Seamless linear gradient bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712]/90 via-[#030712]/40 to-transparent pointer-events-none z-20" />

              {/* Side-border linear gradients */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#030712]/30 to-transparent pointer-events-none z-20" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#030712]/30 to-transparent pointer-events-none z-20" />
              
              {/* Top delicate edge feathering */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030712]/20 to-transparent pointer-events-none z-20" />

            </div>

            {/* Unified Portfolio word appearing beautifully at the bottom of the image on mobile */}
            {heroPhase === "complete" && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center z-50 pointer-events-none"
              >
                <h1 className="font-druk font-black text-[12vw] sm:text-[10vw] tracking-wider leading-none text-white uppercase select-none drop-shadow-[0_15px_30px_rgba(0,242,254,0.35)] scale-y-[1.4] origin-bottom inline-block">
                  PORTFOLIO
                </h1>
              </motion.div>
            )}

          </motion.div>
        </div>

        {/* Right Flank of Text: "FOLIO" */}
        <motion.div
          animate={{
            x: heroPhase === "complete" ? "30vw" : "0vw",
            opacity: heroPhase === "intro" ? 0 : (heroPhase === "complete" ? 0 : 1),
          }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 15,
          }}
          className="z-20 pointer-events-none"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="font-druk font-black text-[13vw] sm:text-[11vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] scale-y-[1.5] origin-left flex items-center"
            >
              {"FOLIO".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </motion.div>

      </div>

      {/* DESKTOP CENTER OVERLAPPING CONTAINER: PREMIUM MASK REVEAL */}
      <div className="hidden md:flex relative w-full flex-1 items-center justify-center py-4 z-10 min-h-[75vh] md:min-h-[82vh] overflow-visible">
        
        {/* Left Flank of Text: "PORT" */}
        <motion.div
          animate={{
            x: heroPhase === "complete" ? -215 : 0,
            opacity: heroPhase === "intro" ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 15,
          }}
          className="z-20 pointer-events-none"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="font-druk font-black text-[11vw] xl:text-[10vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] scale-y-[1.5] origin-right flex items-center"
            >
              {"PORT".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Center Breakthrough Anchor point: Renders Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-30">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: heroPhase === "intro" ? 0.9 : 1,
              opacity: heroPhase === "intro" ? 0 : 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative pointer-events-auto shrink-0"
          >
            <div className="relative h-[55vh] md:h-[65vh] lg:h-[72vh] max-h-[620px] aspect-[4/5] border-[5px] border-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.18)] bg-black/40 group">
              
              <img
                src={mohanPortrait}
                alt="Mohan SEO — Mohan Kumar, Leading Professional SEO &amp; SMO Expert Portrait"
                className="w-full h-full object-cover object-top grayscale contrast-[1.45] brightness-[1.02] transition-all duration-700 group-hover:scale-[1.03]"
                loading="eager"
                // @ts-ignore
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />

              {/* Seamless linear gradient bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030712]/90 via-[#030712]/40 to-transparent pointer-events-none z-20" />

              {/* Side-border linear gradients */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#030712]/30 to-transparent pointer-events-none z-20" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#030712]/30 to-transparent pointer-events-none z-20" />
              
              {/* Top delicate edge feathering */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#030712]/20 to-transparent pointer-events-none z-20" />

            </div>
          </motion.div>
        </div>

        {/* Right Flank of Text: "FOLIO" */}
        <motion.div
          animate={{
            x: heroPhase === "complete" ? 215 : 0,
            opacity: heroPhase === "intro" ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 15,
          }}
          className="z-20 pointer-events-none"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="font-druk font-black text-[11vw] xl:text-[10vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] scale-y-[1.5] origin-left flex items-center"
            >
              {"FOLIO".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </motion.div>

      </div>

      {/* BOTTOM ACTION & INFORMATION BAR */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 z-20 pt-4 border-t border-white/[0.04] mt-4">
        
        {/* Bottom Left: Availability Indicator & Services quicklink */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: heroPhase === "intro" ? 0 : 1,
            x: heroPhase === "intro" ? -20 : 0,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
          animate={
            heroPhase === "intro"
              ? { opacity: 0 }
              : { y: [0, 8, 0], opacity: 0.4 }
          }
          transition={
            heroPhase === "intro"
              ? { duration: 0.2 }
              : { y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.5 } }
          }
          onClick={() => onBtnClick("about")}
          className="hidden md:flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-100 transition-opacity"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold">
            Explore Portfolio
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center">
            <div className="w-1 h-2 rounded-full bg-brand-cyan" />
          </div>
        </motion.div>

        {/* Bottom Right: Highlighted Resume & Contact CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: heroPhase === "intro" ? 0 : 1,
            x: heroPhase === "intro" ? 20 : 0,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          {/* Extremely highlighted, eye-catchy glowing Resume button */}
          <button
            onClick={() => window.print()}
            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-sans font-extrabold uppercase tracking-[0.12em] text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:shadow-[0_0_35px_rgba(0,242,254,0.75)] cursor-pointer overflow-visible"
            title="View or Print Resume PDF"
          >
            {/* Pulsing focal glow ring */}
            <span className="absolute -inset-[2.5px] rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple opacity-50 blur-[4px] animate-ping [animation-duration:2.5s] pointer-events-none" />
            
            <div className="relative flex items-center gap-2">
              <FileText className="w-4 h-4 text-black" />
              <span>Get Resume</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => onBtnClick("contact")}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-sans font-bold uppercase tracking-[0.12em] text-xs sm:text-sm hover:border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.03)] cursor-pointer"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
