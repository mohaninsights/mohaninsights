import { motion } from "motion/react";
import { Check, ClipboardCheck, ArrowUpRight, ShieldCheck, Zap, Crosshair } from "lucide-react";

interface FreeAuditProps {
  onAuditClick: () => void;
}

export default function FreeAudit({ onAuditClick }: FreeAuditProps) {
  const auditPoints = [
    { text: "Website SEO Analysis", desc: "Detailed inspection of meta tags, header hierarchies, image alt tags, and indexation rates." },
    { text: "Technical SEO Audit", desc: "Inspection of XML sitemaps, robots.txt, schema graph accuracy, and server responses." },
    { text: "Core Web Vitals Review", desc: "Loading speed benchmarks including LCP, FID, and CLS scores across desktop and mobile." },
    { text: "Keyword Opportunity Report", desc: "Identifying high-volume, low-competition keywords ready to dominate." },
    { text: "Competitor Snapshot", desc: "In-depth traffic and backlink overview of your top 3 digital market competitors." },
    { text: "Action Plan", desc: "A prioritized step-by-step PDF roadmap outlining exact changes needed to multiply ranking." }
  ];

  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-stars">
      {/* Background large glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glass Panel Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel-heavy rounded-3xl border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Cyber accents */}
          <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-32 -top-32 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline and bullet list */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/25 inline-block mb-4">
                Boost Your Search Authority
              </span>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight leading-tight">
                Get Your Free SEO Audit Report
              </h2>
              
              <p className="font-sans text-sm text-[var(--text-sub)] mt-4 leading-relaxed max-w-xl">
                Discover critical technical issues, ranking gaps, page-speed bottlenecks, content optimization opportunities, and concrete action items to outrank your competitors.
              </p>

              {/* Ticks Grid list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {auditPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-3 group">
                    <div className="mt-1 w-5 h-5 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan transition-colors duration-300 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-xs text-[var(--text-main)] group-hover:text-brand-cyan transition-colors leading-tight">
                        {point.text}
                      </h4>
                      <p className="font-sans text-[10px] text-[var(--text-muted)] mt-0.5 leading-normal">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: High conversion callout dashboard */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="glass-panel border border-[var(--glass-border)] rounded-2xl p-6 sm:p-8 w-full relative text-center shadow-lg bg-[var(--bg-card)]/60">
                
                {/* Simulated Audit Scan Circle */}
                <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-[var(--glass-border)] animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-2 rounded-full border border-brand-cyan/20" />
                  <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-brand-cyan border-b-brand-purple animate-[spin_3s_linear_infinite]" />
                  
                  <div className="z-10 flex flex-col items-center">
                    <ClipboardCheck className="w-8 h-8 text-brand-cyan mb-1 animate-pulse" />
                    <span className="font-display font-bold text-sm text-[var(--text-main)] tracking-widest uppercase">SCANNING</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-[var(--text-main)] tracking-wide">
                  Claim Your Free Insight Scan
                </h3>
                
                <p className="font-sans text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  Provide your website URL in our secure growth form below and our SEO engine will compile a full PDF report within 24 hours.
                </p>

                {/* Main Conversion Call To Action Button */}
                <button
                  onClick={onAuditClick}
                  className="w-full mt-6 py-4 rounded-xl font-display font-bold text-xs tracking-widest uppercase text-[var(--bg-main)] bg-[var(--text-main)] hover:bg-brand-cyan hover:text-black hover:scale-102 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-transparent hover:border-brand-cyan"
                >
                  Get Free Audit
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Secure
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-brand-cyan" /> Instant Setup
                  </span>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
