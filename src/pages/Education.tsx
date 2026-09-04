import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { educationData } from "@/data/portfolioData";

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen glow-mesh pb-20">
      <section className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="badge-glow mb-3">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Educational Journey & Research
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Rigorous foundation in Forest Biology, biometric analysis, and quantitative research methods from the University of Agricultural Sciences, Dharwad.
          </p>
        </div>

        {/* Degrees Grid */}
        <div className="space-y-8 max-w-4xl mx-auto mb-16">
          {educationData.map((item, idx) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="badge-glow text-[11px]">
                      {item.degree}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                      CGPA: {item.cgpa}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {item.field}
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-1">
                    {item.institution}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-2 text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-primary" />
                    <span>{item.duration}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-primary" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Research Highlights */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  Key Academic Highlights:
                </h4>
                <div className="space-y-1.5">
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-rose-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thesis Spotlight */}
              {item.thesis && (
                <div className="p-4 rounded-xl bg-card/60 dark:bg-card/40 border border-border/70 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    <BookOpen size={14} />
                    <span>Research Thesis</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 italic">
                    "{item.thesis}"
                  </p>
                </div>
              )}

              {/* Tools & Methods */}
              {item.tools && (
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Methodologies & Analytical Tools:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="badge-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto glass-panel p-8 text-center animate-fade-up">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Interested in biostatistics or ecological analytics?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Let's discuss quantitative modeling, experimental design, and analytics solutions.
          </p>
          <Link to="/contact" className="btn-primary">
            <span>Contact Me</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Education;
