
import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  toolsUsed: string[];
  impactMetrics: string[];
}

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const experienceData: ExperienceItem[] = [
    {
      title: "Technical Assistant",
      company: "Zilla Panchayath Ballari",
      location: "Ballari, Karnataka",
      duration: "Nov 2022 – Present",
      description: "Leading MGNREGA program implementation with data-driven decision making. Delivered 1.2 lakh person-days through efficient resource allocation and automated reporting systems.",
      toolsUsed: ["Excel", "SQL", "Data Analysis", "Report Automation", "Process Optimization"],
      impactMetrics: [
        "Delivered 1.2 lakh person-days through MGNREGA",
        "Automated reporting reduced processing time by 60%",
        "Improved resource allocation efficiency by 40%",
        "Streamlined administrative processes for 50+ villages"
      ]
    },
    {
      title: "Research Associate",
      company: "Environmental Management & Policy Research Institute (EMPRI)",
      location: "Bangalore, Karnataka",
      duration: "May 2022 – Aug 2022",
      description: "Conducted comprehensive survey and analysis of 500 artisans across Karnataka. Developed data-driven insights that influenced state-level policy decisions for artisan welfare programs.",
      toolsUsed: ["R", "Statistical Analysis", "Survey Design", "Data Visualization", "Policy Research"],
      impactMetrics: [
        "Surveyed 500+ artisans across multiple districts",
        "Generated insights that influenced policy decisions",
        "Created comprehensive analytical reports",
        "Presented findings to state government officials"
      ]
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-charcoal mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical experience in data analysis, program management, and policy research
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>

            {experienceData.map((item, index) => (
              <div key={index} className="relative mb-12 animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-teal rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-20">
                  <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Briefcase className="text-teal" size={24} />
                        <div>
                          <h3 className="text-xl font-inter font-semibold text-charcoal">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 font-medium">{item.company}</p>
                          <div className="flex items-center gap-1 text-gray-500 mt-1">
                            <MapPin size={16} />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">{item.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <button
                      onClick={() => toggleExpansion(index)}
                      className="flex items-center gap-2 text-teal font-medium hover:text-teal-700 transition-colors"
                    >
                      {expandedItem === index ? (
                        <>
                          <ChevronUp size={20} />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown size={20} />
                          Show Tools Used & Impact
                        </>
                      )}
                    </button>

                    {expandedItem === index && (
                      <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-charcoal mb-3">Tools Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.toolsUsed.map((tool, idx) => (
                                <span
                                  key={idx}
                                  className="bg-teal-50 text-teal px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-charcoal mb-3">Impact Metrics:</h4>
                            <ul className="space-y-2">
                              {item.impactMetrics.map((metric, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm">{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
