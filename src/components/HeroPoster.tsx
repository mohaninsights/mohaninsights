import { ArrowRight, Sparkles, FileText, ArrowUpRight } from "lucide-react";
// @ts-ignore
import mohanPortrait from "../assets/images/mohan_portrait_1782472920337_1782473530886.jpg";

interface HeroPosterProps {
  onBtnClick: (sectionId: string) => void;
  onResumeClick?: () => void;
}

export default function HeroPoster({ onBtnClick, onResumeClick }: HeroPosterProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#030712] flex flex-col justify-between items-center pt-24 pb-10 overflow-hidden select-none"
    >
      {/* Premium subtle background glow matching existing style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-y-0 left-10 w-[1px] bg-white/[0.01] pointer-events-none" />
      <div className="absolute inset-y-0 right-10 w-[1px] bg-white/[0.01] pointer-events-none" />

      {/* ========================================================= */}
      {/* MOBILE & TABLET VIEW (lg:hidden) — EXACT EXISTING UNTOUCHED LAYOUT */}
      {/* ========================================================= */}
      <div className="lg:hidden flex flex-col justify-between items-center w-full flex-1 z-10">
        
        {/* TOP HEADER STATUS */}
        <div className="w-full text-center z-10 flex flex-col items-center gap-1.5 px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase font-bold">
              Live Portfolio Hub
            </span>
          </div>
          
          <h1 className="sr-only">Mohan SEO — Leading SEO Expert Portfolio | Mohan Kumar</h1>

          <h2 className="font-bebas tracking-[0.08em] sm:tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple text-4xl sm:text-5xl uppercase leading-none select-none drop-shadow-[0_4px_20px_rgba(0,242,254,0.15)] font-normal">
            SEO EXECUTIVE
          </h2>
        </div>

        {/* CENTERED PORTFOLIO CONTENT */}
        <div className="flex flex-col items-center justify-center flex-1 w-full z-10 py-6 overflow-visible">
          
          <div className="relative pointer-events-auto shrink-0 transition-transform duration-500">
            <div className="relative h-[50vh] sm:h-[56vh] max-h-[640px] aspect-[4/5] border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,242,254,0.15)] bg-black/40 group">
              <img
                src={mohanPortrait}
                alt="Mohan SEO — Mohan Kumar, Leading Professional SEO Expert Portrait"
                className="w-full h-full object-cover object-top grayscale contrast-[1.45] brightness-[1.02] transition-all duration-700 group-hover:scale-[1.03]"
                loading="eager"
                // @ts-ignore
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712]/90 via-[#030712]/40 to-transparent pointer-events-none z-20" />
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#030712]/30 to-transparent pointer-events-none z-20" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#030712]/30 to-transparent pointer-events-none z-20" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030712]/20 to-transparent pointer-events-none z-20" />
            </div>
          </div>

          <div className="w-full text-center z-20 pointer-events-none mt-6 sm:mt-8 overflow-visible">
            <div className="w-full max-w-full overflow-hidden px-0">
              <svg viewBox="0 0 1000 120" className="w-full h-auto select-none overflow-visible leading-none">
                <text
                  x="500"
                  y="110"
                  textAnchor="middle"
                  textLength="1000"
                  lengthAdjust="spacingAndGlyphs"
                  className="font-druk font-black fill-white uppercase drop-shadow-[0_10px_20px_rgba(0,242,254,0.35)]"
                  style={{ fontSize: '135px' }}
                >
                  PORTFOLIO
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION & INFORMATION BAR */}
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 z-20 pt-4 border-t border-white/[0.04] mt-4 px-4 sm:px-6">
          
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Open to New Projects
              </span>
            </div>
            <span className="font-sans text-[11px] text-[var(--text-muted)] font-semibold tracking-wide">
              SEO optimization strategist
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => onResumeClick?.()}
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-sans font-extrabold uppercase tracking-[0.12em] text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:shadow-[0_0_35px_rgba(0,242,254,0.75)] cursor-pointer overflow-visible"
              title="View & Download Mohan Kumar's Resume"
            >
              {/* Premium Yellow Pill Status Indicator */}
              <div className="absolute -top-6.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FACC15] text-black font-mono text-[9px] font-bold uppercase tracking-wider shadow-[0_2px_12px_rgba(250,204,21,0.4)] border border-black/10 pointer-events-none whitespace-nowrap z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-ping inline-block mr-0.5" />
                <span>AVAILABLE FOR HIRE</span>
                <span className="inline-block animate-bounce text-[10px] font-black leading-none [animation-duration:1.4s]">↓</span>
              </div>

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
      </div>

      {/* ========================================================= */}
      {/* DESKTOP VIEW (hidden lg:flex) — SIDE-BY-SIDE IN FIRST VIEWPORT */}
      {/* ========================================================= */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-7xl mx-auto px-8 gap-12 flex-1 z-10 py-2 my-auto">
        
        {/* LEFT COLUMN: Profile Image */}
        <div className="w-5/12 flex items-center justify-center shrink-0">
          <div className="relative w-full max-w-[420px] aspect-[4/5] max-h-[560px] border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,242,254,0.18)] bg-black/40 group">
            <img
              src={mohanPortrait}
              alt="Mohan SEO — Mohan Kumar, Leading Professional SEO Expert Portrait"
              className="w-full h-full object-cover object-top grayscale contrast-[1.45] brightness-[1.02] transition-all duration-700 group-hover:scale-[1.03]"
              loading="eager"
              // @ts-ignore
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />

            {/* Side-border linear gradients */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030712]/90 via-[#030712]/40 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#030712]/30 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#030712]/30 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#030712]/20 to-transparent pointer-events-none z-20" />
          </div>
        </div>

        {/* RIGHT COLUMN: Text & Actions */}
        <div className="w-7/12 flex flex-col justify-center items-start text-left space-y-6">
          
          {/* Live Portfolio Hub Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-[0_0_15px_rgba(0,242,254,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[11px] text-brand-cyan tracking-widest uppercase font-bold">
              Live Portfolio Hub
            </span>
          </div>

          {/* SEO EXECUTIVE Heading */}
          <div className="space-y-1">
            <h1 className="sr-only">Mohan SEO — Leading SEO Expert Portfolio | Mohan Kumar</h1>
            <h2 className="font-bebas tracking-[0.06em] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple text-6xl xl:text-7.5xl uppercase leading-none select-none drop-shadow-[0_4px_25px_rgba(0,242,254,0.2)] font-normal">
              SEO EXECUTIVE
            </h2>
          </div>

          {/* PORTFOLIO SVG Text */}
          <div className="w-full max-w-xl pointer-events-none overflow-visible">
            <svg viewBox="0 0 1000 130" className="w-full h-auto select-none overflow-visible leading-none">
              <text
                x="0"
                y="110"
                textAnchor="start"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                className="font-druk font-black fill-white uppercase drop-shadow-[0_10px_25px_rgba(0,242,254,0.35)]"
                style={{ fontSize: '135px' }}
              >
                PORTFOLIO
              </text>
            </svg>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-3 pt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-gray-300 font-bold">
                Open to New Projects
              </span>
              <span className="text-gray-600">•</span>
              <span className="font-sans text-xs text-[var(--text-muted)] font-semibold tracking-wide">
                SEO optimization strategist
              </span>
            </div>
          </div>

          {/* Both Action Buttons Side-By-Side */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => onResumeClick?.()}
              className="group relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-sans font-extrabold uppercase tracking-[0.12em] text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:shadow-[0_0_40px_rgba(0,242,254,0.8)] cursor-pointer overflow-visible"
              title="View & Download Mohan Kumar's Resume"
            >
              {/* Premium Yellow Pill Status Indicator */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FACC15] text-black font-mono text-[9.5px] font-bold uppercase tracking-wider shadow-[0_2px_14px_rgba(250,204,21,0.45)] border border-black/10 pointer-events-none whitespace-nowrap z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-ping inline-block" />
                <span>AVAILABLE FOR HIRE</span>
                <span className="inline-block animate-bounce text-[11px] font-black leading-none [animation-duration:1.4s]">↓</span>
              </div>

              <FileText className="w-4 h-4 text-black" />
              <span>Get Resume</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onBtnClick("contact")}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border-2 border-white/40 text-white font-sans font-bold uppercase tracking-[0.12em] text-xs sm:text-sm hover:border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

