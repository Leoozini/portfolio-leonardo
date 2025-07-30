import React from "react";
import { ChevronDown, Download } from "lucide-react";

const Hero = ({ data }) => {
  const handleDownloadCV = () => {
    // Isso será conectado ao backend futuramente
    console.log("Downloading CV...");
  };

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            {data.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-700 mb-8 font-medium">
            {data.title}
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 font-medium"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </button>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 font-medium"
            >
              Get in Touch
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="text-slate-600 hover:text-slate-900 transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
