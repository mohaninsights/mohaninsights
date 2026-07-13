import { ArrowRight, Sparkles, FileText, ArrowUpRight } from "lucide-react";
// @ts-ignore
import mohanPortrait from "../assets/images/mohan_portrait_1782472920337_1782473530886.jpg";

interface HeroPosterProps {
  onBtnClick: (sectionId: string) => void;
}

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
      <div className="w-full text-center z-10 flex flex-col items-center gap-1.5">
        <div className="flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
          <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase font-bold">
            Live Portfolio Hub
          </span>
        </div>
        
        {/* Visually hidden h1 for search crawler indexing & SXO best practice */}
        <h1 className="sr-only">Mohan SEO — Leading SEO &amp; SMO Expert Portfolio | Mohan Kumar</h1>

        <h2 className="font-bebas tracking-[0.08em] sm:tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple text-4xl sm:text-5xl md:text-6.5xl lg:text-7.5xl uppercase leading-none select-none drop-shadow-[0_4px_20px_rgba(0,242,254,0.15)] font-normal">
          SEO &amp; SMO EXECUTIVE
        </h2>
      </div>

      {/* CENTERED PORTFOLIO CONTENT (UNIFIED FOR ALL SCREEN SIZES) */}
      <div className="flex flex-col items-center justify-center flex-1 w-full z-10 py-6 overflow-visible">
        
        {/* Centered Image Container (Increased size, border border-white/10, glow shadow) */}
        <div className="relative pointer-events-auto shrink-0 transition-transform duration-500">
          <div className="relative h-[52vh] sm:h-[60vh] md:h-[68vh] lg:h-[76vh] max-h-[680px] aspect-[4/5] border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,242,254,0.15)] bg-black/40 group">
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
            <div className="absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-[#030712]/90 via-[#030712]/40 to-transparent pointer-events-none z-20" />

            {/* Side-border linear gradients */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-16 bg-gradient-to-r from-[#030712]/30 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-16 bg-gradient-to-l from-[#030712]/30 to-transparent pointer-events-none z-20" />
            
            {/* Top delicate edge feathering */}
            <div className="absolute inset-x-0 top-0 h-16 md:h-20 bg-gradient-to-b from-[#030712]/20 to-transparent pointer-events-none z-20" />
          </div>
        </div>

        {/* Unified "PORTFOLIO" word positioned directly below the image, stretching perfectly to the edges */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none mt-4 sm:mt-6 overflow-hidden">
          <h1 className="font-druk font-black text-[27vw] sm:text-[24vw] md:text-[19vw] lg:text-[17vw] xl:text-[16vw] tracking-tighter leading-none text-white uppercase select-none drop-shadow-[0_15px_30px_rgba(0,242,254,0.4)] scale-y-[1.3] origin-bottom inline-block w-full text-center whitespace-nowrap">
            PORTFOLIO
          </h1>
        </div>
      </div>

      {/* BOTTOM ACTION & INFORMATION BAR */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 z-20 pt-4 border-t border-white/[0.04] mt-4">
        
        {/* Bottom Left: Availability Indicator & Services quicklink */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
              Open to New Projects
            </span>
          </div>
          <span className="font-sans text-[11px] text-[var(--text-muted)] font-semibold tracking-wide">
            SEO &amp; SMO optimization strategist
          </span>
        </div>

        {/* Center: Explore Down Arrow Badge */}
        <div
          onClick={() => onBtnClick("about")}
          className="hidden md:flex flex-col items-center gap-1.5 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold">
            Explore Portfolio
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center">
            <div className="w-1 h-2 rounded-full bg-brand-cyan" />
          </div>
        </div>

        {/* Bottom Right: Highlighted Resume & Contact CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          {/* Extremely highlighted, eye-catchy glowing Resume button */}
          <button
            onClick={() => window.print()}
            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-sans font-extrabold uppercase tracking-[0.12em] text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:shadow-[0_0_35px_rgba(0,242,254,0.75)] cursor-pointer overflow-visible"
            title="View or Print Resume PDF"
          >
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
        </div>

      </div>
    </section>
  );
}
