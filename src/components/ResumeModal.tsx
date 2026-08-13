import React, { useEffect, useRef, useState } from "react";
import { X, Download, Printer, ExternalLink, FileText, CheckCircle2, Phone, Mail, MapPin, Briefcase, GraduationCap, Award, Globe, User, Loader2 } from "lucide-react";
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
      // 1. Fetch backend generated static PDF file as Blob to force direct file download
      const response = await fetch("/Mohan_Kumar_Resume.pdf?v=" + Date.now());
      if (response.ok) {
        const blob = await response.blob();
        if (blob.size > 1000) {
          const blobUrl = window.URL.createObjectURL(
            new Blob([blob], { type: "application/pdf" })
          );
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = "Mohan_Kumar_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
          }, 1000);
          setIsDownloading(false);
          return;
        }
      }
    } catch (err) {
      console.warn("Blob download failed, falling back to client jsPDF canvas render:", err);
    }

    // 2. Client-side canvas fallback if fetch fails
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
        console.error("Canvas PDF render failed, opening direct window:", renderError);
        window.open("/Mohan_Kumar_Resume.pdf", "_blank");
      }
    } else {
      window.open("/Mohan_Kumar_Resume.pdf", "_blank");
    }

    setTimeout(() => {
      setIsDownloading(false);
    }, 600);
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
              <div ref={resumeRef} className="w-full max-w-3xl mx-auto bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-10 font-sans text-sm relative overflow-hidden">
                
                {/* Header Section (Navy Banner) */}
                <div className="bg-[#132043] text-white p-6 sm:p-8 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 rounded-t-xl">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                    MOHAN KUMAR
                  </h1>
                  <p className="text-sky-300 font-bold text-sm tracking-widest uppercase mt-1">
                    SEO EXECUTIVE
                  </p>
                </div>

                {/* Contact Pill Bar */}
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-800 font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#132043] flex items-center justify-center text-white shrink-0">
                        <Phone className="w-3 h-3" />
                      </div>
                      <span className="font-bold">8585974338</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#132043] flex items-center justify-center text-white shrink-0">
                        <Mail className="w-3 h-3" />
                      </div>
                      <span className="font-bold">mohankaka172004@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#132043] flex items-center justify-center text-white shrink-0">
                        <MapPin className="w-3 h-3" />
                      </div>
                      <span className="font-bold">New Delhi</span>
                    </div>
                  </div>
                </div>

                {/* Two-Column Resume Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left Sidebar (Summary, Education, Skills, Languages) */}
                  <div className="md:col-span-5 space-y-6">
                    
                    {/* Summary */}
                    <div>
                      <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-1.5">
                        <span className="px-3 py-1 bg-[#132043] text-white rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
                          <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#132043] shrink-0">
                            <FileText className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          PROFESSIONAL SUMMARY
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        Results-driven SEO Executive with 1.5+ years of hands-on experience in managing website organic search, improving keyword rankings, and driving targeted traffic. Highly proficient in keyword research, competitor analysis, technical SEO site audits, on-page & off-page optimization, link building, and performance analytics using Google Search Console and Google Analytics 4.
                      </p>
                    </div>

                    {/* Education */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-1.5">
                        <span className="px-3 py-1 bg-[#132043] text-white rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
                          <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#132043] shrink-0">
                            <GraduationCap className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          EDUCATION
                        </span>
                      </div>
                      <div className="space-y-3.5">
                        <div>
                          <p className="font-bold text-xs text-slate-900">Diploma in Digital Marketing</p>
                          <p className="text-[11px] text-slate-600">Indian Institution of Computer Science</p>
                          <p className="text-[10px] font-bold text-sky-800">Completed 2024</p>
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900">Bachelor of Arts (BA)</p>
                          <p className="text-[11px] text-slate-600">Delhi University</p>
                          <p className="text-[10px] font-bold text-sky-800">Graduated 2025</p>
                        </div>
                        <div>
                          <p className="font-bold text-xs text-slate-900">Senior Secondary High School</p>
                          <p className="text-[11px] text-slate-600">Central Board of Secondary Education (CBSE)</p>
                          <p className="text-[10px] font-bold text-sky-800">Completed 2022</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <div className="flex items-center gap-2 mb-2.5 border-b border-slate-200 pb-1.5">
                        <span className="px-3 py-1 bg-[#132043] text-white rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
                          <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#132043] shrink-0">
                            <Award className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          SKILLS & EXPERTISE
                        </span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-800">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> SEO (On-Page & Off-Page)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> Keyword Research & Strategy
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> Competitor Benchmarking
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> Technical SEO Audits
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> High-Quality Link Building
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> Google Search Console
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> Google Analytics 4 (GA4)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> SEMrush / Ahrefs / Screaming Frog
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> WordPress CMS & Optimization
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> Rank Math / Yoast SEO
                        </li>
                      </ul>
                    </div>

                    {/* Languages */}
                    <div>
                      <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-1.5">
                        <span className="px-3 py-1 bg-[#132043] text-white rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
                          <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#132043] shrink-0">
                            <Globe className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          LANGUAGES
                        </span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-800">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> Hindi <span className="text-slate-500 text-[11px]">(Native / Primary)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" /> English <span className="text-slate-500 text-[11px]">(Professional Working)</span>
                        </li>
                      </ul>
                    </div>

                  </div>

                  {/* Right Main Column (Work Experience & Personal Details) */}
                  <div className="md:col-span-7 space-y-6">
                    
                    {/* Work Experience */}
                    <div>
                      <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-1.5">
                        <span className="px-3 py-1 bg-[#132043] text-white rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
                          <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#132043] shrink-0">
                            <Briefcase className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          WORK EXPERIENCE
                        </span>
                      </div>

                      <div className="space-y-6">
                        {/* Job 1 */}
                        <div className="space-y-1.5">
                          <h3 className="font-bold text-sm text-slate-900">
                            Divine Astro Vastu Science LLP - Acharya Ganesh
                          </h3>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-sky-800">SEO Executive</span>
                            <span className="text-slate-600 font-semibold text-[11px]">August 2025 - August 2026</span>
                          </div>
                          <ul className="text-xs text-slate-700 space-y-1.5 mt-2 list-disc list-inside">
                            <li>Managed end-to-end website SEO operations to significantly increase organic traffic and search engine rankings.</li>
                            <li>Conducted detailed target keyword research and competitor benchmarking to identify high-value search opportunities.</li>
                            <li>Performed regular technical SEO audits, resolving site crawl errors, broken links, and page speed bottlenecks.</li>
                            <li>Created and optimized high-intent service landing pages with structured meta tags, headers, and internal linking.</li>
                            <li>Executed off-page authority building and strategic link-building campaigns to boost domain rating.</li>
                            <li>Monitored keyword positions, organic impressions, and click-through rates (CTR) using Google Search Console and GA4.</li>
                          </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="space-y-1.5">
                          <h3 className="font-bold text-sm text-slate-900">
                            ThinkBizz Hightech
                          </h3>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-sky-800">SEO Intern</span>
                            <span className="text-slate-600 font-semibold text-[11px]">December 2024 - June 2025</span>
                          </div>
                          <ul className="text-xs text-slate-700 space-y-1.5 mt-2 list-disc list-inside">
                            <li>Executed off-page SEO strategies, web directory listings, and business citation submissions.</li>
                            <li>Built high-quality contextual backlinks to improve website authority and search engine indexation.</li>
                            <li>Assisted senior marketing team in keyword discovery and content optimization for landing pages.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Personal Details */}
                    <div>
                      <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-1.5">
                        <span className="px-3 py-1 bg-[#132043] text-white rounded-full text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
                          <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#132043] shrink-0">
                            <User className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          PERSONAL DETAILS
                        </span>
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-800">
                        <div className="flex items-center">
                          <span className="font-bold w-28 text-slate-900">Date of Birth</span>
                          <span className="mr-2">:</span>
                          <span>17 August 2004</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold w-28 text-slate-900">Nationality</span>
                          <span className="mr-2">:</span>
                          <span>Indian</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold w-28 text-slate-900">Marital Status</span>
                          <span className="mr-2">:</span>
                          <span>Single</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Bottom Navy Footer Bar */}
                <div className="h-3.5 bg-[#132043] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 mt-8 rounded-b-xl" />

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
