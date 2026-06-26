import { motion } from "motion/react";
import { 
  BarChart, Search, Globe, Code, Zap, Grid, CheckSquare, Compass, 
  Settings, Database, Award, Activity, Heart, Share2 
} from "lucide-react";

interface MarketingTool {
  name: string;
  category: string;
  color: string;
  icon: any;
  metric: string;
}

export default function Tools() {
  const row1Tools: MarketingTool[] = [
    { name: "Ahrefs", category: "Backlink Audit", color: "text-[#ff5c35] border-[#ff5c35]/20 bg-[#ff5c35]/5", icon: Search, metric: "DR & UR Tracker" },
    { name: "SEMrush", category: "Keyword Research", color: "text-[#ff6400] border-[#ff6400]/20 bg-[#ff6400]/5", icon: BarChart, metric: "Position Tracker" },
    { name: "Screaming Frog", category: "Technical Crawling", color: "text-[#4cb550] border-[#4cb550]/20 bg-[#4cb550]/5", icon: Settings, metric: "Internal Auditing" },
    { name: "Google Analytics", category: "Traffic Attribution", color: "text-[#f2994a] border-[#f2994a]/20 bg-[#f2994a]/5", icon: Activity, metric: "GA4 Stream" },
    { name: "Google Search Console", category: "Search Performance", color: "text-[#34a853] border-[#34a853]/20 bg-[#34a853]/5", icon: Globe, metric: "Index Diagnostics" },
    { name: "Google Tag Manager", category: "Script Integration", color: "text-[#4285f4] border-[#4285f4]/20 bg-[#4285f4]/5", icon: Code, metric: "Container Tags" },
    { name: "PageSpeed Insights", category: "Core Web Vitals", color: "text-[#00c49f] border-[#00c49f]/20 bg-[#00c49f]/5", icon: Zap, metric: "FCP/LCP Audits" },
  ];

  const row2Tools: MarketingTool[] = [
    { name: "Google Keyword Planner", category: "CPC Forecasting", color: "text-[#ea4335] border-[#ea4335]/20 bg-[#ea4335]/5", icon: Search, metric: "Volume Estimator" },
    { name: "Google Trends", category: "Topic Research", color: "text-[#1a73e8] border-[#1a73e8]/20 bg-[#1a73e8]/5", icon: Compass, metric: "Interest Over Time" },
    { name: "Google Business Profile", category: "Local SEO GMB", color: "text-[#4285f4] border-[#4285f4]/20 bg-[#4285f4]/5", icon: Database, metric: "Map Ranking" },
    { name: "WordPress", category: "CMS Development", color: "text-[#21759b] border-[#21759b]/20 bg-[#21759b]/5", icon: Grid, metric: "Engine Hosting" },
    { name: "Rank Math", category: "Schema Setup", color: "text-[#185adb] border-[#185adb]/20 bg-[#185adb]/5", icon: Award, metric: "Pro Metadata" },
    { name: "Yoast SEO", category: "Content Optimization", color: "text-[#a42821] border-[#a42821]/20 bg-[#a42821]/5", icon: CheckSquare, metric: "Readability Score" },
  ];

  // Helper to duplicate arrays for infinite scroll effect
  const dblRow1 = [...row1Tools, ...row1Tools, ...row1Tools];
  const dblRow2 = [...row2Tools, ...row2Tools, ...row2Tools];

  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Background Star Overlay */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      {/* Light glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-3">
            Digital Stack
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight">
            My Digital Marketing Stack
          </h2>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-2xl mx-auto mt-4 leading-relaxed">
            Professional tools I use daily to research keywords, analyze competition, optimize page markup, monitor rankings, and scale organic acquisition channels.
          </p>
        </div>
      </div>

      {/* Infinite Scroller Slider Container */}
      <div className="relative w-full space-y-6 select-none overflow-hidden pb-4">
        
        {/* Row 1 Slider: Left Scrolling */}
        <div className="flex w-full overflow-hidden relative">
          {/* Subtle gradient fades on borders to hide clipping */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />

          <div className="animate-infinite-scroll flex gap-6">
            {dblRow1.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={idx}
                  className={`w-[260px] glass-panel border ${tool.color} p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] flex items-center justify-center border border-[var(--glass-border)]">
                    <ToolIcon className="w-5 h-5 text-current" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[var(--text-main)] tracking-wide">
                      {tool.name}
                    </h4>
                    <p className="font-sans text-[10px] text-[var(--text-muted)] mt-0.5">
                      {tool.category}
                    </p>
                    <span className="font-mono text-[9px] opacity-60 block mt-1">
                      {tool.metric}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 Slider: Right Scrolling */}
        <div className="flex w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />

          {/* Reverse animation direction for second row */}
          <div className="animate-infinite-scroll flex gap-6 [animation-direction:reverse]">
            {dblRow2.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={idx}
                  className={`w-[260px] glass-panel border ${tool.color} p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] flex items-center justify-center border border-[var(--glass-border)]">
                    <ToolIcon className="w-5 h-5 text-current" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[var(--text-main)] tracking-wide">
                      {tool.name}
                    </h4>
                    <p className="font-sans text-[10px] text-[var(--text-muted)] mt-0.5">
                      {tool.category}
                    </p>
                    <span className="font-mono text-[9px] opacity-60 block mt-1">
                      {tool.metric}
                    </span>
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
