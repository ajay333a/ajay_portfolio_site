import { useState, useEffect } from "react";
import {
  ExternalLink,
  BookOpen,
  Clock,
  Tag,
  Sparkles,
  ArrowRight,
  Code2
} from "lucide-react";
import { blogPostsData, personalInfo } from "@/data/portfolioData";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Python" | "R">("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts =
    activeFilter === "All"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === activeFilter);

  return (
    <div className="min-h-screen glow-mesh pb-20">
      <section className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <div className="badge-glow mb-3">
            <BookOpen size={14} />
            <span>Technical Projects & Publications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Projects & Case Study Hub
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Detailed project walkthroughs, reproducible code notebooks, and statistical investigations published across dedicated R and Python Quarto hubs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-card/70 border border-border/80 backdrop-blur-md shadow-sm">
            {(["All", "R", "Python"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-md shadow-rose-500/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {filter} {filter !== "All" && "Projects"}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              className="glass-panel overflow-hidden flex flex-col group hover:border-primary/50 hover:shadow-2xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Cover Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
                      post.category === "Python"
                        ? "bg-blue-600/90 backdrop-blur-md"
                        : "bg-purple-600/90 backdrop-blur-md"
                    }`}
                  >
                    {post.category} Case Study
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.summary}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-primary" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="badge-tag">
                        <Tag size={10} className="text-primary mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <span>Read on Quarto</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Quarto Publication Hubs */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-up">
          <div className="glass-panel p-8 flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300">
            <div>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3 inline-block">
                Quarto Portal
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                R Programming & Biostatistics Blog
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Explore in-depth R tutorials covering data transformation with dplyr, advanced visualizations with ggplot2, and ecological modeling.
              </p>
            </div>
            <a
              href={personalInfo.rBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Visit R Quarto Hub</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="glass-panel p-8 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300">
            <div>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 inline-block">
                Quarto Portal
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Python Data Science Blog
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Read Python analyses covering pandas pipelines, exploratory data analysis, geospatial mapping, and automated statistical reporting.
              </p>
            </div>
            <a
              href={personalInfo.pythonBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Visit Python Quarto Hub</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
