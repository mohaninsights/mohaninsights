import { motion } from "motion/react";
import { Check, Calendar, Target, Zap, Award, BookOpen, TrendingUp } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logoType: "acharya" | "hanish" | "thinkbizz";
  responsibilities: string[];
  glowClass: string;
  logoGlow: string;
  caseStudy: {
    title: string;
    tag: string;
    metrics: { value: string; label: string }[];
    highlight: string;
    accentColor: string;
  };
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Acharya Ganesh",
      role: "SEO Executive",
      period: "August 2025 to Present",
      logoType: "acharya",
      glowClass: "hover:shadow-[0_0_50px_rgba(52,211,153,0.12)] hover:border-emerald-500/20",
      logoGlow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]",
      responsibilities: [
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Competitor Research",
        "Content Optimization",
        "Website Speed Optimization",
        "Core Web Vitals Optimization",
        "Schema Markup Implementation",
        "Google Search Console Management",
        "Google Analytics (GA4)",
        "SEO Audits & Reporting"
      ],
      caseStudy: {
        title: "Local Map Dominance & Consulting Inquiries",
        tag: "Local SEO & Traffic Boost",
        metrics: [
          { value: "+320%", label: "Inquiry Growth" },
          { value: "Top 3", label: "Map Pack Position" },
          { value: "15k+", label: "Monthly Impressions" }
        ],
        highlight: "Reconfigured entire Google Business Profiles, resolved critical NAP inconsistencies, structured local schemas, and launched content engagement loops across social channels for geographic dominance.",
        accentColor: "text-emerald-400"
      }
    },
    {
      company: "Hanish Bagga",
      role: "SEO Executive",
      period: "August 2025 to Present",
      logoType: "hanish",
      glowClass: "hover:shadow-[0_0_50px_rgba(245,158,11,0.12)] hover:border-amber-500/20",
      logoGlow: "shadow-[0_0_15px_rgba(245,158,11,0.3)]",
      responsibilities: [
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Competitor Research",
        "Content Optimization",
        "Website Speed Optimization",
        "Core Web Vitals Optimization",
        "Schema Markup Implementation",
        "Google Search Console Management",
        "Google Analytics (GA4)",
        "SEO Audits & Reporting"
      ],
      caseStudy: {
        title: "Core Web Vitals & Web Speed Repair",
        tag: "Technical Audit & Speed Optimization",
        metrics: [
          { value: "45%", label: "Load Time Reduced" },
          { value: "89/100", label: "Lighthouse Mobile" },
          { value: "2.4x", label: "Conversion Lift" }
        ],
        highlight: "Eliminated render-blocking assets, compressed media, lazy-loaded interactive scripts, fixed crawl errors, and resolved indexation bottlenecks to boost crawling efficiency.",
        accentColor: "text-amber-400"
      }
    },
    {
      company: "ThinkBizz Hightech",
      role: "SEO Intern",
      period: "December 2024 to June 2025",
      logoType: "thinkbizz",
      glowClass: "hover:shadow-[0_0_50px_rgba(139,92,246,0.12)] hover:border-purple-500/20",
      logoGlow: "shadow-[0_0_15px_rgba(139,92,246,0.3)]",
      responsibilities: [
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Keyword Research",
        "Content Optimization"
      ],
      caseStudy: {
        title: "Search Visibility & Content Indexation Loop",
        tag: "Search Authority & Indexation",
        metrics: [
          { value: "+180%", label: "Organic Visibility" },
          { value: "100%", label: "Indexation Rate" },
          { value: "+60%", label: "Organic CTR Boost" }
        ],
        highlight: "Conducted high-value competitor keyword gap audits, streamlined page hierarchy, resolved indexation blocks, and launched highly optimized informational schemas to win quick search rankings.",
        accentColor: "text-purple-400"
      }
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-3">
            Career Timeline
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight">
            Professional Experience
          </h2>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-3 leading-relaxed">
            Proven tracking of planning organic search visibility, tuning webpage structures, and managing corporate search engine profiles.
          </p>
        </div>

        {/* Stacking Card List Layout */}
        <div className="max-w-5xl mx-auto relative space-y-8 pb-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`glass-panel border border-[var(--glass-border)] bg-[var(--bg-card)] rounded-3xl p-6 sm:p-10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ${exp.glowClass} sticky`}
              style={{
                top: `${80 + idx * 24}px`,
                zIndex: idx + 10,
              }}
            >
              {/* Subtle overlay shading to create beautiful contrast when stacked */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-black/[0.08] pointer-events-none" />
              
              {/* Top gradient highlight bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-purple to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-stretch relative z-10">
                
                {/* Left Side: Brand Panel */}
                <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left justify-center py-2">
                  
                  {/* Styled Logo Box representing the Image Logos */}
                  <div className={`w-24 h-24 rounded-2xl bg-white p-1 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${exp.logoGlow}`}>
                    {exp.logoType === "acharya" && (
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="46" stroke="#78350F" strokeWidth="1.2" strokeDasharray="3 2"/>
                        <circle cx="50" cy="50" r="41" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5"/>
                        <circle cx="50" cy="50" r="32" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 1"/>
                        {/* Saint silhouette */}
                        <path d="M50 30C52.2 30 53.5 31.8 53.5 34C53.5 36.2 51.8 38 50 38C48.2 38 46.5 36.2 46.5 34C46.5 31.8 47.8 30 50 30Z" fill="#B45309"/>
                        <path d="M39 64C39 56.5 43.5 51 50 51C56.5 51 61 56.5 61 64H39Z" fill="#D97706"/>
                        <path d="M43 54.5C45 51.5 47.5 49 50 49C52.5 49 55 51.5 57 54.5" stroke="#B45309" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M25 68C35 71 65 71 75 68" stroke="#78350F" strokeWidth="1.8" strokeLinecap="round"/>
                        <text x="50" y="78" textAnchor="middle" fill="#78350F" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">Acharya Ganesh</text>
                        <text x="50" y="85" textAnchor="middle" fill="#B45309" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">जो सही राह दिखाए</text>
                      </svg>
                    )}

                    {exp.logoType === "hanish" && (
                      <div className="flex flex-col items-center justify-center w-full h-full text-center">
                        <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none">HB</span>
                        <span className="text-[7.5px] font-black text-gray-800 tracking-widest uppercase mt-1">Hanish</span>
                        <span className="text-[7.5px] font-black text-gray-500 tracking-widest uppercase leading-none">Bagga</span>
                      </div>
                    )}

                    {exp.logoType === "thinkbizz" && (
                      <div className="flex flex-col items-center justify-center w-full h-full text-center p-1">
                        <div className="font-sans font-black text-sm text-gray-900 tracking-tight flex items-center justify-center gap-0.5">
                          <span>Think</span>
                          <span className="text-purple-600">Biz</span>
                        </div>
                        <div className="h-[1px] w-14 bg-gray-200 my-1" />
                        <span className="text-[6.5px] font-mono font-black text-amber-500 tracking-widest uppercase leading-none">HIGH TECH</span>
                      </div>
                    )}
                  </div>

                  {/* Company Title */}
                  <h3 className="font-display font-black text-2xl text-[var(--text-main)] mt-5 tracking-tight group-hover:text-brand-cyan transition-colors duration-300">
                    {exp.company}
                  </h3>

                  {/* Meta Details */}
                  <div className="mt-4 space-y-1.5 w-full text-center md:text-left">
                    <div className="flex flex-col sm:flex-row md:flex-col sm:justify-center md:items-start sm:gap-2 md:gap-0 font-sans text-xs text-[var(--text-muted)]">
                      <span className="font-mono text-[10px] text-brand-purple uppercase tracking-wider font-semibold">Designation:</span>
                      <span className="text-[var(--text-sub)] font-bold sm:mt-0.5">{exp.role}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col sm:justify-center md:items-start sm:gap-2 md:gap-0 font-sans text-xs text-[var(--text-muted)] mt-2">
                      <span className="font-mono text-[10px] text-brand-cyan uppercase tracking-wider font-semibold">Duration:</span>
                      <span className="text-[var(--text-sub)] font-bold sm:mt-0.5">{exp.period}</span>
                    </div>
                  </div>

                </div>

                {/* Vertical Divider (Desktop Only) */}
                <div className="hidden md:block w-[1px] bg-gradient-to-b from-[var(--glass-border)] via-[var(--glass-border)] to-transparent" />

                {/* Right Side: Key Responsibilities Grid/List */}
                <div className="flex-1 flex flex-col justify-center relative z-10">
                  
                  {/* Header */}
                  <div className="flex items-center gap-2.5 mb-4 border-b border-white/[0.04] pb-3">
                    <div className="w-5 h-5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="font-mono text-[11px] font-black tracking-wider text-[var(--text-muted)] uppercase">
                      Key Responsibilities
                    </span>
                  </div>

                  {/* Render 2-column bullet layout for Acharya / Hanish, or full-width outline row layout for ThinkBizz */}
                  {exp.logoType === "thinkbizz" ? (
                    <div className="grid grid-cols-2 gap-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center gap-3 bg-white/[0.01] border border-[var(--glass-border)] hover:border-purple-500/20 px-4 py-3 rounded-xl transition-all duration-300 group/item"
                        >
                          <div className="w-4 h-4 rounded-full border border-emerald-400/60 flex items-center justify-center flex-shrink-0 bg-emerald-500/5 group-hover/item:border-emerald-400 transition-colors">
                            <Check className="w-2.5 h-2.5 text-emerald-400" />
                          </div>
                          <span className="font-sans text-xs text-[var(--text-sub)] font-semibold tracking-wide">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center gap-3 bg-white/[0.01] border border-[var(--glass-border)] hover:border-emerald-500/20 px-4 py-3 rounded-xl transition-all duration-300 group/item"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)] flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <span className="font-sans text-xs text-[var(--text-sub)] font-semibold tracking-wide">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>

              {/* Seamless Case Study Integration Directly Inside Existing Card */}
              {exp.caseStudy && (
                <div className="mt-8 pt-6 border-t border-dashed border-[var(--glass-border)] relative z-10">
                  <div className="flex flex-col lg:flex-row items-stretch gap-6">
                    
                    {/* Left Mini Stats Panel */}
                    <div className="w-full lg:w-[240px] flex-shrink-0 flex flex-col justify-between">
                      <div>
                        <span className={`font-mono text-[9px] uppercase tracking-wider font-extrabold ${exp.caseStudy.accentColor}`}>
                          ✦ Active Case Outcome
                        </span>
                        <h4 className="font-display font-bold text-sm text-[var(--text-main)] mt-1 tracking-tight">
                          {exp.caseStudy.title}
                        </h4>
                      </div>
                      <span className="font-sans text-[10px] text-[var(--text-muted)] mt-1.5 block">
                        Category: {exp.caseStudy.tag}
                      </span>
                    </div>

                    {/* Divider line for desktop */}
                    <div className="hidden lg:block w-[1px] bg-[var(--glass-border)]" />

                    {/* Center stats figures */}
                    <div className="flex-1 grid grid-cols-3 gap-3 bg-white/[0.01] border border-[var(--glass-border)] p-3 rounded-2xl items-center">
                      {exp.caseStudy.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className={`font-display font-black text-sm sm:text-base tracking-tight ${exp.caseStudy.accentColor}`}>
                            {metric.value}
                          </div>
                          <div className="font-sans text-[8px] uppercase tracking-wider text-[var(--text-muted)] font-bold mt-0.5 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right detail statement */}
                    <div className="flex-1 flex items-center bg-white/[0.01] border border-[var(--glass-border)] px-4 py-3 rounded-2xl">
                      <p className="font-sans text-xs text-[var(--text-sub)] leading-relaxed italic">
                        &ldquo;{exp.caseStudy.highlight}&rdquo;
                      </p>
                    </div>

                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
