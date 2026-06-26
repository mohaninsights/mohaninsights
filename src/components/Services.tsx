import { motion } from "motion/react";
import { 
  ClipboardList, Cpu, FileText, Link2, MapPin, ShoppingBag, Share2, 
  LineChart, CheckCircle2, ArrowRight 
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  deliverables: string[];
  color: string;
}

interface ServicesProps {
  onBtnClick: (sectionId: string) => void;
}

export default function Services({ onBtnClick }: ServicesProps) {
  const servicesData: Service[] = [
    {
      title: "SEO Audit",
      description: "Complete diagnostic scan of index status, technical sitemaps, crawl budgets, on-page structure, and ranking gaps.",
      icon: ClipboardList,
      deliverables: ["Comprehensive Tech Audit PDF", "Priority Quick-Fix Action List", "Competitor Keyword Gap Report"],
      color: "from-[#ff5c35] to-[#ff9f43]"
    },
    {
      title: "Technical SEO",
      description: "Optimizing robots.txt, dynamic XML sitemaps, JSON-LD schemas, breadcrumbs, redirects, and Core Web Vitals speed.",
      icon: Cpu,
      deliverables: ["Dynamic Schema Graph Setup", "Vite/Next JS Page Speed Optimization", "Sitemap & robots.txt Audits"],
      color: "from-brand-cyan to-brand-purple"
    },
    {
      title: "On Page SEO",
      description: "Structuring high-conversion copy, keyword dense heading tags, semantic alt images, and meta tags.",
      icon: FileText,
      deliverables: ["Heading Tag Realignment", "Density Optimization", "Meta Titles & Description Copywriting"],
      color: "from-brand-purple to-brand-cyan"
    },
    {
      title: "Off Page SEO",
      description: "Authoritative white-hat link building and manual guest placements to elevate Domain Rating (DR) authority.",
      icon: Link2,
      deliverables: ["High DR Backlink Placements", "Profile Anchor Optimization", "Social Signal Backlink Syndication"],
      color: "from-brand-cyan to-brand-purple"
    },
    {
      title: "Local SEO",
      description: "Setting up Google Business Profile profiles, local citation syncs, localized keywords, and map rankings.",
      icon: MapPin,
      deliverables: ["Google Maps Ranking Boost", "Local Directory Citations sync", "Review Acquisition Templates"],
      color: "from-[#10b981] to-[#059669]"
    },
    {
      title: "E-Commerce SEO",
      description: "Optimizing category structures, Shopify/WooCommerce product pages, review markup schema, and product descriptions.",
      icon: ShoppingBag,
      deliverables: ["Product Page Structured Schema", "Category Crawl Indexing Patch", "Keyword Funneling Mapping"],
      color: "from-[#ec4899] to-[#db2777]"
    },
    {
      title: "SMO Services",
      description: "Social media optimization, post-engagement schedules, brand audits, social link signals, and bio updates.",
      icon: Share2,
      deliverables: ["Bio Optimization & Linking Hubs", "Automated Post Syndication", "Brand Consistency Auditing"],
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Analytics & Reporting",
      description: "Configuring Google Analytics GA4 streams, Google Tag Manager event tracking, and custom SEO dashboard reporting.",
      icon: LineChart,
      deliverables: ["Custom GTM Trigger Mapping", "GA4 Traffic Attribution Setup", "Bi-Weekly SEO Growth Reports"],
      color: "from-[#f59e0b] to-[#d97706]"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden grid-mesh">
      {/* Background radial soft lights */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-3">
            Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight">
            Premium SEO &amp; SMO Services
          </h2>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
            Data-driven execution scopes designed to conquer Google search results, streamline site mechanics, and engage digital social audiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-panel border border-[var(--glass-border)] hover:border-brand-cyan/20 rounded-2xl p-6 hover:bg-[var(--bg-card)] transition-all duration-300 flex flex-col justify-between group h-full shadow-lg"
              >
                <div>
                  {/* Icon with gradient circle */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} p-[1px] mb-5 shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-2xl bg-[var(--bg-card-heavy)] flex items-center justify-center text-white">
                      <ServiceIcon className="w-5.5 h-5.5 text-brand-cyan" />
                    </div>
                  </div>

                  {/* Title Description */}
                  <h3 className="font-display font-bold text-sm text-[var(--text-main)] tracking-wide mb-3 group-hover:text-brand-cyan transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullet List */}
                  <div className="space-y-2 border-t border-[var(--glass-border)] pt-4 mb-6">
                    <span className="block font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-widest mb-1.5">Deliverables:</span>
                    {service.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-[11px] text-[var(--text-sub)] leading-normal">
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Link */}
                <button
                  onClick={() => onBtnClick("contact")}
                  className="w-full mt-4 py-2.5 rounded-xl border border-[var(--glass-border)] hover:border-brand-cyan hover:bg-brand-cyan/10 font-display font-semibold text-[11px] tracking-wider text-[var(--text-main)] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Request Service
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
