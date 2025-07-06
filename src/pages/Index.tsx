import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, GraduationCap, Code, Briefcase, FolderOpen, Award, BookOpen, Mail } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container pt-8 pb-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl lg:text-6xl font-inter font-bold text-charcoal mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-teal">Ajay Shankar A</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Data Analyst passionate about insights, impact & storytelling
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-lg">
              Google Certified Data analyst with 3 years of experience in analytics,
               passionate about data analytics with a master’s degree in Forest Biology and Tree Improvement.
                Seeking opportunities where I can utilize my analytical and technical skills to solve real life data analytics problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                🔍 View My Projects
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://drive.google.com/file/d/1O35DyRH6l5BRobDWxh-J2GMq8cc1DRLo/view?usp=sharing" // Updated to actual resume link
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://ajay333a.quarto.pub/ajay-shankar-a/images/profile_image_index.jpg"
                alt="Ajay Shankar A"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Summary Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-4">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-inter font-bold text-charcoal dark:text-white mb-4">
              Explore My Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover my journey, skills, and work across different sections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/education" className="bg-card border border-border dark:bg-card p-6 rounded-xl shadow-lg card-hover group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <GraduationCap className="text-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-teal transition-colors">
                  Education
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                MSc in Forest Biology and BSc in Forestry with strong academic performance and research focus.
              </p>
              <div className="text-sm text-teal font-medium">CGPA: 8.61 • Research Experience</div>
            </Link>

            <Link to="/skills" className="bg-card border border-border dark:bg-card p-6 rounded-xl shadow-lg card-hover group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <Code className="text-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-teal transition-colors">
                  Skills & Tools
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Proficient in Python, R, SQL, Power BI, and modern data analysis frameworks.
              </p>
              <div className="text-sm text-teal font-medium">Python • R • SQL • Power BI</div>
            </Link>

            <Link to="/experience" className="bg-card border border-border dark:bg-card p-6 rounded-xl shadow-lg card-hover group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <Briefcase className="text-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-teal transition-colors">
                  Experience
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Technical Assistant delivering 1.2L person-days and research experience with 500+ surveys.
              </p>
              <div className="text-sm text-teal font-medium">MGNREGA • Policy Analytics</div>
            </Link>

            <Link to="/projects" className="bg-card border border-border dark:bg-card p-6 rounded-xl shadow-lg card-hover group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <FolderOpen className="text-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-teal transition-colors">
                  Projects
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Real-world analytics projects including 5M+ record bike share analysis and SQL music store queries.
              </p>
              <div className="text-sm text-teal font-medium">5M+ Records • Real Data</div>
            </Link>

            <Link to="/certifications" className="bg-card border border-border dark:bg-card p-6 rounded-xl shadow-lg card-hover group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <Award className="text-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-teal transition-colors">
                  Certifications
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Google Data Analytics Professional Certificate and HackerRank SQL certifications.
              </p>
              <div className="text-sm text-teal font-medium">Google Certified • SQL Expert</div>
            </Link>

            <Link to="/blog" className="bg-card border border-border dark:bg-card p-6 rounded-xl shadow-lg card-hover group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <BookOpen className="text-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-teal transition-colors">
                  Blog
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Technical blogs covering Python and R projects with detailed analysis and insights.
              </p>
              <div className="text-sm text-teal font-medium">Python Blog • R Projects</div>
            </Link>
          </div>

          <div className="text-center mt-6">
            <Link to="/contact" className="bg-card border border-border dark:bg-card p-6 rounded-xl shadow-lg card-hover inline-block group min-w-80">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <Mail className="text-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-teal transition-colors">
                  Get In Touch
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ready to collaborate? Let's discuss how data can drive your next big decision.
              </p>
              <div className="text-sm text-teal font-medium">Contact Form • LinkedIn • GitHub</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-background dark:bg-background py-4">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-inter font-bold text-charcoal dark:text-white mb-4">
              Quick Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A snapshot of my expertise and achievements in data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border dark:bg-card p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="text-4xl font-bold text-teal mb-2">5M+</div>
              <div className="text-lg font-semibold text-charcoal dark:text-white mb-2">Records Analyzed</div>
              <div className="text-gray-600 dark:text-gray-300">In bike share analysis project</div>
            </div>

            <div className="bg-card border border-border dark:bg-card p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="text-4xl font-bold text-teal mb-2">1.2L</div>
              <div className="text-lg font-semibold text-charcoal dark:text-white mb-2">Person-Days Delivered</div>
              <div className="text-gray-600 dark:text-gray-300">Through MGNREGA program management</div>
            </div>

            <div className="bg-card border border-border dark:bg-card p-8 rounded-xl shadow-lg card-hover text-center">
              <div className="text-4xl font-bold text-teal mb-2">500+</div>
              <div className="text-lg font-semibold text-charcoal dark:text-white mb-2">Artisans Surveyed</div>
              <div className="text-gray-600 dark:text-gray-300">For policy decision analytics</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
