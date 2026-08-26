import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Building2
} from "lucide-react";
import { experienceData } from "@/data/portfolioData";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen glow-mesh pt-6 pb-20">
      <section className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="badge-glow mb-3">
            <Briefcase size={14} />
            <span>Professional Career</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Work Experience & Field Impact
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Practical background across institutional policy research, large-scale survey execution, government welfare operations, and analytics governance.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative mb-16">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-rose-500 via-red-500 to-transparent"></div>

          <div className="space-y-10 sm:space-y-12">
            {experienceData.map((item, idx) => (
              <div
                key={item.id}
                className="relative pl-12 sm:pl-20 animate-fade-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Timeline node icon */}
                <div className="absolute left-2.5 sm:left-6.5 top-2 w-3.5 h-3.5 rounded-full bg-rose-500 ring-4 ring-card dark:ring-background shadow-md"></div>

                <div className="glass-panel p-6 sm:p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <span className="badge-glow mb-2 text-[11px]">
                        {item.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary flex items-center gap-1.5 mt-0.5">
                        <Building2 size={15} />
                        <span>{item.company}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-muted-foreground mt-1 sm:mt-0 font-medium">
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

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Impact Highlights */}
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      Key Outcomes & Responsibilities:
                    </h4>
                    <div className="space-y-2">
                      {item.impactMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-rose-500 flex-shrink-0 mt-0.5"
                          />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                      Tools & Methodologies:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.toolsUsed.map((tool, tIdx) => (
                        <span key={tIdx} className="badge-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto glass-panel p-8 text-center animate-fade-up">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Interested in discussing potential roles or consulting?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            I am always open to exploring exciting opportunities in data analytics, research, and business intelligence.
          </p>
          <Link to="/contact" className="btn-primary">
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experience;
