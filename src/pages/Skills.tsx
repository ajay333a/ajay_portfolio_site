import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  BarChart3,
  Wrench,
  Sparkles,
  ArrowRight,
  PieChart,
  CheckCircle2,
  Cpu
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="text-rose-500" size={24} />;
      case "Code2":
        return <Code2 className="text-red-500" size={24} />;
      case "BarChart3":
        return <BarChart3 className="text-orange-500" size={24} />;
      case "PieChart":
        return <PieChart className="text-pink-500" size={24} />;
      case "Wrench":
        return <Wrench className="text-amber-500" size={24} />;
      default:
        return <Database className="text-rose-500" size={24} />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level.toLowerCase()) {
      case "expert":
        return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
      case "advanced":
        return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
      default:
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20";
    }
  };

  return (
    <div className="min-h-screen glow-mesh pt-6 pb-20">
      <section className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="badge-glow mb-3">
            <Cpu size={14} />
            <span>Technical & ML Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Skills & Analytical Toolkit
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A comprehensive overview of Machine Learning (Scikit-Learn, SciPy), programming languages, data wrangling libraries, business intelligence tools, and biostatistical modeling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12 max-w-5xl mx-auto mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass-panel overflow-hidden animate-fade-up group hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual Header Image Sidebar */}
                <div className="lg:col-span-4 relative h-48 lg:h-auto min-h-[160px] overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 lg:top-6 lg:left-6 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-card/90 dark:bg-card/95 backdrop-blur-md shadow-md border border-border">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-center">
                  <p className="text-xs text-muted-foreground mb-6">
                    {category.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-card/60 dark:bg-card/40 border border-border/70 hover:border-primary/40 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-bold text-sm text-foreground">
                            {skill.name}
                          </h4>
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${getLevelBadgeClass(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2.5">
                          {skill.description}
                        </p>
                        {skill.tags && (
                          <div className="flex flex-wrap gap-1">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto glass-panel p-8 sm:p-10 text-center animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Want to see these skills in real analytics & ML projects?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Review live case studies, code repositories, and publication reports demonstrating these tools on real datasets.
          </p>
          <Link to="/projects" className="btn-primary">
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Skills;
