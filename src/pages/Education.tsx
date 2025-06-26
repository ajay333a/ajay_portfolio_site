
import { useState } from "react";
import { ChevronDown, ChevronUp, GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  highlights: string[];
  thesis?: string;
  tools?: string[];
}

const Education = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const educationData: EducationItem[] = [
    {
      degree: "MSc in Forest Biology and Tree Improvement",
      institution: "University of Agricultural Sciences, Bangalore",
      duration: "Sept 2019 – Jan 2023",
      cgpa: "8.61",
      highlights: [
        "Research in ecological data modeling",
        "Tree improvement analytics",
        "Advanced statistical analysis",
        "Climate data interpretation"
      ],
      thesis: "Genetic diversity analysis of forest species using molecular markers",
      tools: ["R", "SPSS", "Excel", "GIS", "Statistical Modeling"]
    },
    {
      degree: "BSc in Forestry",
      institution: "University of Agricultural Sciences, Bangalore",
      duration: "Aug 2015 – Apr 2019",
      cgpa: "8.14",
      highlights: [
        "GIS and remote sensing",
        "Climate data analysis",
        "Natural resource analysis",
        "Forest inventory management"
      ],
      thesis: "Forest cover change detection using satellite imagery",
      tools: ["ArcGIS", "ERDAS Imagine", "Excel", "SQL", "R Programming"]
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
            Educational Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A strong foundation in forest biology and analytics, 
            building expertise in data science and ecological modeling
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>

            {educationData.map((item, index) => (
              <div key={index} className="relative mb-12 animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-teal rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-20">
                  <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-teal" size={24} />
                        <div>
                          <h3 className="text-xl font-inter font-semibold text-charcoal">
                            {item.degree}
                          </h3>
                          <p className="text-gray-600 font-medium">{item.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-gray-500 mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{item.duration}</span>
                        </div>
                        <div className="bg-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                          CGPA: {item.cgpa}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal rounded-full"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpansion(index)}
                      className="flex items-center gap-2 text-teal font-medium hover:text-teal-700 transition-colors"
                    >
                      {expandedItem === index ? (
                        <>
                          <ChevronUp size={20} />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={20} />
                          Show More Details
                        </>
                      )}
                    </button>

                    {expandedItem === index && (
                      <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                        {item.thesis && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-charcoal mb-2">Thesis:</h4>
                            <p className="text-gray-700 italic">{item.thesis}</p>
                          </div>
                        )}
                        {item.tools && (
                          <div>
                            <h4 className="font-semibold text-charcoal mb-2">Tools & Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.tools.map((tool, idx) => (
                                <span
                                  key={idx}
                                  className="bg-teal-50 text-teal px-3 py-1 rounded-full text-sm font-medium"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
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

export default Education;
