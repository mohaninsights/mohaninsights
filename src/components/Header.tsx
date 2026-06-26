import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, MessageSquare, Printer } from "lucide-react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills & Tools", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Services", id: "services" },
    { name: "Audit", id: "audit" },
    { name: "Contact", id: "contact" },
  ];

  // Detect scroll to style the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for indicator highlighting
      const scrollPosition = window.scrollY + 120; // offset
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[var(--bg-nav)] backdrop-blur-md border-b border-white/[0.05]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Name */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-[1px] shadow-[0_0_15px_rgba(128,77,238,0.2)] group-hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300">
              <div className="w-full h-full rounded-xl bg-[var(--bg-card-heavy)] flex items-center justify-center">
                <span className="font-display font-bold text-base text-[var(--text-main)] tracking-wider group-hover:scale-110 transition-transform duration-300">
                  MK
                </span>
              </div>
            </div>
            <div>
              <span className="block font-display font-bold text-lg tracking-wider text-[var(--text-main)] group-hover:text-brand-cyan transition-colors duration-300">
                MohanInsights
              </span>
              <span className="block font-sans text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
                SEO & SMO Expert
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 glass-panel px-4 py-1.5 rounded-full border border-white/5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full font-sans text-xs tracking-wide font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-black font-semibold shadow-[0_0_10px_rgba(0,242,254,0.2)]"
                    : "text-[var(--text-sub)] hover:text-[var(--text-main)] hover:bg-white/[0.03]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action Call to Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 rounded-full font-display text-xs tracking-wider font-semibold text-[var(--text-main)] hover:text-brand-cyan glass-panel hover:scale-105 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              title="Print Portfolio / Save to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-brand-cyan" />
              Export PDF
            </button>
            <button
              onClick={() => handleLinkClick("contact")}
              className="relative group px-5 py-2.5 rounded-full font-display text-xs tracking-wider font-semibold text-black bg-white hover:bg-brand-cyan hover:text-black hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] flex items-center gap-1.5 cursor-pointer border border-transparent hover:border-brand-cyan"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Hire Me
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Actions block */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl glass-panel text-[var(--text-main)] hover:text-brand-cyan transition-colors duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 mx-4 max-w-lg md:mx-auto glass-panel-heavy p-6 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                   key={item.id}
                   onClick={() => handleLinkClick(item.id)}
                   className={`w-full text-left py-2.5 px-4 rounded-xl font-sans text-sm tracking-wide font-medium transition-all duration-200 flex items-center justify-between ${
                     activeSection === item.id
                       ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-black font-semibold"
                       : "text-[var(--text-sub)] hover:text-[var(--text-main)] hover:bg-white/[0.04]"
                   }`}
                >
                  <span>{item.name}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  )}
                </button>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                  window.print();
                }}
                className="w-full mt-2 py-3 rounded-xl border border-[var(--glass-border)] text-[var(--text-main)] font-display font-semibold text-center text-sm flex items-center justify-center gap-2 hover:bg-white/[0.04]"
              >
                <Printer className="w-4 h-4 text-brand-cyan" />
                Export PDF Resume
              </button>

              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-black font-display font-semibold text-center text-sm shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
