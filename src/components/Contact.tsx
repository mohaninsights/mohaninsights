import { useState, forwardRef, useImperativeHandle, useRef, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, Mail, MessageSquare, Globe, ArrowUpRight, Send, 
  MapPin, Check, CheckCircle2, ShieldCheck, HelpCircle 
} from "lucide-react";

export interface ContactRef {
  preselectService: (serviceName: string) => void;
}

const Contact = forwardRef<ContactRef, {}>((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    service: "Technical SEO",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const websiteInputRef = useRef<HTMLInputElement>(null);

  // Expose a function to preselect the service and focus the website input
  useImperativeHandle(ref, () => ({
    preselectService(serviceName: string) {
      setFormData((prev) => ({
        ...prev,
        service: serviceName,
        message: serviceName === "Free SEO Audit" 
          ? "Hi Mohan, I would like to request a Free SEO & SMO Audit Report for my website to discover technical indexation and ranking opportunities." 
          : prev.message
      }));
      
      // Auto focus the website URL input to streamline conversion
      setTimeout(() => {
        if (websiteInputRef.current) {
          websiteInputRef.current.focus();
          websiteInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    }
  }));

  const servicesList = [
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO & Link Building",
    "Local SEO",
    "Free SEO Audit",
    "E-Commerce SEO",
    "SMO Services",
    "Analytics & Reporting"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    
    // Simulate premium backend sending
    setTimeout(() => {
      setFormStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        websiteUrl: "",
        service: "Technical SEO",
        message: ""
      });
    }, 1800);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (formStatus === "error") setFormStatus("idle");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-stars">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-3">
            Inquire Now
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight">
            Let's Grow Your Business
          </h2>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
            Ready to resolve crawling errors, boost organic Google traffic, and capture rankings? Let's align your SEO goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Column 1: Core contact card & direct communication links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact detail block */}
            <div className="glass-panel border border-[var(--glass-border)] rounded-2xl p-6 relative overflow-hidden bg-[var(--bg-card)]/60">
              <h3 className="font-display font-bold text-base text-[var(--text-main)] tracking-wide mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email link detail */}
                <a
                  href="mailto:mohankaka172004@gmail.com?subject=SEO%20SMO%20Inquiry%20-%20MohanInsights"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/20 flex items-center justify-center text-brand-cyan group-hover:bg-[#00F2FF]/20 group-hover:border-[#00F2FF] transition-all duration-300">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase">Write Email</span>
                    <span className="font-display text-xs font-semibold text-[var(--text-main)] group-hover:text-brand-cyan transition-colors">
                      mohankaka172004@gmail.com
                    </span>
                  </div>
                </a>

                {/* Call direct link detail */}
                <a
                  href="tel:+918585974338"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-brand-purple group-hover:bg-[#0066FF]/20 group-hover:border-brand-purple transition-all duration-300">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase">Direct Call</span>
                    <span className="font-display text-xs font-semibold text-[var(--text-main)] group-hover:text-brand-cyan transition-colors">
                      +91 8585974338
                    </span>
                  </div>
                </a>

                {/* Location label */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)]">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase">Operation Hub</span>
                    <span className="font-display text-xs font-semibold text-[var(--text-main)]">
                      Delhi, India (Open to Worldwide Remote)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels (CTA Hub) */}
            <div className="glass-panel border border-[var(--glass-border)] rounded-2xl p-6 relative bg-[var(--bg-card)]/60">
              <h3 className="font-display font-bold text-sm text-[var(--text-main)] tracking-wider uppercase mb-4">
                Instant Chat &amp; Booking
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/918585974338?text=Hi%20Mohan,%20I'm%20interested%20in%20your%20SEO%20and%20SMO%20services!%20Let's%20discuss%20our%20website's%20organic%20traffic%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/20 hover:border-[#25d366] transition-all flex items-center justify-center gap-2 text-[#25d366] text-xs font-display font-semibold"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                  WhatsApp Chat
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Direct Line button */}
                <a
                  href="tel:+918585974338"
                  className="py-3 px-4 rounded-xl bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/20 hover:border-brand-cyan transition-all flex items-center justify-center gap-2 text-brand-cyan text-xs font-display font-semibold"
                >
                  <Phone className="w-4.5 h-4.5" />
                  Call Mobile
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Premium Google Maps Style Custom Graphic (Spider crawl network representation) */}
            <div className="glass-panel border border-[var(--glass-border)] rounded-2xl p-5 relative overflow-hidden bg-[var(--bg-card)]/80 h-[220px]">
              
              {/* Outer map style frame overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--text-muted) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
              
              {/* Pulsating crawling spider nodes to simulate high-tech geo-location optimization */}
              <div className="absolute top-1/3 left-1/4">
                <span className="absolute -inset-2.5 bg-brand-cyan/30 rounded-full animate-ping" />
                <span className="relative block w-3.5 h-3.5 rounded-full bg-brand-cyan border border-white" />
              </div>

              <div className="absolute top-2/3 left-2/3">
                <span className="absolute -inset-2.5 bg-brand-purple/30 rounded-full animate-ping [animation-delay:0.8s]" />
                <span className="relative block w-3.5 h-3.5 rounded-full bg-brand-purple border border-white" />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-3 z-10 glass-panel border border-[var(--glass-border)] rounded-xl">
                <span className="block font-mono text-[9px] text-brand-cyan tracking-widest uppercase">MAP OPTIMIZATION</span>
                <span className="block font-display font-bold text-xs text-[var(--text-main)] mt-0.5">LOCALIZED SEO TARGETS</span>
                <span className="block font-sans text-[10px] text-[var(--text-muted)] mt-1">Multi-Node Search Reach Mapping</span>
              </div>

              {/* Connecting web lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="25%" y1="33%" x2="50%" y2="50%" stroke="#00F2FF" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="66%" y1="66%" x2="50%" y2="50%" stroke="#0066FF" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="25%" y1="33%" x2="66%" y2="66%" stroke="#ffffff" strokeWidth="0.5" />
              </svg>

            </div>

          </div>

          {/* Column 2: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-heavy border border-[var(--glass-border)] rounded-2xl p-6 sm:p-8 relative bg-[var(--bg-card)]/80 shadow-xl">
              
              <h3 className="font-display font-bold text-base text-[var(--text-main)] tracking-wide mb-6">
                SEO Intake Form
              </h3>

              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-[var(--text-main)]">Message Dispatched!</h4>
                    <p className="font-sans text-xs text-[var(--text-muted)] mt-3 max-w-md leading-relaxed">
                      Thank you for contacting MohanInsights. Mohan Kumar has received your SEO metrics and website details. We will conduct our initial visibility analysis and write back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-8 px-6 py-2.5 rounded-full bg-[var(--text-main)] text-[var(--bg-main)] font-display font-bold text-[11px] tracking-wider uppercase hover:bg-brand-cyan hover:scale-105 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Error Notice */}
                    {formStatus === "error" && (
                      <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-sans">
                        Please provide your Name, Email, and a valid message to submit.
                      </div>
                    )}

                    {/* Grid Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Mohan Kumar"
                          required
                          className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:border-brand-cyan focus:outline-none focus:bg-[var(--glass-bg)]/80 transition-all placeholder:text-gray-600"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="client@growthbusiness.com"
                          required
                          className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:border-brand-cyan focus:outline-none focus:bg-[var(--glass-bg)]/80 transition-all placeholder:text-gray-600"
                        />
                      </div>
                    </div>

                    {/* Website URL Input */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                        <span>Website URL</span>
                        <span className="text-[9px] text-[var(--text-muted)] italic lowercase opacity-75">optional but recommended</span>
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        <input
                          ref={websiteInputRef}
                          type="url"
                          name="websiteUrl"
                          value={formData.websiteUrl}
                          onChange={handleChange}
                          placeholder="https://yourwebsite.com"
                          className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl pl-11 pr-4 py-3 text-xs text-[var(--text-main)] focus:border-brand-cyan focus:outline-none focus:bg-[var(--glass-bg)]/80 transition-all placeholder:text-gray-600"
                        />
                      </div>
                    </div>

                    {/* Service Required Selector */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                        SEO Service Scope Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[var(--bg-card-heavy)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:border-brand-cyan focus:outline-none transition-all cursor-pointer"
                      >
                        {servicesList.map((service, idx) => (
                          <option key={idx} value={service} className="bg-[var(--bg-card-heavy)] text-[var(--text-main)] py-2">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                        SEO Goals &amp; Description
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Detail your organic ranking hurdles, key competitor URLs, or organic traffic objectives..."
                        className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-xs text-[var(--text-main)] focus:border-brand-cyan focus:outline-none focus:bg-[var(--glass-bg)]/80 transition-all placeholder:text-gray-600 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 rounded-xl font-display font-bold text-xs tracking-widest uppercase text-black bg-gradient-to-r from-brand-purple to-brand-cyan hover:scale-101 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] disabled:opacity-50 disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          TRANSMITTING METRICS...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <div className="pt-2 text-center flex items-center justify-center gap-2 text-[10px] text-[var(--text-muted)] font-mono">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Data protected with bank-grade local SSL cryptography.</span>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
