import React from "react";
import { GraduationCap, TrendingUp, Code, Database } from "lucide-react";

const About = ({ data }) => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Economics Student",
      desc: "Strong foundation in economic principles and analysis",
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      desc: "Experience in data-driven business decision making",
    },
    {
      icon: Code,
      title: "Programming",
      desc: "Learning Python, SQL, and R for advanced analytics",
    },
    {
      icon: Database,
      title: "Data Visualization",
      desc: "Proficient in Power BI and Excel for insights",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio e interesses */}
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {data.bio}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {data.goals}
            </p>

            <div className="flex flex-wrap gap-4">
              {data.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Destaques com ícones */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300"
              >
                <item.icon className="text-slate-900 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
