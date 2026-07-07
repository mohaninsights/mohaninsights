import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Gauge, Zap, Sparkles, LineChart, TrendingUp, 
  Terminal, ArrowRight, Globe, RefreshCw, CheckCircle2, 
  AlertCircle, ShieldAlert, Cpu, BarChart3, Info, Share2
} from "lucide-react";

interface DiagnosticsLog {
  text: string;
  type: "info" | "warn" | "success";
  delay: number;
}

export default function SeoForecaster() {
  const [domain, setDomain] = useState("");
  const [goal, setGoal] = useState<"seo" | "speed" | "authority">("seo");
  const [currentTraffic, setCurrentTraffic] = useState(15000);
  const [growthMultiplier, setGrowthMultiplier] = useState(3);
  const [step, setStep] = useState<"input" | "scanning" | "results">("input");
  const [activeLogIndex, setActiveLogIndex] = useState(-1);
  const [progress, setProgress] = useState(0);

  const logs: DiagnosticsLog[] = [
    { text: `Initializing deep crawler engine for ${domain || "yourwebsite.com"}...`, type: "info", delay: 400 },
    { text: "Resolving DNS protocols and sitemap.xml architecture...", type: "info", delay: 700 },
    { text: "Scanning indexation status across Google, Bing, and DuckDuckGo...", type: "info", delay: 900 },
    { text: "Evaluating schema structures (Json-LD breadcrumbs, LocalBusiness tags)...", type: "info", delay: 600 },
    { text: "CRITICAL: Detected missing Article and Product structured schema tags.", type: "warn", delay: 800 },
    { text: "Measuring Core Web Vitals: Largest Contentful Paint (LCP) > 3.4 seconds.", type: "warn", delay: 700 },
    { text: "Checking off-page backlinks & anchor text equity mapping...", type: "info", delay: 800 },
    { text: "Analyzing Social Media presence (SMO OpenGraph, Twitter Card headers)...", type: "info", delay: 600 },
    { text: "SUCCESS: Found responsive meta descriptions, but title tags truncation detected.", type: "success", delay: 500 },
    { text: "Calculating custom organic traffic velocity & search intent multipliers...", type: "info", delay: 800 },
    { text: "Diagnostic compile complete! Synthesizing growth projections.", type: "success", delay: 400 },
  ];

  // Auto-play the logs and progress bar during scanning state
  useEffect(() => {
    if (step !== "scanning") return;

    setActiveLogIndex(0);
    setProgress(5);

    let currentLog = 0;
    let currentProgress = 5;

    const runLogs = () => {
      if (currentLog >= logs.length - 1) {
        // Complete the scanning phase
        setTimeout(() => {
          setStep("results");
        }, 800);
        return;
      }

      const nextDelay = logs[currentLog].delay;
      setTimeout(() => {
        currentLog++;
        setActiveLogIndex(currentLog);
        currentProgress += Math.floor(95 / logs.length);
        setProgress(Math.min(currentProgress, 100));
        runLogs();
      }, nextDelay);
    };

    runLogs();
  }, [step]);

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) {
      setDomain("mywebsite.com");
    }
    setStep("scanning");
  };

  const handleReset = () => {
    setStep("input");
    setActiveLogIndex(-1);
    setProgress(0);
  };

  // Safe scroll to contact
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Forecast calculations
  const projectedTraffic = Math.round(currentTraffic * growthMultiplier);
  const incrementalGain = projectedTraffic - currentTraffic;

  // Generate coordinates for SVG Graph Path
  const generateGraphPath = () => {
    const width = 500;
    const height = 180;
    const points = 12; // 12 months
    const coords: [number, number][] = [];

    for (let i = 0; i < points; i++) {
      const x = (i / (points - 1)) * width;
      // Growth curve: exponential/logarithmic hybrid
      const progressRatio = i / (points - 1);
      const factor = Math.pow(progressRatio, 1.8); // Curved growth
      const val = currentTraffic + (incrementalGain * factor);
      
      // Map to height (lower y is higher value in SVG)
      const maxVal = projectedTraffic * 1.05;
      const y = height - (val / maxVal) * (height * 0.75) - (height * 0.1);
      coords.push([x, y]);
    }

    const path = coords.reduce((acc, [px, py], idx) => {
      return idx === 0 ? `M ${px} ${py}` : `${acc} L ${px} ${py}`;
    }, "");

    const closedPath = `${path} L ${width} ${height} L 0 ${height} Z`;

    return { path, closedPath, coords };
  };

  const { path: strokePath, closedPath: fillPath, coords: graphCoords } = generateGraphPath();

  return (
    <section id="forecaster" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Dynamic light accent glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-left mb-16 overflow-visible py-4 border-b border-white/[0.04] pb-6">
          <h2 className="font-druk font-black text-[15vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9.5vw] tracking-normal leading-[0.7] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-y-[1.5] origin-left inline-block">
            GROWTH FORECASTER
          </h2>
        </div>

        {/* Outer Shell Glass Container */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] bg-[var(--bg-card)]/80 shadow-[0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden">
          
          <AnimatePresence mode="wait">
            
            {/* STEP 1: PARAMETERS FORM INPUT */}
            {step === "input" && (
              <motion.div
                key="step-input"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left controls side */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white mb-2">
                      Simulate Your Organic ROI
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
                      Enter your platform attributes below. I will simulate crawl metrics, speed bottlenecks, and anchor-text equity to draft an organic performance forecast for the next 12 months.
                    </p>
                  </div>

                  <form onSubmit={handleStartScan} className="space-y-5">
                    {/* Website Domain Input */}
                    <div>
                      <label className="font-mono text-[10px] text-[var(--text-sub)] uppercase tracking-widest font-bold block mb-2">
                        Website Domain Name
                      </label>
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 focus-within:border-brand-cyan/50 bg-black/40 transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-cyan/60">
                          <Globe className="w-4.5 h-4.5" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="e.g. yourbusiness.com"
                          value={domain}
                          onChange={(e) => setDomain(e.target.value.replace(/https?:\/\//g, "").trim())}
                          className="w-full bg-transparent text-white font-sans text-sm py-4 pl-11 pr-4 outline-none border-none placeholder-gray-500 font-medium"
                        />
                      </div>
                    </div>

                    {/* Optimization Core Focus Selection Cards */}
                    <div>
                      <label className="font-mono text-[10px] text-[var(--text-sub)] uppercase tracking-widest font-bold block mb-2">
                        Optimization Focus Core
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: "seo", label: "SXO Engine Rewrite", desc: "Technical crawls, schema markup, on-page optimization.", icon: Cpu, activeBorder: "border-brand-cyan/40 bg-brand-cyan/5 text-brand-cyan" },
                          { id: "speed", label: "Velocity Redesign", desc: "WordPress speed, Core Web Vitals, FCP/LCP boost.", icon: Zap, activeBorder: "border-amber-400/40 bg-amber-400/5 text-amber-400" },
                          { id: "authority", label: "Off-page Authority", desc: "High DR link building, keyword intent, SMO tags.", icon: Sparkles, activeBorder: "border-brand-purple/40 bg-brand-purple/5 text-brand-purple" },
                        ].map((item) => {
                          const IconComp = item.icon;
                          const isActive = goal === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setGoal(item.id as any)}
                              className={`text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[120px] cursor-pointer group ${
                                isActive 
                                  ? item.activeBorder 
                                  : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]"
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                                isActive ? "bg-white/10 border-current" : "bg-white/[0.02] border-white/5 group-hover:scale-105"
                              }`}>
                                <IconComp className="w-4 h-4 text-current" />
                              </div>
                              <div>
                                <h4 className="font-display font-extrabold text-xs tracking-wide text-white">
                                  {item.label}
                                </h4>
                                <p className="font-sans text-[9px] text-[var(--text-muted)] leading-normal mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Range Slider 1: Current traffic */}
                    <div className="pt-2">
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="font-mono text-[10px] text-[var(--text-sub)] uppercase tracking-widest font-bold">
                          Est. Current Monthly Traffic
                        </label>
                        <span className="font-display font-black text-xs text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-md">
                          {currentTraffic.toLocaleString()} Clicks/mo
                        </span>
                      </div>
                      <div className="relative group">
                        <input
                          type="range"
                          min="1000"
                          max="100000"
                          step="1000"
                          value={currentTraffic}
                          onChange={(e) => setCurrentTraffic(parseInt(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                        <span>1,000</span>
                        <span>50,000</span>
                        <span>100,000+ Clicks</span>
                      </div>
                    </div>

                    {/* Range Slider 2: Target growth */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="font-mono text-[10px] text-[var(--text-sub)] uppercase tracking-widest font-bold">
                          SEO Campaign Growth Depth
                        </label>
                        <span className="font-display font-black text-xs text-brand-purple bg-brand-purple/15 px-2 py-0.5 rounded-md text-brand-purple">
                          {growthMultiplier}x Velocity
                        </span>
                      </div>
                      <div className="relative group">
                        <input
                          type="range"
                          min="2"
                          max="8"
                          step="1"
                          value={growthMultiplier}
                          onChange={(e) => setGrowthMultiplier(parseInt(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-1">
                        <span>2x Growth</span>
                        <span>5x Growth</span>
                        <span>8x Campaign Index</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-2 group relative py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple font-display font-bold uppercase tracking-wider text-xs text-black hover:scale-[1.01] transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.35)] cursor-pointer overflow-visible"
                    >
                      {/* Interactive focus ring */}
                      <span className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple opacity-40 blur-[4px] group-hover:opacity-100 transition-opacity duration-300 animate-ping [animation-duration:3.5s]" />
                      <span className="relative flex items-center justify-center gap-2">
                        <span>Run Diagnostics &amp; Forecast</span>
                        <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </form>
                </div>

                {/* Right static feature listing card */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between space-y-6 lg:border-l lg:border-white/5 lg:pl-8 lg:min-h-[440px]">
                  <div>
                    <span className="font-mono text-[9px] text-brand-cyan uppercase tracking-widest font-black block mb-1">Interactive Diagnostic Scope</span>
                    <h4 className="font-display font-bold text-lg text-white mb-4">
                      Why simulate website diagnostics?
                    </h4>
                    <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                      Every diagnostic calculation utilizes a lightweight model built on live ranking metrics from Mohan's real case studies. Here is the crawler audit pipeline:
                    </p>

                    <div className="space-y-4">
                      {[
                        { title: "Technical Engine Auditing", desc: "Checks XML sitemaps, robot protocols, Schema JSON-LD blocks.", icon: Search },
                        { title: "Core Web Vitals Metric Assessment", desc: "Forecasts rendering speed bottlenecks and mobile responsive errors.", icon: Gauge },
                        { title: "SMO Integration Scans", desc: "Traces metadata, OpenGraph tags, and social sharing headers.", icon: Share2 }
                      ].map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-brand-cyan shrink-0">
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <h5 className="font-display font-bold text-[11px] text-white tracking-wide">
                                {item.title}
                              </h5>
                              <p className="font-sans text-[10px] text-[var(--text-muted)] leading-normal mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-start gap-3">
                    <Info className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <p className="font-sans text-[10px] text-gray-500 leading-normal">
                      Note: Forecast models represent projected organic growth estimates based on industry-standard Google crawler simulations. Real-world indexes may vary.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: SCALING SCANNING SCREEN */}
            {step === "scanning" && (
              <motion.div
                key="step-scanning"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="py-6 sm:py-10 max-w-2xl mx-auto flex flex-col justify-center min-h-[440px]"
              >
                <div className="text-center mb-8 space-y-2">
                  <div className="w-14 h-14 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mx-auto animate-spin [animation-duration:3s]">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-black text-xl text-white tracking-wide uppercase">
                    Analyzing {domain}
                  </h3>
                  <p className="font-sans text-xs text-[var(--text-muted)] max-w-sm mx-auto">
                    Executing crawler diagnostics, calculating Core Web Vitals indices, and analyzing search competitor indexing gaps.
                  </p>
                </div>

                {/* High Tech Terminal Display */}
                <div className="rounded-2xl bg-black border border-white/10 p-4 font-mono text-[10px] sm:text-xs text-brand-cyan shadow-2xl h-[240px] flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute top-2 right-4 flex items-center gap-1 opacity-40">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>DIAGNOSTICS_CONSOLE_LOG</span>
                  </div>
                  
                  {/* Scrollable logs list */}
                  <div className="space-y-1.5 overflow-y-auto pr-2 scrollbar-none h-[200px] mt-4 flex flex-col justify-end">
                    {logs.map((log, index) => {
                      if (index > activeLogIndex) return null;
                      const isWarn = log.type === "warn";
                      const isSuccess = log.type === "success";
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`flex items-start gap-1.5 ${
                            isWarn ? "text-amber-400" : isSuccess ? "text-emerald-400" : "text-brand-cyan"
                          }`}
                        >
                          <span className="shrink-0 select-none opacity-40">&gt;&gt;</span>
                          <span className="leading-tight break-all">{log.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* High Tech Custom Scrollbar/Progress */}
                  <div className="w-full pt-3 border-t border-white/5 flex items-center gap-4">
                    <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase shrink-0">Progress:</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-brand-purple font-bold shrink-0">{progress}%</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DYNAMIC DASHBOARD RESULTS REPORT */}
            {step === "results" && (
              <motion.div
                key="step-results"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Header Banner */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/5">
                  <div>
                    <span className="font-mono text-[9px] text-brand-cyan uppercase tracking-widest font-black block mb-1">
                      DIAGNOSTIC REPORT GENERATED
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-2">
                      <Globe className="w-6 h-6 text-brand-cyan shrink-0" />
                      <span>{domain || "yourwebsite.com"}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 rounded-xl border border-white/10 hover:border-brand-cyan/30 text-[var(--text-sub)] hover:text-white font-display text-xs font-semibold tracking-wider transition-colors duration-300 flex items-center gap-1.5 cursor-pointer bg-white/[0.01]"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Re-Simulate
                    </button>
                    <button
                      onClick={handleScrollToContact}
                      className="px-5 py-2.5 rounded-xl bg-brand-cyan text-black hover:scale-105 font-display text-xs font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-[0_4px_15px_rgba(0,242,254,0.3)]"
                    >
                      Claim Free Audit
                      <ArrowRight className="w-3.5 h-3.5 text-black" />
                    </button>
                  </div>
                </div>

                {/* Dashboard Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Target Velocity Scale", val: `${growthMultiplier}x Growth`, desc: "Projected search velocity", color: "text-brand-cyan", bg: "bg-brand-cyan/5 border-brand-cyan/10", icon: TrendingUp },
                    { label: "Current Traffic Base", val: `${currentTraffic.toLocaleString()}`, desc: "Initial organic clicks/mo", color: "text-white", bg: "bg-white/[0.02] border-white/5", icon: BarChart3 },
                    { label: "Projected Traffic Peak", val: `${projectedTraffic.toLocaleString()}`, desc: "Achievable peak clicks/mo", color: "text-brand-purple", bg: "bg-brand-purple/5 border-brand-purple/10", icon: LineChart },
                    { label: "Est. Crawl Opportunity", val: `+${incrementalGain.toLocaleString()}`, desc: "Net growth margin clicks", color: "text-emerald-400", bg: "bg-emerald-500/5 border-emerald-500/10", icon: Sparkles }
                  ].map((card, idx) => {
                    const IconC = card.icon;
                    return (
                      <div key={idx} className={`p-4 sm:p-5 rounded-2xl border ${card.bg} space-y-1.5 transition-transform duration-300 hover:scale-[1.02]`}>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-widest">{card.label}</span>
                          <IconC className={`w-3.5 h-3.5 ${card.color}`} />
                        </div>
                        <h4 className={`font-display font-black text-lg sm:text-xl lg:text-2xl tracking-tight ${card.color}`}>
                          {card.val}
                        </h4>
                        <p className="font-sans text-[10px] text-gray-400 font-medium">{card.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* GRAPH AND ACTIONS SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Side: Interactive SVG Graph */}
                  <div className="lg:col-span-7 glass-panel border border-white/5 p-5 rounded-2xl bg-black/30 flex flex-col justify-between min-h-[340px]">
                    <div className="flex items-center justify-between mb-4 border-b border-white/[0.04] pb-3">
                      <div>
                        <h4 className="font-display font-bold text-sm text-white tracking-wide">
                          12-Month Traffic Projection Curve
                        </h4>
                        <p className="font-sans text-[10px] text-[var(--text-muted)] mt-0.5">
                          Calculated crawl velocity curve with full Technical SEO integration.
                        </p>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-md font-bold">
                        Organic Forecast Model
                      </span>
                    </div>

                    {/* Responsive SVG Container */}
                    <div className="relative w-full aspect-[5/2] flex items-center justify-center my-2">
                      <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible">
                        <defs>
                          {/* Linear Gradient for Stroke Line */}
                          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00F2FF" />
                            <stop offset="100%" stopColor="#0066FF" />
                          </linearGradient>
                          {/* Linear Gradient for Fill Area */}
                          <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Horizontal Background Grid Lines */}
                        <line x1="0" y1="45" x2="500" y2="45" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <line x1="0" y1="135" x2="500" y2="135" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                        {/* Animated filled background area */}
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          d={fillPath}
                          fill="url(#fillGrad)"
                        />

                        {/* Animated Main stroke line */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          d={strokePath}
                          fill="none"
                          stroke="url(#strokeGrad)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* Dynamic Interactive Node Points */}
                        {graphCoords.map(([cx, cy], idx) => {
                          const isEndNode = idx === graphCoords.length - 1;
                          const isStartNode = idx === 0;
                          
                          if (!isStartNode && !isEndNode && idx % 3 !== 0) return null; // Show every 3rd node for cleanliness
                          
                          return (
                            <g key={idx}>
                              <circle
                                cx={cx}
                                cy={cy}
                                r={isEndNode ? "5" : "3.5"}
                                className={isEndNode ? "fill-brand-purple stroke-white stroke-1" : "fill-brand-cyan"}
                              />
                              <text
                                x={cx}
                                y={cy - 12}
                                textAnchor="middle"
                                className="font-mono text-[9px] font-extrabold fill-[var(--text-sub)] select-none pointer-events-none"
                              >
                                {isStartNode ? "M1" : isEndNode ? "M12" : `M${idx + 1}`}
                              </text>
                            </g>
                          );
                        })}
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 border-t border-white/[0.04] pt-3 mt-2">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                        M1: {currentTraffic.toLocaleString()} clicks
                      </span>
                      <span>Exponential crawl index curve</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                        M12: {projectedTraffic.toLocaleString()} clicks
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Opportunities list & customized warnings */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 space-y-3">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                        <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                          Detected Indexation Risks
                        </h5>
                      </div>
                      <ul className="space-y-2 text-[11px] text-[var(--text-sub)] font-medium font-sans">
                        <li className="flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>Schema structures are incomplete, slowing crawl-bot intent discovery.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>Core Web Vital scores drop mobile ranking authority on keyword clusters.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>Unoptimized social meta headers limit brand visibility on SMO feeds.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                        <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                          Action Items to Unlock Gain
                        </h5>
                      </div>
                      <ul className="space-y-2 text-[11px] text-[var(--text-sub)] font-medium font-sans">
                        <li className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                          <span>Perform custom JSON-LD Schema markup writeups (breadcrumbs, local tags).</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                          <span>Re-factor theme speed modules to lower FCP metrics under 1.5 seconds.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                          <span>Execute direct backlink clustering onto target commercial landing hubs.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Highly eye-catchy custom booking banner */}
                    <div 
                      onClick={handleScrollToContact}
                      className="group p-4 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-purple border border-white/15 text-black hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-center justify-between shadow-[0_0_20px_rgba(0,242,254,0.3)] select-none"
                    >
                      <div className="space-y-0.5">
                        <h5 className="font-display font-extrabold text-xs uppercase tracking-wider leading-tight">
                          Book Comprehensive Audit
                        </h5>
                        <p className="font-sans text-[10px] text-black/70 leading-normal font-semibold">
                          Let's audit {domain} live to implement this growth trajectory.
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-1.5 transition-transform shrink-0">
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
