import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import CodeRepository from "./CodeRepository";
import Contact from "./Contact";
import Footer from "./Footer";
import { mockData } from "../data/mock";

const HomePage = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Simula chamada de API com dados mockados
    setPortfolioData(mockData);
  }, []);

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <CodeRepository data={portfolioData.codeRepository} />
      <Contact data={portfolioData.contact} />
      <Footer />
    </div>
  );
};

export default HomePage;
