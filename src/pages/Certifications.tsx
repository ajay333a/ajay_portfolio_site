
import { ExternalLink, Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  description: string;
  link: string;
  icon: string;
  skills: string[];
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google via Coursera",
      description: "Comprehensive program covering data analysis fundamentals, data cleaning, visualization, and R programming for analytics.",
      link: "https://coursera.org/verify/professional-cert/S8VZ79DVEXP7",
      icon: "🏆",
      skills: ["Data Analysis", "R Programming", "Data Visualization", "SQL", "Tableau"]
    },
    {
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      description: "Demonstrates proficiency in basic SQL operations, queries, and database management fundamentals.",
      link: "https://www.hackerrank.com/certificates/b177fc5d7a63",
      icon: "📊",
      skills: ["SQL Queries", "Database Design", "Data Retrieval", "Basic Joins"]
    },
    {
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      description: "Advanced SQL skills including complex joins, subqueries, window functions, and performance optimization.",
      link: "https://www.hackerrank.com/certificates/838f70322a1d",
      icon: "🔧",
      skills: ["Complex Queries", "Window Functions", "Subqueries", "Query Optimization"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-charcoal mb-6">
            Certifications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Certifications that reflect continuous learning and rigor
          </p>
          <p className="text-lg text-gray-500">
            Professional credentials validating expertise in data analytics and SQL
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 card-hover animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{cert.icon}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-inter font-semibold text-charcoal mb-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <Award size={18} className="text-teal" />
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

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-charcoal mb-3">Skills Validated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-teal-50 text-teal px-3 py-1 rounded-full text-sm font-medium"
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
          <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-inter font-semibold text-charcoal mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              These certifications represent a commitment to staying current with industry standards 
              and best practices in data analytics. Each credential validates practical skills 
              applied in real-world projects.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-teal mb-1">3</div>
                <div className="text-sm text-gray-600">Professional Certifications</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-teal mb-1">15+</div>
                <div className="text-sm text-gray-600">Validated Skills</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-teal mb-1">100%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
