import { useState, useEffect } from "react";
import { Code, Database, BarChart3, Wrench } from "lucide-react";

interface Skill {
  name: string;
  category: string;
  icon?: string;
  description: string;
}

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        { name: "Machine Learning", category: "Extras", description: "Predictive and Classification models" },
        { name: "Git", category: "Extras", description: "Version control and collaborative development" },
        { name: "Storytelling", category: "Extras", description: "Data-driven narrative and presentation skills" },
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
          <p className="text-xl font-inter max-w-3xl mx-auto">
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
              <div className="bg-card border border-border rounded-xl shadow-lg p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-inter font-semibold text-charcoal border-b-2 border-primary pb-1">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="">
                      <div className="">
                        <div className="text-left">
                          <span className="block font-medium text-card-foreground text-base mb-1">
                            {skill.name}
                          </span>
                          <span className="block text-muted-foreground text-sm leading-snug">
                            {skill.description}
                          </span>
                        </div>
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
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-inter font-semibold text-card-foreground mb-4">
              Ready to see these skills in action?
            </h3>
            <p className="text-foreground mb-6">
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
