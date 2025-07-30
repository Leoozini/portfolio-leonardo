import React, { useState } from "react";
import { ExternalLink, Calendar, Tag } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <div className="text-slate-500 text-sm">Power BI Dashboard Preview</div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
          <div className="flex items-center text-slate-500 text-sm">
            <Calendar size={16} className="mr-1" />
            {project.date}
          </div>
        </div>
        
        <p className="text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
            >
              <Tag size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm">
            <ExternalLink size={16} className="mr-2" />
            View Project
          </button>
          <button className="inline-flex items-center px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ data }) => {
  const [filter, setFilter] = useState("all");
  
  const categories = ["all", "Power BI", "Excel", "Analysis"];

  const filteredProjects = filter === "all" 
    ? data.projects 
    : data.projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my data analysis and visualization projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;