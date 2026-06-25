import { motion } from "motion/react";
import { Check, MapPin, Globe, Calendar, ArrowRight, Zap, Award, Search, Percent } from "lucide-react";

interface AboutProps {
  onBtnClick: (sectionId: string) => void;
}

export default function About({ onBtnClick }: AboutProps) {
  const details = [
    { label: "Location", value: "India", icon: MapPin },
    { label: "Languages", value: "English, Hindi", icon: Globe },
    { label: "Availability", value: "Open To Work", icon: Calendar, highlight: true },
  ];

  const specializations = [
    "On-Page SEO Optimization",
    "Off-Page SEO & Link Building",
    "Technical SEO Audits",
    "Local SEO & Google Business Profile",
    "Content Strategy & Optimization",
    "Social Media Optimization",
    "Schema Markup Implementation",
    "Google Analytics & Search Console",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glowing shapes */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center lg:text-left mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-3">
            About MohanInsights
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight max-w-3xl">
            Driving Digital Growth Through Strategic SEO &amp; SMO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Premium Stylized Analytics Console */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Card Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                  Live SEO Diagnostics
                </span>
              </div>

              {/* Stats visual */}
              <div className="space-y-5">
                
                {/* Score Dial */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="relative w-14 h-14 rounded-full border-2 border-brand-cyan/30 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-cyan animate-spin" />
                    <span className="font-display font-bold text-base text-brand-cyan">99%</span>
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-semibold text-white">SEO Health Score</h4>
                    <p className="font-sans text-[11px] text-gray-400 mt-0.5">Optimized site performance &amp; structure</p>
                  </div>
                </div>

                {/* Growth Chart bar visualization */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-display text-xs font-semibold text-white">Organic Monthly Traffic</span>
                    <span className="font-mono text-xs text-emerald-400 font-medium">+248% Growth</span>
                  </div>
                  
                  {/* Grid bars */}
                  <div className="flex items-end gap-2.5 h-20 pt-2 px-1">
                    {[35, 45, 40, 60, 55, 75, 70, 95, 90, 100].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.05 }}
                          className={`w-full rounded-t-sm ${
                            idx === 9 
                              ? "bg-gradient-to-t from-brand-purple to-brand-cyan shadow-[0_0_10px_rgba(0,242,254,0.4)]" 
                              : "bg-white/[0.08]"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extra parameters list */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.03] text-center">
                    <span className="block font-mono text-[10px] text-gray-500 uppercase">Crawl Index Rate</span>
                    <span className="font-display font-semibold text-sm text-white mt-1 block">99.8%</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.03] text-center">
                    <span className="block font-mono text-[10px] text-gray-500 uppercase">CWV Diagnostic</span>
                    <span className="font-display font-semibold text-sm text-emerald-400 mt-1 block">PASS</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Column 2: Bio Description & Details */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            
            <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a dedicated SEO &amp; SMO Expert helping businesses improve search rankings, organic traffic, and online visibility through proven optimization strategies.
            </p>
            
            <p className="font-sans text-base text-gray-400 mt-4 leading-relaxed">
              My approach combines in-depth technical audits, robust content strategies, rigorous competitor research, and data-driven decision making to deliver high-converting organic results.
            </p>

            {/* Profile Info Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 py-6 border-y border-white/[0.06]">
              {details.map((det, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-brand-cyan">
                    <det.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-wider">{det.label}</span>
                    <span className={`font-display text-xs font-semibold ${det.highlight ? "text-brand-cyan" : "text-white"}`}>
                      {det.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Specializations list */}
            <h3 className="font-display font-bold text-sm text-white tracking-widest uppercase mt-8 mb-4">
              Core Specializations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specializations.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-4 h-4 rounded-md bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan transition-colors">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="font-sans text-sm text-gray-300 group-hover:text-white transition-colors">
                    {spec}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
              <button
                onClick={() => onBtnClick("contact")}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-display text-xs tracking-wider font-semibold text-black bg-white hover:bg-brand-cyan hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onBtnClick("services")}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-display text-xs tracking-wider font-semibold text-white glass-panel hover:bg-white/[0.05] hover:scale-105 transition-all duration-300 border border-white/10 cursor-pointer"
              >
                My Services
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
