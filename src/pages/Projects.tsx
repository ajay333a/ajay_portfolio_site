import { useState, useEffect } from "react";
import { ExternalLink, Github, Database, BarChart3, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  dataSize: string;
  tools: string[];
  link: string;
  githubLink?: string;
  image: string;
  category: string;
  highlights: string[];
}

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Cyclist Bike Share Analysis",
      description: "Comprehensive analysis of bike share data to understand user patterns and optimize service delivery. Analyzed 5M+ records using R programming with focus on seasonal trends and user behavior.",
      dataSize: "5M+ Records",
      tools: ["R", "dplyr", "ggplot2", "Statistical Analysis"],
      link: "https://ajay333a.quarto.pub/ajay333a/posts/cyclist_trip_analysis/cyclist_bike_202207_202306.html",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      category: "Data Analysis",
      highlights: [
        "Processed 5+ million bike trip records",
        "Identified seasonal usage patterns",
        "Created actionable recommendations for service optimization",
        "Developed interactive visualizations for stakeholder presentations"
      ]
    },
    {
      title: "SQL Amazon Store Analysis",
      description: "Database analysis project demonstrating advanced SQL techniques including complex joins, subqueries, and window functions to extract business insights from music store data.",
      dataSize: "Complex Queries",
      tools: ["MySQL", "Joins", "Subqueries", "Window Functions"],
      link: "https://github.com/ajay333a/cs_50_ajay/tree/main/wk_7_SQL",
      githubLink: "https://github.com/ajay333a/cs_50_ajay/tree/main/wk_7_SQL",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
      category: "Database Analysis",
      highlights: [
        "Advanced SQL query optimization",
        "Complex data relationships analysis",
        "Business intelligence reporting",
        "Performance tuning and indexing strategies"
      ]
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-card-foreground mb-6">
            Projects Portfolio
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-4">
            Practical, real-world analytics using real-world data
          </p>
          <p className="text-lg text-muted-foreground">
            Click on any project to see detailed insights and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-inter font-semibold text-card-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Database size={16} className="text-teal" />
                    <span className="text-sm font-medium text-card-foreground">{project.dataSize}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-card-foreground font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-card rounded-full p-2 shadow-lg hover:bg-accent"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-2xl font-inter font-bold text-card-foreground mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-card-foreground mb-3">Key Highlights:</h3>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-card-foreground mb-3">Tools & Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Full Project
                  </a>
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github size={16} />
                      View Code
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
