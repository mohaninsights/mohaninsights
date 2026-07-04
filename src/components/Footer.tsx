import { ArrowUp, Mail, Phone, ExternalLink, ChevronRight } from "lucide-react";

interface FooterProps {
  onLinkClick: (sectionId: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const currentYear = 2026;

  const quickLinks = [
    { name: "Home Base", id: "home" },
    { name: "About Mohan", id: "about" },
    { name: "Expertise Skills", id: "skills" },
    { name: "SEO Case Study", id: "case-study" },
    { name: "Career Experience", id: "experience" },
  ];

  const servicesLinks = [
    { name: "Technical SEO Auditing", id: "skills" },
    { name: "On Page Content Plan", id: "skills" },
    { name: "Authority Link Building", id: "skills" },
    { name: "Social Syndication (SMO)", id: "skills" },
    { name: "Get SEO Consultation", id: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030612] border-t border-white/[0.05] pt-16 pb-8 z-10 overflow-hidden">
      {/* Decorative linear glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <button
              onClick={() => onLinkClick("home")}
              className="flex items-center gap-3 text-left group mb-5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-cyan p-[1px]">
                <div className="w-full h-full rounded-xl bg-[#030612] flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-white">MK</span>
                </div>
              </div>
              <div>
                <span className="block font-display font-bold text-base tracking-wider text-white group-hover:text-brand-cyan transition-colors">
                  MohanInsights
                </span>
                <span className="block font-sans text-[9px] text-gray-500 tracking-widest uppercase">
                  SEO &amp; SMO EXPERT
                </span>
              </div>
            </button>

            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
              Helping businesses grow online traffic, expand organic keyword reach, fix crawl bottlenecks, and capture ranking opportunities.
            </p>

            {/* Direct quick communication indicators */}
            <div className="space-y-2 mt-6">
              <a
                href="mailto:mohankaka172004@gmail.com"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                mohankaka172004@gmail.com
              </a>
              <a
                href="tel:+918585974338"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-brand-cyan transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-purple" />
                +91 8585974338
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2.5">
            <h4 className="font-display font-bold text-xs text-white tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-brand-cyan hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-purple" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-2.5">
            <h4 className="font-display font-bold text-xs text-white tracking-widest uppercase mb-4">
              Services Scope
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-brand-cyan hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-cyan" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Operations & Trust */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="font-display font-bold text-xs text-white tracking-widest uppercase mb-4">
              Service Area
            </h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
              Delivering high-performance local campaigns in Delhi, India, and robust remote optimization contracts globally.
            </p>
            
            <button
              onClick={() => onLinkClick("contact")}
              className="mt-2 py-2 px-4 rounded-xl border border-white/5 hover:border-brand-cyan hover:bg-brand-cyan/5 text-center text-[10px] font-mono tracking-widest uppercase text-white hover:text-white transition-all cursor-pointer"
            >
              Get Consultation
            </button>
          </div>

        </div>

        {/* Lower Row: Copyrights & Back To Top */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-center sm:text-left">
            <p className="font-sans text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
              &copy; {currentYear} MohanInsights. All Rights Reserved.
            </p>
            <p className="font-sans text-[9px] text-gray-600 mt-1">
              Engineered with advanced high-speed 3D WebGL, GSAP transitions, and fully index-friendly HTML architectures.
            </p>
          </div>

          {/* Scroll To Top button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:bg-white/[0.08] hover:border-brand-cyan/20 hover:-translate-y-1 transition-all cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
