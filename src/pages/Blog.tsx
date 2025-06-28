import { useState, useEffect } from "react";
import { ExternalLink, Clock, Tag } from "lucide-react";

interface BlogPost {
  title: string;
  category: "Python" | "R";
  summary: string;
  readTime: string;
  tags: string[];
  link: string;
  image: string;
}

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState<"All" | "Python" | "R">("All");

  const blogPosts: BlogPost[] = [
    {
      title: "Medicines Side-effects Analysis with R",
      category: "R",
      summary: "Deep dive into medicines use analysis using R, exploring user patterns and seasonal trends with ggplot2 and dplyr.",
      readTime: "15 min read",
      tags: ["R", "Data Analysis", "ggplot2", "dplyr"],
      link: "https://ajay333a.quarto.pub/ajay333a/posts/meds_analysis/Medicines_usage_sideeffects.html",
      image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&w=500" // Pexels, healthcare/pills, accessible in India
    },
    {
      title: "Cyclist Trip Analysis with Python",
      category: "Python",
      summary: "Analysis of cyclist trip data using Python, focusing on trip patterns, duration analysis, and visualization with pandas.",
      readTime: "12 min read",
      tags: ["Python", "Pandas", "Data Science", "Visualization"],
      link: "https://ajay333a.quarto.pub/python_blog/posts/cyclist_trip_analysis/cyc_trip_analysis.html",
      image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&w=500" // Pexels, clear image of cyclists on bikes
    }
  ];

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-card-foreground mb-6">
            Blog & Tutorials
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Sharing insights, tutorials, and learnings from my data analytics journey
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <div className="bg-muted p-1 rounded-lg">
            {["All", "Python", "R"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as "All" | "Python" | "R")}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-card-foreground"
                }`}
              >
                {filter} Blog{filter !== "All" ? "s" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-xl shadow-lg overflow-hidden card-hover animate-fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    post.category === "Python" ? "bg-blue-500" : "bg-purple-500"
                  }`}>
                    {post.category} Blog
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-inter font-semibold text-card-foreground mb-3">
                  {post.title}
                </h3>

                <p className="text-foreground mb-4 leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                >
                  Read More
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Links Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-up">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-inter font-semibold text-card-foreground mb-4">
              R Programming Blog
            </h3>
            <p className="text-foreground mb-6">
              Explore my R programming journey with practical tutorials and real-world data analysis projects.
            </p>
            <a
              href="https://ajay333a.quarto.pub/ajay333a/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Visit R Blog
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-inter font-semibold text-card-foreground mb-4">
              Python Data Science Blog
            </h3>
            <p className="text-foreground mb-6">
              Discover Python data science techniques, pandas operations, and advanced analytics methodologies.
            </p>
            <a
              href="https://ajay333a.quarto.pub/python_blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Visit Python Blog
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
