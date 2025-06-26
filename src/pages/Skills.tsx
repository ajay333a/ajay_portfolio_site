
import { useState } from "react";
import { Code, Database, BarChart3, Wrench } from "lucide-react";

interface Skill {
  name: string;
  category: string;
  icon?: string;
  description: string;
}

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-teal" size={24} />,
      skills: [
        { name: "Python", category: "Languages", description: "Data analysis, pandas, NumPy, scikit-learn" },
        { name: "R", category: "Languages", description: "Statistical analysis, ggplot2, dplyr, tidyverse" },
        { name: "SQL", category: "Languages", description: "Database queries, joins, data manipulation" },
        { name: "Bash", category: "Languages", description: "Command line automation and scripting" }
      ]
    },
    {
      title: "Data Analysis & Libraries",
      icon: <Database className="text-teal" size={24} />,
      skills: [
        { name: "Pandas", category: "Data", description: "Data manipulation and analysis in Python" },
        { name: "NumPy", category: "Data", description: "Numerical computing and array operations" },
        { name: "ggplot2", category: "Data", description: "Advanced data visualization in R" },
        { name: "dplyr", category: "Data", description: "Data transformation and manipulation in R" }
      ]
    },
    {
      title: "Visualization Tools",
      icon: <BarChart3 className="text-teal" size={24} />,
      skills: [
        { name: "Power BI", category: "Viz", description: "Interactive dashboards and business intelligence" },
        { name: "Tableau", category: "Viz", description: "Advanced data visualization and storytelling" },
        { name: "Excel", category: "Viz", description: "Pivot tables, advanced formulas, data analysis" },
        { name: "Matplotlib", category: "Viz", description: "Python plotting and visualization library" }
      ]
    },
    {
      title: "Additional Tools",
      icon: <Wrench className="text-teal" size={24} />,
      skills: [
        { name: "Git", category: "Extras", description: "Version control and collaborative development" },
        { name: "Storytelling", category: "Extras", description: "Data-driven narrative and presentation skills" },
        { name: "GIS", category: "Extras", description: "Geographic information systems and spatial analysis" },
        { name: "Statistical Modeling", category: "Extras", description: "Hypothesis testing and predictive modeling" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl lg:text-5xl font-inter font-bold text-charcoal mb-6">
            Skills & Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and storytelling
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-fade-up"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-inter font-semibold text-charcoal">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="bg-gray-50 hover:bg-teal-50 p-4 rounded-lg transition-all duration-200 cursor-pointer card-hover border-2 border-transparent hover:border-teal-200">
                        <div className="text-center">
                          <span className="font-medium text-charcoal">
                            {skill.name}
                          </span>
                        </div>

                        {/* Tooltip */}
                        {hoveredSkill === skill.name && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                            <div className="bg-charcoal text-white p-3 rounded-lg shadow-lg max-w-xs">
                              <p className="text-sm">{skill.description}</p>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                <div className="border-4 border-transparent border-t-charcoal"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-up">
          <div className="bg-teal-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-inter font-semibold text-charcoal mb-4">
              Ready to see these skills in action?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore my projects to see how I've applied these tools to solve real-world problems
            </p>
            <a href="/projects" className="btn-primary">
              View My Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
