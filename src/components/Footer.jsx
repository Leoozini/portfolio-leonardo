// app/frontend/src/components/Footer.js

import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Leonardo</h3>
            <p className="text-slate-300 leading-relaxed">
              Data Analysis & Finance Professional<br />
              Transforming data into insights
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-slate-300 mb-4">
              Ready to discuss your next data project?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">
            © {currentYear} Leonardo. All rights reserved.
          </p>
          <p className="text-slate-300 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-400" /> for data enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
