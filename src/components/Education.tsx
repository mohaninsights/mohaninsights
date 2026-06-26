import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, BookOpen, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  badge: string;
}

export default function Education() {
  const educationData: EducationItem[] = [
    {
      degree: "Diploma in Digital Marketing",
      institution: "Indian Institution of Computer Science",
      period: "Completed 2024",
      details: "Comprehensive 1-year professional specialization. Practical training on core SEO mechanics, social audience targeting, link acquisition, and organic conversion auditing.",
      badge: "1 Year Diploma"
    },
    {
      degree: "Bachelor of Arts (BA)",
      institution: "Delhi University",
      period: "Graduated 2025",
      details: "Academic major emphasizing critical research, written communication, analytical thinking, and sociological data trends, laying robust foundations for copywriting.",
      badge: "Undergraduate"
    },
    {
      degree: "Senior Secondary High School",
      institution: "Central Board of Secondary Education (CBSE)",
      period: "Completed 2022",
      details: "Graduated with core disciplines. Laying early skills in systematic analysis, technological literacy, and written compositions.",
      badge: "Senior High"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Star Overlay */}
      <div className="absolute inset-0 bg-stars pointer-events-none" />
      {/* Background glowing shape */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand-purple tracking-widest uppercase px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 inline-block mb-3">
            Academic
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text-main)] tracking-tight">
            Academic Foundations
          </h2>
          <p className="font-sans text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
            Professional certifications and formal qualifications validating systematic marketing competencies and research methods.
          </p>
        </div>

        {/* Education Bento-Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel border border-[var(--glass-border)] hover:border-brand-cyan/20 rounded-2xl p-6 hover:bg-[var(--bg-card)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div>
                {/* Header Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-full border border-brand-cyan/10 uppercase tracking-widest">
                    {edu.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-[var(--glass-border)] flex items-center justify-center text-brand-purple group-hover:text-brand-cyan transition-colors">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-display font-bold text-sm text-[var(--text-main)] tracking-wide group-hover:text-brand-cyan transition-colors duration-300">
                  {edu.degree}
                </h3>
                
                <p className="font-sans text-xs text-[var(--text-muted)] font-semibold mt-1 flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-brand-purple" />
                  {edu.institution}
                </p>

                <p className="font-sans text-xs text-[var(--text-sub)] mt-4 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              {/* Card Footer Status */}
              <div className="mt-6 pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-[10px] text-[var(--text-muted)] font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  India
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
