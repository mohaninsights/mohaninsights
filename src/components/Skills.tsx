import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, Network, Settings, MapPin, ClipboardList, Key, 
  TrendingUp, Globe, Code, LineChart, Cpu, Share2, Edit3, Link2,
  Grid, Compass, Cpu as PlatformsIcon
} from "lucide-react";

interface Skill {
  name: string;
  category: "Technical" | "Strategy" | "Platforms";
  level: number;
  icon: any;
  color: string;
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Technical" | "Strategy" | "Platforms">("Technical");

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

  const categories: { id: "All" | "Technical" | "Strategy" | "Platforms"; label: string; icon: any }[] = [
    { id: "Technical", label: "Technical", icon: Settings },
    { id: "Strategy", label: "Strategy", icon: Compass },
    { id: "Platforms", label: "Platforms & Tools", icon: PlatformsIcon },
    { id: "All", label: "All Skills", icon: Grid },
  ];

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden grid-mesh">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-left mb-16 overflow-visible py-4 border-b border-white/[0.04] pb-6">
          <h2 className="font-druk font-black text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9.5vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-y-[1.5] origin-left inline-block">
            CORE EXPERTISE
          </h2>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto p-1.5 bg-white/[0.01] border border-[var(--glass-border)] rounded-2xl sm:rounded-full">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl sm:rounded-full font-display text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? cat.id === "Technical"
                      ? "bg-brand-cyan text-black shadow-[0_0_15px_rgba(0,242,254,0.3)] font-bold"
                      : cat.id === "Strategy"
                      ? "bg-brand-purple text-white shadow-[0_0_15px_rgba(189,115,255,0.3)] font-bold"
                      : cat.id === "Platforms"
                      ? "bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)] font-bold"
                      : "bg-white text-black font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/[0.02]"
                }`}
              >
                <CatIcon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

// 3D Tilt Card Component
function SkillCard({ skill, index }: { skill: Skill; index: number; key?: string }) {
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
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
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
              transition={{ duration: 1.2, delay: 0.1 }}
              className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
