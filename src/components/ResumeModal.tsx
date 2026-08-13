import React, { useEffect, useRef, useState } from "react";
import { X, Download, Printer, ExternalLink, FileText, CheckCircle2, Phone, Mail, MapPin, Briefcase, GraduationCap, Award, Globe, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Direct Download Trigger Function with multi-tier fallback
  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      // Direct standard download link trigger
      const link = document.createElement("a");
      link.href = "/Mohan_Kumar_Resume.pdf";
      link.download = "Mohan_Kumar_Resume.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.warn("Direct download failed, falling back to client jsPDF:", err);
      if (resumeRef.current) {
        try {
          const canvas = await html2canvas(resumeRef.current, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: "#FFFFFF"
          });
          const imgData = canvas.toDataURL("image/jpeg", 0.98);
          const pdf = new jsPDF("p", "pt", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("Mohan_Kumar_Resume.pdf");
        } catch (renderError) {
          window.open("/Mohan_Kumar_Resume.pdf", "_blank");
        }
      } else {
        window.open("/Mohan_Kumar_Resume.pdf", "_blank");
      }
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 600);
    }
  };

  const handleOpenNewTab = () => {
    window.open("/Mohan_Kumar_Resume.pdf", "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0B132B] border border-brand-cyan/30 rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.25)] flex flex-col overflow-hidden text-white z-10 my-auto"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#070D1E]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white flex items-center gap-2">
                    Mohan Kumar Resume
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" /> Verified PDF
                    </span>
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono">
                    SEO Executive • New Delhi, India
                  </p>
                </div>
              </div>

              {/* Action Buttons Header */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-sans font-bold text-xs flex items-center gap-1.5 hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,242,254,0.4)] cursor-pointer disabled:opacity-50"
                  title="Download PDF File"
                >
                  {isDownloading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">
                    {isDownloading ? "Downloading..." : "Download PDF"}
                  </span>
                </button>

                <button
                  onClick={handleOpenNewTab}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Open PDF in New Tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePrint}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:flex"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-white transition-colors cursor-pointer ml-1"
                  title="Close Resume View"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Area (Printable Resume) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0F172A] space-y-6">
              {/* Document Paper Container */}
              <div ref={resumeRef} className="w-full max-w-3xl mx-auto bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-10 font-sans text-sm relative">
                
                {/* Header Section */}
                <div className="border-b-2 border-slate-800 pb-5 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
                        MOHAN KUMAR
                      </h1>
                      <p className="text-brand-cyan font-bold text-base tracking-wider mt-1 text-slate-700">
                        SEO EXECUTIVE
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-800" />
                        <span className="font-semibold">+91 8585974338</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-slate-800" />
                        <span className="font-semibold">mohankaka172004@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-800" />
                        <span className="font-semibold">New Delhi, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two-Column Resume Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left Sidebar (Summary, Education, Skills, Languages) */}
                  <div className="md:col-span-5 space-y-6">
                    
                    {/* Summary */}
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md mb-2 flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-slate-700" />
                        Summary
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Results-driven SEO Executive with 1.5+ years of experience handling websites, improving search engine rankings, and driving organic traffic. Skilled in keyword research, competitor analysis, site audits, technical SEO, link building, and performance tracking using Google Search Console & Google Analytics.
                      </p>
                    </div>

                    {/* Education */}
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md mb-3 flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-700" />
                        Education
                      </h2>
                      <div className="space-y-3">
                        <div>
                          <p className="font-bold text-xs text-slate-900">Diploma in Digital Marketing</p>
                          <p className="text-[11px] text-slate-600">Indian Inst. of Computer Science</p>
                          <p className="text-[10px] font-semibold text-sky-700">Completed 2024</p>
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900">Bachelor of Arts (BA)</p>
                          <p className="text-[11px] text-slate-600">Delhi University</p>
                          <p className="text-[10px] font-semibold text-sky-700">Graduated 2025</p>
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900">Senior Secondary High School</p>
                          <p className="text-[11px] text-slate-600">CBSE Board</p>
                          <p className="text-[10px] font-semibold text-sky-700">Completed 2022</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md mb-2.5 flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-slate-700" />
                        Skills
                      </h2>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> SEO (On-Page & Off-Page)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> Keyword Research
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> Technical SEO Audits
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> Competitor Analysis
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> Link Building
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> Google Search Console
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> Google Analytics 4
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> SEMrush, Ahrefs, Frog
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> WordPress / CMS
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> Rank Math / Yoast SEO
                        </li>
                      </ul>
                    </div>

                    {/* Languages */}
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md mb-2 flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-slate-700" />
                        Languages
                      </h2>
                      <p className="text-xs text-slate-700">
                        • Hindi (Native) <br />
                        • English (Professional)
                      </p>
                    </div>

                  </div>

                  {/* Right Main Column (Work Experience & Personal Details) */}
                  <div className="md:col-span-7 space-y-6">
                    
                    {/* Work Experience */}
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md mb-4 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-slate-700" />
                        Work Experience
                      </h2>

                      <div className="space-y-5">
                        {/* Job 1 */}
                        <div className="border-l-2 border-slate-200 pl-4 space-y-1.5">
                          <h3 className="font-bold text-sm text-slate-900">
                            Divine Astro Vastu Science LLP – Acharya Ganesh
                          </h3>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-sky-700">SEO Executive</span>
                            <span className="text-slate-500 font-mono text-[11px]">August 2025 – August 2026</span>
                          </div>
                          <ul className="text-xs text-slate-600 space-y-1.5 mt-2 list-disc list-inside">
                            <li>Handled the complete website and SEO activities.</li>
                            <li>Conducted keyword research and competitor analysis.</li>
                            <li>Performed regular website technical SEO audits.</li>
                            <li>Created and optimized high-intent service pages.</li>
                            <li>Worked on link-building activities and off-page authority.</li>
                            <li>Monitored keyword rankings and organic performance using Google Search Console and Google Analytics 4.</li>
                          </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="border-l-2 border-slate-200 pl-4 space-y-1.5">
                          <h3 className="font-bold text-sm text-slate-900">
                            ThinkBizz Hightech
                          </h3>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-sky-700">SEO Intern</span>
                            <span className="text-slate-500 font-mono text-[11px]">December 2024 – June 2025</span>
                          </div>
                          <ul className="text-xs text-slate-600 space-y-1 mt-2 list-disc list-inside">
                            <li>Performed off-page SEO activities and citation building.</li>
                            <li>Built high-quality backlinks to improve domain authority.</li>
                            <li>Conducted keyword research for target landing pages.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Personal Details */}
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1.5 rounded-md mb-3 flex items-center gap-2">
                        Personal Details
                      </h2>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div>
                          <span className="font-bold text-slate-900">Date of Birth:</span> 17 August 2004
                        </div>
                        <div>
                          <span className="font-bold text-slate-900">Nationality:</span> Indian
                        </div>
                        <div>
                          <span className="font-bold text-slate-900">Marital Status:</span> Single
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Modal Bottom Footer Actions */}
            <div className="p-4 border-t border-white/10 bg-[#070D1E] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-[var(--text-muted)] text-center sm:text-left">
                Click <span className="text-brand-cyan font-semibold">Download PDF</span> to save the official resume file to your device.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-display font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isDownloading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  {isDownloading ? "Generating PDF..." : "Download Resume PDF"}
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
