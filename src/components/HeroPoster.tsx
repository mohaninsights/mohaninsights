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

// Generates randomized polygon shards for the stone-shattering breakthrough effect
const SHARDS = Array.from({ length: 28 }).map((_, i) => {
  const angle = (i / 28) * Math.PI * 2 + (Math.random() - 0.5) * 0.25;
  const distance = 180 + Math.random() * 260;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  return {
    id: i,
    x,
    y,
    rotate: (Math.random() - 0.5) * 360,
    scale: 0.5 + Math.random() * 1.3,
    size: 10 + Math.random() * 22,
    clipPath: [
      "polygon(50% 0%, 0% 100%, 100% 100%)",
      "polygon(0% 0%, 100% 0%, 50% 100%)",
      "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
      "polygon(0% 15%, 100% 0%, 85% 85%, 15% 100%)",
    ][Math.floor(Math.random() * 4)],
    color: [
      "bg-white",
      "bg-brand-cyan",
      "bg-brand-purple",
      "bg-gray-300",
      "bg-brand-cyan/85",
      "bg-brand-purple/85",
      "bg-gray-400/80",
    ][Math.floor(Math.random() * 7)],
  };
});

export default function HeroPoster({ onBtnClick }: HeroPosterProps) {
  const [phase, setPhase] = useState<"text" | "rumble" | "shatter">("text");

  useEffect(() => {
    // Stage 1: Display pure "PORTFOLIO" text first on load.
    const timer1 = setTimeout(() => {
      setPhase("rumble");
    }, 1300);

    // Stage 2: Create a tension-filled shake & crack rumble for 700ms, then shatter!
    const timer2 = setTimeout(() => {
      setPhase("shatter");
    }, 2000);

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
        
        {/* Visually hidden h1 for search crawler indexing & SXO best practice */}
        <h1 className="sr-only">Mohan SEO — Leading SEO &amp; SMO Expert Portfolio | Mohan Kumar</h1>

        <h2 className="font-bebas tracking-[0.08em] sm:tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple text-4xl sm:text-5xl md:text-6.5xl lg:text-7.5xl uppercase leading-none select-none drop-shadow-[0_4px_20px_rgba(0,242,254,0.15)] font-normal">
          SEO &amp; SMO EXECUTIVE
        </h2>
      </motion.div>

      {/* MOBILE CENTER OVERLAPPING PORTFOLIO CONTAINER: PREMIUM SHATTERING BREAKTHROUGH */}
      <div className="flex md:hidden relative w-full flex-1 items-center justify-center py-4 z-10 min-h-[60vh] sm:min-h-[70vh] overflow-visible">
        
        {/* Left Flank of Text: "PORT" */}
        <motion.div
          animate={{
            x: phase === "shatter" ? "-30vw" : "0vw",
            opacity: phase === "shatter" ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: phase === "shatter" ? 85 : 55,
            damping: phase === "shatter" ? 14 : 16,
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
              animate={phase === "rumble" ? {
                x: [0, -1.5, 1.5, -1, 1, -1.5, 1.5, 0],
                y: [0, 1, -1, 0.8, -0.8, 1, -1, 0],
              } : {}}
              transition={phase === "rumble" ? { duration: 0.5, repeat: Infinity } : {}}
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

        {/* Center Breakthrough Anchor point: Renders Image & Particles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-30">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: phase === "shatter" ? 1 : 0,
              opacity: phase === "shatter" ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 14,
              mass: 1.1,
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
            {phase === "shatter" && (
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

            {/* Shockwave Rings expanding outward on breakthrough */}
            {phase === "shatter" && (
              <>
                <motion.div
                  initial={{ scale: 0.2, opacity: 1 }}
                  animate={{ scale: 2.1, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 rounded-3xl border-4 border-brand-cyan pointer-events-none z-40"
                />
                <motion.div
                  initial={{ scale: 0.1, opacity: 0.8 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                  className="absolute inset-0 rounded-3xl border-2 border-brand-purple pointer-events-none z-40"
                />
              </>
            )}

            {/* High-quality flying shatter shards */}
            {phase === "shatter" && (
              <div className="absolute inset-0 pointer-events-none z-40">
                {SHARDS.map((shard) => (
                  <motion.div
                    key={shard.id}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 }}
                    animate={{
                      x: shard.x * 0.7, // scaled slightly smaller for mobile
                      y: shard.y * 0.7,
                      scale: 0,
                      opacity: 0,
                      rotate: shard.rotate,
                    }}
                    transition={{
                      duration: 1.1 + Math.random() * 0.4,
                      ease: [0.1, 0.8, 0.15, 1],
                      delay: Math.random() * 0.03,
                    }}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${shard.color} rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.15)]`}
                    style={{
                      width: shard.size * 0.8, // slightly smaller shards
                      height: shard.size * 0.8,
                      clipPath: shard.clipPath,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Flank of Text: "FOLIO" */}
        <motion.div
          animate={{
            x: phase === "shatter" ? "30vw" : "0vw",
            opacity: phase === "shatter" ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: phase === "shatter" ? 85 : 55,
            damping: phase === "shatter" ? 14 : 16,
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
              animate={phase === "rumble" ? {
                x: [0, 1.5, -1.5, 1, -1, 1.5, -1.5, 0],
                y: [0, -1, 1, -0.8, 0.8, -1, 1, 0],
              } : {}}
              transition={phase === "rumble" ? { duration: 0.5, repeat: Infinity } : {}}
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

        {/* Cyberpunk Neon cracks appearing across the text during the rumble phase */}
        {phase === "rumble" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.9, 0.4, 1, 0.5, 1] }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center mix-blend-screen"
          >
            <svg className="w-full h-full max-w-[280px]" viewBox="0 0 400 400">
              <path
                d="M 200 50 L 190 130 L 220 190 L 180 250 L 215 300 L 195 360"
                stroke="#00F2FF"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 190 130 L 130 110 L 90 140"
                stroke="#00F2FF"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 180 250 L 250 280 L 290 260"
                stroke="#8B5CF6"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.div>
        )}

      </div>

      {/* DESKTOP CENTER OVERLAPPING CONTAINER: PREMIUM SHATTERING BREAKTHROUGH (NO OVERLAP) */}
      <div className="hidden md:flex relative w-full flex-1 items-center justify-center py-4 z-10 min-h-[75vh] md:min-h-[82vh] overflow-visible">
        
        {/* Left Flank of Text: "PORT" */}
        <motion.div
          animate={{
            x: phase === "shatter" ? -215 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: phase === "shatter" ? 85 : 55,
            damping: phase === "shatter" ? 14 : 16,
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
              animate={phase === "rumble" ? {
                x: [0, -2, 2, -1, 1, -2, 2, 0],
                y: [0, 1.5, -1.5, 1, -1, 1.5, -1.5, 0],
              } : {}}
              transition={phase === "rumble" ? { duration: 0.5, repeat: Infinity } : {}}
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

        {/* Center Breakthrough Anchor point: Renders Image & Particles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-30">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: phase === "shatter" ? 1 : 0,
              opacity: phase === "shatter" ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 14,
              mass: 1.1,
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

            {/* Shockwave Rings expanding outward on breakthrough */}
            {phase === "shatter" && (
              <>
                <motion.div
                  initial={{ scale: 0.2, opacity: 1 }}
                  animate={{ scale: 2.3, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 rounded-3xl border-4 border-brand-cyan pointer-events-none z-40"
                />
                <motion.div
                  initial={{ scale: 0.1, opacity: 0.8 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                  className="absolute inset-0 rounded-3xl border-2 border-brand-purple pointer-events-none z-40"
                />
              </>
            )}

            {/* High-quality flying shatter shards */}
            {phase === "shatter" && (
              <div className="absolute inset-0 pointer-events-none z-40">
                {SHARDS.map((shard) => (
                  <motion.div
                    key={shard.id}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 }}
                    animate={{
                      x: shard.x,
                      y: shard.y,
                      scale: 0,
                      opacity: 0,
                      rotate: shard.rotate,
                    }}
                    transition={{
                      duration: 1.1 + Math.random() * 0.4,
                      ease: [0.1, 0.8, 0.15, 1],
                      delay: Math.random() * 0.03,
                    }}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${shard.color} rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.15)]`}
                    style={{
                      width: shard.size,
                      height: shard.size,
                      clipPath: shard.clipPath,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Flank of Text: "FOLIO" */}
        <motion.div
          animate={{
            x: phase === "shatter" ? 215 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: phase === "shatter" ? 85 : 55,
            damping: phase === "shatter" ? 14 : 16,
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
              animate={phase === "rumble" ? {
                x: [0, 2, -2, 1, -1, 2, -2, 0],
                y: [0, -1.5, 1.5, -1, 1, -1.5, 1.5, 0],
              } : {}}
              transition={phase === "rumble" ? { duration: 0.5, repeat: Infinity } : {}}
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

        {/* Cyberpunk Neon cracks appearing across the text during the rumble phase */}
        {phase === "rumble" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.9, 0.4, 1, 0.5, 1] }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center mix-blend-screen"
          >
            <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 400">
              <path
                d="M 400 50 L 390 130 L 420 190 L 380 250 L 415 300 L 395 360"
                stroke="#00F2FF"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 390 130 L 310 110 L 250 140"
                stroke="#00F2FF"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 380 250 L 470 280 L 530 260"
                stroke="#8B5CF6"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.div>
        )}

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

        {/* Bottom Right: Highlighted Resume & Contact CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
