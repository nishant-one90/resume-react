import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-apple-gray border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-apple-subtext text-sm">
          &copy; {currentYear} Nishant Anand. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="mailto:y2knishant@gmail.com" 
            className="text-apple-subtext hover:text-apple-dark transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/y2knishant" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-apple-subtext hover:text-apple-dark transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/nishant-one90" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-apple-subtext hover:text-apple-dark transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
