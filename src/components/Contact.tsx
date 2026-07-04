import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Star Overlay */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14 overflow-hidden py-4">
          <h2 className="font-druk font-black text-[9.5vw] sm:text-[11vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[8vw] tracking-[-0.04em] leading-[0.8] text-white uppercase select-none whitespace-nowrap drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] scale-y-[1.4] origin-center inline-block">
            GET IN TOUCH
          </h2>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-6 leading-relaxed">
            Ready to resolve crawling errors, boost organic Google traffic, and capture rankings? Let's connect directly.
          </p>
        </div>

        {/* Centered, side-by-side or stacked grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          
          {/* Box 1: Contact detail block */}
          <div className="glass-panel border border-[var(--glass-border)] rounded-2xl p-6 relative overflow-hidden bg-[var(--bg-card)] flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-base text-[var(--text-main)] tracking-wide mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email link detail */}
                <a
                  href="mailto:mohankaka172004@gmail.com?subject=SEO%20SMO%20Inquiry%20-%20MohanInsights"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/20 flex items-center justify-center text-brand-cyan group-hover:bg-[#00F2FF]/20 group-hover:border-[#00F2FF] transition-all duration-300 flex-shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase">Write Email</span>
                    <span className="font-display text-xs font-semibold text-[var(--text-main)] group-hover:text-brand-cyan transition-colors break-all">
                      mohankaka172004@gmail.com
                    </span>
                  </div>
                </a>

                {/* Call direct link detail */}
                <a
                  href="tel:+918585974338"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-brand-purple group-hover:bg-[#0066FF]/20 group-hover:border-brand-purple transition-all duration-300 flex-shrink-0">
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
                  <div className="w-11 h-11 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] flex-shrink-0">
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
          </div>

          {/* Box 2: Direct Communication Channels (CTA Hub) */}
          <div className="glass-panel border border-[var(--glass-border)] rounded-2xl p-6 relative bg-[var(--bg-card)] flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-sm text-[var(--text-main)] tracking-wider uppercase mb-6">
                Instant Chat &amp; Booking
              </h3>
              
              <p className="font-sans text-xs text-[var(--text-muted)] mb-6 leading-relaxed">
                Connect instantly for a consultation. Whether you have questions regarding crawl budgets, search indexation, or social media reach plans, we are available to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-auto">
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

        </div>

      </div>
    </section>
  );
}
