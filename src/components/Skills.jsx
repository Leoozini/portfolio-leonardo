import React from "react";

// Componente de barra de habilidade
const SkillBar = ({ skill, level, color = "slate" }) => {
  const colorClasses = {
    slate: "bg-slate-900",
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-slate-900">{skill}</h3>
        <span className="text-slate-600 font-medium">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-1000 ease-out ${colorClasses[color]}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

// Componente principal
const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My technical skills and areas of expertise in data analysis and finance
          </p>
        </div>

        {/* Habilidades técnicas e ferramentas */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {data.technical.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Tools & Software */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Tools & Software
            </h3>
            <div className="space-y-6">
              {data.tools.map((tool, index) => (
                <SkillBar
                  key={index}
                  skill={tool.name}
                  level={tool.level}
                  color={tool.color}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Professional Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.soft.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {skill.level}%
                </div>
                <div className="text-slate-700 font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;