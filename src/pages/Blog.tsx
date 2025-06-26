
import { useState } from "react";
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
  const [activeFilter, setActiveFilter] = useState<"All" | "Python" | "R">("All");

  const blogPosts: BlogPost[] = [
    {
      title: "Cyclistic Bike Share Analysis with R",
      category: "R",
      summary: "Deep dive into bike share data analysis using R, exploring user patterns and seasonal trends with ggplot2 and dplyr.",
      readTime: "15 min read",
      tags: ["R", "Data Analysis", "ggplot2", "dplyr"],
      link: "https://ajay333a.quarto.pub/ajay333a/posts/cyclistic_rproject/cyclistic_rproject.html",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
    },
    {
      title: "Python Data Analysis Tutorials",
      category: "Python",
      summary: "Comprehensive tutorials covering Python data analysis techniques, pandas operations, and visualization best practices.",
      readTime: "12 min read",
      tags: ["Python", "Pandas", "Data Science", "Visualization"],
      link: "https://ajay333a.quarto.pub/python_blog/",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500"
    }
  ];

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-charcoal mb-6">
            Blog & Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights, tutorials, and learnings from my data analytics journey
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <div className="bg-gray-100 p-1 rounded-lg">
            {["All", "Python", "R"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as "All" | "Python" | "R")}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-teal text-white shadow-sm"
                    : "text-gray-600 hover:text-charcoal"
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
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-fade-up"
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
                <h3 className="text-xl font-inter font-semibold text-charcoal mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-inter font-semibold text-charcoal mb-4">
              R Programming Blog
            </h3>
            <p className="text-gray-700 mb-6">
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

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-inter font-semibold text-charcoal mb-4">
              Python Data Science Blog
            </h3>
            <p className="text-gray-700 mb-6">
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
