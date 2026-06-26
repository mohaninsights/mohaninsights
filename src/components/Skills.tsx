import { useState, useRef, MouseEvent } from "react";
import { motion } from "motion/react";
import { 
  FileText, Network, Settings, MapPin, ClipboardList, Key, 
  TrendingUp, Globe, Code, LineChart, Cpu, Share2, Edit3, Link2 
} from "lucide-react";

interface Skill {
  name: string;
  category: "Technical" | "Strategy" | "Platforms";
  level: number;
  icon: any;
  color: string;
}

export default function Skills() {
  const skillsData: Skill[] = [
    { name: "On Page SEO", category: "Technical", level: 98, icon: FileText, color: "from-blue-500 to-brand-cyan" },
    { name: "Off Page SEO", category: "Strategy", level: 92, icon: Network, color: "from-brand-purple to-brand-cyan" },
    { name: "Technical SEO", category: "Technical", level: 95, icon: Settings, color: "from-brand-cyan to-brand-purple" },
    { name: "Local SEO", category: "Strategy", level: 96, icon: MapPin, color: "from-teal-400 to-emerald-500" },
    { name: "SEO Audit", category: "Technical", level: 97, icon: ClipboardList, color: "from-amber-400 to-orange-500" },
    { name: "Keyword Research", category: "Strategy", level: 96, icon: Key, color: "from-brand-purple to-brand-cyan" },
    { name: "Competitor Analysis", category: "Strategy", level: 94, icon: TrendingUp, color: "from-fuchsia-500 to-rose-500" },
    { name: "WordPress SEO", category: "Platforms", level: 92, icon: Globe, color: "from-sky-500 to-blue-600" },
    { name: "Schema Markup", category: "Technical", level: 95, icon: Code, color: "from-brand-purple to-brand-cyan" },
    { name: "Google Search Console", category: "Platforms", level: 97, icon: Cpu, color: "from-orange-500 to-amber-500" },
    { name: "Google Analytics", category: "Platforms", level: 94, icon: LineChart, color: "from-yellow-400 to-orange-500" },
    { name: "SMO", category: "Platforms", level: 93, icon: Share2, color: "from-pink-500 to-rose-500" },
    { name: "Content Optimization", category: "Strategy", level: 95, icon: Edit3, color: "from-emerald-400 to-teal-500" },
    { name: "Link Building", category: "Strategy", level: 91, icon: Link2, color: "from-brand-purple to-brand-cyan" },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden grid-mesh">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand-purple tracking-widest uppercase px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 inline-block mb-3">
            Core Expertise
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight">
            Advanced SEO &amp; SMO Capabilities
          </h2>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
            Data-backed search optimization, semantic structure audits, social engine syndication, and deep traffic diagnostics to establish high search authority.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// 3D Tilt Card Component
function SkillCard({ skill, index }: { skill: Skill; index: number; key?: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalize mapping (value between -0.5 and 0.5)
    setCoords({
      x: x / rect.width,
      y: y / rect.height,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCoords({ x: 0, y: 0 });
  };

  const IconComponent = skill.icon;

  // Compute 3D rotation based on mouse coordinates on the card
  const rotateX = isHovering ? -coords.y * 22 : 0;
  const rotateY = isHovering ? coords.x * 22 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovering ? 1.02 : 1})`,
          transition: isHovering ? "transform 0.05s ease-out" : "transform 0.5s ease-out",
        }}
        className="glass-panel rounded-2xl p-5 border border-[var(--glass-border)] hover:bg-[var(--bg-card)] shadow-lg transition-all duration-300 relative group overflow-hidden"
      >
        {/* Subtle hover gradient background */}
        <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`} />

        <div className="flex items-center gap-4 mb-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.color} p-[1px]`}>
            <div className="w-full h-full rounded-xl bg-[var(--bg-card-heavy)] flex items-center justify-center text-white">
              <IconComponent className="w-4.5 h-4.5 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-[var(--text-main)] tracking-wide leading-tight">
              {skill.name}
            </h3>
            <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-widest mt-0.5 block">
              {skill.category}
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-4 pt-2">
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wide">Expertise Level</span>
            <span className="font-display font-bold text-xs text-brand-cyan">{skill.level}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[var(--glass-border)] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
