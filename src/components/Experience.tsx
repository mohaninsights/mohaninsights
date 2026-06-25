import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle, ChevronRight, Activity } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
  techUsed: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "August 2025 – Present",
      role: "SEO & SMO Executive",
      company: "Divine Astro Vastu Science LLP",
      responsibilities: [
        "Architecting full-scale Technical SEO strategies to improve indexation rate and crawl performance.",
        "Performing advanced Analytics Diagnostics (GA4, GTM) to resolve tag anomalies and map clean attribution tunnels.",
        "Optimizing site crawl rate, schema graph representations, and resolving multi-country sitemap hierarchies.",
        "Driving qualified B2B growth and local inbound inquiries via targeted high-conversion Google maps strategies."
      ],
      techUsed: ["Technical SEO", "Analytics", "Sitemap Optimization", "B2B Growth", "Google Business Profile"]
    },
    {
      period: "March 2025 – June 2025",
      role: "SEO & SMO Executive",
      company: "Thinkbizz Hightech",
      responsibilities: [
        "Crafting deep On Page SEO content pipelines focusing on search queries, keyword clustering, and semantic variations.",
        "Establishing optimized SMO Systems to cross-syndicate content assets and boost organic brand backlinks.",
        "Configuring WordPress SEO setups utilizing Yoast/RankMath with automated local structured schemas.",
        "Resolving server rendering errors and asset compressions to boost Core Web Vitals loading metrics."
      ],
      techUsed: ["On-Page Optimization", "SMO Systems", "WordPress Engine", "Core Web Vitals", "Yoast Pro"]
    },
    {
      period: "December 2024 – February 2025",
      role: "SEO & SMO Intern",
      company: "Thinkbizz Hightech",
      responsibilities: [
        "Conducting Keyword Research and competitive gap reviews utilizing SEMrush and Ahrefs search index indices.",
        "Implementing rich JSON-LD Schema Validation and auditing search visibility within Google Rich Results diagnostics.",
        "Analyzing search traffic anomalies, index errors, and crawling status via Google Search Console.",
        "Optimizing metadata, image alt structures, and formatting copy to comply with programmatic search engines."
      ],
      techUsed: ["Keyword Clustering", "JSON-LD Schema", "Search Console", "Google Analytics", "Content Copywriting"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-3">
            Career Timeline
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="font-sans text-sm text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Delivering organic visibility leaps and clean crawling pipelines across high-growth corporate agencies and digital projects.
          </p>
        </div>

        {/* Timeline structure */}
        <div className="relative max-w-4xl mx-auto mt-12">
          
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent -translate-x-1/2 z-0 opacity-45" />

          {/* Timeline Cards loop */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row md:justify-between items-stretch">
                  
                  {/* Timeline circular node marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4.5 h-4.5 rounded-full bg-[#050816] border-2 border-brand-cyan -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                  </div>

                  {/* Left Column Spacer (For MD size and above) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? "order-1 text-right" : "order-2"}`}>
                    {!isEven && (
                      <div className="pt-5 pl-4">
                        <span className="font-mono text-xs font-semibold text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/10">
                          {exp.period}
                        </span>
                      </div>
                    )}
                    {isEven && (
                      <div className="pr-6 pt-6">
                        <h4 className="font-display text-base font-bold text-white leading-tight">
                          {exp.company}
                        </h4>
                        <p className="font-sans text-xs text-gray-400 mt-1">{exp.role}</p>
                      </div>
                    )}
                  </div>

                  {/* Right Column Content Card */}
                  <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? "order-2" : "order-1"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-panel border border-white/5 hover:border-brand-purple/20 rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 shadow-md"
                    >
                      {/* Mobile block period or header */}
                      <div className="flex flex-col md:hidden mb-4">
                        <span className="self-start font-mono text-[10px] text-brand-cyan bg-brand-cyan/15 px-2.5 py-0.5 rounded-full border border-brand-cyan/10 mb-2">
                          {exp.period}
                        </span>
                        <h4 className="font-display font-bold text-base text-white">{exp.company}</h4>
                        <p className="font-sans text-xs text-brand-cyan font-medium">{exp.role}</p>
                      </div>

                      {/* Desktop Heading in Card (Alternated) */}
                      <div className="hidden md:block mb-4">
                        {!isEven && (
                          <>
                            <h4 className="font-display font-bold text-base text-white leading-tight">{exp.company}</h4>
                            <p className="font-sans text-xs text-brand-cyan font-medium mt-0.5">{exp.role}</p>
                          </>
                        )}
                        {isEven && (
                          <span className="inline-block font-mono text-[10px] text-brand-cyan bg-brand-cyan/15 px-2.5 py-0.5 rounded-full border border-brand-cyan/10">
                            {exp.period}
                          </span>
                        )}
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2.5 text-left">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <ChevronRight className="w-3.5 h-3.5 mt-1 text-brand-cyan flex-shrink-0" />
                            <p className="font-sans text-xs text-gray-300 leading-relaxed">
                              {resp}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Tags under card */}
                      <div className="mt-5 pt-4 border-t border-white/[0.05] flex flex-wrap gap-1.5">
                        {exp.techUsed.map((tech, idx) => (
                          <span key={idx} className="font-mono text-[9px] bg-white/[0.02] text-gray-400 px-2 py-0.5 rounded-md border border-white/[0.05]">
                            {tech}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
