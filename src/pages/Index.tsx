import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  GraduationCap,
  Code2,
  Briefcase,
  FolderOpen,
  Award,
  BookOpen,
  Mail,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Database,
  BarChart3,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { personalInfo, projectsData, certificationsData, skillCategories } from "@/data/portfolioData";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="min-h-screen glow-mesh">
      {/* Hero Section */}
      <section className="section-container !pt-6 !pb-6 sm:!pt-10 sm:!pb-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-up">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Google Certified Data Analyst & ML Specialist
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Turning raw data into{" "}
              <span className="text-gradient">strategic clarity</span> & predictive insights.
            </h1>

            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hi, I'm <strong className="text-foreground font-semibold">{personalInfo.name}</strong>. 
              Data Analyst with a Master's degree in Forest Biology and hands-on expertise in{" "}
              <span className="text-foreground font-medium">Python, Machine Learning (Scikit-Learn, SciPy), R, SQL, and Power BI</span>. 
              I specialize in large-scale data analytics, predictive modeling, and converting complex metrics into compelling narratives.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link to="/projects" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={18} className="text-primary" />
                <span>Resume (PDF)</span>
              </a>
              <Link to="/contact" className="btn-ghost">
                <Mail size={18} />
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Quick Skills Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground uppercase tracking-wider text-[11px] mr-1">
                Core Stack:
              </span>
              {[
                "Machine Learning",
                "Scikit-Learn",
                "SciPy",
                "Python",
                "R Programming",
                "SQL",
                "Power BI",
                "Statistical Modeling"
              ].map((tag) => (
                <span key={tag} className="badge-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 animate-fade-in flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing Background Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-rose-500/30 via-red-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-70 dark:opacity-40"></div>
              
              <div className="relative glass-panel p-3 overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-80 sm:h-96 object-cover object-top rounded-2xl"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Floating Banner Over Image - Google Certified */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card/90 dark:bg-card/95 backdrop-blur-md border border-border/80 shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Award size={22} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
                          Google Certified
                        </p>
                        <p className="text-xs sm:text-sm font-extrabold text-foreground leading-snug">
                          Data Analytics Professional
                        </p>
                      </div>
                    </div>
                    <span className="badge-glow text-[11px]">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-container !pt-4 !pb-12 sm:!pt-6 sm:!pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="badge-glow mb-3">
              <FolderOpen size={14} />
              <span>Real-World Analytics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              Practical analytics projects demonstrating big-data wrangling, relational databases, and biostatistics.
            </p>
          </div>
          <Link to="/projects" className="btn-secondary self-start md:self-auto">
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {featuredProjects.length === 0 ? (
          <div className="glass-panel p-12 text-center max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto mb-4">
              <FolderOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Fresh Projects Being Uploaded
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              New project case studies, analyses, and repositories are currently being updated.
            </p>
            <Link to="/contact" className="btn-secondary !py-2 !px-4 text-xs">
              <span>Get In Touch</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300"
              >
              {/* Project Image */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-background/90 dark:bg-background/90 text-foreground backdrop-blur-md border border-border shadow-sm">
                    {project.categories ? project.categories.join(" & ") : project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-600/90 text-white backdrop-blur-md shadow-sm">
                    {project.dataSize}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-rose-600 dark:text-rose-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-foreground/80">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-rose-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tools.slice(0, 4).map((tool, tIdx) => (
                      <span key={tIdx} className="badge-tag">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                    >
                      <span>Read Case Study</span>
                      <ExternalLink size={14} />
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground font-medium"
                      >
                        GitHub Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </section>

      {/* Sitemapped Portfolio Exploration Grid */}
      <section className="section-container !pt-8">
        <div className="text-center mb-12">
          <div className="badge-glow mb-3">
            <Sparkles size={14} />
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Explore My Expertise
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Deep dive into certifications, machine learning skills, practical work experience, academic milestones, and technical tutorials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Projects Card */}
          <Link
            to="/projects"
            className="glass-card-hover p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                <FolderOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Projects Portfolio
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Explore real-world big data analysis in R, Python, and SQL queries with deep statistical modeling.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary">
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Certifications Card */}
          <Link
            to="/certifications"
            className="glass-card-hover p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Certifications
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Google Data Analytics, OdinSchool Data Science, and HackerRank verified credentials.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary">
              <span>View Certifications</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Skills Card */}
          <Link
            to="/skills"
            className="glass-card-hover p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Skills & ML Toolkit
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Machine Learning (Scikit-Learn, SciPy), Python, R, SQL, Power BI, and statistical modeling.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary">
              <span>Explore Skills</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Experience Card */}
          <Link
            to="/experience"
            className="glass-card-hover p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Experience & Impact
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                EMPRI policy research analyzing 500+ artisans and MGNREGA program administration delivering 1.2L person-days.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary">
              <span>Read Experience</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Education Card */}
          <Link
            to="/education"
            className="glass-card-hover p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Education & Research
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                MSc in Forest Biology (CGPA 8.61) and BSc in Forestry from University of Agricultural Sciences, Dharwad.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary">
              <span>View Education</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Blog Card */}
          <Link
            to="/blog"
            className="glass-card-hover p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Projects & Quarto Hubs
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Technical project case studies in R, Python notebook tutorials, and statistical modeling walkthroughs.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary">
              <span>View Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section-container !pb-20">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center bg-gradient-to-r from-rose-950/40 via-red-950/30 to-slate-900/40 border border-rose-500/30 backdrop-blur-xl shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Ready to collaborate on data & machine learning projects?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Whether you need statistical analysis, machine learning pipelines, or executive dashboard intelligence, I am ready to help transform your data.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/contact" className="btn-primary">
                <Mail size={18} />
                <span>Start a Conversation</span>
              </Link>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
