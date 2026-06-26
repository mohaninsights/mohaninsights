import { useRef, useState, useEffect } from "react";
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

  // Initialize theme state with dark as the default
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });

  // Apply root element theme class on state change
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
    <div className="relative min-h-screen text-[var(--text-main)] bg-[var(--bg-main)] transition-colors duration-500 overflow-x-hidden">
      {/* 3D Cosmic Particle Background */}
      <ThreeBackground theme={theme} />

      {/* Sticky Glassmorphic Header */}
      <Header onNavClick={scrollToSection} theme={theme} onToggleTheme={toggleTheme} />

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
