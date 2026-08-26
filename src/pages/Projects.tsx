import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Database,
  Search,
  CheckCircle2,
  X,
  Layers,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { projectsData, Project } from "@/data/portfolioData";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Machine Learning", "Python", "R", "SQL", "Excel"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category === selectedCategory ||
      Boolean(project.categories && project.categories.includes(selectedCategory as any));
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen glow-mesh pt-6 pb-20">
      <section className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <div className="badge-glow mb-3">
            <Layers size={14} />
            <span>Applied Analytics Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Data Projects & Case Studies
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Practical analytics implementations examining multi-million record datasets, relational database queries, and statistical modeling in R and Python.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4 animate-fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-md shadow-sm w-full sm:w-auto justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md shadow-rose-500/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {category} {category !== "All" && "Projects"}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search tools, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-card/70 border border-border/80 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-panel p-12 text-center max-w-md mx-auto">
            <p className="text-muted-foreground font-medium mb-3">
              No projects found matching your query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="btn-secondary !py-1.5 !px-4 text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="glass-panel overflow-hidden flex flex-col group hover:border-primary/50 hover:shadow-2xl transition-all duration-300 animate-fade-up cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Media */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-background/90 text-foreground backdrop-blur-md border border-border shadow-sm">
                      {project.categories ? project.categories.join(" & ") : project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-600/90 text-white backdrop-blur-md shadow-sm">
                      {project.dataSize}
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights Preview */}
                    <div className="space-y-1.5 mb-5 text-xs text-foreground/85">
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-rose-500 flex-shrink-0 mt-0.5"
                          />
                          <span className="line-clamp-1">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="badge-tag">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/60">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <div className="flex items-center gap-3">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-foreground font-medium flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} />
                            <span>Code</span>
                          </a>
                        )}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary !py-1.5 !px-3 !text-xs !rounded-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Live Report</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Case Study Deep Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="glass-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 shadow-2xl relative">
              {/* Header Image in Modal */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/80 text-foreground backdrop-blur-md border border-border shadow-md hover:bg-background transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-background/90 text-foreground backdrop-blur-md border border-border">
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-600/90 text-white backdrop-blur-md">
                    {selectedProject.dataSize}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-1">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-3">
                    Key Methodology & Impact
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-rose-500 flex-shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-3">
                    Technologies & Packages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, idx) => (
                      <span key={idx} className="badge-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Open Case Study / Report</span>
                  </a>
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
