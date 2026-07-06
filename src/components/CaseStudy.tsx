import { useState, ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, AlertTriangle, Search, Settings, FileText, Code, Link2, 
  Sparkles, Gauge, Database, ArrowUpRight, LineChart, TrendingUp,
  X, Maximize2
} from "lucide-react";

// @ts-ignore
import websitePreviewImg from "../assets/images/seo_case_study_website_preview_1783138866610.jpg";
// @ts-ignore
import acharyaGscImg from "../assets/images/regenerated_image_1783338179964.png";
// @ts-ignore
import hanishGscImg from "../assets/images/regenerated_image_1783322894982.png";
// @ts-ignore
import rankingsImg from "../assets/images/seo_case_study_rankings_1783138894670.jpg";
// @ts-ignore
import acharyaGaneshLogo from "../assets/images/acharya_ganesh_logo_1783166489996.jpg";
// @ts-ignore
import hanishBaggaLogo from "../assets/images/regenerated_image_1783337685641.png";
// @ts-ignore
import hanishBaggaWebPreviewImg from "../assets/images/hanish_web_preview_real_1783315371253.jpg";

interface Strategy {
  name: string;
  icon: ComponentType<any>;
}

interface ProjectData {
  id: string;
  title: string;
  logo: string;
  description: string;
  websitePreview: string;
  gsc: string;
  rankings: string;
  bottleneck: string;
  colorTheme: "cyan" | "purple";
  strategies: Strategy[];
  improvements: string[];
}

const PROJECTS: ProjectData[] = [
  {
    id: "acharya",
    title: "PROJECT 1 - ACHARYA GANESH",
    logo: acharyaGaneshLogo,
    description: "Custom organic keyword scaling, technical engine restructuring, and precise search engine ranking tracking.",
    websitePreview: websitePreviewImg,
    gsc: acharyaGscImg,
    rankings: rankingsImg,
    bottleneck: "Low organic visibility and poor keyword rankings were limiting website growth.",
    colorTheme: "cyan",
    strategies: [
      { name: "Technical SEO Audit", icon: Settings },
      { name: "On-Page SEO", icon: FileText },
      { name: "Meta Tags Optimization", icon: Code },
      { name: "Content Optimization", icon: Sparkles },
      { name: "Internal Linking", icon: Link2 },
      { name: "Schema Markup", icon: Code },
      { name: "Image SEO", icon: Sparkles },
      { name: "Core Web Vitals", icon: Gauge },
      { name: "XML Sitemap", icon: Database },
      { name: "Robots.txt Optimization", icon: Settings },
      { name: "Keyword Mapping", icon: Search },
      { name: "Google Search Console Monitoring", icon: LineChart },
      { name: "Keyword Ranking Improvement", icon: TrendingUp }
    ],
    improvements: [
      "Organic Traffic Increased",
      "Keywords Ranked Higher",
      "Better CTR",
      "More Impressions",
      "Faster Website",
      "Improved Core Web Vitals",
      "Better Crawlability",
      "Enhanced User Experience"
    ]
  },
  {
    id: "hanish",
    title: "PROJECT 2 - HANISH BAGGA",
    logo: hanishBaggaLogo,
    description: "Organic search visibility enhancement, high-impact content strategy, and authoritative link mapping.",
    websitePreview: hanishBaggaWebPreviewImg,
    gsc: hanishGscImg, // Separate GSC style chart for Hanish Bagga
    rankings: rankingsImg,
    bottleneck: "Stagnant search traffic and high competitive keyword difficulty in the professional niche.",
    colorTheme: "purple",
    strategies: [
      { name: "Niche Content Mapping", icon: FileText },
      { name: "Competitive Gap Analysis", icon: Search },
      { name: "Authoritative Link Strategy", icon: Link2 },
      { name: "Semantic Content Tuning", icon: Sparkles },
      { name: "Core Web Vitals Optimization", icon: Gauge },
      { name: "Structured Schema Markup", icon: Code },
      { name: "Metadata Restructuring", icon: Settings },
      { name: "Search Console Tracking", icon: LineChart },
      { name: "Performance Benchmarking", icon: TrendingUp }
    ],
    improvements: [
      "240% Click Growth",
      "Dominant Niche Share",
      "High Authority Backlinks",
      "Top-3 Rankings for Core Terms",
      "Reduced Bounce Rates",
      "Optimized Landing Pages",
      "Superior Domain Authority",
      "Increased Lead Conversions"
    ]
  }
];

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("acharya");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const currentProject = PROJECTS.find((p) => p.id === activeTab) || PROJECTS[0];

  return (
    <section id="case-study" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Star Overlay */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      
      {/* Glowing background shapes for premium look */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Dynamic Project Switcher */}
        <div className="text-left mb-12 overflow-visible py-4 border-b border-white/[0.04] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-druk font-black text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9.5vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-y-[1.5] origin-left inline-block">
              SEO CASE STUDY
            </h2>
          </div>

          {/* Premium Segmented Switcher */}
          <div className="relative flex p-1.5 bg-white/[0.02] border border-white/[0.05] rounded-2xl w-full md:w-auto max-w-md shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            {PROJECTS.map((proj) => {
              const isActive = activeTab === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveTab(proj.id)}
                  className={`relative flex-1 md:flex-none md:px-6 py-3 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-colors duration-300 z-10 ${
                    isActive ? "text-black" : "text-[var(--text-muted)] hover:text-white"
                  }`}
                  id={`project-tab-${proj.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute inset-0 bg-brand-cyan rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20">
                    {proj.id === "acharya" ? "ACHARYA GANESH" : "HANISH BAGGA"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Project Card Info Box */}
        <motion.div
          key={activeTab + "-info"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16 max-w-2xl bg-white/[0.01] border border-white/[0.03] p-4 sm:p-5 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]"
        >
          {/* Logo container */}
          <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)] shrink-0 transition-colors duration-300 group/logo ${
            currentProject.id === "hanish" ? "bg-white" : "bg-black/60"
          }`}>
            <img
              src={currentProject.logo}
              alt={`${currentProject.title} Logo`}
              className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/logo:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          {/* Text description */}
          <div className="space-y-1">
            <span className="font-mono text-[9px] text-brand-cyan uppercase tracking-widest font-semibold block">Case Study Project</span>
            <p className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
              {currentProject.title}
            </p>
            <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed max-w-md">
              {currentProject.description}
            </p>
          </div>
        </motion.div>

        {/* Interactive Case Study Columns with motion animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            
            {/* ==================== LEFT SIDE ==================== */}
            <div className="lg:col-span-6 space-y-8 lg:sticky lg:top-24">
              
              {/* 1) Website Preview */}
              <div
                className="relative group rounded-3xl overflow-hidden glass-panel border border-[var(--glass-border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,242,254,0.15)] hover:border-brand-cyan/30"
              >
                {/* Card top gradient header */}
                <div className="flex items-center justify-between mb-4 px-1 pb-2 border-b border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-main)] ml-1.5 tracking-wide">
                      Live Website Preview
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Inner preview frame */}
                <div 
                  className="relative rounded-xl overflow-hidden border border-white/5 bg-[var(--bg-card-heavy)] cursor-pointer group/preview shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(0,242,254,0.15)] transition-all duration-500"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Click to view full image"
                >
                  <img
                    src={currentProject.websitePreview}
                    alt={`${currentProject.title} Preview`}
                    className="w-full h-auto block transition-transform duration-500 group-hover/preview:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Premium overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(0,242,254,0.3)] transform scale-90 group-hover/preview:scale-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-[10px] tracking-wider text-white uppercase bg-black/40 px-2.5 py-1 rounded-md border border-white/5 shadow-md">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>

              {/* 2) Google Search Console Screenshot */}
              <div
                className="rounded-3xl overflow-hidden glass-panel border border-[var(--glass-border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(189,115,255,0.1)] hover:border-brand-purple/30"
              >
                <div className="flex items-center gap-2.5 mb-4 px-1 pb-2 border-b border-white/[0.04]">
                  <div className="w-6 h-6 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-main)] tracking-wide">
                    Google Search Console
                  </h3>
                </div>

                {/* Inner screenshot frame */}
                <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[var(--bg-card-heavy)]">
                  <img
                    src={currentProject.gsc}
                    alt="GSC Performance Chart"
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                  />
                  {/* Premium hover scanner line */}
                  <div className="absolute inset-x-0 h-[1.5px] bg-brand-cyan/40 shadow-[0_0_8px_#00F2FF] top-1/2 animate-pulse pointer-events-none" />
                </div>
              </div>

            </div>

            {/* ==================== RIGHT SIDE ==================== */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* 1) Key Challenge Card */}
              <div
                className="relative overflow-hidden rounded-3xl glass-panel-heavy border-l-4 border-l-amber-500 border-y border-r border-[var(--glass-border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-amber-500 font-bold block mb-1">
                      Primary Bottleneck
                    </span>
                    <h4 className="font-display font-bold text-sm text-[var(--text-main)] tracking-tight leading-relaxed">
                      {currentProject.bottleneck}
                    </h4>
                  </div>
                </div>
              </div>

              {/* 2) Key Strategies Checklist (Pairs/Grid Layout) */}
              <div
                className="rounded-3xl glass-panel border border-[var(--glass-border)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-5 border-b border-white/[0.04] pb-3">
                  <div className="w-5 h-5 rounded bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-mono text-[11px] font-black tracking-wider text-[var(--text-muted)] uppercase">
                    Proven Execution Strategies
                  </span>
                </div>

                {/* Grid layout for strategies */}
                <div className="grid grid-cols-2 gap-2.5">
                  {currentProject.strategies.map((strat, idx) => {
                    const IconComp = strat.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 bg-white/[0.01] border border-[var(--glass-border)] hover:border-brand-cyan/25 px-3 py-2.5 rounded-xl transition-all duration-300 group/item"
                      >
                        <div className="w-6 h-6 rounded-lg bg-brand-cyan/5 border border-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover/item:bg-brand-cyan/10 group-hover/item:border-brand-cyan/20 transition-colors">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-sans text-[11px] text-[var(--text-sub)] font-semibold tracking-wide truncate">
                          {strat.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3) Keyword Ranking Growth */}
              <div
                className="rounded-3xl overflow-hidden glass-panel border border-[var(--glass-border)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,242,254,0.1)] hover:border-brand-cyan/30"
              >
                <div className="flex items-center gap-2.5 mb-4 px-1 pb-2 border-b border-white/[0.04]">
                  <div className="w-6 h-6 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-main)] tracking-wide">
                    Keyword Ranking Growth
                  </h3>
                </div>

                {/* Inner Sheet rankings screenshot frame */}
                <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[var(--bg-card-heavy)]">
                  <img
                    src={currentProject.rankings}
                    alt="Keyword Rankings Tracking Spreadsheet"
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                  />
                  {/* Horizontal high-contrast glowing divider */}
                  <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent bottom-4 opacity-50" />
                </div>
              </div>

              {/* 4) Key Improvement Highlights */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold block px-1">
                  ✦ High-Impact Outcomes
                </span>
                
                <div className="grid grid-cols-2 gap-3.5">
                  {currentProject.improvements.map((imp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-center gap-3 bg-brand-cyan/[0.02] hover:bg-brand-cyan/[0.04] border border-brand-cyan/10 hover:border-brand-cyan/25 p-3.5 rounded-2xl transition-all duration-300 group/outcome"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover/outcome:scale-110 transition-transform">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="font-display text-[12px] font-bold text-[var(--text-main)] tracking-wide">
                        {imp}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-10 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox content */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-5xl max-h-[85vh] overflow-auto rounded-2xl border border-white/10 bg-black/80 shadow-[0_25px_60px_rgba(0,0,0,0.8)] scrollbar-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentProject.websitePreview}
                alt={`${currentProject.title} Full Preview`}
                className="w-full h-auto max-h-[80vh] object-contain block mx-auto"
                referrerPolicy="no-referrer"
              />
              {/* Info Banner inside Lightbox */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between gap-4 border-t border-white/5">
                <div>
                  <h4 className="font-display font-black text-sm text-white tracking-wide uppercase">
                    {currentProject.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[var(--text-muted)] mt-0.5">
                    {activeTab === "acharya" ? "www.acharyaganesh.com" : "www.hanishbagga.com"}
                  </p>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-4 py-2 bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/20 rounded-xl font-display font-bold text-[10px] tracking-wider text-brand-cyan uppercase transition-colors"
                >
                  Close View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
