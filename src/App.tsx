import { useRef } from "react";
import ThreeBackground from "./components/ThreeBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
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
    <div className="relative min-h-screen text-[#f3f4f6]">
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

        {/* Experience Timeline Section */}
        <Experience />

        {/* Education History Section */}
        <Education />

        {/* Premium SEO Services Section */}
        <Services onBtnClick={scrollToSection} />

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
