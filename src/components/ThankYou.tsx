import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

interface ThankYouProps {
  onLinkClick: (sectionId: string) => void;
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

export default function ThankYou({ onLinkClick }: ThankYouProps) {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="thank-you" className="py-16 sm:py-24 relative overflow-hidden border-t border-white/[0.04] bg-[#030612]/30">
      {/* Background glowing shapes similar to About section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - STYLED AND CENTERED EXACTLY LIKE PORTFOLIO */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 overflow-visible py-4 border-b border-white/[0.04] pb-6 flex items-center justify-center select-none"
        >
          <h2 className="font-druk font-black text-[24vw] sm:text-[22vw] md:text-[22vw] lg:text-[22vw] xl:text-[22vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] scale-y-[1.5] origin-bottom flex items-center justify-between w-full overflow-visible py-2 px-2 sm:px-4 md:px-6">
            {"THANK YOU".split("").map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          {/* Heart/Compass icon accent */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 mb-8 shadow-inner">
            <svg 
              className="w-8 h-8 text-brand-cyan animate-pulse" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>

          <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center mb-6 bg-gradient-to-r from-white via-white to-brand-cyan bg-clip-text text-transparent">
            Thanks for visiting my portfolio.
          </h3>
          
          <p className="font-sans text-base sm:text-lg text-[var(--text-sub)] leading-relaxed max-w-xl mx-auto mb-10">
            I'm always open to new digital marketing collaborations, technical SEO audits, and active SMO executive challenges. Let's build something exceptional.
          </p>

          {/* Quick Info details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col items-center hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">
              <span className="font-mono text-[9px] uppercase text-gray-500 tracking-widest mb-1">Email Address</span>
              <a href="mailto:mohankaka172004@gmail.com" className="font-display text-sm font-bold text-white hover:text-brand-cyan transition-colors">
                mohankaka172004@gmail.com
              </a>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col items-center hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">
              <span className="font-mono text-[9px] uppercase text-gray-500 tracking-widest mb-1">Direct Line</span>
              <a href="tel:+918585974338" className="font-display text-sm font-bold text-white hover:text-brand-purple transition-colors">
                +91 8585974338
              </a>
            </div>
          </div>

          {/* Interactive Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => onLinkClick("contact")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-display text-xs tracking-wider font-semibold text-[var(--bg-main)] bg-[var(--text-main)] hover:bg-brand-cyan hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              Get In Touch
            </button>
            <button
              onClick={scrollToTop}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-display text-xs tracking-wider font-semibold text-[var(--text-main)] glass-panel hover:bg-white/[0.05] hover:scale-105 transition-all duration-300 border border-white/10 cursor-pointer flex items-center justify-center gap-2 group"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Copyright line */}
          <div className="pt-8 border-t border-white/[0.04] text-center">
            <p className="font-sans text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
              &copy; {currentYear} MohanInsights. All Rights Reserved.
            </p>
            <p className="font-sans text-[9px] text-gray-600 mt-1">
              Optimized for clean indexable architecture, interactive performance, and fast viewport loading.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
