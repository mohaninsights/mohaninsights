import { useState } from "react";
import ThreeBackground from "./components/ThreeBackground";
import Header from "./components/Header";
import HeroPoster from "./components/HeroPoster";
import About from "./components/About";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import CaseStudy from "./components/CaseStudy";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";
import ResumeModal from "./components/ResumeModal";
import { motion } from "motion/react";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <div className="relative min-h-screen text-[var(--text-main)] bg-[var(--bg-main)] overflow-x-hidden">
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 3D Cosmic Particle Background */}
        <ThreeBackground />

        {/* Sticky Glassmorphic Header */}
        <Header onNavClick={scrollToSection} onResumeClick={handleOpenResume} />

        {/* Structured Sections */}
        <main>
          {/* Poster Section as Home */}
          <HeroPoster onBtnClick={scrollToSection} onResumeClick={handleOpenResume} />

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

          {/* Contact form & direct lines with spider grid */}
          <Contact />
        </main>

        {/* Thank You Section */}
        <ThankYou onLinkClick={scrollToSection} />

        {/* Full-Screen Interactive Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </motion.div>
    </div>
  );
}
