import React from 'react';
import { Github, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <HelpCircle className="h-6 w-6 mr-2 text-indigo-400" />
            <span className="text-xl font-bold">What's This Code?</span>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/BBavoso/whats-this-code"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors p-2"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} What's This Code? All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
