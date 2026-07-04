import { useRef, useState, useEffect } from "react";
import ThreeBackground from "./components/ThreeBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroPoster from "./components/HeroPoster";
import About from "./components/About";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import CaseStudy from "./components/CaseStudy";
import Experience from "./components/Experience";
import FreeAudit from "./components/FreeAudit";
import Contact, { ContactRef } from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const contactRef = useRef<ContactRef>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Dedicated audit scroll event which also pre-selects the service in the contact form
  const handleAuditAction = () => {
    scrollToSection("contact");
    if (contactRef.current) {
      contactRef.current.preselectService("Free SEO Audit");
    }
  };

  return (
    <div className="relative min-h-screen text-[var(--text-main)] bg-[var(--bg-main)] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* 3D Cosmic Particle Background */}
            <ThreeBackground />

            {/* Sticky Glassmorphic Header */}
            <Header onNavClick={scrollToSection} />

            {/* Structured Sections */}
            <main>
              {/* Home Section */}
              <Hero onBtnClick={scrollToSection} />

              {/* Poster Section */}
              <HeroPoster onBtnClick={scrollToSection} />

              {/* About Section */}
              <About onBtnClick={scrollToSection} />

              {/* Skills Section */}
              <Skills />

              {/* Marketing Tools Slider Section */}
              <Tools />

              {/* SEO Case Study Section */}
              <CaseStudy />

              {/* Professional Experience Section */}
              <Experience />

              {/* Free Audit Conversion Callout Section */}
              <FreeAudit onAuditClick={handleAuditAction} />

              {/* Contact form & direct lines with spider grid */}
              <Contact ref={contactRef} />
            </main>

            {/* Footer Section */}
            <Footer onLinkClick={scrollToSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
