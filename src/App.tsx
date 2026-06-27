import { useRef } from "react";
import ThreeBackground from "./components/ThreeBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import FreeAudit from "./components/FreeAudit";
import Contact, { ContactRef } from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const contactRef = useRef<ContactRef>(null);

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
      {/* 3D Cosmic Particle Background */}
      <ThreeBackground />

      {/* Sticky Glassmorphic Header */}
      <Header onNavClick={scrollToSection} />

      {/* Structured Sections */}
      <main>
        {/* Home Section */}
        <Hero onBtnClick={scrollToSection} />

        {/* About Section */}
        <About onBtnClick={scrollToSection} />

        {/* Skills Section */}
        <Skills />

        {/* Marketing Tools Slider Section */}
        <Tools />

        {/* Professional Experience Section */}
        <Experience />

        {/* Free Audit Conversion Callout Section */}
        <FreeAudit onAuditClick={handleAuditAction} />

        {/* Contact form & direct lines with spider grid */}
        <Contact ref={contactRef} />
      </main>

      {/* Footer Section */}
      <Footer onLinkClick={scrollToSection} />
    </div>
  );
}
