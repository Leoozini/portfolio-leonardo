import React, { useState } from "react";
import { Code2, Download, Eye, Github } from "lucide-react";

const CodeCard = ({ code }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900">{code.title}</h3>
          <div className="flex items-center space-x-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                code.language === 'Python' ? 'bg-green-100 text-green-800' :
                code.language === 'SQL' ? 'bg-blue-100 text-blue-800' :
                code.language === 'R' ? 'bg-purple-100 text-purple-800' :
                'bg-slate-100 text-slate-800'
              }`}
            >
              {code.language}
            </span>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4 leading-relaxed">
          {code.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {code.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {showPreview && (
          <div className="mb-4 p-4 bg-slate-900 rounded-lg overflow-hidden">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{code.preview}</code>
            </pre>
          </div>
        )}
        
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowPreview(!showPreview)}
            className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm"
          >
            <Eye size={16} className="mr-2" />
            {showPreview ? 'Hide' : 'Preview'}
          </button>
          <button className="inline-flex items-center px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors text-sm">
            <Download size={16} className="mr-2" />
            Download
          </button>
          <button className="inline-flex items-center px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors text-sm">
            <Github size={16} className="mr-2" />
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

const CodeRepository = ({ data }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  
  const languages = ["all", "Python", "SQL", "R"];

  const filteredCodes = selectedLanguage === "all" 
    ? data.codes 
    : data.codes.filter(code => code.language === selectedLanguage);

  return (
    <section id="code" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Code Repository
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Scripts and code snippets for data analysis and financial modeling
          </p>
        </div>

        {/* Language Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedLanguage === language
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Code2 size={16} className="inline mr-2" />
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </button>
          ))}
        </div>

        {/* Code Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCodes.map((code) => (
            <CodeCard key={code.id} code={code} />
          ))}
        </div>

        {filteredCodes.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <Code2 size={64} className="mx-auto text-slate-400 mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              More Code Coming Soon
            </h3>
            <p className="text-slate-600">
              I'm continuously working on new scripts and analysis tools. Check back soon for updates!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CodeRepository;
