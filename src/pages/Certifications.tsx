import { ExternalLink, Award } from "lucide-react";
import { useEffect } from "react";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  link: string;
  icon: string;
  skills: string[];
  image?: string;
}

const Certifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications: Certification[] = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google via Coursera",
      description: "Comprehensive program covering data analysis fundamentals, data cleaning, visualization, and R programming for analytics.",
      link: "https://coursera.org/verify/professional-cert/S8VZ79DVEXP7",
      icon: "📃",
      skills: ["Data Analysis", "R Programming", "Data Visualization", "SQL", "Tableau"],
      image: "https://ajay333a.quarto.pub/ajay-shankar-a/certificates/coursera_cert.png"
    },
    {
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      description: "Demonstrates proficiency in basic SQL operations, queries, and database management fundamentals.",
      link: "https://www.hackerrank.com/certificates/b177fc5d7a63",
      icon: "🪪",
      skills: ["SQL Queries", "Database Design", "Data Retrieval", "Basic Joins"],
      image: "/ajay_portfolio_site/sql_basic certificate.png"
    },
    {
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      description: "Advanced SQL skills including complex joins, subqueries, window functions, and performance optimization.",
      link: "https://www.hackerrank.com/certificates/838f70322a1d",
      icon: "📄",
      skills: ["Complex Queries", "Window Functions", "Subqueries", "Query Optimization"],
      image: "/ajay_portfolio_site/sql_intermediate_certificate.png"
    },
    {
      title:"OdinSchool Data Science Bootcamp",
      issuer: "OdinSchool",
      description: "Intensive bootcamp covering data science fundamentals, including Python, data manipulation, machine learning, and data visualization.",
      link: "https://go.odinschool.com/verify-certificate",
      icon: "🎓",
      skills: ["Python", "Advanced SQL", "Power BI", "Statistics"],
      image: "/ajay_portfolio_site/odin_cert.png"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-card-foreground mb-6">
            Certifications
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-4">
            Certifications that reflect continuous learning and rigor
          </p>
          <p className="text-lg text-muted-foreground">
            Professional credentials validating expertise in data analytics and SQL
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl shadow-lg p-8 card-hover animate-fade-up w-full"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-12">
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.title + ' certificate'}
                      className="w-64 h-64 object-contain rounded-lg border border-border shadow-md"
                      loading="lazy"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-inter font-semibold text-card-foreground mb-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-3">
                          <Award size={18} className="text-primary" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                      </div>
                      
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2 flex-shrink-0"
                      >
                        <ExternalLink size={16} />
                        View Certificate
                      </a>
                    </div>

                    <p className="text-foreground mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 animate-fade-up">
          <div className="bg-gradient-to-r from-accent to-muted rounded-xl p-8 text-center">
            <h3 className="text-2xl font-inter font-semibold text-card-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-foreground max-w-2xl mx-auto mb-6">
              These certifications represent a commitment to staying current with industry standards 
              and best practices in data analytics. Each credential validates practical skills 
              applied in real-world projects.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card border border-border p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Professional Certifications</div>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Validated Skills</div>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
