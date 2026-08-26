import { useState, useEffect } from "react";
import {
  ExternalLink,
  Award,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Maximize2,
  X,
  FileCheck
} from "lucide-react";
import { certificationsData, Certification } from "@/data/portfolioData";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper for image URLs located in public/ directory
  const getCertImageSrc = (imgName?: string) => {
    if (!imgName) return undefined;
    if (imgName.startsWith("http")) return imgName;
    const base = import.meta.env.BASE_URL || "/";
    const cleanBase = base.endsWith("/") ? base : `${base}/`;
    return `${cleanBase}${encodeURIComponent(imgName)}`;
  };

  return (
    <div className="min-h-screen glow-mesh pt-6 pb-20">
      <section className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <div className="badge-glow mb-3">
            <Award size={14} />
            <span>Verified Credentials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Professional Certifications
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Industry-recognized credentials validating rigorous capabilities in data analytics, SQL database engineering, Python data science, and business intelligence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {certificationsData.map((cert, idx) => {
            const imgSrc = getCertImageSrc(cert.image);
            return (
              <div
                key={cert.id}
                className="glass-panel overflow-hidden flex flex-col group hover:border-primary/50 hover:shadow-2xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Certificate Preview Header */}
                {imgSrc && (
                  <div
                    className="relative h-56 sm:h-64 bg-slate-950/40 p-4 flex items-center justify-center overflow-hidden cursor-pointer group/img"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={imgSrc}
                      alt={`${cert.title} Certificate`}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-md transition-transform duration-300 group-hover/img:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // In case of filename space encoding issue, try direct raw name
                        const target = e.currentTarget;
                        if (cert.image && !target.src.includes(cert.image)) {
                          target.src = cert.image;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                      <Maximize2 size={16} />
                      <span>Click to Enlarge</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="badge-glow bg-background/90 backdrop-blur-md">
                        <ShieldCheck size={12} className="text-emerald-500" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                          {cert.issuer}
                        </span>
                        <h3 className="text-xl font-bold text-foreground leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                      <span className="text-2xl">{cert.icon}</span>
                    </div>

                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground font-mono mb-3">
                        ID: <span className="text-foreground">{cert.credentialId}</span>
                      </p>
                    )}

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {cert.description}
                    </p>

                    {/* Validated Skills */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                        Validated Competencies:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="badge-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    {imgSrc && (
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1"
                      >
                        <FileCheck size={14} />
                        <span>View Image</span>
                      </button>
                    )}

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-1.5 !px-3.5 !text-xs !rounded-lg ml-auto"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Summary Banner */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-10 text-center animate-fade-up">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto mb-4">
            <Sparkles size={24} />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Continuous Learning & Rigorous Standards
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            These certifications demonstrate dedicated mastery across analytical pipelines, statistical methodologies, and modern query optimization.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="p-4 rounded-xl bg-card/60 border border-border/70">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                4+
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                Verified Credentials
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card/60 border border-border/70">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                18+
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                Validated Skills
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card/60 border border-border/70">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                100%
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                Completion Rate
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Enlarged Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative max-w-4xl w-full bg-card rounded-2xl p-4 border border-border shadow-2xl">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border shadow-md hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-3 pt-2">
                <h3 className="text-lg font-bold text-foreground">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Issued by {selectedCert.issuer}
                </p>
              </div>

              <div className="max-h-[75vh] flex items-center justify-center overflow-auto p-2 bg-slate-950/20 rounded-xl">
                <img
                  src={getCertImageSrc(selectedCert.image)}
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-2 !px-4 text-xs"
                >
                  <ExternalLink size={14} />
                  <span>Verify at Issuer Website</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Certifications;
