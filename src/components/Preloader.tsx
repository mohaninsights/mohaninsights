import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Compass, Play, BarChart3, TrendingUp, Sparkles } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
  key?: string;
}

const steps = [
  {
    name: "Research",
    desc: "Competitor Audits & Deep Search Intent Mapping",
    icon: Search,
    color: "text-brand-cyan",
    glow: "shadow-[0_0_30px_rgba(0,242,254,0.3)]",
    bg: "bg-brand-cyan/10"
  },
  {
    name: "Strategy",
    desc: "Custom Roadmap, Page Hierarchy & Content Planning",
    icon: Compass,
    color: "text-brand-purple",
    glow: "shadow-[0_0_30px_rgba(189,115,255,0.3)]",
    bg: "bg-brand-purple/10"
  },
  {
    name: "Execution",
    desc: "Performance Tuning, On-Page & Schema Integration",
    icon: Play,
    color: "text-emerald-400",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.3)]",
    bg: "bg-emerald-500/10"
  },
  {
    name: "Analysis",
    desc: "GSC, GA4 Analytics & Crawl Bottleneck Diagnosis",
    icon: BarChart3,
    color: "text-amber-400",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
    bg: "bg-amber-500/10"
  },
  {
    name: "Optimization",
    desc: "Conversion Lift, Search Velocity & Rank Scale",
    icon: TrendingUp,
    color: "text-rose-400",
    glow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]",
    bg: "bg-rose-500/10"
  }
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    // Progress steps automatically one by one
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, currentStep]);
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          // Final delay to admire the complete sequence before entry
          const endTimer = setTimeout(() => {
            onComplete();
          }, 800);
          return () => clearTimeout(endTimer);
        }
      }, 750); // Speed of transitions (~3.75s total)
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative starry background matching the main template */}
      <div className="absolute inset-0 bg-stars opacity-40 pointer-events-none" />
      
      {/* Ambient gradient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl w-full px-6 relative z-10 text-center">
        {/* Dynamic header / title badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/10 mb-8"
        >
          <Sparkles className="w-3 h-3 text-brand-cyan animate-pulse" />
          <span className="font-mono text-[9px] text-brand-cyan tracking-widest uppercase font-bold">
            SEO Methodology Pipeline
          </span>
        </motion.div>

        {/* Current main active step visual display */}
        <div className="h-44 flex flex-col items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            {steps.map((step, idx) => {
              if (idx !== currentStep) return null;
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} border border-white/10 flex items-center justify-center ${step.glow} mb-4`}>
                    <IconComponent className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    {step.name}
                  </h1>
                  <p className="font-sans text-xs text-gray-400 mt-2 font-medium max-w-sm px-4">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Sequence Progress Bar & Steps List */}
        <div className="relative mt-8 pt-4">
          {/* Connector line behind the steps */}
          <div className="absolute top-8 left-4 right-4 h-[2px] bg-white/[0.05] -translate-y-1/2 z-0 rounded-full" />
          <motion.div 
            className="absolute top-8 left-4 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-purple -translate-y-1/2 z-0 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ maxWidth: "calc(100% - 32px)" }}
          />

          {/* Interactive Steps indicators */}
          <div className="flex justify-between relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = idx === currentStep;
              const isCompleted = completedSteps.includes(idx);
              
              return (
                <div key={step.name} className="flex flex-col items-center flex-1">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      borderColor: isActive ? "rgba(0, 242, 254, 0.4)" : isCompleted ? "rgba(189, 115, 255, 0.3)" : "rgba(255, 255, 255, 0.05)"
                    }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-[#0c1322] text-brand-cyan border-2" 
                        : isCompleted 
                        ? "bg-[#110d1c] text-brand-purple border" 
                        : "bg-gray-900/40 text-gray-600 border"
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </motion.div>
                  <span className={`font-mono text-[9px] font-bold tracking-wider mt-2 uppercase ${
                    isActive ? "text-brand-cyan" : isCompleted ? "text-brand-purple" : "text-gray-600"
                  }`}>
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic bottom status loader bar */}
        <div className="mt-12 max-w-xs mx-auto">
          <div className="w-full h-1 bg-white/[0.03] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-emerald-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          </div>
          <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest mt-2 block">
            Initializing digital environment...
          </span>
        </div>

      </div>
    </div>
  );
}
